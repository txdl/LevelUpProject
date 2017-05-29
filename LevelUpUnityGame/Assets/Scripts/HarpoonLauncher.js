#pragma strict

var player: GameObject;
var howfar: float;
var firerdist: float;
var harpoonamt: int = 1;
var line: LineRenderer;
var enemyMovement: Enemymovement;
var joint: ConfigurableJoint;
var jointed : boolean;


function Start() {
  player = GameObject.Find("Playerboat");
  enemyMovement = GetComponent.<Enemymovement>();
}

function Update() {
  howfar = Vector3.Distance(player.transform.position, gameObject.transform.position);
  
  if (howfar <= firerdist && harpoonamt > 0){
    Fire();
    enemyMovement.harpoonPlayer();
  }

  line.SetPosition(0,transform.position);
  line.SetPosition(1,player.transform.position);
}


function Fire() {
  harpoonamt--;
  Debug.Log('fire');
  joint = player.AddComponent.<ConfigurableJoint>();
  player.GetComponent.<Playermove>().attached++;
  joint.connectedBody = GetComponent.<Rigidbody>();
  joint.xDrive.positionSpring = 10;
  joint.zDrive.positionSpring = 10;
  joint.xDrive.positionDamper = 0.2;
  joint.zDrive.positionDamper = 0.2;
  line.enabled = true;
  jointed = true;
}

function JointCheck(){
  if (jointed){
    player.GetComponent.<Playermove>().attached--;
    Destroy(joint);
  }
}
