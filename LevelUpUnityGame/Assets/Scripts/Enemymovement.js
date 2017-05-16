#pragma strict

var rb: Rigidbody;
var moveSpeed: float;
var driftspeed: int;
var lastInput: Vector3;
var currentTime: float;
var attackRadius: float;
var playerPosition: Vector3;
var playerboat: GameObject;
var enemyPosition: Vector3;
var attackVector: Vector3;

function Start() {
  rb = GetComponent(Rigidbody);
  playerboat = GameObject.Find("Playerboat");
  attackRadius = 15;
}

function Update () {
	enemyPosition = this.gameObject.transform.position;
	playerPosition = playerboat.transform.position;
	attackVector = playerPosition - enemyPosition;
	if (attackVector.magnitude < attackRadius) {
		Debug.Log('attack');
		rb.AddForce(attackVector * moveSpeed, ForceMode.Impulse);
	}
}
