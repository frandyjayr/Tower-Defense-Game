game.TowerManager = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		this.towerAir;
		this.spawnTowerActive = false;
  	},
	
	update: function (dt) {
    	this._super(me.Container, "update", [dt]);
		
		if (me.input.isKeyPressed("Q") && this.spawnTowerActive === false && game.data.waveStart === false && game.data.gold >= game.data.towerAirCost) {
			this.towerAir = new game.SpawnTowerAir(0,0);
			me.game.world.addChild(this.towerAir, 2);
			this.spawnTowerActive = true;
			game.data.towerButtonPressed = true;
		} else if (me.input.isKeyPressed("esc") || me.input.isKeyPressed("enter")) {
			this.spawnTowerActive = false;
			game.data.towerButtonPressed = false;
		}
		
		return true;
  	},

  
});
