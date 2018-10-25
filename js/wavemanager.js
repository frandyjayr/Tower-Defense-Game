game.waveManagerEasy = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		
		// Instantiate numerical data
		this.numberSpawned = 0;
		this.maxSpawn = 10;
		this.spawnTime = 1;
		
		// Instantiate fonts
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P')); 
		
		// Instantiate booleans
		this.waveComplete = false;
		
		// Instantiate time-related data
		this.currentTime = me.timer.getTime() / 1000;
		this.roundStartTime = me.timer.getTime() / 1000;
		this.roundEndTime;
	
  	},
	
	update: function (dt) {
    	this._super(me.Container, "update", [dt]);
		// Each round will go through all 3 functions from start to finish
		this.preRoundPreparation();
		this.startRound();
		this.endRound();			


		
		return true;
  	},
	
	startRound: function () {
		var newTime = me.timer.getTime() / 1000;
		if (newTime >= this.currentTime + this.spawnTime && this.numberSpawned < this.maxSpawn && game.data.waveStart) {
			this.generateWave(game.data.waveNumber);
			this.currentTime = newTime;
		}
	},
	
	generateWave: function (wave) {
		switch(wave) {
			case 1:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 1);
				break;
			case 2:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);				
				break;
			case 3:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);
				break;
			case 4:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);
				break;
			case 5:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);
				break;
			case 6:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);
				break;
			case 7:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);
				break;
			case 8:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);
				break;
			case 9:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);
				break;
			case 10:
				me.game.world.addChild(me.pool.pull("enemyAir", 64, 0), 2);

				break;
			default:
				console.log("GAME WON");
				break;
		}
		
		this.numberSpawned++;
		game.data.currentlySpawned++;

	},

	endRound: function() {
		if (game.data.waveStart === true && game.data.currentlySpawned === 0 && this.numberSpawned === this.maxSpawn) {
			console.log("ROUND OVER");
			game.data.waveStart = false;
			this.numberSpawned = 0;
			game.data.waveNumber++;
			this.roundStartTime = me.timer.getTime() / 1000;
		}
	},
	
	preRoundPreparation: function() {
		if (me.input.isKeyPressed("P") && game.data.currentlySpawned === 0 && 		  game.data.towerButtonPressed === false) {
			console.log("Wave Begin");
			game.data.waveStart = true;
			game.data.preRoundHasStarted = false;
		}
	}
  
});

