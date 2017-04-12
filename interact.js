function killEnemy( player, enemy, i, items, particle, quake ){
	var e = enemy[i];
	var k, l;
	/* make particles */
	for( k = 1; k <= (e.w+e.h)/10; k++ ) ptNew( particle, e.x, e.y, (e.w+e.h)/10 );
	/* make items */
	if( e.itype == 0 ) iNew( items, e.x, e.y, 0, 7, 7 );
	if( e.itype == 1 ) iNew( items, e.x, e.y, 1, 7, -7 );
	/* set boss clear status */
	if( e.type == 6 || e.type == 9 || e.type == 11 || e.type == 14 || e.type == 15 || e.type == 17 || e.type == 20 ){
		/* kill all enemies */
		for( k = 2; k <= enemy[0].n; k++ ){
			killEnemy( player, enemy, k, items, particle );
			k--;
		}
		/* destroy all bullets */
		for( k = 1; k <= enemy[0].bullet[0]; k++ ){
			for( l = 1; l <= 5; l++ ) ptNew( particle, enemy[0].bullet[l].x, enemy[0].bullet[l].y, 100 );
			ebDel( enemy, k );
			k--;
		}
		/* make quake */
		qNew( quake, 6, 40 );
		/* set bossClear status */
		player.bossClear = true;
	}
	if( e.type == 20 ){
		eNew( enemy, 360, 150, 21, -1 );
		for( k = 1; k <= (e.w+e.h); k++ ) ptNew( particle, e.x, e.y, (e.w+e.h)/10 );
		/* make quake */
		qNew( quake, 6, 40 );
	}
	if( e.type == 21 ){
		for( k = 1; k <= enemy[0].bullet[0]; k++ ){
			for( l = 1; l <= 5; l++ ) ptNew( particle, enemy[0].bullet[l].x, enemy[0].bullet[l].y, 100 );
			ebDel( enemy, k );
			k--;
		}
		eNew( enemy, e.x, e.y, 22, -1 );
		for( k = 1; k <= 1000; k++ ) ptNew( particle, e.x, e.y, 100 );
		/* make quake */
		qNew( quake, 6, 40 );
	}
	if( e.type == 22 ){
		for( k = 1; k <= enemy[0].bullet[0]; k++ ){
			for( l = 1; l <= 5; l++ ) ptNew( particle, enemy[0].bullet[l].x, enemy[0].bullet[l].y, 100 );
			ebDel( enemy, k );
			k--;
		}
		for( k = 1; k <= 1000; k++ ) ptNew( particle, e.x, e.y, 100 );
		/* make quake */
		qNew( quake, 6, 40 );
		player.finalbossClear = true;
	}
	/* delete enemy */
	eDel( enemy, i );
};

function iPE( player, enemy, items, particle ){
	var i, j;
	if( player.inv > 0 ) return; // if player is invinsible, ignore collision
	
	for( i = 1; i <= enemy[0].n; i++ ){
		var e = enemy[i];
		if( e.type != 17 && e.type != 18 && e.type != 20 ) continue;
		if( e.x - e.w/2 <= player.x && player.x <= e.x + e.w/2 && e.y - e.h/2 <= player.y && player.y <= e.y + e.h/2 ){
			/* make particles */
			for( j = 1; j <= 180; j++ ) ptNew( particle, player.x, player.y, 200 );
			/* make items */
			iNew( items, player.x, player.y, 0, 7, 7 );
			iNew( items, player.x, player.y, 0, -7, -7 );
			if( player.life == 0 ) iNew( items, player.x, player.y, 1, 7, -7 );
			player.y = 1000; // initialize player position
			player.power[0] = player.power[1] = player.power[2] = 0;
			player.bc = 2;
			player.inv = 70; // make player invinsible
			player.vy = -33;
			player.life--;
			if( player.life < 0 ) return -1;
		}
	}
};


function iPbE( player, enemy, items, particle, quake ){
	var i, j, k;
	for( i = 1; i <= player.bullet[0]; i++ ){
		for( j = enemy[0].n; j >= 1; j-- ){
			var b = player.bullet[i], e = enemy[j];
			if( e.y < 0 ) continue;
			if( e.type == 12 || e.type == 13 ) continue;
			if( e.type == 6 || e.type == 11 ){ e.h = 50; e.y -= 20; }
			if( e.x - e.w/2 <= b.x && b.x <= e.x + e.w/2 && e.y - e.h/2 <= b.y && b.y <= e.y + e.h/2 ){
				if( e.type == 23 ){
					for( k = 0; k <= 360; k+=2 ) ebNew( enemy, player, e.x, e.y, 9, k*Math.PI/180 );
				}
				e.hp--;
				player.score += 10;
				if( e.hp <= 0 ){
					if( e.type == 4 && e.time < 140 ){
						iNew( items, e.x, e.y, 3000, 0, 0 );
						player.score += 3000;
					}
					else if( e.type == 8 && e.time < 50 ){
						iNew( items, e.x, e.y, 3000, 0, 0 );
						player.score += 3000;
					}
					else if( e.type == 10 ){
						iNew( items, e.x, e.y, 10000, 0, 0 );
						player.score += 10000;
					}
					else if( e.type == 1 && e.time < 10 ){
						iNew( items, e.x, e.y, 100, 0, 0 );
						player.score += 100;
					}
					else if( e.time < 30 ){
						iNew( items, e.x, e.y, 300, 0, 0 );
						player.score += 300;
					}
					killEnemy( player, enemy, j, items, particle, quake );
				}
				pbDel( player, i );
				i--;
				if( e.type == 6 || e.type == 11 ){ e.h = 274; e.y += 20; }
				continue;
			}
			if( e.type == 6 || e.type == 11 ){ e.h = 274; e.y += 20; }
		}
	}
	for( j = 1; j <= enemy[0].n; j++ ){
		var e = enemy[j];
		if( e.y < 0 ) continue;
		if( e.type == 12 || e.type == 13 ) continue;		
		if( e.hp <= 0 ){
			killEnemy( player, enemy, j, items, particle, quake );
			j--;
		}
	}
};

