var landing = document.getElementById("landing");
var changeBackgroundButton = document.getElementById("changeBackground");

var backgrounds = ["yosemite-winter-landing-blur.jpg", "matthew-smith-5935-blur.jpg", "yosemite-dusk-landing-blur.jpg"];
var currentBackground = 0;

changeBackgroundButton.onclick = function() {
	currentBackground++;
	if (currentBackground >= backgrounds.length) {
		currentBackground = 0;
	}

	console.log(currentBackground);
	landing.style.backgroundImage = "url(images/" + backgrounds[currentBackground] + ")";
};
