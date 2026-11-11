namespace SpriteKind {
    export const item_slot = SpriteKind.create()
    export const ivantorybit = SpriteKind.create()
    export const acam = SpriteKind.create()
    export const typeUIkind = SpriteKind.create()
    export const background = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const typepartical = SpriteKind.create()
    export const savepoint = SpriteKind.create()
    export const playerAttackHitboxType = SpriteKind.create()
    export const item = SpriteKind.create()
    export const wall = SpriteKind.create()
    export const aboss = SpriteKind.create()
    export const spike = SpriteKind.create()
    export const overlaptrigger = SpriteKind.create()
}
events.spriteEvent(SpriteKind.aboss, SpriteKind.playerAttackHitboxType, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    statusbar.value += sprites.readDataNumber(otherSprite, "damge")
    if (statusbar.value > 0) {
        if (blockSettings.readNumber("paformacemode") == 1) {
            partical_location = [(sprite.x + otherSprite.x) / 2, (sprite.y + otherSprite.y) / 2]
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), partical_location[0], partical_location[1], 50, 16, 7)
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), partical_location[0], partical_location[1], 50, 16, 7)
        } else {
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
        }
    } else {
        inbossfight = false
        bosses_defeated.push(sprites.readDataNumber(sprite, "id"))
        sprites.destroy(sprite)
        sprites.destroy(bossname)
        sprites.destroy(statusbar)
        timer.background(function () {
            for (let value of tiles.getTilesByType(assets.tile`myTile84`)) {
                tiles.setTileAt(value, assets.tile`transparency16`)
                tiles.setWallAt(value, false)
                pause(200)
            }
        })
        if (blockSettings.readNumber("paformacemode") == 1) {
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Explosion), sprite.x, sprite.y, 50, 32, 20)
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Explosion), sprite.x, sprite.y, 50, 32, 20)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.acam, function (sprite, otherSprite) {
    if (camFallowPlayer) {
        camlockedonplayer = true
        camlocked_untilplayer_overlap = false
        if (zone == 200) {
            camnotmoveonY = false
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile97`, function (sprite, location) {
    if (!(spriteutils.isDestroyed(The_spike_sprtie_hitbox))) {
        The_spike_sprtie_hitbox.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . . . 1 . . . . . 
            . . . 1 1 1 . . . 1 1 1 . . . . 
            . . . 1 1 1 . . . 1 1 1 . . . . 
            . . 1 1 1 1 1 . 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 . 1 1 1 1 1 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            `)
        tiles.placeOnTile(The_spike_sprtie_hitbox, location)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.overlaptrigger, function (sprite, otherSprite) {
    if (sprites.readDataNumber(otherSprite, "id") == 1) {
        timer.background(function () {
            if (!(sprites.readDataBoolean(otherSprite, "amamated"))) {
                boss_intro(2, otherSprite)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile95`, function (sprite, location) {
    if (!(spriteutils.isDestroyed(The_spike_sprtie_hitbox))) {
        The_spike_sprtie_hitbox.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . 1 . . . . . 1 . . . . .
            . . . 1 1 1 . . . 1 1 1 . . . .
            . . . 1 1 1 . . . 1 1 1 . . . .
            . . 1 1 1 1 1 . 1 1 1 1 1 . . .
            . . 1 1 1 1 1 . 1 1 1 1 1 . . .
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        `)
        tiles.placeOnTile(The_spike_sprtie_hitbox, location)
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.wall, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (!(sprites.readDataNumber(otherSprite, "damge") == 0)) {
        if (blockSettings.readNumber("paformacemode") == 1) {
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
        } else {
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
        }
        playerlife += sprites.readDataNumber(otherSprite, "damge")
        scene.cameraShake(6, 100)
        if (playerlife <= 0) {
            kill_player("you died to a rock", "WOMP womp")
        }
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.aboss, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (blockSettings.readNumber("paformacemode") == 1) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
    } else {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
    }
    playerlife += sprites.readDataNumber(otherSprite, "damgedealt")
    scene.cameraShake(6, 100)
    if (playerlife <= 0) {
        kill_player("you died to boss", "Git GUD")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spike, function (sprite, otherSprite) {
    kill_player("you died to a spike", "Womp womp")
    sprites.destroy(otherSprite)
})
events.spriteEvent(SpriteKind.Player, SpriteKind.Enemy, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (blockSettings.readNumber("paformacemode") == 1) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
    } else {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
    }
    playerlife += sprites.readDataNumber(otherSprite, "damgedealt")
    scene.cameraShake(6, 100)
    if (playerlife <= 0) {
        kill_player("you died to bug", "Womp womp")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile96`, function (sprite, location) {
    if (!(spriteutils.isDestroyed(The_spike_sprtie_hitbox))) {
        The_spike_sprtie_hitbox.setImage(img`
            1 1 1 1 . . . . . . . . . . . . 
            1 1 1 1 1 1 . . . . . . . . . . 
            1 1 1 1 1 1 1 1 . . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 . . . . . 
            1 1 1 1 1 1 1 1 1 1 . . . . . . 
            1 1 1 1 1 1 1 1 . . . . . . . . 
            1 1 1 1 1 1 . . . . . . . . . . 
            1 1 1 1 1 1 1 1 . . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 . . . . . 
            1 1 1 1 1 1 1 1 1 1 . . . . . . 
            1 1 1 1 1 1 1 1 . . . . . . . . 
            1 1 1 1 1 1 . . . . . . . . . . 
            1 1 1 1 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        tiles.placeOnTile(The_spike_sprtie_hitbox, location)
    }
})
events.spriteEvent(SpriteKind.Enemy, SpriteKind.playerAttackHitboxType, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    sprites.changeDataNumberBy(sprite, "HP", sprites.readDataNumber(otherSprite, "damge"))
    if (sprites.readDataNumber(sprite, "HP") > 0) {
        if (blockSettings.readNumber("paformacemode") == 1) {
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
        } else {
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 50, 16, 7)
        }
        if (sprites.readDataNumber(sprite, "movement_type") == 1) {
            sprite.vx = 0
            pause(100)
            sprite.vx = sprites.readDataNumber(sprite, "Xmovement")
        }
    } else {
        sprites.destroy(sprite)
        if (blockSettings.readNumber("paformacemode") == 1) {
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Explosion), sprite.x, sprite.y, 50, 16, 7)
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Explosion), sprite.x, sprite.y, 50, 16, 7)
        }
    }
})
scene.onHitWall(SpriteKind.wall, function (sprite, location) {
    if (!(spriteutils.isDestroyed(wallcontrol))) {
        if (sprites.readDataNumber(sprite, "id") == 2) {
            tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Top), true)
            tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Top), sprite.image)
            sprites.destroy(sprite)
        }
    }
})
scene.onOverlapTile(SpriteKind.wall, assets.tile`myTile59`, function (sprite, location) {
    if (sprites.readDataNumber(sprite, "id") == 1) {
        if (blockSettings.readNumber("paformacemode") == 1) {
            sprites.destroy(sprite, effects.disintegrate, 500)
        } else {
            sprite.lifespan = 200
        }
    }
})