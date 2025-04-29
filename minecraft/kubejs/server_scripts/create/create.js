ServerEvents.recipes(event => {

    event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter', [
        '  B  ',
        ' P P ',
        'B E B',
        ' P P ',
        '  B  '

    ], {
        B: 'minecraft:bamboo',
        P: 'create:propeller',
        E: 'create:steam_engine',

    })
    event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne', [
        '  S  ',
        'HHPHH',
        '  S  '

    ], {
        H: 'immersive_aircraft:hull',
        P: 'create:propeller',
        S: 'create:white_sail',

    })

    event.recipes.create.mechanical_crafting('tempad:tempad', [
        'BBBBB',
        'BTDDB',
        'BCDDB',
        'BCDDB',
        'BHDDB',
        'BBBBB',

    ], {
        D: 'tfmg:segmented_display',
        B: 'create:brass_block',
        C: 'computercraft:computer_advanced',
        H: 'supplementaries:hourglass',
        T: 'create:cuckoo_clock'

    })

    event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
        '  S  ',
        '  SS ',
        'HHEHP',
        '  SS ',
        '  S  '


    ], {
        H: 'immersive_aircraft:hull',
        P: 'create:propeller',
        S: 'create:white_sail',
        E: 'create:steam_engine'

    })
    event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
        'SSSSS',
        'SSSSS',
        'PPEPP',
        'H   H',
        'HHHHH'


    ], {
        H: 'immersive_aircraft:hull',
        P: 'create:propeller',
        S: 'create:white_sail',
        E: 'create:steam_engine'

    })

    // Shaped Crafting
    event.shaped(
        Item.of('hangglider:glider_framework', 1), // arg 1: output
        [
            ' S ',
            'S S', // arg 2: the shape (array of strings)
            'SSS'
        ],
        {
            S: '#forge:ingots/steel'
        }
    )

    event.shaped(
        Item.of('tfmg:polarizer', 1), // arg 1: output
        [
            'S A',
            'CIC', // arg 2: the shape (array of strings)
            'WEW'
        ],
        {
            S: 'alexscaves:scarlet_magnet',
            A: 'alexscaves:azure_magnet',
            I: '#forge:ingots/steel',
            C: 'tfmg:capacitor_',
            W: '#forge:wires/copper',
            E: 'tfmg:electric_casing'
        }
    )

    event.shaped(
        Item.of('immersive_aircraft:industrial_gears', 1), // arg 1: output
        [
            ' II',
            'UCI', // arg 2: the shape (array of strings)
            'UU '
        ],
        {
            I: 'minecraft:iron_ingot',
            U: 'minecraft:copper_ingot',
            C: 'create:cogwheel'
        }
    )




    // precision mechanism recipe because it fucking broke??/
    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
        Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
        Item.of('create:andesite_alloy').withChance(8.0),
        Item.of('create:cogwheel').withChance(5.0),
        Item.of('create:shaft').withChance(2.0),
        Item.of('create:crushed_gold_ore').withChance(2.0),
        Item.of('2x minecraft:gold_nugget').withChance(2.0),
        'minecraft:iron_ingot',
        'minecraft:clock'
    ], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
        // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget'])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(5) // set the transitional item and the number of loops

    // Shapeless Crafting
    event.shapeless(
        Item.of('create:andesite_alloy', 3),
        [
            'minecraft:andesite',
            '3x minecraft:iron_nugget'
        ]
        )

    event.shapeless(
        Item.of('create:andesite_alloy', 9),
        [
            'create:andesite_alloy_block'
        ]
    )

    event.shapeless(
        Item.of('create:gearbox', 1),
        [
            'create:vertical_gearbox'
        ]
    )

    event.shapeless(
        Item.of('create:vertical_gearbox', 1),
        [
            'create:gearbox'
        ]
    )

    event.shapeless(
        Item.of('immersive_aircraft:propeller', 1),
        [
            'create:propeller'
        ]
    )

    event.shapeless(
        Item.of('create:propeller', 1),
        [
            'immersive_aircraft:propeller'
        ]
    )

    event.recipes.create.haunting('minecraft:crying_obsidian', 'minecraft:obsidian')
    event.recipes.create.haunting('minecraft:chorus_fruit', 'minecraft:apple')
    event.recipes.create.haunting('explorerscompass:explorerscompass', 'naturescompass:naturescompass')

    event.recipes.create.milling(['create:crushed_raw_gold', Item.of('minecraft:quartz').withChance(0.5), Item.of('create:experience_nugget').withChance(0.1)], 'minecraft:raw_gold')
    event.recipes.create.milling(['create:crushed_raw_copper', Item.of('minecraft:clay_ball').withChance(0.5), Item.of('create:experience_nugget').withChance(0.1)], 'minecraft:raw_copper')
    event.recipes.create.milling(['create:crushed_raw_iron', Item.of('minecraft:redstone').withChance(0.5), Item.of('create:experience_nugget').withChance(0.1)], 'minecraft:raw_iron')
    event.recipes.create.milling(['create:crushed_raw_zinc', Item.of('minecraft:gunpowder').withChance(0.5), Item.of('create:experience_nugget').withChance(0.1)], 'create:raw_zinc')
    event.recipes.create.milling(['9x minecraft:bone_meal', Item.of('6x minecraft:bone_meal').withChance(0.5), Item.of('3x minecraft:bone_meal').withChance(0.25), Item.of('create:experience_nugget').withChance(0.01)], '#chipped:bone_block')

    event.recipes.create.milling(['3x minecraft:bone_meal', Item.of('2x minecraft:bone_meal').withChance(0.5)], '#twigs:seashells')

    event.recipes.create.mixing(['minecraft:lime_dye'], [Fluid.water(250), 'minecraft:oak_sapling'])
    event.recipes.create.mixing([Fluid.of('create_enchantment_industry:experience', 250)], ['create:experience_nugget']).heated()

    event.recipes.create.cutting('minecraft:apple', 'minecraft:oak_sapling')
    event.recipes.create.cutting([Item.of('wan_ancient_beasts:glider_feather').withChance(0.25)], '#minecraft:leaves')

    

    event.recipes.create.item_application('create:depot', ['create:andesite_casing', 'create:andesite_alloy'])
    event.recipes.create.item_application('create:rotation_speed_controller', ['create:brass_casing', 'create:precision_mechanism'])
    event.recipes.create.item_application('supplementaries:clock_block', ['#forge:stripped_logs', 'minecraft:clock'])
    event.recipes.create.item_application('create:cuckoo_clock', ['create:andesite_casing', 'minecraft:clock'])
    event.recipes.create.item_application('create:empty_blaze_burner', ['minecraft:netherrack', 'create:andesite_alloy'])
    event.recipes.create.item_application('create:encased_chain_drive', ['create:andesite_casing', 'create:shaft'])
    event.recipes.create.item_application('create:gearbox', ['create:andesite_casing', 'create:cogwheel'])
    event.recipes.create.item_application('create:mechanical_drill', ['create:andesite_casing', 'wan_ancient_beasts:eater_tooth'])
    event.recipes.create.item_application('etched:radio', ['minecraft:note_block', 'create:transmitter'])
    event.recipes.create.item_application('create:spout', ['create:copper_casing', 'minecraft:dried_kelp'])
    event.recipes.create.item_application('create:turntable', ['#minecraft:wooden_slabs', 'create:shaft'])
    event.recipes.create.item_application('create_enchantment_industry:printer', ['create:spout', '#forge:plates/iron'])
    event.recipes.create.item_application('create_enchantment_industry:disenchanter', ['create:copper_casing', '#create:sandpaper'])
    event.recipes.create.item_application('create:fluid_tank', ['create:framed_glass', 'create:copper_sheet'])

    event.recipes.create.item_application('create:mechanical_pump', ['create:fluid_pipe', 'create:cogwheel'])
    event.recipes.create.item_application('tfmg:steel_mechanical_pump', ['tfmg:steel_pipe', 'create:cogwheel'])
    event.recipes.create.item_application('tfmg:brass_mechanical_pump', ['tfmg:brass_pipe', 'create:cogwheel'])
    event.recipes.create.item_application('tfmg:cast_iron_mechanical_pump', ['tfmg:cast_iron_pipe', 'create:cogwheel'])
    event.recipes.create.item_application('tfmg:plastic_mechanical_pump', ['tfmg:plastic_pipe', 'create:cogwheel'])
    event.recipes.create.item_application('tfmg:aluminum_mechanical_pump', ['tfmg:aluminum_pipe', 'create:cogwheel'])

    event.recipes.create.splashing(['create:brass_ingot'], 'abyssal_decor:seabrass_ingot')
    

    event.recipes.create.crushing(['minecraft:netherite_scrap', Item.of('minecraft:netherite_scrap').withChance(0.5)], 'minecraft:ancient_debris')
    event.recipes.create.crushing(['create:crushed_raw_uranium', Item.of('create:crushed_raw_uranium').withChance(0.5), Item.of('create:crushed_raw_uranium').withChance(0.25), Item.of('create:experience_nugget').withChance(0.5)], '#forge:raw_materials/uranium')

})