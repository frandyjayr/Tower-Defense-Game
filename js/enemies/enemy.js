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
	  
	  	this.path = game.mapEasy
	  
		this.body.vel.x = 0;
		this.body.vel.y = 0;
		this.gameVelocity = settings.velocity;
		this.size = 32;
		this.enemyHealth = settings.health;
		this.slowBool = 0; // boolean variable to track whether enemy should be slowed by water tower

		this.currentMove = 'D';
		this.currentX = 2;
		this.currentY = 0;
    	this.goldWorth = settings.goldWorth;
    	this.scoreWorth = settings.scoreWorth;

		this.body.collisionType = me.collision.types.ENEMY_OBJECT;
},
	
	update: function (dt) {
    	this._super(me.Entity, "update", [dt]);
		this.moveUnit(dt);
		me.collision.check(this);
		return true;
		
  	}, 
	
	moveUnit: function(dt) {
		if (this.currentMove === 'L') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity * -1;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x <= this.currentX * this.size - this.size) {
				this.currentX--;
			}
		} else if (this.currentMove === 'R') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x >= this.currentX * this.size + this.size) {
				this.currentX++;
			}			
		} else if (this.currentMove === 'U') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity * -1;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y <= this.currentY * this.size - this.size) {
				this.currentY--;
			}				
		} else if (this.currentMove === 'D') {
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
			this.renderable.currentTransform.rotate(-0.159);
		} 
		else if (this.currentMove === 'UR') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity * -1;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y <= this.currentY * this.size - this.size) {
				this.currentY--;
			}
			this.renderable.currentTransform.rotate(-0.143);
		}
		else if (this.currentMove === 'RU') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x >= this.currentX * this.size + this.size) {
				this.currentX++;
			}
			this.renderable.currentTransform.rotate(0.175);
		}
		else if (this.currentMove === 'DR') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y >= this.currentY * this.size + this.size) {
				this.currentY++;
			}
			this.renderable.currentTransform.rotate(0.160);
		}
		else if (this.currentMove === 'LD') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity * -1;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x <= this.currentX * this.size - this.size) {
				this.currentX--;
			}
			this.renderable.currentTransform.rotate(0.140);
		}
		else if (this.currentMove === 'UL') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity * -1;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y <= this.currentY * this.size - this.size) {
				this.currentY--;
			}
			this.renderable.currentTransform.rotate(0.145);
		}
		else if (this.currentMove === 'LU') {
			this.body.vel.y = 0;
			this.body.vel.x = this.gameVelocity * -1;
			this.pos.x += this.body.vel.x * dt / 1000;
			if (this.pos.x <= this.currentX * this.size - this.size) {
				this.currentX--;
			}
			this.renderable.currentTransform.rotate(-0.155);
		}
		else if (this.currentMove === 'DL') {
			this.body.vel.x = 0;
			this.body.vel.y = this.gameVelocity;
			this.pos.y += this.body.vel.y * dt / 1000
			if (this.pos.y >= this.currentY * this.size + this.size) {
				this.currentY++;
			}
			this.renderable.currentTransform.rotate(-0.145);
		}
		this.currentMove = this.path[this.currentY][this.currentX]; 		
	},
	
	updateData: function() {
		game.data.score += this.scoreWorth;	//add score to player
		game.data.gold += this.goldWorth; // add gold to player
		me.game.world.removeChild(this); // remove the enemy from board
		game.data.currentlySpawned--; // update currentlyspawned variable
	},
	
	activateWaterMissile() {
		
	},
	
	
	onCollision: function (res, other) {
		var projectile_damage = 0; // acts as both a bool val for whether a collision was detected and the damage val to subtract from unit HP
		if (other.body.collisionType === game.collisionTypes.MissileAir) {
			projectile_damage = game.data.airMissileDamage;	
		} else if (other.body.collisionType === game.collisionTypes.MissileWater) {
			projectile_damage = game.data.WaterMissileDamage;	
			console.log("WATER MISSILE HIT");
		} else if (other.body.collisionType === game.collisionTypes.MissileFire) {
			// NEED TO CHANGE THIS VALUE
			projectile_damage = game.data.FireMissileDamage;	
			console.log("FIRE MISSILE HIT");
		} else if (other.body.collisionType === game.collisionTypes.MissileEarth) {
			// NEED TO CHANGE THIS VALUE
			projectile_damage = game.data.EarthMissileDamage;	
			console.log("EARTH MISSILE HIT");
		}

		
		
		if (projectile_damage > 0)
		{
			other.body.setCollisionMask(me.collision.types.NO_OBJECT);
			this.enemyHealth = this.enemyHealth - projectile_damage; // ENEMY HEALTH subtracted by X for every hit. we need to try and track what projectile is hitting what creature
			me.game.world.removeChild(other); // removes missile
			console.log("unit health: ", this.enemyHealth);
			if (this.enemyHealth <= 0) // is enemy out of hp?
			{
				this.updateData(); //update data to get rid of enemy
			}
		}
		return false;
	}
});