function eInit( enemy ){
	enemy[0] = new Object();
	enemy[0].n = 0;
	enemy[0].bullet = new Array();
	enemy[0].bullet[0] = 0;
	enemy[0].time = 0;
};

function eNew( enemy, x, y, type, itype, angle ){
	var w = new Array(), h = new Array(), hp = new Array();
	w[0] = 58;
	h[0] = 52;
	hp[0] = 8;
	w[1] = 36;
	h[1] = 36;
	hp[1] = 2;
	w[2] = 64;
	h[2] = 64;
	hp[2] = 15;
	w[3] = 96;
	h[3] = 64;
	hp[3] = 20;
	w[4] = 216;
	h[4] = 144;
	hp[4] = 85;
	w[5] = 58;
	h[5] = 52;
	hp[5] = 2;
	w[6] = 576;
	h[6] = 274;
	hp[6] = 2000;
	w[7] = 96;
	h[7] = 64;
	hp[7] = 25;
	w[8] = 188;
	h[8] = 104;
	hp[8] = 100;
	w[9] = 580;
	h[9] = 286;
	hp[9] = 2400;
	w[10] = 96;
	h[10] = 86;
	hp[10] = 500;
	w[11] = 374;
	h[11] = 276;
	hp[11] = 2000;
	w[12] = 420;
	h[12] = 360;
	hp[12] = 10;
	w[13] = 420;
	h[13] = 360;
	hp[13] = 10;
	w[14] = 420;
	h[14] = 360;
	hp[14] = 2000;
	w[15] = 368;
	h[15] = 330;
	hp[15] = 2000;
	w[16] = 44;
	h[16] = 44;
	hp[16] = 2000;
	w[17] = 198;
	h[17] = 198;
	hp[17] = 2000;
	w[18] = 198;
	h[18] = 198;
	hp[18] = 2147483647;
	w[19] = 58;
	h[19] = 38;
	hp[19] = 20;
	w[20] = 1276;
	h[20] = 268;
	hp[20] = 3000;
	w[21] = 96;
	h[21] = 64;
	hp[21] = 200000;
	w[22] = 150;
	h[22] = 150;
	hp[22] = 1000;
	w[23] = 174;
	h[23] = 174;
	hp[23] = 20000000;
	
	enemy[0].n++;

	var n = enemy[0].n;

	enemy[n] = new Object();

	enemy[n].x = x;
	enemy[n].y = y;
	enemy[n].type = type;
	enemy[n].itype = itype;
	enemy[n].w = w[type];
	enemy[n].h = h[type];
	enemy[n].maxhp = enemy[n].hp = hp[type];
	enemy[n].time = 0;
	
	/* enemy's feature */
	if( type == 0 || type == 5 ) enemy[n].dx = 720 - enemy[n].x;
	if( type == 2 ) enemy[n].vy = 18;
	if( type == 3 ) enemy[n].vy = 15;
	if( type == 4 ) enemy[n].vy = 0;
	if( type == 7 ){
		if( enemy[n].x < 0 ) enemy[n].vx = 5;
		if( enemy[n].x > 0 ) enemy[n].vx = -5;
	}
	if( type == 8 ) enemy[n].vy = 12;
	if( type == 10 ){
		enemy[n].vy = 15;
		enemy[n].theta = 0;
	}
	if( type == 12 || type == 13 ) enemy[n].theta = 0;
	if( type == 16 ){
		enemy[n].angle = angle;
		enemy[n].ox = enemy[n].x;
		enemy[n].oy = enemy[n].y;
		enemy[n].rad = 500;
	}
	if( type == 19 ){
		enemy[n].vy = 18;
	}
	/* boss' feature */
	if( type == 6 ) enemy[n].vy = 20;
	if( type == 9 ) enemy[n].vy = 10;
	if( type == 11 ){
		enemy[n].vy = 10;
		enemy[n].theta = 0;
	}
	if( type == 14 ){
		enemy[n].vy = 10;
		enemy[n].theta = 0;
	}
	if( type == 15 ){
		enemy[n].vy = 14;
		enemy[n].theta = 0;
	}
	if( type == 17 || type == 18 ){
		enemy[n].angle = angle;
		enemy[n].va = 2;
		enemy[n].ox = enemy[n].x;
		enemy[n].oy = enemy[n].y;
		enemy[n].rad = 500;
		enemy[n].num = 8;
	}
	if( type == 20 ){
		enemy[n].vy = 10;
		enemy[n].theta = 0;
		enemy[n].rad = 20;
		enemy[n].spd = 1;
	}
	if( type == 21 ){
		enemy[n].vy = 0;
		enemy[n].theta = 0;
		enemy[n].rad = 0;
		enemy[n].angle = 0;
		enemy[n].cnt = 1;
	}
	if( type == 22 ){
		enemy[n].theta = 0;
		enemy[n].rad = 100;
		enemy[n].angle = 0;
		enemy[n].scale = 0.5;
		enemy[n].spd = 1;
	}
};
function eDel( enemy, i ){
	var j;
	for( j = i; j < enemy[0].n; j++ ){
		enemy[j] = enemy[j+1];
	}
	enemy[0].n--;
};

