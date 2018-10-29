game.TowerManager = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);

		this.tower;
		this.spawnTowerActive = false;
  	},
	
	update: function (dt) {
    	this._super(me.Container, "update", [dt]);
		
		if (me.input.isKeyPressed("Q") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerAirCost) {
			this.tower = new game.SpawnTower(0,0, {image: "towerAir", width: 224, height: 160, missileType: "AIR"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
      		game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("W") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerWaterCost) {
			this.tower = new game.SpawnTower(0,0, {image: "towerWater", width: 224, height: 160, missileType: "WATER"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
      		game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("E") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerFireCost) {
			this.tower = new game.SpawnTower(0,0, {image: "towerFire", width: 224, height: 160, missileType: "FIRE"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
      		game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("R") && this.spawnTowerActive === false && game.data.waveStart ===	false && game.data.gold >= game.data.towerEarthCost) {
			this.tower = new game.SpawnTower(0,0, {image: "towerEarth", width: 224, height: 160, missileType: "EARTH"});
			me.game.world.addChild(this.tower, 5);
			this.spawnTowerActive = true;
      		game.data.towerButtonPressed = true;
		}else if (me.input.isKeyPressed("esc") || me.input.isKeyPressed("enter")) {
			this.spawnTowerActive = false;
			game.data.towerButtonPressed = false;
		}
		
		return true;
  	},

  
});

