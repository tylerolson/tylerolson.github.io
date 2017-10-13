var as = document.getElementsByTagName("a"); //get all hyperlinks
var speed = 13;
var scrollInterval;

for (var i = 0; i < as.length; i++) { //for every hyperlinks
	if (as[i].getAttribute("href") != null) {
		if (as[i].getAttribute("href").startsWith("#")) { //a that has anchor tag
			as[i].addEventListener("click", clicked); //add a click listener
		}
	}
}


function clicked() {
	event.preventDefault(); //stop default jump event

	var targetElement = document.getElementById(this.getAttribute("href").replace('#', '')); //set target element to the element in the href
	var targetDocumentScroll = targetElement.getBoundingClientRect().y + document.documentElement.scrollTop;

	function smoothScroll() {
		if (targetElement.getBoundingClientRect().y > 0) { // if above target
			if (document.documentElement.scrollTop + speed >= targetDocumentScroll) { // if next scroll is past element
				clearInterval(scrollInterval); //clearInterval
				document.documentElement.scrollTop = targetDocumentScroll; //set scroll to target scroll
			} else { //if next scroll is not past element
				document.documentElement.scrollTop += speed; //add speed to it
			}
		} else { // if below target
			if (document.documentElement.scrollTop - speed <= targetDocumentScroll) { // if next scroll is past element
				clearInterval(scrollInterval); //clearInterval
				document.documentElement.scrollTop = targetDocumentScroll; //set scroll to target scroll
			} else { //if next scroll is not past element
				document.documentElement.scrollTop -= speed; //add speed to it
			}
		}

		console.log("currScrollPos " + document.documentElement.scrollTop, "currentTargetY " + targetElement.getBoundingClientRect().y);
	}

	scrollInterval = setInterval(smoothScroll, 10);
}
