game.collisionTypes = { // define types of collision based off missile
	MissileAir		: me.collision.types.USER << 0,
	MissileWater	: me.collision.types.USER << 1,
	MissileEarth	: me.collision.types.USER << 2,
	MissileFire		: me.collision.types.USER << 3,
};

//Air Missile
game.Missile = me.Entity.extend({
		
	init : function (x, y, missileType) {
        this._super(me.Entity, "init", [x, y,  {width: 7, height: 7} ]);
        this.setMissileType(missileType);
        this.body.setVelocity(0, 0);
		this.speed = 0.45;
		this.newDistance = 0;
		this.missileID = 1; // implement missleID's to track what missiles are hitting enemies
		this.target;	
		this.targetTemp = null;
		this.alwaysUpdate = true;
		

        this.renderable = new (me.Renderable.extend({
            init : function () {
                this._super(me.Renderable, "init", [0, 0, 8, 8]);
            },
            destroy : function () {},
            draw : function (renderer) {
                var color = renderer.getColor();
                renderer.setColor(this.getColor());
                renderer.fillRect(0, 0, this.width, this.height);
                renderer.setColor(color);
            },
			
			getColor: function() {
				if (missileType === "AIR") {
					return '#ffffff';
				} else if (missileType === "WATER") {
					return '#0d70fd';
				} else if (missileType === "FIRE") {
					return '#de0202';
				} else if (missileType === "EARTH") {
					return '#6c3333';
				}
			}
        }));


	},

	/*
	 * The getTarget function instantiates the target variable. It is used to 
	 * get the target for this specific missile. This functions checks to
	 * ensure that the target is not null, meaning that the target wasn't
	 * recently destoryed from another missile to prevent any runtime errors.
	 */
	getTarget: function(target) {
		if (this.targetTemp === null) {
			this.targetTemp = target;
			this.target = target;
		} else if (this.targetTemp === target) {
			this.target = target;
		}
	},
	
	/*
	 * The setMissileType function sets the missile type based on the parameter
	 * passed in the function. Missile types give each missile specific properties
	 * that are determined in the enemy.js onCollision function.
	 */	
	setMissileType: function(missileType) {
		if (missileType === 'AIR') {
        	this.body.collisionType = game.collisionTypes.MissileAir;
		} else if (missileType === 'WATER') {
			this.body.collisionType = game.collisionTypes.MissileWater;
		} else if (missileType === 'EARTH') {
			this.body.collisionType = game.collisionTypes.MissileEarth;
		} else if (missileType === 'FIRE') {
			this.body.collisionType = game.collisionTypes.MissileFire;
		}
	},
	

	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */
	calculateDirection: function(target) {
		// The following formula was derived from the two sources above. They
		// Calculate the relative distance and velocities between the missile
		// and the target enemy unit and follows it until collision occurs
		// https://www.youtube.com/watch?v=e3-TZ7TfJjA
		// https://www.gamedev.net/forums/topic/339753-noob-need-code-on-2d-homing-missile/
		var totalMovement = 1;
		var xRelativeDistance = Math.abs(target.pos.x - this.pos.x);
		var yRelativeDistance = Math.abs(target.pos.y - this.pos.y);
		
		var totalDistance = xRelativeDistance + yRelativeDistance;
		var xPercentOfMovement = xRelativeDistance / totalDistance;
		this.body.vel.x = xPercentOfMovement;
		this.body.vel.y = totalMovement - xPercentOfMovement;
		
		if (target.pos.x < this.pos.x) {
			this.body.vel.x *= -1;
		}
		if (target.pos.y < this.pos.y) {
			this.body.vel.y *= -1;
		}
		
		this.removeIdleMissile(target);
	},
	
	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */	
    update : function (time) {
    	this._super(me.Entity, "update", [time]);
		
		this.calculateDirection(this.target);
		this.pos.x += this.body.vel.x * this.speed * time;
		this.pos.y += this.body.vel.y * this.speed * time;

		this.removeMissile();
		
        this.body.update();
        me.collision.check(this);

        return true;
    },

	/*
	 * The removeIdleMissile function is used to remove target missiles whose
	 * original target was already destroyed by another missile in the game
	 * to prevent it from existing in the game with no target.
	 */
	removeIdleMissile(target) {
		if (this.newDistance === target.pos.x + target.pos.y) {
			me.game.world.removeChild(this);
		} else {
			this.newDistance = target.pos.x + target.pos.y;
		}
	},

	/*
	 * The removeMissile function is used to remove missiles that move outside the
	 * bounds of the screen. Because of the nature of the missile tracking algorithm,
	 * missile accuracy is at 100%, therefore this function is not necessary, however
	 * is just a safety precaution in the case that a missile somehow ends up outside
	 * the bounds of the screen.
	 */
	removeMissile: function() {
        if (this.pos.y + this.height <= game.data.gameScreenStartPosY) {
            me.game.world.removeChild(this);
        }
		if (this.pos.y + this.height >= game.data.gameScreenEndPosY) {
			me.game.world.removeChild(this);
		}
        if (this.pos.x + this.height <= game.data.gameScreenStartPosX) {
            me.game.world.removeChild(this);
        }
		if (this.pos.x + this.height >= game.data.gameScreenEndPosX) {
			me.game.world.removeChild(this);
		}		
	}
});


