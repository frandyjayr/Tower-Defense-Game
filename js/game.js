
/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // score
        score : 0
    },

	
	
    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init(640, 480, {wrapper : "screen", scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        me.loader.preload(game.resources, this.loaded.bind(this));
		
    },


	
    // Run on game resources loaded.
    "loaded" : function () {
		// add our player entity in the entity pool
		me.pool.register("player", game.Player);
		// add our enemy entity in the entity pool
		me.pool.register("enemy", game.Enemy);
		
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());
		
		
		// enable the keyboard
	  	me.input.bindKey(me.input.KEY.LEFT,  "left");
	  	me.input.bindKey(me.input.KEY.RIGHT, "right");
	  	// map X, Up Arrow and Space for jump
	  	me.input.bindKey(me.input.KEY.X,      "jump", true);
	  	me.input.bindKey(me.input.KEY.UP,     "jump", true);
	  	me.input.bindKey(me.input.KEY.SPACE,  "jump", true);

		

        // Start the game.
        me.state.change(me.state.PLAY);
    }
};
