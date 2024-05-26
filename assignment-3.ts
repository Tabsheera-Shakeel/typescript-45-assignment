//Question 21: They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

let myInfo={
    name:"Tabsheera Shakeel",
    age:16,
    postion:"Student",
};
console.log(`MY Name Is ${myInfo.name}, I Am ${myInfo.age} Year Old And I Am ${myInfo.postion} At GIAIC`);

//Question 22:Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

let fruits =["apple","grapes","mango"];
console.log(fruits[3]) //intensional error
console.log(fruits[2]);

//Question 23:Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test.
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let animal ="dog";
console.log("is animal == dog?, i predict true" );
console.log(animal == "dog")

console.log("is animal == cat?, i predict false");
console.log(animal =="cat");

console.log("is animal != rabbit?,i predict false");
console.log(animal != "rabbit");

console.log("is animal != dog, i predict false");
console.log(animal = "dog");

console.log("is animal.length > 4, i predict false");
console.log(animal.length > 4);

console.log("is animal.length <= 4, i predict true");
console.log(animal.length <= 4);

console.log("does animal starts with d?, i predict true");
console.log(animal.startsWith("d"));

console.log("does animal starts with c?, i predict false");
console.log(animal.startsWith("c"));

console.log("does animal starts with o?, i predict true");
console.log(animal.startsWith("o"));

console.log("does animal starts with xyz?, i predict false");
console.log(animal.startsWith("xyz"));

//Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more test.
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

console.log("testing equality with string");
let str1 = "cake";
let str2 = "Cake";

console.log(str1 == "cake");
console.log(str2 == "Cake")
console.log(str1 == str2);

console.log("tesing with lowecase");
console.log("Cake".toLocaleLowerCase()=="cake");

console.log("testing with Numerical");
console.log(6>10);
console.log(7<9);

console.log("testing with && and or operator")
console.log(true && false);
console.log(true|| false);

console.log("testing whether an item is in a array");
let vegetables=["union","potato","tomato"];
console.log("is union not is a vegetable?");
console.log(vegetables.includes("union"));

console.log("Testing whether an item is not in a array");
console.log("is cucumber is not a vegetable?");
console.log(!vegetables.includes("cucumber"));

// Question 25:Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alienColor ="green";
if(alienColor == "green"){
    console.log("you just earned 5 points!")
};
alienColor = "red";
if(alienColor == "green"){

};

//Question 26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

if(alienColor == "green"){
    console.log("you just earned 5 points!")
}else{
    console.log("you just earned 10 points!")
};
let alien_color
if(alien_color == "yellow"){
    console.log("you just earned 5 points for shooting the alien!")
}else{
    console.log("you just earned 10 points!")
};

//Question 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.

if(alienColor == "green"){
    console.log("you just earned 5 points!")
}
if(alienColor == "yellow"){
    console.log("you just earned 10 points!")
}
if(alienColor == "red"){
    console.log("you just earned 15 points!")
};

//Question 28: Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.

let personAge = 25;
if(personAge < 2){
    console.log("The person is a baby")
}
else if(personAge < 4){
    console.log("the person is toddler")
}
else if(personAge < 13){
    console.log("the person is kid")
}
else if(personAge < 20){
    console.log("the person is a teenager")
}
else if(personAge < 65){
    console.log("the person is an adult")
}else{
    console.log("the person is an adult")
};

//Question 29: Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits=["grapes","watermelon","mango","cherries","pineapple"];
if(favourite_fruits.includes("grapes")){
    console.log("i really like grapes!")
}
if(favourite_fruits.includes("watermelon")){
    console.log("i really like mango!")
}
if(favourite_fruits.includes("mango")){
    console.log("i really like mango")
}
if(favourite_fruits.includes("cherries")){
    console.log("i really like cherries")
}
if(favourite_fruits.includes("pineapple")){
    console.log("i really like pineapple")
};

//Question 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user.
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames=[]=["Admin","user1","user2","user3","user4"];
userNames.forEach(userNames=>{
if(userNames == "Admin"){
    console.log("Hello Admin, would you like to see a status report?")
}else{
    console.log(`Hello ${userNames}, thank you for logging in again.`)
}
});