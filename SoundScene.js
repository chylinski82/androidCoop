class SoundScene extends Phaser.Scene {
    constructor(){
        super({ key: 'SoundScene' })
    }

    preload(){
        this.load.audio('theme2', './audio/theme2.mp3');
    }

    create() {
        this.input.once('pointerdown', _ => {
            gameState.music = this.sound.add('theme2');
            gameState.music.play();
            gameState.music.loop = true; 
        });
    }

}