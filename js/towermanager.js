game.TowerManager = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		this.towerAir;
		this.spawnTowerActive = false;
  	},
	
	update: function (dt) {
    	this._super(me.Container, "update", [dt]);
		
		if (me.input.isKeyPressed("Q") && this.spawnTowerActive === false) {
			this.towerAir = new game.SpawnTowerAir(0,0);
			me.game.world.addChild(this.towerAir);
			this.spawnTowerActive = true;
		} else if (me.input.isKeyPressed("esc") || me.input.isKeyPressed("enter")) {
			this.spawnTowerActive = false;
		}
		
		return true;
  	},

  
});

