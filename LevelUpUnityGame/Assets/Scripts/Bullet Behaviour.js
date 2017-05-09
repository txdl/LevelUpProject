#pragma strict

var shatter: GameObject;

function Start () {
Invoke("DestroyInBullet", 4);
}

function OnCollisionEnter(bulletcollision: Collision) {
	if (bulletcollision.gameObject.tag=='enemy'){
		Instantiate (shatter,transform.position,transform.rotation);
		Destroy (bulletcollision.gameObject);
	} 
	Destroy (gameObject);
}

function DestroyInBullet () {
	Destroy (gameObject);
}
