game.waveManagerEasy = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		
		// Instantiate numerical data
		this.numberSpawned = 0;
		this.maxSpawn = 10;
		this.spawnTime = 1;
		
		// Instantiate booleans
		this.waveComplete = false;
		this.roundStart = false;
		
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
		if (newTime >= this.currentTime + this.spawnTime && this.numberSpawned < this.maxSpawn && this.roundStart) {
			this.generateWave(game.data.waveNumber);
			this.currentTime = newTime;
		}
	},
	
	generateWave: function (wave) {
		switch(wave) {
			case 1:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 1);
				break;
			case 2:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);				
				break;
			case 3:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);
				break;
			case 4:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);
				break;
			case 5:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);
				break;
			case 6:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);
				break;
			case 7:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);
				break;
			case 8:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);
				break;
			case 9:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);
				break;
			case 10:
				me.game.world.addChild(me.pool.pull("enemy", 64, 0), 2);
				break;
			default:
				console.log("GAME WON");
				break;
		}
		
		this.numberSpawned++;
		game.data.currentlySpawned++;

	},

	endRound: function() {
		if (this.roundStart === true && game.data.currentlySpawned === 0) {
			console.log("ROUND OVER");
			this.roundStart = false;
			this.numberSpawned = 0;
			game.data.waveNumber++;
			this.roundStartTime = me.timer.getTime() / 1000;
		}
	},
	
	preRoundPreparation: function() {
		var time = me.timer.getTime() / 1000;
		
		if (time >= this.roundStartTime + 5) {
			this.roundStart = true;
		}
	}
  
});

