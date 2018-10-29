game.ButtonTower = me.GUI_Object.extend({
	init: function (x, y, towerType){
		this.towerImage;
		this.setTowerImage(towerType);
      	var settings = {}
    	settings.image = this.towerImage;
      	settings.framewidth = 32;
      	settings.frameheight = 32;
      	// super constructor
      	this._super(me.GUI_Object, "init", [x, y, settings]);
      	// define the object z order
      	this.pos.z = 4;
		this.alwaysUpdate = true;
		this.anchorPoint.set(0,0);
   	},

   	// output something in the console
   	// when the object is clicked
   	update: function (time)
   	{
		if (me.input.isKeyPressed("Q") || me.input.isKeyPressed("W") ||
		    me.input.isKeyPressed("E") || me.input.isKeyPressed("R") && 
		    game.data.preRoundHasStarted === false) {
			game.data.preRoundHasStarted = true;
		}
      	return true;
   	},
	
	setTowerImage: function(towerType) {
		if (towerType === 'AIR') {
			this.towerImage = "buttonTowerAir";
		} else if (towerType === 'WATER') {
			this.towerImage = "buttonTowerWater";
		} else if (towerType === 'FIRE') {
			this.towerImage = "buttonTowerFire";
		} else if (towerType === 'EARTH') {
			this.towerImage = "buttonTowerEarth";
		}
	}
	
});





// this might help
// https://groups.google.com/forum/#!topic/melonjs/TjbX3I1OwDI

// try to get this whole thing to work i didn't really get anything done on this page.