game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
		me.levelDirector.loadLevel("easy_map");
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
		me.game.world.addChild(me.pool.pull("wavemanagereasy", 608, 32), 1);
		//me.game.world.addChild(me.pool.pull("enemy", 608, 32), 1);
		me.game.world.addChild(me.pool.pull("end", 288, 448), 2);

		me.game.world.addChild(me.pool.pull("buttonTowerAir", game.data.utilityScreenStartPosX + 64, game.data.utilityScreenStartPosY + 64), 4);
	
		me.game.world.addChild(me.pool.pull("towermanager", 0 ,0), 4);
		//me.game.world.addChild(me.pool.pull("towerAir", -32, 0), 3);

    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
		me.game.world.removeChild(this.HUD);
    }
});