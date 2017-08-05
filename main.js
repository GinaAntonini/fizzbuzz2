console.log("i'm here");

// Any number that is a multiple of 3 say "fizz" instead
// Any number that is a multiple of 5 say "buzz" instead
// Any number is that a multiple of both 3 and 5 say "fizzbuzz"
// Make a program that counts to 100 using the above substitutions.


//used a for loop to create an array of integers 1 through 100. 
var numbersList = [];

for (var i = 1; i <= 100; i++) {
	numbersList.push(i); 
}

document.write(numbersList);

// var divisibleByThree = (i % 3 === 0); 

// var divisibleByFive = numbersList(i % 5 === 0); 

function divisibles (numbersList) {
	for (var i = 1; i <= numbersList.length; i++) {
		if (numbersList[i] % 3 === 0 && numbersList[i] % 5 === 0) {
		numbersList.splice(i, 1, 'fizzBuzz')
		} 	
		else if (numbersList[i] % 3 === 0) {
		numbersList.splice(i, 1, 'fizz')
		} 	
		else if (numbersList[i] % 5 === 0) {
		numbersList.splice(i, 1, 'buzz')
		}
	} return numbersList;
}

console.log(divisibles(numbersList));

