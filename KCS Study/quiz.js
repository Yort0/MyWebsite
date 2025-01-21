const questions = [
  {
    question: "What is the primary goal of KCS?",
    answers: ["Reduce operational costs", "Create a knowledge base for marketing", "Integrate knowledge creation into the problem-solving process", "Automate customer service entirely"],
    correct: 2
  },
  {
    question: "What are the four main principles of KCS?",
    answers: ["Capture, Structure, Reuse, Improve", "Solve, Share, Standardize, Scale", "Knowledge, Collaboration, Sharing, Service", "Capture, Automate, Enhance, Deliver"],
    correct: 0
  },
  {
    question: "What does 'just-in-time' knowledge capture mean in KCS?",
    answers: ["Creating knowledge before customer interaction", "Capturing knowledge at the moment it is needed", "Documenting only resolved issues", "Automatically generating articles for the knowledge base"],
    correct: 1
  },
  {
    question: "What is the purpose of the KCS Article Quality Index (AQI)?",
    answers: ["To ensure all articles are written in the same style", "To measure and improve the quality of knowledge articles", "To track the number of articles published daily", "To identify the most popular articles"],
    correct: 1
  },
  {
    question: "Which statement best describes the KCS double-loop process?",
    answers: ["It is a process to evaluate knowledge base performance", "It is a feedback mechanism for continuous improvement", "It includes both individual and organizational learning", "It refers to revisiting problems to create more detailed articles"],
    correct: 2
  },
  {
    question: "What is a key benefit of the 'Reuse' step in the KCS methodology?",
    answers: ["Minimizes duplication of effort", "Helps train new employees", "Ensures knowledge base articles are detailed", "Reduces the number of customer service requests"],
    correct: 0
  },
  {
    question: "In KCS, what is meant by the 'Evolve Loop'?",
    answers: ["The process of improving knowledge articles through individual use", "The organizational processes that analyze and improve the knowledge base", "A cycle for training employees on knowledge base tools", "A system for removing outdated knowledge articles"],
    correct: 1
  },
  {
    question: "What is the recommended format for structuring KCS articles?",
    answers: ["Problem, Cause, Solution", "Title, Environment, Resolution, Metadata", "Issue, Root Cause, Fix", "Summary, Details, Conclusion"],
    correct: 1
  },
  {
    question: "Why is linking important in KCS practices?",
    answers: ["To prioritize certain articles over others", "To associate knowledge articles with the issues they resolve", "To connect the knowledge base to external resources", "To track which articles are read the most"],
    correct: 1
  },
      // 10.
  {
    question: "Which role is primarily responsible for maintaining article quality in a KCS system?",
    answers: ["Knowledge Domain Expert", "Article Reviewer", "Knowledge Worker", "KCS Coach"],
    correct: 3
  },
  {
    question: "What is a key indicator of success in a KCS implementation?",
    answers: ["The number of articles created", "A high rate of customer satisfaction", "The speed of article publishing", "Fewer customer complaints about service time"],
    correct: 1
  },
  {
    question: "What does the term 'collective ownership' mean in KCS?",
    answers: ["Teams vote on which articles to publish", "Everyone contributes to and improves knowledge articles", "All employees share the responsibility for customer issues", "Knowledge base articles belong to a single department"],
    correct: 1
  },
  {
    question: "What is a key principle of KCS regarding the ownership of knowledge articles?",
    answers: ["Articles must be owned and updated by a designated expert", "Articles are owned collectively and can be improved by anyone", "Articles should not be modified once they are published", "Each department owns its respective articles"],
    correct: 1
  },
  {
    question: "What is the primary benefit of capturing knowledge at the point of interaction?",
    answers: ["Reduces the time required to create a knowledge base", "Ensures that knowledge is relevant and accurate", "Allows for faster article approval by management", "Prevents duplicate articles from being created"],
    correct: 1
  },
  {
    question: "In KCS, what is the role of the Knowledge Worker?",
    answers: ["To review and approve knowledge base articles", "To create, reuse, and update knowledge articles during their workflow", "To oversee the entire knowledge management process", "To train other team members on KCS principles"],
    correct: 1
  },
  {
    question: "Which of the following is NOT a key KCS activity?",
    answers: ["Reusing knowledge", "Capturing knowledge", "Structuring knowledge", "Archiving outdated knowledge"],
    correct: 3
  },
  {
    question: "How does KCS encourage organizational learning?",
    answers: ["By tracking mistakes and assigning blame", "By creating a feedback loop that improves processes and content", "By requiring weekly training sessions on the knowledge base", "By focusing solely on customer feedback"],
    correct: 1
  },
  {
    question: "What is the purpose of metadata in a KCS article?",
    answers: ["To provide a summary of the article", "To describe the structure of the knowledge base", "To make articles searchable and provide context", "To track the authors of the article"],
    correct: 2
  },
  {
    question: "What does the 'Solve Loop' focus on in the KCS methodology?",
    answers: ["Monitoring article quality over time", "Analyzing and improving overall organizational processes", "Integrating knowledge activities into problem-solving workflows", "Training employees on knowledge management tools"],
    correct: 2
  },
      // 20.
  {
    question: "Why is trust important in a KCS implementation?",
    answers: ["It ensures customers rely on the knowledge base for answers", "It allows employees to confidently contribute and modify knowledge", "It prevents employees from misusing knowledge articles", "It ensures management reviews all published content"],
    correct: 1
  },
  {
    question: "What is a core tenet of KCS regarding article creation?",
    answers: ["Articles should be as detailed as possible, regardless of frequency of use", "Articles should be written only by experts in the subject", "Articles should be 'good enough' for reuse and improve over time", "Articles should include comprehensive metadata at the start"],
    correct: 2
  },
  {
    question: "How does KCS measure the success of the knowledge base?",
    answers: ["By the number of articles created", "By the frequency of knowledge base updates", "By the reduction of redundant work and increased resolution rates", "By the number of employees contributing to the knowledge base"],
    correct: 2
  },
  {
    question: "What is the best practice for retiring outdated knowledge articles?",
    answers: ["Deleting them immediately", "Marking them as inactive and maintaining a clear audit trail", "Archiving them in a separate system", "Keeping them for historical reference"],
    correct: 1
  },
  {
    question: "How does KCS align with an organization’s goals?",
    answers: ["By focusing exclusively on increasing customer satisfaction", "By driving operational efficiency and enabling continuous improvement", "By creating a standalone knowledge base team", "By replacing traditional support systems entirely"],
    correct: 1
  },
      // 25.
  {
    question: "What is a Knowledge State?",
    answers: ["It is a condition when information is defined as trusted knowledge", "It is the form used to define knowledge", "It is the status of the article in the knowledge article life cycle", "It is the time when tacit knowledge becomes explicit"],
    correct: 2
  },
  {
    question: "Who normally performs the knowledge monitoring process?",
    answers: ["Everyone", "KCS Coaches", "KCS Publishers", "KCS Program Team"],
    correct: 1
  },
  {
    question: "What is the primary purpose of knowledge monitoring?",
    answers: ["Create a knowledge quality index", "Ensure that the process is being followed", "Identify and eliminate redundancy", "Improve the skills of the analysts"],
    correct: 3
  },
  {
    question: "What are three key components of the visibility matrix?",
    answers: ["Audience, Knowledge State, Access Rights", "Audience, Knowledge State, Reuse Counter", "Audience, Reuse Counter, Access Rights", "Knowledge State, Reuse Counter, Access Rights"],
    correct: 1
  },
  {
    question: "Which term relates to the structure of KCS?",
    answers: ["Framework", "Methodology", "Philosophy", "Standard"],
    correct: 1
  },
  // 30.
  {
    question: "What are the three levels of KCS benefits?",
    answers: ["Centralized, Distributed, Virtual", "Direct, Applied, Leveraged", "Operational, Tactical, Strategic", "Significant, Major, Minor"],
    correct: 1
  },
  {
    question: "Which KCS role is responsible for monitoring processes and mentoring people?",
    answers: ["KCS Candidate", "KCS Coach", "KCS Manager", "KCS Publisher"],
    correct: 1
  },
  {
    question: "Which KCS role is responsible for providing the vision, objectives, and resources?",
    answers: ["KCS Council", "KCS Manager", "Management", "Sponsor"],
    correct: 1
  },
  {
    question: "Which KCS role is limited to using existing articles, flagging articles as necessary, and adding new articles?",
    answers: ["KCS Candidate", "KCS Contributor", "KCS Domain Expert", "KCS Publisher"],
    correct: 1
  },
  {
    question: "Which KCS role has the ability to fix knowledge articles as long as it is not visible to the customer?",
    answers: ["KCS Candidate", "KCS Contributor", "KCS Domain Expert", "KCS Publisher"],
    correct: 1
  },
  {
    question: "Which KCS role is responsible for analyzing the knowledge usage and performing tasks related to problem management?",
    answers: ["KCS Coach", "KCS Publisher", "Knowledge Domain Expert", "Management"],
    correct: 1
  },
  {
    question: "Which of the following is a leading indicator?",
    answers: ["Cost per Incident", "Customer Satisfaction", "Knowledge Quality Index", "Participation Rate"],
    correct: 3
  },
  {
    question: "What should you do before you seek to solve an issue?",
    answers: ["Search to see if it is a known issue to the organization", "Seek out analysts who know more about the product", "Set an expectation for the customer that this may take some time", "State the issue clearly, in your own words"],
    correct: 0
  },
  {
    question: "Which KCS role is responsible for managing/supervising the KCS Coaches?",
    answers: ["KCS Council", "KCS Domain Manager", "KCS Manager", "Management"],
    correct: 2
  },
  {
    question: "What does the customer contribute to a knowledge article?",
    answers: ["Cause", "Environment", "Resolution", "Title"],
    correct: 1
  },
  // 40.
  {
    question: "Which KCS role is the most important when it comes to establishing the vision and objectives of the KCS program?",
    answers: ["KCS Coach", "KCS Council", "KCS Program Team", "Sponsor"],
    correct: 1
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

  // If all 20 questions have been asked, grade the quiz
  if (askedQuestions.length === 20) {
    displayFinalScore();
    return;
  }

  // Randomly select a question that has not been asked yet
  do {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
  } while (askedQuestions.includes(currentQuestionIndex)); // Ensure no repeats

  askedQuestions.push(currentQuestionIndex);

  const question = questions[currentQuestionIndex];
  questionContainer.textContent = question.question;
  answersContainer.innerHTML = "";

  // Display the answer choices
  question.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}">
      ${answer}
    `;
    answersContainer.appendChild(label);
  });

  // Reset the isQuestionAnswered flag for the new question
  isQuestionAnswered = false;

  // Enable the "Next Question" button
  document.getElementById("next-btn").disabled = true;
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
    // Show the correct answer if the user is wrong
    const correctAnswer = questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correct];
    feedback.textContent = `Wrong answer. The correct answer is: ${correctAnswer}`;
  }

  // Set the flag to true and enable the "Next Question" button
  isQuestionAnswered = true;
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  // Only load the next question if the current one has been answered
  if (!isQuestionAnswered) return;

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

