//Question 11
//names:store the names of a few of your friends in an array called names. print each person's name by 
//accessing each element in the list, one at a time
let friendsNames: string[] = ["faiza", "irma", "maha"];
for(let i = 0; i < friendsNames.length; i++) {
    console.log(friendsNames[i]);
};
//Question 12
//greeting:use the array from ex:11. instead of just printing each person's name,print a message to them.
//the message should be the same for eaxh person,nut personalized with their names
let Names:string[] = ["faiza","irma","maha"];

for(let name of Names) {
    console.log(`hello ${Names},would you guys like to learn some typescript today?`);
};

/*Question 13:your own array:think of your favourite mode of transportation, sucha as motorcylce or a car,
and make list that stores several examples. use your list to print a series of statements about these items,
such as "i would like to own a honda motorcycle".*/

let transport =["Audi A5","Toyota Land Cruiser"]
transport.forEach(transport =>{
    console.log(`i would like to own ${transport}`)
});

/*Question 14:Guest list: if you cloud invite anyone,living or deceased, to dinner, who would you invite?
 make a list that includes at least 3 people would you like to invite to dinner. 
 then use your list to print a message to each person, inviting them to dinner */

let guests = ["faiza","maha","humera"]
    guests.forEach(guests =>{
        console.log(`${guests} would you like to have dinner with me?`)
    });

/*Question 15:Changing guests list: one of your guest cant make it to dinner, so you need to send out new set
of invitations with a replacement guest*/
//unale to attend guest.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let unableTOattend :string = "humera"
console.log(`${unableTOattend} cant make it to dinner`)
//replace guest
let newGuest ="momal";
    guests[guests.indexOf(unableTOattend)] = newGuest;
//new invitation
    guests.forEach(guests =>{
        console.log(`${guests} would you like to join us to dinner?`)
    });

//Question 16: More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let moreGuest =["faiza","maha","humera","momal"];
console.log("Great news! i found bigger dinner table");
//adding more guests
moreGuest.unshift("irma");
moreGuest.splice(moreGuest.length/2,0,"minahil");
moreGuest.forEach(moreGuest =>{
    console.log(`Dear ${moreGuest}, would like to have dinner with me?`)
});

//Question 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

console.log("sadly, i can only invite 2 people for dinner now")
while(moreGuest.length< 2){
    let removeGuest = guests.pop()
    console.log(`so sorry ${removeGuest}, i cant invite you guys for the dinner`)
};
moreGuest.splice(0,moreGuest.length);
console.log(moreGuest);

//question 18: Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placestoVisit =["saudia arab","switzerland","korea","italy","paris"]
console.log("Original order :",placestoVisit);

console.log("Alphabetical order:", [...placestoVisit].sort());
console.log("Original order:", placestoVisit);

console.log("Reverse alphabetical order:", [...placestoVisit].sort().reverse());
console.log("Orginal order:", placestoVisit)

placestoVisit.reverse();
console.log("Reversed order:",placestoVisit);

placestoVisit.sort();
console.log("Alphabetical order:",placestoVisit);

placestoVisit.reverse();
console.log("Reverse Alphabetical order:", placestoVisit);

//Question 19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.

let Guest =["faiza","maha","humera","momal"];
console.log(`i am inviting you ${Guest.length} to dinner.`);

//question 20:Think of something you could store in a array.For example, you could make a list of mountains,
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates 
//a list containing these items.

let languages =["korean","italian","spanish","french"];
console.log(`i really want to learn ${languages}`);

