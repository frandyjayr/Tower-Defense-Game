/* Game namespace */
var game = {

    // an object where to store game information
    data : {
		health: 10,
		currentlySpawned: 0,
		waveNumber: 1,
		score: 0,
		gold: 800,
		startingGold: 100,
		startingHealth: 10,

		towerAirCost: 200,
		towerEarthCost: 100,
		towerFireCost: 150,
		towerWaterCost: 200,
		
		airMissileDamage: 8,
		EarthMissileDamage: 20,
		FireMissileDamage: 4,
		WaterMissileDamage: 1,
		
		airMissileSpawnTime: 0.5,
		earthMissileSpawnTime: 5,
		fireMissileSpawnTime: 1,
		waterMissileSpawnTime: 1.5,
		
		enemyAirGoldWorth: 10,
		enemyEarthGoldWorth: 30,
		enemyFireGoldWorth: 50,
		enemyWaterGoldWorth: 30,		
		
		enemyAirVelocity: 150,
		enemyEarthVelocity: 150,
		enemyFireVelocity: 150,
		enemyWaterVelocity: 150,		
		
		enemyAirHealth: 20,
		enemyEarthHealth: 50,
		enemyFireHealth: 50,
		enemyWaterHealth: 30,

		gameScreenStartPosX: 0,
		gameScreenStartPosY: 0,
		gameScreenEndPosX: 608,
		gameScreenEndPosY: 448,
		utilityScreenStartPosX: 608,
		utilityScreenStartPosY: 0,
		utilityScreenEndPosX: 736,
		utilityScreenEndPosY: 448,
		
		lastPlacedTowerX: 96,
		lastPlacedTowerY: 96,
		
		gameDifficulty: 'EASY',
		waveStart: false,
		preRoundHasStarted: false,
		towerButtonPressed: false,
		towerMap: null
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
		// add our enemy entity in the entity pool
		me.pool.register("enemy", game.Enemy);
		// add our end path entity in the entity pool
		me.pool.register("end", game.End);
		// add towers entities to the entity pool

		// add the wave manager to the entity pool
		me.pool.register("wavemanagereasy", game.waveManagerEasy);
		// add the missiles to the entity pool

		me.pool.register("missile", game.Missile);
		// add the buttons to the entity pool
		me.pool.register("buttonTower", game.ButtonTower);
		// add the tower manager to the entity pool
		me.pool.register("towermanager", game.TowerManager);
		me.pool.register("tower", game.Tower);					
		
		me.pool.register("spawnTower", game.SpawnTower);
		


		me.state.set(me.state.MENU, new game.titlescreen());

		
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // Start the game.
        me.state.change(me.state.MENU);

    }
};