function eMove( enemy, player ){
	var i, j;
	for( i = 1; i <= enemy[0].n; i++ ){
		var e = enemy[i];
		if( e.type == 0 || e.type == 5 ){
			e.x = e.x + (e.dx - e.x)/800 * e.time;
			e.y += 5;
			if( e.time % 30 == 0 && e.y < player.y ){
				ebNew( enemy, player, e.x, e.y, 0, Math.atan2( player.y-e.y, player.x-e.x ) );
			}
		}
		if( e.type == 1 ){
			e.y += 5;
			if( e.time % 15 == 0 ){
				ebNew( enemy, player, e.x-12, e.y, 1 );
				ebNew( enemy, player, e.x+12, e.y, 1 );
			}
		}
		if( e.type == 2 ){
			e.y += e.vy;
			e.vy -= 0.5;
			if( e.vy == 0 ){
				for( j = 0; j < 360; j+=30 ){
					ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
				}
			}
		}
		if( e.type == 3 ){
			e.y += e.vy;
			e.vy -= 0.5;
			if( e.vy < 4 ) e.vy = 4;
			if( e.time >= 30 && e.time <= 45 && e.time%3 == 0 ){
				ebNew( enemy, player, e.x, e.y, 2, Math.atan2( player.y-e.y, player.x-e.x ) );
			}
		}
		if( e.type == 4 ){
			e.y += e.vy;
			e.vy += 0.03;
			if( e.time % 20 == 0 && e.y < player.y ){
				ebNew( enemy, player, e.x, e.y+50, 0, Math.atan2( player.y-(e.y+50), player.x-e.x ) );
			}
			if( e.time % 10 == 0 ){
				ebNew( enemy, player, e.x-60, e.y, 1 );
				ebNew( enemy, player, e.x+60, e.y, 1 );
			}
		}
		if( e.type == 7 ){
			e.x += e.vx;
			e.y += 2;
			if( e.time % 15 == 0 ){
				ebNew( enemy, player, e.x, e.y, 1 );
			}
		}
		if( e.type == 8 ){
			e.y += e.vy;
			if( e.vy < 0 ) e.vy -= 0.15;
			if( e.vy > 0 ) e.vy -= 0.25;
			if( e.vy == 0 && e.time % 4 == 0 ){
				for( j = e.time*3; j < 360+e.time*3; j+=90 ){
					ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
				}
				if( e.time > 150 ) e.vy = -0.15;
			}
		}
		if( e.type == 10 ){
			e.y += e.vy;
			e.theta++;
			if( e.theta < 600 ){
				if( e.vy > 0 ) e.vy -= 0.5;
				e.x = 360 + Math.cos( e.theta/20 ) * 200;
				
				if( e.vy == 0 ){
					if( e.time % 12 == 0 ){
						ebNew( enemy, player, e.x-10, e.y, 1 );
						ebNew( enemy, player, e.x, e.y+10, 1 );
						ebNew( enemy, player, e.x+10, e.y, 1 );
					}
					if( e.time >= 30 && e.time <= 100 &&  e.time % 4 == 0 ){
						for( j = e.time*3; j < 360+e.time*3; j+=90 ){
							ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
						}
					}
					if( e.time >= 130 && e.time <= 145 && e.time % 3 == 0 ){
						ebNew( enemy, player, e.x, e.y, 3, Math.atan2( player.y-e.y, player.x-e.x ) );
					}
					if( e.time >= 155 && e.time <= 170 && e.time % 3 == 0 ){
						ebNew( enemy, player, e.x, e.y, 3, Math.atan2( player.y-e.y, player.x-e.x ) );
					}
					if( e.time == 200 ){
						for( j = 0; j < 360; j+=15 ){
							ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
						}
						e.time = 0;
					}
				}
			}
			else{
				e.vy -= 0.3;
			}
		}
		if( e.type == 12 ){
			e.y += 3;
			e.theta++;
			e.x = 360 + Math.cos( e.theta/20 ) * 20;
			if( e.time % 30 == 0 && e.time < 200 ){
				ebNew( enemy, player, e.x-160, e.y-100, 0, Math.atan2( player.y-(e.y-100), player.x-(e.x-160) ) );
				ebNew( enemy, player, e.x+160, e.y-100, 0, Math.atan2( player.y-(e.y-100), player.x-(e.x+160) ) );
				ebNew( enemy, player, e.x-160, e.y+100, 0, Math.atan2( player.y-(e.y+100), player.x-(e.x-160) ) );
				ebNew( enemy, player, e.x+160, e.y+100, 0, Math.atan2( player.y-(e.y+100), player.x-(e.x+160) ) );
			}
		}
		if( e.type == 13 ){
			e.y += 3;
			e.theta++;
			e.x = 360 + Math.cos( e.theta/20 ) * 20;
			if( e.time % 5 == 0 && e.time < 220 ){
				ebNew( enemy, player, e.x, e.y, 0, e.time*6*Math.PI/180 );
			}
		}
		if( e.type == 16 ){
			e.x = e.ox + e.rad * Math.cos( e.angle );
			e.y = e.oy + e.rad * Math.sin( e.angle );
			e.angle += 2*Math.PI/180;
			if( e.time <= 400 ){
				if( e.rad > 220 ) e.rad *= 0.99;
				else{
					if( e.time % 40 == 0 && i % 2 == 0 ){
						ebNew( enemy, player, e.x, e.y, 5, Math.atan2( player.y-e.y, player.x-e.x ) );
					}
				}
			}
			else{
				e.rad *= 1.01;
			}
		}
		if( e.type == 19 ){
			e.y += e.vy;
			e.vy -= 0.5;
			if( e.time >= 30 && e.time <= 55 && e.time%3 == 0 ){
				ebNew( enemy, player, e.x, e.y, 3, Math.atan2( player.y-e.y, player.x-e.x ) );
			}
		}
		
		/* bossA */
		if( e.type == 6 ){
			e.y += e.vy;
			e.vy -= 0.8;
			if( e.vy < 0 ) e.vy = 0;
			if( e.vy == 0 ){
				if( e.time <= 150 && e.time % 10 == 0 ){
					ebNew( enemy, player, e.x-145, e.y+40, 0, Math.atan2( player.y-(e.y+40), player.x-(e.x-145) ) );
					ebNew( enemy, player, e.x+135, e.y+40, 0, Math.atan2( player.y-(e.y+40), player.x-(e.x+135) ) );
				}
				if( e.time == 200 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y+40, 0, j*Math.PI/180 );
				}
				if( e.time == 205 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y+40, 0, (j+15)*Math.PI/180 );
				}
				if( e.time == 210 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y+40, 0, j*Math.PI/180 );
				}
				if( ((e.time >= 240 && e.time <= 280) || (e.time >= 310 && e.time <= 350) || (e.time >= 380 && e.time <= 420)) && e.time % 3 == 0 ){
					ebNew( enemy, player, e.x-145, e.y+40, 0, Math.atan2( player.y-(e.y+40), player.x-(e.x-145) ) );
					ebNew( enemy, player, e.x+135, e.y+40, 0, Math.atan2( player.y-(e.y+40), player.x-(e.x+135) ) );
				}
				if( e.time >= 450 && e.time <= 480 && e.time % 2 == 0 ){
					ebNew( enemy, player, e.x, e.y+40, 0, (e.time-90)*7*Math.PI/180 );
				}
				if( e.time >= 480 && e.time <= 510 && e.time % 2 == 0 ){
					ebNew( enemy, player, e.x, e.y+40, 0, -1*(e.time+60)*7*Math.PI/180 );
				}
				if( e.time >= 550 ) e.time = 50;
			}			
		}
		/* bossB */
		if( e.type == 9 ){
			e.y += e.vy;
			e.vy -= 0.2;
			if( e.vy < 0 ) e.vy = 0;
			if( e.vy == 0 ){
				if( e.time % 10 == 0 ){
					ebNew( enemy, player, e.x-280, e.y, 1 );
					ebNew( enemy, player, e.x-285, e.y+10, 1 );
					ebNew( enemy, player, e.x-290, e.y, 1 );
					ebNew( enemy, player, e.x+280, e.y, 1 );
					ebNew( enemy, player, e.x+285, e.y+10, 1 );
					ebNew( enemy, player, e.x+290, e.y, 1 );
				}
				if( e.time <= 150 ){
					ebNew( enemy, player, e.x, e.y, 0, (e.time+60)*15*Math.PI/180 );
				}
				if( e.time == 180 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
				}
				if( e.time == 190 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y, 3, (j+15)*Math.PI/180 );
				}
				if( e.time == 200 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y, 0, (j+7)*Math.PI/180 );
				}
				if( e.time == 210 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y, 3, (j+22)*Math.PI/180 );
				}
				if( e.time == 220 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
				}
				if( e.time == 230 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x, e.y, 3, (j+15)*Math.PI/180 );
				}
				if( e.time == 240 ){
					for( j = 0; j < 360; j+=10 ) ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
				}
				if( e.time >= 280 && e.time <= 300 && e.time % 3 == 0 ){
					ebNew( enemy, player, e.x-280, e.y, 3, Math.atan2( player.y-e.y, player.x-(e.x-280) ) );
					ebNew( enemy, player, e.x+280, e.y, 3, Math.atan2( player.y-e.y, player.x-(e.x+280) ) );
				}
				if( e.time >= 310 && e.time <= 330 && e.time % 3 == 0 ){
					ebNew( enemy, player, e.x-280, e.y, 3, Math.atan2( player.y-e.y, player.x-(e.x-280) ) );
					ebNew( enemy, player, e.x+280, e.y, 3, Math.atan2( player.y-e.y, player.x-(e.x+280) ) );
				}
				if( e.time >= 350 && e.time <= 480 && e.time % 2 == 0 ){
					ebNew( enemy, player, e.x-280, e.y, 2, Math.atan2( player.y-e.y, player.x-(e.x-280) ) );
					ebNew( enemy, player, e.x+280, e.y, 2, Math.atan2( player.y-e.y, player.x-(e.x+280) ) );
				}
				if( e.time == 380 ){
					for( j = 0; j < 360; j+=20 ) ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
				}
				if( e.time == 410 ){
					for( j = 0; j < 360; j+=20 ) ebNew( enemy, player, e.x, e.y, 0, (j+7)*Math.PI/180 );
				}
				if( e.time == 440 ){
					for( j = 0; j < 360; j+=20 ) ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
				}
				if( e.time == 470 ){
					for( j = 0; j < 360; j+=20 ) ebNew( enemy, player, e.x, e.y, 0, (j+7)*Math.PI/180 );
				}
				if( e.time >= 520 ) e.time = 50;
			}
		}
		/* bossC */
		if( e.type == 11 ){
			e.y += e.vy;
			e.vy -= 0.21;
			if( e.vy < 0 ) e.vy = 0;
			if( e.vy == 0 ){
				if( ( (e.time >= 50 && e.time <= 238) || e.time >= 350 ) && e.time % 5 == 0 ){
					ebNew( enemy, player, e.x-115, e.y+100, 1 );
					ebNew( enemy, player, e.x-120, e.y+110, 1 );
					ebNew( enemy, player, e.x-125, e.y+100, 1 );
					ebNew( enemy, player, e.x+115, e.y+100, 1 );
					ebNew( enemy, player, e.x+120, e.y+110, 1 );
					ebNew( enemy, player, e.x+125, e.y+100, 1 );
				}
				if( e.time >= 50 && e.time <= 238 ){
					e.theta++;
					e.x = 360 + Math.sin( e.theta/20 ) * 230;
				}
				if( e.time == 270 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x-120, e.y+100, 0, j*Math.PI/180 );
				}
				if( e.time == 280 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x+120, e.y+100, 0, j*Math.PI/180 );
				}
				if( e.time == 310 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x-120, e.y+100, 0, j*Math.PI/180 );
				}
				if( e.time == 320 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x+120, e.y+100, 0, j*Math.PI/180 );
				}
				if( e.time >= 350 && e.time % 15 == 0 ){
					ebNew( enemy, player, e.x-120, e.y+100, 0, Math.atan2( player.y-(e.y+100), player.x-(e.x-120) ) );
					ebNew( enemy, player, e.x+120, e.y+100, 0, Math.atan2( player.y-(e.y+100), player.x-(e.x+120) ) );
				}
				if( e.time == 380 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x-120, e.y+100, 0, j*Math.PI/180 );
				}
				if( e.time == 430 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x+120, e.y+100, 0, j*Math.PI/180 );
				}
				if( e.time == 480 ){
					for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x-120, e.y+100, 0, j*Math.PI/180 );
				}
				if( e.time >= 520 ) e.time = 0;
			}
		}
		/* bossD */
		if( e.type == 14 ){
			if( e.y < 200 ) e.y += 3;
			e.theta++;
			e.x = 360 + Math.cos( e.theta/20 ) * 20;
			if( e.time >= 200 && e.time <= 270 && e.time % 20 == 0 ){
				for( j = -30; j < 30; j+=5 ) ebNew( enemy, player, e.x, e.y-110, 4, j*Math.PI/180 );
				for( j = 150; j < 210; j+=5 ) ebNew( enemy, player, e.x, e.y-110, 4, j*Math.PI/180 );
			}
			if( e.time == 200 ){
				for( j = 20; j < 110; j+=15 ) ebNew( enemy, player, e.x-120, e.y+110, 0, j*Math.PI/180 );
			}
			if( e.time == 205 ){
				for( j = 13; j < 117; j+=15 ) ebNew( enemy, player, e.x-120, e.y+110, 0, j*Math.PI/180 );
			}
			if( e.time == 210 ){
				for( j = 20; j < 110; j+=15 ) ebNew( enemy, player, e.x-120, e.y+110, 0, j*Math.PI/180 );
			}
			if( e.time == 220 ){
				for( j = 70+20; j < 70+110; j+=15 ) ebNew( enemy, player, e.x+120, e.y+110, 0, j*Math.PI/180 );
			}
			if( e.time == 225 ){
				for( j = 70+13; j < 70+117; j+=15 ) ebNew( enemy, player, e.x+120, e.y+110, 0, j*Math.PI/180 );
			}
			if( e.time == 230 ){
				for( j = 70+20; j < 70+110; j+=15 ) ebNew( enemy, player, e.x+120, e.y+110, 0, j*Math.PI/180 );
			}
			if( e.time == 240 ){
				for( j = 30+20; j < 30+110; j+=15 ) ebNew( enemy, player, e.x-120, e.y-110, 0, j*Math.PI/180 );
			}
			if( e.time == 245 ){
				for( j = 30+13; j < 30+117; j+=15 ) ebNew( enemy, player, e.x-120, e.y-110, 0, j*Math.PI/180 );
			}
			if( e.time == 250 ){
				for( j = 30+20; j < 30+110; j+=15 ) ebNew( enemy, player, e.x-120, e.y-110, 0, j*Math.PI/180 );
			}
			if( e.time == 260 ){
				for( j = 30+20; j < 30+110; j+=15 ) ebNew( enemy, player, e.x+120, e.y-110, 0, j*Math.PI/180 );
			}
			if( e.time == 265 ){
				for( j = 30+13; j < 30+117; j+=15 ) ebNew( enemy, player, e.x+120, e.y-110, 0, j*Math.PI/180 );
			}
			if( e.time == 270 ){
				for( j = 30+20; j < 30+110; j+=15 ) ebNew( enemy, player, e.x+120, e.y-110, 0, j*Math.PI/180 );
			}
			if( e.time == 300 ){
				e.theta2 = 0;
			}
			if( e.time > 300 ){
				if( e.theta2 >= 0 ){
					e.theta2++;
					e.y = 201 + Math.sin( e.theta2/20 )*500;
					
					if( e.time % 2 == 0 ){
						ebNew( enemy, player, e.x+120, e.y-110, 5, Math.random()*Math.PI*2 );
						ebNew( enemy, player, e.x+120, e.y+110, 5, Math.random()*Math.PI*2 );
						ebNew( enemy, player, e.x-120, e.y-110, 5, Math.random()*Math.PI*2 );
						ebNew( enemy, player, e.x-120, e.y+110, 5, Math.random()*Math.PI*2 );
					}
					if( e.time % 10 == 0 ){
						ebNew( enemy, player, e.x, e.y-110, 4, Math.random()*Math.PI*2 );
						ebNew( enemy, player, e.x, e.y+110, 4, Math.random()*Math.PI*2 );
					}
					
					if( e.theta2 > 100 && e.y > 201 ){
						e.theta2 = -1;
						e.y = 201;
					}
				}
				else{
					if( e.time == 520 ){
						for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x-120, e.y-110, 0, j*Math.PI/180 );
					}
					if( e.time == 525 ){
						for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x+120, e.y-110, 0, j*Math.PI/180 );
					}
					if( e.time == 530 ){
						for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x-120, e.y+110, 0, j*Math.PI/180 );
					}
					if( e.time == 535 ){
						for( j = 0; j < 360; j+=30 ) ebNew( enemy, player, e.x+120, e.y+110, 0, j*Math.PI/180 );
						e.theta2--;
						e.time = 515;
						if( e.theta2 < -4 ) e.time = 150;
					}
				}
			}
		}
		/* bossE */
		if( e.type == 15 ){
			e.y += e.vy;
			e.theta++;
			if( e.vy > 0 ){
				e.vy -= 0.5;
				if( e.vy == 0 ) e.theta2 = 0;
			}
			e.x = 360 + Math.cos( e.theta/10 ) * 250;
			
			if( e.vy == 0 ){
				e.theta2++;
				e.y = 103 + Math.sin( e.theta2/15 ) * 50;
				if( e.time % 15 == 0 ){
					ebNew( enemy, player, e.x-10, e.y+95, 1 );
					ebNew( enemy, player, e.x, e.y+105, 1 );
					ebNew( enemy, player, e.x+10, e.y+95, 1 );
				}
				if( e.time >= 30 && e.time <= 100 &&  e.time % 4 == 0 ){
					for( j = e.time*3; j < 360+e.time*3; j+=90 ) ebNew( enemy, player, e.x, e.y+95, 0, j*Math.PI/180 );
				}
				if( e.time >= 120 && e.time <= 145 && e.time % 2 == 0 ){
					ebNew( enemy, player, e.x, e.y+95, 3, Math.atan2( player.y-(e.y+95), player.x-e.x ) );
				}
				if( e.time >= 155 && e.time <= 180 && e.time % 2 == 0 ){
					ebNew( enemy, player, e.x, e.y+95, 3, Math.atan2( player.y-(e.y+95), player.x-e.x ) );
				}
				if( e.time == 200 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x, e.y+95, 0, j*Math.PI/180 );
				}
				if( e.time == 215 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x, e.y+95, 0, j*Math.PI/180 );
				}
				if( e.time == 230 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x, e.y+95, 0, j*Math.PI/180 );
				}
				if( e.time > 260 && e.time <= 400 ){
					if( e.x < 150 || e.x > 570 ) ebNew( enemy, player, e.x, e.y+395, 6 );
				}
				if( e.time > 430 && e.time <= 540 ){
					ebNew( enemy, player, e.x, e.y+395, 6 );
				}
				if( e.time == 560 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x, e.y+95, 0, j*Math.PI/180 );
				}
				if( e.time == 575 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x, e.y+95, 0, j*Math.PI/180 );
				}
				if( e.time == 590 ){
					for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x, e.y+95, 0, j*Math.PI/180 );
					e.time = 0;
				}
			}
		}
		/* bossF */
		if( e.type == 17 || e.type == 18 ){
			e.x = e.ox + e.rad * Math.cos( e.angle );
			e.y = e.oy + e.rad * Math.sin( e.angle );
			e.angle += e.va*Math.PI/180;
			if( e.num == 8 ){
				if( e.rad > 290 ) e.rad *= 0.99;
				else{
					if( e.time % 50 == 0 ){
						ebNew( enemy, player, e.x, e.y, 5, Math.atan2( player.y-e.y, player.x-e.x ) );
					}
				}
			}
			if( e.num == 4 ){
				if( e.va < 3 ) e.va += 0.03;
				if( e.time % 35 == 0 ){
					ebNew( enemy, player, e.x, e.y, 5, Math.atan2( player.y-e.y, player.x-e.x ) );
				}
			}
			if( e.num == 2 ){
				if( e.time < 300 ){
					if( e.va < 6 ) e.va += 0.06;
				}
				else if( e.time < 600 ){
					if( e.va > -6 ) e.va -= 0.06;
				}
				else e.time = 0;
				if( e.time > 100 ){
					if( e.type == 17 && e.x < 330 ) ebNew( enemy, player, e.x, e.y+345, 6 );
					if( e.type == 18 && e.x > 390 ) ebNew( enemy, player, e.x, e.y+345, 6 );
				}
				if( e.time % 50 == 0 ){
					ebNew( enemy, player, e.x, e.y, 5, Math.atan2( player.y-e.y, player.x-e.x ) );
				}
			}
			if( e.num == 1 ){
				if( e.va > 0 && e.va < 12 ) e.va += 0.06;
				if( e.va < 0 && e.va > -12 ) e.va -= 0.06;
				if( e.time % 10 == 0 ){
					ebNew( enemy, player, e.x, e.y, 5, Math.atan2( player.y-e.y, player.x-e.x ) );
				}
			}
			if( e.type == 17 && e.hp < 1600 && e.num == 8 ){
				enemy[2].hp = enemy[4].hp = enemy[6].hp = enemy[8].hp = 0;
				enemy[1].num = enemy[3].num = enemy[5].num = enemy[7].num = 4;
			}
			if( e.type == 17 && e.hp < 1000 && e.num == 4 ){
				enemy[2].hp = enemy[4].hp = 0;
				enemy[1].num = enemy[3].num = 2;
				enemy[1].time = enemy[3].time = 0;
			}
			if( e.type == 17 && e.hp < 250 && e.num == 2 ){
				enemy[2].hp = 0;
				enemy[1].num = 1;
			}
		}
		/* bossG */
		if( e.type == 20 ){
			e.y += e.vy;
			e.vy -= 0.22;
			if( e.vy < 0 ) e.vy = 0;
			e.theta += e.spd;
			e.x = 360 + Math.cos( e.theta/50 ) * e.rad;
			
			if( e.time == 40 ){
				for( j = 0; j < 360; j+=6 ) ebNew( enemy, player, e.x, e.y, 5, j*Math.PI/180 );
			}
			if( e.time == 75 ){
				for( j = 1; j < 361; j+=6 ) ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
			}
			if( e.time == 100 ){
				for( j = 0; j < 360; j+=6 ) ebNew( enemy, player, e.x, e.y, 5, j*Math.PI/180 );
			}
			if( e.time == 135 ){
				for( j = 1; j < 361; j+=6 ) ebNew( enemy, player, e.x, e.y, 0, j*Math.PI/180 );
			}
			if( e.time >= 170 && e.time <= 500 ){
				if( e.time % 80 == 0 ){
					eNew( enemy, 360, 50, 3, -1 );
				}
				if( e.time % 50 == 0 ){
					eNew( enemy, 150, 230, 0, -1 );
					eNew( enemy, 720-150, 230, 0, -1 );
				}
				if( e.time % 100 == 0 ){
					eNew( enemy, 100, 50, 19, -1 );
					eNew( enemy, 720-100, 50, 19, -1 );
				}
			}
			if( e.time >= 500 && e.time < 1000 && e.rad < 230 ) e.rad++;
			if( e.time >= 500 && e.time < 1000 &&  e.spd < 2 ) e.spd += 0.05;
			if( e.time >= 600 && e.time < 1050 ){
				ebNew( enemy, player, e.x, e.y+373, 6 );
				if( e.time % 8 == 0 ){
					for( j = 0; j < 360; j+=23 ) ebNew( enemy, player, e.x, e.y, 5, (j+e.time)*Math.PI/180 );
				}
			}
			if( e.time >= 1000 && e.rad > 20 ) e.rad--;
			if( e.time >= 1000 && e.spd > 1 ) e.spd -= 0.1;
			if( e.time > 1200 ) e.time = 0;
		}
		/* bossH */
		if( e.type == 21 ){
			e.y += e.vy;
			if( e.time < 100 ){
				if( e.y > -100 ) e.vy -= 0.2;
				else{
					e.y = -100;
					e.vy = 0;
				}
			}
			else{
				if( e.y < 100 ) e.vy += 0.1;
				else{
					e.y = 100;
					e.vy = 0;
					e.theta++;
					e.x = 360 + Math.cos( e.theta/20 ) * e.rad;
					if( e.rad < 100 ) e.rad++;
				}
				
				if( e.cnt == 1 ){
					if( e.time >= 150 && e.time < 230 && e.time % 3 == 0 ){
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x ) );
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x )+Math.PI/6 );
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x )-Math.PI/6 );
					}
					if( e.time >= 260 && e.time < 340 && e.time % 3 == 0 ){
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x ) );
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x )+Math.PI/12 );
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x )-Math.PI/12 );
					}
					if( e.time >= 370 && e.time < 450 && e.time % 3 == 0 ){
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x ) );
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x )+Math.PI/15 );
						ebNew( enemy, player, e.x, e.y, 7, Math.atan2( player.y-e.y, player.x-e.x )-Math.PI/15 );
					}
				}
				if( e.cnt == 2 ){
					if( e.time >= 150 && e.time % 3 == 0 ){
						e.angle = Math.atan2( player.y-e.y, player.x-e.x );
						ebNew( enemy, player, e.x, e.y, 0, e.angle+Math.PI/30 );
						ebNew( enemy, player, e.x, e.y, 0, e.angle-Math.PI/30 );
						for( j = 2; j <= 10; j++ ){
							ebNew( enemy, player, e.x, e.y, 0, e.angle+j*Math.PI/20 );
							ebNew( enemy, player, e.x, e.y, 0, e.angle-j*Math.PI/20 );
						}
						if( e.time % 30 == 0 ){
							for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x, e.y, 3, (e.time+j)*Math.PI/180 );
						}
					}
				}
				if( e.cnt == 3 ){
					if( e.time >= 150 && e.time % 5 == 0 ){
						for( j = 1; j <= 15; j++ ) ebNew( enemy, player, e.x, e.y, 5, Math.random()*2*Math.PI );
					}
				}
				if( e.time >= 450 && e.cnt < 3 ){
					e.time = 0;
					e.cnt++;
					if( e.cnt == 3 ) e.hp = 500;
				}
			}
		}
		/* bossI */
		if( e.type == 22 ){
			e.theta += e.spd;
			e.x = 360 + Math.sin( e.theta/20 ) * e.rad;
			e.scale = 0.5 + Math.sin( e.theta/15 ) * 0.1;
			if( e.spd < 2 ) e.spd += 0.1;
			if( e.rad < 200 ) e.rad += 0.1;
			e.angle += 10;
			
			if( e.time >= 150 && e.time <= 250 && e.time % 10 == 0 ){
				for( j = 0; j < 360; j+=15 ) ebNew( enemy, player, e.x, e.y, 3, j*Math.PI/180 );
			}
			if( e.time >= 300 && e.time < 600 && e.time % 2 == 0 ){
				for( j = 0; j < 360; j+=45 ) ebNew( enemy, player, e.x, e.y, 3, (e.time+j)*Math.PI/180 );
			}
			if( e.time >= 700 ){
				for( j = 1; j <= 5; j++ ) ebNew( enemy, player, e.x, e.y, 8, Math.random()*2*Math.PI );
			}
			if( player.inv > 0 ){
				if( enemy[0].n == 1 ) eNew( enemy, e.x, e.y, 23, -1 );
				else enemy[2].time = 0;
			}
			if( player.bomb[0] > 0 ){
				if( enemy[0].n == 1 ) eNew( enemy, e.x, e.y, 23, -1 );
				else enemy[2].time = 0;
			}
		}
		/* bossJ (Barrier) */
		if( e.type == 23 ){
			e.x = enemy[i-1].x;
			e.y = enemy[i-1].y;
			if( e.time > 200 ) e.hp = 0;
		}
		
		e.time++;
		
		if( e.y > 1000 || e.y < -500 ){
			eDel( enemy, i );
			i--;
		}
	}
};

