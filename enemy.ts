function summon_enemy(tile_repaced: Image, ememy_type: string) {
    if (ememy_type == "bug_1") {
        for (let value of tiles.getTilesByType(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . 7 . . 7 . . 7 3 . 3 4 3 . 
            . . . 7 7 . 7 7 . 7 4 3 4 4 3 . 
            . . . 7 7 7 7 7 7 7 4 4 4 4 3 . 
            . 3 3 3 7 7 7 7 7 7 4 4 4 3 . . 
            3 4 4 4 7 4 7 7 7 7 7 4 3 7 7 7 
            . 3 4 4 7 4 7 4 7 7 7 4 7 7 7 . 
            . . 3 7 7 4 7 4 7 7 7 7 7 7 3 3 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 4 3 
            . . 7 7 7 7 7 7 7 7 7 7 7 4 3 . 
            `)) {
            enemysprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 3 . . . 
                . . . 7 . . 7 . . 7 3 . 3 4 3 . 
                . . . 7 7 . 7 7 . 7 4 3 4 4 3 . 
                . . . 7 7 7 7 7 7 7 4 4 4 4 3 . 
                . 3 3 3 7 7 7 7 7 7 4 4 4 3 . . 
                3 4 4 4 7 4 7 7 7 7 7 4 3 7 7 7 
                . 3 4 4 7 4 7 4 7 7 7 4 7 7 7 . 
                . . 3 7 7 4 7 4 7 7 7 7 7 7 3 3 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 4 3 
                . . 7 7 7 7 7 7 7 7 7 7 7 4 3 . 
                `, SpriteKind.Enemy)
            characterAnimations.loopFrames(
                enemysprite,
                [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 3 3 . 
                . . . 7 . . 7 . . 7 3 . 3 4 3 . 
                . . . 7 7 . 7 7 . 7 4 3 4 4 3 . 
                . . . 7 7 7 7 7 7 7 4 4 4 4 3 . 
                . 3 3 3 7 7 7 7 7 7 4 4 4 3 . . 
                3 4 4 4 7 4 7 7 7 7 7 4 3 7 7 7 
                . 3 4 4 7 4 7 4 7 7 7 4 7 7 7 . 
                . . 3 7 7 4 7 4 7 7 7 7 7 7 3 3 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 4 3 
                . . 7 7 7 7 7 7 7 7 7 7 7 4 3 . 
                `],
                500,
                characterAnimations.rule(Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
                enemysprite,
                [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 3 3 . . . . . . . . . . . . . 
                . 3 4 3 . 3 7 . . 7 . . 7 . . . 
                . 3 4 4 3 4 7 . 7 7 . 7 7 . . . 
                . 3 4 4 4 4 7 7 7 7 7 7 7 . . . 
                . . 3 4 4 4 7 7 7 7 7 7 3 3 3 . 
                7 7 7 3 4 7 7 7 7 7 4 7 4 4 4 3 
                . 7 7 7 4 7 7 7 4 7 4 7 4 4 3 . 
                3 3 7 7 7 7 7 7 4 7 4 7 7 3 . . 
                3 4 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 3 4 7 7 7 7 7 7 7 7 7 7 7 . . 
                `],
                500,
                characterAnimations.rule(Predicate.FacingRight)
            )
            sprites.setDataNumber(enemysprite, "movement_type", 1)
            sprites.setDataNumber(enemysprite, "HP", 6)
            sprites.setDataNumber(enemysprite, "damgedealt", -1)
            sprites.setDataNumber(enemysprite, "Xmovement", 50)
            sprites.setDataNumber(enemysprite, "speed", 50)
            enemysprite.vx = sprites.readDataNumber(enemysprite, "speed")
            enemysprite.ay = 150
            tiles.placeOnTile(enemysprite, value)
            tiles.setTileAt(value, tile_repaced)
        }
    }
    if (ememy_type == "boss_1_bug_1") {
        enemysprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . 7 . . 7 . . 7 3 . 3 4 3 . 
            . . . 7 7 . 7 7 . 7 4 3 4 4 3 . 
            . . . 7 7 7 7 7 7 7 4 4 4 4 3 . 
            . 3 3 3 7 7 7 7 7 7 4 4 4 3 . . 
            3 4 4 4 7 4 7 7 7 7 7 4 3 7 7 7 
            . 3 4 4 7 4 7 4 7 7 7 4 7 7 7 . 
            . . 3 7 7 4 7 4 7 7 7 7 7 7 3 3 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 4 3 
            . . 7 7 7 7 7 7 7 7 7 7 7 4 3 . 
            `, SpriteKind.Enemy)
        characterAnimations.loopFrames(
            enemysprite,
            [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 3 3 . 
            . . . 7 . . 7 . . 7 3 . 3 4 3 . 
            . . . 7 7 . 7 7 . 7 4 3 4 4 3 . 
            . . . 7 7 7 7 7 7 7 4 4 4 4 3 . 
            . 3 3 3 7 7 7 7 7 7 4 4 4 3 . . 
            3 4 4 4 7 4 7 7 7 7 7 4 3 7 7 7 
            . 3 4 4 7 4 7 4 7 7 7 4 7 7 7 . 
            . . 3 7 7 4 7 4 7 7 7 7 7 7 3 3 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 4 3 
            . . 7 7 7 7 7 7 7 7 7 7 7 4 3 . 
            `],
            500,
            characterAnimations.rule(Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            enemysprite,
            [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 . . . . . . . . . . . . . 
            . 3 4 3 . 3 7 . . 7 . . 7 . . . 
            . 3 4 4 3 4 7 . 7 7 . 7 7 . . . 
            . 3 4 4 4 4 7 7 7 7 7 7 7 . . . 
            . . 3 4 4 4 7 7 7 7 7 7 3 3 3 . 
            7 7 7 3 4 7 7 7 7 7 4 7 4 4 4 3 
            . 7 7 7 4 7 7 7 4 7 4 7 4 4 3 . 
            3 3 7 7 7 7 7 7 4 7 4 7 7 3 . . 
            3 4 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 3 4 7 7 7 7 7 7 7 7 7 7 7 . . 
            `],
            500,
            characterAnimations.rule(Predicate.FacingRight)
        )
        sprites.setDataNumber(enemysprite, "movement_type", 1)
        sprites.setDataNumber(enemysprite, "HP", 2)
        sprites.setDataNumber(enemysprite, "damgedealt", -1)
        sprites.setDataNumber(enemysprite, "Xmovement", -50)
        sprites.setDataNumber(enemysprite, "speed", 50)
        enemysprite.vx = -50
        enemysprite.ay = 150
        enemysprite.setPosition(thebossSprite.x, thebossSprite.y + 10)
    }
}
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (sprites.readDataNumber(value, "movement_type") == 1) {
            if (tiles.tileAtLocationIsWall(value.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) {
                value.vx = sprites.readDataNumber(value, "speed")
                sprites.setDataNumber(value, "Xmovement", sprites.readDataNumber(value, "speed"))
            } else if (tiles.tileAtLocationIsWall(value.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) {
                value.vx = 0 - sprites.readDataNumber(value, "speed")
                sprites.setDataNumber(value, "Xmovement", 0 - sprites.readDataNumber(value, "speed"))
            } else if (!(tiles.tileAtLocationIsWall(value.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right)))) {
                value.vx = 0 - sprites.readDataNumber(value, "speed")
                sprites.setDataNumber(value, "Xmovement", 0 - sprites.readDataNumber(value, "speed"))
            } else if (!(tiles.tileAtLocationIsWall(value.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Left)))) {
                value.vx = sprites.readDataNumber(value, "speed")
                sprites.setDataNumber(value, "Xmovement", sprites.readDataNumber(value, "speed"))
            }
        }
    }
    if (inbossfight) {
        if (!(spriteutils.isDestroyed(thebossSprite))) {
            timer.background(function () {
                boss_attack_waves()
            })
        }
    }
})