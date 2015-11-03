// Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
// Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
// If a user clicks "Read More" on the primary column:
	//have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
	//hide the "Read More" link using ```$.hide()```

// If a user clicks "Read Less" on the primary column:
	//have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
	//show the "Read More" link using ```$.show()```

// Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```




$(document).ready(function() { 
						   

	//listin for the user to submit a new text

	$('form').submit(submitForm); 

	function submitForm(){

		//get the value of what the user types
		var userInput = $('#city-type').val();

		//if the user entered NYC, New York or New York City
		if( userInput == 'NYC' || userInput == 'New York' || userInput == 'New York City' ){
			
			//add a class to the body called nyc
			$('body').addClass('nyc');
		
		}
		//if the user entered SF, San Francisco, Bay Area
		else if( userInput == 'SF' ||userInput == "San Francisco" ||userInput == "Bay Area"){

			//add a class to the body called SF
			$('body').addClass('sf');

		}

		
		 //if the user entered LA, LAX, Los Angeles
		else if( userInput == 'LA' || userInput == 'LAX' || userInput =='Los Angeles' ) {

			//add a class to the body called la
				$('body').addClass('la');		
		}  


		//if the user entered Austin, ATX, 
		else if( userInput == 'Austin' || userInput == 'ATX' ) {

			//add a class to the body called austin
				$('body').addClass('austin');		
		}  

		//if the user entered Sydney, 
		else if( userInput == 'Sydney' ) {

			//add a class to the body called Sydney
				$('body').addClass('sydney');		
		}  



		else {
		
			$('body').attr('class', '');
		
		}
		
		return false;
	}


});

