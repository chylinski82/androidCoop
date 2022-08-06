function basketDownRight() {
    gameState.character.flipX = false;
    
    if (gameState.basket.y !== 470 && gameState.basket.x === 580) {
        gameState.character.anims.playReverse('downUp');

    } else if (gameState.basket.x !== 580) {
        gameState.character.anims.play('catchingDown');

    }

    gameState.basket.destroy();       
    gameState.basket = gameState.baskets.create(580, 470, 'basket').setScale(.075);
    gameState.basket.rotation += 0.5;
}