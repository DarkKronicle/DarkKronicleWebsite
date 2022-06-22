export const ITEMS = [
    {
        name: 'armor_piercing_rounds',
        type: 'common',
        stats: [
            {
                name: 'boss-damage',
                type: 'LINEAR',
                number: .2
            }
        ]
    },
    {
        name: 'backup_magazine',
        type: 'common',
        stats: [
            {
                name: 'extra-secondary-skills',
                type: 'LINEAR',
                number: 1,
            }
        ]
    },
    {
        name: 'bison_steak',
        type: 'common',
        stats: [
            {
                name: 'extra-health',
                type: 'LINEAR',
                number: 25
            }
        ]
    },
    {
        name: 'bundle_of_fireworks',
        type: 'common',
        stats: [
            {
                name: 'fireworks',
                type: 'LINEAR',
                starting: 4,
                number: 4
            }
        ]
    },

    {
        name: 'bustling_fungus',
        type: 'common',
        stats: [
            {
                name: 'percent-of-health',
                type: 'LINEAR',
                initial: .0225,
                number: .0225
            },
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 1.5,
                number: 1.5
            }
        ]
    },
    {
        name: 'cautious_slug',
        type: 'common',
        stats: [
            {
                name: 'heal-points',
                type: 'LINEAR',
                number: 3
            }
        ]
    },
    {
        name: 'crowbar',
        type: 'common',
        stats: [
            {
                name: 'extra-damage',
                type: 'LINEAR',
                number: .75
            }
        ]
    },
    {
        name: 'Delicate Watch',
        type: 'common',
        stats: [
            {
                name: 'extra-damage',
                type: 'LINEAR',
                number: .20
            }
        ]
    },
    {
        name: 'energy_drink',
        type: 'common',
        stats: [
            {
                name: 'sprint-speed',
                type: 'LINEAR',
                number: .25
            }
        ]
    },
    {
        name: 'focus_crystal',
        type: 'common',
        stats: [
            {
                name: 'extra-damage',
                type: 'LINEAR',
                number: .2
            }
        ]
    },
    {
        name: 'gasoline',
        type: 'common',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 4
            },
            {
                name: 'burn-damage',
                type: 'LINEAR',
                initial: .75,
                number: .75
            }
        ]
    },
    {
        name: 'lens_makers_glasses',
        type: 'common',
        stats: [
            {
                name: 'crit-chance',
                type: 'LINEAR',
                number: .1,
                reroll: true
            }
        ]
    },
    {
        name: 'medkit',
        type: 'common',
        stats: [
            {
                name: 'heal-percent',
                type: 'LINEAR',
                number: .05
            }
        ]
    },
    {
        name: 'mocha',
        type: 'common',
        stats: [
            {
                name: 'attack-speed',
                type: 'LINEAR',
                number: .075
            },
            {
                name: 'movement-speed',
                type: 'LINEAR',
                number: .07
            }
        ]
    },
    {
        name: 'monster_tooth',
        type: 'common',
        stats: [
            {
                name: 'heal-percent',
                type: 'LINEAR',
                number: .02
            }
        ]
    },
    {
        name: 'oddly_shaped_opal',
        type: 'common',
        stats: [
            {
                name: 'armor',
                type: 'LINEAR',
                number: 100
            }
        ]
    },
    {
        name: 'pauls_goat_hoof',
        type: 'common',
        stats: [
            {
                name: 'movement-speed',
                type: 'LINEAR',
                number: .14
            }
        ]
    },
    {
        name: 'personal_shield_generator',
        type: 'common',
        stats: [
            {
                name: 'shield-percent',
                type: 'LINEAR',
                number: .08
            }
        ]
    },
    {
        name: 'power_elixir',
        type: 'common',
        stats: [
            {
                name: 'heals',
                type: 'LINEAR',
                number: 1
            }
        ]
    },
    {
        name: 'repulsion_armor_plate',
        type: 'common',
        stats: [
            {
                name: 'hit-damage-reduction',
                type: 'LINEAR',
                number: 5
            }
        ]
    },
    {
        name: 'Roll of Pennies',
        type: 'common',
        stats: [
            {
                name: 'gold',
                type: 'LINEAR',
                number: 3
            }
        ]
    },
    {
        name: 'Rusted names',
        type: 'common',
        stats: [
            {
                name: 'cache',
                type: 'LINEAR',
                number: 0,
                inital: 1
            }
        ]
    },
    {
        name: 'soldier_syringe',
        type: 'common',
        stats: [
            {
                name: 'attack-speed',
                type: 'LINEAR',
                number: .15
            }
        ]
    },
    {
        name: 'sticky_bomb',
        type: 'common',
        stats: [
            {
                name: 'sticky-bomb-chance',
                type: 'LINEAR',
                number: .05,
                reroll: true
            }
        ]
    },
    {
        name: 'stun_grenade',
        type: 'common',
        stats: [
            {
                name: 'grenade-chance',
                type: 'HYPERBOLIC',
                number: .05,
                reroll: true
            }
        ]
    },
    {
        name: 'topaz_brooch',
        type: 'common',
        stats: [
            {
                name: 'barrier-size',
                type: 'LINEAR',
                number: 15
            }
        ]
    },
    {
        name: 'tougher_times',
        type: 'common',
        stats: [
            {
                name: 'block-chance',
                type: 'HYPERBOLIC',
                number: .15
            }
        ]
    },
    {
        name: 'tri_tip_dagger',
        type: 'common',
        stats: [
            {
                name: 'bleed-chance',
                type: 'LINEAR',
                number: .10,
                reroll: true
            }
        ]
    }, 
    {
        name: 'warbanner',
        type: 'common',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'atg_missile',
        type: 'uncommon',
        stats: [
            {
                name: 'damage-percent',
                type: 'LINEAR',
                number: 3
            }
        ]
    },
    {
        name: 'bandolier',
        type: 'uncommon',
        stats: [
            {
                name: 'ammo-chance',
                type: 'HYPERBOLIC',
                number: 1,
                exponent: .33
            }
        ]
    },
    {
        name: 'bezerkers_pauldron',
        type: 'uncommon',
        stats: [
            {
                name: 'time',
                type: 'LINEAR',
                initial: 2,
                number: 4
            }
        ]
    },
    {
        name: 'chronobauble',
        type: 'uncommon',
        stats: [
            {
                name: 'time',
                type: 'LINEAR',
                number: 2
            }
        ]
    },
    {
        name: 'deathmark',
        type: 'uncommon',
        stats: [
            {
                name: 'time',
                type: 'LINEAR',
                number: 7
            }
        ]
    },
    {
        name: 'fuel_cell',
        type: 'uncommon',
        stats: [
            {
                name: 'extra-equipment-charges',
                type: 'LINEAR',
                number: 1,
                limit: 254
            },
            {
                name: 'equipment-percent',
                type: 'EXPONENTIAL',
                number: .85
            }
        ]
    },
    {
        name: 'ghors_tome',
        type: 'uncommon',
        stats: [
            {
                name: 'treasure-chance',
                type: 'LINEAR',
                reroll: true,
                number: .04,
                limit: 1
            }
        ]
    },
    {
        name: 'harvesters_scythe',
        type: 'uncommon',
        stats: [
            {
                name: 'heal-points',
                type: 'LINEAR',
                initial: 4,
                number: 4
            }
        ]
    },
    {
        name: 'hopoo_feather',
        type: 'uncommon',
        stats: [
            {
                name: 'extra-jumps',
                type: 'LINEAR',
                number: 1
            }
        ]
    },
    {
        name: 'hunters_harpoon',
        type: 'uncommon',
        stats: [
            {
                name: 'time',
                type: 'LINEAR',
                initial: .5,
                number: .5
            }
        ]
    },
    {
        name: 'ignition_tank',
        type: 'uncommon',
        stats: [
            {
                name: 'fire-damage',
                type: 'LINEAR',
                number: 3
            }
        ]
    },
    {
        name: 'infusion',
        type: 'uncommon',
        stats: [
            {
                name: 'maximum-health-increase',
                type: 'LINEAR',
                number: 100
            },
            {
                name: 'health-increase',
                type: 'LINEAR',
                number: 1
            }
        ]
    },
    {
        name: 'kjaros_band',
        type: 'uncommon',
        stats: [
            {
                name: 'extra-total-damage',
                type: 'LINEAR',
                number: 3
            }
        ]
    },
    {
        name: 'leeching_seed',
        type: 'uncommon',
        stats: [
            {
                name: 'heal-events',
                type: 'LINEAR',
                number: 1
            }
        ]
    },
    {
        name: 'old_guillotine',
        type: 'uncommon',
        stats: [
            {
                name: 'health-percent',
                type: 'HYPERBOLIC',
                number: .13
            }
        ]
    },
    {
        name: 'old_war_stealthkit',
        type: 'uncommon',
        stats: [
            {
                name: 'recharge-time',
                type: 'EXPONENTIAL',
                number: .5,
                multiply: 60
            }
        ]
    },
    {
        name: 'predatory_instincts',
        type: 'uncommon',
        stats: [
            {
                name: 'maximum-attakc-speed',
                type: 'LINEAR',
                initial: .12,
                number: .24
            }
        ]
    },
    {
        name: 'razor_wire',
        type: 'uncommon',
        stats: [
            {
                name: 'target-amount',
                type: 'LINEAR',
                initial: 3,
                number: 2
            },
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 15,
                number: 10
            }
        ]
    },
    {
        name: 'red_whip',
        type: 'uncommon',
        stats: [
            {
                name: 'movement-speed',
                type: 'LINEAR',
                number: .3
            }
        ]
    },
    {
        name: 'rose_buckler',
        type: 'uncommon',
        stats: [
            {
                name: 'armor',
                type: 'LINEAR',
                number: 30
            }
        ]
    },
    {
        name: 'runalds_band',
        type: 'uncommon',
        stats: [
            {
                name: 'extra-total-damage',
                type: 'LINEAR',
                number: 2.5
            },
            {
                name: 'slow-time',
                type: 'LINEAR',
                number: 3
            }
        ]
    },
    {
        name: 'shipping_request_form',
        type: 'uncommon',
        stats: [
            {
                name: 'common-weight',
            },
            {
                name: 'uncommon-weight',
            },
            {
                name: 'legendary-weight',
            }
        ]
    },
    {
        name: 'shurikan',
        type: 'uncommon',
        stats: [
            {
                name: 'amount',
                type: 'LINEAR',
                initial: 2,
                number: 1
            },
            {
                name: 'base-damage',
                type: 'LINEAR',
                initial: 3,
                number: 1
            }
        ]
    },
    {
        name: 'squid_polyp',
        type: 'uncommon',
        stats: [
            {
                name: 'attack-speed',
                type: 'LINEAR',
                number: 1
            }
        ]
    },
    {
        name: 'ukulele',
        type: 'uncommon',
        stats: [
            {
                name: 'enemy-amount',
                type: 'LINEAR',
                initial: 1,
                number: 2
            },
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 18,
                number: 2
            }
        ]
    },
    {
        name: 'war_horn',
        type: 'uncommon',
        stats: [
            {
                name: 'time',
                type: 'LINEAR',
                initial: 4,
                number: 4
            }
        ]
    },
    {
        name: 'wax_quail',
        type: 'uncommon',
        stats: [
            {
                name: 'distance',
                type: 'LINEAR',
                number: 10
            }
        ]
    },
    {
        name: 'will_o_the_wisp',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 9.6,
                number: 2.4
            },
            {
                name: 'base-damage',
                type: 'LINEAR',
                initial: 1.04,
                number: 1.56
            }
        ]
    },
    {
        name: '57_leaf_clover',
        type: 'uncommon',
        stats: [
            {
                name: 'rerolls',
                type: 'LINEAR',
                number: 1
            }
        ]
    },
    {
        name: 'aegis',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
    {
        name: 'warbanner',
        type: 'uncommon',
        stats: [
            {
                name: 'radius',
                type: 'LINEAR',
                initial: 8,
                number: 8
            }
        ]
    },
]