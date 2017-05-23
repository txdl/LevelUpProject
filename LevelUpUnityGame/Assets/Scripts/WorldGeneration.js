#pragma strict

var rock: GameObject;
var rockAmt = 22;
var boat: GameObject;
var pool: GameObject;
var pirate: GameObject;
var velocity: float;
var acceleration: float;
var vector: Vector3;
var boatPosition: Vector3;


function OnTriggerExit(coll: Collider) {
	coll.gameObject.transform.position = boat.transform.forward * 200;
}
