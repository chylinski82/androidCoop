function basketDownLeft() {
    gameState.character.flipX = true;

    if (gameState.basket.y !== 470 && gameState.basket.x === 220) {
        gameState.character.anims.playReverse('downUp');

    }
    if (gameState.basket.x > 400) {
        gameState.character.anims.play('catchingDown');
    }
    

    gameState.basket.destroy();       
    gameState.basket = gameState.baskets.create(220, 470, 'basket').setScale(.075);
    gameState.basket.rotation -= 0.5;
}