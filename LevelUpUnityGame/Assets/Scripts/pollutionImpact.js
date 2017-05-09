#pragma strict
var otherScript: playerscoreboard;
var score: float;

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.layer == 9) {
		otherScript.increasescore(score);
		Debug.Log("hit");
	}
}

function Update () {
	
}
