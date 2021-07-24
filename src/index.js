// The number of times the user clicked
let numClicks = 0;

const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const button = document.querySelector("button");

const startTimer = () => {
	let timeLeft = 100;
	let countDown = setInterval(() => {
		--timeLeft;
		timer.textContent = `${Math.floor(timeLeft / 10).toString()}.${
			timeLeft % 10
		}s`;

		// Exit
		if (timeLeft <= 0) {
			// Disable the button
			button.disabled = true;
			button.classList.add("disabledButton");
			button.textContent = "Finished!";
			clearInterval(countDown);
		}
	}, 100);
};

button.addEventListener("click", () => {
	// Only execute the first time the button is clicked
	if (counter.textContent === "0") {
		startTimer();
	}

	counter.textContent = (parseInt(counter.textContent) + 1).toString();
});
