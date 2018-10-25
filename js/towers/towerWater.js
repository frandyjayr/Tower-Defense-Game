game.TowerWater = me.Entity.extend({
	init: function (x, y) {
    	this._super(me.Entity, "init", [x, y, {
        	image : "towerWater",
            width : 224,
          	height : 160
      	}]);
		this.body.collisionType = me.collision.types.PLAYER_OBJECT;
		this.currentTime = me.timer.getTime() / 1000;
		this.spawnTime = 4;
		this.newMissile;
		this.towerOn = false;
	},
	
	update: function (dt) {
		
		this._super(me.Entity, "update", [dt]);
		me.collision.check(this);			

		
		return true;
  	},
	
	buyTower: function() {
		game.data.gold -= game.me.data.towerWaterCost;	
	},
	
	toggleTower: function () {
		if (this.towerOn) {
			this.towerOn = false;
		} else {
			this.towerOn = true;
		}
	},
	
	buyTower: function() {
		game.data.gold -= game.data.towerWaterCost;
	},
	
	onCollision: function (res, other) {
		if (other.body.collisionType === me.collision.types.ENEMY_OBJECT && this.towerOn) {
			var newTime = me.timer.getTime() / 1000;
			if (newTime >= this.currentTime + this.spawnTime) {
				this.newMissile = new game.MissileWater(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3);
				this.newMissile.getTarget(other);
				me.game.world.addChild(this.newMissile, 2);
				this.currentTime = newTime;
			}
			this.newMissile.getTarget(other);
		}				
		
		return false;
	}
});