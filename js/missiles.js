game.MissileAir = me.Entity.extend({
    init : function (x, y) {
        this._super(me.Entity, "init", [x, y,  {width: 7, height: 7} ]);
        
        this.body.setVelocity(0, 0);
		//this.body.vel.x = 0;
		//this.body.vel.y = 0;
        this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;

		this.speed = 0.2;
		this.target;
		
        this.renderable = new (me.Renderable.extend({
            init : function () {
                this._super(me.Renderable, "init", [0, 0, 7, 7]);
            },
            destroy : function () {},
            draw : function (renderer) {
                var color = renderer.getColor();
                renderer.setColor('#5EFF7E');
                renderer.fillRect(0, 0, this.width, this.height);
                renderer.setColor(color);
            }
        }));
        this.alwaysUpdate = true;
    },
	
	getTarget: function(target) {
		this.target = target;
	},
	
	// https://www.youtube.com/watch?v=e3-TZ7TfJjA
	// https://www.gamedev.net/forums/topic/339753-noob-need-code-on-2d-homing-missile/
	calculateDirection: function(target) {
		console.log("X pos: " + this.pos.x + "   Y pos: " + this.pos.y);
		
		var totalMovement = 1;
		var xRelativeDistance = Math.abs(target.pos.x - this.pos.x);
		var yRelativeDistance = Math.abs(target.pos.y - this.pos.y);
		
		var totalDistance = xRelativeDistance + yRelativeDistance;
		var xPercentOfMovement = xRelativeDistance / totalDistance;
		this.body.vel.x = xPercentOfMovement;
		this.body.vel.y = totalMovement - xPercentOfMovement;
		
		
		console.log("X vel: " + this.body.vel.x + "     Y vel: " + this.body.vel.y);
		
		if (target.pos.x < this.pos.x) {
			this.body.vel.x *= -1;
		}
		if (target.pos.y < this.pos.y) {
			this.body.vel.y *= -1;
		}
	},
	
    update : function (time) {
    	this._super(me.Entity, "update", [time]);
		
		this.calculateDirection(this.target);
		this.pos.x += this.body.vel.x * this.speed * time;
		this.pos.y += this.body.vel.y * this.speed * time;
		

		
       // this.body.vel.y -= this.body.accel.y * time / 1000;
		
        if (this.pos.y + this.height <= 0) {
            me.game.world.removeChild(this);
        }
		if (this.pos.y + this.height >= 480) {
			me.game.world.removeChild(this);
		}
        if (this.pos.x + this.height <= 0) {
            me.game.world.removeChild(this);
        }
		if (this.pos.x + this.height >= 640) {
			me.game.world.removeChild(this);
		}
		
        this.body.update();
        me.collision.check(this);

        return true;
    },
	
	// Function provided by melonJS that activates when an object is
	// "born" into the game world. It is only called once.
	onActivateEvent : function () {

	},

	// Function provided by melonJS that activates when the world is
	// destroyed 
	onDeactivateEvent : function () {

	}	
});

