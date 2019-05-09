let el = document.querySelector(".box");
el.addEventListener("click", clickedBox, false);

function clickedBox(evt) {
	console.log("clicked on box.")
	console.log(el.className)
	if (el.className === "box topleft") {
		el.className = "box topright";
    } else if (el.className === "box topright") {
		el.className = "box bottomright";
    } else if (el.className === "box bottomright") {
		el.className = "box bottomleft";
    } else if (el.className === "box bottomright") {
		el.className = "box bottomleft";
	}else if (el.className === "box bottomleft") {
		el.className = "box topleft";
	}
}