function ebNew( enemy, player, x, y, type, angle ){
	enemy[0].bullet[0]++;

	var n = enemy[0].bullet[0];

	enemy[0].bullet[n] = new Object();

	enemy[0].bullet[n].x = x;
	enemy[0].bullet[n].y = y;
	enemy[0].bullet[n].ox = x;
	enemy[0].bullet[n].oy = y;
	
	if( type == 6 ){
		enemy[0].bullet[n].w = 120;
		enemy[0].bullet[n].h = 480;
	}
	else{
		enemy[0].bullet[n].w = 16;
		enemy[0].bullet[n].h = 16;
	}
	
	enemy[0].bullet[n].angle = angle;
	
	enemy[0].bullet[n].time = 0;

	enemy[0].bullet[n].type = type;
};
function ebDel( enemy, i ){
	var j;
	for( j = i; j < enemy[0].bullet[0]; j++ ){
		enemy[0].bullet[j] = enemy[0].bullet[j+1];
	}
	enemy[0].bullet[0]--;
};

function ebMove( enemy ){
	var i, j;
	for( i = 1; i <= enemy[0].bullet[0]; i++ ){
		var b = enemy[0].bullet[i];
		if( b.type == 0 ){
			b.x = b.x + 13 * Math.cos( b.angle );
			b.y = b.y + 13 * Math.sin( b.angle );
		}
		if( b.type == 1 ){
			b.y += 13;
		}
		if( b.type == 2 ){
			b.x = b.ox + b.time*9 * Math.cos( b.angle );
			b.y = b.oy + b.time*9 * Math.sin( b.angle );
		}
		if( b.type == 3 ){
			b.x = b.x + 18 * Math.cos( b.angle );
			b.y = b.y + 18 * Math.sin( b.angle );
		}
		if( b.type == 4 ){
			b.x = b.x + 13 * Math.cos( b.angle );
			b.y = b.y + 13 * Math.sin( b.angle );
		}
		if( b.type == 5 ){
			b.x = b.ox + b.time*5 * Math.cos( b.angle );
			b.y = b.oy + b.time*5 * Math.sin( b.angle );
		}
		if( b.type == 6 ){
			if( b.ox == 0 ) b.y += 1000;
			if( b.ox == b.x ) b.ox = 0;
		}
		if( b.type == 7 || b.type == 9 ){
			b.x = b.x + 30 * Math.cos( b.angle );
			b.y = b.y + 30 * Math.sin( b.angle );
		}
		if( b.type == 8 ){
			b.x = b.ox + b.time*2 * Math.cos( b.angle );
			b.y = b.oy + b.time*2 * Math.sin( b.angle );
		}
		
		b.time++;
		
		if( b.x < -20 || b.x > 740 || b.y < -20 || b.y > 1000 ){
			ebDel( enemy, i );
			i--;
		}
	}
};

