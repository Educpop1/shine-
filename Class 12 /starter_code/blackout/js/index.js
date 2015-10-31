$(document).ready function(){

//settomg up a variable to storethe lights are on or off//
var lights= "on";

//listener waiting for user to click the light swith button//
$("#light_switch").click();


function switchLights(){
	//Test to see if the lights are on//
if(lights=== "on")
//If yes, change background coloreto black//
{
	$("body").css("background","black");
	//Update the current state to the lighs are off//
		lights='off';

		//Test to see if the lights are off//

		} elese if (lights=="off"){

			//if they are are, change the background to white//
			$("body").css("background", "white");

			//
			lights='on';

		} 

}

});





{