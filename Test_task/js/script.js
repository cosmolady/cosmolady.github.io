'use strrict';
$(function () {

    $.validator.addMethod('noequals', function (value, element, params) {
        return this.optional(element) || (value !== "Страна" & value !== "Город")
    }, "");


    var validatorSignin = $("#signin").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "это поле обязательно для заполнения",
                minlength: "логин должен быть минимум 3 символа"
            },
            email: {
                required: "это поле обязательно для заполнения",
                email: "- в адресе должен быть символ @"
            }
        }

    });

    var validatorSelect = $('#select').validate({
        rules: {
            select__country: {
                required: true,
                noequals: true
            },
            select__cities: {
                required: true,
                noequals: true
            }

        },
        messages: {
            select__country: {
                required: "выберите страну",
                noequals: "выберите страну"
            },
            select__cities: {
                required: "выберите город",
                noequals: "выберите город"
            }

        }
    });


    var validatorSocial = $('#social').validate({
        rules: {
            input__fb: {
                required: true
            },
            input__vk: {
                required: true
            },
            input__tw: {
                required: true
            },
            input__ok: {
                required: true
            }

        },
        messages: {
            input__fb: {
                required: 'Заполните поле'
            },
            input__vk: {
                required: 'Заполните поле'
            },
            input__tw: {
                required: 'Заполните поле'
            },
            input__ok: {
                required: 'Заполните поле'
            }

        }
    });

    var user = {};
    var forms = $(".forms").children();

    $("#tabs").tabs({
  disabled: [ 1,2,3 ]
});
    var activeTab = $('#tabs').tabs('option','active');
    console.log(activeTab);
    $(".btnNext").on('click', function () {
        if (isFillForm($("#tabs").tabs('option', 'active'))) {
            $("#tabs").tabs("option", "active", $("#tabs").tabs('option', 'active') + 1);
        }
    });

    function isFillForm(index) {
        switch (index) {
        case 0:
            return checkSignInForm();
        case 1:
            return checkSelectForm();
            case 2:
            return checkSocialForm();;
        case 3:
            break;
        }
        return true;
    }

    function checkSocialForm() {
        var social = {};
        var FLAG = true; //TODO
        if (checkBox(fb)) {
            if (validatorSocial.element('#fbLink')) {
                social.fb = $("#fbLink").val();
            } else {
                FLAG = false;
            }

        }
        if (checkBox(vk)) {
            if (validatorSocial.element('#vkLink')) {
                social.vk = $("#vkLink").val();
            } else {
                FLAG = false;
            }
        }
        if (checkBox(tw)) {
            if (validatorSocial.element('#twLink')) {
                social.tw = $("#twLink").val();
            } else {
                FLAG = false;
            }
        }
        if (checkBox(ok)) {
            if (validatorSocial.element('#okLink')) {
                social.ok = $("#okLink").val();
            } else {
                FLAG = false;
            }
        }
        user.social = social;
        return FLAG;
    }

    function checkBox(el) {
         if(validatorSocial.form()){
            $('#tabs').tabs("option", "disabled", false);
        }
        return el.prop("checked");
    }

    function checkSelectForm() {
         if(validatorSelect.form()){
            $('#tabs').tabs( "option", "disabled", [ 3 ] );
        }
        return validatorSelect.form();
    }

    function checkSignInForm() {
        if(validatorSignin.form()){
            $('#tabs').tabs( "option", "disabled", [ 2,3 ] );
        }
        return validatorSignin.form();
    }

    $(".btnPrev").on('click', function () {
        $("#tabs").tabs("option", "active", $("#tabs").tabs('option', 'active') - 1);
    });

    $.each(countries, function (key, val) {
        $('#countries').append('<option value="' + key + '" >' + val + '</option>');
    });

    $("#countries").change(function () {
        $("#countries option:selected").each(function () {
            var numCountry = this.value;
            $('#cities').empty();
            $.each(cities, function (key, val) {
                if (val.country == numCountry) {
                    $('#cities').append('<option value="' + key + '" >' + val.name + '</option>');
                }
            });
        });

    });
    var fb = $('#form-check-fb');
    var labelFb = $('.label-fb');
    var vk = $('#form-check-vk');
    var labelVk = $('.label-vk');
    var tw = $('#form-check-tw');
    var labelTw = $('.label-tw');
    var ok = $('#form-check-ok');
    var labelOk = $('.label-ok');

    fb.on('click', function () {
        if ($(this).is(':checked')) {
            labelFb.css('display', 'block');
        } else {
            labelFb.css('display', 'none');
        }
    });
    vk.on('click', function () {
        if ($(this).is(':checked')) {
            labelVk.css('display', 'block');
        } else {
            labelVk.css('display', 'none');
        }
    });
    tw.on('click', function () {
        if ($(this).is(':checked')) {
            labelTw.css('display', 'block');
        } else {
            labelTw.css('display', 'none');
        }
    });
    ok.on('click', function () {
        if ($(this).is(':checked')) {
            labelOk.css('display', 'block');
        } else {
            labelOk.css('display', 'none');
        }
    });

    var cat = $('.item__cat');
    var dog = $('.item__dog');
    dog.on('click', function () {
        $('.error_cat').empty();
        $('.error_cat').append('<p>Вы выбрали собачку. А надо котика.</p>');
    });
    var src;
    cat.on('click', function () {
        $('.error_cat').empty();
        cat.css('border','none');
        $(this).css('border','4px solid #ff9800');
        src = $(this.firstChild).attr('src');
        
    });
        
    var finalBtn = $('.btnFinal');
    var finalWrap = $('.final_wrapper');
    var finalScreen = $('.final');
    finalBtn.on('click', function () {
        user.name = $('#name').val();
        user.email = $('#email').val();
        user.country = $('#countries option:selected').text();
        user.citie = $('#cities option:selected').text();
        if (src !== undefined) {
            $('.container').css('display', 'none');
            finalWrap.css('display', 'block');
            finalScreen.append('<img class="final-img" src="'+src+'">').append('<h2 class="last">' + user.name + '</h2>').append('<p class="last">' + user.email + '</p>').append('<p class="last">' + user.citie + ',' + ' ' + user.country);
            if (user.social !== undefined){
                if (user.social.fb !== undefined) {
                finalScreen.append('<p class="last">' + user.social.fb + '</p>');
            }
            if (user.social.vk !== undefined) {
               finalScreen.append('<p class="last">' + user.social.vk + '</p>')
            }
            if (user.social.tw !== undefined) {
               finalScreen.append('<p class="last">' + user.social.tw + '</p>');
            }
            if (user.social.ok !== undefined) {
                finalScreen.append('<p class="last">' + user.social.ok + '</p>');
            }    
            }
            
        } else {
            $('.error_cat').empty();
            $('.error_cat').append('<p>Выберите котика</p>');
        }
    });
    
    var btnAgain = $('.btn-again');
    btnAgain.on('click',function(){
        
        finalScreen.empty();
        finalWrap.css('display', 'none');
        validatorSignin.resetForm();
        validatorSelect.resetForm();
        validatorSocial.resetForm();
        for(var i=0;i<4;i++){
            $('form').get(i).reset();    
        }
        
        cat.css('border','none');
        user={};
        $('#tabs').css('display', 'block').tabs( "option", "active", 0 );
;
    });

})