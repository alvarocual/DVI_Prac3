var game = function() {
var Q = window.Q = Quintus()
	.include("Scenes, Sprites, Input, UI, Touch, TMX, Anim, 2D")
	.setup({ width: 320, height: 480 })
	.controls().touch()

	Q.scene("level1", function(stage) {
		Q.stageTMX("level.tmx", stage);
		var mario = stage.insert(new Q.Mario());
		stage.add("viewport").follow(player);
	});

	Q.Sprite.extend("Mario", {
		init: function(p) {
			this._super({
				sheet: "marioR",
				frame: 0,
				x: 150,
				y: 380
			});
			
			this.add("2d, platformerControls");
		};
	});
	
	Q.loadTMX("level.tmx", "mario_small.png, mario_small.json", function() {
		Q.stageScene("level1");
		Q.compileSheets("mario_small.png", "mario_small.json");
	});
};