function iPEb( player, enemy, items, particle ){
	var i, j;
	if( player.inv > 0 ) return; // if player is invinsible, ignore collision
	
	for( i = 1; i <= enemy[0].bullet[0]; i++ ){
		var e = enemy[0].bullet[i];
		if( e.x - e.w/2 <= player.x && player.x <= e.x + e.w/2 && e.y - e.h/2 <= player.y && player.y <= e.y + e.h/2 ){
			/* make particles */
			for( j = 1; j <= 180; j++ ) ptNew( particle, player.x, player.y, 200 );
			/* make items */
			iNew( items, player.x, player.y, 0, 7, 7 );
			iNew( items, player.x, player.y, 0, -7, -7 );
			if( player.life == 0 ) iNew( items, player.x, player.y, 1, 7, -7 );
			player.y = 1000; // initialize player position
			player.power[0] = player.power[1] = player.power[2] = 0;
			player.bc = 2;
			player.inv = 70; // make player invinsible
			player.vy = -33;
			player.life--;
			if( player.life < 0 ) return -1;
		}
	}
};

function iPI( player, items ){
	var i;
	for( i = 1; i <= items[0]; i++ ){
		if( items[i].x - 26 <= player.x && player.x <= items[i].x + 26 && items[i].y - 26 <= player.y && player.y <= items[i].y + 26 ){
			if( items[i].type >= 3000 ) continue;
			if( items[i].type == 0 ){
				if( player.power[ player.type ] < 2 ) player.power[ player.type ]++;
				else{
					player.score += 3000;
					items[i].type = 3000;
					continue;
				}
			}
			if( items[i].type == 1 ){
				player.bc++;
			}
			iDel( items, i );
		}    
	}
};

function iBE( player, enemy, items, particle, quake ){
	var i, j;
	for( i = 1; i <= player.bomb[0]; i++ ){
		for( j = 1; j <= enemy[0].n; j++ ){
			var b = player.bomb[i], e = enemy[j];
			if( e.y < 0 ) continue;
			if( e.type == 12 || e.type == 13 ) continue;
			if( b.type == 0 && e.type != 22 ){
				if( b.x - 240*b.delay/100 <= e.x && e.x <= b.x + 240*b.delay/100 && b.y - 160*b.delay/100 <= e.y && e.y <= b.y + 160*b.delay/100 ){
					e.hp -= 55;
					if( e.hp <= 0 ){
						killEnemy( player, enemy, j, items, particle, quake );
						j--;
						continue;
					}
				}
			}
			if( b.type == 1 && e.type != 22 ){
				if( b.x - 48 <= e.x && e.x <= b.x + 48 && b.y - 160 <= e.y && e.y <= b.y + 160 ){
					e.hp -= 35;
					if( e.hp <= 0 ){
						killEnemy( player, enemy, j, items, particle, quake );
						j--;
						continue;
					}
				}
				else if( e.x - e.w/2 <= b.x && b.x <= e.x + e.w/2 && e.y - e.h/2 <= b.y && b.y <= e.y + e.h/2 ){
					e.hp -= 35;
					if( e.hp <= 0 ){
						killEnemy( player, enemy, j, items, particle, quake );
						j--;
						continue;
					}
				}
			}
		}
	}
};

function iBEb( player, enemy ){
	var i, j;
	for( i = 1; i <= player.bomb[0]; i++ ){
		for( j = 1; j <= enemy[0].bullet[0]; j++ ){
			var b = player.bomb[i], e = enemy[0].bullet[j];
			if( b.type == 0 ){
				if( b.x - 240*b.delay/100 <= e.x && e.x <= b.x + 240*b.delay/100 && b.y - 160*b.delay/100 <= e.y && e.y <= b.y + 160*b.delay/100 ){
					ebDel( enemy, j );
					j--;
					continue;
				}
			}
			if( b.type == 1 ){
				if( b.x - 48 <= e.x && e.x <= b.x + 48 && b.y - 160 <= e.y && e.y <= b.y + 160 ){
					ebDel( enemy, j );
					j--;
					continue;
				}
			}
			if( b.type == 2 ){
				if( b.x - 240 <= e.x && e.x <= b.x + 240 && b.y - 128 <= e.y && e.y <= b.y + 128 ){
					ebDel( enemy, j );
					j--;
					continue;
				}
			}
		}
	}
};