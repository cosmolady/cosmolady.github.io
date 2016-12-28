$(function () {
    var color = new just.RandomColor();
    var rules = (function () {
        var startDate = $('.start-date');
        var finishDate = $('.finish-date');
        var statuses = $('.statuses input');
        var manufactures = $('.manufactures input');
        var types = $('.types input');

        function get() {
            return {
                startDate: new Date(startDate.val())
                , finishDate: new Date(finishDate.val())
                , statuses: getString(statuses)
                , manufactures: getString(manufactures)
                , types: getString(types)
            }
        }

        function update() {
            statuses = $('.statuses input');
            manufactures = $('.manufactures input');
            types = $('.types input');
        }

        function getString(checkboxes) {
            var result = "";
            checkboxes.each(function () {
                if ($(this).prop('checked')) {
                    result += $(this).prop('name') + ' ';
                }
            });
            return result;
        }
        return {
            get: get
            , update: update
        }
    })();
    init();
    
    function init() {
        $("#tabs").tabs();
        google.charts.load('current', {
            'packages': ['corechart', 'bar']
        });
        loadXLS("data/products.xlsx", productsDataHandler);
    }

    function loadXLS(url, handler, lineItems) {
        var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
        oReq.onload = function (e) {
            var arraybuffer = oReq.response
                , data = new Uint8Array(arraybuffer)
                , arr = new Array()
                , i, bstr;
            for (i = 0; i != data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            bstr = arr.join("");
            handler(XLSX.read(bstr, {
                type: "binary"
            }), lineItems);
        }
        oReq.send();
    }

    function productsDataHandler(data) {
        var lineItems = lineItemsToObj(data);
        loadXLS("data/orders.xlsx", ordersDataHandler, lineItems);
        addDropListeners(lineItems);
    }

    function addDropListeners(lineItems) {
        var drop = document.getElementById('drop');

        function handleDrop(e) {
            e.stopPropagation();
            e.preventDefault();
            var files = e.dataTransfer.files;
            var f = files[0];
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function (e) {
                console.log("onload", new Date());
                var arraybuffer = e.target.result
                    , data = new Uint8Array(arraybuffer)
                    , arr = new Array()
                    , i
                    , bstr;
                for (i = 0; i != data.length; ++i) {
                    arr[i] = String.fromCharCode(data[i]);
                }
                bstr = arr.join("");
                var wb = XLSX.read(bstr, {
                    type: 'binary'
                });
                $('.statuses').empty();
                $('.manufactures').empty();
                $('.types').empty();
                ordersDataHandler(wb, lineItems);
            };
            reader.readAsArrayBuffer(f);
        }

        function handleDragover(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }
        if (drop.addEventListener) {
            drop.addEventListener('dragenter', handleDragover, false);
            drop.addEventListener('dragover', handleDragover, false);
            drop.addEventListener('drop', handleDrop, false);
        }
        var xlf = document.getElementById('xlf');

        function handleFile(e) {
            var files = e.target.files;
            var f = files[0];
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function (e) {
                console.log("onload", new Date());
                var arraybuffer = e.target.result
                    , data = new Uint8Array(arraybuffer)
                    , arr = new Array()
                    , i
                    , bstr;
                for (i = 0; i != data.length; ++i) {
                    arr[i] = String.fromCharCode(data[i]);
                }
                bstr = arr.join("");
                var wb = XLSX.read(bstr, {
                    type: 'binary'
                });
                $('.statuses').empty();
                $('.manufactures').empty();
                $('.types').empty();
                console.log(wb);
                ordersDataHandler(wb, lineItems);
            }
        }
        //if (xlf.addEventListener) xlf.addEventListener('change', handleFile, false);
    }

    function lineItemsToObj(workbook) {
        var sheetNames = workbook.SheetNames[0]
            , sheet = workbook.Sheets[sheetNames]
            , maxRow = /\d+/.exec(sheet['!ref'].split(':')[1])[0]
            , codeColumn = 'A'
            , manufacturerColumn = 'X'
            , modelColumn = 'AT'
            , markColumn = 'AW'
            , items = {}
            , item, index, code;
        for (index = 2; index <= maxRow; index++) {
            if (sheet[markColumn + index]) {
                item = {};
                code = sheet[codeColumn + index].v;
                item.manufacturer = sheet[manufacturerColumn + index].v;
                item.model = sheet[modelColumn + index].v;
                item.mark = sheet[markColumn + index].v;
                item.type = getType(code);
                items[code] = item;
            }
        }
        return items;
    }

    function getType(code) {
        var typeCode = code.split('-')[2];
        switch (typeCode) {
        case 'FL':
            return 'Водительский';
        case '2F':
            return 'Передние';
        case 'TR':
            return 'Багажник';
        default:
            return 'Комплект';
        }
    }

    function ordersDataHandler(data, lineItems) {
        var orders = ordersToArray(data, lineItems)
            , calcOrders = calc(orders, true);
        addElementsToPage(calcOrders);
        drawCharts(calcOrders);
        rules.update();
        $('.refres-settings').on('click', function () {
            var calcOrders = calc(orders);
            drawCharts(calcOrders);
        });
    }

    function drawCharts(orders) {
        drawChartsByTime(orders);
        drawChartsByCites(orders, 2);
        drawChartsByMarksAndModels(orders);
    }

    function drawChartsByMarksAndModels(orders) {
        var parent = $('#marks');
        drawChartsByMarks(orders.marks, parent);
        drawChartsByModels(orders.models, parent);
    }

    function drawChartsByModels(models, parent) {
        var data = [['', 'Кол-во покупок', {
                role: 'style'
            }]]
            , index, count = 0;
        for (index in models) {
            data.push([index, models[index], color.refresh().toHex().toCSS()]);
            count++;
        }
        drawBarChart(data, 'По моделям', parent, 'chart-by-models', count * 50);
    }

    function drawChartsByMarks(marks, parent) {
        var data = [['Марка', 'Кол-во покупок', {
                role: 'style'
                        }]]
            , color = new just.RandomColor()
            , index, count = 0;
        for (index in marks) {
            data.push([index, marks[index], color.refresh().toHex().toCSS()]);
            count++;
        }
        drawBarChart(data, 'По маркам', parent, 'chart-by-marks', count * 50);
    }

    function drawChartsByCites(orders, minCount) {
        var parent = $('#city')
            , cites = orders.addresses;
        var data = [['Город', 'Кол-во покупок', {
            role: 'style'
                }]];
        var index;
        var otherCount = 0;
        var count = 0;
        for (index in cites) {
            if (cites[index] < minCount) {
                otherCount += cites[index];
            }
            else {
                data.push([index, cites[index], color.refresh().toHex().toCSS()]);
                count++;
            }
        }
        data.push(['<' + minCount, otherCount, color.refresh().toHex().toCSS()]);
        drawBarChart(data, 'По городам', parent, 'chart-by-cites', (count + 1) * 50);
    }

    function drawChartsByTime(orders) {
        var parent = $('#time');
        drawChartByHours(orders.hours, parent);
        drawChartByDaysOfWeek(orders.daysOfWeek, parent);
        drawChartByDaysOfMonth(orders.daysOfMounth, parent);
        drawChartForHoursAndDaysOfWeek(orders.hoursAndDaysOfWeek, parent)
    }

    function drawChartForHoursAndDaysOfWeek(hoursAndDaysOfWeek, parent) {
        hoursAndDaysOfWeek.push(hoursAndDaysOfWeek.shift());
        var calc = [['ID', 'Время', 'Дни недели', '', 'Количество заказов']]
            , indexX, indexY, id = 'chart-by-hours-and-days-of-week';
        for (indexX in hoursAndDaysOfWeek) {
            color.refresh();
            for (indexY in hoursAndDaysOfWeek[indexX]) {
                if (hoursAndDaysOfWeek[indexX][indexY]) {
                    calc.push([''
                                   , parseInt(indexY, 10)
                                   , parseInt(indexX, 10) + 1
                                   , color.toHex().toCSS()
                                   , hoursAndDaysOfWeek[indexX][indexY]]);
                }
            }
        }
        google.charts.setOnLoadCallback(function () {
            var data = google.visualization.arrayToDataTable(calc);
            var options = {
                title: 'По дням недели и по времени'
                , hAxis: {
                    title: 'Время'
                }
                , vAxis: {
                    title: 'Дни недели'
                    , ticks: [{
                        v: 0
                        , f: ''
                        }, {
                        v: 1
                        , f: 'Понедельник'
                        }, {
                        v: 2
                        , f: 'Вторник'
                        }, {
                        v: 3
                        , f: 'Среда'
                        }, {
                        v: 4
                        , f: 'Четверг'
                        }, {
                        v: 5
                        , f: 'Пятница'
                        }, {
                        v: 6
                        , f: 'Суббота'
                        }, {
                        v: 7
                        , f: 'Воскресенье'
                        }, {
                        v: 8
                        , f: '0'
                        }]
                }
            };
            parent.append('<div id="' + id + '" style="width: 1600px; height: 1000px;"/>')
            var chart = new google.visualization.BubbleChart(document.getElementById(id));
            chart.draw(data, options);
        });
    }

    function drawChartByDaysOfMonth(daysOfMounth, parent) {
        var data = [['День', 'Кол-во покупок', {
                role: 'style'
                }]]
            , index;
        for (index in daysOfMounth) {
            data.push([index, daysOfMounth[index], color.refresh().toHex().toCSS()]);
        }
        drawColumnChart(data, 'По дням месяца', parent, 'chart-by-days-of-month');
    }

    function drawChartByDaysOfWeek(daysOfWeek, parent) {
        daysOfWeek.push(daysOfWeek.shift());
        var data = [
                                        ['День', 'Кол-во покупок', {
                role: 'style'
                                        }]
                                        , ['Понедельник', daysOfWeek[0], 'color: #76A']
                                        , ['Вторник', daysOfWeek[1], 'color: #7FA']
                                        , ['Среда', daysOfWeek[2], 'color: #6A7']
                                        , ['Четверг', daysOfWeek[3], 'color: #A7F']
                                        , ['Пятница', daysOfWeek[4], 'color: #0AA']
                                        , ['Суббота', daysOfWeek[5], 'color: #A0F']
                                        , ['Воскресенье', daysOfWeek[6], 'color: №76A7FA']
                    ];
        drawColumnChart(data, 'По дням недели', parent, 'chart-by-day-of-week');
    }

    function drawChartByHours(hours, parent) {
        var calcHours = [['Часы', 'Кол-во покупок', {
                role: 'style'
                }]]
            , index;
        for (index in hours) {
            calcHours.push([index, hours[index], color.refresh().toHex().toCSS()]);
        }
        drawColumnChart(calcHours, 'По часам', parent, 'chart-by-time');
    }

    function drawBarChart(calcData, title, parent, id, height) {
        google.charts.setOnLoadCallback(function () {
            var data = google.visualization.arrayToDataTable(calcData);
            var view = new google.visualization.DataView(data);
            view.setColumns([0
                             , 1
                , {
                    calc: "stringify"
                    , sourceColumn: 1
                    , type: "string"
                    , role: "annotation"
                             }


                
                , 2
            ]);
            var options = {
                title: title
                , width: 1200
                , height: height || 2000
                , bar: {
                    groupWidth: "95%"
                }
                , legend: {
                    position: "none"
                }
            , };
            parent.append('<div id="' + id + '"/>')
            var chart = new google.visualization.BarChart(document.getElementById(id));
            chart.draw(data, options);
        });
    }

    function drawColumnChart(calcData, title, parent, id) {
        google.charts.setOnLoadCallback(function () {
            var data = google.visualization.arrayToDataTable(calcData);
            var view = new google.visualization.DataView(data);
            view.setColumns([0
                             , 1
                , {
                    calc: "stringify"
                    , sourceColumn: 1
                    , type: "string"
                    , role: "annotation"
                             }


                
                , 2
            ]);
            var options = {
                title: title
                , width: 1600
                , height: 500
                , bar: {
                    groupWidth: "95%"
                }
                , legend: {
                    position: "none"
                }
            , };
            parent.append('<div id="' + id + '"/>')
            var chart = new google.visualization.ColumnChart(document.getElementById(id));
            chart.draw(data, options);
        });
    }

    function addElementsToPage(data) {
        addStatusesCheckBoxes(data.statuses);
        addStartAndFinishLimit(data.dates);
        addManufacturesCheckBoxes(data.manufactures);
        addTypesCheckBoxes(data.types);
    }

    function addTypesCheckBoxes(types) {
        var checkboxes = $('.types')
            , index;
        for (index in types) {
            checkboxes.append('<input type="checkbox" name="' + index + '" value="' + types[index] + '" checked>' + index + ' (' + types[index] + ')' + '<br>');
        }
    }

    function addManufacturesCheckBoxes(manufactures) {
        var checkboxes = $('.manufactures')
            , index;
        for (index in manufactures) {
            checkboxes.append('<input type="checkbox" name="' + index + '" value="' + manufactures[index] + '" checked>' + index + ' (' + manufactures[index] + ')' + '<br>');
        }
    }

    function addStartAndFinishLimit(dates) {
        var firstDate = dates[0]
            , finishDate = dates[dates.length - 1]
            , firstDateInput = $('.start-date')
            , finishDateInput = $('.finish-date');
        firstDateInput.val(formateDate(firstDate));
        firstDateInput.prop('min', formateDate(firstDate));
        firstDateInput.prop('max', formateDate(finishDate));
        finishDateInput.val(formateDate(finishDate));
        finishDateInput.prop('min', formateDate(firstDate));
        finishDateInput.prop('max', formateDate(finishDate));
        finishDateInput.on('change', function () {
            firstDateInput.prop('max', this.value);
            if (firstDateInput.val() > this.value) {
                firstDateInput.val(this.value);
            }
        });
        firstDateInput.on('change', function () {
            finishDateInput.prop('min', this.value);
            if (finishDateInput.val() < this.value) {
                finishDateInput.val(this.value);
            }
        });
    }

    function formateDate(date) {
        return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    }

    function addStatusesCheckBoxes(statuses) {
        var checkboxes = $('.statuses')
            , index;
        for (index in statuses) {
            checkboxes.append('<input type="checkbox" name="' + index + '" value="' + statuses[index] + '" checked>' + index + ' (' + statuses[index] + ')' + '<br>');
        }
    }

    function ordersToArray(workbook, lineItems) {
        var sheetNames = workbook.SheetNames[0]
            , sheet = workbook.Sheets[sheetNames]
            , maxRow = /\d+/.exec(sheet['!ref'].split(':')[1])[0]
            , dateColumn = 'B'
            , adressColumn = 'G'
            , statusColumn = 'J'
            , articleColumn = 'K'
            , nameColumn = 'L'
            , items = []
            , item, index;
        for (index = 2; index <= maxRow; index++) {
            item = {};
            item.date = getDate(sheet[dateColumn + index].v) || "";
            item.address = sheet[adressColumn + index].v.split(',')[0];
            item.status = sheet[statusColumn + index].v;
            item.article = sheet[articleColumn + index].v;
            item.info = lineItems[item.article];
            item.name = sheet[nameColumn + index].v;
            items.push(item);
        }
        return items;
    }

    function getDate(str) {
        var inter = str.split(' ');
        if (inter[0] && inter[1]) {
            number = inter[0].split('.');
            hour = inter[1].split(':');
            return new Date('20' + number[2], number[1] - 1, number[0], hour[0], hour[1]);
        }
    }

    function calc(orders, isFirst) {
        var index, addresses = {}
            , hours = []
            , daysOfWeek = []
            , daysOfMounth = []
            , manufactures = {}
            , marks = {}
            , models = {}
            , types = {}
            , statuses = {}
            , dates = []
            , hoursAndDaysOfWeek = []
            , order;
        for (var indexX = 0; indexX < 7; indexX++) {
            var arr = [];
            for (var indexY = 0; indexY < 24; indexY++) {
                arr.push(0);
            }
            hoursAndDaysOfWeek.push(arr);
        }
        var curRules;
        if (!isFirst) {
            curRules = rules.get();
        }
        for (index in orders) {
            order = orders[index];
            if (!checkRules(order, curRules)) {
                continue;
            }
            hoursAndDaysOfWeek[orders[index].date.getDay()][orders[index].date.getHours()]++;
            addItem(addresses, order.address);
            addItem(hours, order.date.getHours());
            addItem(daysOfWeek, order.date.getDay());
            addItem(daysOfMounth, order.date.getDate());
            addItem(statuses, order.status);
            dates.push(order.date);
            if (order.info) {
                addItem(manufactures, order.info.manufacturer);
                addItem(marks, order.info.mark);
                addItem(models, order.info.mark + ' ' + order.info.model);
                addItem(types, order.info.type);
            }
            else {
                //console.log(order);
            }
        }
        return {
            addresses: addresses
            , hours: hours
            , daysOfWeek: daysOfWeek
            , daysOfMounth: daysOfMounth
            , manufactures: manufactures
            , marks: marks
            , models: models
            , types: types
            , statuses: statuses
            , dates: dates
            , hoursAndDaysOfWeek: hoursAndDaysOfWeek
        }
    }

    function checkRules(order, rules) {
        if (!rules) {
            return true;
        }
        if (order.date > rules.finishDate || order.date < rules.startDate) {
            return false;
        }
        if (!~rules.statuses.indexOf(order.status)) {
            return false;
        }
        if (!order.info) {
            return false;
        }
        if (!~rules.types.indexOf(order.info.type)) {
            return false;
        }
        if (!~rules.manufactures.indexOf(order.info.manufacturer)) {
            return false;
        }
        return true;
    }

    function addItem(obj, item) {
        if (obj[item]) {
            obj[item]++;
        }
        else {
            obj[item] = 1;
        }
    }
});