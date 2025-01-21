const questions = [
  {
    question: "What does KCS stand for?",
    answers: ["Knowledge-Centered Service", "Knowledge-Centric Strategy", "Key Customer Support", "Knowledge Collaboration System"],
    correct: 0
  },
  {
    question: "What is a key benefit of KCS?",
    answers: ["Improved customer satisfaction", "Faster ticket resolution", "Enhanced team collaboration", "All of the above"],
    correct: 3
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let askedQuestions = [];

function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  const answersContainer = document.getElementById("answers");

  if (askedQuestions.length === questions.length) {
    displayFinalScore();
    return;
  }

  do {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
  } while (askedQuestions.includes(currentQuestionIndex));

  askedQuestions.push(currentQuestionIndex);

  const question = questions[currentQuestionIndex];
  questionContainer.textContent = question.question;
  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}">
      ${answer}
    `;
    answersContainer.appendChild(label);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();

  const selected = document.querySelector("input[name='answer']:checked");
  const feedback = document.getElementById("feedback");

  if (!selected) {
    feedback.textContent = "Please select an answer.";
    return;
  }

  const isCorrect = parseInt(selected.value) === questions[currentQuestionIndex].correct;
  if (isCorrect) {
    score++;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Wrong answer.";
  }

  setTimeout(() => {
    feedback.textContent = "";
    loadQuestion();
  }, 1000);
}

function displayFinalScore() {
  const questionContainer = document.getElementById("question-container");
  const answersForm = document.getElementById("answers-form");
  const scoreDisplay = document.getElementById("score");

  questionContainer.textContent = "Quiz Complete!";
  answersForm.style.display = "none";
  scoreDisplay.textContent = `Your final score is ${score} out of ${questions.length}.`;
}

document.getElementById("answers-form").addEventListener("submit", handleFormSubmit);
document.addEventListener("DOMContentLoaded", loadQuestion);

