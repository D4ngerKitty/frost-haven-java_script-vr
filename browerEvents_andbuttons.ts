browserEvents.ArrowDown.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (!(spriteutils.isDestroyed(picker))) {
        if (yesno) {
            picker.y = no.y
            yesno = false
            fancyText.setColor(no, 3)
            fancyText.setColor(yes, 4)
        } else {
            picker.y = yes.y
            yesno = true
            fancyText.setColor(yes, 3)
            fancyText.setColor(no, 4)
        }
    }
    if (!(menu_open)) {
        move_selector(4, "down")
    }
    if (!(lockcontrols)) {
        if (mainstartmenu) {
            fancyText.setColor(sprites.readDataSprite(main_menu_text, "" + sprites.readDataNumber(main_menu_text, "menu_item_picked")), 4)
            sprites.changeDataNumberBy(main_menu_text, "menu_item_picked", 1)
            if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 5) {
                sprites.setDataNumber(main_menu_text, "menu_item_picked", 1)
            }
            fancyText.setColor(sprites.readDataSprite(main_menu_text, "" + sprites.readDataNumber(main_menu_text, "menu_item_picked")), 3)
            music.play(music.createSoundEffect(WaveShape.Square, 1110, 0, 142, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        }
    }
})
browserEvents.C.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (!(lockcontrols && (incutesence && mainstartmenu))) {
        if (!(inattack)) {
            platformer.moveSprite(mySprite, false, 90)
            inattack = true
            if (theAbutton == 0) {
                sprites.setDataNumber(attack_hitbox, "damge", -1)
                if (duraction_facing_left_or_right == 1) {
                    if (sword_compo >= 1) {
                        sword_compo = 0
                        animation.runImageAnimation(
                            attack_hitbox,
                            melleattackslist[1],
                            50,
                            false
                        )
                    } else {
                        sword_compo = 1
                        animation.runImageAnimation(
                            attack_hitbox,
                            melleattackslist[0],
                            50,
                            false
                        )
                    }
                } else {
                    if (sword_compo >= 1) {
                        sword_compo = 0
                        animation.runImageAnimation(
                            attack_hitbox,
                            attacksflipped[1],
                            50,
                            false
                        )
                    } else {
                        sword_compo = 1
                        animation.runImageAnimation(
                            attack_hitbox,
                            attacksflipped[0],
                            50,
                            false
                        )
                    }
                }
                timer.background(function () {
                    for (let index = 0; index < attacksflipped[0].length - 4; index++) {
                        pause(50)
                    }
                    inattack = false
                    platformer.moveSprite(mySprite, true, 90)
                })
            } else if (theAbutton == 1) {
                sprites.setDataNumber(attack_hitbox, "damge", -1.5)
                if (duraction_facing_left_or_right == 1) {
                    if (sword_compo >= 1) {
                        sword_compo = 0
                        animation.runImageAnimation(
                            attack_hitbox,
                            melleattackslist[2],
                            50,
                            false
                        )
                    } else {
                        sword_compo = 1
                        animation.runImageAnimation(
                            attack_hitbox,
                            melleattackslist[3],
                            50,
                            false
                        )
                    }
                } else {
                    if (sword_compo >= 1) {
                        sword_compo = 0
                        animation.runImageAnimation(
                            attack_hitbox,
                            attacksflipped[2],
                            50,
                            false
                        )
                    } else {
                        sword_compo = 1
                        animation.runImageAnimation(
                            attack_hitbox,
                            attacksflipped[3],
                            50,
                            false
                        )
                    }
                }
                timer.background(function () {
                    for (let index = 0; index < attacksflipped[2].length - 3; index++) {
                        pause(50)
                    }
                    inattack = false
                    platformer.moveSprite(mySprite, true, 90)
                })
            } else if (theAbutton == 10) {
                sprites.setDataNumber(attack_hitbox, "damge", -1.8)
                if (duraction_facing_left_or_right == 1) {
                    if (sword_compo >= 1) {
                        sword_compo = 0
                        animation.runImageAnimation(
                            attack_hitbox,
                            melleattackslist[4],
                            50,
                            false
                        )
                    } else {
                        sword_compo = 1
                        animation.runImageAnimation(
                            attack_hitbox,
                            melleattackslist[5],
                            50,
                            false
                        )
                    }
                } else {
                    if (sword_compo >= 1) {
                        sword_compo = 0
                        animation.runImageAnimation(
                            attack_hitbox,
                            attacksflipped[4],
                            50,
                            false
                        )
                    } else {
                        sword_compo = 1
                        animation.runImageAnimation(
                            attack_hitbox,
                            attacksflipped[4],
                            50,
                            false
                        )
                    }
                }
                timer.background(function () {
                    for (let index = 0; index < attacksflipped[0].length - 4; index++) {
                        pause(50)
                    }
                    inattack = false
                    platformer.moveSprite(mySprite, true, 90)
                })
            }
        }
    }
})
browserEvents.X.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (!(inattack)) {
        if (!(indash)) {
            timer.background(function () {
                if (canrun) {
                    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
                        if (dashes > 0) {
                            dashes += -1
                            indash = true
                            dash(3, -1)
                            indash = false
                        }
                    }
                }
            })
        }
    }
    if (!(spriteutils.isDestroyed(NPCtext))) {
        fancyText.cancelAnimation(NPCtext)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(menu_open)) {
        move_selector(-1, "left")
    }
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(menu_open)) {
        move_selector(1, "right")
    }
})
browserEvents.V.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile56`)) {
        if (zone == 2) {
            if (mySprite.tilemapLocation().column == 4) {
                move_into_house(100, 1)
            } else if (mySprite.tilemapLocation().column == 23) {
                move_into_house(100, 2)
            } else if (mySprite.tilemapLocation().column == 39) {
                move_into_house(100, 3)
            } else if (mySprite.tilemapLocation().column == 55) {
                move_into_house(100, 4)
            }
        }
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile65`)) {
        if (zone == 100) {
            if (mySprite.tilemapLocation().column == 7) {
                move_into_house(2, 1)
            } else if (mySprite.tilemapLocation().column == 22) {
                move_into_house(2, 2)
            } else if (mySprite.tilemapLocation().column == 28) {
                move_into_house(2, 3)
            } else if (mySprite.tilemapLocation().column == 43) {
                move_into_house(2, 5)
            }
        }
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
        if (zone == 200) {
            move_into_house(2, 4)
        }
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile16`)) {
        if (zone == 3) {
            move_into_house(102, 1)
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    pull_up_invantory()
})
browserEvents.ArrowUp.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (!(spriteutils.isDestroyed(picker))) {
        if (yesno) {
            picker.y = no.y
            yesno = false
            fancyText.setColor(no, 3)
            fancyText.setColor(yes, 4)
        } else {
            picker.y = yes.y
            yesno = true
            fancyText.setColor(yes, 3)
            fancyText.setColor(no, 4)
        }
    }
    if (!(menu_open)) {
        move_selector(-4, "up")
    }
    if (!(lockcontrols)) {
        if (mainstartmenu) {
            fancyText.setColor(sprites.readDataSprite(main_menu_text, "" + sprites.readDataNumber(main_menu_text, "menu_item_picked")), 4)
            sprites.changeDataNumberBy(main_menu_text, "menu_item_picked", -1)
            if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 0) {
                sprites.setDataNumber(main_menu_text, "menu_item_picked", 4)
            }
            fancyText.setColor(sprites.readDataSprite(main_menu_text, "" + sprites.readDataNumber(main_menu_text, "menu_item_picked")), 3)
            music.play(music.createSoundEffect(WaveShape.Square, 1110, 0, 142, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        }
    }
})
browserEvents.E.onEvent(browserEvents.KeyEvent.Pressed, function () {
    pull_up_invantory()
})
browserEvents.Z.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (!(menu_open)) {
        move_item()
    }
    if (!(lockcontrols)) {
        if (mainstartmenu) {
            if (sprites.readDataBoolean(main_menu_text, "settingsMenu")) {
                if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 1) {
                    if (blockSettings.readNumber("paformacemode") == 1) {
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "1"), "performance mode(on)")
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "2"), "death marker(off)")
                        blockSettings.writeNumber("paformacemode", 2)
                        blockSettings.writeNumber("deathmarker", 2)
                        tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "2"), tiles.getTileLocation(36, 4))
                    } else {
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "1"), "performance mode(off)")
                        blockSettings.writeNumber("paformacemode", 1)
                    }
                    tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "1"), tiles.getTileLocation(36, 3))
                } else if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 2) {
                    if (blockSettings.readNumber("deathmarker") == 1) {
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "2"), "death marker(off)")
                        blockSettings.writeNumber("deathmarker", 2)
                    } else {
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "2"), "death marker(on)")
                        blockSettings.writeNumber("deathmarker", 1)
                    }
                    tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "2"), tiles.getTileLocation(36, 4))
                } else if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 3) {
                    music.play(music.createSoundEffect(WaveShape.Square, 1857, 1, 19, 173, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    lockcontrols = true
                    fancyText.setColor(main_menu_text, 0)
                    pause(100)
                    fancyText.setColor(sprites.readDataSprite(main_menu_text, "1"), 9)
                    pause(100)
                    fancyText.setColor(sprites.readDataSprite(main_menu_text, "2"), 9)
                    pause(100)
                    fancyText.setColor(sprites.readDataSprite(main_menu_text, "3"), 9)
                    pause(100)
                    fancyText.setColor(sprites.readDataSprite(main_menu_text, "4"), 9)
                    pause(100)
                    blockSettings.clear()
                    game.reset()
                } else if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 4) {
                    game.reset()
                }
            } else {
                if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 1) {
                    music.play(music.createSoundEffect(WaveShape.Square, 1857, 1, 19, 173, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    mainstartmenu = false
                    sprites.destroy(main_menu_text)
                    sprites.destroy(sprites.readDataSprite(main_menu_text, "1"))
                    sprites.destroy(sprites.readDataSprite(main_menu_text, "2"))
                    sprites.destroy(sprites.readDataSprite(main_menu_text, "3"))
                    sprites.destroy(sprites.readDataSprite(main_menu_text, "4"))
                    timer.background(function () {
                        if (blockSettings.exists("checkpoint_zone_in_data")) {
                            scene.cameraFollowSprite(cam)
                            create_ui()
                            canrun = true
                            createlevel(blockSettings.readNumber("checkpoint_zone_in_data"))
                            tiles.placeOnRandomTile(mySprite, assets.tile`myTile46`)
                        } else {
                            START_CUTSENSE()
                        }
                    })
                } else if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 3) {
                    sprites.setDataBoolean(main_menu_text, "settingsMenu", true)
                    if (mainstartmenu) {
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "" + sprites.readDataNumber(main_menu_text, "menu_item_picked")), 4)
                        sprites.setDataNumber(main_menu_text, "menu_item_picked", 1)
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "" + sprites.readDataNumber(main_menu_text, "menu_item_picked")), 3)
                        music.play(music.createSoundEffect(WaveShape.Square, 1110, 0, 142, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                    }
                    if (blockSettings.readNumber("paformacemode") == 1) {
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "1"), "performance mode(off)")
                    } else {
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "1"), "performance mode(on)")
                    }
                    tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "1"), tiles.getTileLocation(36, 3))
                    if (blockSettings.readNumber("deathmarker") == 1) {
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "2"), "death marker(on)")
                    } else {
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "2"), "death marker(off)")
                    }
                    tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "2"), tiles.getTileLocation(36, 4))
                    fancyText.setText(sprites.readDataSprite(main_menu_text, "3"), "reset all data")
                    tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "3"), tiles.getTileLocation(36, 5))
                    fancyText.setText(sprites.readDataSprite(main_menu_text, "4"), "back")
                    tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "4"), tiles.getTileLocation(36, 6))
                } else if (sprites.readDataNumber(main_menu_text, "menu_item_picked") == 4) {
                    timer.background(function () {
                        music.play(music.createSoundEffect(WaveShape.Square, 1857, 1, 19, 173, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        lockcontrols = true
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "1"), 0)
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "2"), 0)
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "3"), 0)
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "4"), 0)
                        pause(200)
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "1"), "game made by")
                        tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "1"), tiles.getTileLocation(36, 3))
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "1"), 2)
                        pause(200)
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "2"), "DangerKitty")
                        tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "2"), tiles.getTileLocation(36, 4))
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "2"), 2)
                        pause(200)
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "3"), "playtesters:")
                        tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "3"), tiles.getTileLocation(36, 5))
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "3"), 2)
                        pause(200)
                        fancyText.setText(sprites.readDataSprite(main_menu_text, "4"), "luke, gid, ")
                        tiles.placeOnTile(sprites.readDataSprite(main_menu_text, "4"), tiles.getTileLocation(36, 6))
                        fancyText.setColor(sprites.readDataSprite(main_menu_text, "4"), 2)
                        pause(200)
                        while (!(browserEvents.Z.isPressed())) {
                            pause(10)
                        }
                        game.reset()
                    })
                }
            }
        }
    }
})
