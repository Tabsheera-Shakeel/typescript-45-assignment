//Question 16: More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.

let moreGuest =["faiza","maha","humera","momal"];
console.log("Great news! i found bigger dinner table");

//adding more guests
moreGuest.unshift("irma");

moreGuest.splice(moreGuest.length/2,0,"minahil");
moreGuest.forEach(moreGuest =>{
    console.log(`Dear ${moreGuest}, would like to have dinner with me?\n`)
});

export{}