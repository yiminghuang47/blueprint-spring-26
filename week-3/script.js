
// ==============================
// Live-coding Exercise 1: Interacting with the DOM
// ==============================

const greetButton = document.getElementById('greetBtn');
const greetOutput = document.getElementById('greetOutput');

greetButton.addEventListener('click', () => {
    greetOutput.textContent = "Hello, welcome to my portfolio!";
}
);

// ==============================
// Live-coding Exercise 2: Async / Promises
// ==============================

const revealButton = document.getElementById('revealBtn');
const secretMessage = document.getElementById('revealOutput');

revealButton.addEventListener('click', () => {
    secretMessage.textContent = 'Thinking...';
    setTimeout(() => {
        secretMessage.textContent = 'Surprise! You found the secret message!';
    }, 2000);
})