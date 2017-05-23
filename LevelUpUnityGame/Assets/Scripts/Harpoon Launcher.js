#pragma strict

var player: GameObject;
var howfar: float;
var firerdist: float;
var harpoonamt: int = 1;
var sj: SpringJoint;
var line: LineRenderer;


function Start() {
	player = GameObject.Find("Playerboat");
}

function Update() {
	howfar = Vector3.Distance(player.transform.position, gameObject.transform.position);
	
  if (howfar <= firerdist && harpoonamt > 0){
		Fire();
	}

	line.SetPosition(0,transform.position);
	line.SetPosition(1,player.transform.position);
}


function Fire() {
	harpoonamt--;
	Debug.Log('fire');
	sj.connectedBody = player.GetComponent.<Rigidbody>();
	line.enabled = true;
}
