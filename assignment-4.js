"use strict";
//Quetion 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let userName = [];
if (userName.length === 0) {
    console.log("We need to find some users!");
}
;
//Question 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_user = [] = ["user1", "user2", "user3", "admin", "user4"];
let new_user = [] = ["user1", "user5", "user6", "user7", "admin"];
new_user.forEach(new_user => {
    if (current_user.some(current_user => current_user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} will need to enter a new username.`);
    }
    else {
        console.log(`${new_user} is available`);
    }
});
//Question 33: Ordinal numbers: ordinal numbers indicate their position in a array, such as 1st or 2nd.
//most ordinal numbers end in th, except 1,2 and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number} ${suffix}`);
});
///Question 34: Pizzas: think of at least three kinds of your favourite pizza names in a array, and then use for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizza = ["fajita", "pepperoni", "supreme"];
pizza.forEach(pizza => {
    console.log(`I really ${pizza} pizza`);
});
console.log(`I really love pizza!`);
//Question 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
// and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal,
// such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let petAnimal = ["cat", "dog", "fish", "rabbit"];
petAnimal.forEach(petAnimal => {
    console.log(`${petAnimal} would be great pet`);
});
console.log("Any of these animals would be great pet");
//Questoin 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message ${message} print on it`);
}
makeShirt("medium", "coding is life");
//Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", message = "i love typescript") {
    console.log(`the shirt size is ${size} with the message ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "learning typescript is fun!");
///Question 38: Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("islamabad");
describe_city("naran");
describe_city("seoul", "south korea");
///Question 39: City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this: "Lahore, Pakistan".
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, county) {
    console.log(`${city},${county}`);
}
city_country("hyderabad", "pakistan");
city_country("tokyo", "japan");
city_country("switzerland", "bern");
///Question 40: Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album 
//information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes
// a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("BTS", "Butter");
let album2 = make_album("Taylor swift", "Lover");
let album3 = make_album("Ariana grande", "Eternal Sunshine", 12);
console.log(album1);
console.log(album2);
console.log(album3);
