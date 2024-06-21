"use strict";
//Question 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message ${message} print on it`);
}
makeShirt("medium", "coding is life");
