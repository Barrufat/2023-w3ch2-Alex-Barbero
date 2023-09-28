const cardNumbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const suits = ["♠", "♣", "♦", "♥"];

let userCard;
let gameCard;

const startButtonElement = document.querySelector(".start-game");
const firstScreenElement = document.querySelector(".first-screen");
const secondScreenElement = document.querySelector(".second-screen");

const guessButtonsElement = document.querySelector(".guess-buttons");
const mainTitleElement = document.querySelector(".main-title");
const drawButtonElement = document.querySelector(".draw");
const greaterButtonElement = document.querySelector(".greater");
const smallerButtonElement = document.querySelector(".smaller");
const overviewElement = document.querySelector(".overview");
const resultElement = document.querySelector(".result");

const getDeck = () => {
  const deck = [];

  suits.forEach((suit) => {
    cardNumbers.forEach((cardNumber, numberPosition) => {
      deck.push({ cardNumber, suit, value: numberPosition });
    });
  });

  return deck;
};

const revealGameCard = () => {
  const gameCardElement = document.querySelector(".game-card");
  const gameCardValuesElement = document.querySelectorAll(".game-card-value");
  const gameCardSuitsElement = document.querySelectorAll(".game-card-suit");

  gameCardElement.classList.add(gameCard.suit + "-up-card");
  gameCardElement.classList.remove("down-card");
  gameCardValuesElement[0].textContent = gameCard.cardNumber;
  gameCardValuesElement[1].textContent = gameCard.cardNumber;

  gameCardSuitsElement[0].textContent = gameCard.suit;
  gameCardSuitsElement[1].textContent = gameCard.suit;
};

const getRandomCards = () => {
  const userCardPosition = Math.floor(Math.random() * getDeck().length);
  const gameCardPosition = Math.floor(Math.random() * getDeck().length);

  userCard = getDeck()[userCardPosition];
  gameCard = getDeck()[gameCardPosition];

  const userCardElement = document.querySelector(".user-card");
  const gameCardElement = document.querySelector(".game-card");

  gameCardElement.className = "game-card down-card";
  userCardElement.className = "user-card " + userCard.suit + "-up-card";
  const userCardValuesElement = document.querySelectorAll(".user-card-value");
  const userCardSuitsElement = document.querySelectorAll(".user-card-suit");

  userCardValuesElement[0].textContent = userCard.cardNumber;
  userCardValuesElement[1].textContent = userCard.cardNumber;

  userCardSuitsElement[0].textContent = userCard.suit;
  userCardSuitsElement[1].textContent = userCard.suit;
};

const compareCards = () => {
  if (userCard.value < gameCard.value) {
    return true;
  } else {
    return false;
  }
};

const showResult = (isGuessCorrect) => {
  if (isGuessCorrect) {
    setTimeout(function () {
      resultElement.classList.remove("tie");
      resultElement.classList.remove("loser");
      resultElement.classList.add("winner");
      overviewElement.classList.toggle("off");
    }, 1000);
  } else if (!isGuessCorrect) {
    setTimeout(function () {
      resultElement.classList.remove("tie");
      resultElement.classList.remove("winner");
      resultElement.classList.add("loser");
      overviewElement.classList.toggle("off");
    }, 1000);
  }
};

startButtonElement.addEventListener("click", (event) => {
  event.stopPropagation();
  getRandomCards();
  firstScreenElement.classList.toggle("off");
  secondScreenElement.classList.toggle("off");
  guessButtonsElement.classList.toggle("off");
  mainTitleElement.classList.toggle("off");
});

drawButtonElement.addEventListener("click", (event) => {
  event.stopPropagation();
  getRandomCards();
});

greaterButtonElement.addEventListener("click", (event) => {
  console.log(userCard, gameCard);
  event.stopPropagation();
  revealGameCard();

  if (userCard.value === gameCard.value) {
    setTimeout(function () {
      resultElement.classList.remove("loser");
      resultElement.classList.remove("winner");
      resultElement.classList.add("tie");
      overviewElement.classList.toggle("off");
    }, 1000);
  } else {
    if (compareCards()) {
      showResult(true);
    } else if (!compareCards()) {
      showResult(false);
    }
  }
});

smallerButtonElement.addEventListener("click", (event) => {
  console.log(userCard, gameCard);
  event.stopPropagation();
  revealGameCard();

  if (userCard.value === gameCard.value) {
    setTimeout(function () {
      resultElement.classList.remove("loser");
      resultElement.classList.remove("winner");
      resultElement.classList.add("tie");
      overviewElement.classList.toggle("off");
    }, 1000);
  } else {
    if (compareCards()) {
      showResult(false);
    } else if (!compareCards()) {
      showResult(true);
    }
  }
});

overviewElement.addEventListener("click", (event) => {
  event.stopPropagation();
  firstScreenElement.classList.toggle("off");
  secondScreenElement.classList.toggle("off");
  overviewElement.classList.toggle("off");
  guessButtonsElement.classList.toggle("off");
  mainTitleElement.classList.toggle("off");
});

getDeck();
