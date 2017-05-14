#pragma strict
var scoreboard: int;
var myScore: UI.Text;


function Start () {
	myScore.text = 'Score';
}

function Update () {
	
}


function increasescore(amt:int) {
	scoreboard += amt;
	myScore.text = 'Score '+scoreboard;
}
