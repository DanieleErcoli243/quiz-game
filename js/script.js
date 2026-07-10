// seleziono gli elementi dal DOM

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionSpan = document.getElementById('total-question');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');

// array di domande per il quiz

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text:"London", correct: false},
            {text:"Berlin", correct: false},
            {text:"Paris", correct: true},
            {text:"Madrid", correct: false},
        ],
    },

    {
        question: "Which planet is know as the Red Planet?",
        anwsers: [
            {text: "Venus", correct: false},
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
            {text: "Venus", correct: false},
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        anwsers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
        ],
    },
    {
        question: "Which of these is NOT a programming language?",
        anwsers: [
            {text: "Java", correct: false},
            {text: "Python", correct: false},
            {text: "Banana", correct: true},
            {text: "Javascript", correct: false},
        ],
    },
    {
        question: "What is the chemical symbol for gold?",
        anwsers: [
            {text: "Go", correct: false},
            {text: "Gd", correct: false},
            {text: "Au", correct: true},
            {text: "Ag", correct: false},
        ],
    },
];

// variabili per lo stato del quiz

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.innerText = quizQuestions.length;
maxScoreSpan.innerText = quizQuestions.length;

// aggiungo gli ascoltatori di eventi

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);


