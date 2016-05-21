$(function () {
	$("#signin").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			email: {
				required: true,
				email: true
			},
		},
		messages: {
			name: {
				required: "это поле обязательно для заполнения",
				minlength: "логин должен быть минимум 3 символа"
			},
			email: {
				required: "это поле обязательно для заполнения",
				email: "- в адресе должен быть символ @"
			},
		}

	});
	var user = {};
	var forms = $(".forms").children();

	$("#tabs").tabs();
	$(".btnNext").on('click', function () {
		if (isFillForm($("#tabs").tabs('option', 'active'))) {
			$("#tabs").tabs("option", "active", $("#tabs").tabs('option', 'active') + 1);
		} else {
			//TODO
		}
	});

	function isFillForm(index) {
		switch (index) {
		case 0:
			return chechSignInForm();
		case 1:
			return chechSelectForm();
		case 2:
			return chechSocialForm();;
		case 3:
			break;
		}
		return true;
	}

	function chechSocialForm() {
		var social = {};
		if (checkBox(vk, "#vkLink")) {
			social.vk = $("#vkLink").val();
		} else {
			return false;
		}
		if (checkBox(fb, "#fbLink")) {
			social.fb = $("#fbLink").val();
		} else {
			return false;
		}
		if (checkBox(ok, "#okLink")) {
			social.ok = $("#okLink").val();
		} else {
			return false;
		}
		if (checkBox(tw, "#twLink")) {
			social.tw = $("#twLink").val();
		} else {
			return false;
		}
		user.social = social;
		return true;
	}

	function checkBox(el, text) {
		if (el.prop("checked")) {
			var link = $(text).val();
			if (link.length !== 0) {
				return true;
			}
			return false;
		}
		return true;
	}

	function chechSelectForm() {
		var country = $("#countries option:selected").val();
		var city = $("#cities option:selected").val();
		if (country === "Страна") {
			return false;
		}
		if (city === "Город") {
			return false;
		}
		user.country = country;
		user.city = city;
		return true;
	}

	function chechSignInForm() {
		var name = $("#name").val();
		var email = $("#email").val();
		if (name.length < 3) {
			return false;
		}
		if (email.length === 0) {
			return false;
		}
		if (email.indexOf("@") === -1) {
			return false;
		}
		user.name = name;
		user.email = email;
		return true;
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
		labelFb.empty();
		if ($(this).is(':checked')) {
			labelFb.append('<input class="add-field" type="url" id = "fbLink" placeholder="fb.com/lun">');
		}
	});
	vk.on('click', function () {
		labelVk.empty();
		if ($(this).is(':checked')) {
			labelVk.append('<input class="add-field" type="url" id = "vkLink" placeholder="vk.com/lun">');
		}
	});
	tw.on('click', function () {
		labelTw.empty();
		if ($(this).is(':checked')) {
			labelTw.append('<input class="add-field" type="url" id = "twLink" placeholder="twitter.com/lun">');
		}
	});
	ok.on('click', function () {
		labelOk.empty();
		if ($(this).is(':checked')) {
			labelOk.append('<input  class="add-field" type="url" id = "okLink" placeholder="ok.ru/lun">');
		}
	});

	var cat = $('.item__cat');
	var dog = $('.item__dog');
	dog.on('click', function () {
		$('.error_cat').empty();
		$('.error_cat').append('<p>Вы выбрали собачку. А надо котика.</p>');
	});
	
		cat.on('click', function () {
		$('.error_cat').empty();
	});
})