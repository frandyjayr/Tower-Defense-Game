// Wave Easy Mode
game.waveEasy = [
	// wave 1. 10 units. Medium health, medium speed
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},
		// Spawn time per enemy
		0.6
	],
	
	// wave 2. 5 units. Very slow and very high hp
	[	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	

		// Spawn time per enemy
		2
	],
	
	// wave 3. 30 units. Very fast and very low hp
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},
		// Spawn time per enemy
		0.2
	],
	
	// wave 4. more Airplanes
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 5
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave5Enemy), 2)},	
		
		// Spawn time per enemy
		0.3
	],
	
	// wave 6
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 7
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 8
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 9
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 10
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	]
]

game.waveMedium = [
	// wave 1
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},
		// Spawn time per enemy
		0.3
	],
	
	// wave 2
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 3
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave3Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 4
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 5
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 6
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 7
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 8
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},
		// Spawn time per enemy
		0.3
	],
	
	// wave 9
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 10
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	]
]

game.waveHard = [
	// wave 1
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemySoldier), 2)},
		// Spawn time per enemy
		1		
	
	],
	
	// wave 2
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyMissile), 2)},
		// Spawn time per enemy
		0.5
	],
	
	// wave 3
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyPlane), 2)},
		// Spawn time per enemy
		0.5
	],
	
	// wave 4
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.enemyTank), 2)},	
		// Spawn time per enemy
		1
	],
	
	// wave 5
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 6
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 7
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 8
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 9
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 10
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.wave4Enemy), 2)},	
		// Spawn time per enemy
		0.3
	]
]
