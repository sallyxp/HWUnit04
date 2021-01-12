
// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const correct = document.getElementById("correct");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
var questions = [
    {
        question : "Into which HTML element do you put the Javascript?",
        choiceA : "body",
        choiceB : "head",
        choiceC : "p",
        choiceD : "script",
        correct : "D"
    },
    {
        question : "How do you call a function named myFunction()?",      
        choiceA : "myFunction()",
        choiceB : "Function()",
        choiceC : "call myFunction()",
        choiceD : "myFunction",
        correct : "B"
    },
    {
        question : "How do you write an IF statement in Javascript?",     
        choiceA : "if (i==5)",
        choiceB : "If (i===5)",
        choiceC : "if (i < '5')",
        choiceD : "if (i <> 5)",
        correct : "A"
    },
    {
        question : "Which statement is correct?",
        choiceA : "for (var i !=5)",
        choiceB : "if (i !=5)",
        choiceC : "for (var i=0, i<array.length, i++)",
        choiceD : "Javascript is impossible!",
        correct : "B"
    },
    {
        question : "Who invented Javascript",
        choiceA : "Douglas Crocford",
        choiceB : "Maxwell House",
        choiceC : "Brendan Eich",
        choiceD : "Sheryl Sandberg",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 60;
const questionTime = 60; // 10s
//var correctQuestion = false;
var TIMER;
var score = 0;

// render a question - 
// display question and options
function renderQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    correct.innerHTML = "      ";
       
}

//start.addEventListener("click",startQuiz);


// start quiz
function startQuiz(){
  var score = 0;

  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";

  // render progress is the counter -to score
  renderProgress();
  renderCounter();
  //set timer countdown
  setTime();
  TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(var i = 0; i <= lastQuestion; i++) {
        progress.innerHTML += "<div class='prog' id="+ i +"></div>";
       }
}

function renderCounter(){
       if(count <= questionTime){
         counter.innerHTML = count;
         count--
    }else{
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            //That was the last question
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

function checkAnswer(answer){
    //checks answer - if correct timer continues to decrease and score increments
    // if incorrect timer decreases by 10 seconds
    if( answer == questions[runningQuestion].correct){
        score++;
       answerIsCorrect();
    }else{
        answerIsWrong();
        count = count -10;
    }
    
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// if answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// if answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
   scoreDiv.style.display = "block";
   quiz.style.display = "none";
   score;
    var arrScoreboard = [
        {
            initials: "Initials",
            score : "Score"
        }];
    
   if(score == 0){
      scoreDiv.innerHTML += "Your score was zero - back to w3schools!";
    }   
   else {   
    
     scoreDiv.innerHTML += "<p>Your score is: " + score +" - Genius!</p>";
    
      if  (Genius.length == 0) {
          //do nothing
      }
      else {
        var Genius = prompt("Would you like to record your magnificent score with your initials?"); 
        arrScoreboard.push(Genius, score);
        console.log(arrScoreboard);
      }
   }
    scoreDiv.innerHTML = score;
}
     // Add event listener to generate button
     start.addEventListener("click", startQuiz); 

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    counter.innerHTML = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}





