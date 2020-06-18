



var questions = [{
	id: "1",
    question: `1. Which of the following is the correct syntax to display "Hey there!" in an alert box?`,
    choices: [`A. alertbox(“Hey there!”)`, `B. msg(“Hey there!”)`, `C. msgbox(“Hey there!”)`, `D. alert(“Hey there!”);`],
    correctChoice: `D. alert(“Hey there!”);`
}, {
	id: "2",
    question: `Which method of an Array object adds and/or removes elements from an array.`,
    choices: [`A.  Shift`,`B.  Splice`, `C.  Slice`, `D.  Reverse`],
    correctChoice: "B.  Splice"
}, {
	id: "3",
	question: "3. It is not possible to nest functions in JavaScript?",
    choices: [`A  True`, `B.  False`],
    correctChoice: "B.  False"
}, {
	id: "4",
    question: `4. What does the "this" jeyword in JavaScript do?`,
    choices: [`A.  It refers to the current object`, `B.  It refers to the previous object`,`C.  It it is a gloal selector`,`D.  None of the above`],
    correctChoice: "A.  It refers to the current object"
},{
	id: "5",
	question: `5. What are variables used for in JavaScript`,
    choices: [`A.  Storing numbers, dates, or other values`,`B.  Unlocking varying abilities`,`C.  Causing high-school algebra flashbacks`,`D.  None of the above`],
    correctChoice: "A.  Storing numbers, dates, or other values"
}
]

var totalScore = 0;
var quizStarted = false;
var currentIndex= 0;
function startQuiz(){
    renderButtons();
    quizStarted = true;
var count = 90;
displayQuestion();
removeStartBtn();
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  document.getElementById('count').textContent = `${count} seconds remaining`;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
	alert("Time's up!!!");
  }

}, 1000)}

function removeStartBtn(){
    var startNode = document.getElementById("startBtn");
    startNode.remove();
}

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
        document.getElementById("question").innerHTML = questions[currentIndex].question;
        displayChoices(questions[currentIndex]);
    }
	console.log("incremented", currentIndex);
}
function decrementIndex(){
	console.log("value", currentIndex, "questionlength", questions.length);
    if(currentIndex === 0){
    } else {
        clearFeedback();
        currentIndex--;
        document.getElementById("question").innerHTML = questions[currentIndex].question;
        displayChoices(questions[currentIndex]);
        
    }
}
function displayChoices(currentQuestion){

    var choiceElement = document.getElementById("choices");
    choiceElement.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i){
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
}

function clearFeedback(){
    var clearFeedback = document.getElementById("answer-confirmation");
    clearFeedback.textContent= "";
}
function endQuiz(){


    var playerInitials = document.getElementById("displayInitials").value.trim();
    if (playerInitials !== ""){
        var highScoreList = JSON.parse(window.localStorage.getItem("highScoreList")) || [];
        var newScore = {
            score: totalScore,
            initials: playerInitials
        };
        highScoreList.push(newScore);
        window.localStorage.setItem("highScoreList",JSON.stringify(highScoreList))
        window.location.href="scoreboard.html";
    }
} 



function getResults(){
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