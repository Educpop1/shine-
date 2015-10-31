//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function(){ 

	// Code goes here!


	function clearLight(){
		$('.bulb').css('background-color', 'black');
	}

	function illuminateStopLightRed() {
		clearLight();
		$('#stopLight').css('backgroundColor', 'red');
	}


	$('#stopButton').click(illuminateStopLightRed);


function illuminateStopLightYellow() {
		clearLight();
		$('#slowLight').css('backgroundColor', 'yellow');
	}


$('#stopButton').click(illuminateStopLightRed);


});
