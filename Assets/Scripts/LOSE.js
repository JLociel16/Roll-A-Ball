#pragma strict
import UnityEngine.UI;

var timer: float;
var timeText: Text;
var loseScreen: GameObject;

function Update () 
{
	if(timer >=0)
	 //IF THIS IS GREATER THAN 0 --- DO THE FOLLOWING
	{	
		timer -= Time.deltaTime;
	}
	
	if(timer <=0) //IF THIS IS LESS THAN OR EQUAL TO 0
	{
			loseScreen.SetActive(true);
	}
	
	timeText.text = timer.ToString("0");
}