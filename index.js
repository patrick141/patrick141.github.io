function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function getDate(){
	n =  new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	return "Date: " + m + "/" + d + "/" + y;
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = 0;
	if(currentVal > 0) 
	{
		newVal = currentVal - 1;
	}
	document.getElementById("countDownButton").innerHTML = newVal;
	if(currentVal == 0)
	{
		document.getElementById("countDownButton").innerHTML = "It's Vacation Time!";
	}
}




