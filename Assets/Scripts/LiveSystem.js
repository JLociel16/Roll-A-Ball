#pragma strict

var life = 3;

function Start () {
	Debug.Log(life);
}

function OnTriggerEnter(other : Collider) {
	if(other.tag =="good"){
		life = life + 1;
		Debug.Log(life);
	}
	if(other.tag == "bad"){
		life = life - 1;
		Debug.Log(life);
	}		
}