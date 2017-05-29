#pragma strict

var shatter: GameObject;
var worldGen: WorldGeneration;

function Start () {
	worldGen = GameObject.Find("WorldGeneration").GetComponent.<WorldGeneration>();
	Invoke("DestroyInBullet", 4);
}

function OnCollisionEnter(bulletcollision: Collision) {
	if (bulletcollision.gameObject.tag=='enemy'){
		bulletcollision.gameObject.GetComponent.<HarpoonLauncher>().JointCheck();
		worldGen.SpawnObj(worldGen.pirate,1,0.5);
		Instantiate (shatter,transform.position,transform.rotation);
		Destroy (bulletcollision.gameObject);
	} 
	Destroy (gameObject);
}

function DestroyInBullet () {

	Destroy (gameObject);
}
