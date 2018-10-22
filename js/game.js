/* Game namespace */
var game = {

    // an object where to store game information
    data : {
		health: 10,
		currentlySpawned: 0,
		waveNumber: 1,
		gameScreenStartPosX: 0,
		gameScreenStartPosY: 0,
		gameScreenEndPosX: 608,
		gameScreenEndPosY: 448,
		utilityScreenStartPosX: 608,
		utilityScreenStartPosY: 0,
		utilityScreenEndPosX: 736,
		utilityScreenEndPosY: 448,
		gameDifficulty: 'EASY'
    },

	
	
    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init(768, 480, {wrapper : "screen", scale : "auto"})) {
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
		// add our end path entity in the entity pool
		me.pool.register("end", game.End);
		// add towers entities to the entity pool
		me.pool.register("towerAir", game.TowerAir);
		// add the wave manager to the entity pool
		me.pool.register("wavemanagereasy", game.waveManagerEasy);
		// add the missiles to the entity pool
		me.pool.register("missileAir", game.MissileAir);
		// add the buttons to the entity pool
		me.pool.register("buttonTowerAir", game.ButtonTowerAir);
		// add the tower manager to the entity pool
		me.pool.register("towermanager", game.TowerManager);
		
		
		
		
		me.pool.register("spawnTowerAir", game.SpawnTowerAir);
		
		
		
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // Start the game.
        me.state.change(me.state.PLAY);
    }
};
