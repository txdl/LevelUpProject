#pragma strict
 var bullet: GameObject;
 var bulletlocation: Transform;
 var bulletspeed: int;

function Start () {

}

function Update () {
  if (Input.GetButtonDown("Fire1")) {
    //Debug.Log("wrong");
    var thisbullet: GameObject = Instantiate(bullet, bulletlocation.position, bulletlocation.rotation);
    thisbullet.GetComponent(Rigidbody).AddForce(thisbullet.transform.forward * bulletspeed,ForceMode.Impulse);
  }
}
