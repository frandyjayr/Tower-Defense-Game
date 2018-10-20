game.TowerAir = me.Entity.extend({
	init: function (x, y) {
    	this._super(me.Entity, "init", [x, y, {
        	image : "towerAir",
            width : 224,
          	height : 160
      	}]);
		this.body.collisionType = me.collision.types.PLAYER_OBJECT;
		this.currentTime = me.timer.getTime() / 1000;
		this.spawnTime = 2;
		this.newMissile;
	},
	
	update: function (dt) {
    	this._super(me.Entity, "update", [dt]);
		me.collision.check(this);
		
		return true;
  	},
	
	onCollision: function (res, other) {
		if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
			var newTime = me.timer.getTime() / 1000;
			if (newTime >= this.currentTime + this.spawnTime) {
				this.newMissile = new game.MissileAir(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3);
				this.newMissile.getTarget(other);
				me.game.world.addChild(this.newMissile, 2);
				this.currentTime = newTime;
			}
			this.newMissile.getTarget(other);
		}
		return false;
	}
});


// http://www.html5gamedevs.com/topic/30266-can-we-change-collision-check-with-and-height-of-the-image/

// http://melonjs.github.io/tutorial-space-invaders/#part3