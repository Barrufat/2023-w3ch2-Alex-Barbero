const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const figures = ["♠", "♣", "♦", "♥"];

const getDeck = () => {
  const deck = [];
  figures.forEach((figure) => {
    numbers.forEach((number) => {
      deck.push({ number: number, figure: figure });
    });
  });
  return deck;
};

console.log(getDeck());
