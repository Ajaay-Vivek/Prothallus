// If the first question wasn't answered correctly,
// send the user back to the home page.
if (sessionStorage.getItem("passwordPassed") !== "true") {
    window.location.href = "index.html";
}

// Elements
const agreeBox = document.getElementById("agreeBox");
const continueBtn = document.getElementById("continueBtn");

// Keep the button disabled initially
continueBtn.disabled = true;

// Enable the button when the checkbox is checked
agreeBox.addEventListener("change", () => {
    continueBtn.disabled = !agreeBox.checked;
});

// Continue to the next page
continueBtn.addEventListener("click", () => {

    sessionStorage.setItem("disclaimerAccepted", "true");

    window.location.href = "riddle.html";

});
