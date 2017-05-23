#pragma strict

var rb: Rigidbody;
var moveSpeed: float;
var isHarpooned: boolean = false;
var isChasing: boolean = false;
var driftspeed: int;
var lastInput: Vector3;
var currentTime: float;
var attackRadius: float;
var playerPosition: Vector3;
var playerboat: GameObject;
var enemyPosition: Vector3;
var attackVector: Vector3;
var sj: SpringJoint;

function Start() {
  rb = GetComponent(Rigidbody);
  sj = GetComponent(SpringJoint);
  playerboat = GameObject.Find("Playerboat");
  // attackRadius = 15;
}

function Update () {
	enemyPosition = this.gameObject.transform.position;
	playerPosition = playerboat.transform.position;
	attackVector = playerPosition - enemyPosition;
	
	if (attackVector.magnitude < attackRadius) {
		isChasing = true;
	}

	if (isChasing && !isHarpooned) {
		attackVector.Normalize();
		rb.AddForce(attackVector * moveSpeed, ForceMode.Acceleration);

		sj.anchor = enemyPosition;
	}
}

function startChasing() {

}

function harpoonPlayer() {
	isHarpooned = true;
}
