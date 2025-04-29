ServerEvents.recipes(event => {
    // Recipes moved in place of Create (or its addons) integration
    // event.remove({ output: '' })


    event.recipes.create.mixing('apotheosis:ender_library', [Fluid.of('create_enchantment_industry:hyper_experience', 2000), 'apotheosis:library']).superheated();
    event.recipes.create.mixing('apotheosis:deepshelf', [Fluid.of('create_enchantment_industry:hyper_experience', 250), 'apotheosis:dormant_deepshelf']).superheated();
    event.recipes.create.mixing('apotheosis:infused_hellshelf', [Fluid.of('create_enchantment_industry:experience', 250), 'apotheosis:hellshelf']).heated();
    event.recipes.create.mixing('apotheosis:infused_seashelf', [Fluid.of('create_enchantment_industry:experience', 250), 'apotheosis:seashelf']).heated();
    

    let inter = 'minecraft:chiseled_bookshelf' // making a variable to store the transitional item makes the code more readable
    event.recipes.create.sequenced_assembly([
        'apotheosis:hellshelf'
    ], '#c:bookshelves', [ // input
        // the transitional item is a variable, used during the intermediate stages of the assembly
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying(inter, [inter, 'minecraft:nether_bricks']),
        event.recipes.createFilling(inter, [inter, Fluid.lava(250)]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:blaze_rod']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:regeneration' })]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:nether_bricks'])
    ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops

    event.recipes.create.sequenced_assembly([
        'apotheosis:seashelf'
    ], '#c:bookshelves', [ // input
        // the transitional item is a variable, used during the intermediate stages of the assembly
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_bricks']),
        event.recipes.createFilling(inter, [inter, Fluid.water(250)]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_bricks']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:water_breathing' })]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_bricks'])
    ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops

    event.recipes.create.sequenced_assembly([
        'apotheosis:sightshelf'
    ], 'apotheosis:infused_hellshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:gold_block']),
        event.recipes.createFilling(inter, [inter, Fluid.lava(250)]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:ender_eye']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:night_vision' })]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:gold_block'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:sightshelf_t2'
    ], 'apotheosis:sightshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:emerald_block']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:night_vision' })]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:netherite_ingot']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:night_vision' })]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:emerald_block'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:endshelf'
    ], '#c:bookshelves', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:end_stone_bricks']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:strength' })]),
        event.recipes.createDeploying(inter, [inter, 'apotheosis:infused_breath']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:fire_resistance' })]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:end_stone_bricks'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:beeshelf'
    ], '#c:bookshelves', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:beehive']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:honey', 250)]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:honeycomb_block']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:honey', 250)]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:beehive'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:melonshelf'
    ], '#c:bookshelves', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:melon']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:regeneration' })]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:glistering_melon_slice']),
        event.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 250, { Potion: 'minecraft:regeneration' })]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:melon'])
    ]).transitionalItem(inter).loops(1)


    event.recipes.create.sequenced_assembly([
        'apotheosis:blazing_hellshelf'
    ], 'apotheosis:infused_hellshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:fire_charge']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:blaze_powder']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:fire_charge'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:glowing_hellshelf'
    ], 'apotheosis:infused_hellshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:glowstone']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:glowstone']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:glowstone'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:crystal_seashelf'
    ], 'apotheosis:infused_seashelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_crystals']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_crystals']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_crystals'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:heart_seashelf'
    ], 'apotheosis:infused_seashelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_shard']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:heart_of_the_sea']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_shard'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:rectifier'
    ], 'apotheosis:infused_seashelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:amethyst_block']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:honeycomb_block']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:amethyst_block'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:rectifier_t2'
    ], 'apotheosis:rectifier', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:amethyst_block']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:gilded_blackstone']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:amethyst_block'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:rectifier_t3'
    ], 'apotheosis:rectifier_t2', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:amethyst_block']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:purpur_block']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:amethyst_block'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:filtering_shelf'
    ], 'apotheosis:infused_seashelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_brick_slab']),
        event.recipes.createDeploying(inter, [inter, 'apotheosis:infused_seashelf']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:prismarine_brick_slab'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:echoing_deepshelf'
    ], 'apotheosis:deepshelf', [ // input
        event.recipes.createDeploying(inter, [inter, '#minecraft:candles']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:echo_shard']),
        event.recipes.createDeploying(inter, [inter, '#minecraft:candles'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:soul_touched_sculkshelf'
    ], 'apotheosis:soul_touched_deepshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:sculk']),
        event.recipes.createDeploying(inter, [inter, 'apotheosis:warden_tendril']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:sculk_catalyst'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:soul_touched_deepshelf'
    ], 'apotheosis:deepshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:sculk']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:soul_lantern']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:sculk'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:echoing_sculkshelf'
    ], 'apotheosis:echoing_deepshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:sculk']),
        event.recipes.createDeploying(inter, [inter, 'apotheosis:warden_tendril']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:sculk_catalyst'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:dormant_deepshelf'
    ], '#c:bookshelves', [ // input
        event.recipes.createDeploying(inter, [inter, '#apotheosis:deepslate']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, '#apotheosis:deepslate'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:treasure_shelf'
    ], 'apotheosis:deepshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:emerald_block']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'apotheosis:deepshelf']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:emerald_block']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:library'
    ], 'minecraft:enchanting_table', [ // input
        event.recipes.createDeploying(inter, [inter, '#apotheosis:infused_shelves']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:ender_chest']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, '#apotheosis:infused_shelves']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:ender_chest']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:stoneshelf'
    ], '#c:bookshelves', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:polished_andesite']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:polished_andesite'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:pearl_endshelf'
    ], 'apotheosis:endshelf', [ // input
        event.recipes.createDeploying(inter, [inter, 'minecraft:end_rod']),
        event.recipes.createDeploying(inter, [inter, '#forge:ender_pearls']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:end_rod'])
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        'apotheosis:draconic_endshelf'
    ], 'apotheosis:endshelf', [ // input
        event.recipes.createDeploying(inter, [inter, '#forge:ender_pearls']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:dragon_head']),
        event.recipes.createDeploying(inter, [inter, '#forge:ender_pearls'])
    ]).transitionalItem(inter).loops(1)
    
})