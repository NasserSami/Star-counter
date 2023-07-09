


//initialize the count to 0
//listen for clicks on the button
//increment the count variable when the button is clicked

let count = 0;
let countEl = document.getElementById("count-el");
let welcomeEl = document.getElementById("welcome-el");
let saveEl=document.getElementById("save-el");
let name = "Space Traveler"
let greeting = "Welcome back ";


welcomeEl.textContent = greeting + name;
function  increment()
{
 count++;
 countEl.textContent = count;
}

function decrement()
{
 count--;
 countEl.textContent = count;
}

function save()
{
 let countStr = count + " - ";
 saveEl.textContent += countStr;
 count = 0;
 countEl.textContent = count;
}

function reset()
{
 saveEl.textContent = "Previous Entries: ";
 count = 0;
 countEl.textContent = count;
}