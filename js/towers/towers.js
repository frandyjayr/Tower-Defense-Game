// http://www.html5gamedevs.com/topic/30266-can-we-change-collision-check-with-and-height-of-the-image/
// http://melonjs.github.io/tutorial-space-invaders/#part3

game.Tower = me.Entity.extend({
	init: function (x, y, settings) {
    	this._super(me.Entity, "init", [x, y, settings]);
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
		this.body.collisionType = me.collision.types.PLAYER_OBJECT;
		this.currentTime = me.timer.getTime() / 1000;
		this.spawnTime;
		this.newMissile;
		this.missileDamage;
		this.towerOn = false;
		this.upgradeComplete;
		this.purchaseComplete;
		this.elementType = settings.missileType;
		this.towerCost;
		this.chooseTowerType();
		this.towerLevel = 1;
		
		console.log(settings.missileType)
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
			this.purchaseComplete = true;
		}
	},
	
	upgradeTower: function() {
		
		if (this.towerLevel < 4) {
			if (this.elementType === "AIR"){
				console.log("towerlevel was: " + this.towerLevel);
				this.spawnTime -= game.data.airTowerSpawnTimeReduction;
				this.missileDamage += game.data.airUpgradeDamage;
				this.towerLevel++;
				game.data.gold -= game.data.towerAirCost;
				this.upgradeComplete = true;
				console.log("towerlevel now is: " + this.towerLevel);
			} else if (this.elementType === "WATER"){
				this.spawnTime -= game.data.waterTowerSpawnTimeReduction;
				//this.missileDamage += 2;
				this.towerLevel++;
				game.data.gold -= game.data.towerWaterCost;
				this.upgradeComplete = true;
			} else if (this.elementType === "EARTH"){
				this.spawnTime -= game.data.earthTowerSpawnTimeReduction;;
				this.missileDamage += game.data.earthUpgradeDamage;
				this.towerLevel++;
				game.data.gold -= game.data.towerEarthCost;
				this.upgradeComplete = true;
			} else if (this.elementType === "FIRE"){
				this.spawnTime -= game.data.fireTowerSpawnTimeReduction;;
				this.missileDamage += game.data.fireUpgradeDamage;
				this.towerLevel++;
				game.data.gold -= game.data.towerFireCost;
				this.upgradeComplete = true;
			}
			
		}

		
	},

	upgradeTowerFinal: function() {
		if (this.towerLevel < 5) {
			if (this.elementType === "AIR"){
				console.log("towerlevel was: " + this.towerLevel);
				this.spawnTime = 0.1;
				this.missileDamage += 10;
				this.towerLevel++;
				game.data.gold -= game.data.finalUpgradeCost;
				this.upgradeComplete = true;
				console.log("towerlevel now is: " + this.towerLevel);
			} else if (this.elementType === "WATER"){
				this.spawnTime -= 0.2;
				//this.missileDamage += 2;
				this.towerLevel++;
				game.data.gold -= game.data.finalUpgradeCost;
				this.upgradeComplete = true;
			} else if (this.elementType === "EARTH"){
				this.spawnTime -= -0.5;
				this.missileDamage += 150;
				this.towerLevel++;
				game.data.gold -= game.data.finalUpgradeCost;
				this.upgradeComplete = true;
			} else if (this.elementType === "FIRE"){
				this.spawnTime -= 0.3;
				this.missileDamage += 40;
				this.towerLevel++;
				game.data.gold -= game.data.finalUpgradeCost;
				console.log("towerlevel now is: " + this.towerLevel);
				this.upgradeComplete = true;
			}
			
		}

		
	},
	
	getTowerInfo: function() {
		var towerInfo = {
			level: this.towerLevel,
			elementType: this.elementType,
			towerCost: this.towerCost,
			spawnTime: this.spawnTime,
			missileDamage: this.missileDamage
		}
		return towerInfo;
	},
	
	chooseTowerType: function() {
		if (this.elementType === "AIR") {
			this.towerCost = game.data.towerAirCost;
			this.spawnTime = game.data.airMissileSpawnTime;
			this.missileDamage = game.data.airMissileDamage;
		} else if (this.elementType === "EARTH") {
			this.towerCost = game.data.towerEarthCost;
			this.spawnTime = game.data.earthMissileSpawnTime;
			this.missileDamage = game.data.EarthMissileDamage
		} else if (this.elementType === "FIRE") {
			this.towerCost = game.data.towerFireCost;
			this.spawnTime = game.data.fireMissileSpawnTime;
			this.missileDamage = game.data.FireMissileDamage
		} else if (this.elementType === "WATER") {
			this.towerCost = game.data.towerWaterCost;
			this.spawnTime = game.data.waterMissileSpawnTime;
			this.missileDamage = game.data.WaterMissileDamage;
		}else if (this.elementType === "FINALUPGRADE") {
			this.towerCost = game.data.finalUpgradeCost;
			//this.spawnTime = game.data.waterMissileSpawnTime;
			//this.missileDamage = game.data.WaterMissileDamage;
	}
		console.log(this.towerCost)

	},

	spawnMissile: function(other) {
		var settings = {
			elementType: this.elementType, 
			missileDamage: this.missileDamage,
			callingTowersLevel: this.towerLevel
		}
		if (this.elementType === 'AIR') {
			this.newMissile = new game.Missile(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3, settings);
		} else if (this.elementType === 'EARTH') {
			this.newMissile = new game.Missile(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3, settings);			
		} else if (this.elementType === 'FIRE') {
			this.newMissile = new game.Missile(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3, settings);			
		} else if (this.elementType === 'WATER') {
			this.newMissile = new game.Missile(this.pos.x + (3 * 32) + 32 / 2, this.pos.y + (2 * 32) + 32 / 3, settings);			
		}   
		if (this.elementType === 'WATER'){
			this.newMissile.getWaterTarget(other);	
		}
		else{
			this.newMissile.getTarget(other);
		}
		me.game.world.addChild(this.newMissile, 2);	
	},
	
	// https://groups.google.com/forum/#!topic/melonjs/O-On-pIJyUY
	draw: function(renderer) {
		this._super(me.Entity, "draw", [renderer]);		
		if (this.purchaseComplete) {
			this.pos.z = 0;
			this.font.pos.z = 6
			this.font.resize(0.5)
        	this.font.draw(renderer, "-" + this.towerCost + " gold", -50, -32);
			
			var that = this;
			new me.Tween(this.font).to({ alpha: 0.0 }, 1000) // time in milliseconds
			.onComplete(function () {
				that.purchaseComplete = false;
				that.font.alpha = 1;
			}).start();			
		} else if (this.upgradeComplete) {
			this.pos.z = 0;
			this.font.pos.z = 6
			this.font.resize(0.5)
        	this.font.draw(renderer, "-" + "200" + " gold", -50, -32);
			
			var that = this;
			new me.Tween(this.font).to({ alpha: 0.0 }, 1000) // time in milliseconds
			.onComplete(function () {
				that.upgradeComplete = false;
				that.font.alpha = 1;
			}).start();				
		}
		
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
