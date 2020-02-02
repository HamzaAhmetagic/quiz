function Quiz(questions){
	this.questions = questions;
	this.score = 0;
	this.currentQuestionIndex = 0;


	this.getQuestion = function(){
		let question = this.questions[this.currentQuestionIndex]
		return question;
			}
}
let quiz = new Quiz(questions)
// console.log(quiz)
// function info(a,b){
// 	let number = a+b
// 	return number
// }
// let number = info(100,200)
