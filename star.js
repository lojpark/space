function sInit( star ){
	var i;
	star[0] = new Object();
	star[0].n = 0;
	star[0].spd = 1;
	star[0].time = 0;
	for( i = 1; i <= 30; i++ ){
		sNew( star, 0 );
	}
};

function sNew( star, type ){
	star[0].n++;
	var n = star[0].n;
	star[n] = new Object();
	star[n].x = Math.random()*720;
	if( type == 0 ) star[n].y = Math.random()*540;
	else star[n].y = -10;
	star[n].spd = 3 + Math.random()*5;
	star[n].scale = Math.random()*1;
};
function sDel( star, i ){
	var j;
	for( j = i; j < star[0].n; j++ ){
		star[j] = star[j+1];
	}
	star[0].n--;	
};

function sMove( star, player, enemy ){
	var i;
	for( i = 1; i <= star[0].n; i++ ){
		var s = star[i];
		s.y += s.spd * star[0].spd;
		if( player.bossClear ){
			star[0].time++;
			if( star[0].time >= 3800 ){
				if( player.stage < 7 || player.finalbossClear ){
					star[0].spd -= 0.005;
					if( player.finalbossClear ) star[0].spd += 0.003;
				}
				else player.stage = 8;
			}
			else if( star[0].time >= 1500 ){
				star[0].spd += 0.005;
			}
			if( star[0].spd < 1 ){
				star[0].spd = 1;
				star[0].time = 0;
				player.bossClear = false;
				if( player.stage < 8 ) player.stage++;
				enemy[0].time = 0;
			}
		}
		if( s.x < -20 || s.x > 740 || s.y < -20 || s.y > 600 ){
			sDel( star, i );
			i--;
			sNew( star, 1 );
		}
	}
};

function sPrint( star, img, context ){
	var i;
	for( i = 1; i <= star[0].n; i++ ){
		var s = star[i];
		context.fillStyle = "rgb(255,255,255)";
		context.beginPath();
		context.arc( s.x, s.y, s.scale, 0, Math.PI*2, false);
		context.closePath();
		context.fill();
	}
};