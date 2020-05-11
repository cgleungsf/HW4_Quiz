
var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

var end = document.querySelector(".end-screen");
end.style.display = "none";
var restart = document.querySelector("#restart");
restart.style.display = "none";

var endScore = document.querySelector("#endScore");
endScore.style.display = "none";

var initial = document.querySelector("#init");
var save = document.querySelector("#save");

var $scoreReport = document.querySelector("#score");
var $finalScore = document.querySelector("#final-score");

var currentQuestion = document.querySelector("#question-title");
var choiceOne = document.querySelector("#choiceOne");
var choiceTwo = document.querySelector("#choiceTwo");
var choiceThree = document.querySelector("#choiceThree");
var choiceFour = document.querySelector("#choiceFour");

var timeLeft = document.querySelector("#timer");

choiceOne.style.display = "none";
choiceTwo.style.display = "none";
choiceThree.style.display = "none";
choiceFour.style.display = "none";

var scoreTracker;
var i;
var secondsLeft = 30;

var initialInput = document.querySelector("#initial-text");
var initialForm = document.querySelector("#initial-form");
var initialList = document.querySelector("#initial-list");
var scoreList = document.querySelector("#score-list");

var initialCountSpan = document.querySelector("#initial-count");
var initials = [];
var clearButton = document.querySelector("#clear");

// created an array of questions with q indicating a question, c indicating the user choices, and a indicating the correct answer
var questions = [// q = questions, c = choices, a = answer
  {
    q: "Which type of houseplant requires the least amount of care?",
    c: ["(a) Monsteras", "\n (b) Hoyas", "\n (c) Sansevierias", "\n (d) Philidendrons"], //QUESTION - create new line?
    a: 2
  },
  {
    q: "Which house plant is known for its fenestrations?",
    c: ["(a) Monsteras", "(b) Hoyas", "(c) Sansevierias", "(d) Philidendrons"],
    a: 0
  },
  {
    q: "Which is the most poisinous to cats?",
    c: ["(a) Pepperomia", "(b) Lilys", "(c) African Violets", "(d) Pothos"],
    a: 1
  },
  {
    q: "What is the common name for sansevieria ?",
    c: ["(a) Snake Plant", "(b) String of Hearts", "(c) Burros Tail", "(d) Devil's Ivy"],
    a: 0
  },
  {
    q: "What is the common name for pilea peperomia ?",
    c: ["(a) UFO Plant", "(b) Pancake Plant", "(c) Chinese Money Plant", "(d) All of the above"],
    a: 3
  },
  {
    q: "What is the common name for sedum morganianum?",
    c: ["(a) Snake Plant", "(b) String of Hearts", "(c) Burros Tail", "(d) Devil's Ivy"],
    a: 2
  },
  {
    q: "What is the common name for epipremum aureum?",
    c: ["(a) Snake Plant", "(b) String of Hearts", "(c) Burros Tail", "(d) Devil's Ivy"],
    a: 3
  },
  {
    q: "Which plant is the most rare?",
    c: ["(a) Monstera Obliqua", "(b) Monstera Adansonii", "(c) Monstera Deliciosa", "(d) Monstera Siltepecana"],
    a: 0
  },
  {
    q: "What is the minimum price for a Monstera Obliqua?",
    c: ["(a) $10", "(b) $100", "(c) $500", "(d) $1,000"],
    a: 3
  },
  {
    q: "How should you care for air plants?",
    c: ["(a) soak them daily", "(b) soak them weekly", "(c) mist them weekly ", "(d) do nothing"],
    a: 1
  }
];

function startQuiz() {
  $scoreReport.textContent=0;
  startButton.style.display = "none";  // removes Start Quiz Button;
  scoreTracker = 0;
  i = 0;
  secondsLeft = 30;
  startTimer();
  quizQuestions();
}

function quizQuestions() {
  currentQuestion.style.display = "block";
  choiceOne.style.display = "table-row";
  choiceTwo.style.display = "table-row";
  choiceThree.style.display = "table-row";
  choiceFour.style.display = "table-row";
  if (i < questions.length) {
    currentQuestion.textContent = questions[i].q;
    choiceOne.textContent = questions[i].c[0];
    choiceTwo.textContent = questions[i].c[1];
    choiceThree.textContent = questions[i].c[2];
    choiceFour.textContent = questions[i].c[3];
    answer = questions[i].a;
    if (secondsLeft > 4) {
      choiceOne.onclick = function () {
        var userInput = 0;
        if (userInput === answer) {
          scoreTracker++;
          nextQuestion();
        }
        else {
          secondsLeft = secondsLeft - 5;
          nextQuestion()
        }
      }
      choiceTwo.onclick = function () {
        var userInput = 1;
        if (userInput === answer) {
          scoreTracker++;
          nextQuestion();
        }
        else {
          secondsLeft = secondsLeft - 5;
          nextQuestion()
        }
      }
      choiceThree.onclick = function () {
        var userInput = 2;
        if (userInput === answer) {
          scoreTracker++;
          nextQuestion();
        }
        else {
          secondsLeft = secondsLeft - 5;
          nextQuestion()
        }
      }
      choiceFour.onclick = function () {
        var userInput = 3;
        if (userInput === answer) {
          scoreTracker++;
          nextQuestion();
        }
        else {
          secondsLeft = secondsLeft - 5;
          nextQuestion()
        }
      }
    }
  }
  else {
    secondsLeft = 0;
    endQuiz();
  }
}

function nextQuestion() {
  $scoreReport.textContent = scoreTracker;
  i++;
  quizQuestions();
}

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      secondsLeft = 0;
      clearInterval(timerInterval);
      timeLeft.textContent = secondsLeft;
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  currentQuestion.style.display = "none";
  choiceOne.style.display = "none";
  choiceTwo.style.display = "none";
  choiceThree.style.display = "none";
  choiceFour.style.display = "none";
  endScore.style.display = "block";
  restart.style.display = "initial";
  endScore.textContent = (`You got a score of ${scoreTracker} out of ${questions.length}!`);
  end.style.display = "block";
  initialCountSpan.textContent++;
  restart.onclick = function () {
    restart.style.display = "none";
    end.style.display = "none";
    startQuiz();
  }
}

function renderinitials(initialText) {
  var scoreset = document.createElement("div");
  var initial = document.createElement("span");
  initial.classList.add('initial-list');
  var score = document.createElement("span");
  score.classList.add('initial-list');

  score.textContent = scoreTracker;
  initial.textContent = initialText;

  scoreset.appendChild(initial);
  scoreset.appendChild(score);
  document.getElementById("scoreboard-container").appendChild(scoreset);


}
initialForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var initialText = initialInput.value.trim();

  if (initialText === "") {
    alert("Please enter up to three letters for your initials.");
    return;
  }
  else if (initialText.length > 3) {
    alert("Please enter up to three letters for your initials.");
    return;
  }
  renderinitials(initialText.toUpperCase());
});
