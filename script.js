    //fenetre de travail
	function setup() {
		createCanvas(1346, 634);
		background(255);
	}
	
   //load img
   function preload() {
	    img0 = loadImage('picture0.png');
		
		img1 = loadImage('picture1.png');
		img2 = loadImage('picture2.png');
		
		img3 = loadImage('picture3.png');
		img4 = loadImage('picture4.png');
		
		img5 = loadImage('picture5.png');
		img6 = loadImage('picture6.png');
    }
    
	//mouvement sprite
	function decal() {
		mobx2 = mobx1 + 100;
		mobx3 = mobx2 + 100;
		mobx4 = mobx3 + 100;
		mobx5 = mobx4 + 100;
		mobx6 = mobx5 + 100;
		mobx7 = mobx6 + 100;
		mobx8 = mobx7 + 100;
		mobx9 = mobx8 + 100;
		
		mobx11 = mobx10 + 100;
		mobx12 = mobx11 + 100;
		mobx13 = mobx12 + 100;
		mobx14 = mobx13 + 100;
		mobx15 = mobx14 + 100;
		mobx16 = mobx15 + 100;
		mobx17 = mobx16 + 100;
		mobx18 = mobx17 + 100;
		
		mobx20 = mobx19 + 100;
		mobx21 = mobx20 + 100;
		mobx22 = mobx21 + 100;
		mobx23 = mobx22 + 100;
		mobx24 = mobx23 + 100;
		mobx25 = mobx24 + 100;
		mobx26 = mobx25 + 100;
		mobx27 = mobx26 + 100;
    }
	
	function endTir() {
		tir = 0;
		// jouer l'animation de mort du mob
		// ajouter du score
	}
	
	// fonction tir
	function detectTir() {
		
		if (mob1 === 1) {
		var mobx_1 = mobx1 + spritex;
		var moby_1 = moby1 + spritey;
		var mobby_1 = moby_1 - 30;
		if ((tirx > mobx1 && tirx < mobx_1)) {
		 if ((tiry > mobby_1 && tiry < moby_1)) {
		  mob1 = 0;
		  endTir();
	     }
		}
		}
		if (mob2 === 1) {
		var mobx_2 = mobx2 + spritex;
		var moby_2 = moby1 + spritey;
		var mobby_2 = moby_2 - 30;
		if ((tirx > mobx2 && tirx < mobx_2)) {
		 if ((tiry > mobby_2 && tiry < moby_2)) {
		  mob2 = 0;
		  endTir();
	     }
		}
		}
		if (mob3 === 1) {
		var mobx_3 = mobx3 + spritex;
		var moby_3 = moby1 + spritey;
		var mobby_3 = moby_3 - 30;
		if ((tirx > mobx3 && tirx < mobx_3)) {
		 if ((tiry > mobby_3 && tiry < moby_3)) {
		  mob3 = 0;
		  endTir();
	     }
		}
		}
		

	}
	
	// ------------------------------------------------------------------------------------------------------------------------
	
	var spritex = 62.5;
	var spritey = 93.75;
	
	var value = 0;
	
	//var rectange 1
	var longx = 50;
	var posx = 1245;
	
	var longy = 50;
	var posy = 80;
	
	var posxx = posx + longx;
	var posyy = posy + longy;
 
    //var pos sprites	
	var moby1 = 75;
	var moby2 = moby1 + 100;
	var moby3 = moby2 + 100;
	
	var test1 = 0;
	var mobx1 = 10;
	
	var test2 = 0;
	var mobx10 = 10;
	
    var test3 = 0;
	var mobx19 = 10;
	
	// vaisseau et tir
	var vaisx = 550;
	
    var tir = 0;
	var tirx = 550;
	var tiry = 520;
	
	// mob
	var mob1 = 1;
	var mob2 = 1;
	var mob3 = 1;
	var mob4 = 1;
	var mob5 = 1;
	var mob6 = 1;
	var mob7 = 1;
	var mob8 = 1;
	var mob9 = 1;
	var mob10 = 1;
	var mob11 = 1;
	var mob12 = 1;
	var mob13 = 1;
	var mob14 = 1;
	var mob15 = 1;
	var mob16 = 1;
	var mob17 = 1;
	var mob18 = 1;
	var mob19 = 1;
	var mob20 = 1;
	var mob21 = 1;
	var mob22 = 1;
	var mob23 = 1;
	var mob24 = 1;
	var mob25 = 1;
	var mob26 = 1;
	var mob27 = 1;
    
	var xmin = 10;
	var xmax = 1120;
	
	var vitesse = 1;
	var anim = 0;
	var a1 = 0;
	decal();
    
	// ------------------------------------------------------------------------------------------------------------------------
	
	//fonction clic
    function mouseClicked() {
	 if ((mouseX > posx && mouseX < posxx)) {
		if ((mouseY > posy && mouseY < posyy)) {
     		if (value === 0) {
     		  value = 255;
    		 } else {
    		  value = 0;
    		 }
		    }
	    }
    }
	
	//fonction touche
    function keyPressed() {
     if (keyCode === LEFT_ARROW) {
	    if (vaisx >= 50) {
         vaisx = vaisx - 50;
	    }
     }

	 if (keyCode === RIGHT_ARROW) {
        if (vaisx <= 1099) {
         vaisx = vaisx + 50;
	    }
     }
	 
	 if (keyCode === ENTER) {
		if (tir === 0) {
         tir = 1;
		 tirx = vaisx + 40;
		 tiry = 520;
        }
     }
    }
	
	// fonction dessin
    function draw() {	 
	
	 // ------------------ interface
	 fill(255);
	 rect(0, 0, 1345, 633);
	 
	 fill(0)
     textSize(32);
     text('Play', 1240, 50)
	 line (1200,0,1200,633);
     
     fill(value);
     rect(posx, posy, longx, longy);
	 
	 if (value === 255) {
    
   	    // tir ------------------
		
		if (tir === 1) {
         if (tiry >= 10) {
		 tiry -= 15;
         fill(255, 255, 0);
         rect(tirx, tiry, 8, 15);
		 detectTir();
		 } else {
		 tir = 0;
		 }
		}
		
        image(img0,vaisx,520,100,120);
		
		// xmin ------------------
		
		if (mob1 === 0) {
			if (mob10 === 0) {
				if (mob19 === 0) {
					xmin = -90;
				}
			}
		}
		
		if (xmin === -90) {
			if (mob2 === 0) {
				if (mob11 === 0) {
					if (mob20 === 0) {
						xmin = -190;
					}
				}
			}
		}
		
		if (xmin === -190) {
			if (mob3 === 0) {
				if (mob12 === 0) {
					if (mob21 === 0) {
						xmin = -290;
					}
				}
			}
		}
		
		// xmax ------------------
		
		if (mob9 === 0) {
			if (mob18 === 0) {
				if (mob27 === 0) {
					xmax = 1220;
				}
			}
		}
		
		if (xmax === 1220) {
			if (mob8 === 0) {
				if (mob17 === 0) {
					if (mob26 === 0) {
						xmax = 1320;
					}
				}
			}
		}
		
		if (xmax === 1320) {
			if (mob7 === 0) {
				if (mob16 === 0) {
					if (mob25 === 0) {
						xmax = 1420;
					}
				}
			}
		}
		
		// 1 ------------------
		if (mobx9 >= xmax) {
			test1 = 0;
			moby1 += 5;
		} 
		if (mobx1 <= xmin) {
			test1 = 1;
			moby1 += 5;
		}
		
		if (test1 === 1) {
 	  	 	mobx1 += vitesse;
		} else {
 	   	 	mobx1 -= vitesse;
		}
		
		// 2 ------------------
		if (mobx18 >= xmax) {
			test2 = 0;
			moby2 += 5;
		} 
		
		if (mobx10 <= xmin) {
			test2 = 1;
			moby2 += 5;
		}
		
		if (test2 === 1) {
 	  	 	mobx10 += vitesse;
		} else {
 	   	 	mobx10 -= vitesse;
		}
		
		// 3 ------------------
		if (mobx27 >= xmax) {
			test3 = 0;
			moby3 += 5;
		} 
		
		if (mobx19 <= xmin) {
			test3 = 1;
			moby3 += 5;
		}
		
		if (test3 === 1) {
 	  	 	mobx19 += vitesse;
		} else {
 	   	 	mobx19 -= vitesse;
		}
		
        decal();
		
		anim += 1;
		
		if (anim == 50) {
			
			if (a1 == 1) { 
				a1 = 0;
            } else { 
				a1 = 1;
            }
			
		    anim = 0;
		} 
		
        // 1 ------------------
		if (a1 == 1) {
			
	    if (mob1 === 1) { 
		    image(img1,mobx1,moby1,spritex,spritey);
		}
		if (mob2 === 1) { 
			image(img1,mobx2,moby1,spritex,spritey);
		}
		if (mob3 === 1) { 
			image(img1,mobx3,moby1,spritex,spritey);
		}
		if (mob4 === 1) { 
			image(img1,mobx4,moby1,spritex,spritey);
		}
		if (mob5 === 1) { 
			image(img1,mobx5,moby1,spritex,spritey);
		}
		if (mob6 === 1) { 
			image(img1,mobx6,moby1,spritex,spritey);
		}
	    if (mob7 === 1) { 
			image(img1,mobx7,moby1,spritex,spritey);
		}
		if (mob8 === 1) { 
			image(img1,mobx8,moby1,spritex,spritey);
		}
		if (mob9 === 1) { 
			image(img1,mobx9,moby1,spritex,spritey);
		}
		
		} else {
			
	    if (mob1 === 1) { 
		    image(img2,mobx1,moby1,spritex,spritey);
		}
		if (mob2 === 1) { 
			image(img2,mobx2,moby1,spritex,spritey);
		}
		if (mob3 === 1) { 
			image(img2,mobx3,moby1,spritex,spritey);
		}
		if (mob4 === 1) { 
			image(img2,mobx4,moby1,spritex,spritey);
		}
		if (mob5 === 1) { 
			image(img2,mobx5,moby1,spritex,spritey);
		}
		if (mob6 === 1) { 
			image(img2,mobx6,moby1,spritex,spritey);
		}
	    if (mob7 === 1) { 
			image(img2,mobx7,moby1,spritex,spritey);
		}
		if (mob8 === 1) { 
			image(img2,mobx8,moby1,spritex,spritey);
		}
		if (mob9 === 1) { 
			image(img2,mobx9,moby1,spritex,spritey);
		}
		
		}
		
		// 2 ------------------
		if (a1 == 1) {
			
		if (mob10 === 1) { 
			image(img5,mobx10,moby2,spritex,spritey);
		}
		if (mob11 === 1) { 
			image(img5,mobx11,moby2,spritex,spritey);
		}
		if (mob12 === 1) { 
			image(img5,mobx12,moby2,spritex,spritey);
		}
		if (mob13 === 1) { 
			image(img5,mobx13,moby2,spritex,spritey);
		}
		if (mob14 === 1) { 
			image(img5,mobx14,moby2,spritex,spritey);
		}
		if (mob15 === 1) { 
			image(img5,mobx15,moby2,spritex,spritey);
		}
		if (mob16 === 1) { 
			image(img5,mobx16,moby2,spritex,spritey);
		}
		if (mob17 === 1) { 
			image(img5,mobx17,moby2,spritex,spritey);
		}
		if (mob18 === 1) {
			image(img5,mobx18,moby2,spritex,spritey);
		}
		
		} else {
			
		if (mob10 === 1) { 
			image(img6,mobx10,moby2,spritex,spritey);
		}
		if (mob11 === 1) { 
			image(img6,mobx11,moby2,spritex,spritey);
		}
		if (mob12 === 1) { 
			image(img6,mobx12,moby2,spritex,spritey);
		}
		if (mob13 === 1) { 
			image(img6,mobx13,moby2,spritex,spritey);
		}
		if (mob14 === 1) { 
			image(img6,mobx14,moby2,spritex,spritey);
		}
		if (mob15 === 1) { 
			image(img6,mobx15,moby2,spritex,spritey);
		}
		if (mob16 === 1) { 
			image(img6,mobx16,moby2,spritex,spritey);
		}
		if (mob17 === 1) { 
			image(img6,mobx17,moby2,spritex,spritey);
		}
		if (mob18 === 1) {
			image(img6,mobx18,moby2,spritex,spritey);
		}
		
		}
		
		// 3 ------------------
		if (a1 == 1) {

		if (mob19 === 1) {
		image(img3,mobx19,moby3,spritex,spritey);
		}
		if (mob20 === 1) {
		image(img3,mobx20,moby3,spritex,spritey);
		}
		if (mob21 === 1) {
		image(img3,mobx21,moby3,spritex,spritey);
		}
		if (mob22 === 1) {
	    image(img3,mobx22,moby3,spritex,spritey);
		}
		if (mob23 === 1) {
		image(img3,mobx23,moby3,spritex,spritey);
		}
		if (mob24 === 1) {
		image(img3,mobx24,moby3,spritex,spritey);
		}
		if (mob25 === 1) {
	    image(img3,mobx25,moby3,spritex,spritey);
		}
		if (mob26 === 1) {
		image(img3,mobx26,moby3,spritex,spritey);
		}
		if (mob27 === 1) {
		image(img3,mobx27,moby3,spritex,spritey);
        }
		
		} else {

		if (mob19 === 1) {
		image(img4,mobx19,moby3,spritex,spritey);
		}
		if (mob20 === 1) {
		image(img4,mobx20,moby3,spritex,spritey);
		}
		if (mob21 === 1) {
		image(img4,mobx21,moby3,spritex,spritey);
		}
		if (mob22 === 1) {
	    image(img4,mobx22,moby3,spritex,spritey);
		}
		if (mob23 === 1) {
		image(img4,mobx23,moby3,spritex,spritey);
		}
		if (mob24 === 1) {
		image(img4,mobx24,moby3,spritex,spritey);
		}
		if (mob25 === 1) {
	    image(img4,mobx25,moby3,spritex,spritey);
		}
		if (mob26 === 1) {
		image(img4,mobx26,moby3,spritex,spritey);
		}
		if (mob27 === 1) {
		image(img4,mobx27,moby3,spritex,spritey);
        }
		
		}
	}
   }
