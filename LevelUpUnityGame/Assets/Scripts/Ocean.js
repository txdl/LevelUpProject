#pragma strict

var target: Transform;

function LateUpdate() {
	transform.position = new Vector3 (target.position.x, 0, target.position.z);
}