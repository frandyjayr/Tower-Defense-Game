game.titlescreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        var backgroundImage = new me.Sprite(0, 0, {image: me.loader.getImage('title_screen'),});
        backgroundImage.anchorPoint.set(0, 0);
        backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);

        me.game.world.addChild(backgroundImage, 1); // add
        //me.audio.playTrack("mp3,mainmenu"); 
        me.game.world.addChild(new (me.Renderable.extend ({

            init : function() {
                this._super(me.Renderable, 'init', [0, 0, me.game.viewport.width, me.game.viewport.height]);

                this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));


                
            },    

            update : function (dt) {
				this.changeDifficulty();
                return true;
            },

            draw : function (renderer) {
                this.font.draw(renderer, "< ", 655, 640);
				if (game.data.gameDifficulty === 'MEDIUM') {
					this.font.draw(renderer, game.data.gameDifficulty, 700, 640);					
				} else {
                	this.font.draw(renderer, game.data.gameDifficulty, 720, 640);					
				}
                this.font.draw(renderer, " >", 830, 640);
            },
	
			changeDifficulty: function() {
				if (me.input.isKeyPressed("right")) {

					if (game.data.gameDifficulty === 'EASY') {
						game.data.gameDifficulty = 'MEDIUM'; 			
					} else if (game.data.gameDifficulty === 'MEDIUM') {
						game.data.gameDifficulty = 'HARD'
					} else if (game.data.gameDifficulty === 'HARD') {
						game.data.gameDifficulty = 'EASY'
					}
				} else if (me.input.isKeyPressed("left")) {
					if (game.data.gameDifficulty === 'EASY') {
						game.data.gameDifficulty = 'HARD'; 			
					} else if (game.data.gameDifficulty === 'MEDIUM') {
						game.data.gameDifficulty = 'EASY'
					} else if (game.data.gameDifficulty === 'HARD') {
						game.data.gameDifficulty = 'MEDIUM'
					}
				}		
			}


        })), 2);


        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindKey(me.input.KEY.RIGHT, "right", true);
        me.input.bindKey(me.input.KEY.LEFT, "left", true);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action) {
            if (action === "enter") {              
                me.state.change(me.state.PLAY);
            } 
        });
        
    },
    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.LEFT);
        me.event.unsubscribe(this.handler);
    }
});