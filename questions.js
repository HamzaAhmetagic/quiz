function Question(text,answers,correct,point,category){
	this.text = text;
	this.answers = answers;
	this.correct = correct;
	this.point = point;
	this.category = category; 
}
// let pitanje1 = new Question("glavni grad Bosne?",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Sarajevo",5,"cities")
// let pitanje2 = new Question("glavni grad Bosne?",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Sarajevo",5,"cities")
// console.log(pitanje1);
let questions = [
new Question("glavni grad Bosne?",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Sarajevo",5,"cities"),
new Question("glavni grad Srbije?",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Beograd",5,"cities"),
new Question("glavni grad Slovenije?",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Ljubljana",5,"cities"),
new Question("glavni grad Hrvatske?",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Zagreb",5,"cities"),

]
