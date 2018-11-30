game.collisionTypes = { // define types of collision based off missile
	MissileAir		: me.collision.types.USER << 0,
	MissileWater	: me.collision.types.USER << 1,
};

game.Enemy = me.Entity.extend({
	init: function (x, y, settings) {
    	this._super(me.Entity, "init", [x, y, {
        	image : settings.image,
            width : 32,
          	height : 32
      	}]);	
		// Instantiate movement and position variables
		this.angle = 0;	
		this.body.vel.x = 0;
		this.body.vel.y = 0;		
		this.constantVelocity = settings.velocity;
		this.currentMove = 'D'	
		this.currentX = 2;
		this.currentY = 0;		
		this.gameVelocity = settings.velocity;
		this.slowVelocity = (settings.velocity / 2);
		this.path;
		this.getPath();
		
		// Instantiate enemy properties
		this.enemyHealth = settings.health;
    	this.goldWorth = settings.goldWorth;		
		this.maxHealth = settings.health;
    	this.scoreWorth = settings.scoreWorth;
		
		// Instantiate time variables
		this.currentTime = 0;		
		this.timeOut;	
		
		// Instantiate booleans
		this.alive = true;
		this.AOEActive = false;
		this.fireActive = false;
		this.rotationReady = true;
		this.slowActive = false;
		
		// Instantiate misc variables
	  	this.regularImage = settings.image
		this.AOEImage;
		this.size = 32;
		this.rotationValue = 0.20;
		this.AOERange = 100;
		this.body.collisionType = me.collision.types.ENEMY_OBJECT;
		
	},
	
	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */
	update: function (dt) {
    	this._super(me.Entity, "update", [dt]);
		this.moveUnit(dt);
		
		return true;	
  	},
	
	/*
	 * The getPath function returns the corresponding map path found
	 * in the maps.js file based on the game difficulty chosen at the
	 * beginning of the game.
	 */	
	getPath: function() {
		if (game.data.gameDifficulty === 'EASY') {
			this.path = game.mapEasy;	
		} else if (game.data.gameDifficulty === 'MEDIUM') {
			this.path = game.mapMedium;
		} else if (game.data.gameDifficulty === 'HARD') {
			this.path = game.mapHard;
		}		
	},
	
	/*
	 * The moveUnit function moves the enemy through the map based on
	 * the map returned from the getPath function. It uses char values
	 * to determine which direction the enemy entity should move. It
	 * takes a dt (or change in time) parameter.
	 */		
	moveUnit: function(dt) {
		if (this.currentMove === 'L') {
			this.rotationReady = true;
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity * -1;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x <= this.currentX * this.size - this.size) {
				this.currentX--;
			}
		} else if (this.currentMove === 'R') {
			this.rotationReady = true;
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x >= this.currentX * this.size + this.size) {
				this.currentX++;
			}			
		} else if (this.currentMove === 'U') {
			this.rotationReady = true;			
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity * -1;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y <= this.currentY * this.size - this.size) {
				this.currentY--;
			}				
		} else if (this.currentMove === 'D') {
			this.rotationReady = true;			
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y >= this.currentY * this.size + this.size) {
				this.currentY++;
			}			
		} else if (this.currentMove === 'RD') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x >= this.currentX * this.size + this.size) {
				this.currentX++;
			}
			//this.renderable.currentTransform.rotate(-90 * Math.PI / 180);
			this.rotateCorner(-1 * this.rotationValue, dt);
		} 
		else if (this.currentMove === 'UR') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity * -1;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y <= this.currentY * this.size - this.size) {
				this.currentY--;
			}
			//this.renderable.currentTransform.rotate(0);
			this.rotateCorner(-1 * this.rotationValue, dt);

		}
		else if (this.currentMove === 'RU') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x >= this.currentX * this.size + this.size) {
				this.currentX++;
			}
			//this.renderable.currentTransform.rotate(0.175);
			this.rotateCorner(this.rotationValue, dt);
		}
		else if (this.currentMove === 'DR') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y >= this.currentY * this.size + this.size) {
				this.currentY++;
			}
			//this.renderable.currentTransform.rotate(0.160);
			this.rotateCorner(this.rotationValue, dt);
		}
		else if (this.currentMove === 'LD') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity * -1;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x <= this.currentX * this.size - this.size) {
				this.currentX--;
			}
			//this.renderable.currentTransform.rotate(0.140);
			this.rotateCorner(this.rotationValue, dt);
		}
		else if (this.currentMove === 'UL') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity * -1;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y <= this.currentY * this.size - this.size) {
				this.currentY--;
			}
			//this.renderable.currentTransform.rotate(0.145);
			this.rotateCorner(this.rotationValue, dt);
		}
		else if (this.currentMove === 'LU') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity * -1;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x <= this.currentX * this.size - this.size) {
				this.currentX--;
			}
			//this.renderable.currentTransform.rotate(-0.155);
			this.rotateCorner(-1 * this.rotationValue, dt);
		}
		else if (this.currentMove === 'DL') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y >= this.currentY * this.size + this.size) {
				this.currentY++;
			}
			//this.renderable.currentTransform.rotate(-0.145);
			this.rotateCorner(-1 * this.rotationValue, dt);			
		}
		this.currentMove = this.path[this.currentY][this.currentX]; 		
	},
	
	/*
	 * updateData updates the data when the enemy dies such as the game
	 * score, total gold, how many enemies are left in the current wave,
	 * and the alive status of this enemy.
	 */		
	updateData: function() {
		this.alive = false;
		game.data.score += this.scoreWorth;	
		game.data.gold += this.goldWorth; 
		me.game.world.removeChild(this); 
		game.data.currentlySpawned--;
	},
	
	/*
	 * The rotateCorner function rotates the enemy while it turns corners in
	 * the map. It takes in 2 parameters of radians and the change in time.
	 */		
	rotateCorner: function(radians, dt) {	
		if (this.angle <= 1.5 && this.rotationReady) {
			this.angle += Math.abs(radians);
			this.renderable.currentTransform.rotate(radians);			
		} else {
			this.angle = 0;
			this.rotationReady = false;
		}
	},
	
	/*
	 * The activateWaterMissile function activates the slowing effect of a water
	 * missile if this specific enemy is hit with a water missile. The speed is
	 * regained after an arbitrary amount of time, however the function is re-
	 * applied if hit again with another water missile. 
	 * 
	 * Luke - I have modified this function so that the length of the slow is now dependent on the level of the tower.
	 * Level 5 towers will have permanent slow
	 */		
	activateWaterMissile: function(callingTowerLevel) {
		if (this.slowActive) {
			clearTimeout(this.timeOut);
		}
		this.gameVelocity = this.slowVelocity;
		this.slowActive = true;
		var levelVar = callingTowerLevel;
		if (levelVar === 5){
			var entity = me.collision.quadTree.retrieve(this);
			for (var i = 0; i < entity.length; i++) {
				if (typeof entity[i].body !== "undefined" && entity[i].body.collisionType === me.collision.types.ENEMY_OBJECT) {
					if (this.inAOERange(entity[i])) { // this uses AOE code form the fire missiles. Pretty much copy pasted, created a new aoecolddamage function to apply the effect.
						if(entity[i] !== this) {
							if (entity[i].slowActive) {
								clearTimeout(entity[i].timeOut);
							}
							entity[i].applyAOEColdDamage();
												
						}
					}
				}
					
			}

			var that = this;
			
			// Remove the slow only if the tower type is less than level 5
			if (callingTowerLevel < 5) {
				this.timeOut = setTimeout(function() {
					that.slowActive = false;
					that.regainSpeed();
					}, 2000 + (levelVar * 1000));
			}
		}
		else{
			var that = this;
			this.timeOut = setTimeout(function() {
			that.slowActive = false;
			that.regainSpeed();
			}, 2000 + (levelVar * 1000));
		}
		
	},

	/*
	 * The activateFireMissile is used to activate the AOE effect of the fire
	 * missile. It pulls a list of all of the possible entities existing in
	 * the current frame and filters only those that are of collisionType 
	 * "ENEMY_OBJECT". It then aplies the AOE effect to those enemies that
	 * are within an arbitrary distance to this enemy.
	 */	
	activateFireMissile: function(callingTowerLevel) {
		var entity = me.collision.quadTree.retrieve(this);
		for (var i = 0; i < entity.length; i++) {
			if (typeof entity[i].body !== "undefined" && entity[i].body.collisionType === me.collision.types.ENEMY_OBJECT) {
				if (this.inAOERange(entity[i])) {
					if(entity[i] !== this) {

						entity[i].applyAOEDamage(callingTowerLevel);
						entity[i].applyAOEEffect();
						//entity[i].applyFireAOEEffect();
						this.applyAOEDamage(callingTowerLevel);
						this.applyAOEEffect();				
					}
				}
			}
		}
	},

	/*
	 * The inAOERange function returns a boolean of whether or not the passed entity is
	 * within an arbitrary range of this enemy. This is used to determine which enemies
	 * are close enough to this enem to receive the AOE damage effect. It takes in one
	 * entity parameter.
	 */	
	inAOERange(entity) {
		if ((entity.pos.x <= this.pos.x + this.AOERange && entity.pos.x >= this.pos.x && 	    
			 entity.pos.y >= this.pos.y - this.AOERange && entity.pos.y <= this.pos.y) || (entity.pos.x >= this.pos.x - this.AOERange && entity.pos.x <= this.pos.x && entity.pos.y >= this.pos.y - this.AOERange && entity.pos.y <= this.pos.y) || (entity.pos.x <= this.pos.x + this.AOERange && entity.pos.x >= this.pos.x && entity.pos.y <= this.pos.y + this.AOERange && entity.pos.y >= this.pos.y) ||  (entity.pos.x >= this.pos.x - this.AOERange && entity.pos.x <= this.pos.x && entity.pos.y <= this.pos.y + this.AOERange && entity.pos.y >= this.pos.y)) {
			return true;
		}
		return false;
	},

	/*
	 * The applyAOEDamage function applies AOE damage when called. It is used in 
	 * conjunction with the activateFireMissile function to apply the AOE damage
	 * to the enemies that are within range of the fire missile AOE.
	 */	

	

	applyAOEDamage: function(callingTowerLevel) {
		damage = game.data.FireMissileDamage + (game.data.fireUpgradeDamage * (callingTowerLevel-1));
		this.enemyHealth -= damage;
		this.checkIfDead();
		var that = this;
		


		
		if (that.enemyHealth >= 0 && callingTowerLevel === 5){
			that.fireActive = true;
			var burnDmg = setInterval(function () {
				that.enemyHealth -= 20;
				console.log("fireeffect. enemy healthis:", that.enemyHealth);	
				if (that.enemyHealth <= 0)
				{
					that.checkIfDead();
					clearInterval(burnDmg);
					
					
				}	
			}, 1000);
		}
	},

	/*
	 * The applyAOEEffect applies the visual effect of the AOE damage. It will cause
	 * the enemy entity that calls this function to have a transparent red square
	 * appear on top of the enemy animation to signify AOE damage was taken.
	 */	


	applyAOEColdDamage: function() {
		this.enemyHealth -= game.data.WaterMissileDamage;
		if (this.slowActive) {
			clearTimeout(this.timeOut);
		}
		this.gameVelocity = this.slowVelocity;
		this.slowActive = true;
		this.checkIfDead();
		var that = this;
		
		/*
		this.timeOut = setTimeout(function() {
		that.slowActive = false;
		that.regainSpeed();
		}, 2000 + (5 * 1000));*/
		
	},


	applyAOEEffect: function() {

		if (this.enemyHealth > 0) {
			this.AOEActive = true;
			var that = this;
			setTimeout(function() {
				that.AOEActive = false;
			}, 180)			
		}
	},

	applyColdAOEEffect: function() {

		if (this.enemyHealth > 0) {
			
			var that = this;
			setTimeout(function() {
				
				that.slowActive = false;
				that.regainSpeed();
				}, 2000 + (5 * 1000));
		}
	},


	


	/*
	 * The draw function is a built in function from the MelonJS framework/engine
	 * that will be automatically called. It renders all necessary entities or
	 * UI content.
	 */	
	draw: function(renderer) {
		this._super(me.Entity, "draw", [renderer]);
		if (this.AOEActive) {
			renderer.setColor("rgba(255, 0, 0, 0.5)");
			renderer.fillRect(-16, -16, this.width, this.height);		
		}
		if (this.slowActive) {
			renderer.setColor("rgba(0, 0, 255, 0.5)");
			renderer.fillRect(-16, -16, this.width, this.height);
		}
		if (this.fireActive) {
			renderer.setColor("rgba(255, 0, 0, 0.5)");
			renderer.fillRect(-16, -16, this.width, this.height);
		}

		this.drawHealthBar(renderer);
	},
	
	/*
	 * The regainSpeed function returns the enemies game velocity back to the
	 * original velocity that is started with when spawned. This is used in
	 * conjunction with the activeWaterMissile function to return the speed
	 * lost from the water missile effect.
	 */	
	regainSpeed: function() {
		this.gameVelocity = this.constantVelocity;	
	},

	/*
	 * The checkIfDead function checks if the entity has more then 0 health. If
	 * not, the game data is updated to update general game data such as the new
	 * score, the amount of gold, etc.
	 */	
	checkIfDead: function() {
		if (this.enemyHealth <= 0 && this.alive) // is enemy out of hp?
		{
			this.updateData(); //update data to get rid of enemy
		}		
	},

	damageEnemy: function(damage) {
		this.enemyHealth -= damage;	
		this.checkIfDead();
	},
	
	/*
	 * The drawHealthBar function renders the health bar of the specific entity by
	 * drawing two rectangles over each other. The base rectangle remains a constant
	 * arbitrary length while the green bar drawn over the base varies with size
	 * depending on how much health is remaining.
	 */	
	drawHealthBar: function(renderer) {
		renderer.setColor("rgba(0,0,0,1)");
		renderer.fillRect(-16, -25, 32, 5);
		
		var remainingHealth = (this.enemyHealth / this.maxHealth) * 32;
		
		renderer.setColor("rgba(124,252,1)");
		renderer.fillRect(-16, -25, remainingHealth, 5);
	},

	
	/*
	 * The onCollision function tracks collisions that occur with enemy units and ensures 
	 * appropriate damage is deducted from the enemy health based on what tyype of missile
	 * hits this entity.
	 */	
	onCollision: function (res, other) {
		return false;
	}
});

