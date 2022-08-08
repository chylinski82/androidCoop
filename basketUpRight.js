function basketUpRight() {
    
    if (gameState.basket.x < 400) {
        gameState.character.anims.play('front');
        gameState.character.flipX = false;
        gameState.character.anims.play('catchingUp');

    }
    if (gameState.basket.y !== 320 && gameState.basket.x === 580) {
        gameState.character.flipX = false;
        gameState.character.anims.play('downUp');

    } 
    
    
    gameState.basket.destroy();       
    gameState.basket = gameState.baskets.create(580, 320, 'basket').setScale(.075);
    gameState.basket.rotation += 0.5;
}