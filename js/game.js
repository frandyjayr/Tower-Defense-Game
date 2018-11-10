/* Game namespace */
var game = {

    // an object where to store game information
    data : {
		health: 10,
		currentlySpawned: 0,
		waveNumber: 1,
		score: 0,
		gold: 1000,
		startingGold: 600,
		startingHealth: 10,

		towerAirCost: 200,
		towerEarthCost: 300,
		towerFireCost: 200,
		towerWaterCost: 200,
		finalUpgradeCost: 1500,
		
		airMissileDamage: 10,
		EarthMissileDamage: 80,
		FireMissileDamage: 6,
		WaterMissileDamage: 1,

		airUpgradeDamage: 6,
		waterUpgradeDamage: 4,
		earthUpgradeDamage: 90,
		fireUpgradeDamage: 4,
		
		airMissileSpawnTime: 0.8,
		earthMissileSpawnTime: 3.5,
		fireMissileSpawnTime: 1.6,
		waterMissileSpawnTime: 1.4,

		airTowerSpawnTimeReduction: 0.17,
		waterTowerSpawnTimeReduction: 0.2,
		earthTowerSpawnTimeReduction: 0.8,
		fireTowerSpawnTimeReduction: 0.2,

		gameScreenStartPosX: 0,
		gameScreenStartPosY: 0,
		gameScreenEndPosX: 608,
		gameScreenEndPosY: 448,
		utilityScreenStartPosX: 608,
		utilityScreenStartPosY: 0,
		utilityScreenEndPosX: 736,
		utilityScreenEndPosY: 448,
		
		lastPlacedTowerX: 0,
		lastPlacedTowerY: 0,
		
		gameDifficulty: 'EASY',
		waveStart: false,
		preRoundHasStarted: false,
		towerButtonPressed: false,
		menuOpened: false,
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
		me.pool.register("inGameMenu", game.inGameMenu);
		


		me.state.set(me.state.MENU, new game.titlescreen());

		
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // Start the game.
        me.state.change(me.state.MENU);

    }
};
