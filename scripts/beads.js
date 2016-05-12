var white = 0;
var black = 0;
var yellow = 0;
var green = 0;
var blue = 0;
var orange = 0;
var red = 0;
var purple = 0;
var whitechievo = false;
var blackchievo = false;
var yellowchievo = false;
var greenchievo = false;
var bluechievo = false;
var orangechievo = false;
var redchievo = false;
var purplechievo = false;

function whiteclicked() {
	if(!whitechievo) {
		$('#whitechievo').show();
		alert("You got an achievement: White Bead!\nYou're just getting started.");
		whitechievo = true;
	}
	white++;
	$('#whitecount').text('You have ' + white + ' white beads.');
	if(white >= 10) {
		$('#blackbutton').attr("disabled", false);
	}
}

function blackclicked() {
	if(white >= 10){
		if(!blackchievo) {
			$('#blackchievo').show();
			alert("You got an achievement: Black Bead!\nThat wasn't so hard, was it?");
			blackchievo = true;
		}
		white = white - 10;
		black++;
		$('#whitecount').text('You have ' + white + ' white beads.');
		$('#blackcount').text('You have ' + black + ' black beads.');
		if(white < 10) {
		$('#blackbutton').attr("disabled", true);
	}
		if(black >= 10) {
			$('#yellowbutton').attr("disabled", false);
		}
	}
}

function yellowclicked() {
	if(black >= 10){
		if(!yellowchievo) {
			$('#yellowchievo').show();
			alert("You got an achievement: Yellow Bead!\nStill going strong! You've got the hang of this.");
			yellowchievo = true;
		}
		black = black - 10;
		yellow++;
		$('#blackcount').text('You have ' + black + ' black beads.');
		$('#yellowcount').text('You have ' + yellow + ' yellow beads.');
		if(black < 10) {
		$('#yellowbutton').attr("disabled", true);
	}
		if(yellow >= 10) {
			$('#greenbutton').attr("disabled", false);
		}
	}
}

function greenclicked() {
	if(yellow >= 10){
		if(!greenchievo) {
			$('#greenchievo').show();
			alert("You got an achievement: Green Bead!\nGreen is pretty. There's no shame in stopping now...if you're a quitter.");
			greenchievo = true;
		}
		yellow = yellow - 10;
		green++;
		$('#yellowcount').text('You have ' + yellow + ' yellow beads.');
		$('#greencount').text('You have ' + green + ' green beads.');
		if(yellow < 10) {
		$('#greenbutton').attr("disabled", true);
	}
		if(green >= 10) {
			$('#bluebutton').attr("disabled", false);
		}
	}
}

function blueclicked() {
	if(green >= 10){
		if(!bluechievo) {
			$('#bluechievo').show();
			alert("You got an achievement: Blue Bead!\nKeep going...I'm sure you'll make it.");
			bluechievo = true;
		}
		green = green - 10;
		blue++;
		$('#greencount').text('You have ' + green + ' green beads.');
		$('#bluecount').text('You have ' + blue + ' blue beads.');
		if(green < 10) {
		$('#bluebutton').attr("disabled", true);
	}
		if(blue >= 10) {
			$('#orangebutton').attr("disabled", false);
		}
	}
}

function orangeclicked() {
	if(blue >= 10){
		if(!orangechievo) {
			$('#orangechievo').show();
			alert("You got an achievement: Orange Bead!\nWait, you're still here?");
			orangechievo = true;
		}
		blue = blue - 10;
		orange++;
		$('#bluecount').text('You have ' + blue + ' blue beads.');
		$('#orangecount').text('You have ' + orange + ' orange beads.');
		if(blue < 10) {
		$('#orangebutton').attr("disabled", true);
	}
		if(orange >= 10) {
			$('#redbutton').attr("disabled", false);
		}
	}
}

function redclicked() {
	if(orange >= 10){
		if(!redchievo) {
			$('#redchievo').show();
			alert("You got an achievement: Red Bead!\nCongrats! You're 1/10th of the way there!");
			redchievo = true;
		}
		orange = orange - 10;
		red++;
		$('#orangecount').text('You have ' + orange + ' orange beads.');
		$('#redcount').text('You have ' + red + ' red beads.');
		if(orange < 10) {
		$('#redbutton').attr("disabled", true);
	}
		if(red >= 10) {
			$('#purplebutton').attr("disabled", false);
		}
	}
}

function purpleclicked() {
	if(red >= 10) {
		if(!purplechievo) {
			$('#purplechievo').show();
			alert("You got an achievement: Purple Bead!\nKing of Klicks and Baron of Beads! How did you get this far?");
			purplechievo = true;
		}
		red = red - 10;
		purple++;
		$('#purplecount').text('You have ' + purple + ' purple beads.');
		$('#redcount').text('You have ' + red + ' red beads.');
		if(red < 10) {
			$('#purplebutton').attr("disabled", true);
		}
	}
}