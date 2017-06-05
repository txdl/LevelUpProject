#pragma strict
import UnityEngine.UI;

var moveScript: Playermove;
var worldgen: WorldGeneration;

function RichMove (toggleRich:String){
	if (toggleRich=="universal"){
		moveScript.richMove=true;
	}
	else {
		moveScript.richMove=false;
	}
}
function AmtRock (amt:String){
	worldgen.rockAmt=parseInt(amt);
}

function AmtPool(amt:String){
	worldgen.poolAmt=parseInt(amt);
}

function AmtPirate(amt:String){
	worldgen.pirateAmt=parseInt(amt);
}

function HarpoonDEATH(amt:String){
	moveScript.maxAttached=parseInt(amt);
}

function ActivateJump (toggleSahab:String){
	if (toggleSahab=="jump"){
		moveScript.sahabjump=true;
	}
	else {
		moveScript.sahabjump=false;
	}
}

function SetDifficulty(difficulty:String){
	if (difficulty == "easy"){
		worldgen.rockAmt=20;
		worldgen.poolAmt=25;
		worldgen.pirateAmt=10;
	} else {
		worldgen.rockAmt=25;
		worldgen.poolAmt=15;
		worldgen.pirateAmt=20;	
	}
}