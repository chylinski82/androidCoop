class SoundScene extends Phaser.Scene {
    constructor(){
        super({ key: 'SoundScene' })
    }

    preload(){
        this.load.audio('theme', './audio/theme.mp3');
    }

    create() {
        this.input.once('pointerdown', _ => {
            gameState.music = this.sound.add('theme');
            gameState.music.play();
            gameState.music.loop = true; 
        });
    }

}