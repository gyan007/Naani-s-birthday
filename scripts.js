function addMessage() {
    const messageBoard = document.getElementById("message-board");
    const messageInput = document.querySelector("textarea");
  
    if (messageInput.value.trim()) {
      const newMessage = document.createElement("li");
      newMessage.textContent = messageInput.value;
      messageBoard.appendChild(newMessage);
      messageInput.value = ""; // Clear the input
    } else {
      alert("Please write a message before posting!");
    }
  }
  







// Add Messages
function addMessage() {
  const messageBoard = document.getElementById("message-board");
  const messageInput = document.querySelector("textarea");

  if (messageInput.value.trim()) {
    const newMessage = document.createElement("li");
    newMessage.textContent = messageInput.value;
    messageBoard.appendChild(newMessage);
    messageInput.value = ""; // Clear the input
  } else {
    alert("Please write a message before posting!");
  }
}

// Quiz Data
const quizData = [
    { question: "What is Naani's favorite dish?", options: [" Aloo Paratha ", " Rasgulla ", " Samosa "], correct: 0 },
    { question: "What is Naani's favorite color?", options: [" Blue ", " Pink ", " Green "], correct: 1 },
    { question: "Which hobby does Naani enjoy the most?", options: [" Gardening ", " Cooking ", " Knitting "], correct: 2 },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("quiz-question");
    const optionsElement = document.getElementById("quiz-options");
    const feedbackElement = document.getElementById("quiz-feedback");
    const nextButton = document.getElementById("next-question");

    // Load current question
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Load options
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    // Reset feedback and hide the next button
    feedbackElement.textContent = "";
    nextButton.style.display = "none";
}

function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById("quiz-feedback");
    const nextButton = document.getElementById("next-question");
    const currentQuestion = quizData[currentQuestionIndex];

    // Check the answer
    if (selectedIndex === currentQuestion.correct) {
        feedbackElement.textContent = "Correct! 🎉";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Oops! That's not correct. 😔";
        feedbackElement.style.color = "red";
    }

    // Show the "Next Question" button if there are more questions
    if (currentQuestionIndex < quizData.length - 1) {
        nextButton.style.display = "inline-block";
    } else {
        feedbackElement.textContent += " Quiz completed! 🎂";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Initialize the first question
loadQuestion();
