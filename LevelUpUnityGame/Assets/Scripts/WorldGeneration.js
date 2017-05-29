#pragma strict

var rockAmt = 22;
var poolAmt = 22;
var pirateAmt = 22;

var rock: GameObject;
var pool: GameObject;
var pirate: GameObject;

var minDist = 50;
var maxDist = 100;

function Start(){
	SpawnObj(rock,rockAmt,0.5);
	SpawnObj(pool,poolAmt,0.75);
	SpawnObj(pirate,pirateAmt,0.5);
}

function OnTriggerExit(coll: Collider) {
	coll.gameObject.transform.position = transform.forward * 200;
	SpawnObj(coll.gameObject,1,coll.gameObject.transform.position.y);
	Destroy(coll.gameObject);
}

function SpawnObj(obj: GameObject, amt: int, yHeight: float){
	for (var i = 0; i<amt; i++){
		var randomHeading : Vector3 = Vector3(Random.Range(-1.0,1.0),0,Random.Range(-1.0,1.0));
		var randomPoint : Vector3 = transform.parent.transform.position + randomHeading.normalized * Random.Range(minDist,maxDist);
		randomPoint.y = yHeight;
		Instantiate(obj, randomPoint, Quaternion.identity);
	}
}