game.TowerManager = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		this.towerAir;
		this.towerWater;
		this.spawnTowerActive = false;
  	},
	
	update: function (dt) {
    	this._super(me.Container, "update", [dt]);
		
		if (me.input.isKeyPressed("Q") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerAirCost) {
			this.towerAir = new game.SpawnTowerAir(0,0);
			me.game.world.addChild(this.towerAir, 2);
			this.spawnTowerActive = true;
		} 
		
		if (me.input.isKeyPressed("W") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerWaterCost) {
			console.log("got here at least");
			this.towerWater = new game.SpawnTowerWater(0,0);
			me.game.world.addChild(this.towerWater, 3);
			this.spawnTowerActive = true;
		}

		else if (me.input.isKeyPressed("esc") || me.input.isKeyPressed("enter")) {
			this.spawnTowerActive = false;
		}
		
		return true;
  	},

  
});

