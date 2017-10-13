var landing = document.getElementById("landing");
var changeBackgroundButton = document.getElementById("changeBackground");

var backgrounds = ["matthew-smith-5935-blur.jpg", "yosemite-dusk-landing-blur.jpg", "yosemite-winter-landing-blur.jpg"];
var currentBackground = backgrounds.length - 1;
changeBackgroundButton.onclick = function() {
	currentBackground++;
	if (currentBackground >= backgrounds.length) {
		currentBackground = 0;
	}

	console.log(currentBackground);
	landing.style.backgroundImage = "url(images/" + backgrounds[currentBackground] + ")";
};
