#pragma strict
var scoreboard: int;
var myScore: UI.Text;


function Start () {
	myScore.text = 'Suck up pollution by\nstaying in the pools!';
}

function Update () {
	
}


function increasescore(amt:int) {
	scoreboard += amt;
	myScore.text = 'Score: '+scoreboard;
}

function GameOver(){
	myScore.text = "Pinned by pirates\nYour final score is: "+scoreboard;
}
