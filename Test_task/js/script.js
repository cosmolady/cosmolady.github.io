$(function (){
	$( "#tabs" ).tabs();
	$("#signin").validate({

       rules:{

            name:{
                required: true,
                minlength: 3
            },

            email:{
                required: true,
               	email: true
            },
       },

       messages:{

            name:{
                required: "это поле обязательно для заполнения",
                minlength: "логин должен быть минимум 3 символа"
            },

            email:{
                required: "это поле обязательно для заполнения",
                email: "- в адресе должен быть символ @"
            },

       }

    });
	$.each(countries, function(key, val) {
                    $('#countries').append('<option value="' + val + '">' + val + '</option>');
		for (key in cities){
			if (countries.key===key.country){
				$.each(cities, function(key, val) {
                    		$('#cities').append('<option value="' + val + '">' + val.name + '</option>');
					});
					}
	
                }});

	

})
