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
  //5.
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
    correct: 2
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
  //15.
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
    question: "Why is trust important in a KCS implementation?",
    answers: ["It ensures customers rely on the knowledge base for answers", "It allows employees to confidently contribute and modify knowledge", "It prevents employees from misusing knowledge articles", "It ensures management reviews all published content"],
    correct: 1
  },
  //20.
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
  {
    question: "What is a Knowledge State?",
    answers: ["It is a condition when information is defined as trusted knowledge", "It is the form used to define knowledge", "It is the status of the article in the knowledge article life cycle", "It is the time when tacit knowledge becomes explicit"],
    correct: 2
  },
  //25.
  {
    question: "Who normally performs the knowledge monitoring process?",
    answers: ["Everyone", "KCS Coaches", "KCS Publishers", "KCS Program Team"],
    correct: 0
  },
  {
    question: "What is the primary purpose of knowledge monitoring?",
    answers: ["Create a knowledge quality index", "Ensure that the process is being followed", "Identify and eliminate redundancy", "Improve the skills of the analysts"],
    correct: 1
  },
  {
    question: "What are three key components of the visibility matrix?",
    answers: ["Audience, Knowledge State, Access Rights", "Audience, Knowledge State, Reuse Counter", "Audience, Reuse Counter, Access Rights", "Knowledge State, Reuse Counter, Access Rights"],
    correct: 0
  },
  {
    question: "Which term relates to the structure of KCS?",
    answers: ["Framework", "Methodology", "Philosophy", "Standard"],
    correct: 1
  },
  {
    question: "What are the three levels of KCS benefits?",
    answers: ["Centralized, Distributed, Virtual", "Direct, Applied, Leveraged", "Operational, Tactical, Strategic", "Significant, Major, Minor"],
    correct: 1
  },
  //30.
  {
    question: "Which KCS role is responsible for monitoring processes and mentoring people?",
    answers: ["KCS Candidate", "KCS Coach", "KCS Manager", "KCS Publisher"],
    correct: 1
  },
  {
    question: "Which KCS role is responsible for providing the vision, objectives, and resources?",
    answers: ["KCS Council", "KCS Manager", "Management", "Sponsor"],
    correct: 3
  },
  {
    question: "Which KCS role is limited to using existing articles, flagging articles as necessary, and adding new articles?",
    answers: ["KCS Candidate", "KCS Contributor", "KCS Domain Expert", "KCS Publisher"],
    correct: 0
  },
  {
    question: "Which KCS role has the ability to fix knowledge articles as long as it is not visible to the customer?",
    answers: ["KCS Candidate", "KCS Contributor", "KCS Domain Expert", "KCS Publisher"],
    correct: 1
  },
  {
    question: "Which KCS role is responsible for analyzing the knowledge usage and performing tasks related to problem management?",
    answers: ["KCS Coach", "KCS Publisher", "Knowledge Domain Expert", "Management"],
    correct: 2
  },
  //35.
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
  {
    question: "Which KCS role is the most important when it comes to establishing the vision and objectives of the KCS program?",
    answers: ["KCS Coach", "KCS Council", "KCS Program Team", "Sponsor"],
    correct: 3
  },
    // 40.
{
  question: "Which step in KCS involves capturing the customer's context?",
  answers: ["Structure", "Reuse", "Capture", "Improve"],
  correct: 2
},
{
  question: "In the KCS methodology, what does 'reuse' emphasize?",
  answers: ["Creating new articles for each issue", "Referring to and improving existing knowledge", "Archiving outdated content", "Avoiding the use of old knowledge"],
  correct: 1
},
{
  question: "What is the purpose of the 'Improve' principle in KCS?",
  answers: ["To ensure the knowledge base is always accurate and up-to-date", "To automate the process of creating articles", "To reduce the time spent on solving problems", "To increase customer satisfaction only"],
  correct: 0
},
{
  question: "Which of the following is NOT a benefit of implementing KCS?",
  answers: ["Faster resolution of issues", "Increased operational costs", "Enhanced customer satisfaction", "Better collaboration among teams"],
  correct: 1
},
{
  question: "How does KCS differ from traditional knowledge management approaches?",
  answers: ["It focuses on automation", "Knowledge is created as a byproduct of solving problems", "It eliminates the need for human input", "It relies on static knowledge articles"],
  correct: 1
},
  //45.
{
  question: "What role does the 'Evolve Loop' play in KCS?",
  answers: ["It ensures continuous improvement of the knowledge base", "It helps in onboarding new team members", "It focuses on automating customer interactions", "It eliminates duplicate articles"],
  correct: 0
},
{
  question: "What is the KCS licensing model designed to achieve?",
  answers: ["Control access to knowledge", "Certify the quality of knowledge contributors", "Set expectations for knowledge-sharing behaviors", "Limit the number of knowledge contributors"],
  correct: 2
},
{
  question: "How does KCS define success for a knowledge article?",
  answers: ["Accuracy and compliance with templates", "Ease of automation and search", "Its usefulness in resolving real customer issues", "The frequency of its reuse"],
  correct: 2
},
{
  question: "What is a key consideration when transitioning to a KCS model?",
  answers: ["Immediately replace all old knowledge", "Ensure technology fully automates knowledge creation", "Shift the organizational culture towards collaboration and learning", "Hire external consultants for knowledge management"],
  correct: 2
},
{
  question: "Which metric aligns with KCS practices?",
  answers: ["Number of articles created per agent", "Percentage of issues resolved using existing knowledge", "Time taken to escalate issues", "Total size of the knowledge base"],
  correct: 1
},
  //50.
{
  question: "Why is it important to capture context in KCS articles?",
  answers: ["To ensure articles are written formally", "To reduce the need for updates", "To make the knowledge more findable and reusable", "To minimize search time for support teams"],
  correct: 2
},
{
  question: "What does the 'Solve Loop' focus on in KCS?",
  answers: ["Capturing new knowledge during problem resolution", "Automating article improvement", "Training agents on knowledge management", "Standardizing the format of all knowledge articles"],
  correct: 0
},
{
  question: "What is the value of flagging articles for review in KCS?",
  answers: ["To ensure articles meet compliance standards", "To prioritize outdated articles for deletion", "To engage knowledge workers in continuous improvement", "To validate customer satisfaction with the knowledge base"],
  correct: 2
},
{
  question: "In KCS, how is the concept of ownership redefined?",
  answers: ["Articles are owned by specific authors", "Ownership is shared across the organization", "Ownership is eliminated altogether", "Knowledge owners are limited to senior managers"],
  correct: 1
},
{
  question: "How does KCS ensure knowledge quality over time?",
  answers: ["Through periodic audits by management", "By encouraging users to update and improve articles as needed", "By limiting knowledge contribution to subject matter experts", "Through automated article deletion processes"],
  correct: 1
},
  //55.
{
  question: "What is the main purpose of the 'Just-in-Time' approach in KCS?",
  answers: ["To ensure knowledge is created only when required", "To reduce redundancy in knowledge creation", "To deliver relevant knowledge during problem-solving", "To automate customer interactions"],
  correct: 2
},
{
  question: "What does KCS suggest about the lifecycle of knowledge?",
  answers: ["It should be predefined and static", "It evolves continuously based on usage and feedback", "It ends once the issue is resolved", "It should be archived after one year"],
  correct: 1
},
{
  question: "What is the purpose of the 'Improve' principle in KCS?",
  answers: ["To ensure the knowledge base is always accurate and up-to-date", "To automate the process of creating articles", "To reduce the time spent on solving problems", "To increase customer satisfaction only"],
  correct: 0
},
{
  question: "Which of the following is NOT a benefit of implementing KCS?",
  answers: ["Faster resolution of issues", "Increased operational costs", "Enhanced customer satisfaction", "Better collaboration among teams"],
  correct: 1
},
{
  question: "How does KCS differ from traditional knowledge management approaches?",
  answers: ["It focuses on automation", "Knowledge is created as a byproduct of solving problems", "It eliminates the need for human input", "It relies on static knowledge articles"],
  correct: 1
},
  //60.
  {
  question: "What is the primary reason to align KCS practices with organizational goals?",
  answers: ["To simplify team management", "To ensure knowledge initiatives support business outcomes", "To reduce operational costs", "To increase the volume of knowledge articles"],
  correct: 1
},
{
  question: "Which of the following best defines the 'Double Loop Process' in KCS?",
  answers: ["A process for editing knowledge articles", "A feedback mechanism for continuous improvement", "A method to duplicate articles for faster access", "A system for agent performance evaluation"],
  correct: 1
},
{
  question: "How does the KCS approach view knowledge ownership?",
  answers: ["Knowledge is owned by the team", "Knowledge is owned by the individual who created it", "Knowledge is owned by the customer", "Knowledge is a shared organizational asset"],
  correct: 3
},
{
  question: "Why is capturing knowledge in the context of use essential in KCS?",
  answers: ["To ensure the article is reviewed later", "To provide accurate, relevant, and timely knowledge", "To increase the volume of articles in the system", "To ensure all team members contribute equally"],
  correct: 1
},
{
  question: "What is the role of leadership in supporting KCS adoption?",
  answers: ["Enforcing strict policies on article creation", "Providing tools and removing barriers for KCS practices", "Assigning individual knowledge quotas", "Reducing the size of the knowledge base"],
  correct: 1
},
  //65.
{
  question: "What does the 'Good Enough to Solve' principle emphasize?",
  answers: ["Publishing articles only after multiple reviews", "Ensuring articles meet basic needs to resolve issues", "Prioritizing aesthetic presentation over content", "Creating articles exclusively for high-priority issues"],
  correct: 1
},
{
  question: "Which statement best reflects the 'Abundance' principle in KCS?",
  answers: ["Focus on creating a limited number of high-quality articles", "Encourage knowledge sharing without overthinking value", "Avoid capturing repetitive issues", "Limit access to knowledge to maintain exclusivity"],
  correct: 1
},
{
  question: "How does KCS address the concept of knowledge decay?",
  answers: ["By archiving articles periodically", "Through continuous use and refinement of knowledge", "By setting expiration dates for all articles", "By limiting knowledge contributions"],
  correct: 1
},
{
  question: "What is the best indicator of value creation in a KCS-driven knowledge base?",
  answers: ["The number of articles published", "The number of articles reused to resolve issues", "The number of authors contributing", "The frequency of system updates"],
  correct: 1
},
  //70.
{
  question: "What is a critical factor for ensuring the long-term success of KCS?",
  answers: ["Limiting contributions to senior staff", "Embedding KCS practices into daily workflows", "Focusing solely on technical accuracy", "Restricting knowledge sharing to internal teams"],
  correct: 1
},
  {
  question: "When a support agent encounters an issue that already has a relevant article in the knowledge base, what is the most aligned action with KCS principles?",
  answers: ["Acknowledge the article internally but solve the issue without referencing it to avoid overloading the customer with details.", "Use the article as is, sharing it with the customer if it’s complete and relevant.", "Rewrite the article with your own style to personalize the response for the customer.", "Create a new article describing the issue in your own words to reflect your understanding."],
  correct: 1
},
  {
  "question": "KCS emphasizes 'abundance' over 'scarcity' when it comes to knowledge. What does this mean in practical terms?",
  "answers": [
      "Knowledge should be tightly controlled and access limited to experts.",
      "Every piece of information, regardless of its value, should be documented.",
      "The focus should be on capturing and sharing as much relevant knowledge as possible, trusting that value will emerge through use and refinement.",
      "Only perfectly polished and validated knowledge should be shared."
  ],
    "correct": 2
  },
  {
    "question": "How does the KCS principle of 'create value through use' challenge traditional knowledge management approaches?",
    "answers": [
      "It suggests that knowledge is most valuable when it is passively stored and readily accessible.",
      "It proposes that knowledge gains value through its application and refinement in real-world scenarios, rather than through upfront investment in perfect documentation.",
      "It argues that knowledge should be created independently of any specific problem or context.",
      "It implies that knowledge is only valuable if it can be easily automated."
    ],
    "correct": 1
  },
  {
    "question": "Why is the concept of 'collective ownership' crucial to the success of a KCS implementation?",
    "answers": [
      "It ensures that a single individual is responsible for the accuracy of each article.",
      "It fosters a sense of shared responsibility for knowledge quality and encourages continuous improvement by everyone.",
      "It simplifies the process of assigning blame when knowledge is inaccurate.",
      "It allows for easier management of knowledge access and permissions."
    ],
    "correct": 1
  },
  //75.
  {
    "question": "KCS advocates for 'just-in-time' knowledge capture and creation. What is the primary advantage of this approach compared to creating comprehensive documentation upfront?",
    "answers": [
      "It reduces the initial investment required for knowledge management.",
      "It ensures that knowledge is captured in the context of its use, making it more relevant and easier to reuse.",
      "It eliminates the need for any formal knowledge management processes.",
      "It guarantees that all possible scenarios are documented before they occur."
    ],
    "correct": 1
  },
    {
    "question": "How does the 'double loop' feedback process in KCS contribute to organizational learning and improvement?",
    "answers": [
      "It focuses solely on individual performance and identifies areas for training.",
      "It creates a system for tracking the number of articles created and their usage statistics.",
      "It facilitates both individual learning (improving articles through use) and organizational learning (improving processes and the knowledge base as a whole).",
      "It automates the process of identifying and deleting outdated articles."
    ],
    "correct": 2
  },
      {
    "question": "What is the philosophical shift that KCS promotes regarding the role of support staff?",
    "answers": [
      "From being problem solvers to becoming knowledge creators and sharers.",
      "From focusing on efficiency to prioritizing customer interactions.",
      "From adhering to strict scripts to using their own judgment.",
      "From working independently to collaborating closely with other departments."
    ],
    "correct": 0
  },
    {
    "question": "How does KCS address the challenge of knowledge becoming outdated or irrelevant over time?",
    "answers": [
      "By requiring regular audits and updates by designated experts.",
      "By relying on the collective use and improvement of knowledge by the community, ensuring it evolves with changing needs.",
      "By archiving all articles after a fixed period.",
      "By strictly limiting the number of articles created to prevent redundancy."
    ],
    "correct": 1
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

