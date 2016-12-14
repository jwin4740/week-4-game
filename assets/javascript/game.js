var randNumber;
var max;
var min;
var redNumber;
var blueNumber;
var purpleNumber;
var greenNumber; 
var clickedValue;
var score = 0;



$(document).ready(function() {
    
	var randNumber = getRandom(19, 120);
	console.log("Random Number is: " + randNumber);
	$("#genNumber").html(randNumber);

	do
	{
	var blueCrystal = setRandGems();
	console.log("blue is: " + blueCrystal);
	$("#blue").attr("data-value", blueCrystal);
	do 
	{
		var greenCrystal = setRandGems();
	}
	while(blueCrystal === greenCrystal);
	console.log("green is: " + greenCrystal);
	$("#green").attr("data-value", greenCrystal);
	
	do 
	{
		var redCrystal = setRandGems();
	}
	while(redCrystal === greenCrystal || redCrystal === blueCrystal);
	console.log("red is: " + redCrystal);
	$("#red").attr("data-value", redCrystal);
	
	do 
	{
		var purpleCrystal = setRandGems();
	}
	while(purpleCrystal === greenCrystal || purpleCrystal === redCrystal || purpleCrystal === blueCrystal);
	console.log("purple is: " + purpleCrystal);
	$("#purple").attr("data-value", purpleCrystal);

}
while(purpleCrystal != 1 && blueCrystal != 1 && greenCrystal != 1 && redCrystal != 1);

		$(document).on("click", "img", function(event) {
			clickedValue = $(this).attr("data-value");
			console.log(clickedValue);
			
			if ($(this).hasClass("blues"))
			{
				console.log("blue is: " + clickedValue);
			}

			else if ($(this).hasClass("greens"))
			{
				console.log("green is: " + clickedValue);
			}

			else if ($(this).hasClass("reds"))
			{
				console.log("red is: " + clickedValue);
			}

			else if ($(this).hasClass("purples"))
			{
				console.log("purple is: " + clickedValue);
			}

			clickedValue = parseInt(clickedValue);
			score = score + clickedValue;
			console.log(score);
			$(".totscore").text(score);

			if (score === randNumber)
			{
				alert("you win");
			}
		
			
		}); 

});


//functions used


function getRandom(min, max) {
	randNumber = Math.floor(Math.random()*(max - min + 1) + min);
	return randNumber;
	
}

function setRandGems () {
	color = getRandom(1, 12);
	return color;

}

$(function () {
	    setInterval(function () {
		    $('#sparkle1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('#sparkle2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('#sparkle3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('#sparkle4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
	    }, 1);
    });