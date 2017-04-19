#pragma strict

var rb: Rigidbody;
var hMove: float;
var vMove: float;
var moveSpeed: float;

function Start () {
  rb = GetComponent(Rigidbody);
}

function Update () {
  hMove = Input.GetAxis("Horizontal");
  vMove = Input.GetAxis("Vertical");
}

function FixedUpdate () {
  rb.AddForce(Vector3.forward * vMove * moveSpeed);
  rb.AddForce(Vector3.right * hMove * moveSpeed);
  //transform.rotation = Quaternion.LookRotation(rb.velocity);
}
