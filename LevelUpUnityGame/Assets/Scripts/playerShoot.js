#pragma strict

var Bullet: GameObject;
var Bulletlocation: Transform;
var Bulletspeed: int;

function Start() {

}

function Update() {
  if (Input.GetButtonDown("Fire1")) {
    var bullet: GameObject;

    bullet = Instantiate(Bullet, Bulletlocation.position, Bulletlocation.rotation);
    bullet.GetComponent(Rigidbody)
      .AddForce(bullet.transform.forward * Bulletspeed, ForceMode.Impulse);
  }
}
