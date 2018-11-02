 game.SpawnTower = me.Entity.extend({
	init : function(x, y, settings) {
		// position, width, height
		this._super(me.Entity, "init", [x, y, {
			image: null,
			width : 224,
			height : 160										
		}]);
		//this.anchorPoint.set(0.075,0.1);
		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
		this.elementType = settings.missileType;
		this.towerCost;
		this.towerDamage;
		this.towerSpeed;
		this.alreadyClicked = false;
		this.lastPressedKey = null;
		this.map = this.getMap();
		this.currentLocation = this.map[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32];
		this.movedLocation = false;
		this.justSpawned = true;
		this.newTowerLocation = null;
		this.newLocation;
		this.body.collisionType = me.collision.types.NPC_OBJECT;
		this.towerMap = game.data.towerMap;
		this.chooseTowerType();

		this.renderable;
		this.setIndicatorColor(this.greenColor);
		
		this.greenColor = '#006400';
		this.redColor = '#FF0000'
		this.spawnChild = new game.Tower(game.data.lastPlacedTowerX, game.data.lastPlacedTowerY, settings);
		this.spawnChild.collisionType = me.collision.types.PLAYER_OBJECT;
		me.game.world.addChild(this.spawnChild, 1);
	},

	update : function(time) {

		this.changeIndicator();
		this.moveSpawnTower();
		return false;
	},

	changeIndicator: function() {
		if (this.justSpawned && this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] === 'X') {
			this.setIndicatorColor(this.redColor)
			this.justSpawned = false;
		} else if (this.justSpawned && this.currentLocation === 'G') {
			this.setIndicatorColor(this.greenColor);
			this.justSpawned = false;
		} else if (this.justSpawned && this.currentLocation !== 'G') {
			this.setIndicatorColor(this.redColor);
			this.justSpawned = false;
		}

		if (this.movedLocation) {

			if (this.newLocation !== 'G' || this.newTowerLocation === 'X') {
				this.setIndicatorColor(this.redColor);
			} else if (this.currentLocation === 'G' && this.newLocation === 'G' && 			this.newTowerLocation === 'O'){
				this.setIndicatorColor(this.greenColor);
			}else if (this.currentLocation === this.newLocation){
				// do nothing
			} else if (this.currentLocation !== 'G' && this.newLocation === 'G') {
				this.setIndicatorColor(this.greenColor);
			} 
			this.currentLocation = this.newLocation;
			this.movedLocation = false;
		}			
	},


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
			this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] = 'X';
			this.spawnChild.toggleTower();
			this.spawnChild.buyTower();
			game.data.lastPlacedTowerX = this.pos.x;
			game.data.lastPlacedTowerY = this.pos.y;
			me.game.world.removeChild(this);
		}  else if (me.input.isKeyPressed("enter") && this.currentLocation !== 'G') {
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

	draw: function(renderer) {
		this._super(me.Entity, "draw", [renderer]);	

		this.font.resize(0.5);
		this.font.draw(renderer, "Cost: ", -100, -75);
		this.font.draw(renderer, this.towerCost, -38, - 75);

		this.font.draw(renderer, "Damage: ", -100, -55);
		this.font.draw(renderer, this.towerDamage, -18, -55);


		this.font.draw(renderer, "Speed: ", -100, -35);
		this.font.draw(renderer, this.towerSpeed , -28, -35);
		
		if (this.elementType === "FIRE") {
			this.font.draw(renderer, "Special Ability", -100, 35);
			this.font.draw(renderer, "- AOE Damage", -100, 55);
	
		} else if (this.elementType === "WATER") {
			this.font.draw(renderer, "Special Ability", -100, 35);
			this.font.draw(renderer, "- Slows Enemies", -100, 55);			
		}

	},	
	 
	chooseTowerType: function() {
		if (this.elementType === "AIR") {
			this.towerCost = game.data.towerAirCost;
			this.towerDamage = game.data.airMissileDamage;
			this.towerSpeed = "Very Fast";
		} else if (this.elementType === "EARTH") {
			this.towerCost = game.data.towerEarthCost;
			this.towerDamage = game.data.EarthMissileDamage;
			this.towerSpeed = "Very Slow"
		} else if (this.elementType === "FIRE") {
			this.towerCost = game.data.towerFireCost;			
			this.towerDamage = game.data.FireMissileDamage;
			this.towerSpeed = "Medium"
		} else if (this.elementType === "WATER") {
			this.towerCost = game.data.towerWaterCost;			
			this.towerDamage = game.data.WaterMissileDamage;
			this.towerSpeed = "Medium"
		}
	},
	setIndicatorColor: function(colorCode) {
		this.renderable = new (me.Renderable.extend({
			init : function () {
				this._super(me.Renderable, "init", [0, 0, 224, 160]);
			},
			destroy : function () {},
			draw : function (renderer) {
				var color = renderer.getColor();
				renderer.setColor(colorCode);
				renderer.fillRect(0, 0, this.width, this.height);
				renderer.setColor(color);
				this.setOpacity(0.3);
			}
		}));			
	},

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
