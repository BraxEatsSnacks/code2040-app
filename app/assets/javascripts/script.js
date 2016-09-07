$(document).ready(function() {

	/* PROCESS */
	var steps = $('.ajax').children('[class*="-step"]');
	var index = 0;

	// start up
	$('.start-button').click(function() {
		$(steps[index]).fadeOut(function() {
			$('.circle-'+index++).addClass('complete');
			$('[class*="-step"]').removeClass('current');
			$(steps[index]).addClass('current').fadeIn().css('display', '-webkit-flex');
		});
	});

	// step one -- API post
	$('input[name="token"]').keydown(function(event) {
		if (event.keyCode === 13) {
			// prevent default 'enter key behavior'
			event.preventDefault();

			var info = {
				'token': $(this).val(),
				'github': 'https://github.com/BraxEatsSnacks/code2040-app' 
			};

			console.log('post request!');
			$.ajax({
				type: 'POST',
				url: 'http://challenge.code2040.org/api/register',
				data: info,
				success: function(response) {
					console.log('success', response);
				},
				error: function(err) {
					console.log('error', err);
				}
			});
		}
	});



	$('input').focusin(function() {
		$(this).parents('.input-wrapper').addClass('focus');
	});

	$('input').focusout(function() {
		$(this).parents('.input-wrapper').removeClass('focus');
	});
});