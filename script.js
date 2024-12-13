document.title = "Guess Game";

function getrandmno() {
    let x = 1 + Math.random() * (100 - 1);
    return Math.ceil(x);
}

let no = getrandmno();
console.log(no);
let score = 100;

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(confetti);
    }
}

window.onload = function () {
    document.body.innerHTML = '';
    document.body.style.backgroundColor = '#f0f0f0';
    guessgame(no);
}


function getRandomColor() {
    const colors = ['#ffcc00', '#ff69b4', '#ff6347', '#1e90ff', '#32cd32'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function guessgame(no) {
    let input;
    do {
        input = parseInt(prompt("Enter a number ranging from 1-100 : "));
        if (input > no) {
            score--;
            alert(`The number entered is greater than the target number.\nScore: ${score}`);
            document.body.style.backgroundColor = "red";
        } else if (input < no) {
            score--;
            alert(`The number entered is smaller than the target number.\nScore: ${score}`);
            document.body.style.backgroundColor = "red";
        } else if (input < 1 || input > 100) {
            alert("Please enter a number within the specified range (1-100).");
        } else {
            document.body.innerHTML = `
                <div class="winning-message" style="display:block;">You guessed it right! Your score is: <span id="score">${score}</span></div>`
            document.body.style.backgroundColor = "green";
            createConfetti();
            return;
        }
    } while (input !== no);
}