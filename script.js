// Adding variables

var startButton = document.querySelector(".start");
var challengeEl = document.querySelector(".challenge");
var rulesEl = document.querySelector(".rules");
// var question1 = document.querySelector("#question-1");
// var question2 = document.querySelector("#question-2");
// var question3 = document.querySelector("#question-3");
// var question4 = document.querySelector("#question-4");
// var question5 = document.querySelector("#question-5");
// var question6 = document.querySelector("#question-6");
// var question7 = document.querySelector("#question-7");
var question = document.querySelector("#question");
var answerEl = document.querySelector("#mc");
var answer = document.getElementById("answer");


// Set questions
var quizQuestion = -1;
var quizQuestionDetails;

//Question array

var questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerEl: ["Console.log", "JavaScript", "Terminal/bash", "For loops"],
        answer: "Console.log"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answerEl: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        answer: "Curly brackets"
    },
    {
        question: "What does HTML stand for?",
        answerEl: ["How To Move Language", "Hyper Text Markup Language", "High Texting Mask Language", "Hyper Text Media Lingo"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answerEl: ["Functions", "For loops", "Square brackets", "Booleans"],
        answer: "Booleans"
    },
    {
        question: "What does HTML stand for?",
        answerEl: ["How To Move Language", "Hyper Text Markup Language", "High Texting Mask Language", "Hyper Text Media Lingo"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Commonly used dada types DO NOT include:",
        answerEl: ["Alerts", "For loops", "Quotes", "Booleans"],
        answer: "Alerts"
    },
    {
        question: "Which IF statement below executes the code if i is NOT equal to 5?",
        answerEl: ["if (i * 5)", "if (i != 5)", "if (i =! 5)", "if (i = 5)"],
        answer: "if (i != 5)"
    },
];

// event listener for start button
startButton.addEventListener("click", startQuiz);

answerEl.addEventListener("click", verifyAnswer);


function startQuiz(){
    // hides the rules content. 
    rulesEl.style.display = "none";

    // Empty the choices container
    clearanswerEl();

    // Will go through all the questions in the questions array
    quizQuestion++;

    // if quizQuestion is equal to the length of questions then the quiz is over
    if (quizQuestion == question.length) {
        return endQuiz();
    }

    // This will sequentially pick the next question to be the current question
    quizQuestionDetail = questions[quizQuestion];

    // Question div in the HTML
    question.innerHTML = quizQuestionDetail.question;

    // For Loop through the choices array in the questions object
    for (var i = 0; i < quizQuestionDetail.answerEl.length; i++) {
        // Create a div and set its class to 'choice'
        var choice = document.createElement("div");
        choice.setAttribute("class", "choice");
        // Create a button and set its text content to the choice
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-secondary");
        button.innerHTML = quizQuestionDetail.answerEl[i];
        // Append the button to the choice div and append the choice div to the choices
        choice.appendChild(button);
        answerEl.appendChild(choice);
    }
    challengeEl.style.display = "block";
}

function verifyAnswer(e) {
    //Get the click target
    var target = e.target;

    //If the part of the container that was clicked was a button
    if (target.matches("button")) {
        //Check the textContent of that button against the answer
        if (target.textContent == quizQuestionDetail.answer) {
            correctAnswer(target);
        } else {
            wrongAnswer(target);
        }
    }
}

function correctAnswer(target) {
    // Disable the choices once one is selected so user can't
    // click on another accidentally
    disableanswerEl();

    // Highlights the button green if correct
    target.classList.add("btn-success");
    nextQuestion();
}

// This function handles an wrong answer
function wrongAnswer(target) {
    // Disable the choices once one is selected so user can't
    // click on another accidentally
    disableanswerEl();

    // Highlights the button red if correct
    target.classList.add("btn-danger");
    nextQuestion();
}

function disableanswerEl() {
    for (var i = 0; i < answerEl.children.length; i++) {
        answerEl.children[i].children[0].setAttribute("disabled", "");
    }
}

// Function to show the correct/incorrect answer
function nextQuestion() {
    setTimeout(function () {
        startQuiz();
    }, 800);
}

// Function to clear out the choices div when loading a new question
function clearanswerEl() {
    answerEl.innerHTML = "";
}

function endQuiz(){
    challengeEl.style.display = 'none';
}


// function quizTimer() {
//     timer = setTimeout(function () {
//     challengeEl.style.display = "none";
//     answerEl.innerHTML = "Time is up!"
//     }, 24000);
// }
// // Add Event Listener
// startButton.addEventListener("click", function() {
//     console.log("You clicked me!")
//     rulesEl.style.display = "none";
//     startButton.style.display = "none";
//     challengeEl.style.display = "none";
//     quizTimer();
// });


// answerEl.addEventListener("click", function() {
//     question1.style.display = "none";
//     question2.style.display = "block";
//     question3.style.display = "block";
//     challengeEl.style.display = "block";

// });

