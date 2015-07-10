$(function(){
	console.log('page ready');
	//swal({   title: "Error!",   text: "Here's my error message!",   type: "error",   confirmButtonText: "Cool" });


			  		 	$(".card").flip({
						  axis: 'x',
						  trigger: 'manual'
						});
			  			  	
	$('#playerForm').on('submit',function(e){
		e.preventDefault();

		var playerOneName = $('#player-info').val();
		console.log('Player one name: ', playerOneName)
		var playerTwoName = $('#player-info-two').val();
		

		console.log('Player two name: ', playerTwoName);
		$('.title').fadeOut('slow');

		if ($('#player-info').val() === '' || $('#player-info-two').val() === ''){
			swal({   
				title: "Error!",   
				text: "Please enter both player names!",   
				type: "error",   
				confirmButtonText: "Try Again" 

			});

			} else {
			swal.close();
			$('.player-one-score .name').html(playerOneName);
			$('.player-two-score .name').html(playerTwoName);
			$('#playerForm').fadeOut('slow',function(){
				$('.game-wrap, .player-one-score, .player-two-score').fadeIn('slow');

			});

		}
	});

	var counter = 0;
	var score = [0,0];
	var turn = 0;


	$('.card').on('click', function(){
		var snd = new Audio("sounds/blop.wav"); // buffers automatically when created
		snd.play();
		var previous = $('.selected');
		var current = $(this);

		if ($('#player-info').val() === '' || $('#player-info-two').val() === ''){
			swal({   
				title: "Error!",   
				text: "Please enter both player names to start game!",   
				type: "error",   
				confirmButtonText: "Try Again" 

			});


		}

		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$(this).flip(false);
		}else{
			$(this).addClass('selected');
			$(this).flip(true);

			if(previous.length > 0){
				setTimeout(function(){
					if(previous.find('.back img').attr('src') == current.find('.back img').attr('src')){
						//correct match
						var snd = new Audio("sounds/success.wav"); // buffers automatically when created
							snd.play();
						$('.selected').removeClass('selected').fadeOut();
						counter +=2;
						score[turn]+=2;
						console.log(counter);
						$('.player-one-score .score').html(score[0])
						$('.player-two-score .score').html(score[1])
						$('.score').addClass('animated flash');
							
						
						


						if (counter === 10){
							
							//reset cards
							$('.card').flip(false);
							$('.card').fadeIn('slow');
							counter = 0;
							//reset score
							$('.player-one-score .score').html(0);
							$('.player-two-score .score').html(0);
							var snd = new Audio("sounds/ta-da.wav"); // buffers automatically when created
							snd.play();
							
									if (score[0] > score[1]){
										swal({   
											title: "Game Over!",   
											text: "Player ONE wins!",   
											type: "success",   
											confirmButtonText: "Play Again?" 

										});
									}else{
										swal({   
											title: "Game Over!",   
											text: "Player TWO wins!",   
											type: "success",   
											confirmButtonText: "Play Again?" 

										});

									}

						}

					


					}else{
						//wrong match
						$('.selected').flip(false);
						var snd = new Audio("sounds/error.wav"); // buffers automatically when created
							snd.play();
						$('.selected').removeClass('selected')
						turn = Math.abs(turn - 1);
						if (turn === 0){
							swal({   
									title: "Wrong Guess!",   
									text: "Player one's turn!",   
									type: "error",   
									confirmButtonText: "Try Again" 

								});
						}else{
							swal({   
									title: "Wrong Guess!",   
									text: "Player two's turn!",   
									type: "error",   
									confirmButtonText: "Try Again" 

								});
						}
					

					}


				},500);
			}
		}
		

	});



});