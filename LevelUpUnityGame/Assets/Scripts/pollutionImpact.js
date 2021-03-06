﻿#pragma strict

var otherScript: playerscoreboard;
var score: float;
var durationOfStay: float;
var ps: ParticleSystem;

function Start(){
  otherScript = GameObject.Find("Playerboat").GetComponent.<playerscoreboard>();
}

function OnTriggerEnter(other : Collider) {
  if (other.gameObject.layer == 9) {
    durationOfStay = 0;
    Debug.Log("hit");
  }
}

function OnTriggerStay(other: Collider) {
  if (other.gameObject.name == "Playerboat") {
    // ps.colorOverLifetime.color.a = 0.1;
    durationOfStay++ ;

    var start = ps.main.startColor.colorMax;
    var end = ps.main.startColor.colorMin;
    var transparency = 1 - (durationOfStay * 0.25 / 60);
    var colorStart = new Color(start.r, start.g, start.b, transparency);
    var colorEnd = new Color(end.r, end.g, end.b, transparency);
    ps.colorOverLifetime.color = new ParticleSystem.MinMaxGradient(colorStart, colorEnd);

    //add despawn Pollution pool after 180 frames of durationOfStay
    //reinitiate Pollution pool if under 180 frames of durationOfStay   
  }
}

// function OnTriggerExit(other: Collider) {
//   if ( ***
//     //despawn pollution
//     // otherScript.increasescore(score);
//         Debug.Log("clean");
//     )
// }

function Update () {
  if (durationOfStay> 180){
              otherScript.increasescore(100);
          Destroy(gameObject);
  }
}
