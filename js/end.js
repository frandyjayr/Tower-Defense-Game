game.End = me.Entity.extend({
	init: function (x, y) {
    	this._super(me.Entity, "init", [x, y, {
        	image : "ships",
            width : 32,
          	height : 32
      	}]);
	},
	
	update: function (dt) {
    	this._super(me.Entity, "update", [dt]);
		me.collision.check(this);
		return true;
  	},
	
	onCollision: function (res, other) {
		if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
			me.game.world.removeChild(other);
			game.data.health--;
			game.data.currentlySpawned--;
			return false;
		}
	}
});