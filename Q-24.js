"use strict";
//Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more test.
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
console.log("testing equality with string");
let str1 = "cake";
let str2 = "Cake";
console.log(str1 == "cake");
console.log(str2 == "Cake");
console.log(str1 == str2);
console.log("tesing with lowecase");
console.log("Cake".toLowerCase() == "cake");
console.log("testing with Numerical");
console.log(6 > 10);
console.log(7 < 9);
console.log("testing with && and or operator");
console.log(true && false);
console.log(true || false);
console.log("testing whether an item is in a array");
let vegetables = ["onion", "potato", "tomato"];
console.log("is onion is vegetable?");
console.log(vegetables.includes("onion"));
console.log("Testing whether an item is not in a array");
console.log("is cucumber is vegetable?");
console.log(!vegetables.includes("cucumber"));
