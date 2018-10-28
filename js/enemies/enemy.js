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
	  	this.regularImage = settings.image
		this.AOEImage;
	  	this.path = game.mapEasy
	  
		this.body.vel.x = 0;
		this.body.vel.y = 0;
		this.gameVelocity = settings.velocity;
		this.constantVelocity = settings.velocity;
		this.size = 32;
		this.enemyHealth = settings.health;
		this.maxHealth = settings.health;
		this.timeOut;

		this.currentMove = 'D'
		this.currentX = 2;
		this.currentY = 0;
		this.currentTime = 0;
    	this.goldWorth = settings.goldWorth;
    	this.scoreWorth = settings.scoreWorth;
		this.angle = 0;
		this.rotationReady = true;
		this.rotationValue = 0.20;
		this.AOERange = 70;

		this.body.collisionType = me.collision.types.ENEMY_OBJECT;
		this.alive = true;
		this.AOEActive = false;
		this.slowActive = false;
		
},
	
	update: function (dt) {
    	this._super(me.Entity, "update", [dt]);
		this.moveUnit(dt);
		
		if (this.AOEActive) {
			if (typeof this.effect != 'undefined') {
				this.effect.updatePosition(this.pos.x, this.pos.y);				
			}

		}
		
		return true;
		
  	}, 
	
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
			//this.renderable.currentTransform.rotate(-0.159);
			this.rotateCorner(-1 * this.rotationValue, dt);
		} 
		else if (this.currentMove === 'UR') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity * -1;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y <= this.currentY * this.size - this.size) {
				this.currentY--;
			}
			//this.renderable.currentTransform.rotate(-0.143);
			//this.renderable.currentTransform.rotate(-0.143);
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
	
	updateData: function() {
		this.alive = false;
		game.data.score += this.scoreWorth;	//add score to player
		game.data.gold += this.goldWorth; // add gold to player
		me.game.world.removeChild(this); // remove the enemy from board
		game.data.currentlySpawned--; // update currentlyspawned variable
	},
	
	rotateCorner: function(radians, dt) {	
		if (this.angle <= 1.5 && this.rotationReady) {
			this.angle += Math.abs(radians);
			this.renderable.currentTransform.rotate(radians);			
		} else {
			this.angle = 0;
			this.rotationReady = false;
		}
	},
	
	activateWaterMissile: function() {
		if (this.slowActive) {
			clearTimeout(this.timeOut);
		}
		this.gameVelocity = 50;
		this.slowActive = true;
		var that = this;
		this.timeOut = setTimeout(function() {
			that.slowActive = false;
			that.regainSpeed();
		}, 3000);
	},
	
	activateFireMissile: function() {
		//console.log(me.collision.quadTree.retrieve(this));
		var entity = me.collision.quadTree.retrieve(this);
		for (var i = 0; i < entity.length; i++) {
			if (typeof entity[i].body !== "undefined" && entity[i].body.collisionType === me.collision.types.ENEMY_OBJECT) {

				if (this.inAOERange(entity[i])) {
					if(entity[i] !== this) {
						entity[i].applyAOEDamage();
						entity[i].applyAOEEffect();
						this.applyAOEEffect();						
					}
				}

			}
		}
	},

	inAOERange(entity) {
		if ((entity.pos.x <= this.pos.x + this.AOERange && entity.pos.x >= this.pos.x && 	    
			 entity.pos.y >= this.pos.y - this.AOERange && entity.pos.y <= this.pos.y) || (entity.pos.x >= this.pos.x - this.AOERange && entity.pos.x <= this.pos.x && entity.pos.y >= this.pos.y - this.AOERange && entity.pos.y <= this.pos.y) || (entity.pos.x <= this.pos.x + this.AOERange && entity.pos.x >= this.pos.x && entity.pos.y <= this.pos.y + this.AOERange && entity.pos.y >= this.pos.y) ||  (entity.pos.x >= this.pos.x - this.AOERange && entity.pos.x <= this.pos.x && entity.pos.y <= this.pos.y + this.AOERange && entity.pos.y >= this.pos.y)) {
			return true;
		}
		return false;
	},
	
	applyAOEDamage: function() {
		this.enemyHealth -= game.data.FireMissileDamage;
		this.checkIfDead();
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

		this.drawHealthBar(renderer);
	},
	
	regainSpeed: function() {
		this.gameVelocity = this.constantVelocity;	
	},
	
	checkIfDead: function() {
		if (this.enemyHealth <= 0 && this.alive) // is enemy out of hp?
		{
			this.updateData(); //update data to get rid of enemy
		}		
	},
	
	drawHealthBar: function(renderer) {
		renderer.setColor("rgba(0,0,0,1)");
		renderer.fillRect(-16, -25, 32, 5);
		
		var remainingHealth = (this.enemyHealth / this.maxHealth) * 32;
		
		renderer.setColor("rgba(124,252,1)");
		renderer.fillRect(-16, -25, remainingHealth, 5);
	},
	
	onCollision: function (res, other) {
		var projectile_damage = 0; // acts as both a bool val for whether a collision was detected and the damage val to subtract from unit HP
		if (other.body.collisionType === game.collisionTypes.MissileAir) {
			projectile_damage = game.data.airMissileDamage;	
		} 
		if (other.body.collisionType === game.collisionTypes.MissileWater) {
			this.activateWaterMissile();
			projectile_damage = game.data.WaterMissileDamage;	
		}
		if (other.body.collisionType === game.collisionTypes.MissileFire) {
			this.activateFireMissile();
			projectile_damage = game.data.FireMissileDamage;	
		}
		if (other.body.collisionType === game.collisionTypes.MissileEarth) {
			projectile_damage = game.data.EarthMissileDamage;	
		}
		
		if (projectile_damage > 0)
		{
			other.body.setCollisionMask(me.collision.types.NO_OBJECT);
			this.enemyHealth = this.enemyHealth - projectile_damage; // ENEMY HEALTH subtracted by X for every hit. we need to try and track what projectile is hitting what creature
			me.game.world.removeChild(other); // removes missile
			this.checkIfDead();
		}
		return false;
	}
});

