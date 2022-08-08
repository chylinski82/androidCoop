function basketUpRight() {
    gameState.character.flipX = false;
    
    if (gameState.basket.y !== 320 && gameState.basket.x === 580) {
        gameState.character.anims.play('downUp');

    } 
    if (gameState.basket.x < 400) {
        gameState.character.anims.play('catchingUp');

    }
    
    gameState.basket.destroy();       
    gameState.basket = gameState.baskets.create(580, 320, 'basket').setScale(.075);
    gameState.basket.rotation += 0.5;
}