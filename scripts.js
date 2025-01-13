// Quiz Data
const quizData = [
    { question: "What is Naani's favorite food?", options: ["Aloo Paratha", "Chawal dal aur chokha", "Chawal dal aur Gobi-aalu ki sabji"], correct: 2 },
    { question: "What is Naani's favorite color?", options: ["Red", "Pink", "Green"], correct: 1 },
    { question: "What place did Naani's grow up in?", options: ["Hariharpur", "Narauch", "Darbhanga"], correct: 1 },
    { question: "When was Naani got married?", options: ["2 May 1977", "7 April 1977", "9 May 1977"], correct: 0},
    { question: "What is Naani's favorite holiday or celebration?", options: ["Chhath", "Durga puja", "Diwali"], correct: 2 },
    { question: "What is Naani's favorite hobby or pastime?", options: ["Talking", "Watching Television", "Sleeping"], correct: 1 },
    { question: "Who is Naani's favorite author?", options: ["Munshi premchand", "Harivansh rai bachchan", "Ghalib"], correct: 0 },
    { question: "What is Naani's favorite flower?", options: ["Bela", "Rose", "Sunflower"], correct: 0 },
    { question: "What is Naani's favorite song?", options: ["Gajab ka hai din", "Dekha ek khwaab", "Tora Man Darpan Kahlaye"], correct: 2 },
    { question: "What is Naani's favorite movie?", options: ["Baghban", "Veer-Zaara", "Taare zameen par"], correct: 0 },
    { question: "What is the most favourite piece of jewelry Naani owns?", options: ["Payal", "Bangal", "Earring"], correct: 1 },
    { question: "What is naani's hidden talent that she never shared? Also, Guess the achievement in the same.", options: ["Gun shooting, 9 out of 10 shot on target", "Running, 100 metres 11 second", "Kho-Kho, state level participation"], correct: 0 },
    // { question: "", options: ["", "", ""], correct:  },
    { question: "Who is Naani's favourite actor?", options: ["Devanand", " Dileep kumar", "Sanjeev kumar"], correct: 2 },
    { question: "Who is Naani's favourite actress?", options: ["Jaya Prada", "Vyjayanthimala", "Hema malini"], correct: 0 },
    { question: "What is Naani's favorite dessert?", options: ["Gulab jamun", "Rasogulla", "Jalebi"], correct: 1 },
    { question: "What is Naani's favorite thing to do on weekends?", options: ["Sleeping", "Cooking", "Shopping"], correct: 0 },
    { question: "What is Naani's favorite memory from her childhood?", options: ["NCC camp", "Studying away from home", "School days"], correct: 1 },
    { question: "What is Naani's favorite type of weather or season?", options: ["Summer", "Winter", "Rainy"], correct: 2 },
    { question: "What is Naani's favorite thing to do with her grandchildren?", options: ["Playing", "Feeding", "Talking"], correct: 2 },
    { question: "What is Naani's favorite type of fruit?", options: ["Mango", "Guava", "Orange"], correct: 0 },
    { question: "What was the name of Naani's best friend growing up?", options: ["Suchita", "Maalti", "Shakuntala"], correct: 1 },
    { question: "What was Naani's favorite childhood game or activity?", options: ["5 goti", "Kabaddi", "Badminton"], correct: 2 },
    { question: "Nani's dream was to marry a person of which profession before marriage?", options: ["Teacher", "Engineer", "Doctor"], correct: 2 },
    { question: "What is Naani's favorite type of animal?", options: ["Cow", "Dog", "Cat"], correct: 0 },
    { question: "What is the most adventurous thing Naani has ever done?", options: ["NCC", "Trip to delhi", "Trip to Madhya pradesh"], correct: 0 },
    { question: "What’s the most memorable trip or vacation Naani has taken?", options: ["Chennai trip", "Rameshwaram trip", "Rajasthan trip"], correct: 0 },
    { question: "What was Naani's favorite type of clothing or style before marriage?", options: ["Saree", "Suit-Salwar", "Jeans T-Shirt"], correct: 1 },
    { question: "What’s Naani's go-to catchphrase or saying?", options: ["Om namah shivaay", "Bam bam bhole", "Hari om tatt satt"], correct: 2 },
    { question: "What is Naani's favorite snack when watching TV?", options: ["Cookie", "Bhuja", "Chai"], correct: 1 },
    { question: "What did Naani like to collect as a child?", options: ["Stamp", "Doll", "Old coin"], correct: 2 },
    { question: "What’s the most important gift Naani has ever received?", options: ["Gold chain", "First house", "Nanaji"], correct: 2 },
    { question: "What was Naani's favorite place to go when she was a teenager?", options: ["Hariharpur", "Charaut", "Bhadwara"], correct: 1 },
    { question: "Which is Naani's favorite TV show or series to binge-watch?", options: ["Dance india dance", "Indian idol", "News"], correct: 1 },
    { question: "Which is Naani's favorite restaurant or café to visit?", options: ["Garcia", "Rajasthan", "Sayaji"], correct: 2 },
    { question: "What’s the most touching piece of advice Naani has ever given?", options: ["Jeevan mai hamesa dhairya se sabke saath rehne ki kosis karni chahiye", "अगर भाग्य पर भरोसा है, तो जो तकदीर में लिखा है वही पाओगे.", "समस्याओं के समाधान खोजने वाला व्यक्ति ही सफलताओं की सत्ता प्राप्त करता है. "], correct: 0 },
    { question: "What’s the first thing Naani does when she wakes up in the morning?", options: ["Exercise", "Seeing nanaji", "Praying"], correct: 1 },
    { question: "Who is Naani's most favourite person (Male)", options: ["Nanaji", "Nanaji", "A and B both"], correct: 2 },
    { question: "Who is Naani's most favourite person (Female)", options: ["Maa", "A and C both", "Maa"], correct: 1 },
    { question: "Who is Naani's favourite Naati?", options: ["Gyan", "Gyan", "Gyan", "Gyan", "Gyan", "Gyan", "Gyan", "One and only, Gyan"], correct: 7 },
];

