class SoundScene extends Phaser.Scene {
    constructor(){
        super({ key: 'SoundScene' })
    }

    preload(){
        this.load.audio('theme', './audio/theme.mp3');
    }

    create() {
        this.input.once('pointerdown', _ => {
            // UNLOCK audio, doesn't work immediately on iphone
            this.sound.unlock();
            gameState.music = this.sound.add('theme', {loop: true});
            
            // if unlock worked, just play the sound
            if(!this.sound.locked){
                gameState.music.play();
            } 
            else {  // IF Not wait on unlock event 
                this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
                    gameState.music.play();
                })
            }
        });
    }

}