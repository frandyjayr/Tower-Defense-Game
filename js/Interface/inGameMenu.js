game.inGameMenu = me.Container.extend({
	init: function (){
      	// super constructor
    	this._super(me.Container, "init", [0, 0, 0, 0]);
		
		// Instantiate font variables
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
	
		// Instantiate button location variables
		this.continueLocation = game.data.gameScreenEndPosY / 2 - 20;
		this.mainMenuLocation = game.data.gameScreenEndPosY / 2 + 10;
		this.pointerPosition = game.data.gameScreenEndPosY / 2 - 20;	
		
		// Instantiate misc variables
		this.moved = false;
		this.lastPressedKey;	
      	this.pos.z = 4;
		this.menuOptions = 2;
   	},

	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */
   	update: function (time)
   	{
		this.handleMenu();
      	return true;
   	},

	/*
	 * The handleMenu function handles the entire menu process. It will toggle
	 * the menu to open and close, allow the user to cycle through menu options,
	 * and allow the user to select workable menu options.
	 */
	handleMenu: function() {
		this.toggleMenu();
		this.cycleMenuOptions();
		this.chooseMenuOption();
	},
	
	/*
	 * The cycleMenuOptions function allows the user to cycle through the menu options
	 * by updating the pointer based on where the user chooses with the up and down
	 * arrow keys.
	 */
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

	/*
	 * The toggleMenu function allows the user to open and close the menu by pressing "M"
	 * to open the menu and pressing either "M" or "esc" to close the menu.
	 */
	toggleMenu: function() {
		if (me.input.isKeyPressed("M")) {
			game.data.menuOpened = true;
			this.unbindGameKeys();
		} else if (me.input.isKeyPressed("exit") || me.input.isKeyPressed("em")) {	
			game.data.menuOpened = false;
			this.rebindGameKeys();
		}		
	},
	
	/*
	 * The chooseMenuOption function allows the user to select workable menu options
	 * by pressing the enter button on the currently selected menu option.
	 */
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

	/*
	 * The draw function is a built in function from the MelonJS framework/engine
	 * that will be automatically called. It renders all necessary entities or
	 * UI content.
	 */	
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

	/*
	 * The changePointerLocation function updates the menu pointer to show which
	 * menu option is currently selected by render a simple ">" arrow next to the
	 * chosen menu option.
	 */
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
	
	/*
	 * The unbindGameKes unbinds the game keys from the play.js file. This is to
	 * ensure that the user cannot interact with the tower development or game controls
	 * in general while the menu is open.
	 */
	unbindGameKeys: function() {		
		me.input.unbindKey(me.input.KEY.ENTER);
		me.input.unbindKey(me.input.KEY.ESC);
		me.input.unbindKey(me.input.KEY.Q);
		me.input.unbindKey(me.input.KEY.W);
		me.input.unbindKey(me.input.KEY.E);
		me.input.unbindKey(me.input.KEY.R);
		me.input.unbindKey(me.input.KEY.P);
		me.input.unbindKey(me.input.KEY.M);
		me.input.unbindKey(me.input.KEY.LEFT);
		me.input.unbindKey(me.input.KEY.RIGHT);
		me.input.unbindKey(me.input.KEY.UP);
		me.input.unbindKey(me.input.KEY.DOWN);
		me.input.bindKey(me.input.KEY.ESC, "exit");		
		me.input.bindKey(me.input.KEY.ENTER, "confirm");		
		me.input.bindKey(me.input.KEY.UP, "u");		
		me.input.bindKey(me.input.KEY.DOWN, "d");			
		me.input.bindKey(me.input.KEY.M, "em");			
	},
	
	/*
	 * The rebindGameKeys function rebinds the old keys as called in the play.js file
	 * to give back game control to the user when the in game menu is closed.
	 */	
	rebindGameKeys: function() {
		me.input.unbindKey(me.input.KEY.ESC);
		me.input.unbindKey(me.input.KEY.ENTER);
		me.input.unbindKey(me.input.KEY.UP);
		me.input.unbindKey(me.input.KEY.DOWN);
		me.input.unbindKey(me.input.KEY.M);
		me.input.bindKey(me.input.KEY.ENTER, "enter");	
		me.input.bindKey(me.input.KEY.ESC, "esc");	
		me.input.bindKey(me.input.KEY.Q, "Q");	
		me.input.bindKey(me.input.KEY.W, "W");	
		me.input.bindKey(me.input.KEY.E, "E");	
		me.input.bindKey(me.input.KEY.R, "R");	
		me.input.bindKey(me.input.KEY.P, "P");	
		me.input.bindKey(me.input.KEY.M, "M");	
		me.input.bindKey(me.input.KEY.LEFT, "left");	
		me.input.bindKey(me.input.KEY.RIGHT, "right");	
		me.input.bindKey(me.input.KEY.UP, "up");	
		me.input.bindKey(me.input.KEY.DOWN, "down");		
	}
	
});