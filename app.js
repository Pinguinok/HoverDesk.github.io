const board = document.querySelector("#board");

// Version 1
// const colors = [
//   "#00FFFF",
//   "#7FFFD4",
//   "#AFEEEE",
//   "#00CED1",
//   "#87CEFA",
//   "#6495ED",
//   "#191970",
//   "#0000FF",
// ];

// Version 2
const colors = [
  "#4B0082",
  "#663399",
  "#483D8B",
  "#7B68EE",
  "#800080",
  "#9400D3",
  "#FF00FF",
  "#EE82EE",
];

const SQUARES_NUMBER = 760;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
