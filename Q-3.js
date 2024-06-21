"use strict";
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "tabsheera";
console.log(personName.toUpperCase()); //uppercase
console.log(personName.toLowerCase()); //lowercase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); //titlecase
