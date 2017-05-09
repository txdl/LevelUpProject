#pragma strict

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.layer == 8) {Debug.Log("hit");}
}

function Update () {
	
}
