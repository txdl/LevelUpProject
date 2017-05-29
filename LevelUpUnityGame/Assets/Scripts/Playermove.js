#pragma strict
import UnityEngine.SceneManagement;

var rb: Rigidbody;
var hMove: float;
var vMove: float;
var moveSpeed: float;
var driftspeed: int;
var jumpSpeed: int;
var lastInput: Vector3;
var richMove: boolean;
var attached : int;
var movementAllowed : boolean;
var shootScript: playerShoot;
var maxAttached : int;
var scoreScript: playerscoreboard;

function Start() {
  rb = GetComponent(Rigidbody);
}

function Update() {
  if (movementAllowed){
    hMove = Input.GetAxis("Horizontal");
    vMove = Input.GetAxis("Vertical");
    /*
    if (Input.GetButtonDown("Jump")) {
      rb.AddForce(Vector3.up * jumpSpeed, ForceMode.Acceleration);
    };
    */
    if (Input.GetButtonDown("Fire1") || Input.GetButtonDown("Jump")) {
      shootScript.Fire();
    }
  }
  if (attached > maxAttached){
    movementAllowed = false;
    scoreScript.GameOver();
    if (Input.GetKeyDown(KeyCode.R)){
       SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
  }
}

function FixedUpdate() {
  if (richMove){
    rb.AddForce(transform.forward * vMove * moveSpeed);
    rb.AddTorque(transform.up * hMove * moveSpeed/2);

  } else {
    rb.AddForce(Vector3.forward * vMove * moveSpeed);
    rb.AddForce(Vector3.right * hMove * moveSpeed);

    //rotate to face direction of input
  if (Mathf.Abs(0-hMove) > 0.1 || Mathf.Abs(0-vMove) > 0.1){
    lastInput = Vector3.Normalize(new Vector3(hMove,0,vMove));
  }
  transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(lastInput), Time.deltaTime * driftspeed);
  }

  
  
  
  //transform.rotation = Quaternion.LookRotation(rb.velocity);
  //transform.forward = rb.velocity.normalized;
  /*if (rb.velocity != Vector3.zero) {
    transform.rotation = Quaternion.Slerp(
        transform.rotation,
        Quaternion.LookRotation(rb.velocity),
        Time.deltaTime * driftspeed
    );
}*/
}
