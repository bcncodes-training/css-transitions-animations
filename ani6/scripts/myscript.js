let loader = document.getElementById("loader");
let button = document.getElementById("button");
button.addEventListener("click", function() {
	if ( loader.className === "loading" ) {
		loader.className="";
	} else {
		loader.className="loading";
	}
})

//loader.className ="";