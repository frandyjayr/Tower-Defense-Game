game.Tower = me.Entity.extend({
	init: function (x, y, settings) {
    	this._super(me.Entity, "init", [x, y, settings]);
		
		// Instantiate font
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
		
		this.body.collisionType = me.collision.types.PLAYER_OBJECT;
		// Instantiate time related variables
		this.currentTime = me.timer.getTime() / 1000;
		this.spawnTime;
		
		// Instantiate boolean variables
		this.towerOn = false;	
		this.upgradeComplete;
		this.purchaseComplete;		
		
		// Instantiate Missiles related variables
		this.newMissile;
		this.missileDamage;

		// Instantiate Tower Related variables
		this.elementType = settings.missileType;
		this.towerCost;
		this.chooseTowerType();
		this.towerLevel = 1;
	},
	
	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */		
	update: function (dt) {
		
		this._super(me.Entity, "update", [dt]);
		me.collision.check(this);			
		return true;
  	},
	
	/*
	 * The buyTower function is used to purchase towers. When it is called,
	 * the appropriate amount of gold is removed from the global gold variable
	 */
	buyTower: function() {
		game.data.gold -= this.towerCost;	
	},
	
	/*
	 * The toggleTower function is used to turn a tower on or off. The purpose
	 * of this function is to ensure that a spawn tower is turned off. Once the
	 * spawn tower is placed, it is considered an active tower so should be
	 * turned on to activate its missiles.
	 */
	toggleTower: function () {
		if (this.towerOn) {
			this.towerOn = false;
		} else {
			this.towerOn = true;
			this.purchaseComplete = true;
		}
	},
	
	/*
	 * The upgradeTower function is used to upgrade towers from level 1 up to
	 * a maximum of level 4. The level 5 tower is upgraded using a separate
	 * function. This causes the towers attributes to increase while also 
	 * removing gold from the global gold variable to account for the tower
	 * upgrade purchase.
	 */
	upgradeTower: function() {
		
		if (this.towerLevel < 4) {
			if (this.elementType === "AIR"){
				this.spawnTime -= game.data.airTowerSpawnTimeReduction;
				this.missileDamage += game.data.airUpgradeDamage;
				this.towerLevel++;
				game.data.gold -= game.data.towerAirCost;
				this.upgradeComplete = true;
			} else if (this.elementType === "WATER"){
				this.spawnTime -= game.data.waterTowerSpawnTimeReduction;
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

	/*
	 * The upgradeTowerFinal is used to upgrade a level 4 tower to level 5.
	 * Level 5 towers give a significant upgrade bonus compared to that of
	 * the upgradeTower function. The attributes are signifcantly increased
	 * and the gold variable is updated to account for the tower upgrade
	 * purchase
	 */
	upgradeTowerFinal: function() {
		if (this.towerLevel < 5) {
			if (this.elementType === "AIR"){
				this.spawnTime = 0.1;
				this.missileDamage += 20;
				this.towerLevel++;
				game.data.gold -= game.data.finalUpgradeCost;
				this.upgradeComplete = true;
			} else if (this.elementType === "WATER"){
				this.spawnTime -= 0.2;
				this.towerLevel++;
				game.data.gold -= game.data.finalUpgradeCost;
				this.upgradeComplete = true;
			} else if (this.elementType === "EARTH"){
				this.spawnTime -= -0.5;
				this.missileDamage += 300;
				this.towerLevel++;
				game.data.gold -= game.data.finalUpgradeCost;
				this.upgradeComplete = true;
			} else if (this.elementType === "FIRE"){
				this.spawnTime -= 0.3;
				this.missileDamage += 40;
				this.towerLevel++;
				game.data.gold -= game.data.finalUpgradeCost;
				this.upgradeComplete = true;
			}
			
		}

		
	},
	
	/*
	 * The getTowerInfo is used to retrieve this specific towers information
	 * such as the level, elementTpe, towerCost, spawnTime, and missileDamage.
	 * This is used for other classes to use the information in their own 
	 * functions.
	 */
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
	
	/* The chooseTowerType function assigns the tower the tower type based on
	 * the element type that was passed in the constructor of this object.
	 */
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
	}

	},

	/*
	 * The spawnMissile function is used to spawn a tower missile based on the
	 * tower type. Each missile is added into the game world and any collision
	 * is dealt with through the enemy.
	 */
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
	
	/*
	 * The draw function is a built in function from the MelonJS framework/engine
	 * that will be automatically called. It renders all necessary entities or
	 * UI content.
	 */	
	draw: function(renderer) {
		this._super(me.Entity, "draw", [renderer]);		
		this.drawPurchaseAmount(renderer);
		
	},

	/*
	 * The drawPurchaseAmount funciton is used to draw the purchase amount above
	 * the tower once the player has placed the tower. The purchase text has a 
	 * fade effect that fades the text after an arbitrary amount of time
	 */
	drawPurchaseAmount: function(renderer) {
		if (this.purchaseComplete) {
			this.goldFadeEffectRegularTower(renderer);
		} else if (this.upgradeComplete) {
			this.goldFadeEffectFinalTower(renderer);
		}		
	},
	
	/*
	 * The goldFadeEffectRegularTower function is used to give a fade effect for
	 * towers that are purchased from level 1 - 4. The text fades after an 
	 * arbitrary amount of time.
	 */
	goldFadeEffectRegularTower(renderer) {
		this.pos.z = 0;
		this.font.pos.z = 6
		this.font.resize(0.5)
		this.font.draw(renderer, "-" + this.towerCost + " gold", -50, -32);

		// Fade text effect
		var that = this;
		new me.Tween(this.font).to({ alpha: 0.0 }, 1000) // time in milliseconds
		.onComplete(function () {
			that.purchaseComplete = false;
			that.font.alpha = 1;
		}).start();			
	},
	
	/*
	 * The goldFadeEffectFinalTower function is used to give a fade effect for
	 * towers that are purchased from level 4 to 5. The text fades after an 
	 * arbitrary amount of time.
	 */	
	goldFadeEffectFinalTower(renderer) {
		this.pos.z = 0;
		this.font.pos.z = 6
		this.font.resize(0.5)
		if (this.towerLevel === 5) {
			this.font.draw(renderer, "-" + "1000" + " gold", -50, -32);			
		} else {
			this.font.draw(renderer, "-" + "200" + " gold", -50, -32);
		}
	
		// Fade text effect
		var that = this;
		new me.Tween(this.font).to({ alpha: 0.0 }, 1000) // time in milliseconds
		.onComplete(function () {
			that.upgradeComplete = false;
			that.font.alpha = 1;
		}).start();				
	},
	
	/*
	 * The onCollision function tracks collisions that occur with enemy units and ensures 
	 * appropriate damage is deducted from the enemy health based on what tyype of missile
	 * hits this entity.
	 */	
	onCollision: function (res, other) {
		// If enemy gets in range of tower
		if (other.body.collisionType === me.collision.types.ENEMY_OBJECT && this.towerOn) {
			var newTime = me.timer.getTime() / 1000;
			// Shoot missiles based on spawnTime which dictates speed
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
