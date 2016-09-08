$(document).ready(function() {

	/* PROCESS */
	var steps = $('.ajax').children('[class*="-step"]');
	var index = 0;

	var next_step;

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

	/* STEP 1 & 2 & 3 */

	// token enter via button
	$('.token-button').click(function() {
		// get token
		token = $('input[name="token"]').val();
		// call function for steps
		handle_steps(token);
	});

	// token enter via enter key
	$('input[name="token"]').keydown(function(event) {
		if (event.keyCode === 13) {
			// prevent default 'enter' key behavior
			event.preventDefault();

			// get token
			token = $(this).val();
			// call function for steps
			handle_steps(token);
		}
	});

	$('input').focusin(function() {
		$(this).parents('.input-wrapper').addClass('focus');
	});

	$('input').focusout(function() {
		$(this).parents('.input-wrapper').removeClass('focus');
	});


	/* HELPER FUNCTION */
	function handle_steps(token) {
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

				var reverse_dict = {
					'token': token,
					'string': reverse
				};
				
				// reverse the word in a click
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
							next_step = setTimeout(function() {
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

		/* STEP 3 -- find a needle in a haystack */
		var haystack;
		var needle;

		$.ajax({
			type: 'POST',
			url: 'http://challenge.code2040.org/api/haystack',
			data: {'token': token},
			success: function(resp) {
				haystack = resp.haystack;
				needle = resp.needle;

				$('input[name="needle"]').val(needle);
				
				var j = 0;
				for (; j < haystack.length; j++) {
					if (haystack[j] === needle) {
						break;
					}
				}

				var found = {
					'token': token,
					'needle': j
				};

				// send found needle index
				$('.find-button').click(function() {
					$.ajax({
						type: 'POST',
						url: 'http://challenge.code2040.org/api/haystack/validate',
						data: found,
						success: function(resp) {
							console.log('success: ', resp);

							// display success
							$('.needle-haystack-step .command-wrapper').fadeOut(function() {
								$('.needle-haystack-step .ajax-success').fadeIn();
							});

							// get next step
							next_step = setTimeout(function() {
								$(steps[index]).fadeOut(function() {
									$('.circle-'+index++).addClass('complete');
									$('[class*="-step"]').removeClass('current');
									$(steps[index]).addClass('current').fadeIn().css('display', '-webkit-flex');
								});
							}, 2250); // 2.25 seconds
						},
						error: function(err) {
							console.log('needle in haystack error 2', err);
						}
					});
				});
			},
			error: function(err) {
				console.log('needle in haystack error 1', err);
			}
		});

		/* STEP 4 -- Prefix */
		var prefix;
		var array;

		$.ajax({
			type: 'POST',
			url: 'http://challenge.code2040.org/api/prefix',
			data: {'token': token},
			success: function(resp) {
				prefix = resp.prefix;
				array = resp.array;

				console.log(prefix, array);

				// return arr w/ str that do NOT start w/ prefix.


			},
			error: function(err) {
				console.log('prefix error 1', err);
			}
		});
	}

});