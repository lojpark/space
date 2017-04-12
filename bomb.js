function bMove( player ){
	var i;
	for( i = 1; i <= player.bomb[0]; i++ ){
		if( player.bomb[i].type == 0 ){
			if( player.bomb[i].delay < 20 ) player.bomb[i].delay = 20;
			player.bomb[i].delay *= 1.2;
			if( player.bomb[i].delay > 400 ){
				bDel( player, i );
				i--;
				continue;
			}
		}
		if( player.bomb[i].type == 1 ){
			player.bomb[i].y += player.bomb[i].vy;
			player.bomb[i].vy -= 1;
			if( player.bomb[i].delay > 40 ){
				bDel( player, i );
				i--;
				continue;
			}
		}
		if( player.bomb[i].type == 2 ){
			player.bomb[i].y += player.bomb[i].vy;
			if( player.bomb[i].delay < 60 ){
				player.bomb[i].vy += 2.3;
				if( player.bomb[i].vy > -3 ){player.bomb[i].vy = -3;
					if( player.bomb[i].delay % 2 == 0 ){
						pbNew( player, player.bomb[i].x, player.bomb[i].y-128, 0 );
						pbNew( player, player.bomb[i].x, player.bomb[i].y-128, 1 );
						pbNew( player, player.bomb[i].x, player.bomb[i].y-128, 2 );
						pbNew( player, player.bomb[i].x-180, player.bomb[i].y-28, 0 );
						pbNew( player, player.bomb[i].x-180, player.bomb[i].y-28, 1 );
						pbNew( player, player.bomb[i].x-180, player.bomb[i].y-28, 2 );
						pbNew( player, player.bomb[i].x+180, player.bomb[i].y-28, 0 );
						pbNew( player, player.bomb[i].x+180, player.bomb[i].y-28, 1 );
						pbNew( player, player.bomb[i].x+180, player.bomb[i].y-28, 2 );
						pbNew( player, player.bomb[i].x-90, player.bomb[i].y-28, 10 );
						pbNew( player, player.bomb[i].x+90, player.bomb[i].y-28, 10 );
					}
				}
			}
			else{
				player.bomb[i].vy -= 1.5;
				if( player.bomb[i].vy < -40 ){
					bDel( player, i );
					i--;
					continue;
				}
			}
		}
		player.bomb[i].delay++;
	}
};

function bNew( player, x, y ){
	player.bomb[0]++;

	var n = player.bomb[0];

	player.bomb[n] = new Object();

	player.bomb[n].x = x;
	player.bomb[n].y = y;
	player.bomb[n].delay = 0;
	player.bomb[n].type = player.type;
	if( player.type == 1 ) player.bomb[n].vy = 0;
	if( player.type == 2 ) player.bomb[n].vy = -40;
};
function bDel( player, i ){
	var j;
	for( j = i; j < player.bomb[0]; j++ ){
		player.bomb[j] = player.bomb[j+1];
	}
	player.bomb[0]--;
};

function bPrint( player, img, context ){
	var i;
	for( i = 1; i <= player.bomb[0]; i++ ){
		var b = player.bomb[i];
		if( b.type == 0 ) context.drawImage( img.Bomb[b.type], 0, 0, 480, 320, b.x - 240*b.delay/100, b.y - 160*b.delay/100, 480*b.delay/100, 320*b.delay/100 );
		if( b.type == 1 ) context.drawImage( img.Bomb[b.type], 0, 0, 96, 320, b.x - 48, b.y - 160, 96, 320 );
		if( b.type == 2 ) context.drawImage( img.Bomb[b.type], 0, 0, 480, 256, b.x - 240, b.y - 128, 480, 256 );
	}
};