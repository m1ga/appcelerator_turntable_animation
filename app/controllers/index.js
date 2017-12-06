var distX = 0;
var sX = 0;
var frame = 0;

function onStart(e) {
	// set start value
	sX = e.x;
}

function onMove(e) {
	// calculate distance between start and current x
	distX = (sX - e.x);

	// 5px buffer until we change a frame
	if (distX < -5) {
		frame--;
		sX = Math.floor(e.x);
	} else if (distX > 5) {
		frame++;
		sX = Math.floor(e.x);
	}

	// check frame
	if (frame >= 64) {
		frame = 0;
	} else if (frame < 0) {
		frame = 63;
	}

	// frame to px
	var x = Math.floor((frame * 250) % 2000);
	var y = Math.floor((frame * 250) / 2000) * 250;

	// change image
	$.img.left = -x;
	$.img.top = -y;
}

$.index.addEventListener("touchstart", onStart);
$.index.addEventListener("touchmove", onMove);

$.index.open();
