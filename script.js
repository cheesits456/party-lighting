let speed = 10,
    fade = true;

function colors() {
	let r = 255,
	    g = 0,
	    b = 0,
	    i = 0;
	    colors = [
	    	"255, 0, 0",
	    	"255, 255, 0",
	    	"0, 255, 0",
	    	"0, 255, 255",
	    	"0, 0, 255",
	    	"255, 0, 255"
	    ];

	function periodicall() {
		if (fade) {
			if (speed !== 2) {
				if (r > 0 && b == 0) {
					r--;
					g++;
				};
				if (g > 0 && r == 0) {
					g--;
					b++;
				};
				if (b > 0 && g == 0) {
					r++;
					b--;
				};
				document.body.style.background = `rgb(${r}, ${g}, ${b})`;
			};
		} else {
			if (speed !== 2) {
				if (i % 10 === 0) document.body.style.background = `rgb(${colors[i/10]})`
				i++;
				if (i === 60) i = 0;
			}
		}
		setTimeout(periodicall, speed);
	}
	periodicall();
}

function showControls() {
	document.getElementById("controls").style.display = "inline-flex";
	document.body.style.cursor = "default";
	document.getElementById("body").style.display = "none";
}

function hideControls() {
	document.getElementById("controls").style.display = "none";
	document.body.style.cursor = "none";
	document.getElementById("body").style.display = "block";
}

function setSpeed(setting) {
	["speedNone", "speedLow", "speedMedium", "speedHigh"].forEach((id) => {
		document.getElementById(id).className = "button";
	})
	switch (setting) {
		case "none":
			document.getElementById("speedNone").className = "button-pressed";
			speed = 2;
			break;
		case "low":
			document.getElementById("speedLow").className = "button-pressed";
			speed = 100;
			break;
		case "medium":
			document.getElementById("speedMedium").className = "button-pressed";
			speed = 10;
			break;
		case "high":
			document.getElementById("speedHigh").className = "button-pressed";
			speed = 1;
			break;
	}
}

function setFade(setting) {
	if (setting) {
		document.getElementById("fadeOn").className = "button-pressed";
		document.getElementById("fadeOff").className = "button";
	} else {
		document.getElementById("fadeOn").className = "button";
		document.getElementById("fadeOff").className = "button-pressed";
	}
	fade = setting;
}

function setColor(setting) {
	speed = 2;
	document.getElementById("speedNone").className = "button-pressed";
	["speedLow", "speedMedium", "speedHigh"].forEach((a) => {
		document.getElementById(a).className = "button";
	})
	document.body.style.background = setting;
}