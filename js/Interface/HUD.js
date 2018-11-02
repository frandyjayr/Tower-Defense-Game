/**
 * The template of the code was derived from the MelonJS documentation
 and tutorial guide on how to add a basic HUD. 
 */
game.HUD = game.HUD || {};

game.HUD.Container = me.Container.extend({
	init: function () {
    	// call the constructor
    	this._super(me.Container, 'init');

		// persistent across level change
		this.isPersistent = true;

		// make sure we use screen coordinates
		this.floating = true;

		// give a name
		this.name = "HUD";
		me.game.world.addChild(me.pool.pull("buttonTower", game.data.utilityScreenStartPosX + 96, game.data.utilityScreenStartPosY + 32, "AIR"), 4);
		me.game.world.addChild(me.pool.pull("buttonTower", game.data.utilityScreenStartPosX + 96, game.data.utilityScreenStartPosY + 96, "WATER"), 4);
		me.game.world.addChild(me.pool.pull("buttonTower", game.data.utilityScreenStartPosX + 96, game.data.utilityScreenStartPosY + 160, "FIRE"), 4);
		me.game.world.addChild(me.pool.pull("buttonTower", game.data.utilityScreenStartPosX + 96, game.data.utilityScreenStartPosY + 225, "EARTH"), 4);

		
		// add our child score object
		this.addChild(new game.HUD.ScoreItem(-10, -10));
  	}
});

/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend({
  /**
   * constructor
   */
	init : function (x, y) {
		// call the parent constructor
		// (size does not matter here)
		this._super(me.Renderable, 'init', [x, y, 0, 0]);

		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));

		// font placement
		this.font.textAlign = 'right';
		this.font.textBaseline = 'bottom';

		// local copy of the global score
		this.gold = game.data.startingGold;
		this.health = game.data.startingHealth;
		this.font.resize(0.5);	
  	},

	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */
	update : function (dt) {
		this.updateUI();
		return false;
  	},

	/*
	 * The updateUI function updates the UI of the health and gold only
	 * if the health or gold is different from the last frame.
	 */
	updateUI: function() {
		// return true if the score has been updated
		if (this.health !== game.data.health) {
		 	 this.health = game.data.health;
		  	return true;
		}
		if (this.gold !== game.data.gold) {
			this.gold = game.data.gold;
			return true;
		}		
	},

	/*
	 * The renderGold function renders and updates the user's amount of gold
	 * they have in the game.
	 */
	renderGold: function(renderer) {
		// Render gold
		this.font.resize(0.5);
		this.font.draw(renderer, "Gold: ", me.game.viewport.width + this.pos.x - 62, me.game.viewport.height + this.pos.y - 96); 
		this.font.draw(renderer, game.data.gold, me.game.viewport.width + this.pos.x + 5, me.game.viewport.height + this.pos.y - 96); 			
	},

	/*
	 * The renderScore function renders and updates the user's total game score
	 * they have in the game
	 */
	renderScore: function(renderer) {
		// Render score
		this.font.resize(0.5);
		this.font.draw(renderer, "Score: ", me.game.viewport.width + this.pos.x - 50, me.game.viewport.height + this.pos.y - 64); 
		this.font.draw(renderer, game.data.score, me.game.viewport.width + this.pos.x + 5, me.game.viewport.height + this.pos.y - 64); 			
	},

	/*
	 * The renderLives function renders and updates the number of lives the user has
	 * in the game.
	 */
	renderLives: function(renderer) {
		// Render user lives
		this.font.resize(0.5);
    	this.font.draw(renderer, "Lives: ", me.game.viewport.width + this.pos.x - 52, me.game.viewport.height + this.pos.y - 32);
		this.font.draw(renderer, game.data.health, me.game.viewport.width + this.pos.x - 10, me.game.viewport.height + this.pos.y - 32);
	},
	
	/*
	 * The renderWaveNumber function renders the current wave number out of 10 that the
	 * user is on in the current game.
	 */
	renderWaveNumber: function(renderer) {
		// Render current wave number
		this.font.resize(0.5);
		this.font.draw(renderer, "Wave: ", me.game.viewport.width + this.pos.x - 60, me.game.viewport.height + this.pos.y); 
		this.font.draw(renderer, game.data.waveNumber + "/10", me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y); 		
	},
	
	/*
	 * The renderWaveIntro function renders the display message at the beginning of
	 * the game to remind users to start placing towers and to press "P" to start the
	 * game
	 */
	renderWaveIntro: function(renderer) {
		// Render Wave Number
		if (game.data.waveStart === false && game.data.preRoundHasStarted === false) {
			this.font.resize(1.5);
			this.font.draw(renderer, "Wave " + game.data.waveNumber, me.game.viewport.width / 2 + 50, me.game.viewport.height / 2);
			this.font.resize(0.6);
			this.font.draw(renderer, "Prepare Your Towers and Then" , me.game.viewport.width / 2 + 130, me.game.viewport.height / 2 + 35);			
			this.font.draw(renderer, "Press 'P' to Start Wave " + game.data.waveNumber, me.game.viewport.width / 2 + 110, me.game.viewport.height / 2 + 55);			
		}		
	},
	
	/*
	 * The renderButtons functions renders the towers on the sidebar to show the users
	 * what buttons spawn what towers.
	 */
	renderButtons: function(renderer) {
		// Render Q
		this.font.resize(1);
		this.font.draw(renderer, "Q", game.data.utilityScreenStartPosX + 75, game.data.utilityScreenStartPosY + 55); 
		
		// Render W
		this.font.resize(1);
		this.font.draw(renderer, "W", game.data.utilityScreenStartPosX + 75, game.data.utilityScreenStartPosY + 120); 	
		
		// Render E
		this.font.resize(1);
		this.font.draw(renderer, "E", game.data.utilityScreenStartPosX + 75, game.data.utilityScreenStartPosY + 185); 	
		
		// Render R
		this.font.resize(1);
		this.font.draw(renderer, "R", game.data.utilityScreenStartPosX + 75, game.data.utilityScreenStartPosY + 250); 
	},
	
	/*
	 * The draw function is a built in function from the MelonJS framework/engine
	 * that will be automatically called. It renders all necessary entities or
	 * UI content.
	 */	
	draw : function (renderer) {
		this.renderGold(renderer);
		this.renderScore(renderer);
		this.renderLives(renderer);
		this.renderWaveNumber(renderer);
		this.renderWaveIntro(renderer);
		this.renderButtons(renderer);
  	}
});