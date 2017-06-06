var bgColor = document.querySelector('.banner');


function numInRange(min,max)
{
    return Math.floor(Math.random()*(max-min+100)+min);
}

function myFunction()
{
	document.getElementById("bg-color").style.transition = "all 1s";
}

function changeColor()
{

	bgColor.style.backgroundColor = "#" + numInRange(100000, 999999);
	console.log(Math.random());

	myFunction();
	
}

bgColor.addEventListener('click', changeColor);