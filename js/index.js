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

const startButtonElement = document.querySelector(".start-game");
const firstScreenElement = document.querySelector(".first-screen");
const secondScreenElement = document.querySelector(".second-screen");

const getDeck = () => {
  const deck = [];

  suits.forEach((suit) => {
    cardNumbers.forEach((cardNumber, numberPosition) => {
      deck.push({ cardNumber, suit, value: numberPosition });
    });
  });

  return deck;
};

const getRandomCards = () => {
  const userCardPosition = Math.floor(Math.random() * getDeck().length);
  const gameCardPosition = Math.floor(Math.random() * getDeck().length);

  const userCard = getDeck()[userCardPosition];
  const gameCard = getDeck()[gameCardPosition];

  const userCardValues = document.querySelectorAll(".user-card-value");
  userCardValues[0].textContent = userCard.cardNumber;
  userCardValues[1].textContent = userCard.cardNumber;

  const userCardSuits = document.querySelectorAll(".user-card-suit");
  userCardSuits[0].textContent = userCard.suit;
  userCardSuits[1].textContent = userCard.suit;

  const gameCardValues = document.querySelectorAll(".game-card-value");
  gameCardValues[0].textContent = gameCard.cardNumber;
  gameCardValues[1].textContent = gameCard.cardNumber;

  const gameCardSuits = document.querySelectorAll(".game-card-suit");
  gameCardSuits[0].textContent = gameCard.suit;
  gameCardSuits[1].textContent = gameCard.suit;
};

startButtonElement.addEventListener("click", () => {
  getRandomCards();
  firstScreenElement.classList.toggle("off");
  secondScreenElement.classList.toggle("off");
});

getDeck();
