game.titlescreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        console.log("gotem");
        var backgroundImage = new me.Sprite(0, 0, {image: me.loader.getImage('title_screen'),});
        backgroundImage.anchorPoint.set(0, 0);
        backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);

        me.game.world.addChild(backgroundImage, 1); // add
        //me.audio.playTrack("mp3,mainmenu"); 
        me.game.world.addChild(new (me.Renderable.extend ({

            init : function() {
                this._super(me.Renderable, 'init', [0, 0, me.game.viewport.width, me.game.viewport.height]);

                this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
                //this.font.lineWidth = "2";
                //this.font.textAlign = "center";
                //this.font.setOpacity (1);
                this.title = "Welcome to Element Tower Defense!";
                this.start = "Press Enter to Start";
                
            },    

            update : function (dt) {
                return true;
            },

            draw : function (renderer) {
                this.font.draw(renderer, this.title, 420, 500);
                this.font.draw(renderer, this.start, 550, 540);
                //console.log("draw stuff");
            },


        })), 2);


        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
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
        me.event.unsubscribe(this.handler);
    }
});