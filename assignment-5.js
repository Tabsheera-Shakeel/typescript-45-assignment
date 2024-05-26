"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Questin 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magician = [] = ["Chris Angel", "David Blaine", "Dynamo"];
function show_magicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magician);
//Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array
// of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magician);
//Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that
// you have one array of the original names and one array with the Great added to each magician’s name.
let magicianNames = ["Chris Angel", "David Blaine", "Dynamo"];
function greetMagician(magicians) {
    let greetedMagicians = [];
    magicians.forEach(magician => {
        greetedMagicians.push(`${magician} the great`);
    });
    return greetedMagicians;
}
let greetedMagicians = greetMagician(magicianNames);
console.log("original magicians:");
console.log(magicianNames);
console.log("Greeted magician:");
console.log(greetedMagicians);
//Question 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich
//that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log(`making a sandwich with: ${items.join(", ")}`);
}
make_sandwich("ham", "chesse");
make_sandwich("chicken", "lettuce", "tomato");
make_sandwich("cucumber", "cabbage", "mustard", "mayo");
//Question 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
//such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let option of options) {
        car = Object.assign(Object.assign({}, car), option);
    }
    return car;
}
let car1 = make_car("Toyota", "Corolla", { color: "white", year: 2024 });
let car2 = make_car("Tesla", "Model S", { color: "red", sunroof: true });
console.log(car1);
console.log(car2);
