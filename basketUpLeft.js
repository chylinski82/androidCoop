function basketUpLeft() {
    gameState.character.flipX = true

    if (gameState.basket.y !== 320 && gameState.basket.x === 220) {
        gameState.character.anims.play('downUp');

    } else if (gameState.basket.x !== 220) {
        gameState.character.anims.play('front');
        gameState.character.anims.play('catchingUp');

    }

    gameState.basket.destroy();       
    gameState.basket = gameState.baskets.create(220, 320, 'basket').setScale(.075);
    gameState.basket.rotation -= 0.5;
}