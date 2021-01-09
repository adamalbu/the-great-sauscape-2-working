// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`0a0008000101010101010101010101030100000000000001010001000101010100010100010001000000000101000100010001010101010000000100000002010101010101010101010101010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen)
            case "level_0": return tiles.createTilemap(hex`0a0008000101010101010101010101030000000000000001010000000000000000010100000000000000000101000000000000000001010000000000000002010101010101010101010101010101010101010101`, img`
. . . . . . . . . . 
. . . 2 . . . . . . 
. 2 . 2 . . . . . . 
. . . 2 2 2 . . . . 
. . 2 . . . 2 2 2 . 
. . . . 2 . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen)
            case "level_1": return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000001000000000200000000000000000301010101000000010101000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
