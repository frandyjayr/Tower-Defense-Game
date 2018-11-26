game.TowerManager = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
		this.tower;
		this.spawnTowerActive = false;
		this.insufficientFunds = false;
		this.insufficientFundsProc = false;
  	},
	
	update: function (dt) {
    	this._super(me.Container, "update", [dt]);
		
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
			this.tower = new game.SpawnTower(game.data.lastPlacedTowerX, game.data.lastPlacedTowerY, {image: "towerEarth", width: 224, height: 160, missileType: "FINALUPGRADE"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
			game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("esc") || me.input.isKeyPressed("enter")) {
			this.spawnTowerActive = false;
			game.data.towerButtonPressed = false;

		}
		
		if ((me.input.isKeyPressed("Q") && game.data.gold < game.data.towerAirCost) ||
		   	(me.input.isKeyPressed("R") && game.data.gold < game.data.towerEarthCost) ||
		    (me.input.isKeyPressed("E") && game.data.gold < game.data.towerFireCost) ||
			(me.input.isKeyPressed("W") && game.data.gold < game.data.towerWaterCost) ||
			(me.input.isKeyPressed("T") && game.data.gold < game.data.finalUpgradeCost)) {
				this.insufficientFunds = true;

		}
		
		return true;
  	},

	draw: function(renderer) {
		this._super(me.Container, "draw", [renderer]);

		
		if (this.insufficientFunds) {
			this.font.fillStyle = '#ff0000'
        	this.font.draw(renderer, "Insufficient Funds!", 110, 150);
			var that = this;
			setTimeout(function() {
				that.insufficientFunds = false;
			}, 500)
		}
		
	},
	
	onDestroyEvent: function() {
		game.data.towerButtonPressed = false;
	}
  
});

