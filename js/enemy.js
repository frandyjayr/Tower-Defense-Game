game.Enemy = me.Entity.extend({
	init: function (x, y) {
    	this._super(me.Entity, "init", [x, y, {
        	image : "player",
            width : 32,
          	height : 32
      	}]);
	  
	  	this.path = game.mapEasy
	  
		this.body.vel.x = 0;
		this.body.vel.y = 0;
		this.gameVelocity = 200;
		this.size = 32;
		this.currentMove = 'D';
		this.currentX = 2;
		this.currentY = 0;
		this.currentOther;
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
		}
		this.currentMove = this.path[this.currentY][this.currentX]; 		
	},
	
	onCollision: function (res, other) {
		if (other.body.collisionType === me.collision.types.PROJECTILE_OBJECT) {
			other.body.setCollisionMask(me.collision.types.NO_OBJECT);
			me.game.world.removeChild(other);
			me.game.world.removeChild(this);
			game.data.currentlySpawned--;
		} 
		
		//if (other.body.collisionType === me.collision.types.PROJECTILE_OBJECT
		return false;
	}
});