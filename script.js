const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    const password = prompt("Enter the secret password:");

    if (password === "secret123") {
        document.querySelector(".container").innerHTML = `
            <h1>🎉 Access Granted!</h1>
            <p>Welcome! Your video will appear below.</p>

            <iframe
                width="100%"
                height="350"
                src="YOUR_GOOGLE_DRIVE_EMBED_LINK"
                allow="autoplay"
                allowfullscreen>
            </iframe>
        `;
    } else {
        alert("❌ Incorrect password. Try again!");
    }
});
