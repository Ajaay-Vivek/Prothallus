// Correct answer
const PASSWORD = "ma";

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    if (document.getElementById("passwordModal")) return;

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "passwordModal";

    overlay.innerHTML = `
        <div class="modal">

            <h2>Question One</h2>

            <p>
                What do I like to call you?
            </p>

            <input
                type="password"
                id="passwordInput"
                placeholder="Your answer..."
                autocomplete="off"
            >

            <p id="modalError"></p>

            <div class="modal-buttons">
                <button id="cancelBtn">Cancel</button>
                <button id="submitBtn">Continue</button>
            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    const input = document.getElementById("passwordInput");
    input.focus();

    function verifyPassword(){

        const entered = input.value.trim().toLowerCase();

        if(entered === PASSWORD){

            sessionStorage.setItem("passwordPassed","true");

            window.location.href = "verify.html";

        }else{

            document.getElementById("modalError").textContent =
            "Hmm... that's not what I usually call you.";

            input.value = "";
        }

    }

    document
        .getElementById("submitBtn")
        .addEventListener("click", verifyPassword);

    input.addEventListener("keydown",(e)=>{

        if(e.key==="Enter"){
            verifyPassword();
        }

    });

    document
        .getElementById("cancelBtn")
        .addEventListener("click",()=>{

            overlay.remove();

        });

    overlay.addEventListener("click",(e)=>{

        if(e.target===overlay){

            overlay.remove();

        }

    });

});
