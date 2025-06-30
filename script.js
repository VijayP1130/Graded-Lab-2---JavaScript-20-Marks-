const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Mozilla",
            "Netscape",
            "Microsoft",
            "Google"
        ],
        answer: "Netscape"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Color Style Sheets",
            "Creative Style System",
            "Computer Style System"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "float"
        ],
        answer: "var"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");
const percentageEl = document.getElementById("percentage");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => selectOption(option);
        optionsEl.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        score++;
    }

    nextBtn.style.display = "block";
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    resultContainer.classList.remove("hide");
    scoreEl.textContent = `Your Score: ${score} out of ${questions.length}`;
    percentageEl.textContent = `Percentage: ${(score / questions.length * 100).toFixed(2)}%`;
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextBtn.style.display = "none";
        showQuestion();
    } else {
        showResult();
    }
});

// Initialize first question
showQuestion();
