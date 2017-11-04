var as = document.getElementsByTagName("a"); //get all hyperlinks
var speed = 17;
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
	var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

	if (isSmoothScrollSupported) {
		targetElement.scrollIntoView({
			block: "start",
			inline: "nearest",
			behavior: 'smooth'
		});
	} else {
		scrollInterval = setInterval(smoothScroll, 10);
	}

	function smoothScroll() {
		if (targetElement.getBoundingClientRect().y > 0) { // if above target
			if (window.pageYOffset + speed >= targetDocumentScroll) { // if next scroll is past element
				clearInterval(scrollInterval); //clearInterval
				window.scroll(0, targetDocumentScroll); //set scroll to target scroll
			} else { //if next scroll is not past element
				window.scrollBy(0, speed); //add speed to it
			}
		} else { // if below target
			if (window.pageYOffset - speed <= targetDocumentScroll) { // if next scroll is past element
				clearInterval(scrollInterval); //clearInterval
				window.scrollBy(0, targetDocumentScroll); //set scroll to target scroll
			} else { //if next scroll is not past element
				window.scrollBy(0, -speed); //add speed to it
			}
		}
		//console.log("currScrollPos " + document.documentElement.scrollTop, "currentTargetY " + targetElement.getBoundingClientRect().y);
	}
}
