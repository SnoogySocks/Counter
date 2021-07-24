// Maybe add a timer

// The number of times the user clicked
let numClicks = 0;

const counter = document.getElementById("counter");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    counter.textContent = (parseInt(counter.textContent) + 1).toString();
});