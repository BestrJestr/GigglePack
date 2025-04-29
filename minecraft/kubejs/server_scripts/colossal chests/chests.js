ServerEvents.recipes(event =>
{
    event.shaped('colossalchests:upgrade_tool', [
        ' S ',
        'SWS',
        ' S '
    ], {
        W: 'colossalchests:chest_wall_wood',
        S: 'minecraft:stick'
    });

    event.shapeless(
        Item.of('colossalchests:upgrade_tool', 1),
        [
            'colossalchests:upgrade_tool_reverse'
        ]
    )

    event.shapeless(
        Item.of('colossalchests:upgrade_tool_reverse', 1),
        [
            'colossalchests:upgrade_tool'
        ]
    )

    event.recipes.create.item_application('colossalchests:chest_wall_wood', ['#minecraft:logs', 'minecraft:flint'])
    event.recipes.create.item_application('colossalchests:colossal_chest_wood', ['colossalchests:chest_wall_wood', 'minecraft:iron_ingot'])
    event.recipes.create.item_application('colossalchests:interface_wood', ['colossalchests:chest_wall_wood', '#forge:cobblestone'])

    event.recipes.create.item_application('colossalchests:chest_wall_copper', ['#minecraft:logs', 'minecraft:copper_ingot'])
    event.recipes.create.item_application('colossalchests:colossal_chest_copper', ['colossalchests:chest_wall_copper', 'minecraft:iron_ingot'])
    event.recipes.create.item_application('colossalchests:interface_copper', ['colossalchests:chest_wall_copper', '#forge:cobblestone'])

    event.recipes.create.item_application('colossalchests:chest_wall_iron', ['#minecraft:logs', 'minecraft:iron_ingot'])
    event.recipes.create.item_application('colossalchests:colossal_chest_iron', ['colossalchests:chest_wall_iron', 'minecraft:iron_ingot'])
    event.recipes.create.item_application('colossalchests:interface_iron', ['colossalchests:chest_wall_iron', '#forge:cobblestone'])

    event.recipes.create.item_application('colossalchests:chest_wall_gold', ['#minecraft:logs', 'minecraft:gold_ingot'])
    event.recipes.create.item_application('colossalchests:colossal_chest_gold', ['colossalchests:chest_wall_gold', 'minecraft:iron_ingot'])
    event.recipes.create.item_application('colossalchests:interface_gold', ['colossalchests:chest_wall_gold', '#forge:cobblestone'])

    event.recipes.create.item_application('colossalchests:chest_wall_diamond', ['#minecraft:logs', 'minecraft:diamond'])
    event.recipes.create.item_application('colossalchests:colossal_chest_diamond', ['colossalchests:chest_wall_diamond', 'minecraft:iron_ingot'])
    event.recipes.create.item_application('colossalchests:interface_diamond', ['colossalchests:chest_wall_diamond', '#forge:cobblestone'])

    event.recipes.create.item_application('colossalchests:chest_wall_obsidian', ['colossalchests:chest_wall_diamond', 'minecraft:obsidian'])
    event.recipes.create.item_application('colossalchests:colossal_chest_obsidian', ['colossalchests:chest_wall_obsidian', 'minecraft:iron_ingot'])
    event.recipes.create.item_application('colossalchests:interface_obsidian', ['colossalchests:chest_wall_obsidian', '#forge:cobblestone'])
})