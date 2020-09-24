// Adding variables

var startButton = document.querySelector(".start");
var challengeEl = document.querySelector(".challenge");
var rulesEl = document.querySelector(".rules");
var question1 = document.querySelector("#question-1");
var question2 = document.querySelector("#question-2");
var question3 = document.querySelector("#question-3");
var question4 = document.querySelector("#question-4");
var question5 = document.querySelector("#question-5");
var question6 = document.querySelector("#question-6");
var question7 = document.querySelector("#question-7");
var answerEl = document.querySelector("#mc");
var timer;



function challengeQuestions() {
    challengeEl.style.display = "none";
}

function quizTimer() {
    timer = setTimeout(function () {
    challengeEl.style.display = "none";
    answerEl.innerHTML = "Time is up!"
    }, 24000);
}
// Add Event Listener
startButton.addEventListener("click", function() {
    console.log("You clicked me!")
    rulesEl.style.display = "none";
    startButton.style.display = "none";
    challengeEl.style.display = "none";
    quizTimer();
});


answerEl.addEventListener("click", function() {
    question1.style.display = "none";
    question2.style.display = "block";
    question3.style.display = "block";
    challengeEl.style.display = "block";

});

