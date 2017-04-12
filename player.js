function pInit( player ){
	player.x = 360;
	player.y = 410;
	player.spd = 10;
	player.type = 0;
	player.bullet = new Array();
	player.bullet[0] = 0;
	player.power = new Array();
	player.power[0] = player.power[1] = player.power[2] = 0;
	player.delay = 0;
	player.bomb = new Array();
	player.bomb[0] = 0;
	player.retry = 0;
	player.life = 2;
	player.bc = 2;
	player.inv = 0;
	player.vy = 0;
	player.bossClear = false;
	player.finalbossClear = false;
	player.stage = 1;
	player.score = 0;
	player.superPower = false;
	player.canSuperPower = false;
};
function pMove( player, key, particle ){
	if( player.inv > 0 ) player.inv--; // decrease player's invinsible time

	player.delay--;
	
	if( player.vy < 0 ){
		player.y += player.vy;
		player.vy++;
		return;
	}
	
	/* move player as key press */
	if( key.up ){
		player.y -= player.spd;
		if( player.y < 0 ) player.y = 0;
	}
	if( key.down ){
		player.y += player.spd;
		if( player.y > 540-24 ) player.y = 540-24;
	}
	if( key.left ){
		player.x -= player.spd;
		if( player.x < 0 ) player.x = 0;
	}
	if( key.right ){
		player.x += player.spd;
		if( player.x > 720 ) player.x = 720;
	}
	
	if( player.superPower && (key.up || key.down || key.left || key.right) ){
		ptNew( particle, player.x, player.y, 12, true );
	}
	if( player.superPower ){
		ptNew( particle, player.x, player.y, 10, true );
		player.score -= 100;
		if( player.score < 200000 ) player.superPower = false;
	}
	
	/* fire */
	if( key.z && player.delay <= 0 ){
		if( player.type == 0 ){
			pbNew( player, player.x, player.y, 0 ); pbNew( player, player.x, player.y, 1 );	pbNew( player, player.x, player.y, 2 );
			if( player.power[0] >= 1 ){
				pbNew( player, player.x, player.y, 3 );	pbNew( player, player.x, player.y, 4 );
			}
			if( player.power[0] == 2 ){
				pbNew( player, player.x, player.y, 5 );	pbNew( player, player.x, player.y, 6 );
			}
			if( player.superPower ){
				var i;
				for( i = 0; i <= 8; i++ ) pbNew( player, player.x, player.y, i );
				for( i = 0; i <= 8; i++ ) pbNew( player, player.x, player.y, i );
				for( i = 0; i <= 8; i++ ) pbNew( player, player.x, player.y, i );
			}
		}
		if( player.type == 1 ){
			pbNew( player, player.x, player.y, 10 ); pbNew( player, player.x-10, player.y, 10 ); pbNew( player, player.x+10, player.y, 10 );
			if( player.power[1] >= 1 ){
				pbNew( player, player.x-20, player.y, 10 ); pbNew( player, player.x+20, player.y, 10 );
			}
			if( player.power[1] == 2 ){
				pbNew( player, player.x-30, player.y, 10 ); pbNew( player, player.x+30, player.y, 10 );
			}
			if( player.superPower ){
				var i;
				for( i = 0; i <= 50; i += 5 ){
					pbNew( player, player.x, player.y, 10 ); pbNew( player, player.x-i, player.y, 10 ); pbNew( player, player.x+i, player.y, 10 );
				}
			}
		}
		if( player.type == 2 ){
			if( player.power[2] == 0 ){
				pbNew( player, player.x, player.y, 20 );
			}
			if( player.power[2] == 1 ){
				pbNew( player, player.x-10, player.y, 20 );
				pbNew( player, player.x+10, player.y, 20 );
			}
			if( player.power[2] == 2 ){
				pbNew( player, player.x-10, player.y, 20 );
				pbNew( player, player.x, player.y, 20 );
				pbNew( player, player.x+10, player.y, 20 );
			}
			if( player.superPower ){
				var i;
				for( i = 0; i <= 30; i += 6 ){
					pbNew( player, player.x-i, player.y, 20 );
					pbNew( player, player.x, player.y, 20 );
					pbNew( player, player.x+i, player.y, 20 );
				}
			}
		}
		player.delay = 2;
	}
};

function pbNew( player, x, y, type ){
	player.bullet[0]++;

	var n = player.bullet[0];

	player.bullet[n] = new Object();

	player.bullet[n].x = x;
	player.bullet[n].y = y;
	
	if( type == 20 ){
		player.bullet[n].angle = player.bullet[n].angle = 270 * Math.PI/180;
		player.bullet[n].time = 0;
	}

	player.bullet[n].type = type;
};
function pbDel( player, i ){
	var j;
	for( j = i; j < player.bullet[0]; j++ ){
		player.bullet[j] = player.bullet[j+1];
	}
	player.bullet[0]--;
};

