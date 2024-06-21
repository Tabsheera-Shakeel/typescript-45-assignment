/*Question 15:Changing guests list: one of your guest cant make it to dinner, so you need to send out new set
of invitations with a replacement guest*/
//unale to attend guest.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guests = ["faiza","Maha","Humera"];
let unableTOattend :string = "Ahmed";
console.log(`${unableTOattend} can't make it to dinner \n`);

//replace guest
let newGuest ="momal";
    guests[guests.indexOf(unableTOattend)] = newGuest;

//new invitation
    guests.forEach(guest =>{
        console.log(`Dear ${guest}, \n\n would you like to join us for dinner? \n\n Regard \n Tabsheera Shakeel \n`);
    });

    export{}