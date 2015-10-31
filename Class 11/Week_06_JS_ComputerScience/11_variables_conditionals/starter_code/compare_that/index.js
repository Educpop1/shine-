

$(document).ready(function() {
	$('submit').click(comparNums)

	Function comparNums(){

	var num1=$('#a').val()
	var num2=$ ('#b').val()

	if (num1==num2)
		$('#comparision').text('=');

	} elese if (num1> num2) {
		$('#comparision').text('>');
	}


	} elese if (num1< num2) {
		$('#comparision').text('<');

		}


	} elese if (num1< num2) {
		$('#comparision').text('Er');

		}
}