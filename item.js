function iInit( items ){
	items[0] = 0;
};
function iMove( items ){
	var i;
	for( i = 1; i <= items[0]; i++ ){
		if( items[i].type >= 3000 ) continue;
		items[i].x += items[i].vx;
		items[i].y += items[i].vy;
		if( items[i].x < 0 || items[i].x > 720 ){
			items[i].vx *= -1;
		}
		if( items[i].y < 0 || items[i].y > 520 ){
			items[i].vy *= -1;
		}
	}
};

function iNew( items, x, y, type, vx, vy ){
	items[0]++;

	var n = items[0];

	items[n] = new Object();

	items[n].x = x;
	items[n].y = y;
	items[n].vx = vx;
	items[n].vy = vy;
	items[n].type = type;
};
function iDel( items, i ){
	var j;
	for( j = i; j < items[0]; j++ ){
		items[j] = items[j+1];
	}
	items[0]--;
};

function iPrint( items, img, context ){
	var i;
	for( i = 1; i <= items[0]; i++ ){
		/* print bonus score */
		if( items[i].type >= 10000 ){
			context.font = "18px helvetica";
			context.fillStyle = "rgb(255,255,255)";
			context.fillText( "10000", items[i].x, items[i].y );
			items[i].y++;
			items[i].type++;
			if( items[i].type > 10040 ){
				iDel( items, i );
				i--;
				continue;
			}
		}
		else if( items[i].type >= 3000 ){
			context.font = "18px helvetica";
			context.fillStyle = "rgb(255,255,255)";
			context.fillText( "3000", items[i].x, items[i].y );
			items[i].y++;
			items[i].type++;
			if( items[i].type > 3020 ){
				iDel( items, i );
				i--;
				continue;
			}
		}
		else if( items[i].type >= 300 ){
			context.font = "18px helvetica";
			context.fillStyle = "rgb(255,255,255)";
			context.fillText( "300", items[i].x, items[i].y );
			items[i].y++;
			items[i].type++;
			if( items[i].type > 320 ){
				iDel( items, i );
				i--;
				continue;
			}
		}
		else if( items[i].type >= 100 ){
			context.font = "18px helvetica";
			context.fillStyle = "rgb(255,255,255)";
			context.fillText( "100", items[i].x, items[i].y );
			items[i].y++;
			items[i].type++;
			if( items[i].type > 120 ){
				iDel( items, i );
				i--;
				continue;
			}
		}
		/* print items */
		else{
			context.drawImage(img.Item[ items[i].type ], 0, 0, 36, 36, items[i].x - 18, items[i].y - 18, 36, 36);
		}
	}
};