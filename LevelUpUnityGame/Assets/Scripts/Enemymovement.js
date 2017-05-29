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

function Start() {
  rb = GetComponent(Rigidbody);
  playerboat = GameObject.Find("Playerboat");
  // attackRadius = 15;
}

function Update () {
	enemyPosition = this.gameObject.transform.position;
	playerPosition = playerboat.transform.position;
	attackVector = playerPosition - enemyPosition;
	
	if (Vector3.Distance(playerPosition,enemyPosition) < attackRadius) {
		isChasing = true;
	} else {
		isChasing = false;
	}

	if (isChasing && !isHarpooned) {
		attackVector.Normalize();
		rb.AddForce(attackVector * moveSpeed, ForceMode.Acceleration);
	}
	if (!isHarpooned){
		if (rb.velocity != Vector3.zero) {
	 	   transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(rb.velocity),Time.deltaTime * 5);
		}
	}
	transform.position.y = 0.5;
}

function startChasing() {

}

function harpoonPlayer() {
	isHarpooned = true;
}
