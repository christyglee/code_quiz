// Adding variables

var startButton = document.getElementById("btn");
var quizEl = document.getElementById("quiz");
var rulesEl = document.getElementById("card-text");
var answerEl = document.getElementById("answer");
var timer;


// Add Event Listener
startButton.addEventListener("click", function() {
    rulesEl.style.display = "none";
    startButton.style.display = "none";
    quizEl.style.display = "block";
    quizTimer();
});
