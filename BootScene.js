class BootScene extends Phaser.Scene {
    constructor(){
        super({ key: 'BootScene' })
    }

    create() {
        // `launch` starts a scene without stopping other
        this.scene.launch('FirstScene');
        this.scene.launch('SoundScene');
    }
}