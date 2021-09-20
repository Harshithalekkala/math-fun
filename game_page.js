var player_1 = localStorage.getItem("player1");
var player_2 = localStorage.getItem("player2");

var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player_1;
document.getElementById("player2_name").innerHTML=player_2;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question-turn"+player_1;
document.getElementById("player_answer").innerHTML="answer-turn"+player_2;

function send() {
   num1=document.getElementById("num1").value;
   num2=document.getElementById("num2").value;
   word=num1*num2;
   question=num1+"X"+num2;
    question_word="<h4 id='word_display'>Q. "+question+"</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row = question_word + input_box + check_button ;
       document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = "";
}

var question_turn="player1";
var answer_turn="player2";
function check() {
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if (answer==word) {
        if (answer_turn=="player1") {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
 
        }
        if (question_turn=="player1") {
            question_turn="player2";
            document.getElementById("player_question").innerHTML="question turn-"+player_2;

        }
        else if(question_turn=="player2"){
            question_turn="player1";
            document.getElementById("player_question").innerHTML="question turn-"+player_1;
        }

        if (answer_turn=="player1") {
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="answer turn-"+player_2;

        }
        else if(answer_turn=="player2"){
            answer_turn="player1";
            document.getElementById("player_answer").innerHTML="answer turn-"+player_1;
        }
    }
    document.getElementById("output").innerHTML="";
}