let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

function loadQuestion() {
    const questionElement = document.getElementById("quiz-question");
    const optionsElement = document.getElementById("quiz-options");
    const feedbackElement = document.getElementById("quiz-feedback");

    // Load current question
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Load options
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.onclick = () => handleOptionClick(index);
        optionsElement.appendChild(button);
    });

    // Reset feedback
    feedbackElement.textContent = "";
}

function handleOptionClick(selectedIndex) {
    const optionsElement = document.getElementById("quiz-options");
    const feedbackElement = document.getElementById("quiz-feedback");
    const currentQuestion = quizData[currentQuestionIndex];

    // Disable all options
    Array.from(optionsElement.children).forEach((button) => (button.disabled = true));

    // Check if the answer is correct
    if (selectedIndex === currentQuestion.correct) {
        feedbackElement.textContent = "Correct! 🎉";
        feedbackElement.style.color = "green";
        correctCount++;
    } else {
        feedbackElement.textContent = `Oops! That's not correct. 😔`;
        feedbackElement.style.color = "red";
        incorrectCount++;
    }

    // Highlight the correct option
    optionsElement.children[currentQuestion.correct].style.backgroundColor = "green";
    if (selectedIndex !== currentQuestion.correct) {
        optionsElement.children[selectedIndex].style.backgroundColor = "red";
    }

    // Move to the next question after 2 seconds
    setTimeout(() => {
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            feedbackElement.textContent += ` Quiz completed! 🎂`;
            displayResults();
        }
    }, 2000);
}

function displayResults() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Correct Answers: ${correctCount}</p>
        <p>Incorrect Answers: ${incorrectCount}</p>
    `;
}

// Initialize the first question
loadQuestion();
