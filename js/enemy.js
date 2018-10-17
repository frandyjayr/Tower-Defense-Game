game.Enemy = me.Entity.extend({
	init: function (x, y) {
    	this._super(me.Entity, "init", [x, y, {
        	image : "player",
            width : 32,
          	height : 32
      	}]);
	  
	  	//this.chooseShipImage();
	  
	  	this.path = [
['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G' ],
['D', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L' ],
['D', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G' ],
['D', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G' ],
['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'D' ],
['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'D' ],
['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'D' ],
['D', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L' ],
['D', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G' ],
['D', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G' ],
['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'D' ],
['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'D' ],
['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'D' ],
['E', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L' ],
['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G' ]
];
	  
  
		this.size = 32;
		this.vel = 160;
		this.currentMove = 'L';
		this.nextMove = 'L';
		this.currentX = 19;
		this.currentY = 1;
},
	
	update: function (dt) {
    	this._super(me.Entity, "update", [dt]);
		
		if (this.currentMove === 'L') {
			this.pos.x -= this.vel * dt / 992;
			if (this.pos.x <= this.currentX * 32 - 32) {
				this.currentX--;
				this.currentMove = this.path[this.currentY][this.currentX]; 
			}
		} else if (this.currentMove === 'R') {
			this.pos.x += this.vel * dt / 992;
			if (this.pos.x >= this.currentX * 32 + 32) {
				this.currentX++;
				this.currentMove = this.path[this.currentY][this.currentX]; 
			}			
		} else if (this.currentMove === 'U') {
			this.pos.y -= this.vel * dt / 992
			if (this.pos.y <= this.currentY * 32 - 32) {
				this.currentY--;
				this.currentMove = this.path[this.currentY][this.currentX]; 
			}				
		} else if (this.currentMove === 'D') {
			this.pos.y += this.vel * dt / 992
			if (this.pos.y >= this.currentY * 32 + 32) {
				this.currentY++;
				this.currentMove = this.path[this.currentY][this.currentX]; 
			}			
		}

		
		return true;
		
  	},
	/*
	chooseShipImage: function () {
		var frame = ~~(Math.random() * 3);
		this.renderable.addAnimation("idle", [frame], 1);
		this.renderable.setCurrentAnimation("idle");
	}*/
});