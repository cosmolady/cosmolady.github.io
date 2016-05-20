$(function () {
	$("#tabs").tabs();
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
	$.each(countries, function (key, val) {
		$('#countries').append('<option value="' + val + '">' + val + '</option>');
		for (key in cities) {
			if (countries.key === key.country) {
				$.each(cities, function (key, val) {
					$('#cities').append('<option value="' + val + '">' + val.name + '</option>');
				});
			}

		}
	});
	var fb = $('#form-check-fb');
	var labelFb = $('.label-fb');
	var vk = $('#form-check-vk');
	var labelVk = $('.label-vk');
	var tw = $('#form-check-tw');
	var labelTw = $('.label-tw');
	var ok = $('#form-check-ok');
	var labelOk = $('.label-ok');
		
	fb.on('click',function(){
		if ($(this).is(':checked')) {
			labelFb.append('<input class="add-field" type="url" placeholder="fb.com/lun">');
		}}
		);
	vk.on('click',function(){
		if ($(this).is(':checked')) {
			labelVk.append('<input class="add-field" type="url"  placeholder="vk.com/lun">');
		}}
		);
	tw.on('click',function(){
		if ($(this).is(':checked')) {
			labelTw.append('<input class="add-field" type="url"  placeholder="twitter.com/lun">');
		}}
		);
	ok.on('click',function(){
		if ($(this).is(':checked')) {
			labelOk.append('<input  class="add-field" type="url"  placeholder="ok.ru/lun">');
		}}
		);
	
	var cat=$('.item__cat');
	var dog = $('.item__dog');
	dog.on('click',function(){
		$('.picture__list').append('<p>Вы выбрали собачку. А надо котика.</p>')
	})
	})