function ePrint( enemy, img, context ){
	var i;
	
	for( i = enemy[0].n; i >= 1; i-- ){
		var e = enemy[i];
		/* don't print worm type enemy */
		if( e.type == 12 || e.type == 13 ) continue;
		
		/* print enemy's fire */
		if( e.type == 0 || e.type == 5 ) context.drawImage( img.Enemy[30], 0, 0, e.w, 15, e.x - e.w/2, e.y - 37 + Math.random()*3, e.w, 15 );
		if( e.type == 1 ) context.drawImage( img.Enemy[31], 0, 0, e.w, 7, e.x - e.w/2, e.y - 17 + Math.random()*2, e.w, 7 );
		if( e.type == 4 ) context.drawImage( img.Enemy[34], 0, 0, e.w, 48, e.x - e.w/2, e.y - 99 + Math.random()*3, e.w, 48 );
		if( e.type == 6 ) context.drawImage( img.Enemy[36], 0, 0, e.w, 96, e.x - e.w/2, e.y - 200 + Math.random()*5, e.w, 96 );
		if( e.type == 10 ) context.drawImage( img.Enemy[40], 0, 0, e.w, 34, e.x - e.w/2, e.y - 59 + Math.random()*3, e.w, 34 );
		if( e.type == 11 ) context.drawImage( img.Enemy[41], 0, 0, e.w, 39, e.x - e.w/2, e.y - 143 + Math.random()*3, e.w, 39 );
		
		/* print enemy */
		if( e.type == 22 ){
			rotateContext( e.x, e.y, e.angle, context );
			context.drawImage( img.Enemy[e.type], 0, 0, e.w, e.h, e.x - e.w*e.scale/2, e.y - e.h*e.scale/2, e.w*e.scale, e.h*e.scale );
			rotateContext( e.x, e.y, -1*e.angle, context );
		}
		else context.drawImage( img.Enemy[e.type], 0, 0, e.w, e.h, e.x - e.w/2, e.y - e.h/2, e.w, e.h );
		/* print boss' hp */
		if( e.type == 6 || e.type == 9 || e.type == 11 || e.type == 14 || e.type == 15 || e.type == 17 || e.type == 20 || e.type == 22 ){
			context.fillStyle = "rgb(255, 55, 55)";
			context.fillRect( 0, 0, 720*e.hp/e.maxhp, 10);
		}
		/* super vision */
		/*context.font = "18px helvetica";
		context.fillStyle = "rgb(255,255,255)";
		context.fillText( e.hp, e.x, e.y );*/
	}
};
function ePrint12( enemy, img, context ){
	var i;
	
	/* print worm type enemy */
	for( i = 1; i <= enemy[0].n; i++ ){
		var e = enemy[i];
		if( e.type != 12 && e.type != 13 ) continue;
		context.drawImage( img.Enemy[e.type], 0, 0, e.w, e.h, e.x - e.w/2, e.y - e.h/2, e.w, e.h );
		if( e.type == 12 && (e.time % 30 == 0 || (e.time-1) % 30 == 0) && e.time < 200 ) context.drawImage( img.Enemy[42], 0, 0, e.w, 360, e.x - e.w/2, e.y - 180, e.w, 360 );
		if( e.type == 13 && (e.time % 5 == 0 || (e.time-1) % 5 == 0) && e.time < 220 ) context.drawImage( img.Enemy[43], 0, 0, e.w, 360, e.x - e.w/2, e.y - 180, e.w, 360 );
	}
};

