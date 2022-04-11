let mainrecipes = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"]

let siderecipes = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"]

let desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"]

let userInputTheme = localStorage.getItem("theme");
let username = localStorage.getItem("username");
let userInputForm = document.querySelectorAll(".radioButtons");
let resultsWindow = document.querySelector(".recipeDisplayContainer");
let userTitle = document.querySelector(".welcome-message");
let navbar = document.querySelector(".navbar");
let bodyImage = document.querySelector(".display-container");
let boxes = document.querySelectorAll(".display");
let customizable = document.querySelectorAll(".customizable");
let addRecipeButton = document.querySelector(".add-recipe");
let homeButton = document.querySelector(".home");
let submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", formHandler);
displayCustomizedFeatures(userInputTheme);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomElement(array) {
  let randomNum = (getRandomIndex(array));
  let randomItem = array[randomNum]
  return randomItem
}

function formHandler(){
  event.preventDefault();
  for (let i = 0; i < 4; i++) {
    if (userInputForm[i].checked) {
      let selection = userInputForm[i].value;
      let randomRecipe = returnRecipe(selection);
      displayResults(randomRecipe);
    }
  }
}

function returnRecipe(selection) {
  let recipeMain = getRandomElement(mainrecipes);
  let recipeSide = getRandomElement(siderecipes);
  let recipeDessert = getRandomElement(desserts);
  if (selection == "mainrecipes") {
    return recipeMain;
  } else if (selection == "siderecipes") {
    return recipeSide;
  } else if (selection == "desserts") {
    return recipeDessert;
  } else if (selection == "entire-meal") {
    let mealString = `<div class="dishes-container"><h3 class="dish-title">Main dish:</h3><div class="dishes">${recipeMain}</div>
    <h3 class="dish-title">Side dish:</h3><div class="dishes">${recipeSide}</div>
    <h3 class="dish-title">Dessert:</h3><div class="dishes">${recipeDessert}</div>`
    return mealString
  }
}

function displayResults(randomRecipe) {
  let resultsStringContainer = document.getElementById("results-string-container");
  resultsStringContainer.innerText = "You should have: "
  resultsWindow.innerHTML = randomRecipe;
}

function displayCustomizedFeatures(userInputTheme) {
  displayUsername()
  for (let i = 0; i < customizable.length; i++) {
    customizable[i].classList.add(userInputTheme)
    }
    addRecipeButton.innerHTML = `<img src="../assets/${userInputTheme}recipe.png">`
    homeButton.innerHTML = `<img src="../assets/${userInputTheme}home.png">`
  }

function displayUsername(){
  if (username){
    userTitle.innerText = `What's for dinner, ${username}?`
  }
}
