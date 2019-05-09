let red = document.querySelector('div#loader .red');
let blue = document.querySelector('div#loader .blue');
let green = document.querySelector('div#loader .green');



function randomColor() {
	return '#'+Math.random().toString(16).substr(-6);
}
	
// Toggle button code. Don't edit.
let loader = document.getElementById("loader");
let button = document.getElementById("button");
button.addEventListener("click", function() {
	if (loader.className === "loading") {
		loader.className = "";
	} else {
		loader.className = "loading";
		
	}
})

//loader.className ="";
function changeBackgroundColorR() {
    red.style.backgroundColor = randomColor();
}
function changeBackgroundColorB() {
    blue.style.backgroundColor = randomColor();
}
function changeBackgroundColorG() {
    green.style.backgroundColor = randomColor();
}
setInterval(changeBackgroundColorR, 5000);
setInterval(changeBackgroundColorB, 10000);
setInterval(changeBackgroundColorG, 15000);