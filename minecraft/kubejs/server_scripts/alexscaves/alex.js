ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('create:chocolate', 1000), ['/alexscaves:.*_chocolate$/']).heated();

    event.shaped(
        Item.of('alexscaves:nuclear_bomb', 1), // arg 1: output
        [
            'SCS',
            'UBU', // arg 2: the shape (array of strings)
            'SCS'
        ],
        {
            S: '#ad_astra:steel_blocks',
            U: 'alexscaves:uranium_rod',
            B: 'alexscaves:block_of_uranium',
            C: 'alexscaves:fissile_core'
        }
    )

    event.shapeless(
        Item.of('alexscaves:hazmat_mask', 1),
        [
            'createnuclear:yellow_anti_radiation_helmet'
        ]
    )
    event.shapeless(
        Item.of('alexscaves:hazmat_chestplate', 1),
        [
            'createnuclear:yellow_anti_radiation_chestplate'
        ]
    )
    event.shapeless(
        Item.of('alexscaves:hazmat_leggings', 1),
        [
            'createnuclear:yellow_anti_radiation_leggings'
        ]
    )
    event.shapeless(
        Item.of('alexscaves:hazmat_boots', 1),
        [
            'createnuclear:anti_radiation_boots'
        ]
    )

    event.recipes.create.mechanical_crafting('createnuclear:reactor_controller', [
        'RRRRR',
        'RNCNR',
        'REFER',
        'RNVNR',
        'RRRRR'


    ], {
        R: 'createnuclear:reactor_casing',
        N: '#forge:ingots/steel',
        E: 'create:electron_tube',
        C: 'create:content_observer',
        F: 'alexscaves:fissile_core',
        V: 'create:item_vault'
    })

    event.recipes.create.mechanical_crafting('alexscaves:submarine', [
        '   T ',
        ' SBGG',
        'PSBHG',
        ' CCCC'


    ], {
        C: 'minecraft:copper_block',
        S: 'create:copper_sheet',
        P: 'create:propeller',
        G: 'create:framed_glass',
        T: 'minecraft:spyglass',
        H: 'create:contraption_controls',
        B: 'create:copper_backtank'
    })


    event.recipes.create.item_application('alexscaves:block_of_chocolate', ['minecraft:dirt', 'terramity:fairy_dust'])
    event.recipes.create.item_application('alexscaves:block_of_frosted_chocolate', ['minecraft:grass_block', 'terramity:fairy_dust'])
    

    event.recipes.create.splashing([Item.of('alexscaves:pearl').withChance(0.1)], 'oceanicrealms:clam')
})