// Add your code here
namespace tileActions{
    export function placeWalls(){
        let list = tiles.getTilesByType(myTiles.tile1)
        for (let x = 0; x <= list.length - 1; x++) {
            tiles.setWallAt(list[x], true)
        }
        list = tiles.getTilesByType(myTiles.tile5)
        for (let x = 0; x <= list.length - 1; x++) {
            tiles.setWallAt(list[x], true)
        }
        list = tiles.getTilesByType(myTiles.tile6)
        for (let x = 0; x <= list.length - 1; x++) {
            tiles.setWallAt(list[x], true)
        }
    }
    export function lavaTouch(){
        scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function(sprite, location) {
            setTimeout(() => { respawn(); }, 200);
        })
    }
    export function nextLv(){
        scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
            level++
            levelPack.changeLv()
        })
    }
    export function respawn(){
        tiles.placeOnRandomTile(Sausage, myTiles.tile2)
        Sausage.say("Level " + level)
    }
}