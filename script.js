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

// console("Hi");

// function runQuiz() {

// var questionNum = (12345678) {
// let question = [];
// [0] = "Question 1";
// [1] = "Question 2";
// [2] = "Question 3";
// [3] = "Question 4";
// [4] = "Question 5";
// [5] = "Question 6";
// [6] = "Question 7";
// [7] = "Question 8";
// [8] = "Question 9";
// }

// var score = "0";

// for[0] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// for[1] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// for[2] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// for[3] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// for[4] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// for[5] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// for[6] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// for[7] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// for[8] {
//     var correctAns = "";
//     correctAns === true; 
//     var wrongAns = "___";
//     wrongAns !== true;
//     var wrongAns2 = "___";
//     wrongAns2 !== true;
//     var wrongAns3 = "___";
//     wrongAns !== true;
// }
// +++++=======================================

var questions = [{
	id: "1",
    question: "1. How do you write a message in an alert box?",
    choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctChoice: 2
}, {
	id: "2",
    question: "2. How do you empty an array in JavaScript?",
    choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctChoice: 2
}, {
	id: "3",
	question: "3. What function adds an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctChoice: 1
}, {
	id: "4",
    question: "4. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctChoice: 0
},{
	id: "5",
	question: "5. Look at the following selector: $('div'). What does it select?",
    choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctChoice: 2
}
]
// Question for Tutor: How do I get the text '# seconds left in the quiz" to appear next to the timer?
var currentIndex = 0;
function startQuiz(){
var count = 90;
displayQuestion();
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

// Making the questions appear
function displayQuestion(){
    addElement(questions[currentIndex]);
    displayChoices(questions[currentIndex]);
	};

function incrementIndex(){
	// console.log("value", currentIndex, "questionlength", questions.length);
    if(currentIndex===questions.length){
        endQuiz();
    } else {
        document.getElementById("question").innerHTML = questions[currentIndex].question;
        displayChoices(questions[currentIndex]);
        currentIndex++;
    }
	console.log("incremented", currentIndex);
}
function decrementIndex(){
	// console.log("value", currentIndex, "questionlength", questions.length);
    if(currentIndex === 0){
        endQuiz();
    } else {
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
        displayElement.textContent = "Correct!";
    } else {
        displayElement.textContent = "WRONG!";
    }
    // console.log(this.value);
}

function endQuiz(){
    // display scorecard w/ Local Storage

}
// 	document.body.onload = addElement;

function addElement(question) { 
	document.getElementById("question").innerHTML = question.question;



// 	// create a new div element 
// var newDiv = document.createElement("div"); 
// 	  // and give it some content 
// var newContent = document.createTextNode(question); 
// 	  // add the text node to the newly created div
// 	newDiv.appendChild(newContent);  
	
	  // add the newly created element and its content into the DOM 
// var currentDiv = document.getElementById("div1"); 
// 	document.body.insertBefore(newDiv, currentDiv); 
	}