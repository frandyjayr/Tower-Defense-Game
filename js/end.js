game.End = me.Entity.extend({
	init: function (x, y) {
    	this._super(me.Entity, "init", [x, y, {
        	image : "endGem",
            width : 32,
          	height : 32
      	}]);
		
		this.body.collisionType = me.collision.types.ACTION_OBJECT;
	},
	
	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */	
	update: function (dt) {
    	this._super(me.Entity, "update", [dt]);
		me.collision.check(this);
		if (game.data.health == 0 && me.state != "WIN") {
			console.log(me.state);
			me.state.change(me.state.END);
		}
		return true;
  	},

	/*
	 * The onCollision function tracks collision between enemy units and
	 * this end goal. If the enemy collides with this entity, this means
	 * that the enemy reached the end goal and was not succesfully des-
	 * troyed from the user's turrent. The necessary data is then updated
	 * such as the user's health, the number spawned, and then the enemy
	 * is removed from the game world.
	 */
	onCollision: function (res, other) {
		if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
			other.body.setCollisionMask(me.collision.types.NO_OBJECT);
			me.game.world.removeChild(other);
			game.data.health--;
			game.data.currentlySpawned--;
			return false;
		} 
		return false;	
	}
});