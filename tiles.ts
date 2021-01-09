// Add your code here
namespace tileActions{
    export function placeWalls(){
        let list = tiles.getTilesByType(myTiles.tile1)
        for (let x = 0; x <= list.length - 1; x++) {
            tiles.setWallAt(list[x], true)
        }
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