#pragma strict
import UnityEngine.UI;

var moveScript: Playermove;
var worldgen: WorldGeneration;

function Start(){
	Application.ExternalCall("UnityReady");
}

function RichMove (toggleRich:String){
	if (toggleRich=="universal"){
		moveScript.richMove=true;
	}
	else {
		moveScript.richMove=false;
	}
}

function HarpoonDEATH(amt:String){
	if (amt == "two"){
		moveScript.maxAttached = 2;
	} else {
		moveScript.maxAttached = 4;
	}
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