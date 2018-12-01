game.TowerManager = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		
		// Instantiate Boolean Variables
		this.spawnTowerActive = false;
		this.insufficientFunds = false;
		this.insufficientFundsProc = false;		
		
		// Instantiate Font
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
		
		// Instatiate misc
		this.tower;

  	},
	
	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */	
	update: function (dt) {
    	this._super(me.Container, "update", [dt]);
		this.chooseSpawnTower();
		this.checkSufficientFunds();
		
		return true;
  	},
	
	/*
	 * The chooseSpawnTower function is used to spawn the respective spawn tower the user
	 * wants to place on the board. This tower is not placed until the user pressed the
	 * enter key. It can be canceled by pressing the esc key.
	 */
	chooseSpawnTower: function() {
		if (me.input.isKeyPressed("Q") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerAirCost && game.data.towerButtonPressed === false) {
			this.tower = new game.SpawnTower(game.data.lastPlacedTowerX, game.data.lastPlacedTowerY, {image: "towerAir", width: 224, height: 160, missileType: "AIR"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
      		game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("W") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerWaterCost && game.data.towerButtonPressed === false) {
			this.tower = new game.SpawnTower(game.data.lastPlacedTowerX, game.data.lastPlacedTowerY, {image: "towerWater", width: 224, height: 160, missileType: "WATER"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
      		game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("E") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerFireCost && game.data.towerButtonPressed === false) {
			this.tower = new game.SpawnTower(game.data.lastPlacedTowerX, game.data.lastPlacedTowerY, {image: "towerFire", width: 224, height: 160, missileType: "FIRE"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
      		game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("R") && this.spawnTowerActive === false && game.data.waveStart ===	false && game.data.gold >= game.data.towerEarthCost && game.data.towerButtonPressed === false) {
			this.tower = new game.SpawnTower(game.data.lastPlacedTowerX, game.data.lastPlacedTowerY, {image: "towerEarth", width: 224, height: 160, missileType: "EARTH"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
			game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("T") && this.spawnTowerActive === false && game.data.waveStart ===	false && game.data.gold >= game.data.finalUpgradeCost && game.data.towerButtonPressed === false) {
			this.tower = new game.SpawnTower(game.data.lastPlacedTowerX, game.data.lastPlacedTowerY, {image: "towerUpgrade", width: 224, height: 160, missileType: "FINALUPGRADE"});
			me.game.world.addChild(this.tower, 5);

			this.spawnTowerActive = true;
			game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("esc") || me.input.isKeyPressed("enter")) {
			this.spawnTowerActive = false;
			game.data.towerButtonPressed = false;

		}		
	},
		
	/*
	 * The checkSufficientFunds function is used to check if the user has enough gold
	 * to spawn any of the towers or the final tower upgrade b changing a boolean variable
	 * to indicate, respectively. 
	 */
	checkSufficientFunds: function() {
		if ((me.input.isKeyPressed("Q") && game.data.gold < game.data.towerAirCost) ||
		(me.input.isKeyPressed("R") && game.data.gold < game.data.towerEarthCost) ||
		(me.input.isKeyPressed("E") && game.data.gold < game.data.towerFireCost) ||
		(me.input.isKeyPressed("W") && game.data.gold < game.data.towerWaterCost) ||
		(me.input.isKeyPressed("T") && game.data.gold < game.data.finalUpgradeCost)) {
			this.insufficientFunds = true;

		}	
	},
	
	/*
	 * The draw function is a built in function from the MelonJS framework/engine
	 * that will be automatically called. It renders all necessary entities or
	 * UI content.
	 */	
	draw: function(renderer) {
		this._super(me.Container, "draw", [renderer]);
		
		if (this.insufficientFunds) {
			this.font.fillStyle = '#ff0000'
        	this.font.draw(renderer, "Insufficient Funds!", 110, 150);
			var that = this;
			// Fade the text effect
			setTimeout(function() {
				that.insufficientFunds = false;
			}, 500)
		}
		
	},
	
	/* 
	 * The onDestroyEvent is called once this object is destroyed
	 */
	onDestroyEvent: function() {
		game.data.towerButtonPressed = false;
	}
  
});

