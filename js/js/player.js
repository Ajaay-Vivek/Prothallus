// Ensure the user completed every previous step
if (
    sessionStorage.getItem("passwordPassed") !== "true" ||
    sessionStorage.getItem("disclaimerAccepted") !== "true" ||
    sessionStorage.getItem("riddleSolved") !== "true"
) {
    window.location.href = "index.html";
}
