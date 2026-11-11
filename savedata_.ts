function load_save_data(save: boolean) {
    if (save) {
        blockSettings.writeNumber("checkpoint_zone_in_data", zone)
        blockSettings.writeNumberArray("the invantory", theinvantorylist)
        blockSettings.writeNumber("theAbutton", theAbutton)
        blockSettings.writeNumber("thecloakslot", armer_slot)
        blockSettings.writeNumber("theBbutton", theBbuttonitem)
        blockSettings.writeNumber("talismanslot", thetalismanslotvar)
        blockSettings.writeNumberArray("bosses_defected", bosses_defeated)
    } else {
        if (!(blockSettings.exists("paformacemode"))) {
            blockSettings.writeNumber("paformacemode", 1)
        }
        if (!(blockSettings.exists("deathmarker"))) {
            blockSettings.writeNumber("deathmarker", 1)
        }
        if (!(blockSettings.exists("bosses_defected"))) {
            blockSettings.writeNumberArray("bosses_defected", [])
        }
        bosses_defeated = blockSettings.readNumberArray("bosses_defected")
    }
}
