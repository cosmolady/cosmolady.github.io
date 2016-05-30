function Model(data) {
    var self = this;
    var curIndex;
    self.data = data;
    self.addItem = function (item) {
        if (item.length === 0) {
            return;
        }
        self.data.push(item);
        return self.data;
    };
    self.removeItem = function (item) {
        var index = self.data.indexOf(item);
        if (index === -1) {
            return;
        }
        self.data.splice(index, 1);
        return self.data;
    };
    self.editItem = function (item) {
        if (item.length === 0) {
            return;
        }

        self.data[curIndex] = item;
        return self.data;
    }

    self.setCurIndex = function (item) {
        var index = self.data.indexOf(item);
        curIndex = index;
    }
}

function View(model) {
    var self = this;

    function init() {
        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);

        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list'),
            saveBtn: $('.item-save')
        };
        self.renderList(model.data);
    };
    self.renderList = function (data) {
        var list = tmpl($('#list-template').html(), {
            data: data
        });
        self.elements.listContainer.html(list);
    };
    init();
}

function Controller(model, view) {
    var self = this;
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('click', '.edit-add', editItem);
    view.elements.saveBtn.on('click', saveItem);

    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem() {
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
    }

    function editItem() {
        var item = $(this).attr('data-value');
        view.elements.input.val(item);
        model.setCurIndex(item);
        view.elements.saveBtn.css('display', 'block');
        view.elements.addBtn.attr('disabled', 'true');
    }

    function saveItem() {
        var item = view.elements.input.val();
        model.editItem(item);
        view.elements.saveBtn.css('display', 'none');
        view.renderList(model.data);
        view.elements.input.val('');
        view.elements.addBtn.removeAttr("disabled");
    }
}

$(function () {
    var firstToDoList = ['Final homeworks', 'Final exam', 'Get job offer'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);

});