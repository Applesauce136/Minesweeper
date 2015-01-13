//var correct = 3
var correct = [3,4,5];
var found = false;

var submitCallback = function()
{
    var input = document.getElementById("in");
    var out = document.getElementById("out");

    var guess = input.value;
    var output = "You guessed: " + guess + "<br>";
    for (var i = 0; i < correct.length; i++){
	if (guess == correct[i]){
	    found = true;
	    output += "You are correct! :D";
	}
    }
    if (found) {
	out.innerHTML = output;
    }
    else {
	output += "You are incorrect! D:";	
	out.innerHTML = output;
    }
    found = false;

    //output += (guess == correct) ? 
	//"You are correct! :D" :
	//"You are incorrect! D:";
    //out.innerHTML = output;
}

var submit = document.getElementById("submit");
submit.addEventListener("click", submitCallback);
submit.addEventListener("click", getLocation);


var l = document.getElementById("location");

function getLocation() {
    if (navigator.geolcation) {
	navigator.getlocation.getCurrentPosition(function(position) {
	    l.innerHTML ="Latitude: " + position.coords.latitude+"<br>Longitude: " + position.coords.longitude;
	})
    }
    else {
	l.innerHTML = "Geolocation is not supported by this browser.";
    }
}

