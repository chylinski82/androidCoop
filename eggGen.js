function eggGen() {
    let num = Math.random();

    let xCoord, yCoord, eggDirection, eggAnimation, velocityX

    if (num < .5) {
        xCoord = 100;

        eggDirection = 'eggLeft';
        eggAnimation = 'rollingLeft'
        
        velocityX = this.velocityX;
        
        if (num < .25) {
            yCoord = 232;

        } else {
            yCoord = 382;
        }
    } else {
        xCoord = 700;

        eggDirection = 'eggRight';
        eggAnimation = 'rollingRight';

        velocityX = -(this.velocityX);

        if (num < .75) {
            yCoord = 232;

        } else {
            yCoord = 382;
        }
    }

    let egg = gameState.eggs.create(xCoord, yCoord, eggDirection).setScale(.6).setVelocity(velocityX, this.velocityY);

    egg.anims.play(eggAnimation);
}