function populate(){
    if(quiz.quizEnded()){
        showResult();
    }
    else{
       let element = document.getElementById('question');
       element.innerHTML = quiz.getCurrentQuestionIndex().text;

       let choices = quiz.getCurrentQuestionIndex().choices;
       for(var i = 0; i< choices.length; i++){
        let ele = document.getElementById('choice' + i);
        ele.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
        
       }

       showProgress();
    }
};

function showProgress(){
    let currentQuestionNmbr = quiz.questionIndex + 1;
    let progressElement = document.getElementById('progress');
    progressElement.innerHTML = "question" + " " + currentQuestionNmbr +"of" + " " + quiz.questions.length;
}


function guess(id, guess){
let button = document.getElementById(id);
button.onclick = function(){
    quiz.guess(guess);
    populate();
}
}

function showResult(){

    let resultHtml = "<h1>Result</h1>";
    resultHtml += "<h2 id='score'> your scores: " + quiz.scores + "<h2></h2>";
    let quizElement = document.getElementById('quiz');
    quizElement.innerHTML = resultHtml;


}

let questions = [
    new Question("which one is not an OOP language?", ["Java", "C#", "C++", "C"], "c"),
    new Question("which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of OOP?", ["1", "6", "2", "4"], "4"),
    new Question("which language are used for web App?", ["PHP", "Python", "JavaScript", "All"], "All"),
    new Question("MVC is a ____?", ["Language", "Lirary", "Framework", "All"], "Framework")
];
let quiz = new Quiz(questions);
populate();