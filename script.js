// //create button on html page
// //grab button inside query selector in java
// //even listener when user clicks
// //when click, go to question
// //can put questions into html or javascript, java is dom manipulation
// //one question, some options to said question
// //user click option, is correct or incorrect, compare user choice to correct answer
// //for loop over questions to ask multiple questions, can use array
// //array for questions
// //array for answers             
// //keep track of indices for arrays for comparison, how to compare arrays????
// //array for correct answer
// //all arrays stored within an object
// //timer outside of for loop, so that timer isn't restarting with the loop, same goes for eventlisteners
// //create function for timer, run function when user starts quiz
// //if user answers incorrectly, deduct time. if/else? -->

// +++++=======================================

var questions = [{
	id: "1",
    question: "1. How do you write a message in an alert box?",
    choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctChoice: "msgBox('Hello World');"
}, {
	id: "2",
    question: "2. How do you empty an array in JavaScript?",
    choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctChoice: "arrayList(0)"
}, {
	id: "3",
	question: "3. What function adds an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctChoice: "push,unshift"
}, {
	id: "4",
    question: "4. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctChoice: "number"
},{
	id: "5",
	question: "5. Look at the following selector: $('div'). What does it select?",
    choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctChoice: "All div elements"
}
]

var totalScore = 0;
var quizStarted = false;
var cssStyling = 0;

// document.getElementById("results").style.display = "none";

// Question for Tutor: How do I get the text '# seconds left in the quiz" to appear next to the timer?
var currentIndex= 0;
function startQuiz(){
    renderButtons();
    quizStarted = true;
var count = 90;
displayQuestion();
removeStartBtn();
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
	alert("Time's up!!!");
  }

}, 1000)}

function removeStartBtn(){
    var startNode = document.getElementById("startBtn");
    startNode.remove();
}


// Making the questions appear
function displayQuestion(){
    addElement(questions[currentIndex]);
    displayChoices(questions[currentIndex]);
	};

function incrementIndex(){

    console.log("value", currentIndex, "questionlength", questions.length);
    if(currentIndex===questions.length){
        endQuiz();
    } else {
        clearFeedback();
        currentIndex++;   
        // document.getElementById("answer-confirmation").textContent = "";
        document.getElementById("question").innerHTML = questions[currentIndex].question;
        displayChoices(questions[currentIndex]);
    }
	console.log("incremented", currentIndex);
}
function decrementIndex(){
    // document.getElementById("answer-confirmation").textContent = "";
	console.log("value", currentIndex, "questionlength", questions.length);
    if(currentIndex === 0){
    } else {
        clearFeedback();
        currentIndex--;
        document.getElementById("question").innerHTML = questions[currentIndex].question;
        displayChoices(questions[currentIndex]);
        
    }
	console.log("decremented", currentIndex);
}
function displayChoices(currentQuestion){
    // var currentQuestion = questions(currentIndex);
    var choiceElement = document.getElementById("choices");
    choiceElement.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i){
        // console.log(choice);
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = checkAnswer;
        choiceElement.appendChild(choiceBtn);
    }
    )
}

function checkAnswer(){
    var displayElement = document.getElementById("answer-confirmation")
    if(this.value === questions[currentIndex].correctChoice) {
        totalScore++;
        displayElement.textContent = "Correct!";
    } else {
        displayElement.textContent = "WRONG!";
    }
    
    // console.log(this.value);
}

function clearFeedback(){
    var clearFeedback = document.getElementById("answer-confirmation");
    clearFeedback.textContent= "";
}
function endQuiz(){
    // display scorecard w/ Local Storage
    var playerInitials = document.getElementById("displayInitials").value.trim();
    if (playerInitials !== ""){
        var highScoreList = JSON.parse(window.localStorage.getItem("highScoreList")) || [];
        var newScore = {
            score: totalScore,
            initials: playerInitials
        };
        //append values to the array 
        highScoreList.push(newScore);
        //set value in local storage under - highscorelist
        window.localStorage.setItem("highScoreList",JSON.stringify(highScoreList))
        window.location.href="scoreboard.html";
    }
} 
// 	document.body.onload = addElement;


function getResults(){
    // document.getElementById("results)").style.display = "block";
    document.getElementById("finalscore").textContent=totalScore;

}

function addElement(question) { 
    document.getElementById("question").innerHTML = question.question;
}

function renderButtons() {
    if(!quizStarted){
    var nextBtnElement = document.getElementById("nextQuestion");
    var nextBtn = document.createElement("button");
        nextBtn.setAttribute("value", "next");
        nextBtn.textContent = "next";
        nextBtn.onclick = incrementIndex;
        nextBtnElement.appendChild(nextBtn);

    var prevBtnElement = document.getElementById("prevQuestion");
    var prevBtn = document.createElement("button");
        prevBtn.setAttribute("value", "prev");
        prevBtn.textContent = "prev";
        prevBtn.onclick = decrementIndex;
        prevBtnElement.appendChild(prevBtn);
    }
};