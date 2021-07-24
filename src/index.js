// The number of times the user clicked
const startingTime = 100;

const timer = document.querySelector(".text");
const counter = document.getElementById("counter");
const button = document.querySelector("button");

const endTimer = () => {
	button.parentNode.removeChild(button);

	// User results
	timer.textContent = "You clicked";
	timer.parentNode.insertAdjacentHTML(
		"beforeend",
		/*html*/ `
					<span class="text">times in ${Math.round(startingTime / 10)}s!</span>
				`
	);
};

const startTimer = () => {
	let timeLeft = startingTime;
	let countDown = setInterval(() => {
		--timeLeft;
		timer.textContent = `${Math.floor(timeLeft / 10).toString()}.${
			timeLeft % 10
		}s`;

		// Exit
		if (timeLeft <= 0) {
			endTimer();
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
