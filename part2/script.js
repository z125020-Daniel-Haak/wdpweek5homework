let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");

const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");
let selectedIndex = 4;

fetch("questions.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  clearOptions();
  document.getElementById("question-count").textContent =
  `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  const q = questions[currentQuestionIndex];
  questionText.textContent = q.question;

   //INPUT YOUR CODE HERE
   //HINT: Loop through each option for the current question
  //q.options.forEach((option, index) => {

    answerA.textContent = `A: ${q.options[0]}`;
    answerB.textContent = `B: ${q.options[1]}`;
    answerC.textContent = `C: ${q.options[2]}`;
    answerD.textContent = `D: ${q.options[3]}`;

    
  // TODO:
  // 1. Create a button element
  // 2. Set the button's text to the option
  // 3. Add a class to style it
  // 4. Add an onclick event that calls checkAnswer(index)
  // 5. Add the button to the optionsContainer

    
//});
}

function pressA() {
  selectedIndex = 0;
  checkAnswer(selectedIndex);
}
function pressB() {
  selectedIndex = 1;
  checkAnswer(selectedIndex);
}
function pressC() {
  selectedIndex = 2;
  checkAnswer(selectedIndex);
}
function pressD() {
  selectedIndex = 3;
  checkAnswer(selectedIndex);
}

function checkAnswer(selectedIndex) {
  const correct = questions[currentQuestionIndex].answer;
  if (selectedIndex === correct) {
    score++;
  }
  nextBtn.disabled = false;
  A.disabled = true;
  B.disabled = true;
  C.disabled = true;
  D.disabled = true;

  if (correct === 0) A.style.backgroundColor = "#a4edba";
  else{A.style.backgroundColor = "#f5a3a3";}
  if (correct === 1) B.style.backgroundColor = "#a4edba";
  else{B.style.backgroundColor = "#f5a3a3";}
  if (correct === 2) C.style.backgroundColor = "#a4edba";
  else{C.style.backgroundColor = "#f5a3a3";}
  if (correct === 3) D.style.backgroundColor = "#a4edba";
  else{D.style.backgroundColor = "#f5a3a3";}
}

function clearOptions() {

  A.style.backgroundColor = "#f4f4f4";
  B.style.backgroundColor = "#f4f4f4";
  C.style.backgroundColor = "#f4f4f4";
  D.style.backgroundColor = "#f4f4f4";

  nextBtn.disabled = true;

  A.disabled = false;
  B.disabled = false;
  C.disabled = false;
  D.disabled = false;
  
  // INPUT YOUR CODE HERE
  // HINT
  // 1. Clear the contents of the options container
  // 2. Disable the Next button so users can't skip ahead
}

nextBtn.addEventListener("click", getNext);
A.addEventListener("click", pressA);
B.addEventListener("click", pressB);
C.addEventListener("click", pressC);
D.addEventListener("click", pressD);

function getNext(){
  if (currentQuestionIndex <= 29) currentQuestionIndex++;
  if (currentQuestionIndex === 30) showResult();

  clearOptions();
  showQuestion();
  // INPUT YOUR CODE HERE
  // HINT
  // 1. Move to the next question by increasing the question index
  // 2. If there are questions left, show the next one
  // 3. Otherwise, call a function to show the final result
}


function showResult() {
  document.querySelector(".quiz-box").innerHTML = `<h2>Your score: ${score} / ${questions.length}</h2>`;
}
