// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`1000100001010101010101010202020202020202010202020202020101010202020202020102020201010102020102020202020201020202010101020201020202020202010202020102010202010202020202020102020201020102020101010101010101020202010201020202020201020202010202020102010202020202010202020101010101010101010202020102020202020201020202020102020201020202020202010202020201020202010202020202020102020202010101010102020202020201020202020102020202020202010101010101010101020202020202020202020202020202010101010101010202020202020202020202020202020102`, img`
. . . . . . . . 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 . . . 2 2 2 2 2 2 
. 2 2 2 . . . 2 2 . 2 2 2 2 2 2 
. 2 2 2 . . . 2 2 . 2 2 2 2 2 2 
. 2 2 2 . 2 . 2 2 . 2 2 2 2 2 2 
. 2 2 2 . 2 . 2 2 . . . . . . . 
. 2 2 2 . 2 . 2 2 2 2 2 . 2 2 2 
. 2 2 2 . 2 . 2 2 2 2 2 . 2 2 2 
. . . . . . . . . 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . . . . . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
. . . . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
