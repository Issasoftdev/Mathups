"use strict";

const startButton = document.querySelector("#startButton");
const submitButton = document.querySelector("#submitButton");
const restartButton = document.querySelector("#restartButton");
const scoreView = document.querySelector("#scoreWrapper");
const scoreDisplay = document.querySelector("#score");
const problemView = document.querySelector("#questionWrapper");
const problemDisplay = document.querySelector("#questionText");
const answerView = document.querySelector("#answerWrapper");
const messageView = document.querySelector("#messageWrapper");
const answerInput = document.querySelector("#userAnswer");
const playerMessage = document.querySelector("#playerMessage");
const alertMessage = document.querySelector("#alertMessage");

let question = [
    "What is the sum of 8 + 4?",
    "What is total of 3 multiplied by itself?",
    "What do you get when you divide 100 by 5?"
];

let answer = [12, 9, 20];

let userScore;
let userAnswer;
let questionNumber;
let totalQuestions = question.length;

startButton.addEventListener('click', startGame);
submitButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', startGame);


function test() {
    console.log('Working');
};

function startGame() {
    document.querySelector("#startInstruction").classList.add("hidden");
    userScore = 0;
    questionNumber = 0;
    scoreDisplay.innerHTML = userScore;
    startButton.classList.add("hidden");
    restartButton.classList.add("hidden");
    messageView.classList.remove("hidden");
    messageView.classList.add("flex");
    playerMessage.innerHTML = "";
    scoreView.classList.remove("hidden");
    scoreView.classList.add("flex");
    problemView.classList.remove("hidden");
    answerView.classList.remove("hidden");
    askQuestion();
};

function askQuestion() {
    problemDisplay.innerHTML = question[questionNumber];
};

function checkAnswer() {
    userAnswer = answerInput.value;
    if (userAnswer == answer[questionNumber]) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
};

function correctAnswer() {
    userScore += 10;
    updateScore();
    playerMessage.innerHTML = "You got it right! Well Done!"
    clearInput();
    nextQuestion();
};

function wrongAnswer() {
    playerMessage.innerHTML = "Wrong Answer! Better luck next time!"
    clearInput();
    nextQuestion();
};

function clearInput() {
    answerInput.value = "";
};

function updateScore() {
    scoreDisplay.innerHTML = userScore;
    
    return userScore
};

function nextQuestion() {
    if (questionNumber < totalQuestions - 1) {
        questionNumber++;
        askQuestion();
    } else {
        endGame();
    }
};

function endGame() {
    questionText.innerHTML = "Game Over! You scored " + userScore + " points";
    answerView.classList.add("hidden");
    restartButton.classList.remove("hidden");
};