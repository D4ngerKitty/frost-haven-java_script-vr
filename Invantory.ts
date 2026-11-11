function Refresh_invantory() {
    invantory.setImage(assests[0].clone())
    number = 0
    for (let value of theinvantorylist) {
        if (!(value == -1)) {
            sprites.setDataNumber(invantory, "" + number + "item_id", value)
            sprites.setDataString(invantory, "" + number + "item_type", item_type[value])
            spriteutils.drawTransparentImage(items_images[value], invantory.image, invantory_X[number], Invantory_Y[number])
        } else {
            sprites.setDataString(invantory, "" + number + "item_type", "blank")
        }
        number += 1
    }
    if (!(theAbutton == -1)) {
        sprites.setDataNumber(invantory, "sword slot_id", theAbutton)
        sprites.setDataString(invantory, "sword slot_type", item_type[theAbutton])
        spriteutils.drawTransparentImage(items_images[theAbutton], invantory.image, 107, 44)
    } else {
        sprites.setDataString(invantory, "sword slot_type", "blank")
    }
    if (!(theBbuttonitem == -1)) {
        sprites.setDataNumber(invantory, "Bbottonslot_id", theBbuttonitem)
        sprites.setDataString(invantory, "Bbottonslot_type", item_type[theBbuttonitem])
        spriteutils.drawTransparentImage(items_images[theBbuttonitem], invantory.image, 107, 61)
    } else {
        sprites.setDataString(sprites.readDataSprite(invantory, "Bbottonslot"), "item_type", "blank")
    }
    if (!(thetalismanslotvar == -1)) {
        sprites.setDataNumber(invantory, "talismen_id", thetalismanslotvar)
        sprites.setDataString(invantory, "talismen_type", item_type[thetalismanslotvar])
        spriteutils.drawTransparentImage(items_images[thetalismanslotvar], invantory.image, 124, 61)
    } else {
        sprites.setDataString(invantory, "talismen_type", "blank")
    }
    if (!(armer_slot == -1)) {
        sprites.setDataNumber(invantory, "cloakslot_id", armer_slot)
        sprites.setDataString(invantory, "cloakslot_type", item_type[armer_slot])
        spriteutils.drawTransparentImage(items_images[armer_slot], invantory.image, 124, 44)
    } else {
        sprites.setDataString(sprites.readDataSprite(invantory, "cloakslot"), "item_type", "blank")
    }
    spriteutils.drawTransparentImage(img`
        . 3 3 3 3 3 3 . . 3 3 3 3 3 3 . 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        . 3 3 3 3 3 3 . . 3 3 3 3 3 3 . 
        `, invantory.image, invantory_X[sprites.readDataNumber(invantory, "selection")], Invantory_Y[sprites.readDataNumber(invantory, "selection")])
}
function move_item() {
    if (sprites.readDataString(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_type") == item_type[0]) {
        music.play(music.createSoundEffect(WaveShape.Square, 1857, 1, 19, 173, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        theAbutton = sprites.readDataNumber(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_id") + 0
        console.log(theAbutton)
        sprites.setDataNumber(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_id", sprites.readDataNumber(invantory, "sword slot_id"))
        sprites.setDataNumber(invantory, "sword slot_id", theAbutton)
    }
    if (sprites.readDataString(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_type") == item_type[5]) {
        music.play(music.createSoundEffect(WaveShape.Square, 1857, 1, 19, 173, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        theBbuttonitem = sprites.readDataNumber(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_id") + 0
        console.log(theBbuttonitem)
        sprites.setDataNumber(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_id", sprites.readDataNumber(invantory, "Bbottonslot_id"))
        sprites.setDataNumber(invantory, "Bbottonslot_id", theBbuttonitem)
    }
    if (sprites.readDataString(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_type") == item_type[4]) {
        music.play(music.createSoundEffect(WaveShape.Square, 1857, 1, 19, 173, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        thetalismanslotvar = sprites.readDataNumber(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_id") + 0
        console.log(theBbuttonitem)
        sprites.setDataNumber(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_id", sprites.readDataNumber(invantory, "talismen_id"))
        sprites.setDataNumber(invantory, "talismen_id", thetalismanslotvar)
    }
    if (sprites.readDataString(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_type") == item_type[6]) {
        music.play(music.createSoundEffect(WaveShape.Square, 1857, 1, 19, 173, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        armer_slot = sprites.readDataNumber(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_id") + 0
        console.log(armer_slot)
        sprites.setDataNumber(invantory, "" + sprites.readDataNumber(invantory, "selection") + "item_id", sprites.readDataNumber(invantory, "cloakslot_id"))
        sprites.setDataNumber(invantory, "cloakslot_id", armer_slot)
    }
    load_player_animations()
    update_this_lists()
    Refresh_invantory()
}
function pull_up_invantory() {
    if (can_open_menu) {
        music.play(music.createSoundEffect(WaveShape.Square, 1857, 1, 19, 173, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        if (menu_open) {
            menu_open = false
            if (!(incutesence)) {
                canrun = false
                platformer.moveSprite(mySprite, false)
            }
        } else {
            menu_open = true
            if (!(incutesence)) {
                platformer.moveSprite(mySprite, true)
                canrun = true
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.ivantorybit)) {
            value.setFlag(SpriteFlag.Invisible, menu_open)
        }
        for (let value of sprites.allOfKind(SpriteKind.item_slot)) {
            value.setFlag(SpriteFlag.Invisible, menu_open)
        }
    }
}
function addXandY(x: number, y: number) {
    invantory_X.push(x)
    Invantory_Y.push(y)
}
function move_selector(num: number, text: string) {
    if (true) {
        music.play(music.createSoundEffect(WaveShape.Square, 1110, 0, 142, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        sprites.changeDataNumberBy(invantory, "selection", num)
        if (sprites.readDataNumber(invantory, "selection") >= 16) {
            if (text == "down") {
                if (sprites.readDataNumber(invantory, "selection") == 16) {
                    sprites.setDataNumber(invantory, "selection", 0)
                } else if (sprites.readDataNumber(invantory, "selection") == 17) {
                    sprites.setDataNumber(invantory, "selection", 1)
                } else if (sprites.readDataNumber(invantory, "selection") == 18) {
                    sprites.setDataNumber(invantory, "selection", 2)
                } else if (sprites.readDataNumber(invantory, "selection") == 19) {
                    sprites.setDataNumber(invantory, "selection", 3)
                }
            } else {
                sprites.setDataNumber(invantory, "selection", 0)
            }
        } else if (sprites.readDataNumber(invantory, "selection") <= -1) {
            if (text == "up") {
                if (sprites.readDataNumber(invantory, "selection") == -4) {
                    sprites.setDataNumber(invantory, "selection", 12)
                } else if (sprites.readDataNumber(invantory, "selection") == -3) {
                    sprites.setDataNumber(invantory, "selection", 13)
                } else if (sprites.readDataNumber(invantory, "selection") == -2) {
                    sprites.setDataNumber(invantory, "selection", 14)
                } else if (sprites.readDataNumber(invantory, "selection") == -1) {
                    sprites.setDataNumber(invantory, "selection", 15)
                }
            } else {
                sprites.setDataNumber(invantory, "selection", 16)
                sprites.changeDataNumberBy(invantory, "selection", num)
            }
        }
        Refresh_invantory()
    }
}
function set_item_at_num_to_num(num: number, num2: number) {
    sprites.setDataNumber(sprites.readDataSprite(invantory, "" + num), "item_id", num2)
    sprites.readDataSprite(invantory, "" + num).setImage(items_images[num2])
}
function update_this_lists() {
    if (true) {
        theinvantorylist = []
        for (let index = 0; index <= 15; index++) {
            theinvantorylist.push(sprites.readDataNumber(invantory, "" + index + "item_id"))
        }
        theAbutton = sprites.readDataNumber(invantory, "sword slot_id")
        armer_slot = sprites.readDataNumber(invantory, "cloakslot_id")
        theBbuttonitem = sprites.readDataNumber(invantory, "Bbottonslot_id")
        console.log(theinvantorylist)
        console.log(theAbutton)
    }
}
function create_invantory() {
    invantory = sprites.create(assests[0].clone(), SpriteKind.ivantorybit)
    invantory.z = 100
    invantory.setFlag(SpriteFlag.Invisible, true)
    invantory.setFlag(SpriteFlag.RelativeToCamera, true)
    create_invatnotory_slots(15)
    invantory_X = []
    Invantory_Y = []
    addXandY(20, 10)
    addXandY(37, 10)
    addXandY(54, 10)
    addXandY(71, 10)
    addXandY(20, 27)
    addXandY(37, 27)
    addXandY(54, 27)
    addXandY(71, 27)
    addXandY(20, 44)
    addXandY(37, 44)
    addXandY(54, 44)
    addXandY(71, 44)
    addXandY(20, 61)
    addXandY(37, 61)
    addXandY(54, 61)
    addXandY(71, 61)
    sprites.setDataNumber(invantory, "selection", 0)
    Refresh_invantory()
    sprites.setDataNumber(invantory, "sword slot_id", -1)
    sprites.setDataString(invantory, "sword slot_type", "blank")
    sprites.setDataNumber(invantory, "cloakslot_id", -1)
    sprites.setDataString(invantory, "cloakslot_type", "blank")
    sprites.setDataNumber(invantory, "Bbottonslot_id", -1)
    sprites.setDataString(invantory, "Bbottonslot_type", "blank")
    sprites.setDataNumber(invantory, "talismen_id", -1)
    sprites.setDataString(invantory, "talismen_type", "blank")
}
function create_invatnotory_slots(num: number) {
    for (let index = 0; index <= num; index++) {
        sprites.setDataString(invantory, "" + index + "item_type", "blank")
        sprites.setDataNumber(invantory, "" + index + "item_id", -1)
    }
}