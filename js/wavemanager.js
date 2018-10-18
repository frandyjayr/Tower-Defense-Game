game.waveManagerEasy = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		
		// Instantiate numerical data
		this.numberSpawned = 0;
		this.maxSpawn = 5;
		this.waveNumber = 1;
		
		// Instantiate booleans
		this.waveComplete = false;
		this.roundStart = false;
		
		// Instantiate time-related data
		this.currentTime = me.timer.getTime() / 1000;
		this.roundStartTime = me.timer.getTime() / 1000;
		this.roundEndTime;
		
		// Instantiate global variables
		game.data.currentlySpawned = 0;
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
		if (newTime >= this.currentTime + 0.5 && this.numberSpawned < this.maxSpawn && this.roundStart) {
			console.log("startRound function activated");
			this.generateWave(this.waveNumber);
			this.currentTime = newTime;
		}
	},
	
	generateWave: function (wave) {
		switch(wave) {
			case 1:
				me.game.world.addChild(me.pool.pull("enemy", 608, 32), 1);
				break;
			case 2:
				me.game.world.addChild(me.pool.pull("enemy", 608, 32), 2);				
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			case 8:
				break;
			case 9:
				break;
			case 10:
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
			this.waveNumber++;
			this.roundStartTime = me.timer.getTime() / 1000;
		}
	},
	
	preRoundPreparation: function() {
		var time = me.timer.getTime() / 1000;
		
		if (time >= this.roundStartTime + 5) {
			this.roundStart = true;
		}
	},
	
	
	
	// Function provided by melonJS that activates when an object is
	// "born" into the game world. It is only called once.
	onActivateEvent : function () {

	},

	// Function provided by melonJS that activates when the world is
	// destroyed 
	onDeactivateEvent : function () {

	}
  
});
