/**
==> Problem: 06
    Ticket fare calculator:
        - Children (age < 10): Free
        - Students get a 50% discount.
        - Senior citizens (age >= 60) gets a 15% discount.
        - Otherwise Regular ticket fare 800 tk
 */

let age = 55;
let isStudent = false;
let ticketPrice = 800;

if (age < 10) {
  console.log("Children. Ticket Free");
} else if (isStudent) {
  ticketPrice = ticketPrice - ((ticketPrice * 50) / 100);
  console.log(`Students. Ticket price: ${ticketPrice} tk`);
} else if (age >= 60) {
  ticketPrice = ticketPrice - ((ticketPrice * 15) / 100);
  console.log(`Senior citizens. Ticket price: ${ticketPrice} tk`);
} else {
  console.log(`Ticket price: ${ticketPrice} tk`);
}
