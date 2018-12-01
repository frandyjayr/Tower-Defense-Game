/* Game namespace */
var game = {

    // An object to store global game information
    data : {
		health: 10,
		currentlySpawned: 0,
		waveNumber: 1,
		score: 0,
		gold: 400,
		startingGold: 9600,
		startingHealth: 10,

		towerAirCost: 200,
		towerEarthCost: 200,
		towerFireCost: 200,
		towerWaterCost: 200,
		finalUpgradeCost: 1000,
		
		airMissileDamage: 10,
		EarthMissileDamage: 50,
		FireMissileDamage: 6,
		WaterMissileDamage: 1,

		airUpgradeDamage: 8,
		waterUpgradeDamage: 4,
		earthUpgradeDamage: 70,
		fireUpgradeDamage: 4,
		
		airMissileSpawnTime: 0.8,
		earthMissileSpawnTime: 3.5,
		fireMissileSpawnTime: 1.8,
		waterMissileSpawnTime: 1.4,

		airTowerSpawnTimeReduction: 0.17,
		waterTowerSpawnTimeReduction: 0.2,
		earthTowerSpawnTimeReduction: 0.4,
		fireTowerSpawnTimeReduction: 0.15,

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
		// Register game objects to use later
		me.pool.register("enemy", game.Enemy);
		me.pool.register("end", game.End);
		me.pool.register("wavemanagereasy", game.waveManagerEasy);
		me.pool.register("missile", game.Missile);
		me.pool.register("buttonTower", game.ButtonTower);
		me.pool.register("towermanager", game.TowerManager);
		me.pool.register("tower", game.Tower);							
		me.pool.register("spawnTower", game.SpawnTower);
		me.pool.register("inGameMenu", game.inGameMenu);
		

		// Set game Screens
		me.state.set(me.state.MENU, new game.titlescreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());		
		me.state.set(me.state.END, new game.EndScreen());

        // Start the game.
        me.state.change(me.state.MENU);

    }
};
