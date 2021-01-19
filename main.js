// AMW Quiz Demo

function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var correct = 0;
    if (question1 == "Hyper Text Markup Language") {
        correct++;
}
    if (question2 == "Cascading Style Sheets") {
        correct++;
    }
    
document.getElementById("after_submit").style.visibility="visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
