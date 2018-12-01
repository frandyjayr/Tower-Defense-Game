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

	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */	
   	update: function (time)
   	{
		this.checkIfClicked();
      	return true;
   	},
	
	/*
	 * The checkIfClicked function checks if the user clicks any of
	 * the tower buttons. If so, it activates preRoundMode.
	 */		
	checkIfClicked: function() {
		if ((me.input.isKeyPressed("Q") || me.input.isKeyPressed("W") ||
		    me.input.isKeyPressed("E") || me.input.isKeyPressed("R") ||
			me.input.isKeyPressed("T")) && game.data.preRoundHasStarted === false && 
		    game.data.waveStart === false) {
			game.data.preRoundHasStarted = true;
		}		
	},

	/*
	 * The setTowerImage function takes in the towerType parameters to 
	 * determine which tower to render on screen.
	 */	
	setTowerImage: function(towerType) {
		if (towerType === 'AIR') {
			this.towerImage = "buttonTowerAir";
		} else if (towerType === 'WATER') {
			this.towerImage = "buttonTowerWater";
		} else if (towerType === 'FIRE') {
			this.towerImage = "buttonTowerFire";
		} else if (towerType === 'EARTH') {
			this.towerImage = "buttonTowerEarth";
		} else if (towerType === 'UPGRADE') {
			this.towerImage = "buttonTowerUpgrade";
		}
	}
	
});





// this might help
// https://groups.google.com/forum/#!topic/melonjs/TjbX3I1OwDI

// try to get this whole thing to work i didn't really get anything done on this page.