game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {

		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.UP, "up");
		me.input.bindKey(me.input.KEY.DOWN, "down");
		me.input.bindKey(me.input.KEY.Q, "Q");
		me.input.bindKey(me.input.KEY.ESC, "esc");
		me.input.bindKey(me.input.KEY.ENTER, "enter");
		me.input.bindKey(me.input.KEY.P, "P");
		
		game.data.towerMap = Array(15).fill().map(() => Array(20).fill('O'));
		me.levelDirector.loadLevel("easy_map");

		this.HUD = new game.HUD.Container();

		me.game.world.addChild(me.pool.pull("wavemanagereasy", 608, 32), 1);
		
		me.game.world.addChild(me.pool.pull("end", 288, 448), 2);
		//me.game.world.addChild(me.pool.pull("buttonTowerAir", game.data.utilityScreenStartPosX + 96, game.data.utilityScreenStartPosY + 32), 4);
		//me.game.world.addChild(me.pool.pull("buttonTowerAir", game.data.utilityScreenStartPosX + 64, game.data.utilityScreenStartPosY + 64), 4);

	
		me.game.world.addChild(me.pool.pull("towermanager", 0 ,0), 4);
		//me.game.world.addChild(me.pool.pull("towerAir", -32, 0), 3);

		me.game.world.addChild(this.HUD, 4);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
		me.game.world.removeChild(this.HUD);
    }
});