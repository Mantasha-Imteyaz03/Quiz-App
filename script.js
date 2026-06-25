const questions = [
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
  {
    question : "What global crisis does John Doerr outline an action plan to solve in his 2021 book Speed & Scale?",
    answers :[
      { text : 'Cyberwarfare' , correct : false},
      { text : 'Pandemics' , correct : false},
      { text : 'Climate' , correct : true},
      { text : 'Inflation' , correct : false},
    ]
  }
]

let questionElement = document.getElementById('question');
let answersElement = document.getElementById('answer-buttons');
let nextBtn = document.getElementById('next-btn');


let currQuestionIdx = 0;
let score = 0;

function startQuiz(){
 currQuestionIdx = 0;
 score = 0;
//  nextBtn.innerHTML = 'Next';
 showQuestion();
}

function showQuestion(){
  resetState()
  let currQuestion = questions[currQuestionIdx];
  let questionNo = currQuestionIdx + 1;
  questionElement.innerHTML = questionNo + '. ' + currQuestion.question

  let ascii = ['a','b','c','d'];

  currQuestion.answers.forEach((answer,idx)=>{
  const button = document.createElement('button');
  button.innerHTML = ascii[idx]+ '. ' +  answer.text;
  button.classList.add('btn')
  answersElement.appendChild(button)
  })
}


startQuiz()