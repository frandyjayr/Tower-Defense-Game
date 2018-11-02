game.inGameMenu = me.Container.extend({
	init: function (){
      	// super constructor
    	this._super(me.Container, "init", [0, 0, 0, 0]);
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
      	// define the object z order
      	this.pos.z = 4;
		this.pointerPosition = game.data.gameScreenEndPosY / 2 - 20;
		this.maxTopOption = this.pointerPosition;
		this.menuOptions = 2;
		this.maxBottomOption = this.pointerPosition + (30 * this.menuOptions);
		this.currentTime = 0;
		this.moveTime = 0.2;
		this.continueLocation = game.data.gameScreenEndPosY / 2 - 20;
		this.mainMenuLocation = game.data.gameScreenEndPosY / 2 + 10;
		this.moved = false;
		this.lastPressedKey;
   	},

   	// output something in the console
   	// when the object is clicked
   	update: function (time)
   	{
		this.handleMenu();
      	return true;
   	},
	
	handleMenu: function() {
		this.toggleMenu();
		this.cycleMenuOptions();
		this.chooseMenuOption();
	},
	
	cycleMenuOptions: function() {
		if (me.input.isKeyPressed("u") && game.data.menuOpened && this.moved === false) {
			this.lastPressedKey = 'UP';
			this.changePointerLocation("UP");
		} else if (me.input.isKeyPressed("d") && game.data.menuOpened && this.moved === false) {
			this.lastPressedKey = 'DOWN'
			this.changePointerLocation("DOWN");
		}	
		
		if (me.input.isKeyPressed("u") === false && this.lastPressedKey === "UP") {
			this.moved = false;
		} else if (me.input.isKeyPressed("d") === false && this.lastPressedKey === "DOWN") {
			this.moved = false;
		}		
	},
	
	toggleMenu: function() {
		if (me.input.isKeyPressed("M")) {
			game.data.menuOpened = true;
			this.unbindGameKeys();
		} else if (me.input.isKeyPressed("exit")) {	
			game.data.menuOpened = false;
		}		
	},
	
	chooseMenuOption: function() {
		if (game.data.menuOpened) {
			if (me.input.isKeyPressed("confirm") && this.pointerPosition === this.continueLocation) {
				game.data.menuOpened = false;
				this.rebindGameKeys();
			} else if (me.input.isKeyPressed("confirm") && this.pointerPosition === this.mainMenuLocation) {
				game.data.menuOpened = false;
        		me.state.change(me.state.MENU);
			}
		}				
	},
	
	draw: function(renderer) {
		this._super(me.Container, "draw", [renderer]);
		
		if (game.data.menuOpened) {
			renderer.setColor("#67542B");
			renderer.fillRect(game.data.gameScreenEndPosX / 2 - 160 / 2 + 32, game.data.gameScreenEndPosY / 2 - 192 / 2, 160, 192);		

			renderer.setColor("#c0ab58");
			renderer.fillRect(game.data.gameScreenEndPosX / 2 - 160 / 2 + 32 +2.5, game.data.gameScreenEndPosY / 2 - 192 / 2 + 2.5, 155, 187);


			renderer.setColor("#00000");
			renderer.fillRect(game.data.gameScreenEndPosX / 2 - 160 / 2 + 32 +2.5, game.data.gameScreenEndPosY / 2 - 192 / 2 + 2.5, 155, 187);

			this.font.resize(1);
			this.font.draw(renderer, "MENU",  game.data.gameScreenEndPosX / 2 - 10, game.data.gameScreenEndPosY / 2 - 70);

			// Menu Options
			this.font.resize(0.5);
			this.font.draw(renderer, "CONTINUE",  game.data.gameScreenEndPosX / 2 - 20, game.data.gameScreenEndPosY / 2 - 20);
			this.font.draw(renderer, "MAIN MENU",  game.data.gameScreenEndPosX / 2 - 20, game.data.gameScreenEndPosY / 2 + 10);

			this.font.draw(renderer, ">",  game.data.gameScreenEndPosX / 2 - 40, this.pointerPosition);
		}
		
	},
	
	changePointerLocation(direction) {
		if (this.moved === false) {
			switch (direction) {
				case "UP":
					if (this.pointerPosition === this.continueLocation) {
						this.pointerPosition = this.mainMenuLocation;
					} else if (this.pointerPosition === this.mainMenuLocation) {
						this.pointerPosition = this.continueLocation
					}
					break;
				case "DOWN":
					if (this.pointerPosition === this.continueLocation) {
						this.pointerPosition = this.mainMenuLocation
					} else if (this.pointerPosition === this.mainMenuLocation) {
						this.pointerPosition = this.continueLocation;
					}
					break;
			}
			this.moved = true;
		}

	},
	
	unbindGameKeys: function() {		
		me.input.unbindKey(me.input.KEY.ENTER);
		me.input.unbindKey(me.input.KEY.ESC);
		me.input.unbindKey(me.input.KEY.Q);
		me.input.unbindKey(me.input.KEY.W);
		me.input.unbindKey(me.input.KEY.E);
		me.input.unbindKey(me.input.KEY.R);
		me.input.unbindKey(me.input.KEY.P);
		me.input.unbindKey(me.input.KEY.LEFT);
		me.input.unbindKey(me.input.KEY.RIGHT);
		me.input.unbindKey(me.input.KEY.UP);
		me.input.unbindKey(me.input.KEY.DOWN);
		me.input.bindKey(me.input.KEY.ESC, "exit");		
		me.input.bindKey(me.input.KEY.ENTER, "confirm");		
		me.input.bindKey(me.input.KEY.UP, "u");		
		me.input.bindKey(me.input.KEY.DOWN, "d");			
	},
	
	rebindGameKeys: function() {
		me.input.unbindKey(me.input.KEY.ESC);
		me.input.unbindKey(me.input.KEY.ENTER);
		me.input.unbindKey(me.input.KEY.UP);
		me.input.unbindKey(me.input.KEY.DOWN);
		me.input.bindKey(me.input.KEY.ENTER, "enter");	
		me.input.bindKey(me.input.KEY.ESC, "esc");	
		me.input.bindKey(me.input.KEY.Q, "Q");	
		me.input.bindKey(me.input.KEY.W, "W");	
		me.input.bindKey(me.input.KEY.E, "E");	
		me.input.bindKey(me.input.KEY.R, "R");	
		me.input.bindKey(me.input.KEY.P, "P");	
		me.input.bindKey(me.input.KEY.LEFT, "left");	
		me.input.bindKey(me.input.KEY.RIGHT, "right");	
		me.input.bindKey(me.input.KEY.UP, "up");	
		me.input.bindKey(me.input.KEY.DOWN, "down");		
	}
	
});