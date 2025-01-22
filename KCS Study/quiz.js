const questions = [
  
  //80.
{
    "question": "In KCS, how should organizations handle the tension between 'speed to publish' and 'accuracy of content'?",
    "answers": [
        "Prioritize accuracy over speed in all cases",
        "Implement a rapid publish model with clear indicators of content maturity and confidence levels",
        "Create separate workflows for urgent vs. standard knowledge creation",
        "Always require peer review before publishing"
    ],
    "correct": 1
},
{
    "question": "How does the KCS concept of 'perspective' influence article structure when dealing with multi-tenant environments?",
    "answers": [
        "Create separate articles for each tenant",
        "Use metadata and filtering to adapt single articles to different contexts",
        "Maintain a generic version that works for all tenants",
        "Only document common scenarios across tenants"
    ],
    "correct": 1
},
{
    "question": "When implementing KCS in a global organization, how should local variations in process be handled?",
    "answers": [
        "Standardize all processes globally",
        "Allow complete local autonomy",
        "Create a framework that defines what must be consistent and what can be locally adapted",
        "Maintain separate knowledge bases for each region"
    ],
    "correct": 2
},
{
    "question": "How does the 'Solve Loop' need to be modified when dealing with AI-powered customer interactions?",
    "answers": [
        "Replace the Solve Loop with AI automation",
        "Maintain the same process regardless of AI involvement",
        "Integrate AI insights while preserving human validation and knowledge capture",
        "Create separate processes for AI and human interactions"
    ],
    "correct": 2
},
{
    "question": "In a scenario where KCS adoption is creating tension with existing ITIL processes, what is the recommended approach?",
    "answers": [
        "Abandon ITIL in favor of KCS",
        "Keep KCS and ITIL processes completely separate",
        "Identify integration points where KCS can enhance ITIL processes while maintaining governance",
        "Modify KCS to fit within ITIL framework"
    ],
    "correct": 2
},
  //85.
{
    "question": "How should the KCS health metrics be adjusted when implementing in an organization with high staff turnover?",
    "answers": [
        "Focus solely on article quality metrics",
        "Modify participation and contribution metrics to account for learning curves and tenure",
        "Eliminate individual performance metrics",
        "Use only team-based metrics"
    ],
    "correct": 1
},
    {
    question: "What are two benefits of having a KCS Content Standard?",
    answers: [
      "It improves the quality of incidents",
      "It defines the structure of an Article",
      "It defines the structure of an incident",
      "It improves the quality of KCS Articles"
    ],
    correctAnswers: [1, 3] 
  }
  
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let askedQuestions = [];
let isQuestionAnswered = false; // To check if the question has been answered

function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  const answersContainer = document.getElementById("answers");
  const questionCountContainer = document.getElementById("question-count");

  // If all 20 questions have been asked, grade the quiz
  if (askedQuestions.length === 20) {
    displayFinalScore();
    return;
  }

  // Randomly select a question that has not been asked yet
  do {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
  } while (askedQuestions.includes(currentQuestionIndex));

  askedQuestions.push(currentQuestionIndex);

  const question = questions[currentQuestionIndex];
  questionContainer.textContent = question.question;
  answersContainer.innerHTML = "";

  // Display the answer choices
  question.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="${Array.isArray(question.correctAnswers) ? "checkbox" : "radio"}" name="answer" value="${index}">
      ${answer}
    `;
    answersContainer.appendChild(label);
  });

  // Update the question count (e.g., Question 1 of 20)
  const currentQuestionNumber = askedQuestions.length;
  questionCountContainer.textContent = `Question ${currentQuestionNumber} of 20`;

  // Reset the isQuestionAnswered flag for the new question
  isQuestionAnswered = false;

  // Enable the "Next Question" button
  document.getElementById("next-btn").disabled = true;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const selected = Array.from(document.querySelectorAll("input[name='answer']:checked"));
  const feedback = document.getElementById("feedback");

  if (selected.length === 0) {
    feedback.textContent = "Please select at least one answer.";
    return;
  }

  const question = questions[currentQuestionIndex];
  const selectedValues = selected.map(input => parseInt(input.value));

  let isCorrect;
  if (Array.isArray(question.correctAnswers)) {
    // For multiple correct answers
    isCorrect =
      selectedValues.length === question.correctAnswers.length &&
      selectedValues.every(val => question.correctAnswers.includes(val));
  } else {
    // For single correct answer
    isCorrect = selectedValues[0] === question.correct;
  }

  if (isCorrect) {
    score++;
    feedback.textContent = "Correct!";
  } else {
    if (Array.isArray(question.correctAnswers)) {
      const correctAnswersText = question.correctAnswers.map(idx => question.answers[idx]).join(", ");
      feedback.textContent = `Wrong. Correct answers are: ${correctAnswersText}`;
    } else {
      const correctAnswerText = question.answers[question.correct];
      feedback.textContent = `Wrong. The correct answer is: ${correctAnswerText}`;
    }
  }

  // Set the flag to true and enable the "Next Question" button
  isQuestionAnswered = true;
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  // Only load the next question if the current one has been answered
  if (!isQuestionAnswered) return;

    // Clear feedback message
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";

  loadQuestion(); // Load the next question
}

function displayFinalScore() {
  const questionContainer = document.getElementById("question-container");
  const answersForm = document.getElementById("answers-form");
  const scoreDisplay = document.getElementById("score");

  questionContainer.textContent = "Quiz Complete!";
  answersForm.style.display = "none";
  scoreDisplay.textContent = `Your final score is ${score} out of 20.`;

  // Reset for a new quiz after a delay
  setTimeout(() => {
    resetQuiz();
  }, 5000); // Delay before resetting the quiz for retake
}

function resetQuiz() {
  // Reset variables
  score = 0;
  askedQuestions = [];
  currentQuestionIndex = 0;

  // Show the form again and load the first question
  document.getElementById("answers-form").style.display = "block";
  loadQuestion();
}

document.getElementById("answers-form").addEventListener("submit", handleFormSubmit);
document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.addEventListener("DOMContentLoaded", loadQuestion);

