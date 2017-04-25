#pragma strict

var rb: Rigidbody;
var hMove: float;
var vMove: float;
var moveSpeed: float;
var driftspeed: int;
var jumpSpeed: int;

function Start () {
  rb = GetComponent(Rigidbody);
}

function Update () {
  hMove = Input.GetAxis("Horizontal");
  vMove = Input.GetAxis("Vertical");
  if (Input.GetButtonDown("Jump")){
  rb.AddForce(Vector3.up * jumpSpeed,ForceMode.Acceleration);
  };
}

function FixedUpdate () {
  rb.AddForce(Vector3.forward * vMove * moveSpeed);
  rb.AddForce(Vector3.right * hMove * moveSpeed);
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
