sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    if (info.score() == 5) {
        game.over(true)
    }
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
    tiles.placeOnRandomTile(Coin, sprites.castle.tilePath5)
    tiles.placeOnRandomTile(Bad_Guy, sprites.castle.tilePath5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let Bad_Guy: Sprite = null
let Coin: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . 4 . . . . . . . . . . . . 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 7 7 7 7 7 7 7 7 7 7 7 7 5 . 
    . 5 7 2 2 2 7 7 7 7 2 2 2 7 5 . 
    4 5 7 7 7 7 7 7 7 7 7 7 7 7 5 4 
    . 5 7 7 7 7 7 7 7 7 7 7 7 7 5 . 
    . 5 7 7 7 7 7 7 7 7 7 7 7 7 5 . 
    . 5 7 7 7 7 7 7 7 7 7 7 7 7 5 . 
    . 5 2 7 7 7 7 7 7 7 7 7 7 2 5 . 
    . 5 2 2 7 7 7 7 7 7 7 7 7 2 5 . 
    4 5 7 2 7 7 7 7 7 7 7 7 7 2 5 4 
    . 5 7 2 2 2 2 7 7 7 7 2 2 2 5 . 
    . 5 7 7 7 7 2 2 2 2 2 7 7 7 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Coin = sprites.create(img`
    . . . . . . f f . . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . . 5 5 . . 5 5 . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 . . 5 5 . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Food)
Bad_Guy = sprites.create(img`
    f f 2 2 2 f f f f f f 2 2 2 f f 
    f 2 f f f 2 f f f f 2 f f f 2 f 
    2 f 2 2 2 f 2 f f 2 f 2 2 2 f 2 
    f f 2 2 2 f f f f f f 2 2 2 f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f 2 f f f f f f f f f 2 f f f 
    f f 2 2 f f f f f f f 2 2 f f f 
    f f f 2 f f f f f f f 2 f f f f 
    f f f f 2 2 f f f f 2 2 f f f f 
    f f f f f 2 2 2 2 2 2 f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level`)
tiles.placeOnRandomTile(Coin, sprites.castle.tilePath5)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
tiles.placeOnRandomTile(Bad_Guy, sprites.castle.tilePath5)
scene.cameraFollowSprite(mySprite)
Bad_Guy.follow(mySprite)
forever(function () {
	
})
