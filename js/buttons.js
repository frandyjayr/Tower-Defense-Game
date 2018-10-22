game.ButtonTowerAir = me.GUI_Object.extend(
{
	init:function (x, y)
   	{
      	var settings = {}
    	settings.image = "buttonTowerAir";
      	settings.framewidth = 64;
      	settings.frameheight = 64;
      	// super constructor
      	this._super(me.GUI_Object, "init", [x, y, settings]);
      	// define the object z order
      	this.pos.z = 4;
		this.isClickable = true;
		this.alwaysUpdate = true;
		me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		
		this.pos.x = 0;
		this.pos.y = 0;
		
		this.QSelected = false;
		this.lastPressedKey = null;

   	},

   	// output something in the console
   	// when the object is clicked
   	onClick: function (event)
   	{q
      	console.log("clicked!");
      	// don't propagate the event
      	return false;
   	},
	
	update: function(dt) {

	},
	
	draw: function(renderer) {
		if (this.QSelected === true) {
			console.log("rendering");
			this.QSelected = false;
		}

	},

	
    onActivateEvent: function () {

		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.UP, "up");
		me.input.bindKey(me.input.KEY.DOWN, "down");
		me.input.bindKey(me.input.KEY.Q, "Q");
		me.input.bindKey(me.input.KEY.ESC, "esc");
		me.input.bindKey(me.input.KEY.ENTER, "enter");
    },
	
	spawntowerAir: function() {
		
	}
	
	
});




// this might help
// https://groups.google.com/forum/#!topic/melonjs/TjbX3I1OwDI

// try to get this whole thing to work i didn't really get anything done on this page.