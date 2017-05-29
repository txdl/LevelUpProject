#pragma strict

var Bullet: GameObject;
var Bulletlocation: Transform;
var Bulletspeed: int;
var playerRB: Rigidbody;


  function Fire(){
	var bullet: GameObject;
    bullet = Instantiate(Bullet, Bulletlocation.position, Bulletlocation.rotation);
    bullet.GetComponent(Rigidbody)
      .AddForce((bullet.transform.forward * Bulletspeed)+playerRB.velocity, ForceMode.Impulse);
  }
