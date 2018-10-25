    game.SpawnTower = me.Entity.extend({
        init : function(x, y, settings, missileType) {
            // position, width, height
            this._super(me.Entity, "init", [x, y, {
				image: "towerAir.png",
            	width : 224,
          		height : 160										
			}]);
			//this.anchorPoint.set(0.075,0.1);
			this.alreadyClicked = false;
			this.lastPressedKey = null;
			this.currentLocation = 'G';
			this.movedLocation = false;
			this.justSpawned = true;
			this.newTowerLocation = null;
			this.newLocation;
			this.body.collisionType = me.collision.types.NPC_OBJECT;
			this.map = this.getMap();
			this.towerMap = game.data.towerMap;
			
			this.renderable = new (me.Renderable.extend({
				init : function () {
					this._super(me.Renderable, "init", [0, 0, 224, 160]);
				},
				destroy : function () {},
				draw : function (renderer) {
					var color = renderer.getColor();
					renderer.setColor('#5EFF7E');
					renderer.fillRect(0, 0, this.width, this.height);
					renderer.setColor(color);
					this.setOpacity(0.3);
				}
			}));
			
			this.spawnChild = new game.Tower(0, 0, settings, missileType);
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
				this.setIndicatorColor('#FF0000')
				this.justSpawned = false;
			}

			if (this.movedLocation) {

				if (this.newLocation !== 'G' || this.newTowerLocation === 'X') {
					this.setIndicatorColor('#FF0000');
				} else if (this.currentLocation === 'G' && this.newLocation === 'G' && 			this.newTowerLocation === 'O'){
					this.setIndicatorColor('#5EFF7E');
				}else if (this.currentLocation === this.newLocation){
					// do nothing
				} else if (this.currentLocation !== 'G' && this.newLocation === 'G') {
					this.setIndicatorColor('#5EFF7E');
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
				me.game.world.removeChild(this);
				this.towerMap[(this.pos.y + 64) / 32][(this.pos.x + 96) / 32] = 'X';
				this.spawnChild.toggleTower();
				this.spawnChild.buyTower();
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
		}
		
});
