function qInit( quake ){
	quake.value = quake.dx = quake.dy = quake.time = 0;
};

function qNew( quake, value, time ){
	quake.value = value;
	quake.time = time;
};

function qMove( quake, context ){
	if( quake.time <= 0 ){
		return;
	}
	var dx, dy;
	if( quake.time < quake.value ){
		dx = Math.random()*quake.time - quake.time/2;
		dy = Math.random()*quake.time - quake.time/2;
	}
	else{
		dx = Math.random()*quake.value - quake.value/2;
		dy = Math.random()*quake.value - quake.value/2;
	}
	context.translate( dx , dy );
	quake.dx += dx;
	quake.dy += dy;
	quake.time--;
	if( quake.time % 5 == 0 ){
		context.translate( -1*quake.dx , -1*quake.dy );
		quake.dx = quake.dy = 0;
	}
	if( quake.time <= 0 ){
		context.translate( -1*quake.dx , -1*quake.dy );
		quake.dx = quake.dy = 0;
	}
};