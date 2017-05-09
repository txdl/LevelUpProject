#pragma strict

var rb: Rigidbody;
var moveSpeed: float;
var driftspeed: int;
var lastInput: Vector3;
var currentTime: float;

function Start() {
  rb = GetComponent(Rigidbody);
}
function Movement() {
 var rando: Vector3 = new Vector3(Random.Range(-1.0,1.0), 0, Random.Range(-1.0,1.0)); 
 rb.AddForce (rando * moveSpeed,ForceMode.Impulse);
 Debug.Log(rando);
}
function Update () {
	if(Time.time > currentTime) { 
		Movement () ; 
		currentTime+=7;
	}
}
