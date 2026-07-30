const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    const password = prompt("When did i first IT for the first time - date:");

    if (password === "120726") {
        document.querySelector(".container").innerHTML = `
            <h1>🎉 Access Granted!</h1>
            <p>Welcome! Your video will appear below.</p>

            <iframe
                width="100%"
                height="350"
                src="https://drive.google.com/file/d/1_8Jc5kd5J4eKqXpdPz1nJru68K9lyJAw/view?usp=drive_link"
                allow="autoplay"
                allowfullscreen>
            </iframe>
        `;
    } else {
        alert("❌ Thappu po, thirupi try karo lol");
    }
});
