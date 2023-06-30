const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

let cardsTurnedOver = 0;
let firstCard;
let secondCard;
let busy = false;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if (event.target.classList.contains("flipped")) return;
  if (busy) return;
  
  let clickedCard = event.target;
  
  if (!firstCard || !secondCard) {
    // this part was originally much more complex but I checked the solution
    // unsurprisingly, the solution is much better
    clickedCard.classList.add("flipped");
    firstCard = firstCard || clickedCard;
    secondCard = clickedCard === firstCard ? null : clickedCard;
  }
  
  if(firstCard && secondCard) {
    busy = true;

    if (firstCard.className === secondCard.className) {
      cardsTurnedOver += 2;
      firstCard.removeEventListener("click", handleCardClick);
      secondCard.removeEventListener("click", handleCardClick);
      // at first I thought "null" was supposed to be "undefined" here
      firstCard = null;
      secondCard = null;
      busy = false;
    } else {
      setTimeout(function() {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard = null;
        secondCard = null;
        busy = false;
      }, 1000);
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
