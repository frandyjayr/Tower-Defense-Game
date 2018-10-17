game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
		me.levelDirector.loadLevel("sample");
		//me.game.world.addChild(me.pool.pull("player"), 1);
		me.game.world.addChild(me.pool.pull("enemy", 608, 32), 2);

    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {

    }
});