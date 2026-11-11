function yes_or_no_queston(text: string) {
    can_open_menu = false
    platformer.moveSprite(mySprite, false, 90)
    canrun = false
    NPCtext = fancyText.create(text, 150, 3, customFont.RegularBlock_4_by_Luke)
    fancyText.setTextFlag(NPCtext, fancyText.Flag.AlwaysOccupyMaxWidth, true)
    fancyText.setTextFlag(NPCtext, fancyText.Flag.ChangeHeightWhileAnimating, false)
    fancyText.setAnimationSound(NPCtext, music.createSoundEffect(WaveShape.Noise, 3097, 0, 255, 28, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic))
    fancyText.setFrame(NPCtext, img`
        .6666666666666666666666.
        667777777777777777777766
        677666666666666666666776
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        677666666666666666666776
        667777777777777777777766
        .6666666666666666666666.
        `)
    NPCtext.setFlag(SpriteFlag.RelativeToCamera, true)
    NPCtext.z = 10000
    NPCtext.setPosition(80, 20)
    fancyText.animateAtSpeed(NPCtext, fancyText.TextSpeed.Fast, fancyText.AnimationPlayMode.UntilDone)
    yes = fancyText.create("Yes", 40, 3, fancyText.rounded_large)
    yes.setFlag(SpriteFlag.RelativeToCamera, true)
    no = fancyText.create("No", 40, 4, fancyText.rounded_large)
    yesno = true
    no.setFlag(SpriteFlag.RelativeToCamera, true)
    no.y += 32
    yes.y += 0
    yes.x = 80
    no.x = 80
    yes.z = 100
    no.z = 100
    picker = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 4 4 5 . . . . . . 
        . . . . . 5 4 4 4 4 5 . . . . . 
        . . . . . 5 4 4 4 4 4 5 . . . . 
        . . . . . 5 4 4 4 4 4 4 5 . . . 
        . . . . . 5 4 4 4 4 4 4 4 5 . . 
        . . . . . 5 4 4 4 4 4 4 4 4 5 . 
        . . . . . 5 4 4 4 4 4 4 4 4 5 . 
        . . . . . 5 4 4 4 4 4 4 4 5 . . 
        . . . . . 5 4 4 4 4 4 4 5 . . . 
        . . . . . 5 4 4 4 4 4 5 . . . . 
        . . . . . 5 4 4 4 4 5 . . . . . 
        . . . . . . 5 4 4 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.background)
    animation.runImageAnimation(
        picker,
        [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . 4 3 3 4 . . . . . . . 
        . . . . 4 3 3 3 3 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 3 4 . . . . 
        . . . . 4 3 3 3 3 3 3 3 4 . . . 
        . . . . 4 3 3 3 3 3 3 3 3 4 . . 
        . . . . 4 3 3 3 3 3 3 3 3 4 . . 
        . . . . 4 3 3 3 3 3 3 3 4 . . . 
        . . . . 4 3 3 3 3 3 3 4 . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 4 . . . . . . 
        . . . . . 4 3 3 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 3 3 4 . . . . . . 
        . . . . . 4 3 3 3 3 4 . . . . . 
        . . . . . 4 3 3 3 3 3 4 . . . . 
        . . . . . 4 3 3 3 3 3 3 4 . . . 
        . . . . . 4 3 3 3 3 3 3 3 4 . . 
        . . . . . 4 3 3 3 3 3 3 3 3 4 . 
        . . . . . 4 3 3 3 3 3 3 3 3 4 . 
        . . . . . 4 3 3 3 3 3 3 3 4 . . 
        . . . . . 4 3 3 3 3 3 3 4 . . . 
        . . . . . 4 3 3 3 3 3 4 . . . . 
        . . . . . 4 3 3 3 3 4 . . . . . 
        . . . . . . 4 3 3 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . 4 3 3 4 . . . . . 
        . . . . . . 4 3 3 3 3 4 . . . . 
        . . . . . . 4 3 3 3 3 3 4 . . . 
        . . . . . . 4 3 3 3 3 3 3 4 . . 
        . . . . . . 4 3 3 3 3 3 3 3 4 . 
        . . . . . . 4 3 3 3 3 3 3 3 3 4 
        . . . . . . 4 3 3 3 3 3 3 3 3 4 
        . . . . . . 4 3 3 3 3 3 3 3 4 . 
        . . . . . . 4 3 3 3 3 3 3 4 . . 
        . . . . . . 4 3 3 3 3 3 4 . . . 
        . . . . . . 4 3 3 3 3 4 . . . . 
        . . . . . . . 4 3 3 4 . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 3 3 4 . . . . . . 
        . . . . . 4 3 3 3 3 4 . . . . . 
        . . . . . 4 3 3 3 3 3 4 . . . . 
        . . . . . 4 3 3 3 3 3 3 4 . . . 
        . . . . . 4 3 3 3 3 3 3 3 4 . . 
        . . . . . 4 3 3 3 3 3 3 3 3 4 . 
        . . . . . 4 3 3 3 3 3 3 3 3 4 . 
        . . . . . 4 3 3 3 3 3 3 3 4 . . 
        . . . . . 4 3 3 3 3 3 3 4 . . . 
        . . . . . 4 3 3 3 3 3 4 . . . . 
        . . . . . 4 3 3 3 3 4 . . . . . 
        . . . . . . 4 3 3 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . 4 3 3 4 . . . . . . . 
        . . . . 4 3 3 3 3 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 3 4 . . . . 
        . . . . 4 3 3 3 3 3 3 3 4 . . . 
        . . . . 4 3 3 3 3 3 3 3 3 4 . . 
        . . . . 4 3 3 3 3 3 3 3 3 4 . . 
        . . . . 4 3 3 3 3 3 3 3 4 . . . 
        . . . . 4 3 3 3 3 3 3 4 . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 4 . . . . . . 
        . . . . . 4 3 3 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . 4 3 3 4 . . . . . . . . 
        . . . 4 3 3 3 3 4 . . . . . . . 
        . . . 4 3 3 3 3 3 4 . . . . . . 
        . . . 4 3 3 3 3 3 3 4 . . . . . 
        . . . 4 3 3 3 3 3 3 3 4 . . . . 
        . . . 4 3 3 3 3 3 3 3 3 4 . . . 
        . . . 4 3 3 3 3 3 3 3 3 4 . . . 
        . . . 4 3 3 3 3 3 3 3 4 . . . . 
        . . . 4 3 3 3 3 3 3 4 . . . . . 
        . . . 4 3 3 3 3 3 4 . . . . . . 
        . . . 4 3 3 3 3 4 . . . . . . . 
        . . . . 4 3 3 4 . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
        100,
        true
    )
    picker.z = 100
    picker.x = 50
    picker.y += 0
    picker.setFlag(SpriteFlag.RelativeToCamera, true)
    pauseUntil(() => browserEvents.Z.isPressed())
    sprites.destroy(NPCtext)
    sprites.destroy(no)
    sprites.destroy(yes)
    sprites.destroy(picker)
    platformer.moveSprite(mySprite, true, 90)
    can_open_menu = true
    canrun = true
    return yesno
}
function MakeNPCText(text: string) {
    can_open_menu = false
    platformer.moveSprite(mySprite, false, 90)
    canrun = false
    NPCtext = fancyText.create(text, 150, 3, customFont.RegularBlock_4_by_Luke)
    fancyText.setTextFlag(NPCtext, fancyText.Flag.AlwaysOccupyMaxWidth, true)
    fancyText.setTextFlag(NPCtext, fancyText.Flag.ChangeHeightWhileAnimating, false)
    fancyText.setAnimationSound(NPCtext, music.createSoundEffect(WaveShape.Noise, 3097, 0, 255, 28, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic))
    fancyText.setFrame(NPCtext, img`
        .6666666666666666666666.
        667777777777777777777766
        677666666666666666666776
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        676666666666666666666676
        677666666666666666666776
        667777777777777777777766
        .6666666666666666666666.
        `)
    NPCtext.setFlag(SpriteFlag.RelativeToCamera, true)
    NPCtext.z = 10000
    NPCtext.setPosition(80, 20)
    fancyText.animateAtSpeed(NPCtext, fancyText.TextSpeed.Fast, fancyText.AnimationPlayMode.UntilDone)
    pauseUntil(() => browserEvents.Z.isPressed())
    sprites.destroy(NPCtext)
    platformer.moveSprite(mySprite, true, 90)
    can_open_menu = true
    canrun = true
}
function handle_npc_intractions() {
    for (let value of spriteutils.getSpritesWithin(SpriteKind.npc, 30, mySprite)) {
        if (sprites.readDataNumber(value, "NPCID") >= 2) {
            value.sayText("V", 100, false)
            if (browserEvents.V.isPressed()) {
                value.sayText("")
                if (sprites.readDataNumber(value, "NPCID") == 2) {
                    MakeNPCText("Its been getting really dangerous outside the town recently")
                    MakeNPCText("I'm here to keep watch and stand guard")
                    MakeNPCText("You better come in and stay safe young one")
                } else if (sprites.readDataNumber(value, "NPCID") == 6) {
                    if (Math.percentChance(50)) {
                        MakeNPCText("My eye sees all")
                    } else if (Math.percentChance(50)) {
                        MakeNPCText("You can't see as much as me")
                    } else {
                        MakeNPCText("I see all")
                        MakeNPCText("Everything")
                        MakeNPCText("Even you, young one")
                    }
                } else if (sprites.readDataNumber(value, "NPCID") == 5) {
                    if (checkfor("Has_item", 9)) {
                        MakeNPCText("Thank you so much young one")
                    } else {
                        MakeNPCText("Hello young one")
                        MakeNPCText("I lost my sword the other day going down to the caves ")
                        MakeNPCText("Luckily, I was given a new one but it isn't as good :(")
                        if (checkfor("Has_item", 1)) {
                            if (yes_or_no_queston("Give him back his sword?")) {
                                checkfor("Remove_item", 1)
                                MakeNPCText("thank you so much!")
                                MakeNPCText("I thought i would never see this again")
                                MakeNPCText("Here take this as a reword")
                                MakeNPCText("You got a item check your inventory")
                                checkfor("give Item", 9)
                            }
                        }
                    }
                } else if (sprites.readDataNumber(value, "NPCID") == 4) {
                    MakeNPCText("Heyo!")
                    if (checkfor("boss_def", 1)) {
                        if (!(checkfor("Has_item", 5))) {
                            MakeNPCText("Thanks for killing that big bug for us")
                            MakeNPCText("Here you go")
                            MakeNPCText("You got a item check your inventory")
                            checkfor("give Item", 5)
                            MakeNPCText("once you equip the item you can dash using X while in the air")
                        } else {
                            MakeNPCText("THank you so much!")
                        }
                    } else {
                        MakeNPCText("If you help me I'll give you something special ")
                        if (yes_or_no_queston("help him?")) {
                            MakeNPCText("Thank you, so down in the caves there is a big bug ")
                            MakeNPCText("it has been causing this town trouble alot lately")
                            MakeNPCText("if you defeat him i'll give you a item")
                        } else {
                            MakeNPCText("To bad, come again later if your ever intrested")
                        }
                    }
                } else if (sprites.readDataNumber(value, "NPCID") == 3) {
                    MakeNPCText("Hello!")
                    MakeNPCText("Its rare to see a titan around here! We never see your kind about.")
                    MakeNPCText("I've never seen one before in its prime, though I've heard they can grow to be huge!")
                } else if (sprites.readDataNumber(value, "NPCID") == 7) {
                    MakeNPCText("Right here is the entrance for the old caves")
                    MakeNPCText("Last time we went down there my friend lost their sword!")
                    MakeNPCText("I can't belive he lost it...")
                } else if (sprites.readDataNumber(value, "NPCID") == 8) {
                    MakeNPCText("When i was young my parents took me to the capital")
                    MakeNPCText("I made a friend there who forged my spear")
                    MakeNPCText("I wonder how he's doing....")
                    MakeNPCText("I haven't heard form him in years.")
                } else if (sprites.readDataNumber(value, "NPCID") == 10) {
                    MakeNPCText("Something horrible is behind that door")
                    MakeNPCText("young one I can't let you enter")
                    MakeNPCText("until you have the dash you wont be ready for whats to come")
                }
            }
        }
    }
    for (let value of spriteutils.getSpritesWithin(SpriteKind.item, 17, mySprite)) {
        value.sayText("V", 100, false)
        if (browserEvents.V.isPressed()) {
            value.sayText("")
            MakeNPCText("You got a item check your inventory")
            for (let index = 0; index <= 15; index++) {
                if (theinvantorylist[index] == -1) {
                    theinvantorylist[index] = sprites.readDataNumber(value, "what_item_it_it_is")
                    break;
                }
            }
            sprites.destroy(value)
            console.log(theinvantorylist.length)
            Refresh_invantory()
        }
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile56`)) {
        mySprite.sayText("V", 100, false)
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile65`)) {
        mySprite.sayText("V", 100, false)
    }
    if (zone == 200) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
            mySprite.sayText("V", 100, false)
        }
    }
}
function makeNpc(npcID: number, tilePlaced_one_to_of: Image, animaion: any[], tileLeft: Image) {
    for (let value of tiles.getTilesByType(tilePlaced_one_to_of)) {
        aNPC = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.npc)
        animation.runImageAnimation(
            aNPC,
            animaion,
            100,
            true
        )
        sprites.setDataNumber(aNPC, "NPCID", npcID)
        aNPC.ay = 150
        tiles.setTileAt(value, tileLeft)
        tiles.placeOnTile(aNPC, value)
    }
}