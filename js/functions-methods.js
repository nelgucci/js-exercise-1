var text = 'the sum is: ';
function addIt(x, y){

	var total= x+y;
	console.log(text + total);
}

addIt(50, 50);

var kurt = {
	arms: 2,
	bigNose: true,
	hairColor: 'brown',
	slogan: function(what)
	{
		console.log(what + ' is awesome');
	}
}

kurt.slogan('JavaScript');