#pragma strict

var playerSpeed : int;


function Update () {
	if(Input.GetKey(KeyCode.UpArrow)){
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(1,0,0)*playerSpeed);}

		
	if(Input.GetKey(KeyCode.DownArrow)){
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(-1,0,0)*playerSpeed);}


	if(Input.GetKey(KeyCode.LeftArrow)){
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,1)*playerSpeed);}


	if(Input.GetKey(KeyCode.RightArrow)){
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,-1)*playerSpeed);}

}