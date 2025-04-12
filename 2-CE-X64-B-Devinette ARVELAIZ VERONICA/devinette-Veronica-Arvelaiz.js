let min = 1;
let max = 100;
const nombreMystere = Math.floor(Math.random() * max) + min;
let tentative = 0;
let deviner = false;

const messageElement = document.getElementById("message");
const submitButton = document.getElementById("submit");
const guessInput = document.getElementById("guess");

submitButton.addEventListener("click", () => {
    const reponse = guessInput.value;
    tentative++;

    if (reponse === "") {
        messageElement.textContent = "Veuillez entrer un nombre.";
        messageElement.className = "message lose";
        return;
    }

    const nombre = parseInt(reponse, 10);

    if (isNaN(nombre)) {
        messageElement.textContent = "Ce n'est pas un nombre valide. Veuillez réessayer !";
        messageElement.className = "message lose";
    } else if (nombre < nombreMystere) {
        messageElement.textContent = "C'est plus !";
        messageElement.className = "message";
    } else if (nombre > nombreMystere) {
        messageElement.textContent = "C'est moins !";
        messageElement.className = "message";
    } else {
        messageElement.textContent = `Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`;
        messageElement.className = "message win";
        deviner = true;
    }
});
