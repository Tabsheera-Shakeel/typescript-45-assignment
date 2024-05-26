"use strict";
/////////////////////////////////////////////"TYPESCRIPT 45 QUESTIONS"!!!/////////////////////////////////////////////////////////////////////
// Quesition 1: install node.js,typescript and vs code on your computer
// Question 2: Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Tabsheera";
console.log(`hello ${personName}, would you like to learn some Python today?`);
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
let pName = "aisha";
console.log(pName.toUpperCase()); //uppercase
console.log(pName.toLowerCase()); //lowercase
console.log(pName.charAt(0).toUpperCase() + pName.slice(1).toLowerCase()); //titlecase
//Question 4
//Famous Quote:find a quote from a famous person you admire. print the quote and the name of its author.
//your output should look like the following. including the quotation marks:
//"Albert Einstein once said,"A person who never make a mistake never tried anything new.""
console.log(`William Shakespeare once said, "uneasy lies the head that waers a crown"`);
//Question 5
//Famous Quote 2:Repeat excerise 1 but this time store a famous person's name in varible called Famous_person.
//then compose your message and store it in a new varible called message.print your message.
let famousPerson = "Alama Iqbal";
let message = `${famousPerson} once said,"The ultimate aim of the ego is not to see something,but to be something."`;
console.log(message);
//Question 6
//Stripping Names:store a person's name, and include some whitespace character at the begining and end of the
//name.Use "\t"(tab) and "\n"(new line) at least once.print the name once,so the whitespace around name
//displayed.then print the name after stripping with white spaces.
let Name = "\t\n Tabsheera \t\n";
console.log(Name);
console.log(Name.trim());
//Question 7,8
//NUMBER EIGHT:write addition,substraction,multiplication and division operations in the result of 8.
//enclose our statementvib print statement
//You should create four lines that look like this:
console.log(5 + 3);
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
//Question 9
//FAVOURITE NUMBER:store your favourite number in a varible.then,create a message revealingyour favourite 
//number. print that message.
let favouriteNumber = 6;
console.log(`My Favourite Number Is ${favouriteNumber}`);
//Question 10
//adding comments:choose two of the program you've written,and add at least add one comment to each.if the 
//program are straightforward at this point,just add your name and the current date at the top.write one sentence
//discribing what each program does.
//tabsheera 15/4/24
let favourite_Number = 6;
console.log(`My Favourite Number Is ${favourite_Number}`); //this program stores and displayed my favourite number
//the following arithematic oprations all results same answer which is 8
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
