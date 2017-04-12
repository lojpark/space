function ptInit( particle ){
	particle[0] = 0;
};

function ptNew( particle, x, y, dist, yellow ){
	particle[0]++;
	var n = particle[0];
	particle[n] = new Object();
	particle[n].x = x;
	particle[n].y = y;
	particle[n].ox = x;
	particle[n].oy = y;
	particle[n].spd = 5 + Math.random()*5;
	particle[n].scale = Math.random()*2;
	particle[n].angle = Math.random()*360;
	particle[n].dist = dist;
	particle[n].color = Math.floor(Math.random()*2);
	if( yellow ) particle[n].color = 2;
	particle[n].time = 0;
};
function ptDel( particle, i ){
	var j;
	for( j = i; j < particle[0]; j++ ){
		particle[j] = particle[j+1];
	}
	particle[0]--;	
};

function ptMove( particle ){
	var i;
	for( i = 1; i <= particle[0]; i++ ){
		var pt = particle[i];
		pt.x = pt.ox + pt.spd * pt.time * Math.cos( pt.angle );
		pt.y = pt.oy + pt.spd * pt.time * Math.sin( pt.angle );
		pt.time++;
		if( pt.x < -20 || pt.x > 740 || pt.y < -20 || pt.y > 600 || pt.time > pt.dist ){
			ptDel( particle, i );
			i--;
		}
	}
};

function ptPrint( particle, img, context ){
	var i;
	for( i = 1; i <= particle[0]; i++ ){
		var pt = particle[i];
		if( pt.color == 0 ) context.fillStyle = "rgb(255,0,0)";
		if( pt.color == 1 ) context.fillStyle = "rgb(255,96,0)";
		if( pt.color == 2 ) context.fillStyle = "rgb(255,255,0)";
		context.beginPath();
		context.arc( pt.x, pt.y, pt.scale, 0, Math.PI*2, false);
		context.closePath();
		context.fill();
	}
};