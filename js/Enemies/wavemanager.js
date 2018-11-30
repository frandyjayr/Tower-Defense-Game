game.waveManagerEasy = me.Container.extend({
	init : function () {
    	this._super(me.Container, "init", [0, 32, 0, 0]);
		
		// Instantiate numerical data
		this.numberSpawned = 0;
		this.spawnTime;
		
		// Instantiate fonts
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P')); 
		
		// Instantiate booleans
		this.waveComplete = false;
		
		// Instantiate time-related data
		this.currentTime = me.timer.getTime() / 1000;
		this.roundStartTime = me.timer.getTime() / 1000;
		this.roundEndTime;
		this.wave;
		this.getWaveByDifficulty();
		this.maxSpawn;
	
  	},
	
	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */	
	update: function (dt) {
    	this._super(me.Container, "update", [dt]);
		
		// Each round will go through all 3 functions from start to finish
		this.preRoundPreparation();
		this.startRound();
		this.endRound();			
		return true;
  	},

	/*
  	 * The startRound function will begin generating the waves for each given
	 * wave round. It uses a timer to spawn each enemy in the wave after an
	 * arbitrary amount of time has passed until the number of required enemies
	 * has been spawned. Enemies will not spawn if the spawn timer has not met
	 * the required wait time nor will it spawn if the maxSpawn value is reached.
	 */
	startRound: function () {
		var newTime = me.timer.getTime() / 1000;
		if (newTime >= this.currentTime + this.spawnTime && this.numberSpawned < this.maxSpawn && game.data.waveStart) {
			this.generateWave(game.data.waveNumber);
			this.currentTime = newTime;
		}
	},

	/*
	 * The generateWave function uses the this.wave variable to determine which
	 * enemy entity to spawn. The this.wave holds an array of arrays that determines
	 * what entity to spawn. The numberspawned and currently spawned variables are updated
	 * To ensure that the correct number of enemies are spawned per wave based on the array
	 * size in this.wave;
	 */
	generateWave: function (wave) {
		this.wave[game.data.waveNumber - 1][this.numberSpawned]();			
		this.numberSpawned++;
		game.data.currentlySpawned++;

	},

	/*
	 * The endRound function stops the round and transitions back to the next wave in the
	 * game. It resets all of the wave information back to the start and increments the wave
	 * number by 1
	 */
	endRound: function() {
		if (game.data.waveStart === true && game.data.currentlySpawned === 0 && this.numberSpawned === this.maxSpawn) {
			game.data.waveStart = false;
			this.numberSpawned = 0;
			game.data.waveNumber++;
			this.roundStartTime = me.timer.getTime() / 1000;
		}
	},

	/*
	 * The preRoundPreparation function is a listener function. It ensures that the
	 * next wave does not begin until the users clicks "P" on the keyboard.
	 */
	preRoundPreparation: function() {
		if (me.input.isKeyPressed("P") && game.data.currentlySpawned === 0 && 		  game.data.towerButtonPressed === false) {
			this.maxSpawn = this.wave[game.data.waveNumber - 1].length - 1;
			this.spawnTime = this.wave[game.data.waveNumber - 1][this.wave[game.data.waveNumber - 1].length - 1];
	 		this.numberSpawned = 0;
			game.data.waveStart = true;
			game.data.preRoundHasStarted = false;
		}
	},

	/*
	 * The getWaveByDifficulty instantiates the this.wave variable to ensure the correct
	 * waves are being spawned based on game difficulty. The this.wave variable is 
	 * instantiated from the array from the waves.js file to give a variety of waves
	 * to spawn based on level.
	 */
	getWaveByDifficulty: function() {
		if (game.data.gameDifficulty === 'EASY') {
			this.wave = game.waveEasy;	
		} else if (game.data.gameDifficulty === 'MEDIUM') {
			this.wave = game.waveMedium;
		} else if (game.data.gameDifficulty === 'HARD') {
			this.wave = game.waveHard;
		}
	}
  
});

