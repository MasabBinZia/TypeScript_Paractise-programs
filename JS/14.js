// Create an array of guests
const guestList = [
    {
        name: "Albert Einstein",
        email: "einstein@example.com"
    },
    {
        name: "Ada Lovelace",
        email: "lovelace@example.com"
    },
    {
        name: "Nelson Mandela",
        email: "mandela@example.com"
    }
];
// Define a function to send an invitation to a guest
function sendInvitation(guest) {
    console.log(`Dear ${guest.name},\n\nYou are cordially invited to dinner at my place on Friday evening. Please let me know if you can make it by replying to this email.\n\nBest regards,\nJohn Doe`);
}
// Iterate over the guest list and send an invitation to each guest
for (let i = 0; i < guestList.length; i++) {
    const guest = guestList[i];
    sendInvitation(guest);
}
