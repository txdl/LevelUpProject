#pragma strict

function Start () {
	Invoke("DestroyInEnemy", 3);
}
function DestroyInEnemy () {
	Destroy (gameObject);
}

function Update () {
	
}
