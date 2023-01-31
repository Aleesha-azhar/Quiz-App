function Quiz(questions){
    this.scores = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getCurrentQuestionIndex = function(){
    return  this.questions[this.questionIndex];
}
Quiz.prototype.quizEnded = function(){
    return this.questions.length == this.questionIndex;
}
Quiz.prototype.guess = function(answer){
    if(this.getCurrentQuestionIndex().correctResult(answer)){
        this.scores++;
    }
    this.questionIndex++;

}