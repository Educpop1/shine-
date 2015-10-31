$(document).ready (function (){

//variable to set up the current total//

var total=0;

// listen for the user to submit  to price//


$("#entry").submit(sumTotalAndNewEntry);


functon sumTotalAndNewEntry(){
	//Get the value from the input//
	event.preventDeFault();
	var entryNew=$("#newEntry")
		.val ();

	var entryNewNum=parseFloat(
			entryNew);	
	console.log (entryNewNum);

	
	var entryNewCurrency=currencyFormat (entryNewNum);

	//creating a placeholder//
	var totalCurrency;

	console.log("totalCurrency")

	//Updating current total//
	total=total+entryNewNum;
	//Turning the total into a currency 
	totalCurrency= currencyFormat(total)


}

	function currencyFormat (numberToConvert){

		//Take the number that was passed to the currency

		var currency=numberToConvert.toFixed(2
			)
		//addt
		var currencyWithDollor= "$"+currency; 
		//when and string and number are combined it becomes a string//

		return currencyWithDollor;
}


};