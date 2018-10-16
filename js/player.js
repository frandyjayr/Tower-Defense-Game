game.Player = me.Sprite.extend({
  init : function () {
      var image = me.loader.getImage("player");
      this._super(me.Sprite, "init", [
          me.game.viewport.width / 2 - image.width / 2,
          me.game.viewport.height - image.height - 20,
          { image : image }
      ]);
	  
	  this.velX = 100;	
	  this.maxX = me.game.viewport.width - this.width;
	  this.maxY = me.game.viewport.height/ 4;
	  this.row = 4;
	  this.goingHorizontal = true;
	  this.direction = "right";
  },

  update : function(time) {
    	this._super(me.Sprite, "update", [time]);
	
		if (this.goingHorizontal) {
			if (this.direction === "right" && (this.pos.x < this.maxX)) {

				this.pos.x += this.velX * time / 1000;
			} else if (this.direction === "left" && (this.pos.x > this.maxX)) {
				this.pos.x -= this.velX * time / 1000;
			}

			if (this.pos.x >= this.maxX && this.direction === "right") {
				this.goingHorizontal = false;
					this.maxX = this.width;
					this.direction = "left";
					this.row--;
			} else if (this.pos.x <= this.maxX && this.direction === "left") {
					this.goingHorizontal = false;
					this.maxX = me.game.viewport.width - this.width;
					this.direction = "right";
					this.row--;
			}
			
		} else if (this.goingHorizontal === false) {

			if (this.pos.y > this.maxY * this.row) {
				this.pos.y -= this.velX * time / 1000;
			} else if (this.pos.y <= this.maxY * this.row) {
				this.goingHorizontal = true;
			}

		}
	  

	
  }	
	




});