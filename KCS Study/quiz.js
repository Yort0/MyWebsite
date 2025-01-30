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
  question: "How does KCS differ from traditional knowledge management approaches?",
  answers: ["It focuses on automation", "Knowledge is created as a byproduct of solving problems", "It eliminates the need for human input", "It relies on static knowledge articles"],
  correct: 1
},
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
      //60.
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
      //65.
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
      //70.
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
      //75.
    {
    "question": "How does KCS address the challenge of knowledge becoming outdated or irrelevant over time?",
    "answers": [
      "By requiring regular audits and updates by designated experts.",
      "By relying on the collective use and improvement of knowledge by the community, ensuring it evolves with changing needs.",
      "By archiving all articles after a fixed period.",
      "By strictly limiting the number of articles created to prevent redundancy."
    ],
    "correct": 1
  },
  {
    "question": "In a scenario where two valid but conflicting solutions exist for the same issue, what is the KCS-aligned approach?",
    "answers": [
        "Create separate articles for each solution and let users choose",
        "Document both solutions in a single article with clear context for when each applies",
        "Only document the most commonly used solution",
        "Escalate to management to determine the official solution"
    ],
    "correct": 1
},
{
    "question": "How does the KCS principle of 'demand-driven participation' challenge traditional knowledge management roles?",
    "answers": [
        "It eliminates the need for knowledge managers completely",
        "It suggests that expertise emerges through participation rather than being predetermined by role or position",
        "It requires all employees to participate equally in knowledge creation",
        "It places more emphasis on formal training and certification"
    ],
    "correct": 1
},
{
    "question": "When implementing KCS in a highly regulated industry, how should the principle of 'abundance' be balanced with compliance requirements?",
    "answers": [
        "Abandon the abundance principle in favor of strict control",
        "Create separate knowledge bases for regulated and non-regulated content",
        "Integrate compliance requirements into the workflow while maintaining open contribution",
        "Restrict knowledge creation to compliance team members only"
    ],
    "correct": 2
},
{
    "question": "How should a KCS implementation handle tribal knowledge that contradicts official documentation?",
    "answers": [
        "Always defer to official documentation",
        "Document the tribal knowledge separately as unofficial content",
        "Capture the contradiction and initiate a resolution process to update official documentation",
        "Ignore tribal knowledge in favor of standardization"
    ],
    "correct": 2
},
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
  },
  {
    "question": "A KCS publisher is working with a customer to resolve an issue. The KCS Publisher could not find the Article using the customer's problem terms, but easily translated the customer's terms to the technically correct terms and found the resolution in an existing article. What two things should the KCS publisher do?",
    "answers": [
      "Reuse the existing Article",
      "Flag the existing Article for rework",
      "Create a new Article with the customer terms",
      "Add the customer terms to the existing Article"
    ],
    "correctAnswers": [0, 3]
  },
  {
    "question": "Which two statements are true about the Article Quality Index?",
    "answers": [
      "It is used to measure the completeness of a KCS Article",
      "It is used as a benchmark quality index for the support industry",
      "The AQI is used to measure how well an Article complies with the content standard",
      "Before an Article is published, it should be scored using the AQI process to ensure it is accurate and adheres to standards"
    ],
    "correctAnswers": [0, 2]
  },
  {
    "question": "Which three elements should be included in a KCS Article?",
    "answers": [
      "Incident status",
      "Resolution steps",
      "Customer contact details",
      "Customer's problem or question",
      "Environment (product names and versions)"
    ],
    "correctAnswers": [1, 3, 4]
  },
  //90.
  {
    "question": "Which of the following are considered Activities (aka leading indicators)?",
    "answers": [
      "Employee Engagement",
      "Customer Satisfaction",
      "Link Rate",
      "Article Life Cycle"
    ],
    "correctAnswers": [2, 3]
  },
  {
    "question": "What is the primary role of a KCS Candidate?",
    "answers": [
      "To modify KCS articles created by other authors",
      "To learn and demonstrate basic KCS practices and techniques",
      "To guide and support team members",
      "To provide deep expertise in specific knowledge areas"
    ],
    "correct": 1
  },
  {
    "question": "What is the main responsibility of a KCS Contributor?",
    "answers": [
      "Create, review, and validate articles",
      "Review audience on KCS articles",
      "Guide and support team members",
      "Oversee the KCS program"
    ],
    "correct": 0
  },
  {
    "question": "What is the key function of a KCS Publisher?",
    "answers": [
      "Learn and demonstrate basic KCS practices",
      "Review the health of the knowledge base",
      "Review and publish KCS articles, ensuring they meet quality standards",
      "Provide deep expertise in specific knowledge areas"
    ],
    "correct": 2
  },
  {
    "question": "What is the primary role of a KCS Coach?",
    "answers": [
      "To guide and support team members in adopting and practicing KCS",
      "To review and publish KCS articles",
      "To create and improve KCS articles",
      "To oversee the KCS program"
    ],
    "correct": 0
  },
  //95.
  {
    "question": "What is the responsibility of a Knowledge Domain Expert?",
    "answers": [
      "To learn and demonstrate basic KCS practices",
      "To review and publish KCS articles",
      "To guide and support team members",
      "To monitor the health and quality of the knowledge base"
    ],
    "correct": 3
  },
  {
    "question": "What does the KCS licensing model define?",
    "answers": [
      "Training programs for KCS",
      "System rights and privileges for each KCS role",
      "The structure of KCS articles",
      "The process for capturing knowledge"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is NOT a critical role for the KCS Council?",
    "answers": [
      "Knowledge Worker",
      "Coach",
      "Knowledge Domain Expert",
      "Subject Matter Expert"
    ],
    "correct": 3
  },
  {
    "question": "What is required to move from KCS Candidate to KCS Contributor?",
    "answers": [
      "Attending additional training sessions",
      "Demonstrating consistent behaviors and competencies defined for the role",
      "Publishing a certain number of articles",
      "Leading a KCS project"
    ],
    "correct": 1
  },
  {
    "question": "What is a provisional license in KCS?",
    "answers": [
      "A permanent license for experienced users",
      "A temporary license issued after basic understanding of KCS practices is demonstrated",
      "A temporary license for KCS Coaches",
      "A license for Knowledge Domain Experts only"
    ],
    "correct": 1
  },
  //100.
  {
    "question": "What is the purpose of the KCS Council?",
    "answers": [
      "To create and improve KCS articles",
      "To review and publish KCS articles",
      "To oversee the KCS program and ensure alignment with organizational goals",
      "To provide deep expertise in specific knowledge areas in KCS articles"
    ],
    "correct": 2
  },
    {
    "question": "Which Statement best describes the benefit of Capture in the moment?",
    "answers": [
      "It ensures a high Article Quality Index (AQI)",
      "It documents the experience and environment – what is happening and where it’s happening",
      "It contributes to the team goals for Article creation and reuse (create early, create often)",
      "It improves productivity and credibility to create the Article after the resolution step in the workflow"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following reasons determines if a statement is relevant to include in an article?",
    "answers": [
      "It’s how the customer perceives the issue",
      "It’s all the possible ways the Support Analysts anticipate that a customer might describe the issue",
      "It’s how the Support Analysts perceive the issue",
      "It’s one of the selections from a predefined list of issues"
    ],
    "correct": 0
  },
  {
    "question": "A KCS Publisher has a practice of making notes in a notepad as she works on a customer issue. When the customer's issue has been resolved, the KCS Publisher uses her notes to create a new Article in the knowledge base. Which of the eight KCS practices is being violated, and in which loop is this practice found?",
    "answers": [
      "Capture, in the Solve Loop",
      "Capture, in the Evolve Loop",
      "Structure, in the Solve Loop",
      "Structure, in the Evolve Loop"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following three statements identify the importance of the visibility of a work in progress Article when the resolution is not known?",
    "answers": [
      "It ensures that incomplete articles will not show up in searches",
      "It lets other analysts in the organization know that the problem has been reported and is a known issue.",
      "It ensures that the collective experience of the organization is being captured throughout the process of solving problems.",
      "If multiple open incidents have been linked to this work in progress Article, they can be quickly resolved when the Article resolution has been identified."
    ],
    "correct": [1, 2, 3]
  },
  //105.
  {
    "question": "Which two metrics are considered outcome measures?",
    "answers": [
      "Profitability",
      "Analyst linking rate",
      "Number of articles created by a Publisher",
      "Number of deflections via self-service"
    ],
    "correct": [0, 3]
  },
  {
    "question": "In addition to a deep understanding of the KCS principles and processes, a KCS Coach must possess several key personality characteristics. Which of the following personality traits would be most valuable for a KCS Coach to embody in order to ensure success in the role?",
    "answers": [
      "Irreverence",
      "Trustworthiness",
      "Confidence",
      "Apathy"
    ],
    "correct": [1, 2]
  },
  {
    "question": "Who should create and maintain knowledge articles?",
    "answers": [
      "Support Agents",
      "Technical Writers",
      "Marketing Writers",
      "SMEs (Subject Matter Experts)"
    ],
    "correct": 0
  },
  {
    "question": "What are two ways that structure contributes to the overall KCS process?",
    "answers": [
      "It improves the capture of chat sessions",
      "It improves robust data entry of free-form text",
      "It improves the readability for non-English speakers",
      "It improves searchability in some search technologies"
    ],
    "correct": [2, 3]
  },
  {
    "question": "In which order should the problem-solving steps be completed?",
    "answers": [
      "1. conduct research 2. collect the data 3. search the knowledge base 4. analyze the information",
      "1. collect the data 2. analyze the information 3. search the knowledge base 4. conduct research",
      "1. collect the data 2. search the knowledge base 3. analyze the information 4. conduct research",
      "1. conduct research 2. search the knowledge base 3. collect the data 4. analyze the information"
    ],
    "correct": 2
  },
  //110.
  {
    "question": "In which two situations should a Support Analyst fix a KCS Article that is in a Validated state?",
    "answers": [
      "The Support Analyst is a KCS Contributor and determines the Article applies to an additional environment.",
      "The Support Analyst is a KCS Candidate and finds a technical mistake in an Article and they are confident in the update.",
      "The Support Analyst is a KCS Contributor and is confident in the information they want to add to the Article.",
      "The Support Analyst is a KCS Candidate and identifies a technical issue with an Article that is not in their product."
    ],
    "correct": [0, 2]
  },
  {
    "question": "Which two concepts exhibit collective ownership of an organization's knowledge base?",
    "answers": [
      "The technique of reuse is review",
      "A KCS Coach will validate the quality of all articles before they are published",
      "Multiple Support Analysts are required to contribute to the contents of an Article before it is published",
      "Support Analysts are responsible for the quality of the articles they interact with in the knowledge base."
    ],
    "correct": [0, 3]
  },
    {
    "question": "Which KCS activity improves Article findability?",
    "answers": [
      "Capturing all the ways the customer described the issue in the symptom field",
      "Capturing the customer's context in the cause field",
      "Periodically reviewing and updating all Not Validated articles",
      "Expanding Article's environment statements to include all variations of product names"
    ],
    "correct": 0
  },
  {
    "question": "A customer has contacted the support center via phone and is speaking with the Analyst who has expertise in the problem area. What should the Analyst do in the process to capture the relevant search words or phrases?",
    "answers": [
      "Concentrate on the conversation with the customer and interpret the customer's view of the problem into proper terms.",
      "Take notes on the conversation with the customer to use later to frame the description of the issue.",
      "Take notes in the knowledge management tool as the conversation is occurring to frame the description of the issue.",
      "Capture a few key words in order to perform a search."
    ],
    "correct": 2
  },
  {
    "question": "What are two factors that motivate Support Analysts to engage in the KCS practices in a valuable way?",
    "answers": [
      "Achieving their activity goals",
      "Being recognized as contributing the most KCS articles",
      "Understanding and buy-in to the company purpose and values",
      "Feeling connected with a team and an ability to make a contribution"
    ],
    "correct": [2, 3]
  },
  //115.
  {
    "question": "When should you create a new Article in the knowledge base rather than link to an existing Article?",
    "answers": [
      "If the issue is impacting multiple customers",
      "If the Article will be reused three times or more",
      "If an existing Article has the same symptoms and resolution but different environment",
      "If the existing Article has the same symptoms but a different environment and resolution"
    ],
    "correct": 3
  },
  {
    "question": "What two things would help an organization minimize Content Standard violations?",
    "answers": [
      "Implement coaching",
      "Set a goal for Article creation",
      "Set a goal for Article Quality Index scores",
      "Implement the searching is creating practice"
    ],
    "correct": [0, 2]
  },
  {
    "question": "How does the reuse is review concept contribute to the KCS process?",
    "answers": [
      "It supports the requirement to review all articles",
      "It ensures that the Article author gets credit for their contribution",
      "It constantly improves the quality of articles that are being used",
      "It provides Analysts the feedback they need to meet their modification goals"
    ],
    "correct": 2
  },
  {
    "question": "Which is one of the four basic concepts of KCS?",
    "answers": [
      "KCS evolves content based on demand and usage",
      "KCS is an application for capturing knowledge in the moment",
      "KCS includes creating content after closing a service incident",
      "KCS requires review of all knowledge for technical accuracy before publishing"
    ],
    "correct": 0
  },
  {
    "question": "Why is capturing knowledge in the moment important?",
    "answers": [
      "Articles will not be searchable after they are captured",
      "Tacit knowledge captured offline improves findability",
      "Tacit knowledge becomes explicit at the moment of use",
      "Capturing context-rich information slows down the workflow process"
    ],
    "correct": 2
  },
  //120.
  {
    "question": "Which describes the recommended way to document problem or symptom statements?",
    "answers": [
      "As complete thoughts",
      "As complete sentences",
      "In technically accurate terms",
      "Use the words and phrases other Support Analysts would use to search"
    ],
    "correct": 0
  },
  {
    "question": "Which KCS practice does creating Evolve Loop articles fall under?",
    "answers": [
      "Content Health",
      "Process Integration",
      "Reuse",
      "Improve"
    ],
    "correct": 0
  },
  {
    "question": "What are two reasons why KCS articles do not move through the article states?",
    "answers": [
      "Support Analysts are not updating the Article state",
      "The organization has no formal process to review all draft articles",
      "The organization has not implemented the Work-In-Progress state",
      "Support Analysts are creating new articles rather than reusing existing articles"
    ],
    "correct": [0, 3]
  },
  {
    "question": "What is the name of the data visualization tool frequently used in KCS to quickly identify team members who are creating value and those who may require additional coaching?",
    "answers": [
      "Funnel Chart",
      "Venn Diagram",
      "Radar Chart",
      "Sunburst Diagram"
    ],
    "correct": 2
  },
  {
    "question": "Which statements are true about Knowledge?",
    "answers": [
      "Information becomes Knowledge at the moment of use",
      "Knowledge is a request for product enhancement",
      "Knowledge is unorganized words or numbers",
      "Knowledge is gained through interaction and experience"
    ],
    "correct": [0, 3]
  },
  //125.
  {
    "question": "What are the KCS-related responsibilities of people managers?",
    "answers": [
      "Ensure personal satisfaction",
      "Assess KCS performance",
      "Communicate the KCS vision",
      "Enable KCS coaching"
    ],
    "correct": [1, 2, 3]
  }
  
  // Add more questions as needed
];


let currentQuestionIndex = 0;
let score = 0;
let askedQuestions = [];
let isQuestionAnswered = false;

function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  const answersContainer = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const questionCountDisplay = document.getElementById("question-count");

  if (askedQuestions.length === 20) {
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

  // Update the question count
  questionCountDisplay.textContent = `Question ${askedQuestions.length} of 20`;

  const isMultipleChoice = Array.isArray(question.correct);
  const inputType = isMultipleChoice ? "checkbox" : "radio";

  question.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="${inputType}" name="answer" value="${index}" ${isMultipleChoice ? `onchange="limitSelections(${question.correct.length})"` : ""}>
      ${answer}
    `;
    answersContainer.appendChild(label);
  });

  isQuestionAnswered = false;
  nextBtn.disabled = true;
}

function limitSelections(maxSelections) {
  const selectedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
  if (selectedCheckboxes.length > maxSelections) {
    selectedCheckboxes[selectedCheckboxes.length - 1].checked = false;
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const selectedInputs = document.querySelectorAll("input[name='answer']:checked");
  const feedback = document.getElementById("feedback");

  if (selectedInputs.length === 0) {
    feedback.textContent = "Please select an answer.";
    return;
  }

  const selectedValues = Array.from(selectedInputs).map(input => parseInt(input.value));
  const correctAnswers = Array.isArray(questions[currentQuestionIndex].correct)
    ? questions[currentQuestionIndex].correct
    : [questions[currentQuestionIndex].correct];

  const isCorrect = selectedValues.length === correctAnswers.length &&
                    selectedValues.every(val => correctAnswers.includes(val));

  if (isCorrect) {
    score++;
    feedback.textContent = "Correct!";
  } else {
    const correctAnswerText = correctAnswers.map(index => questions[currentQuestionIndex].answers[index]).join(", ");
    feedback.textContent = `Wrong answer. The correct answer(s): ${correctAnswerText}`;
  }

  isQuestionAnswered = true;
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  if (!isQuestionAnswered) return;
  loadQuestion();
}

function displayFinalScore() {
  const questionContainer = document.getElementById("question-container");
  const answersForm = document.getElementById("answers-form");
  const scoreDisplay = document.getElementById("score");

  questionContainer.textContent = "Quiz Complete!";
  answersForm.style.display = "none";
  scoreDisplay.textContent = `Your final score is ${score} out of 20.`;

  setTimeout(() => {
    resetQuiz();
  }, 5000);
}

function resetQuiz() {
  score = 0;
  askedQuestions = [];
  currentQuestionIndex = 0;
  document.getElementById("answers-form").style.display = "block";
  loadQuestion();
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("answers-form").addEventListener("submit", handleFormSubmit);
  document.getElementById("next-btn").addEventListener("click", nextQuestion);
  loadQuestion();
});
