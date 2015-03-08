
$(document).ready(function() {
	//popover idea table
	$('[data-toggle="popover"]').popover({
	        placement : 'bottom',
	});
	
	// ajax idea form submit
	$('#ideaForm').submit(function(){
		$.ajax({
			type: "POST",
			url: $('#ideaForm').attr('action'),
			data: $('#ideaForm').serialize(),
			dataType: "json"
		})

		.done(function( resp ) {
		
			if(resp.st == 0) {
			
				 $('#validation-error').html(resp.msg);
			
			} else if(resp.st == 1) {

			  	$('#validation-error').html(data.msg);
				//window.location.reload();

			}

		});
		
		return false;

	});

	
});