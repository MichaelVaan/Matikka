'use strict';

let correctCount = 0;
let incorrectCount = 0;

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomizeNumbers = () => {
    const rand_num1 = getRandomIntNumberInRange(1, 10);
    const rand_num2 = getRandomIntNumberInRange(1, 10);

    document.querySelector('#num1').textContent = rand_num1;
    document.querySelector('#num2').textContent = rand_num2;
};

document.addEventListener('DOMContentLoaded', () => {
    randomizeNumbers();
});

document.querySelector('#calculate').addEventListener('click', () => {
    const num1 = Number(document.querySelector('#num1').textContent);
    const num2 = Number(document.querySelector('#num2').textContent);
    const userAnswer = Number(document.querySelector('#answer').value);
    const correctAnswer = num1 + num2;

    if (userAnswer === correctAnswer) {
        alert('Oikein!');
        correctCount++;
        document.querySelector('#correctCount').textContent = correctCount;
    } else {
        alert('Väärin!');
        incorrectCount++;
        document.querySelector('#incorrectCount').textContent = incorrectCount;
    }

    document.querySelector('#answer').value = '';
    randomizeNumbers();
});
