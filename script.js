var name = prompt("What's your name?");

if (confirm("What's your gender? Click OK if MALE & CANCEL if FEMALE.") == true){
	alert("Your gender is MALE.")
	document.getElementById("gender").innerHTML = "M";
}else{
	alert("Your gender is FEMALE")
	document.getElementById("gender").innerHTML = "F";
}

var username = prompt("What's your username?");
var desc = prompt("Give a brief description of yourself.");
var year = prompt("What year were you born?");
var age = 2023 - parseInt(year);

if (confirm("Would you like a custom profile picture?") == true){
	var pic = prompt("What's the file name (e.g. wow.JPG)");
}else{
	alert("No image has been uploaded.");
}

document.getElementById("fname").innerHTML = name;
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = pic;