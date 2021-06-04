controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 4 4 2 2 2 2 2 2 2 . . . . . 
        . . 4 2 2 4 2 5 2 5 5 2 . . . . 
        . . 4 2 2 2 5 5 5 4 5 2 2 . . . 
        . . 2 4 2 2 5 2 2 2 2 5 2 . . . 
        . . 2 2 2 2 5 2 4 2 4 5 5 . . . 
        . . 2 2 4 2 2 2 5 5 5 2 5 . . . 
        . . 2 2 2 2 2 5 2 5 2 5 5 . . . 
        . . 2 2 4 2 4 2 5 5 2 2 5 . . . 
        . . 2 2 2 2 2 2 5 2 5 4 5 . . . 
        . . . 2 2 2 4 4 4 5 5 5 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 9 2 2 2 
    . . . . . . . . . . . 9 9 9 9 . 
    . . . . . . . . 9 9 a 9 9 9 . . 
    . . . . . . . 9 9 a 9 a 9 9 . . 
    . . . . a a a a a a a a a . . . 
    . . 9 9 9 9 9 9 a a a a 9 . . . 
    . 9 9 9 9 9 a 9 9 9 a a 9 . . . 
    . . 9 . 9 9 9 9 a a a 9 9 . . . 
    . . . 9 . . . 9 9 9 9 9 9 9 9 . 
    . . . . . . . . . . 9 9 9 9 2 2 
    . . . . . . . . . . . . . 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
