$(document).ready(function(){
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();

	var playAnimation = true, hide = false;
	var lastTimestamp = 0, fps = 50, interval = 1000 / fps;

	var key = new Object();
	
	var img = new Object();
	img.Player = new Image();
	img.Player.src = "image/player.png";
	img.PlayerF = new Image();
	img.PlayerF.src = "image/playerFire.png";
	img.PlayerS = new Image();
	img.PlayerS.src = "image/playerS.png";
	img.Life = new Image();
	img.Life.src = "image/life.png";
	img.Bullet = new Array();
	img.Bullet[0] = new Image();
	img.Bullet[0].src = "image/bulletA.png";
	img.Bullet[1] = new Image();
	img.Bullet[1].src = "image/bulletB.png";
	img.Bullet[2] = new Image();
	img.Bullet[2].src = "image/bulletC.png";
	img.Bullet[10] = new Image();
	img.Bullet[10].src = "image/bulletD.png";
	img.Bullet[11] = new Image();
	img.Bullet[11].src = "image/bulletE.png";
	img.Bullet[12] = new Image();
	img.Bullet[12].src = "image/bulletF.png";
	img.Bullet[13] = new Image();
	img.Bullet[13].src = "image/bulletG.png";
	img.Enemy = new Array();
	img.Enemy[0] = new Image();
	img.Enemy[0].src = "image/enemyA.png";
	img.Enemy[30] = new Image();
	img.Enemy[30].src = "image/enemyAF.png";
	img.Enemy[1] = new Image();
	img.Enemy[1].src = "image/enemyB.png";
	img.Enemy[31] = new Image();
	img.Enemy[31].src = "image/enemyBF.png";
	img.Enemy[2] = new Image();
	img.Enemy[2].src = "image/enemyC.png";
	img.Enemy[3] = new Image();
	img.Enemy[3].src = "image/enemyD.png";
	img.Enemy[4] = new Image();
	img.Enemy[4].src = "image/enemyE.png";
	img.Enemy[34] = new Image();
	img.Enemy[34].src = "image/enemyEF.png";
	img.Enemy[5] = new Image();
	img.Enemy[5].src = "image/enemyF.png";
	img.Enemy[6] = new Image();
	img.Enemy[6].src = "image/bossA.png";
	img.Enemy[36] = new Image();
	img.Enemy[36].src = "image/bossAF.png";
	img.Enemy[7] = new Image();
	img.Enemy[7].src = "image/enemyG.png";
	img.Enemy[8] = new Image();
	img.Enemy[8].src = "image/enemyH.png";
	img.Enemy[9] = new Image();
	img.Enemy[9].src = "image/bossB.png";
	img.Enemy[10] = new Image();
	img.Enemy[10].src = "image/enemyI.png";
	img.Enemy[40] = new Image();
	img.Enemy[40].src = "image/enemyIF.png";
	img.Enemy[11] = new Image();
	img.Enemy[11].src = "image/bossC.png";
	img.Enemy[41] = new Image();
	img.Enemy[41].src = "image/bossCF.png";
	img.Enemy[12] = new Image();
	img.Enemy[12].src = "image/enemyJ.png";
	img.Enemy[42] = new Image();
	img.Enemy[42].src = "image/enemyJF.png";
	img.Enemy[13] = new Image();
	img.Enemy[13].src = "image/enemyK.png";
	img.Enemy[43] = new Image();
	img.Enemy[43].src = "image/enemyKF.png";
	img.Enemy[14] = new Image();
	img.Enemy[14].src = "image/bossD.png";
	img.Enemy[15] = new Image();
	img.Enemy[15].src = "image/bossE.png";
	img.Enemy[16] = new Image();
	img.Enemy[16].src = "image/enemyL.png";
	img.Enemy[17] = new Image();
	img.Enemy[17].src = "image/bossF.png";
	img.Enemy[18] = new Image();
	img.Enemy[18].src = "image/bossF2.png";
	img.Enemy[19] = new Image();
	img.Enemy[19].src = "image/enemyM.png";
	img.Enemy[20] = new Image();
	img.Enemy[20].src = "image/bossG.png";
	img.Enemy[21] = new Image();
	img.Enemy[21].src = "image/bossH.png";
	img.Enemy[22] = new Image();
	img.Enemy[22].src = "image/bossI.png";
	img.Enemy[23] = new Image();
	img.Enemy[23].src = "image/bossJ.png";
	img.Bomb = new Array();
	img.Bomb[0] = new Image();
	img.Bomb[0].src = "image/bombA.png";
	img.Bomb[1] = new Image();
	img.Bomb[1].src = "image/bombB.png";
	img.Bomb[2] = new Image();
	img.Bomb[2].src = "image/bombC.png";
	img.Bomb[3] = new Image();
	img.Bomb[3].src = "image/bomb.png";
	img.Item = new Array();
	img.Item[0] = new Image();
	img.Item[0].src = "image/itemP.png";
	img.Item[1] = new Image();
	img.Item[1].src = "image/itemB.png";
	img.Warning = new Image();
	img.Warning.src = "image/warning.png";
	img.Intro = new Image();
	img.Intro.src = "image/intro.png";
	
	var player = new Object();
	var enemy = new Array();
	var items = new Array();
	var star = new Array();
	var particle = new Array();
	var cont = new Object();
	var intro = new Object();
	var htp = new Object();
	var quake = new Object();

	document.onkeydown = function(e){
		var press_key = e || window.event;
		switch (press_key.keyCode) {
			case 38: key.up = true; break;
			case 40: key.down = true; break;
			case 37: key.left = true; break;
			case 39: key.right = true; break;
			case 90:
				if( !cont.flag ) key.z = true;
				break;
			case 88:
				if( !intro.flag && !cont.flag && player.bomb[0] == 0 && player.bc > 0 && player.y < 540 ){
					if( player.type == 0 || player.type == 1 ){
						bNew( player, player.x, player.y );
					}
					if( player.type == 2 ){
						bNew( player, 240, 700 );
						bNew( player, 480, 950 );
					}
					if( !htp.flag ) player.bc--;
				}
				break;
		}
	};
	document.onkeyup = function(e){
		var press_key = e || window.event;
		switch (press_key.keyCode) {
			case 38: key.up = false; break;
			case 40: key.down = false; break;
			case 37: key.left = false; break;
			case 39: key.right = false; break;
			case 90:
				if( cont.flag ) cont.time -= 100;
				else key.z = false;
				break;
			case 88:
				if( cont.flag ) cont.time -= 100;
				break;
			case 65:
				player.type--;
				if( player.type < 0 ) player.type = 2;
				break;
			case 83:
				player.type++;
				if( player.type > 2 ) player.type = 0;
				break;
			case 32:
				hide = !hide;
				context.fillStyle = "rgb(255,255,255)";
				context.fillRect(0, 0, 720, 540);
				animate();
				break;
			case 68:
				if( player.score > 200000 ){
					player.superPower = !player.superPower;
					if( player.superPower ) qNew( quake, 4, 40 );
				}
				break;
			case 49:
				if( intro.flag ){
					intro.flag = false;
					htp.flag = true;
				}
				else if( htp.flag ){
					htp.flag = false;
				}
				else if( cont.flag && cont.time >= 0 ){
					cont.flag = false;
					player.life = 2;
					player.score = player.score % 10;
					if( player.score < 9 ) player.score++;
					player.retry++;
				}
				break;
		}
	};
	
	function init(){
		key.up = key.down = key.left = key.right = key.z = key.x = key.shift = false;
		
		pInit( player );
		eInit( enemy );
		iInit( items );
		sInit( star );
		ptInit( particle );
		qInit( quake );
		
		cont.flag = htp.flag = false;
		intro.flag = true;
		cont.time = intro.time = htp.time = 0;
		intro.story = new String("");
		intro.fullstory = new String("외계인과 싸워 지구를 지키자.");
		
		window.requestAnimationFrame(animate);
		//animate();
	};
	function printAll( player, enemy, items, star, particle, key, img, context ){
		sPrint( star, img, context );
		ePrint12( enemy, img, context );
		pbPrint( player, img, context );
		ePrint( enemy, img, context );
		ebPrint( enemy, img, context );
		pPrint( player, key, img, context );
		bPrint( player, img, context );
		iPrint( items, img, context );
		ptPrint( particle, img, context );
		pnPrint( player, img, context );
	};

	function animate(timestamp){
		if( hide || !playAnimation ) return;

		window.requestAnimationFrame(animate);
		if (timestamp - lastTimestamp < interval) return;
    	lastTimestamp = timestamp;
		
		context.clearRect(0,0,canvasWidth,canvasHeight);
		context.fillStyle = "rgb(255,255,255)";
		
		if( intro.flag ){
			sMove( star, player, enemy );
			sPrint( star, img, context );
			pPrint( player, key, img, context );
			context.drawImage(img.Intro, 0, 0, 720, 540, 0, 0, 720, 540);
			if( intro.time % 5 == 0 && intro.time < 76 ) intro.story += intro.fullstory[ intro.time/5 ];
			context.font = "bold 40px helvetica";
			context.fillText( intro.story, 90, 340 );
			if( intro.time >= 90 && intro.time%30 < 15 ){
				context.font = "bold 32px helvetica";
				context.fillText( "숫자 1 을 눌러서 시작", 200, 420 );
			}
			intro.time++;
		}
		else{
			if( htp.flag ){
				sMove( star, player, enemy );
				pMove( player, key, particle );
				pbMove( player, enemy );
				bMove( player );
				sPrint( star, img, context );
				pPrint( player, key, img, context );
				pbPrint( player, img, context );
				bPrint( player, img, context );
				
				context.font = "bold 72px helvetica";
				context.fillText( "조작 설명", 200, 100 );
				context.font = "bold 12px helvetica";
				context.fillText( "200000점 이후 d 키로 하이퍼 모드 전환", 20, 520 );
				
				if( htp.time > 10 && htp.time < 150 ){
					context.font = "bold 32px helvetica";
					context.fillText( "방향키를 눌러서 이동", 195, 160 );
				}
				if( htp.time >= 150 && htp.time < 300 ){
					context.font = "bold 32px helvetica";
					context.fillText( "z 키를 눌러서 공격", 215, 160 );
				}
				if( htp.time >= 300 && htp.time < 450 ){
					context.font = "bold 32px helvetica";
					context.fillText( "x 키를 눌러서 폭탄 발사", 185, 160 );
				}
				if( htp.time >= 450 && htp.time < 600 ){
					context.font = "bold 32px helvetica";
					context.fillText( "a, s 키를 눌러서 공격 타입 변경", 130, 160 );
					context.fillText( "(폭탄도 함께 변경됨)", 205, 200 );
				}
				if( htp.time >= 600 ){
					context.font = "bold 32px helvetica";
					context.fillText( "숫자 1을 눌러서 시작", 200, 160 );
				}
				
				if( htp.time%30 < 15 ){
					context.font = "bold 28px helvetica";
					context.fillText( "숫자 1 을 눌러서 바로 시작", 360, 520 );
				}
				htp.time++;
			}
			else{
				if( !cont.flag ){
					if( player.finalbossClear && star[0].spd == 1 ){
						context.font = "bold 32px helvetica";
						context.fillText( "새로운 살 곳을 찾아 떠난", 130, 120 );
						context.fillText( "외계 종족을 멸종시켰다.", 130, 160 );
						context.fillText( "지구는 평화를 되찾았다.", 130, 200 );
						if( player.retry == 0 ){
							context.fillText( "단 한번에 평화를 되찾은", 130, 260 );
							context.fillText( player.score + "점의 진짜 영웅이었다.", 130, 300 );
						}
						else if( player.retry < 5 ){
							context.fillText( player.retry + "번의 도전 끝에 평화를 되찾은", 130, 260 );
							context.fillText( player.score + "점의 영웅이었다.", 130, 300 );
						}
						else if( player.retry < 10 ){
							context.fillText( player.retry + "번이나 재도전한,", 130, 260 );
							context.fillText( player.score + "점짜리 영웅이었다...", 130, 300 );
						}
						else{
							context.fillText( player.retry + "번이나 재도전한", 130, 260 );
							context.fillText( "영웅인가? 싶을 정도의", 130, 300 );
							context.fillText( player.score + "점짜리 영웅이었다...", 130, 340 );
						}
					}
					sMove( star, player, enemy );
					ptMove( particle );
					pMove( player, key, particle );
					pbMove( player, enemy );
					eMove( enemy, player );
					ebMove( enemy, player );
					bMove( player );
					iMove( items );
					qMove( quake, context );
					
					iPbE( player, enemy, items, particle, quake );
					if( iPEb( player, enemy, items, particle ) == -1 ){
						cont.flag = true;
						cont.time = 1000;
					}
					if( iPE( player, enemy, items, particle ) == -1 ){
						cont.flag = true;
						cont.time = 1000;
					}
					iBEb( player, enemy );
					iBE( player, enemy, items, particle, quake );
					iPI( player, items );
					
					printAll( player, enemy, items, star, particle, key, img, context );
					
					eProgress( enemy, player.stage, img, context );
				}
				if( cont.flag ){
					cont.time -= 3;
					if( cont.time < 0 ){
						playAnimation = false;
						context.font = "bold 50px helvetica";
						context.fillStyle = "rgb(255,255,255)";
						context.fillText( "그렇게 지구는 멸망했다.", 75, 220 );
						context.fillText( player.score + "점짜리 영웅이었다.", 75, 320 );
					}
					else{
						if( cont.time > 500 ) context.globalAlpha = (cont.time-500)/500;
						else context.globalAlpha = 0.0;
						printAll( player, enemy, items, star, particle, key, img, context );
						context.globalAlpha = 1.0;
						context.font = "bold 72px helvetica";
						context.fillStyle = "rgb(255,255,255)";
						context.fillText( "재도전?", 250, 250 );
						context.fillText( Math.floor(cont.time/100), 340, 350 );
						context.font = "bold 28px helvetica";
						context.fillText( "숫자 1 을 눌러서 재도전", 370, 520 );
					}
				}
			}
		}
	};
	
	init();
});