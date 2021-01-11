    // fenetre de travail
	function setup() {
		createCanvas(1346, 634);
		background(255);
	}

   // load img
   function preload() {
	    img0 = loadImage('picture0.png');

		img1 = loadImage('picture1.png');
		img2 = loadImage('picture2.png');

		img3 = loadImage('picture3.png');
		img4 = loadImage('picture4.png');

		img5 = loadImage('picture5.png');
		img6 = loadImage('picture6.png');

		img7 = loadImage('fondHD.jpeg');
		img8 = loadImage('play.png');

    }

	// fonction tir si cible touchée
	function endTir(x,y) {
		tir.statue = 0;
		score += 50;
		vitesse += 0.1;
	}


	// fonction détection tir -> mob
	function detectTir() {

		for(var i=0; i < oMob.length; i++){

			oMob[i].pos_X = oMob[i].posX + spriteX;
			oMob[i].pos_Y = oMob[i].posY + spriteY;

			if (oMob[i].statue === "Alive") {
				if ((tir.posX > oMob[i].posX && tir.posX < oMob[i].pos_X)) {
					if ((tir.posY > oMob[i].posY && tir.posY < oMob[i].pos_Y)) {
						oMob[i].statue = "Dead";
						endTir(oMob[i].posX,oMob[i].posY);
					}
				}
			}

		}

	}

	function plusY() {

		for(var i=0; i < oMob.length; i++){
			oMob[i].posY += 10;
			if (oMob[i].statue === "Alive") { if (oMob[i].posY >= 620) { alert("Perdu !") } }
		}

	}

	function plusX() {

		for(var i=0; i < oMob.length; i++){
			oMob[i].posX += vitesse;
		}

	}

	function moinsX() {

		for(var i=0; i < oMob.length; i++){
			oMob[i].posX -= vitesse;
		}

	}

	// random
	function Random(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	// colision
	function Colision(x1, y1, l1, h1, x2, y2, l2, h2) {

		if (x1 < x2 + l2 && x1 + l1 > x2 && y1 < y2 + h2 && h1 + y1 > y2) {
		    return 1;
		} else {
			return 0;
		}

	}


	// déclaration des variable ---------------------------------------------

	var spriteX = 62.5;
	var spriteY = 93.75;

	var vitesse = 1.5;
	var score = 0;

	var test1 = 0;
    var value = 0;

	// vaisseau et tir
    var tir = 0;
	var tirX = 550;
	var tirY = 520;

	// ---------------------------------------------

	// vaisseau
	var vaisseau = {
		posX : 550,
		posY : 520,
		largeur : 100,
		hauteur : 100,
    };

	// tir
	var tir = {
		statue : 0,
		posX : vaisseau.posX + 40,
		posY : 520,
		largeur : 8,
		hauteur : 15,
    };

	// objet interface
	function Interface(a ,b, c, d){
	    this.posX = a;
        this.posY = b;
		this.longeur = c;
        this.largeur = d;

		this.pos_X = a + c;
        this.pos_Y = b + d;
	}

	var Play = new Interface(1223,50,100,70);

	// objet mob
	var oMob = [];

	function Mob(a, b, c, d, e){
        this.statue = a;

        this.image = b;
		this.anim = c;

        this.posX = d;
		this.posY = e;

		this.pos_X = d + spriteX;
		this.pos_Y = e + spriteY;

		oMob.push(this);
    }

    var x = 10;
    var y = 75;

	var sprite1 = 1;
	var sprite2 = 2;

    for(i = 0; i < 3; i++){
		for(j = 0; j < 9; j++){
			new Mob("Alive", sprite1, sprite2, x, y);
			x += 100;
		}
		y += 100;
		x -= 900;
		sprite1 += 2;
		sprite2 += 2;
    }

	// objet mob -> tir
	var mTir = [];

	function mobTir(a ,b){
	    this.posX = a;
        this.posY = b;

		mTir.push(this);
	}

	// ---------------------------------------------

	//fonction clic
    function mouseClicked() {

		if ((mouseX > Play.posX && mouseX < Play.pos_X)) {
			if ((mouseY > Play.posY && mouseY < Play.pos_Y)) {

				if (value === 0) {
					value = 255;
				} else {
					value = 0;
				}

		    }
	    }

    }

	//fonction touche

	function keyTyped() {

		if (key === ' ') {
			if (tir.statue === 0) {
				tir.posX = vaisseau.posX + 40;
				tir.posY = 520;

				tir.statue = 1;
			}
		}

    }

	// fonction draw
	function draw() {

		// ------------------ interface
		fill(255);
		rect(0, 0, 1345, 633);

		fill(0)
		line(1200,0,1200,633);

		fill(value);
		rect(Play.posX, Play.posY, Play.longeur, Play.largeur, 5, 5, 5, 5);

		fill(255);
		textSize(32);
		text('Play', 1240, 95)

		if (value === 255) {

			image(img7,0,0,1200, 633);

		fill(0);
		textSize(25);
		text('Score :', 1230, 195)
		fill(0,0,255);
		text(score, 1230, 240)

			if (keyIsDown(LEFT_ARROW)) {
				if (vaisseau.posX >= 10) {
					vaisseau.posX = vaisseau.posX - 5;
				}
			}

			if (keyIsDown(RIGHT_ARROW)) {
				if (vaisseau.posX <= 1099) {
					vaisseau.posX = vaisseau.posX + 5;
				}
			}

			fill(0);
			textSize(25);

			text("Pause", 1237, 95)

			image(img0,vaisseau.posX,vaisseau.posY,vaisseau.largeur,vaisseau.hauteur);

			// tir vaisseau ------------------

			if (tir.statue === 1) {
				if (tir.posY >= 10) {
					tir.posY -= 15;

					fill(255, 255, 0);
					rect(tir.posX, tir.posY, tir.largeur, tir.hauteur);

					detectTir();

				} else {
					tir.statue = 0;
				}
			}

			// tir mob ------------------

			for(var i=0; i < oMob.length; i++){

				if (oMob[i].statue === "Alive") {
					var a = Random(1250 - (vitesse * 300));
					var v = a;
					if (v === 1) {
						new mobTir(oMob[i].posX + (spriteX / 2), oMob[i].posY);
					}

				}

			}

			for(var i=0; i < mTir.length; i++){
				mTir[i].posY += 3;

				fill(255, 255, 0);
				rect(mTir[i].posX, mTir[i].posY, 8, 15);

				var c = Colision(mTir[i].posX, mTir[i].posY, 8, 15, vaisseau.posX + 25, vaisseau.posY + 25, vaisseau.largeur - 40, vaisseau.hauteur - 40);
				if (c === 1) { alert("Game Over") }

				if (mTir[i].posY >= 640) { mTir.splice(i,1); } else {

					var c = Colision(mTir[i].posX, mTir[i].posY, 8, 15, tir.posX, tir.posY, tir.largeur, tir.hauteur);
					if (c === 1) {
						mTir.splice(i,1);
						tir.statue = 0;
					}

				}
			}

			// xmin décal
			var a = 0;
			var b = 9;
			var c = 18;
			var xMin = 10;

			for(var i=0; i < 9; i++){

				if (oMob[a].statue === "Dead") {
					if (oMob[b].statue === "Dead") {
						if (oMob[c].statue === "Dead") {
							xMin -= 100;
							a += 1;
							b += 1;
							c += 1;
						}
					}
				}

			}

			// xmax décal
			var a = 8;
			var b = 17;
			var c = 26;
			var xMax = 1120;

			for(var i=0; i < 9; i++){

				if (oMob[a].statue === "Dead") {
					if (oMob[b].statue === "Dead") {
						if (oMob[c].statue === "Dead") {
							xMax += 100;
							a -= 1;
							b -= 1;
							c -= 1;
						}
					}
				}

			}

			// décal
			if (oMob[8].posX >= xMax) {
				test1 = 0;
				plusY();
			}
			if (oMob[0].posX <= xMin) {
				test1 = 1;
				plusY();
			}

			if (test1 === 1) {
			    plusX();
			} else {
				moinsX();
			}

			var monstre = 0;

			//affichage des mob
			for(var i=0; i < oMob.length; i++){

				if (oMob[i].statue === "Alive") {

					if (oMob[i].image === 1) {
						image(img1,oMob[i].posX,oMob[i].posY,spriteX,spriteY);
				    }

					if (oMob[i].image === 3) {
						image(img3,oMob[i].posX,oMob[i].posY,spriteX,spriteY);
				    }

					if (oMob[i].image === 5) {
						image(img5,oMob[i].posX,oMob[i].posY,spriteX,spriteY);
				    }

					var monstre = 1;
				}

			}

			if (monstre === 0) { alert("Gagner !") }



		} else {
			image(img8,0,0,1200, 633);
		}

	}
