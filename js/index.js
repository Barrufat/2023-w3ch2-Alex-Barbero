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

const drawButtonElement = document.querySelector(".draw");

const getDeck = () => {
  const deck = [];

  suits.forEach((suit) => {
    cardNumbers.forEach((cardNumber, numberPosition) => {
      deck.push({ cardNumber, suit, value: numberPosition });
    });
  });

  return deck;
};

const revealGameCard = (gameCard) => {
  console.log(gameCard);
  const gameCardElement = document.querySelector(".game-card");
  const gameCardValuesElement = document.querySelectorAll(".game-card-value");
  const gameCardSuitsElement = document.querySelectorAll(".game-card-suit");

  gameCardElement.classList.add(gameCard.suit+"-up-card");
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

  userCardElement.classList.add(userCard.suit+"-up-card");
  const userCardValuesElement = document.querySelectorAll(".user-card-value");
  const userCardSuitsElement = document.querySelectorAll(".user-card-suit");

  userCardValuesElement[0].textContent = userCard.cardNumber;
  userCardValuesElement[1].textContent = userCard.cardNumber;

  userCardSuitsElement[0].textContent = userCard.suit;
  userCardSuitsElement[1].textContent = userCard.suit;
};

startButtonElement.addEventListener("click", (event) => {
  event.stopPropagation();
  getRandomCards();
  firstScreenElement.classList.toggle("off");
  secondScreenElement.classList.toggle("off");
});

getDeck();

drawButtonElement.addEventListener("click", (event) => {
  event.stopPropagation();
  revealGameCard(gameCard);
});
