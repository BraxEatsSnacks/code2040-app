$(document).ready(function() {

	/* PROCESS */
	var steps = $('.ajax').children('[class*="-step"]');
	var index = 0;

	// global API token
	var token;

	// start up
	$('.start-button').click(function() {
		$(steps[index]).fadeOut(function() {
			$('.circle-'+index++).addClass('complete');
			$('[class*="-step"]').removeClass('current');
			$(steps[index]).addClass('current').fadeIn().css('display', '-webkit-flex');
		});
	});

	// token enter via button
	$('.token-button').click(function() {
		token = $('input[name="token"]').val();

			var info = {
				'token': token,
				'github': 'https://github.com/BraxEatsSnacks/code2040-app' 
			};

			/* STEP 1 -- API post */
			$.ajax({
				type: 'POST',
				url: 'http://challenge.code2040.org/api/register',
				data: info,
				success: function(resp) {
					console.log('success: ', resp);

					// display success
					$('.post-step .command-wrapper').fadeOut(function() {
						$('.post-step .ajax-success').fadeIn();
					});

					// get next step
					var next_step = setTimeout(function() {
						$(steps[index]).fadeOut(function() {
							$('.circle-'+index++).addClass('complete');
							$('[class*="-step"]').removeClass('current');
							$(steps[index]).addClass('current').fadeIn().css('display', '-webkit-flex');
						});
					}, 2250); // 2.25 seconds

				},
				error: function(err) {
					console.log('error: ', err);
				}
			});


			/* STEP 2 -- Word Reverse */
			$.ajax({
				type: 'POST',
				url: 'http://challenge.code2040.org/api/reverse',
				data: {'token': token},
				success: function(resp) {
					var word = resp;
					var reverse;
					$('.reverse-step [name="word"]').val(resp);

					// upon getting the word now reverse it
					for (var char = word.length-1; char >= 0; char--) {
						reverse += word[char];
					}

					console.log(word, reverse);

					var reverse_dict = {
						'token': token,
						'string': reverse
					};
					
					$('.reverse-button').click(function() {
						$.ajax({
							type: 'POST',
							url: 'http://challenge.code2040.org/api/reverse/validate',
							data: reverse_dict,
							success: function(resp) {
								console.log('success: ', resp);

								// display success
								$('.reverse-step .command-wrapper').fadeOut(function() {
									$('.reverse-step .ajax-success').fadeIn();
								});

								// get next step
								var next_step = setTimeout(function() {
									$(steps[index]).fadeOut(function() {
										$('.circle-'+index++).addClass('complete');
										$('[class*="-step"]').removeClass('current');
										$(steps[index]).addClass('current').fadeIn().css('display', '-webkit-flex');
									});
								}, 2250); // 2.25 seconds
							},
							error: function(err) {
								console.log('error', err);
							}
						});
					});
				},
				error: function(err) {
					console.log('error: ', err);
				}
			});
	});

	// token enter via enter key
	$('input[name="token"]').keydown(function(event) {
		if (event.keyCode === 13) {
			// prevent default 'enter' key behavior
			event.preventDefault();

			token = $(this).val();

			var info = {
				'token': token,
				'github': 'https://github.com/BraxEatsSnacks/code2040-app' 
			};

			/* STEP 1 -- API post */
			$.ajax({
				type: 'POST',
				url: 'http://challenge.code2040.org/api/register',
				data: info,
				success: function(resp) {
					console.log('success: ', resp);

					// display success
					$('.post-step .command-wrapper').fadeOut(function() {
						$('.post-step .ajax-success').fadeIn();
					});

					// get next step
					var next_step = setTimeout(function() {
						$(steps[index]).fadeOut(function() {
							$('.circle-'+index++).addClass('complete');
							$('[class*="-step"]').removeClass('current');
							$(steps[index]).addClass('current').fadeIn().css('display', '-webkit-flex');
						});
					}, 2250); // 2.25 seconds

				},
				error: function(err) {
					console.log('error: ', err);
				}
			});


			/* STEP 2 -- Word Reverse */
			$.ajax({
				type: 'POST',
				url: 'http://challenge.code2040.org/api/reverse',
				data: {'token': token},
				success: function(resp) {
					var word = resp;
					var reverse = '';
					$('.reverse-step [name="word"]').val(resp);

					// upon getting the word now reverse it
					for (var char = word.length-1; char >= 0; char--) {
						reverse += word[char];
					}

					console.log(word, reverse);


					var reverse_dict = {
						'token': token,
						'string': reverse
					};
					
					$('.reverse-button').click(function() {
						$.ajax({
							type: 'POST',
							url: 'http://challenge.code2040.org/api/reverse/validate',
							data: reverse_dict,
							success: function(resp) {
								console.log('success: ', resp);

								// display success
								$('.reverse-step .command-wrapper').fadeOut(function() {
									$('.reverse-step .ajax-success').fadeIn();
								});

								// get next step
								var next_step = setTimeout(function() {
									$(steps[index]).fadeOut(function() {
										$('.circle-'+index++).addClass('complete');
										$('[class*="-step"]').removeClass('current');
										$(steps[index]).addClass('current').fadeIn().css('display', '-webkit-flex');
									});
								}, 2250); // 2.25 seconds
							},
							error: function(err) {
								console.log('error', err);
							}
						});
					});
				},
				error: function(err) {
					console.log('error: ', err);
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