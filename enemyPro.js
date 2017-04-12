function eProgress( enemy, stage, img, context ){
	enemy[0].time++;
	var t = enemy[0].time;
	var W = 720, H = 540;
	
	/* stage 1 */
	if( stage == 1 ){
		if( t == 10 ) eNew( enemy, 150, -100, 0, -1 );
		if( t == 60 ) eNew( enemy, W-150, -100, 0, -1 );
		if( t == 110 ){
			eNew( enemy, 150, -100, 0, -1 );
			eNew( enemy, W-150, -100, 5, 0 );
		}
		if( t == 160 ){
			eNew( enemy, 200, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-200, -100, 1, -1 );
		}
		if( t == 220 ){
			eNew( enemy, 170, -100, 0, -1 );
			eNew( enemy, W-170, -100, 0, -1 );
		}
		if( t == 290 ){
			eNew( enemy, 200, -100, 4, 0 );
		}
		if( t == 380 ){
			eNew( enemy, W-150, -100, 2, -1 );
		}
		if( t == 440 ){
			eNew( enemy, 200, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-200, -100, 1, -1 );
		}
		if( t == 480 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 520 ) eNew( enemy, W/2, -100, 3, -1 );
		if( t == 540 ){
			eNew( enemy, 150, -100, 2, -1 );
			eNew( enemy, W-150, -100, 2, -1 );
		}
		if( t == 590 ){
			eNew( enemy, 90, -100, 1, -1 );
			eNew( enemy, 230, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-230, -100, 1, -1 );
			eNew( enemy, W-90, -100, 1, -1 );
		}
		if( t == 640 ){
			eNew( enemy, 150, -100, 0, -1 );
			eNew( enemy, W/2, -100, 5, 0 );
			eNew( enemy, W-150, -100, 0, -1 );
		}
		if( t == 690 ){
			eNew( enemy, W/2, -100, 2, -1 );
		}
		if( t == 740 ){
			eNew( enemy, 100, -100, 0, -1 );
			eNew( enemy, W/2, -100, 0, -1 );
			eNew( enemy, W-100, -100, 0, -1 );
		}
		if( t == 770 ){
			eNew( enemy, 250, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-250, -100, 1, -1 );
		}
		if( t == 830 ) eNew( enemy, 100, -100, 2, -1 );
		if( t == 870 ) eNew( enemy, W-100, -100, 2, -1 );
		if( t == 910 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 950 ) eNew( enemy, W/2, -100, 3, -1 );
		if( t == 970 ) eNew( enemy, 150, -100, 0, -1 );
		if( t == 1000 ){
			eNew( enemy, 120, -100, 4, 1 );
		}
		if( t == 1030 ){
			eNew( enemy, 150, -100, 0, -1 );
		}
		if( t == 1050 ){
			eNew( enemy, 120, -100, 0, -1 );
		}
		if( t == 1070 ){
			eNew( enemy, W-120, -100, 4, 0 );
		}
		if( t == 1100 ){
			eNew( enemy, W-150, -100, 0, -1 );
		}
		if( t == 1140 ){
			eNew( enemy, W-120, -100, 0, -1 );
		}
		if( t == 1180 ){
			eNew( enemy, 200, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-200, -100, 1, -1 );
		}
		if( t == 1210 ){
			eNew( enemy, 120, -100, 3, -1 );
			eNew( enemy, W-120, -100, 3, -1 );
		}
		if( t >= 1300 && t <= 1400 ){
			wPrint( img, context );
		}
		if( t == 1450 ){
			eNew( enemy, W/2, -100, 6, -1 );
		}
	}
	
	/* stage 2 */
	else if( stage == 2 ){
		if( t == 10 ){
			eNew( enemy, 150, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-150, -100, 1, -1 );
		}
		if( t == 70 ){
			eNew( enemy, 150, -100, 0, -1 );
			eNew( enemy, W-150, -100, 5, 0 );
		}
		if( t == 110 ){
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 130 ){
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 220 ){
			eNew( enemy, W/2, -100, 8, 1 );
		}
		if( t == 260 ){
			eNew( enemy, 150, -100, 0, -1 );
			eNew( enemy, W-150, -100, 0, -1 );
		}
		if( t == 320 ){
			eNew( enemy, 150, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-150, -100, 1, -1 );
		}
		if( t == 380 ){
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 400 ){
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 440 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 460 ) eNew( enemy, W/2, -100, 4, 0 );
		if( t == 550 ){
			eNew( enemy, 150, -100, 0, -1 );
			eNew( enemy, W-150, -100, 0, -1 );
		}
		if( t == 590 ){
			eNew( enemy, 90, -100, 1, -1 );
			eNew( enemy, 230, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-230, -100, 1, -1 );
			eNew( enemy, W-90, -100, 1, -1 );
		}
		if( t == 640 ){
			eNew( enemy, W/2, -100, 8, 0 );
		}
		if( t == 660 ){
			eNew( enemy, 150, -100, 0, -1 );
			eNew( enemy, W-150, -100, 0, -1 );
		}
		if( t == 720 ){
			eNew( enemy, W/2, -100, 2, -1 );
		}
		if( t == 740 ){
			eNew( enemy, 90, -100, 1, -1 );
			eNew( enemy, 230, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-230, -100, 1, -1 );
			eNew( enemy, W-90, -100, 1, -1 );
		}
		if( t == 780 ){
			eNew( enemy, 230, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-230, -100, 1, -1 );
		}
		if( t == 830 ){
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 850 ){
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 880 ){
			eNew( enemy, 90, -100, 1, -1 );
			eNew( enemy, 230, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-230, -100, 1, -1 );
			eNew( enemy, W-90, -100, 1, -1 );
		}
		if( t == 940 ) eNew( enemy, W/2, -100, 3, -1 );
		if( t == 960 ) eNew( enemy, 150, -100, 5, 0 );
		if( t == 1020 ){
			eNew( enemy, 120, -100, 8, 1 );
		}
		if( t == 1040 ){
			eNew( enemy, 150, -100, 0, -1 );
		}
		if( t == 1100 ){
			eNew( enemy, 120, -100, 0, -1 );
		}
		if( t == 1120 ){
			eNew( enemy, W-120, -100, 8, 0 );
		}
		if( t == 1140 ){
			eNew( enemy, W-150, -100, 0, -1 );
		}
		if( t == 1160 ){
			eNew( enemy, W-120, -100, 0, -1 );
		}
		if( t == 1180 ){
			eNew( enemy, 200, -100, 1, -1 );
			eNew( enemy, W-200, -100, 1, -1 );
		}
		if( t == 1210 ){
			eNew( enemy, 120, -100, 3, -1 );
			eNew( enemy, W-120, -100, 3, -1 );
		}
		if( t >= 1300 && t <= 1400 ){
			wPrint( img, context );
		}
		if( t == 1450 ){
			eNew( enemy, W/2, -100, 9, -1 );
		}
	}
	
	/* stage 3 */
	else if( stage == 3 ){
		if( t == 10 ){
			eNew( enemy, 150, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-150, -100, 1, -1 );
		}
		if( t == 60 ){
			eNew( enemy, 90, -100, 1, -1 );
			eNew( enemy, 230, -100, 1, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W-230, -100, 1, -1 );
			eNew( enemy, W-90, -100, 1, -1 );
		}
		if( t == 110 ){
			eNew( enemy, W/2, -100, 8, 1 );
		}
		if( t == 170 ){
			eNew( enemy, 150, -100, 0, -1 );
			eNew( enemy, W-150, -100, 5, 0 );
		}
		if( t == 200 ){
			eNew( enemy, 150, -100, 1, -1 );
			eNew( enemy, 300, -100, 1, -1 );
			eNew( enemy, 450, -100, 1, -1 );
			eNew( enemy, 600, -100, 1, -1 );
		}
		if( t == 240 ){
			eNew( enemy, 70, -100, 1, -1 );
			eNew( enemy, 220, -100, 1, -1 );
			eNew( enemy, 370, -100, 1, -1 );
			eNew( enemy, 530, -100, 1, -1 );
		}
		if( t == 280 ){
			eNew( enemy, 150, -100, 1, -1 );
			eNew( enemy, 300, -100, 1, -1 );
			eNew( enemy, 450, -100, 1, -1 );
			eNew( enemy, 600, -100, 1, -1 );
		}
		if( t == 320 ){
			eNew( enemy, 70, -100, 1, -1 );
			eNew( enemy, 220, -100, 1, -1 );
			eNew( enemy, 370, -100, 1, -1 );
			eNew( enemy, 530, -100, 1, -1 );
		}
		if( t == 370 ){
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 390 ){
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 440 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 480 ){
			eNew( enemy, 150, -100, 1, -1 );
			eNew( enemy, 300, -100, 1, -1 );
			eNew( enemy, 450, -100, 1, -1 );
			eNew( enemy, 600, -100, 1, -1 );
			eNew( enemy, 680, -100, 0, -1 );
		}
		if( t == 520 ){
			eNew( enemy, 70, -100, 1, -1 );
			eNew( enemy, 220, -100, 1, -1 );
			eNew( enemy, 370, -100, 1, -1 );
			eNew( enemy, 530, -100, 1, -1 );
			eNew( enemy, 40, -100, 5, 0 );
		}
		if( t == 560 ){
			eNew( enemy, 150, -100, 1, -1 );
			eNew( enemy, 300, -100, 1, -1 );
			eNew( enemy, 450, -100, 1, -1 );
			eNew( enemy, 600, -100, 1, -1 );
			eNew( enemy, 680, -100, 0, -1 );
		}
		if( t == 600 ){
			eNew( enemy, 70, -100, 1, -1 );
			eNew( enemy, 220, -100, 1, -1 );
			eNew( enemy, 370, -100, 1, -1 );
			eNew( enemy, 530, -100, 1, -1 );
			eNew( enemy, 40, -100, 0, -1 );
		}
		if( t == 640 ){
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 660 ){
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 700 ){
			eNew( enemy, W/2, -100, 10, 1 );
		}
		if( t >= 1300 && t <= 1400 ){
			wPrint( img, context );
		}
		if( t == 1450 ){
			eNew( enemy, W/2, -90, 11, -1 );
		}
	}
	
	/* stage 4 */
	else if( stage == 4 ){
		var i;
		for( i = 10; i <= 1300; i+=110 ){
			if( t == i ){
				if( i == 230 || i == 450 || i == 670 || i == 890 ){
					eNew( enemy, W/2, -300, 13, -1 );
					if( i == 230 ){
						eNew( enemy, 60, -100, 5, 0 );
						eNew( enemy, 660, -100, 0, -1 );
					}
					else if( i == 670 ){
						eNew( enemy, 60, -100, 0, -1 );
						eNew( enemy, 660, -100, 5, 1 );
					}
					else{
						eNew( enemy, 60, -100, 0, -1 );
						eNew( enemy, 660, -100, 0, -1 );
					}
				}
				else eNew( enemy, W/2, -300, 12, -1 );
			}
			if( t == i || t == i+55 ){
				eNew( enemy, 30, -100, 1, -1 );
				eNew( enemy, 90, -100, 1, -1 );
				eNew( enemy, 690, -100, 1, -1 );
				eNew( enemy, 630, -100, 1, -1 );
			}
		}
		if( t >= 1300 && t <= 1400 ){
			wPrint( img, context );
		}
		if( t == 1330 ){
			eNew( enemy, W/2, -300, 14, -1 );
		}
	}
	
	/* stage 5 */
	else if( stage == 5 ){
		if( t == 30 ){
			eNew( enemy, W/2, -100, 4, 1 );
		}
		if( t == 60 ){
			eNew( enemy, 100, -100, 0, -1 );
			eNew( enemy, W-100, -100, 0, -1 );
		}
		if( t == 80 ){
			eNew( enemy, 130, -100, 0, -1 );
			eNew( enemy, W-130, -100, 0, -1 );
		}
		if( t == 100 ){
			eNew( enemy, 160, -100, 0, -1 );
			eNew( enemy, W-160, -100, 0, -1 );
		}
		if( t == 120 ){
			eNew( enemy, 190, -100, 0, -1 );
			eNew( enemy, W-190, -100, 0, -1 );
		}
		if( t == 190 ){
			eNew( enemy, 150, -100, 8, 0 );
		}
		if( t == 230 ){
			eNew( enemy, W-150, -100, 8, 0 );
		}
		if( t == 270 ){
			eNew( enemy, 120, -100, 1, -1 );
			eNew( enemy, 240, -100, 1, -1 );
			eNew( enemy, 360, -100, 1, -1 );
			eNew( enemy, 480, -100, 1, -1 );
			eNew( enemy, 600, -100, 1, -1 );
		}
		if( t == 370 ){
			eNew( enemy, -100, 50, 7, -1 );
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 380 ){
			eNew( enemy, -100, 50, 7, -1 );
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 390 ){
			eNew( enemy, -100, 50, 7, -1 );
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 440 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W/2, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 480 ){
			eNew( enemy, 120, -100, 2, -1 );
			eNew( enemy, 120, -100, 0, -1 );
		}
		if( t == 490 ) eNew( enemy, 240, -100, 2, -1 );
		if( t == 500 ) eNew( enemy, 360, -100, 2, -1 );
		if( t == 510 ) eNew( enemy, 480, -100, 2, -1 );
		if( t == 520 ){
			eNew( enemy, 600, -100, 2, -1 );
			eNew( enemy, 600, -100, 5, 0 );
		}
		if( t == 530 ) eNew( enemy, 480, -100, 2, -1 );
		if( t == 540 ) eNew( enemy, 360, -100, 2, -1 );
		if( t == 550 ) eNew( enemy, 240, -100, 2, -1 );
		if( t == 580 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 600 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 620 ){
			eNew( enemy, W/2, -100, 3, -1 );
		}
		if( t == 670 ){
			eNew( enemy, W/2, -100, 0, -1 );
			eNew( enemy, W/2-100, -100, 1, -1 );
			eNew( enemy, W/2+100, -100, 1, -1 );
		}
		if( t == 700 ) eNew( enemy, W/2, -100, 0, -1 );
		if( t == 720 ){
			eNew( enemy, W/2, -100, 0, -1 );
			eNew( enemy, W/2-100, -100, 1, -1 );
			eNew( enemy, W/2+100, -100, 1, -1 );
		}
		if( t == 740 ) eNew( enemy, W/2, -100, 0, -1 );
		if( t == 760 ){
			eNew( enemy, W/2, -100, 0, -1 );
			eNew( enemy, W/2-100, -100, 1, -1 );
			eNew( enemy, W/2+100, -100, 1, -1 );
		}
		if( t == 670 ){
			eNew( enemy, 150, -100, 4, 0 );
			eNew( enemy, W-150, -100, 4, 1 );
		}
		if( t == 780 ){
			eNew( enemy, W/2, -100, 4, 0 );
		}
		if( t == 810 ){
			eNew( enemy, 100, -100, 0, -1 );
			eNew( enemy, W-100, -100, 0, -1 );
			eNew( enemy, 50, -100, 1, -1 );
			eNew( enemy, W-50, -100, 1, -1 );
		}
		if( t == 830 ){
			eNew( enemy, 130, -100, 5, 0 );
			eNew( enemy, W-130, -100, 0, -1 );
			eNew( enemy, 80, -100, 1, -1 );
			eNew( enemy, W-80, -100, 1, -1 );
		}
		if( t == 850 ){
			eNew( enemy, 160, -100, 0, -1 );
			eNew( enemy, W-160, -100, 0, -1 );
			eNew( enemy, 110, -100, 1, -1 );
			eNew( enemy, W-110, -100, 1, -1 );
		}
		if( t == 870 ){
			eNew( enemy, 190, -100, 0, -1 );
			eNew( enemy, W-190, -100, 0, -1 );
			eNew( enemy, 140, -100, 1, -1 );
			eNew( enemy, W-140, -100, 1, -1 );
		}
		if( t == 900 ){
			eNew( enemy, W/2, -100, 4, 0 );
		}
		if( t == 930 ){
			eNew( enemy, 100, -100, 0, -1 );
			eNew( enemy, W-100, -100, 0, -1 );
			eNew( enemy, 150, -100, 1, -1 );
			eNew( enemy, W-150, -100, 1, -1 );
		}
		if( t == 950 ){
			eNew( enemy, 130, -100, 5, 0 );
			eNew( enemy, W-130, -100, 0, -1 );
			eNew( enemy, 180, -100, 1, -1 );
			eNew( enemy, W-180, -100, 1, -1 );
		}
		if( t == 970 ){
			eNew( enemy, 160, -100, 0, -1 );
			eNew( enemy, W-160, -100, 0, -1 );
			eNew( enemy, 210, -100, 1, -1 );
			eNew( enemy, W-210, -100, 1, -1 );
		}
		if( t == 990 ){
			eNew( enemy, 190, -100, 0, -1 );
			eNew( enemy, W-190, -100, 0, -1 );
			eNew( enemy, 240, -100, 1, -1 );
			eNew( enemy, W-240, -100, 1, -1 );
		}
		if( t == 1010 ){
			eNew( enemy, 50, -100, 0, -1 );
			eNew( enemy, W-50, -100, 0, -1 );
		}
		if( t >= 1070 && t <= 1170 ){
			wPrint( img, context );
		}
		if( t == 1250 ){
			eNew( enemy, W/2, -100, 15, -1 );
		}
	}
	
	/* stage 6 */
	else if( stage == 6 ){
		var i;
		if( t == 20 ){
			for( i = 1; i <= 3; i++ ){
				eNew( enemy, 150, -100, 0, -1 );
				eNew( enemy, W-150, -100, 0, -1 );
			}
		}
		if( t == 30 ){
			for( i = 1; i <= 3; i++ ){
				eNew( enemy, 100, -100, 0, -1 );
				eNew( enemy, 200, -100, 0, -1 );
				eNew( enemy, W-100, -100, 0, -1 );
				eNew( enemy, W-200, -100, 0, -1 );
			}
		}
		if( t == 40 ){
			for( i = 1; i <= 3; i++ ){
				eNew( enemy, 150, -100, 0, -1 );
				eNew( enemy, W-150, -100, 0, -1 );
			}
		}
		if( t == 50 ){
			for( i = 1; i <= 3; i++ ){
				eNew( enemy, 120, -100, 0, -1 );
				eNew( enemy, 240, -100, 0, -1 );
				eNew( enemy, 360, -100, 0, -1 );
				eNew( enemy, 480, -100, 0, -1 );
				eNew( enemy, 600, -100, 0, -1 );
			}
		}
		if( t == 90 ){
			eNew( enemy, 60, -100, 1, -1 );
			eNew( enemy, 180, -100, 1, -1 );
			eNew( enemy, 300, -100, 1, -1 );
			eNew( enemy, 420, -100, 1, -1 );
			eNew( enemy, 540, -100, 1, -1 );
			eNew( enemy, 660, -100, 1, -1 );
		}
		if( t == 100 ){
			eNew( enemy, 180, -100, 4, 0 );
			eNew( enemy, 540, -100, 4, 1 );
		}
		if( t == 200 ){
			for( i = 1; i <= 3; i++ ) eNew( enemy, W/2, -100, 0, -1 );
		}
		if( t == 210 ){
			for( i = 1; i <= 3; i++ ){
				eNew( enemy, W/2-50, -100, 0, -1 );
				eNew( enemy, W/2+50, -100, 0, -1 );
			}
			eNew( enemy, 60, -100, 1, -1 );
			eNew( enemy, 660, -100, 1, -1 );
		}
		if( t == 220 ){
			for( i = 1; i <= 3; i++ ) eNew( enemy, W/2, -100, 0, -1 );
		}
		if( t == 300 ){
			eNew( enemy, W/2, -100, 8, 0 );
			eNew( enemy, W/2-200, -100, 2, -1 );
			eNew( enemy, W/2+200, -100, 2, -1 );
		}
		if( t == 400 ){
			for( i = 0; i < 360; i += 30 ){
				eNew( enemy, W/2, H/2, 16, -1, i*Math.PI/180 );
			}
		}
		if( t >= 450 && t <= 750 && t % 30 == 0 ){
			eNew( enemy, 15, -100, 1, -1 );
			eNew( enemy, 75, -100, 1, -1 );
			eNew( enemy, 135, -100, 1, -1 );
			eNew( enemy, 585, -100, 1, -1 );
			eNew( enemy, 645, -100, 1, -1 );
			eNew( enemy, W-15, -100, 1, -1 );
		}
		if( t == 880 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
			for( i = 1; i <= 3; i++ ){
				eNew( enemy, 60, -100, 0, -1 );
				eNew( enemy, W/2, -100, 0, -1 );
				eNew( enemy, W-60, -100, 0, -1 );
			}
		}
		if( t == 900 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
			for( i = 1; i <= 3; i++ ){
				eNew( enemy, 60, -100, 0, -1 );
				eNew( enemy, W/2, -100, 0, -1 );
				eNew( enemy, W-60, -100, 0, -1 );
			}
		}
		if( t == 920 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
			for( i = 1; i <= 3; i++ ){
				eNew( enemy, 60, -100, 0, -1 );
				eNew( enemy, W/2, -100, 0, -1 );
				eNew( enemy, W-60, -100, 0, -1 );
			}
		}
		
		if( t >= 1000 && t <= 1100 ){
			wPrint( img, context );
		}
		if( t == 1200 ){
			for( i = 0; i < 360; i += 45 ){
				if( i == 0 ) eNew( enemy, W/2, H/2, 17, -1, i*Math.PI/180 );
				else eNew( enemy, W/2, H/2, 18, -1, i*Math.PI/180 );
			}
		}
	}
	/* stage 7 */
	else if( stage == 7 ){
		var i;
		if( t == 20 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
		}
		if( t == 30 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 40 ){
			eNew( enemy, 90, -100, 3, -1 );
			eNew( enemy, W-90, -100, 3, -1 );
		}
		if( t == 60 ){
			eNew( enemy, W/2, -100, 8, 1 );
		}
		if( t == 100 ){
			eNew( enemy, 90, -100, 3, -1 );
			eNew( enemy, W-90, -100, 3, -1 );
		}
		if( t == 110 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 120 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
		}
		if( t == 200 ){
			eNew( enemy, 210, -100, 19, -1 );
			eNew( enemy, W/2, -100, 19, -1 );
			eNew( enemy, W-210, -100, 19, -1 );
		}
		if( t == 240 ){
			for( i = 120; i <= 600; i += 120 ) eNew( enemy, i, -100, 19, -1 );
		}
		if( t == 280 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W/2, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
		}
		if( t == 300 ){
			eNew( enemy, 150, -100, 2, -1 );
			eNew( enemy, W-150, -100, 2, -1 );
			eNew( enemy, 200, -100, 0, -1 );
			eNew( enemy, W-200, -100, 0, -1 );
		}
		if( t == 340 ){
			for( i = 120; i <= 600; i += 120 ) eNew( enemy, i, -100, 3, -1 );
		}
		if( t == 390 ){
			for( i = 60; i <= 660; i += 120 ) eNew( enemy, i, -100, 19, -1 );
			
			eNew( enemy, 120, -100, 0, -1 );
			eNew( enemy, 240, -100, 0, -1 );
			eNew( enemy, 360, -100, 5, 0 );
			eNew( enemy, 480, -100, 0, -1 );
			eNew( enemy, 600, -100, 0, -1 );
		}
		if( t == 420 ){
			for( i = 120; i <= 600; i += 120 ) eNew( enemy, i, -100, 3, -1 );
		}
		if( t == 470 ){
			for( i = 60; i <= 660; i += 120 ) eNew( enemy, i, -100, 19, -1 );
			
			eNew( enemy, 15, -100, 1, -1 );
			for( i = 120; i <= 600; i += 120 ) eNew( enemy, i, -100, 1, -1 );
			eNew( enemy, 705, -100, 1, -1 );
		}
		if( t == 520 ){
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 530 ){
			eNew( enemy, 120, -100, 19, -1 );
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 540 ){
			eNew( enemy, 240, -100, 19, -1 );
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 550 ){
			eNew( enemy, 360, -100, 19, -1 );
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 560 ){
			eNew( enemy, 480, -100, 19, -1 );
			eNew( enemy, 820, 50, 7, -1 );
		}
		if( t == 570 ){
			eNew( enemy, 600, -100, 19, -1 );
		}
		if( t == 620 ){
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 630 ){
			eNew( enemy, 600, -100, 19, -1 );
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 640 ){
			eNew( enemy, 480, -100, 19, -1 );
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 650 ){
			eNew( enemy, 360, -100, 19, -1 );
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 660 ){
			eNew( enemy, 240, -100, 19, -1 );
			eNew( enemy, -100, 50, 7, -1 );
		}
		if( t == 670 ){
			eNew( enemy, 120, -100, 19, -1 );
		}
		if( t == 760 ){
			eNew( enemy, 50, -100, 0, -1 );
			eNew( enemy, W-50, -100, 5, 0 );
		}
		if( t == 820 ){
			eNew( enemy, 80, -100, 19, -1 );
			eNew( enemy, 180, -100, 19, -1 );
			eNew( enemy, 280, -100, 19, -1 );
			eNew( enemy, W-100, -100, 3, 0 );
		}
		if( t == 890 ){
			eNew( enemy, W-80, -100, 19, -1 );
			eNew( enemy, W-180, -100, 19, -1 );
			eNew( enemy, W-280, -100, 19, -1 );
			eNew( enemy, 100, -100, 3, 0 );
		}
		if( t == 950 || t == 1050 ){
			eNew( enemy, 10, -100, 19, -1 );
			eNew( enemy, 70, -100, 19, -1 );
			eNew( enemy, 130, -100, 19, -1 );
			eNew( enemy, 190, -100, 19, -1 );
			eNew( enemy, W-10, -100, 19, -1 );
			eNew( enemy, W-70, -100, 19, -1 );
			eNew( enemy, W-130, -100, 19, -1 );
			eNew( enemy, W-190, -100, 19, -1 );
			eNew( enemy, W/2, -100, 1, -1 );
			eNew( enemy, W/2-60, -100, 1, -1 );
			eNew( enemy, W/2-120, -100, 1, -1 );
			eNew( enemy, W/2+60, -100, 1, -1 );
			eNew( enemy, W/2+120, -100, 1, -1 );
		}
		if( t == 1000 ){
			eNew( enemy, 10, -100, 1, -1 );
			eNew( enemy, 70, -100, 1, -1 );
			eNew( enemy, 130, -100, 1, -1 );
			eNew( enemy, 190, -100, 1, -1 );
			eNew( enemy, W-10, -100, 1, -1 );
			eNew( enemy, W-70, -100, 1, -1 );
			eNew( enemy, W-130, -100, 1, -1 );
			eNew( enemy, W-190, -100, 1, -1 );
			eNew( enemy, W/2, -100, 19, -1 );
			eNew( enemy, W/2-60, -100, 19, -1 );
			eNew( enemy, W/2-120, -100, 19, -1 );
			eNew( enemy, W/2+60, -100, 19, -1 );
			eNew( enemy, W/2+120, -100, 19, -1 );
		}
		
		if( t == 1140 ){
			eNew( enemy, 200, -100, 8, 0 );
			eNew( enemy, W-10, -100, 19, -1 );
			eNew( enemy, W-70, -100, 19, -1 );
			eNew( enemy, W-130, -100, 19, -1 );
			eNew( enemy, W-190, -100, 19, -1 );
		}
		if( t == 1230 ){
			eNew( enemy, W-200, -100, 8, 0 );
			eNew( enemy, 10, -100, 19, -1 );
			eNew( enemy, 70, -100, 19, -1 );
			eNew( enemy, 130, -100, 19, -1 );
			eNew( enemy, 190, -100, 19, -1 );
		}
		if( t == 1300 ){
			eNew( enemy, W/2, -100, 10, 1 );
		}
		for( i = 1360; i <= 1900; i += 80 ){
			if( t == i ){
				eNew( enemy, 50, -100, 0, -1 );
				eNew( enemy, W-50, -100, 0, -1 );
				break;
			}
			if( t == i+40 ){
				eNew( enemy, 50, -100, 1, -1 );
				eNew( enemy, 110, -100, 1, -1 );
				eNew( enemy, W-50, -100, 1, -1 );
				eNew( enemy, W-110, -100, 1, -1 );
				break;
			}
		}
		if( t == 1960 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
		}
		if( t == 1970 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 1980 ){
			eNew( enemy, 90, -100, 3, -1 );
			eNew( enemy, W-90, -100, 3, -1 );
		}
		if( t == 2000 ){
			eNew( enemy, W/2, -100, 8, 1 );
		}
		if( t == 2040 ){
			eNew( enemy, 90, -100, 3, -1 );
			eNew( enemy, W-90, -100, 3, -1 );
		}
		if( t == 2050 ){
			eNew( enemy, 150, -100, 3, -1 );
			eNew( enemy, W-150, -100, 3, -1 );
		}
		if( t == 2060 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
		}
		if( t == 2100 ){
			eNew( enemy, 210, -100, 3, -1 );
			eNew( enemy, W/2, -100, 3, -1 );
			eNew( enemy, W-210, -100, 3, -1 );
		}
		if( t == 2130 ){
			eNew( enemy, 80, -100, 19, -1 );
			eNew( enemy, 160, -100, 19, -1 );
			eNew( enemy, 240, -100, 19, -1 );
		}
		if( t == 2160 ){
			eNew( enemy, W-80, -100, 19, -1 );
			eNew( enemy, W-160, -100, 19, -1 );
			eNew( enemy, W-240, -100, 19, -1 );
		}
		if( t == 2190 ){
			eNew( enemy, 80, -100, 19, -1 );
			eNew( enemy, 160, -100, 19, -1 );
			eNew( enemy, 240, -100, 19, -1 );
		}
		if( t == 2220 ){
			eNew( enemy, W-80, -100, 19, -1 );
			eNew( enemy, W-160, -100, 19, -1 );
			eNew( enemy, W-240, -100, 19, -1 );
		}
		if( t >= 2300 && t <= 2400 ){
			wPrint( img, context );
		}
		if( t == 2500 ){
			eNew( enemy, W/2, -100, 20, -1 );
		}
	}
};

function wPrint( img, context ){
	if( Math.random()*10 <= 1 ) context.drawImage( img.Warning, 540, 0, 540, 169, 360 - 270 + Math.random()*6-3, 220 - 84 + Math.random()*6-3, 540, 169 );
	else context.drawImage( img.Warning, 0, 0, 540, 169, 360 - 270 + Math.random()*6-3, 220 - 84 + Math.random()*6-3, 540, 169 );
};