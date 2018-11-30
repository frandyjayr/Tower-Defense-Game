// Wave Easy Mode
game.waveEasy = [
	// wave 1. 10 units. Medium health, medium speed
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave1Enemy), 2)},
		// Spawn time per enemy
		0.6
	],
	
	// wave 2. 5 units. Very slow and very high hp
	[	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave2Enemy), 2)},	
		// Spawn time per enemy
		3
	],
	
	// wave 3. 30 units. Very fast and very low hp
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave3Enemy), 2)},
		// Spawn time per enemy
		0.2
	],
	
	// wave 4. more Airplanes
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave4Enemy), 2)},	
		// Spawn time per enemy
		4
	],
	
	// wave 5
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave5Enemy), 2)},	
		
		// Spawn time per enemy
		0.3
	],
	
	// wave 6
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave6Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 7
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave7Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave7Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave7Enemy), 2)},	
		// Spawn time per enemy
		2
	],
	
	// wave 8
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave8Enemy), 2)},				
		// Spawn time per enemy
		0.2
	],
	
	// wave 9
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave9Enemy), 2)},	
		
		// Spawn time per enemy
		3
	],
	
	// wave 10
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.ewave10Enemy), 2)},
		// Spawn time per enemy
		0.3
	]
]

game.waveMedium = [
	// wave 1. 10 units. Medium health, medium speed
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave1Enemy), 2)},
		// Spawn time per enemy
		0.6
	],
	
	// wave 2. 5 units. Very slow and very high hp
	[	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave2Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave2Enemy), 2)},		
		// Spawn time per enemy
		1.5
	],
	
	// wave 3. 30 units. Very fast and very low hp
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave3Enemy), 2)},
		// Spawn time per enemy
		0.2
	],
	
	// wave 4. more Airplanes
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave4Enemy), 2)},
		// Spawn time per enemy
		2.5
	],
	
	// wave 5
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave5Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave5Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave5Enemy), 2)},
		
		// Spawn time per enemy
		0.3
	],
	
	// wave 6
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave6Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 7
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave7Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave7Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave7Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave7Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave7Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave7Enemy), 2)},		
		// Spawn time per enemy
		2
	],
	
	// wave 8
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave8Enemy), 2)},				
		// Spawn time per enemy
		0.2
	],
	
	// wave 9
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave9Enemy), 2)},	
		
		// Spawn time per enemy
		3
	],
	
	// wave 10
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave10Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.mwave10Enemy), 2)},
		// Spawn time per enemy
		0.6
	]
]

game.waveHard = [
	// wave 1. 10 units. Medium health, medium speed
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)}, 
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave1Enemy), 2)},
		// Spawn time per enemy
		0.6
	],
	
	// wave 2. 5 units. Very slow and very high hp
	[	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave2Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave2Enemy), 2)},	
		// Spawn time per enemy
		3
	],
	
	// wave 3. 30 units. Very fast and very low hp
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},		
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave3Enemy), 2)},
		// Spawn time per enemy
		0.2
	],
	
	// wave 4. more Airplanes
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave4Enemy), 2)},	
		// Spawn time per enemy
		4
	],
	
	// wave 5
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave5Enemy), 2)},	
		
		// Spawn time per enemy
		0.3
	],
	
	// wave 6
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave6Enemy), 2)},	
		// Spawn time per enemy
		0.3
	],
	
	// wave 7
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave7Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave7Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave7Enemy), 2)},	
		// Spawn time per enemy
		2
	],
	
	// wave 8
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave8Enemy), 2)},				
		// Spawn time per enemy
		0.2
	],
	
	// wave 9
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave9Enemy), 2)},	
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave9Enemy), 2)},	
		
		// Spawn time per enemy
		3
	],
	
	// wave 10
	[
		function() {me.game.world.addChild(me.pool.pull("enemy", 64, 0, game.hwave10Enemy), 2)},
		// Spawn time per enemy
		0.3
	]
]
