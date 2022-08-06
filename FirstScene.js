class FirstScene extends Phaser.Scene {
	constructor(){
		super({ key: 'FirstScene' })
	}

    preload() {
        this.load.image('rooster', './images/rooster.png');
        this.load.image('grafitti', './images/grafitti.png');
        this.load.image('ground', 'images/platform.png');
        this.load.audio('theme', 'audio/theme.mp3');
        
    }

    create() {
        
        // background, extra layer

        const graphics = this.add.graphics();
        graphics.fillGradientStyle(0xffff99, 0xb3ffff, 0x009900, 0x99ff99,.5);
        graphics.fillRect(0, 0, 800, 600);

        // audio
        gameState.music = this.sound.add('theme');
        gameState.music.play();
        gameState.music.loop = true; 

        // main

        this.add.text(470, 100, 'Tap to play!', { fontSize: '30px', fill: '#000000' });

        gameState.grounds = this.physics.add.staticGroup();

        gameState.ground = gameState.grounds.create(400, 568, 'ground').setScale(3);

        this.add.image(200, 250, 'rooster').setScale(.6);

        this.add.image(570, 300, 'grafitti').setScale(.85);

        this.input.on('pointerup', () => {
            this.scene.start('Level1');
            
        });
    }

    update() {
        if (!document.hasFocus()) {
            gameState.music.pause();

        }
        if (document.hasFocus()) {
            gameState.music.resume();

        }
    }
}