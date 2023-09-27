const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const figures = ["♠", "♣", "♦", "♥"];
const startButtonElement = document.querySelector(".start-game");
const firstScreenElement = document.querySelector(".first-screen");
const secondScreenElement = document.querySelector(".second-screen");

const getDeck = () => {
  const deck = [];
  figures.forEach((figure) => {
    numbers.forEach((number) => {
      deck.push({ number: number, figure: figure });
    });
  });
  return deck;
};

startButtonElement.addEventListener("click", () => {
  firstScreenElement.classList.toggle("off");
  secondScreenElement.classList.toggle("off");
});
