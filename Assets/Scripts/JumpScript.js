#pragma strict

var onGround: boolean;
var playerJump	: float;

function Update () 
{
	if(Input.GetKeyDown(KeyCode.Space) && onGround == true)
	{
		print("jump pressed");
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump);
	}
}

function OnCollisionEnter (theCollision: Collision)
{
	if(theCollision.transform.tag == "floor")
	{
		onGround = true;
	}
	
	if(theCollision.transform.tag == "bounce")
	{
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump * 3);
	}
}

function OnCollisionExit (theCollision: Collision)
{
	if(theCollision.transform.tag == "floor")
	{
		onGround = false;
	}
}
	