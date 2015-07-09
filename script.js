$(function(){
	console.log('page ready');

  var playerOneName = $('#playerOne');
  var playerTwoName= $('#playerTwo');
  var startButton = $('#start-button');
  var formWrap = $('#form-wrap');

			  $('#playerOne').on('submit',function(e){
			    e.preventDefault();
			    console.log('player one submitted name');

			    var playerOneName = $('#player-info').val();
			    console.log('Player one name: ', playerOneName)
			    var playerTwoName = $('#player-info-two').val();

			    console.log('Player two name: ', playerTwoName);

			 var backgroundImg ='<div id="backgroundImg"<img src="http://previews.123rf.com/images/maxxxjo/maxxxjo1311/maxxxjo131100188/24146429-Seamless-pattern-stock-vector-used-for-tiling-background-Stock-Vector.jpg" style="height:100px;width:250px;" alt="25"/></div>';
			 console.log('got image');

			     if ($('#player-info').val() === '' || $('#player-info-two').val() === ''){

			     	$('#viewport').append('<div class="alert alert-danger" role="alert">Please Enter Both Names.</div>');
			     }

			     else{
			   
			   		$('#player-one').append('<img src="http://arcadecomedytheater.com/wp-content/uploads/2013/04/PlayerOne_header.jpg" style="height:100px;width:250px;" alt="25"/>');
					$('#player-two').append('<img src="http://s3.amazonaws.com/rapgenius/18458-85862-Player2jpg-620x.jpg" style="height:100px;width:250px;" alt="25"/>');
					
					
					// $('#newport').fadeOut(3000);
			
					// $('#backgroundImg').fadeIn();

					$('#newport').fadeOut("slow");
       				// $('#backgroundImg').css("visibility: visible");
       				$('#viewport').append('<div id="backgroundImg"><img src="http://previews.123rf.com/images/maxxxjo/maxxxjo1311/maxxxjo131100188/24146429-Seamless-pattern-stock-vector-used-for-tiling-background-Stock-Vector.jpg" style="height:100px;width:250px;" alt="25"/></div>');

					
				}

				});

		
	// ('<img src="http://arcadecomedytheater.com/wp-content/uploads/2013/04/PlayerOne_header.jpg">');











})