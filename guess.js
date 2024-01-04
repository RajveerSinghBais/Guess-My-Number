let secNum = Math.random = Math.floor(Math.random() * 20) + 1;

let num = document.querySelector('.guess');

let message = document.querySelector('.message');

let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
    if (num.value < secNum) {
        message.textContent = "too low";
        if (score >= 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = "you lost";
        }
    } else if (num.value > secNum) {
        message.textContent = "too high";
        if (score >= 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = "you lost";
        }
    } else if (num.value == secNum) {
        message.textContent = "you win!";
        document.querySelector('.number').textContent = secNum;
    };
});





