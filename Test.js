var myQuestions = [
	{                                                                                                                      
		question: "(1.1) In che anno è avvenuta la secessione di Casoria?",                                                  
		answers: {
			a: '1578',
			b: '1678',
			c: '1687'
		},
		correctAnswer: 'b'
	},
	{
		question: "(1.2) Chi fu il generale che guidò l'esercito di Casoria durante la secessione?",
		answers: {
			a: 'Cugino Manna',
			b: 'Fratello Manna',
			c: 'Gemello Manna'
		},
		correctAnswer: 'c'
	},
	{
		question: "(1.4)Dopo la secessione, sono stati fondati diversi Stati, come l'Emirato Arabo...",
		answers: {
			a: 'Casoriano',
			b: 'Abruzzese',
			c: 'Pugliese'
		},
		correctAnswer: 'c'
	},
	{
		question: "(2.1) A chi chiese assistenza lo zar Alessandro I per contrastare Napoleone?",
		answers: {
			a: 'Babbo Natale',
			b: 'Gesù Cristo',
			c: 'Vladimir Putin'
		},
		correctAnswer: 'a'
	},
	{
		question: "(2.2) Quale fu la casata monarchica a cui venne assegnata il dominio sopra Casoria?",
		answers: {
			a: 'I Giomertosi',
			b: 'I Giangingilli',
			c: 'I frufru'
		},
		correctAnswer: 'b'
	},
	{
		question: "(2.3) Come giudichi il plot twist sul figlio di Garibaldi?",
		answers: {
			a: 'Ottimo colpo di scena',
			b: 'Mashallah',
			c: 'Sono razzista'
		},
		correctAnswer: 'a'
	},
	{
		question: "(3.1) Chi sono i nemici esclesiastici dei Papalem?",
		answers: {
			a: 'I Monachesi',
			b: 'I Giomertosi',
			c: 'I Busteriani'
		},
		correctAnswer: 'c'
	},
	{
		question: "(3.1) Chi era il Maresciallo incaricato nell'indagare sulle spie nemiche di Casoria?",
		answers: {
			a: 'Cocco Bello',
			b: 'Mimmo',
			c: 'Colossus'
		},
		correctAnswer: 'a'
	},
	{
		question: "(3.2) Una di queste 3 affermazioni è falsa: individuala.",
		answers: {
			a: 'Tony Ciccio, campione nella prendita di pizzo e di addominali',
			b: 'Esisteva una netta differenza sociale ed economica nel vivere o nelle città principali o nei paesini',
			c: 'Una cerchia stretta di élite controllava e gestiva il commercio e la produzione di Casoria'
		},
		correctAnswer: 'a'
	},
	{
		question: "(3.4) La reggia di Caserta era sotto il controllo...",
		answers: {
			a: 'Casertano',
			b: 'Casoriano',
			c: 'Italiano'
		},
		correctAnswer: 'b'
	},
	{
		question: "(4.2) Cosa pensi sul comunismo?",
		answers: {
			a: 'Bello',
			b: 'Meh',
			c: 'Odio'
		},
		correctAnswer: 'c'
	},
	{
		question: "(4.3) Vittorio Emanuele III...",
		answers: {
			a: 'Voleva vendicare i territori persi dallo Stato della Chiesa',
			b: 'Voleva vendicare Garibaldi e tutti i soldati morti',
			c: 'Voleva distruggere le truppe rivoluzionarie di Vittorio Scala'
		},
		correctAnswer: 'b'
	},
	{
		question: "(4.4) Cosa farà Vittorio Scala?",
		answers: {
			a: 'Vendicherà suo padre uccidendo Giangingillo I',
			b: 'Scapperà e fonderà una repubblica socialista in Albania',
			c: 'Ruberà la pelata al Duce'
		},
		correctAnswer: 'a'
	},
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;
    for(var i=0; i<questions.length; i++){
      answers = [];
      for(letter in questions[i].answers){
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;
    for(var i=0; i<questions.length; i++){
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      if(userAnswer===questions[i].correctAnswer){
        numCorrect++;
        answerContainers[i].style.color = 'lightgreen';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }
  showQuestions(questions, quizContainer);
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}


