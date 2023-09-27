const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suits = ["♠", "♣", "♦", "♥"];

const deck = [];

const startButtonElement = document.querySelector(".start-game");
const firstScreenElement = document.querySelector(".first-screen");
const secondScreenElement = document.querySelector(".second-screen");

const getDeck = () => {
  suits.forEach((suit) => {
    numbers.forEach((number) => {
      deck.push({ number, suit });
    });
  });
};

const getRandomCards = () => {
  const firstCardPosition = Math.floor(Math.random() * deck.length);
  const secondCardPosition = Math.floor(Math.random() * deck.length);

  const firstCard = deck[firstCardPosition];
  const secondCard = deck[secondCardPosition];

  console.log(firstCard);
  console.log(secondCard);
};

startButtonElement.addEventListener("click", () => {
  getRandomCards();
  firstScreenElement.classList.toggle("off");
  secondScreenElement.classList.toggle("off");
});

getDeck();
