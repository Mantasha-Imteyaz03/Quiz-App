const questions = [
  {
    question : "What global crisis does John Doerr outline an action plan to solve in his 2021 book Speed & Scale?",
    answers :[
      { text : 'Cyberwarfare' , correct : false},
      { text : 'Pandemics' , correct : false},
      { text : 'Climate' , correct : true},
      { text : 'Inflation' , correct : false},
    ]
  },
  {
    question : "Who is the founder of Tesla car?",
    answers :[
      { text : 'Elon Musk' , correct : true},
      { text : 'Mark zuckerberg' , correct : false},
      { text : 'Jeff bezos' , correct : false},
      { text : 'Larry Ellisons' , correct : false},
    ]
  },
  {
    question : "Who is the founder of facebook?",
    answers :[
      { text : 'Priscilla Chan' , correct : false},
      { text : 'Mark zuckerberg' , correct : true},
      { text : 'Sean Parker' , correct : false},
      { text : 'Sam Altman' , correct : false},
    ]
  },
  {
    question : "Who is the current CEO of Berkshire Hathaway?",
    answers :[
      { text : 'Sheryl Sandberg' , correct : false},
      { text : 'Alexandr Wang' , correct : false},
      { text : 'Peter Thiel' , correct : false},
      { text : 'Warren Buffett' , correct : true},
    ]
  },
   {
    question : "What was the original name of the Google search engine project?",
    answers :[
      { text : 'Yahoo' , correct : false},
      { text : 'Altavista' , correct : false},
      { text : 'BackRub' , correct : true},
      { text : 'Bing' , correct : false},
    ]
  },
    
]

let questionElement = document.getElementById('question');
let answersElement = document.getElementById('answer-buttons');
let nextBtn = document.querySelector('.next-btn');



let currQuestionIdx = 0;
let score = 0;

function startQuiz(){
 currQuestionIdx = 0;
 score = 0;
 nextBtn.innerHTML = 'Next';
 nextBtn.style.display = "none";
 answersElement.innerHTML = "";
 showQuestion();
}

function showQuestion(){
  let currQuestion = questions[currQuestionIdx];
  let questionNo = currQuestionIdx + 1;
  questionElement.innerHTML = questionNo + '. ' + currQuestion.question

  let ascii = ['a','b','c','d'];

  currQuestion.answers.forEach((answer,idx)=>{
  const button = document.createElement('button');
  button.innerHTML = ascii[idx]+ '. ' +  answer.text;
  button.classList.add('btn')
  answersElement.appendChild(button)

  button.addEventListener('click', ()=>{


    if(answer.correct == true){
      score++
      button.style.backgroundColor = "green"
      button.style.fontWeight = 700;
      button.style.color = "white"
    }else{
      button.style.backgroundColor = "red"
      button.style.fontWeight = 700;
      button.style.color = "white"
  }

for(let i=0; i<answersElement.children.length; i++){
if (currQuestion.answers[i].correct) {
   answersElement.children[i].style.backgroundColor = 'green'
   answersElement.children[i].style.fontWeight = 700;
   answersElement.children[i].style.color = "white" 
  
}
 answersElement.children[i].disabled = true
   }
    nextBtn.style.display = 'block';
     })
    
  })
}

nextBtn.addEventListener('click', ()=>{
  if(currQuestionIdx < questions.length){
    answersElement.innerHTML = '';
    nextBtn.style.display = "none";
  showQuestion()
   }else if (nextBtn.innerHTML === "Restart") {

        startQuiz();

    }else{
     
    finalScore()

  }
       currQuestionIdx++

})


  function finalScore() {
    answersElement.innerHTML = "";

    questionElement.innerHTML = `🎉 Your score is ${score} out of ${questions.length}`;

    nextBtn.innerHTML = "Restart";
    nextBtn.style.display = "block";
}



startQuiz()