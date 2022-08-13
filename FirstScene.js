class FirstScene extends Phaser.Scene {
	constructor(){
		super({ key: 'FirstScene' })
	}

    preload() {
        this.load.image('rooster', './images/rooster.png');
        this.load.image('grafitti', './images/grafitti.png');
        this.load.image('ground', './images/platform.png');
        
    }

    create() {
        
        // background, extra layer

        const graphics = this.add.graphics();
        graphics.fillGradientStyle(0xffff99, 0xb3ffff, 0x009900, 0x99ff99,.5);
        graphics.fillRect(0, 0, 800, 600);

        // main

        this.add.text(470, 120, 'Tap to play!', { fontSize: '30px', fill: '#000000' });

        gameState.highScoreText = this.add.text(270, 40, 'Hi Score: ' + localStorage.getItem("highscore"), { fontFamily: 'Roboto Mono, monospace', fontSize: '30px',  fill: '#e68a00' });

        gameState.grounds = this.physics.add.staticGroup();

        gameState.ground = gameState.grounds.create(400, 568, 'ground').setScale(3);

        this.add.image(200, 250, 'rooster').setScale(.6);

        this.add.image(570, 300, 'grafitti').setScale(.85);

        this.input.on('pointerup', () => {
            this.scene.stop('FirstScene');
            this.scene.start('Level1');
              
        });
    }

    update() {
        if (gameState.music && !document.hasFocus()) {
            gameState.music.pause(); 
       }
       if (gameState.music && document.hasFocus()) {
           gameState.music.resume();
       }
    }
}