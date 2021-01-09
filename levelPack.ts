namespace levelPack{
    export function changeLv(){
        if (level == 1){
            tiles.setTilemap(tilemap`level`)
        } else if (level == 2){
            tiles.setTilemap(tilemap`level_0`)
        } else if (level == 3){
            tiles.setTilemap(tilemap`level_1`)
        }
        tileActions.placeWalls()
        tileActions.respawn()
    }
}