function pbMove( player, enemy ){
	var i, j;
	for( i = 1; i <= player.bullet[0]; i++ ){
		var b = player.bullet[i];
		if( b.type == 0 ){
			player.bullet[i].x -= 5;
			player.bullet[i].y -= 22;
		}
		if( b.type == 1 ){
			player.bullet[i].y -= 25;
		}
		if( b.type == 2 ){
			player.bullet[i].x += 5;
			player.bullet[i].y -= 22;
		}
		if( b.type == 3 ){
			player.bullet[i].x -= 10;
			player.bullet[i].y -= 19;
		}
		if( b.type == 4 ){
			player.bullet[i].x += 10;
			player.bullet[i].y -= 19;
		}
		if( b.type == 5 ){
			player.bullet[i].x -= 15;
			player.bullet[i].y -= 16;
		}
		if( b.type == 6 ){
			player.bullet[i].x += 15;
			player.bullet[i].y -= 16;
		}
		if( b.type == 7 ){
			player.bullet[i].x -= 20;
			player.bullet[i].y -= 13;
		}
		if( b.type == 8 ){
			player.bullet[i].x += 20;
			player.bullet[i].y -= 13;
		}
		if( b.type >= 10 && b.type < 20 ){
			player.bullet[i].y -= 25;
		}
		if( b.type >= 20 && b.type < 30 ){
			var min = 2147483647, index = 0;
			for( j = 1; j <= enemy[0].n; j++ ){
				var e = enemy[j];
				if( e.y < 0 ) continue;
				if( e.type == 12 || e.type == 13 || e.type == 18 ) continue;
				if( min > (b.x-e.x)*(b.x-e.x)+(b.y-e.y)*(b.y-e.y) ){
					min = (b.x-e.x)*(b.x-e.x)+(b.y-e.y)*(b.y-e.y);
					index = j;
				}
			}
			if( index == 0 ) b.angle = 270 * Math.PI/180;
			else if( b.time < 10 ){
				b.angle = Math.atan2( enemy[index].y-b.y, enemy[index].x-b.x );
				b.time++;
			}
			b.x = b.x + 25 * Math.cos( b.angle );
			b.y = b.y + 25 * Math.sin( b.angle );
		}
		if( b.x < -20 || b.x > 740 || b.y < -20 || b.y > 600 ){
			pbDel( player, i );
			i--;
		}
	}
};

function pPrint( player, key, img, context ){
	if( player.inv > 0 && player.delay % 2 == 0 ) return;
	if( key.left || key.right || key.up || key.down ){
		context.drawImage(img.PlayerF, 0, 0, 5, 12, player.x - 9, player.y + 24, 5, 12 * (1+Math.random()*0.5) );
		context.drawImage(img.PlayerF, 0, 0, 5, 12, player.x + 4, player.y + 24, 5, 12 * (1+Math.random()*0.5) );
	}
	else{
		context.drawImage(img.PlayerF, 0, 0, 5, 12, player.x - 9, player.y + 15, 5, 12 * (1+Math.random()*0.5) );
		context.drawImage(img.PlayerF, 0, 0, 5, 12, player.x + 4, player.y + 15, 5, 12 * (1+Math.random()*0.5) );
	}
	if( player.superPower ) context.drawImage(img.PlayerS, 0, 0, 36, 48, player.x - 18, player.y - 24, 36, 48);
	else context.drawImage(img.Player, 0, 0, 36, 48, player.x - 18, player.y - 24, 36, 48);
};

function pbPrint( player, img, context ){
	var i;
	for( i = 1; i <= player.bullet[0]; i++ ){
		var b = player.bullet[i];
		if( b.type < 10 ){
			context.drawImage(img.Bullet[0], 0, 0, 4, 16, b.x - 2, b.y - 16, 4, 16);
		}
		else if( b.type < 20 ){
			context.drawImage(img.Bullet[1], 0, 0, 4, 16, b.x - 2, b.y - 16, 4, 16);
		}
		else if( b.type < 30 ){
			context.drawImage(img.Bullet[2], 0, 0, 16, 16, b.x - 8, b.y - 8, 16, 16);
		}
	}
};

function pnPrint( player, img, context ){
	var i;
	/* print player's life */
	for( i = 1; i <= player.life; i++ ){
		context.drawImage(img.Life, 0, 0, 36, 36, (i-1)*40, 500, 36, 36);
	}
	/* print the number of player's bomb */
	for( i = 1; i <= player.bc; i++ ){
		context.drawImage(img.Bomb[3], 0, 0, 36, 36, 720 - i*40, 500, 36, 36);
	}
	context.font = "bold 18px helvetica";
	context.fillStyle = "rgb(255,255,255)";
	/* print stage */
	context.fillText( "1" + " - " + player.stage, 342, 530 );
	/* print score */
	context.fillText( player.score, 10, 20 );
};