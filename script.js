let speed = 100;

function colors() {
	let r=255,
	    g=0,
	    b=0;

	function periodicall() {
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
			document.body.style.background = `rgb(${r},${g},${b})`;
		};
		setTimeout(periodicall, speed);
	};
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