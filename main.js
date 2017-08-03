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

// var divisibleByThree = (i % 3 === 0); //need to add something that replaces the elements of the array that resolve true

// var divisibleByFive = numbersList(i % 5 === 0); //need to add something that replaces the elements of the array that resolve true 


