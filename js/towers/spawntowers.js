 game.SpawnTower = me.Entity.extend({
	init : function(x, y, settings) {
		this._super(me.Entity, "init", [x, y, {
			image: null,
			width : 224,
			height : 160										
		}]);
		// Instantiate Font
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
		
		// Instantiate type
		this.elementType = settings.missileType;
		
		// Instantiate map variables
		this.map = this.getMap();
		this.currentLocation = this.map[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
		this.towerMap = game.data.towerMap;
		
		// Instantiate location variables
		this.newTowerLocation = null;
		this.newLocation;

		// Instantiate tower related variables		
		this.body.collisionType = me.collision.types.NPC_OBJECT;
		this.lastPressedKey = null;
		this.upgradableTowerInfo;
		this.finalLevel;
		this.chooseTowerType();
		this.renderable;		
		this.towerCost;
		this.towerDamage;
		this.towerSpeed;
		
		// Instantiate boolean variables
		this.movedLocation = false;
		this.justSpawned = true;		
		this.alreadyClicked = false;
		this.onUpgradableTile;
		
		// Instantiate color code variables
		this.greenColor = '#006400';
		this.redColor = '#FF0000'
		this.yellowColor = '#FFFF33'
		this.setIndicatorColor(this.greenColor);
		
		// Instatiate in game child tower variables 
		this.spawnChild = new game.Tower(game.data.lastPlacedTowerX, game.data.lastPlacedTowerY, settings);
		this.spawnChild.collisionType = me.collision.types.PLAYER_OBJECT;
		me.game.world.addChild(this.spawnChild, 1);
	},

	/*
	 * The update function updates all necessary components to the
	 * corresponding class. It is automatically called by the melonJS
	 * engine and is updated per frame.
	 */	
	update : function(time) {


		if (this.elementType === 'FINALUPGRADE'){
			this.changeFinalUpgradeIndicator();	
		} else{
			this.changeIndicator();
		}
		this.moveSpawnTower();
		return false;
	},

	/*
	 * The changeIndicator function is used to change the transparent colored square
	 * around the spawn tower. This colored square indicates the range of the tower.
	 * The tower will attack anything within that transparent box range. In addition
	 * The colors signify important information to the user. If the square is a 
	 * transparent green, this means the tower can be placed. If the color is a
	 * transparent yellow, this means that the tower can be upgraded. If the color is
	 * a transparent red, this means that the tower cannot be placed there.
	 */
	changeIndicator: function() {
		var entity = this.getOverlappingTower();
		
		// Deals with indicator color for towers that newly spawn only
		if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X' && typeof entity !== null && this.elementType === 'FINALUPGRADE' && entity.towerLevel === 4){
			this.setIndicatorColor(this.greenColor);
			this.onUpgradableTile = true;
			this.finalLevel = false;
			this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo(); 
		
		}else if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X' && typeof entity !== null && entity.elementType === this.elementType && entity.towerLevel === 4) {
			this.setIndicatorColor(this.redColor);
			this.justSpawned = false;
			this.onUpgradableTile = false;
			this.finalLevel = true;
			this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo();
		
		}else if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X' && typeof entity !== null && entity.elementType === this.elementType && entity.towerLevel < 5) {
			this.setIndicatorColor(this.yellowColor);
			this.justSpawned = false;
			this.onUpgradableTile = true;
			this.finalLevel = false;
			this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo();
		} else if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X') {
			this.setIndicatorColor(this.redColor)
			this.justSpawned = false;
			this.finalLevel = false;
			this.onUpgradableTile = false;
		} else if (this.justSpawned && this.currentLocation === 'G') {
			this.setIndicatorColor(this.greenColor);
			this.justSpawned = false;
			this.finalLevel = false;
			this.onUpgradableTile = false;
		} else if (this.justSpawned && this.currentLocation !== 'G') {
			this.setIndicatorColor(this.redColor);
			this.justSpawned = false;
			this.finalLevel = false;
			this.onUpgradableTile = false;
		}

		// Deals with indicator color for towers that move around
		if (this.movedLocation) {
			
			if (this.newLocation === 'G' && this.newTowerLocation === 'X' && this.elementType === 'FINALUPGRADE' && entity.towerLevel === 4){
				this.setIndicatorColor(this.greenColor);
				this.onUpgradableTile = true;
				this.finalLevel = false;
				this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo(); 
			
			}else if (this.newLocation === 'G' && this.newTowerLocation === 'X' && entity.elementType === this.elementType && entity.towerLevel === 4){
				this.setIndicatorColor(this.redColor);
				this.onUpgradableTile = false;
				this.finalLevel = true;
				this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo(); 
			}else if (this.newLocation === 'G' && this.newTowerLocation === 'X' && entity.elementType === this.elementType && entity.towerLevel < 5){
				this.setIndicatorColor(this.yellowColor);
				this.onUpgradableTile = true;
				this.finalLevel = false;
				this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo();
			}else if (this.newLocation !== 'G' || this.newTowerLocation === 'X') {
				this.setIndicatorColor(this.redColor);
				this.finalLevel = false;
				this.onUpgradableTile = false;
			} else if (this.currentLocation === 'G' && this.newLocation === 'G' && 			this.newTowerLocation === 'O'){
				this.setIndicatorColor(this.greenColor);
				this.finalLevel = false;
				this.onUpgradableTile = false;
			}else if (this.currentLocation === this.newLocation){
				// do nothing
			} else if (this.currentLocation !== 'G' && this.newLocation === 'G') {
				this.setIndicatorColor(this.greenColor);
				this.finalLevel = false;
				this.onUpgradableTile = false;
			} 
			this.currentLocation = this.newLocation;
			this.movedLocation = false;
		}			
	},

	/**
     * This is a separate function for the final upgrade tower. It does the same thing as the 
	 * precedingfunction but needed to be separate from the previous function because its behavior 
	 * is pretty different.
     */
	
	changeFinalUpgradeIndicator: function() {
		var entity = this.getOverlappingTower();
		
		// Deals with indicator color for towers that newly spawn only
		if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X' && typeof entity !== null && entity.towerLevel === 4){
			this.setIndicatorColor(this.greenColor);
			this.setOpacity(0.3); // I have to manually set the opacity here . I dont know why
			this.justSpawned = false;
			this.onUpgradableTile = true;
			this.finalLevel = false;
			this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo(); 
		
		}else if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X' && typeof entity !== null && entity.towerLevel > 4) {
			this.setIndicatorColor(this.redColor);
			this.justSpawned = false;
			this.onUpgradableTile = false;
			this.finalLevel = true;
			this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo();

		}else if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X' && typeof entity !== null && entity.towerLevel < 4) {
			this.setIndicatorColor(this.redColor);
			this.justSpawned = false;
			this.onUpgradableTile = false;
			this.finalLevel = false;
			this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo();
		
		} else if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X') {
			this.setIndicatorColor(this.redColor)
			this.justSpawned = false;
			this.finalLevel = false;
			this.onUpgradableTile = false;
		} else if (this.justSpawned && this.currentLocation !== 'G') {
			this.setIndicatorColor(this.redColor);
			this.justSpawned = false;
			this.finalLevel = false;
			this.onUpgradableTile = false;
		}

		// Deals with indicator color for towers that move around		
		if (this.movedLocation) {
			
			if (this.newLocation === 'G' && this.newTowerLocation === 'X' && entity.towerLevel === 4){
				this.setIndicatorColor(this.greenColor);
				this.onUpgradableTile = true;
				this.finalLevel = false;
				this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo(); 		
			}else if (this.newLocation === 'G' && this.newTowerLocation === 'X' && entity.towerLevel > 4){
				this.setIndicatorColor(this.redColor);
				this.onUpgradableTile = false;
				this.finalLevel = true;
				this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo(); 
			}else if (this.newLocation === 'G' && this.newTowerLocation === 'X' && entity.towerLevel < 4){
				this.setIndicatorColor(this.redColor);
				this.onUpgradableTile = false;
				this.finalLevel = false;
				this.upgradableTowerInfo = this.getOverlappingTower().getTowerInfo();
			}else if (this.newLocation !== 'G' || this.newTowerLocation === 'X') {
				this.setIndicatorColor(this.redColor);
				this.finalLevel = false;
				this.onUpgradableTile = false;
			} else if (this.currentLocation === 'G' && this.newLocation === 'G' && 			this.newTowerLocation === 'O'){
				this.setIndicatorColor(this.redColor);
				this.finalLevel = false;
				this.onUpgradableTile = false;
			}else if (this.currentLocation === this.newLocation){
				// do nothing
			} else if (this.currentLocation !== 'G' && this.newLocation === 'G') {
				this.setIndicatorColor(this.redColor);
				this.finalLevel = false;
				this.onUpgradableTile = false;
			} 
			this.currentLocation = this.newLocation;
			this.movedLocation = false;
		}			
	},

	/*
	 * The moveSpawnTower function allows the user to move the spawned tower around the
	 * board b using the arrow keys. Because each square is 32 x 32 pixels, once movement
	 * will change the x and y location by only 32 based on which arrow key is pressed.
	 * Changing the tower location also updates various boolean variables such as 
	 * lastPressedKey, movedLocation, and more. Also, the position of the x and y gets
	 * updated to account for the changed position.
	 */
	moveSpawnTower: function() {
		if (me.input.isKeyPressed("left") && this.alreadyClicked === false && this.withinRange("left")) {
			this.alreadyClicked = true;
			this.pos.x -= 32	
			this.spawnChild.pos.x -= 32;
			this.lastPressedKey = "left";
			this.movedLocation = true;
			this.newLocation = this.map[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
			this.newTowerLocation = this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];	
		} else if (me.input.isKeyPressed("right") && this.alreadyClicked === false && this.withinRange("right")) {
			this.alreadyClicked = true;
			this.pos.x += 32;
			this.spawnChild.pos.x += 32;
			this.lastPressedKey = "right";
			this.movedLocation = true;
			this.newLocation = this.map[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
			this.newTowerLocation = this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
		} else if (me.input.isKeyPressed("up") && this.alreadyClicked === false && this.withinRange("up")) {
			this.alreadyClicked = true;
			this.pos.y -= 32;
			this.spawnChild.pos.y -= 32;
			this.lastPressedKey = "up";
			this.movedLocation = true;
			this.newLocation = this.map[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
			this.newTowerLocation = this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
		} else if (me.input.isKeyPressed("down") && this.alreadyClicked === false && this.withinRange("down")) {
			this.alreadyClicked = true;
			this.pos.y += 32;
			this.spawnChild.pos.y += 32;
			this.lastPressedKey = "down";
			this.movedLocation = true;
			this.newLocation = this.map[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
			this.newTowerLocation = this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
		} else if (me.input.isKeyPressed("esc")) {
			me.game.world.removeChild(this);
			me.game.world.removeChild(this.spawnChild);
		} else if (me.input.isKeyPressed("enter") && this.currentLocation === 'G' && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] !== 'X') {
			if (this.elementType !== 'FINALUPGRADE') {
				this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] = 'X';
				this.spawnChild.toggleTower();
				this.spawnChild.buyTower();
				game.data.lastPlacedTowerX = this.pos.x;
				game.data.lastPlacedTowerY = this.pos.y;
				me.game.world.removeChild(this);			
			}

		} else if (me.input.isKeyPressed("enter") && this.currentLocation === 'G' && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X') {
			var entity = this.getOverlappingTower();
				if (this.sameTower(entity)) {
					if (this.elementType === 'FINALUPGRADE' && game.data.gold >= game.data.finalUpgradeCost && entity.towerLevel === 4){
						entity.upgradeTowerFinal();
						game.data.lastPlacedTowerX = this.pos.x;
						game.data.lastPlacedTowerY = this.pos.y;
						me.game.world.removeChild(this);
					}
					else if ((game.data.gold >= game.data.towerAirCost || game.data.gold >= game.data.towerFireCost || game.data.gold >= game.data.towerEarthCost ||
					game.data.gold >= game.data.towerWaterCost) && this.elementType !== 'FINALUPGRADE'){
						entity.upgradeTower();
						game.data.lastPlacedTowerX = this.pos.x;
						game.data.lastPlacedTowerY = this.pos.y;
						me.game.world.removeChild(this);
					}

				}

		} else if (me.input.isKeyPressed("enter") && this.currentLocation !== 'G') {
			game.data.towerButtonPressed = true;
		}

		if (me.input.isKeyPressed("left") === false && this.lastPressedKey === "left") {
			this.alreadyClicked = false;
		} else if (me.input.isKeyPressed("right") === false && this.lastPressedKey === "right") {
			this.alreadyClicked = false;
		} else if (me.input.isKeyPressed("up") === false && this.lastPressedKey === "up") {
			this.alreadyClicked = false;
		} else if (me.input.isKeyPressed("down") === false && this.lastPressedKey === "down") {
			this.alreadyClicked = false;
		}			
	},
	
	/*
	 * The getOverlappingTower function is used to retrieve a tower that is
	 * overlapping the current spawned tower. This is used for upgrade purposed
	 * to ensure that the currently placed tower is the same as the spawn tower
	 * that is overlapping it. If not, it returns false. If it is the same tower,
	 * it returns true.
	 */
	getOverlappingTower: function() {
		var entity = me.collision.quadTree.retrieve(this);
		for (var i = 0; i < entity.length; i++) {
			if (entity[i].collisionType === me.collision.types.PLAYER_OBJECT && entity[i] !== this && entity[i] !== this.spawnChild && this.sameTower(entity[i])) {
				return entity[i];
			}
		}
		game.data.towerButtonPressed = true;
		return false;
	},
	 
	/* 
	 * The sameTower function returns true or false if the passed entit is the 
	 * same tower type. If the same, it returns true and if not it returns
	 * false.
	 */
	sameTower: function(entity) {
		if ((this.elementType === entity.elementType || this.elementType === 'FINALUPGRADE') && this.pos.y === entity.pos.y && this.pos.x === entity.pos.x) {
			return true;
		}
		return false;
	},
	 
	/*
	 * The draw function is a built in function from the MelonJS framework/engine
	 * that will be automatically called. It renders all necessary entities or
	 * UI content.
	 */	
	draw: function(renderer) {
		this._super(me.Entity, "draw", [renderer]);	
		// IF WE ARE USING FINAL UPGRADE ELEMENT.
		// This is split up into four if statements so we can use individual upgrades instead of making it all linear. For instance, lvl 5 upgrade might increase 
		// air tower damage by 3x but fire tower damage by 15x
		if (this.onUpgradableTile && this.elementType === 'FINALUPGRADE'){
			this.font.resize(0.45);
			this.font.draw(renderer, "Cost: 1000", -100, -75);
			if (this.upgradableTowerInfo.elementType === 'AIR'){
				this.font.draw(renderer, "Damage: ", -100, -60);
				this.font.draw(renderer, this.upgradableTowerInfo.missileDamage + "-> " + (this.upgradableTowerInfo.missileDamage + 4), -18, -60);
				this.font.draw(renderer, "Speed: ", -100, -45);
				this.font.draw(renderer, (1 / this.upgradableTowerInfo.spawnTime).toFixed(2) + "-> " + "MAX SPEED", -28, -45);
				this.font.draw(renderer, "Tower Level: ", -103, -30);
				this.font.draw(renderer, this.upgradableTowerInfo.level + "-> " + (this.upgradableTowerInfo.level + 1), 25, -30);
			}else if (this.upgradableTowerInfo.elementType === 'WATER'){
				this.font.draw(renderer, "Slow Duration: ", -100, -60);
				this.font.draw(renderer, (this.upgradableTowerInfo.level + 5) + "-> " + "PERMANENT AOE SLOW", 48, -60);
				this.font.draw(renderer, "Speed: ", -100, -45);
				this.font.draw(renderer, (1 / this.upgradableTowerInfo.spawnTime).toFixed(2) + "-> " + (1 / (this.upgradableTowerInfo.spawnTime - 0.2)).toFixed(2), -28, -45);
				this.font.draw(renderer, "Tower Level: ", -103, -30);
				this.font.draw(renderer, this.upgradableTowerInfo.level + "-> " + (this.upgradableTowerInfo.level + 1), 25, -30);
			} else if (this.upgradableTowerInfo.elementType === 'EARTH'){
				this.font.draw(renderer, "Damage: ", -100, -60);
				this.font.draw(renderer, this.upgradableTowerInfo.missileDamage + "-> " + "MAX DAMAGE", -18, -60);
				this.font.draw(renderer, "Speed: ", -100, -45);
				this.font.draw(renderer, (1 / this.upgradableTowerInfo.spawnTime).toFixed(2) + "-> " + (1 / (this.upgradableTowerInfo.spawnTime - 0.2)).toFixed(2), -28, -45);
				this.font.draw(renderer, "Tower Level: ", -103, -30);
				this.font.draw(renderer, this.upgradableTowerInfo.level + "-> " + (this.upgradableTowerInfo.level + 1), 25, -30);
			} else if (this.upgradableTowerInfo.elementType === 'FIRE'){
				this.font.draw(renderer, "Damage: ", -100, -60);
				this.font.draw(renderer, this.upgradableTowerInfo.missileDamage + "-> " + (this.upgradableTowerInfo.missileDamage + 15), -18, -60);
				this.font.draw(renderer, "Speed: ", -100, -45);
				this.font.draw(renderer, (1 / this.upgradableTowerInfo.spawnTime).toFixed(2) + "-> " + (1 / (this.upgradableTowerInfo.spawnTime - 0.2)).toFixed(2), -28, -45);
				this.font.draw(renderer, "Tower Level: ", -103, -30);
				this.font.draw(renderer, this.upgradableTowerInfo.level + "-> " + (this.upgradableTowerInfo.level + 1), 25, -30);
				this.font.draw(renderer, "Additional Effect:", -100, -15);
				this.font.draw(renderer, "Permanent burn damage", -100, 0);
			}		
		}
		
		// Above pertains only to final upgrade stuff. The rest is below

		else if (this.onUpgradableTile) {
			// added more if statements so we can customize linear increase values
			this.font.resize(0.45);
			this.font.draw(renderer, "Cost: ", -100, -75);
			this.font.draw(renderer, (this.upgradableTowerInfo.towerCost), -38, - 75);
			if (this.upgradableTowerInfo.elementType === 'AIR'){
				this.font.draw(renderer, "Damage: ", -100, -60);
				this.font.draw(renderer, this.upgradableTowerInfo.missileDamage + "-> " + (this.upgradableTowerInfo.missileDamage + game.data.airUpgradeDamage), -18, -60);
				this.font.draw(renderer, "Speed: ", -100, -45);
				this.font.draw(renderer, (1 / this.upgradableTowerInfo.spawnTime).toFixed(2) + "-> " + (1 / (this.upgradableTowerInfo.spawnTime - game.data.airTowerSpawnTimeReduction)).toFixed(2), -28, -45);
				this.font.draw(renderer, "Tower Level: ", -103, -30);
				this.font.draw(renderer, this.upgradableTowerInfo.level + "-> " + (this.upgradableTowerInfo.level + 1), 25, -30);
			}else if (this.upgradableTowerInfo.elementType === 'WATER'){
				this.font.draw(renderer, "Slow Duration: ", -100, -60);
				this.font.draw(renderer, (this.upgradableTowerInfo.level + 5) + "-> " + (this.upgradableTowerInfo.level + 6), 48, -60);
				this.font.draw(renderer, "Speed: ", -100, -45);
				this.font.draw(renderer, (1 / this.upgradableTowerInfo.spawnTime).toFixed(2) + "-> " + (1 / (this.upgradableTowerInfo.spawnTime - game.data.waterTowerSpawnTimeReduction)).toFixed(2), -28, -45);
				this.font.draw(renderer, "Tower Level: ", -103, -30);
				this.font.draw(renderer, this.upgradableTowerInfo.level + "-> " + (this.upgradableTowerInfo.level + 1), 25, -30);
			} else if (this.upgradableTowerInfo.elementType === 'EARTH'){
				this.font.draw(renderer, "Damage: ", -100, -60);
				this.font.draw(renderer, this.upgradableTowerInfo.missileDamage + "-> " + (this.upgradableTowerInfo.missileDamage + game.data.earthUpgradeDamage), -18, -60);
				this.font.draw(renderer, "Speed: ", -100, -45);
				this.font.draw(renderer, (1 / this.upgradableTowerInfo.spawnTime).toFixed(2) + "-> " + (1 / (this.upgradableTowerInfo.spawnTime - game.data.earthTowerSpawnTimeReduction)).toFixed(2), -28, -45);
				this.font.draw(renderer, "Tower Level: ", -103, -30);
				this.font.draw(renderer, this.upgradableTowerInfo.level + "-> " + (this.upgradableTowerInfo.level + 1), 25, -30);
			} else if (this.upgradableTowerInfo.elementType === 'FIRE'){
				this.font.draw(renderer, "Damage: ", -100, -60);
				this.font.draw(renderer, this.upgradableTowerInfo.missileDamage + "-> " + (this.upgradableTowerInfo.missileDamage + game.data.fireUpgradeDamage), -18, -60);
				this.font.draw(renderer, "Speed: ", -100, -45);
				this.font.draw(renderer, (1 / this.upgradableTowerInfo.spawnTime).toFixed(2) + "-> " + (1 / (this.upgradableTowerInfo.spawnTime - game.data.fireTowerSpawnTimeReduction)).toFixed(2), -28, -45);
				this.font.draw(renderer, "Tower Level: ", -103, -30);
				this.font.draw(renderer, this.upgradableTowerInfo.level + "-> " + (this.upgradableTowerInfo.level + 1), 25, -30);
			}
		} else if (this.finalLevel){
			this.font.resize(0.45);
			if (this.elementType === "WATER"){
				this.font.draw(renderer, "Slow Duration: ", -100, -75);
				this.font.draw(renderer, (this.upgradableTowerInfo.level + 5), 58, -75);
			}
			else{
				this.font.draw(renderer, "Damage: ", -100, -75);
				this.font.draw(renderer, this.upgradableTowerInfo.missileDamage, -38, -75);
			}		
			this.font.draw(renderer, "Speed: ", -100, -60);
			this.font.draw(renderer, this.upgradableTowerInfo.spawnTime.toFixed(2), -18, -60);		
			
			this.font.draw(renderer, "Tower Level: Max", -100, -30);
		} else {
			this.font.resize(0.5);
			if (this.elementType === "FINALUPGRADE")
			{
				this.font.draw(renderer, "Select a level 4", -100, -75);
				this.font.draw(renderer, "Tower to upgrade", -100, -55);
			}
			else{
				this.font.draw(renderer, "Cost: ", -100, -75);
				this.font.draw(renderer, this.towerCost, -38, - 75);

				if (this.elementType === "WATER"){
					this.font.draw(renderer, "Slow Duration: ", -100, -55);
					this.font.draw(renderer, 5, 58, -55);
				}
				else{
					this.font.draw(renderer, "Damage: ", -100, -55);
					this.font.draw(renderer, this.towerDamage, -18, -55);
				}		
				


				this.font.draw(renderer, "Speed: ", -100, -35);
				this.font.draw(renderer, this.towerSpeed.toFixed(2) , -28, -35);
			}
			
		}
	
		// Draw the special ability of non Final Towers
		if (this.elementType === "FIRE") {
			this.font.draw(renderer, "Special Ability", -100, 35);
			this.font.draw(renderer, "- AOE Damage", -100, 55);
	
		} else if (this.elementType === "WATER") {
			this.font.draw(renderer, "Special Ability", -100, 35);
			this.font.draw(renderer, "- Slows Enemies", -100, 55);			
		}

	},	

	/*
	 * The chooseTowerType function is used to assign the type of tower
	 * to be spawned. Based on the element type, the appropriate towerCost,
	 * towerDamage, and towerSpeed is assigned.
	 */
	chooseTowerType: function() {
		if (this.elementType === "AIR") {
			this.towerCost = game.data.towerAirCost;
			this.towerDamage = game.data.airMissileDamage;
			this.towerSpeed = 1 / game.data.airMissileSpawnTime;
		} else if (this.elementType === "EARTH") {
			this.towerCost = game.data.towerEarthCost;
			this.towerDamage = game.data.EarthMissileDamage;
			this.towerSpeed = 1 / game.data.earthMissileSpawnTime
		} else if (this.elementType === "FIRE") {
			this.towerCost = game.data.towerFireCost;			
			this.towerDamage = game.data.FireMissileDamage;
			this.towerSpeed = 1 / game.data.fireMissileSpawnTime
		} else if (this.elementType === "WATER") {
			this.towerCost = game.data.towerWaterCost;			
			this.towerDamage = game.data.WaterMissileDamage;
			this.towerSpeed = 1 / game.data.waterMissileSpawnTime
		} else if (this.elementType === "FINALUPGRADE") {
			this.towerCost = game.data.finalUpgradeCost;			
			this.towerDamage = "1000";
			this.towerSpeed = 1000
		}
	},

	/*
	 * The setIndicatorColor function is used to quickly change the indicator
	 * box color based on the color code passed. This box is transparent color.
	 * In this specific update, only green, red, and yellow are used.
	 */
	setIndicatorColor: function(colorCode) {
		// Create a renderable box based on the colorCode variable
		this.renderable = new (me.Renderable.extend({
			init : function () {
				this._super(me.Renderable, "init", [0, 0, 224, 160]);
			},
			destroy : function () {},
			draw : function (renderer) {
				var color = renderer.getColor();
				// Fill Rectangle color and make transparent
				renderer.setColor(colorCode);
				renderer.fillRect(0, 0, this.width, this.height);
				renderer.setColor(color);
				this.setOpacity(0.3);
			}
		}));			
	},

	/*
	 * The withinRange function is used to check if the movement the user mvoes
	 * the current spawn tower is within the bounds of the given screen. If so,
	 * the function returns true, else if outside the screen, the function will
	 * return false.
	 */
	withinRange: function(direction) {
		switch(direction) {
			case "left":
				if (this.pos.x + 96 - 32 >= game.data.gameScreenStartPosX) {
					return true;
				}
				break;
			case "right":
				if (this.pos.x - 96 + this.width <= game.data.gameScreenEndPosX) {
					return true;
				}
				break;
			case "up":
				if (this.pos.y + 64 - 32 >= game.data.gameScreenStartPosY) {
					return true;
				}
				break;
			case "down":
				if (this.pos.y - 64 + this.height <= game.data.gameScreenEndPosY) {
					return true;
				}
		}
		return false;
	},

	/* 
	 * The getMap function is used to retrieve the map for the game based on 
	 * the difficuly the player chooses at the beginning of the game. The
	 * function returns a map type.
	 */
	getMap: function() {
		if (game.data.gameDifficulty === 'EASY') {
			return game.mapEasy;
		}
		else if (game.data.gameDifficulty === 'MEDIUM') {
			return game.mapMedium;
		}
		else if (game.data.gameDifficulty === 'HARD') {
			return game.mapHard;
		}
	}
		
});
