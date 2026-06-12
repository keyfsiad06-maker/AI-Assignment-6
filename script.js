const questions = [
    {
        question: "Which language is primarily used for web page interactivity?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Which programming language is known for data science and machine learning?",
        choices: ["Python", "HTML", "CSS", "PHP"],
        answer: "Python"
    },
    {
        question: "Which language is used to style web pages?",
        choices: ["Java", "C#", "CSS", "Ruby"],
        answer: "CSS"
    },
    {
        question: "Which of these is NOT a programming language?",
        choices: ["Python", "Java", "HTML", "C++"],
        answer: "HTML"
    },
    {
        question: "Which language was developed by Microsoft?",
        choices: ["Ruby", "C#", "PHP", "Swift"],
        answer: "C#"
    },
    {
        question: "Which language is commonly used for Android app development?",
        choices: ["Kotlin", "PHP", "Ruby", "SQL"],
        answer: "Kotlin"
    },
    {
        question: "Which language is famous for iOS app development?",
        choices: ["Swift", "Java", "Python", "Go"],
        answer: "Swift"
    },
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is often used for server-side web development?",
        choices: ["PHP", "CSS", "HTML", "Figma"],
        answer: "PHP"
    },
    {
        question: "Which language is created by Google and known for its simplicity?",
        choices: ["Go", "Perl", "Ruby", "Pascal"],
        answer: "Go"
    }
];

const gameData = {
    score: 0,
    currentQuestion: 0
};

const startScreen = document.getElementById("startScreen");
const gameArea = document.getElementById("gameArea");
const resultScreen = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");
const questionNumberElement =
    document.getElementById("questionNumber");

function loadQuestion() {

    const current = questions[gameData.currentQuestion];

    questionElement.textContent = current.question;

    questionNumberElement.textContent =
        `Question ${gameData.currentQuestion + 1} of ${questions.length}`;

    answerButtons.forEach((button, index) => {

        button.textContent = current.choices[index];

        button.onclick = () =>
            checkAnswer(current.choices[index]);
    });
}

function checkAnswer(selectedAnswer) {

    const correctAnswer =
        questions[gameData.currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        gameData.score++;
    }

    scoreElement.textContent =
        `Score: ${gameData.score}`;

    gameData.currentQuestion++;

    if (gameData.currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {

    gameArea.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const finalMessage =
        document.getElementById("finalMessage");

    const finalScore =
        document.getElementById("finalScore");

    if (gameData.score >= 8) {
        finalMessage.textContent = "🏆 YOU WIN!";
    } else {
        finalMessage.textContent = "❌ GAME OVER";
    }

    finalScore.textContent =
        `Final Score: ${gameData.score}/${questions.length}`;
}

function startGame() {

    startScreen.classList.add("hidden");
    gameArea.classList.remove("hidden");

    gameData.score = 0;
    gameData.currentQuestion = 0;

    scoreElement.textContent = "Score: 0";

    loadQuestion();
}

function restartGame() {

    resultScreen.classList.add("hidden");
    startGame();
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);