function ebPrint( enemy, img, context ){
	var i;
	for( i = 1; i <= enemy[0].bullet[0]; i++ ){
		var b = enemy[0].bullet[i];
		if( b.type == 0 ){
			context.drawImage(img.Bullet[10], 0, 0, 16, 16, b.x - 8, b.y - 8, 16, 16);
		}
		if( b.type == 1 ){
			context.drawImage(img.Bullet[11], 0, 0, 4, 16, b.x - 2, b.y - 8, 4, 16);
		}
		if( b.type == 2 ){
			context.drawImage(img.Bullet[10], 0, 0, 16, 16, b.x - 8, b.y - 8, 16, 16);
		}
		if( b.type == 3 ){
			context.drawImage(img.Bullet[10], 0, 0, 16, 16, b.x - 8, b.y - 8, 16, 16);
		}
		if( b.type == 4 ){
			context.drawImage(img.Bullet[11], 0, 0, 4, 16, b.x - 2, b.y - 8, 4, 16);
		}
		if( b.type == 5 ){
			context.drawImage(img.Bullet[10], 0, 0, 16, 16, b.x - 8, b.y - 8, 16, 16);
		}
		if( b.type == 6 ){
			context.drawImage(img.Bullet[12], 0, 0, 120, 480, b.x - 60, b.y - 240, 120, 480);
		}
		if( b.type == 7 ){
			context.drawImage(img.Bullet[10], 0, 0, 16, 16, b.x - 8, b.y - 8, 16, 16);
		}
		if( b.type == 8 ){
			context.drawImage(img.Bullet[10], 0, 0, 16, 16, b.x - 8, b.y - 8, 16, 16);
		}
		if( b.type == 9 ){
			context.drawImage(img.Bullet[13], 0, 0, 16, 16, b.x - 8, b.y - 8, 16, 16);
		}
	}
};

function rotateContext( x, y, angle, context ){
	context.translate( x, y );
	context.rotate( angle * Math.PI/180 );
	context.translate( -1*x, -1*y);
};