/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Robert Whisenhunt";
let currentYear = Date(year);
let profilePicture = "images/robert.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${nameElement}`);

/* Step 5 - Array */
let favoriteFood = ["Chicken", "Macaroni & Cheese", "Pizza", "Tacos"];
favoriteFood.innerHTML = `${favoriteFood}`;
favoriteFood.push("Turkey");
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;





