// http://www.html5gamedevs.com/topic/30266-can-we-change-collision-check-with-and-height-of-the-image/
// http://melonjs.github.io/tutorial-space-invaders/#part3

game.Tower = me.Entity.extend({
	init: function (x, y, settings, missileType) {
    	this._super(me.Entity, "init", [x, y, settings]);
		this.body.collisionType = me.collision.types.PLAYER_OBJECT;
		this.currentTime = me.timer.getTime() / 1000;
		this.spawnTime = 2;
		this.newMissile;
		this.towerOn = false;
		this.missileType = missileType;
		this.towerType = missileType;
		this.towerCost;
		this.chooseTowerType();
	},
	
	update: function (dt) {
		
		this._super(me.Entity, "update", [dt]);
		me.collision.check(this);			
		return true;
  	},
	
	buyTower: function() {
		game.data.gold -= this.towerCost;	
	},
	
	toggleTower: function () {
		if (this.towerOn) {
			this.towerOn = false;
		} else {
			this.towerOn = true;
		}
	},
	
	chooseTowerType: function() {
		if (this.towerType === "AIR") {
			this.towerCost = game.data.towerAirCost;
		} else if (this.towerType === "EARTH") {
			this.towerCost = game.data.towerEarthCost;
		} else if (this.towerType === "FIRE") {
			this.towerCost = game.data.towerFireCost;
		} else if (this.towerType === "WATER") {
			this.towerCost = game.data.towerWaterCost;
		}
	},
	
	spawnMissile: function(other) {
		if (this.missileType === 'AIR') {
			this.newMissile = new game.MissileAir(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3);
		} else if (this.missileType === 'EARTH') {
			this.newMissile = new game.MissileEarth(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3);			
		} else if (this.missileType === 'FIRE') {
			this.newMissile = new game.MissileFire(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3);			
		} else if (this.missileType === 'WATER') {
			this.newMissile = new game.MissileWater(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3);			
		}   
		this.newMissile.getTarget(other);
		me.game.world.addChild(this.newMissile, 2);	
	},
	
	onCollision: function (res, other) {
		if (other.body.collisionType === me.collision.types.ENEMY_OBJECT && this.towerOn) {
			var newTime = me.timer.getTime() / 1000;
			if (newTime >= this.currentTime + this.spawnTime) {
				this.spawnMissile(other);
				this.currentTime = newTime;
			}
			// Prevents missile from being created if enemy dies or spawns too fast to register
			if (typeof something !== "undefined") {
				this.newMissile.getTarget(other);
			}

		}				
		
		return false;
	}
});