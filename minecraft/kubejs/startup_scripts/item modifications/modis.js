console.info('-----Loading modis')

ItemEvents.modification(event => {

    event.modify(/.*steel.*/, item => item.rarity = 'RARE')
    event.modify(/.*brass.*/, item => item.rarity = 'UNCOMMON')

    event.modify('tfmg:creosote_bucket', item => {
        item.rarity = 'UNCOMMON'
        item.burnTime = 16000
        item.craftingRemainder = 'minecraft:bucket'
    })
    event.modify(/ad_astra:.*steel.*/, item => item.rarity = 'RARE')

    // Create Nuclear
    event.modify(/createnuclear:.*steel.*/, item => item.rarity = 'RARE')
    event.modify(/createnuclear:.*reactor.*/, item => item.rarity = 'EPIC')
    event.modify('createnuclear:uranium_bucket', item => item.rarity = 'UNCOMMON')
    event.modify('createnuclear:reactor_casing', item => item.rarity = 'RARE')
    event.modify('createnuclear:reactor_input', item => item.rarity = 'RARE')
    event.modify('createnuclear:reactor_output', item => item.rarity = 'RARE')
    
    // The Factory Must Grow
    event.modify(/tfmg:.*slag.*/, item => item.rarity = 'RARE')
    event.modify(/tfmg:.*cast.*/, item => item.rarity = 'UNCOMMON')
    event.modify(/tfmg:.*aluminum.*/, item => item.rarity = 'UNCOMMON')
    event.modify(/tfmg:.*plastic.*/, item => item.rarity = 'EPIC')

    // Create
    event.modify(/create:.*brass.*/, item => item.rarity = 'UNCOMMON')
    event.modify('create:precision_mechanism', item => item.rarity = 'UNCOMMON')

    // Vanilla
    event.modify(/^.*diamond.*$/, item => {
        if (!item.id.startsWith('irons_spellbooks:')) {
            item.rarity = 'UNCOMMON';
        }
    });
    event.modify(/^.*netherite.*$/, item => {
        if (!item.id.startsWith('irons_spellbooks:')) {
            item.rarity = 'RARE';
        }
    });

    // Tempad
    event.modify(/tempad:.*tempad.*/, item => item.rarity = 'EPIC')


    console.info('-----Loaded modis....')
})