////////// Displays the output on the HTML page
var output = document.getElementById("main");
////////// HTML button used to generate a random quote
var btn_compliment = document.getElementById("btn_compliment");
////////// An array that contains random compliments (should be changed later to pull data from a database)
var compliments = [
    "My life has never been the same since I met you.",
    "Words can’t explain what a wonderful person you are.",
    "I wish I could wake up right next to you.",
    "I would do anything to make you smile.",
    "I love all the stars in the sky, but they are nothing compared to the ones in your eyes.",
    "I have the perfect life now that you are a part of it.",
    "You take my breath away.",
    "Falling in love with you is the second best thing in the world because finding you was the first.",
    "I can’t wait to see you again."
];
////////// Generates a random compliment when btn_compliment is clicked and is displayed on the HTML page
btn_compliment.addEventListener("click", function () {
    random_compliment = Math.floor(Math.random() * (compliments.length - 0) + 0);
    output.innerHTML += compliments[random_compliment] + "<br>";
});