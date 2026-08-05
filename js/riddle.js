// Prevent users from skipping ahead
if (sessionStorage.getItem("disclaimerAccepted") !== "true") {
    window.location.href = "index.html";
}

const answerBox = document.getElementById("riddleAnswer");
const submitBtn = document.getElementById("submitAnswer");
const error = document.getElementById("error-message");

// All accepted answers
const validAnswers = [
    "germany",
    "belgium",
    "jamaica",
    "uganda"
];

function checkAnswer() {

    const answer = answerBox.value.trim().toLowerCase();

    if (validAnswers.includes(answer)) {

        sessionStorage.setItem("riddleSolved", "true");
        window.location.href = "player.html";

    } else {

        error.textContent = "That's not quite it. Try again.";
        answerBox.value = "";
        answerBox.focus();

    }

}

submitBtn.addEventListener("click", checkAnswer);

answerBox.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        checkAnswer();
    }

});
