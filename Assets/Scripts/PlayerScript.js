#pragma strict

var playerSpeed : int;
var theLoseScreen: GameObject; //gameobject variable

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

function OnTriggerEnter (theTrigger: Collider)
{
	if(theTrigger.gameObject.tag == "death") //if we touch a gameobject that is a TRIGGER and has the tag death
	{
		Destroy(this.gameObject); //destroy player
		theLoseScreen.SetActive(true); //turn on this gameobject
	}
}