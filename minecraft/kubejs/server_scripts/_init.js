ServerEvents.recipes(event => {
    // Recipes moved in place of Create (or its addons) integration
    // event.remove({ output: '' })

    event.remove({ output: 'apotheosis:hellshelf' })
    event.remove({ output: 'apotheosis:seashelf' })
    event.remove({ output: 'apotheosis:sightshelf' })
    event.remove({ output: 'apotheosis:sightshelf_t2' })
    event.remove({ output: 'apotheosis:endshelf' })
    event.remove({ output: 'apotheosis:blazing_hellshelf' })
    event.remove({ output: 'apotheosis:glowing_hellshelf' })
    event.remove({ output: 'apotheosis:crystal_seashelf' })
    event.remove({ output: 'apotheosis:heart_seashelf' })
    event.remove({ output: 'apotheosis:rectifier' })
    event.remove({ output: 'apotheosis:echoing_deepshelf' })
    event.remove({ output: 'apotheosis:soul_touched_deepshelf' })
    event.remove({ output: 'apotheosis:soul_touched_sculkshelf' })
    event.remove({ output: 'apotheosis:echoing_sculkshelf' })
    event.remove({ output: 'apotheosis:dormant_deepshelf' })
    event.remove({ output: 'apotheosis:pearl_endshelf' })
    event.remove({ output: 'apotheosis:draconic_endshelf' })
    event.remove({ output: 'apotheosis:beeshelf' })
    event.remove({ output: 'apotheosis:melonshelf' })
    event.remove({ output: 'apotheosis:stoneshelf' })
    event.remove({ output: 'apotheosis:rectifier_t2' })
    event.remove({ output: 'apotheosis:rectifier_t3' })
    event.remove({ output: 'apotheosis:filtering_shelf' })
    event.remove({ output: 'apotheosis:treasure_shelf' })
    event.remove({ output: 'apotheosis:library' })
    event.remove({ output: 'apotheosis:ender_library' })
    event.remove({ output: 'apotheosis:infused_hellshelf' })
    event.remove({ output: 'apotheosis:infused_seashelf' })
    event.remove({ output: 'apotheosis:deepshelf' })
    event.remove({output: /apotheosis:.*_shelf$/});

    // remove alex caves hazmat in place of shapeless tfmg recipe

    event.remove({ output: 'create:andesite_alloy' })
    event.remove({ output: 'create:gearbox' })
    event.remove({ output: 'create:vertical_gearbox' })
    event.remove({ output: 'create:crushed_raw_uranium' })
    event.remove({ output: 'createnuclear:steel_ingot' })
    event.remove({ output: 'createnuclear:steel_block' })
    event.remove({ output: 'createnuclear:reactor_controller' })
    event.remove({ output: 'create:depot' })
    event.remove({ output: 'ad_astra:steel_block' })
    event.remove({ output: 'ad_astra:steel_ingot' })
    event.remove({ output: 'etched:radio' })
    event.remove({ output: 'create:cuckoo_clock' })
    event.remove({ output: 'create:mechanical_pump' })
    event.remove({ output: 'supplementaries:clock_block' })
    event.remove({ output: 'create:rotation_speed_controller' })
    event.remove({ output: 'create:empty_blaze_burner' })
    event.remove({ output: 'create:encased_chain_drive' })
    event.remove({ output: 'create:mechanical_drill' })
    event.remove({ output: 'create:spout' })
    event.remove({ output: 'create:turntable' })
    event.remove({ output: 'create_enchantment_industry:printer' })
    event.remove({ output: 'create_enchantment_industry:disenchanter' })
    event.remove({ output: 'hangglider:glider_framework' })
    event.remove({ output: 'create:fluid_tank' })

    // removing create: c&a recipes
    event.remove({ output: 'createaddition:spool' })
    event.remove({ output: 'createaddition:copper_spool' })
    event.remove({ output: 'createaddition:gold_spool' })
    event.remove({ output: 'createaddition:electrum_spool' })
    event.remove({ output: 'createaddition:festive_spool' })
    event.remove({ output: 'createaddition:gold_spool' })
    event.remove({ output: 'createaddition:electric_motor' })
    event.remove({ output: 'createaddition:alternator' })

    event.remove({ output: 'tfmg:polarizer' })
    event.remove({ output: 'tfmg:steel_mechanical_pump' })
    event.remove({ output: 'tfmg:brass_mechanical_pump' })
    event.remove({ output: 'tfmg:cast_iron_mechanical_pump' })
    event.remove({ output: 'tfmg:plastic_mechanical_pump' })
    event.remove({ output: 'tfmg:aluminum_mechanical_pump' })

    event.remove({ output: 'immersive_aircraft:biplane' })
    event.remove({ output: 'immersive_aircraft:gyrodyne' })
    event.remove({ output: 'immersive_aircraft:airship' })
    event.remove({ output: 'immersive_aircraft:quadrocopter' })
    event.remove({ output: 'immersive_aircraft:industrial_gears' })
    event.remove({ output: 'immersive_aircraft:propeller' })

    event.remove({ output: 'explorerscompass:explorerscompass' })

    event.remove({ output: 'abyssal_decor:grime' })

    event.remove({ output: 'tempad:tempad' })


    // alex removals
    event.remove({ output: 'alexscaves:nuclear_bomb' })
    event.remove({ output: 'alexscaves:submarine' })
    event.remove({ output: 'alexscaves:hazmat_mask' })
    event.remove({ output: 'alexscaves:hazmat_chestplate' })
    event.remove({ output: 'alexscaves:hazmat_leggings' })
    event.remove({ output: 'alexscaves:hazmat_boots' })

    event.remove({ mod: 'colossalchests' });
    
})