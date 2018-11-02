game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
		this.bindKeys();
		this.resetData();
		this.addEntities();
    },
	
	update: function(dt) {
		this._super(me.ScreenObject, "update", [dt]);
	},

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
        me.input.unbindKey(me.input.KEY.Q);
        me.input.unbindKey(me.input.KEY.W);
        me.input.unbindKey(me.input.KEY.E);
        me.input.unbindKey(me.input.KEY.R);
        me.input.unbindKey(me.input.KEY.ESC);
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindKey(me.input.KEY.P);
        me.input.unbindKey(me.input.KEY.M);	
		me.game.world.removeChild(this.HUD);
    },
	
	loadLevel: function(level) {
		switch(level) {
			case 'EASY':
				return 'easy_map';
			case 'MEDIUM':
				return 'medium_map';
			case 'HARD':
				return 'hard_map';
		}	
	},
	
	resetData: function() {
		game.data.towerMap = Array(15).fill().map(() => Array(20).fill('O'));
		me.levelDirector.loadLevel(this.loadLevel(game.data.gameDifficulty));
		
		game.data.gold = game.data.startingGold;
		game.data.waveNumber = 1;
		game.data.score = 0;
		game.data.health = game.data.startingHealth;
		
	},
	
	bindKeys: function() {
		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.UP, "up");
		me.input.bindKey(me.input.KEY.DOWN, "down");
		me.input.bindKey(me.input.KEY.Q, "Q");
		me.input.bindKey(me.input.KEY.W, "W");
		me.input.bindKey(me.input.KEY.E, "E");
		me.input.bindKey(me.input.KEY.R, "R");
		me.input.bindKey(me.input.KEY.ESC, "esc");
		me.input.bindKey(me.input.KEY.ENTER, "enter");
		me.input.bindKey(me.input.KEY.P, "P");
		me.input.bindKey(me.input.KEY.M, "M");		
	},
	
	addEntities: function() {
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD, 4);
		me.game.world.addChild(me.pool.pull("wavemanagereasy", 608, 32), 1);
		me.game.world.addChild(me.pool.pull("end", 288, 448), 2);
		me.game.world.addChild(me.pool.pull("towermanager", 0 ,0), 4);	
		me.game.world.addChild(me.pool.pull("inGameMenu", 0 ,0), 6);			
	}
});