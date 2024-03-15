/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Marcos Gama";
let currentYear =  2024;
let profilePicture = "images/me.jpeg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.getElementById('img');


/* Step 4 - Adding Content */


nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute("alt",`Profile image of ${fullName}`);
foodElement.innerHTML = favoriteFoods;


/* Step 5 - Array */

let favoriteFoods = ["spaghetti","popcorn"];

foodElement.innerHTML = `<br>${favoriteFoods}</br>`;

const newFavoriteFood = ["apple"];
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

foodElement.innerHTML += `<br>${favoriteFoods}</br>`;

favoriteFoods.shift(); 

foodElement.innerHTML += `<br>${favoriteFoods}</br>`;

favoriteFoods.pop(); 

foodElement.innerHTML += `<br>${favoriteFoods}</br>`;



