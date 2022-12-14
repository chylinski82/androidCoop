const gameState = {
    score: 0,

    highscore: 0,

    levelScore: 0,

    lives: 3,

    level: 1
}



config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x66b3ff,
    physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          enableBody: true,
        }
    },
    scene: [BootScene, SoundScene, FirstScene, Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9, Level10, Level11, Level12],
    scale: {
        mode: Phaser.DOM.FIT,
        orientation: Phaser.Scale.Orientation.LANDSCAPE,
        width: 800,
        height: 600
    },
    audio: {
        disableWebAudio: true
    }
}

const game = new Phaser.Game(config);