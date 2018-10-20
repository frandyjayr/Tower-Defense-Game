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
   	},

   	// output something in the console
   	// when the object is clicked
   	onSelect: function (event)
   	{
      	console.log("clicked!");
      	// don't propagate the event
      	return false;
   	},
	
	update: function(dt) {
		
	},
	
    onActivateEvent: function () {
		me.input.registerPointerEvent("pointerdown", this, this.onSelect.bind(this));
		console.log("Registered");

    }	
	
});