game.fireAOEImage = me.Entity.extend({
	init: function (x, y, settings) {
    	this._super(me.Entity, "init", [x, y, {
        	image : settings.image,
            width : 32,
          	height : 32
      	}]);
		this.body.collisionType = me.collision.types.NO_OBJECT;
},
	
	update: function (dt) {
    	this._super(me.Entity, "update", [dt]);
		return true;
		
  	}, 
	
	updatePosition: function(x, y) {
		this.pos.x = x;
		this.pos.y = y;
	}
	
});


