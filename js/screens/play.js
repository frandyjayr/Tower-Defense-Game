game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
		me.levelDirector.loadLevel("sample");
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
		me.game.world.addChild(me.pool.pull("wavemanagereasy", 608, 32), 1);
		//me.game.world.addChild(me.pool.pull("enemy", 608, 32), 1);
		me.game.world.addChild(me.pool.pull("end", 0, 416), 2);

    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
		me.game.world.removeChild(this.HUD);
    }
});