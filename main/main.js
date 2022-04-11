//  ARRAYS
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

//  GLOBAL VARIABLES
let userInputTheme = localStorage.getItem("theme");
let username = localStorage.getItem("username");
let userInputForm = document.querySelectorAll(".radioButtons");
let resultsWindow = document.getElementById("recipeDisplayContainer");
let userTitle = document.getElementById("welcomeMessage");
let boxes = document.querySelectorAll(".display");
let customizable = document.querySelectorAll(".customizable");
let addRecipeButton = document.getElementById("addRecipe");
let homeButton = document.getElementById("home");
let submitButton = document.getElementById("submit");

//  EVENT LISTENERS
submitButton.addEventListener("click", formHandler);
addRecipeButton.addEventListener("click", alertUser);

//  LIL FUNCTION
displayCustomizedFeatures(userInputTheme);

//  FUNCTIONS
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
  if (!userInputForm[0].checked && !userInputForm[1].checked && !userInputForm[2].checked && !userInputForm[3].checked) {
    alert("Please select an option")
  }
  for (let i = 0; i < 4; i++) {
    if (userInputForm[i].checked) {
      let selection = userInputForm[i].value;
      let randomRecipe = returnRecipe(selection);
      displayResults(randomRecipe);
    }
  }
}

function returnRecipe(selection) {
  if (selection === "mainrecipes") {
    return getRandomElement(mainrecipes);
  } else if (selection === "siderecipes") {
    return getRandomElement(siderecipes);
  } else if (selection === "desserts") {
    return getRandomElement(desserts);
  } else if (selection === "entire-meal") {
    let mealString = `<div class="dishes-container"><h3 class="dish-title">Main dish:</h3><div class="dishes">${getRandomElement(mainrecipes)}</div>
    <h3 class="dish-title">Side dish:</h3><div class="dishes">${getRandomElement(siderecipes)}</div>
    <h3 class="dish-title">Dessert:</h3><div class="dishes">${getRandomElement(desserts)}</div>`
    return mealString
  }
}

function displayResults(randomRecipe) {
  let resultsStringContainer = document.getElementById("resultsStringContainer");
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

function alertUser() {
  alert("'Add a recipe' feature coming soon!")
}
