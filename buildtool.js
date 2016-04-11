(function(app) {

	app.ItemService = ng.core.Class({
		constructor: function() {
			var items = [
				{
					id: 1,
					name: "blink",
					cost: 2250,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Blink Dagger",
					component: 0
				},
				{
					id: 2,
					name: "blades_of_attack",
					cost: 420,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Blades of Attack"
				},
				{
					id: 3,
					name: "broadsword",
					cost: 1200,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Broadsword"
				},
				{
					id: 4,
					name: "chainmail",
					cost: 550,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Chainmail"
				},
				{
					id: 5,
					name: "claymore",
					cost: 1400,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Claymore"
				},
				{
					id: 6,
					name: "helm_of_iron_will",
					cost: 900,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Helm of Iron Will"
				},
				{
					id: 7,
					name: "javelin",
					cost: 1500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Javelin"
				},
				{
					id: 8,
					name: "mithril_hammer",
					cost: 1600,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Mithril Hammer"
				},
				{
					id: 9,
					name: "platemail",
					cost: 1400,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Platemail"
				},
				{
					id: 10,
					name: "quarterstaff",
					cost: 875,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Quarterstaff"
				},
				{
					id: 11,
					name: "quelling_blade",
					cost: 200,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Quelling Blade"
				},
				{
					id: 237,
					name: "faerie_fire",
					cost: 75,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Faerie Fire",
					component: 0
				},
				{
					id: 12,
					name: "ring_of_protection",
					cost: 175,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Ring of Protection"
				},
				{
					id: 182,
					name: "stout_shield",
					cost: 200,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Stout Shield"
				},
				{
					id: 247,
					name: "moon_shard",
					cost: 4000,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Moon Shard",
					component: 0,
					upgrade: 1
				},
				{
					id: 13,
					name: "gauntlets",
					cost: 150,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Gauntlets of Strength"
				},
				{
					id: 14,
					name: "slippers",
					cost: 150,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Slippers of Agility"
				},
				{
					id: 15,
					name: "mantle",
					cost: 150,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Mantle of Intelligence"
				},
				{
					id: 16,
					name: "branches",
					cost: 50,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Iron Branch"
				},
				{
					id: 17,
					name: "belt_of_strength",
					cost: 450,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Belt of Strength"
				},
				{
					id: 18,
					name: "boots_of_elves",
					cost: 450,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Band of Elvenskin"
				},
				{
					id: 19,
					name: "robe",
					cost: 450,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Robe of the Magi"
				},
				{
					id: 20,
					name: "circlet",
					cost: 165,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Circlet"
				},
				{
					id: 21,
					name: "ogre_axe",
					cost: 1000,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Ogre Club"
				},
				{
					id: 22,
					name: "blade_of_alacrity",
					cost: 1000,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Blade of Alacrity"
				},
				{
					id: 23,
					name: "staff_of_wizardry",
					cost: 1000,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Staff of Wizardry"
				},
				{
					id: 24,
					name: "ultimate_orb",
					cost: 2100,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Ultimate Orb"
				},
				{
					id: 25,
					name: "gloves",
					cost: 500,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Gloves of Haste"
				},
				{
					id: 26,
					name: "lifesteal",
					cost: 900,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Morbid Mask"
				},
				{
					id: 27,
					name: "ring_of_regen",
					cost: 350,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Ring of Regen"
				},
				{
					id: 28,
					name: "sobi_mask",
					cost: 325,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Sage's Mask"
				},
				{
					id: 29,
					name: "boots",
					cost: 400,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Boots of Speed"
				},
				{
					id: 30,
					name: "gem",
					cost: 900,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Gem of True Sight",
					component: 0
				},
				{
					id: 31,
					name: "cloak",
					cost: 550,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Cloak"
				},
				{
					id: 32,
					name: "talisman_of_evasion",
					cost: 1800,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Talisman of Evasion"
				},
				{
					id: 34,
					name: "magic_stick",
					cost: 200,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Magic Stick"
				},
				{
					id: 36,
					name: "magic_wand",
					cost: 465,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Magic Wand",
					component: 0,
					upgrade: 1
				},
				{
					id: 37,
					name: "ghost",
					cost: 1500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Ghost Scepter"
				},
				{
					id: 38,
					name: "clarity",
					cost: 50,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Clarity",
					component: 0
				},
				{
					id: 216,
					name: "enchanted_mango",
					cost: 125,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Enchanted Mango",
					component: 0
				},
				{
					id: 39,
					name: "flask",
					cost: 110,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Healing Salve",
					component: 0
				},
				{
					id: 40,
					name: "dust",
					cost: 180,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Dust of Appearance",
					component: 0
				},
				{
					id: 41,
					name: "bottle",
					cost: 660,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Bottle",
					component: 0
				},
				{
					id: 42,
					name: "ward_observer",
					cost: 75,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Observer Ward",
					component: 0
				},
				{
					id: 43,
					name: "ward_sentry",
					cost: 200,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Sentry Ward",
					component: 0
				},
				{
					id: 44,
					name: "tango",
					cost: 125,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Tango",
					component: 0
				},
				{
					id: 45,
					name: "courier",
					cost: 100,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Animal Courier",
					component: 0
				},
				{
					id: 46,
					name: "tpscroll",
					cost: 75,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Town Portal Scroll",
					component: 0
				},
				{
					id: 48,
					name: "travel_boots",
					cost: 2400,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Boots of Travel",
					upgrade: 1,
					upgrades_to: [220],
					no_stack: [50, 63, 180, 231, 214]
				},
				{
					id: 220,
					name: "travel_boots_2",
					cost: 4400,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Boots of Travel 2",
					component: 0,
					upgrade: 1,
					no_stack: [50, 63, 180, 231, 214]
				},
				{
					id: 50,
					name: "phase_boots",
					cost: 1240,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Phase Boots",
					component: 0,
					upgrade: 1,
					no_stack: [48, 220, 63, 180, 231, 214]
				},
				{
					id: 51,
					name: "demon_edge",
					cost: 2400,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Demon Edge"
				},
				{
					id: 52,
					name: "eagle",
					cost: 3200,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Eaglesong"
				},
				{
					id: 53,
					name: "reaver",
					cost: 3000,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Reaver"
				},
				{
					id: 54,
					name: "relic",
					cost: 3800,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Sacred Relic"
				},
				{
					id: 55,
					name: "hyperstone",
					cost: 2000,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Hyperstone"
				},
				{
					id: 56,
					name: "ring_of_health",
					cost: 850,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Ring of Health"
				},
				{
					id: 57,
					name: "void_stone",
					cost: 850,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Void Stone"
				},
				{
					id: 58,
					name: "mystic_staff",
					cost: 2700,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Mystic Staff"
				},
				{
					id: 59,
					name: "energy_booster",
					cost: 900,
					secret_shop: 1,
					side_shop: 1,
					recipe: 0,
					localized_name: "Energy Booster"
				},
				{
					id: 60,
					name: "point_booster",
					cost: 1200,
					secret_shop: 1,
					side_shop: 0,
					recipe: 0,
					localized_name: "Point Booster"
				},
				{
					id: 61,
					name: "vitality_booster",
					cost: 1100,
					secret_shop: 1,
					side_shop: 1,
					recipe: 0,
					localized_name: "Vitality Booster"
				},
				{
					id: 63,
					name: "power_treads",
					cost: 1350,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Power Treads",
					component: 0,
					upgrade: 1,
					no_stack: [48, 220, 50, 180, 231, 214]
				},
				{
					id: 65,
					name: "hand_of_midas",
					cost: 2050,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Hand of Midas",
					component: 0,
					upgrade: 1
				},
				{
					id: 67,
					name: "oblivion_staff",
					cost: 1650,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Oblivion Staff",
					upgrade: 1,
					upgrades_to: [98]
				},
				{
					id: 69,
					name: "pers",
					cost: 1700,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Perseverance",
					upgrade: 1,
					upgrades_to: [110, 123, 226, 145]
				},
				{
					id: 71,
					name: "poor_mans_shield",
					cost: 500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Poor Man's Shield",
					component: 0,
					upgrade: 1
				},
				{
					id: 73,
					name: "bracer",
					cost: 525,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Bracer",
					upgrade: 1,
					upgrades_to: [185]
				},
				{
					id: 75,
					name: "wraith_band",
					cost: 485,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Wraith Band",
					upgrade: 1,
					upgrades_to: [212]
				},
				{
					id: 77,
					name: "null_talisman",
					cost: 470,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Null Talisman",
					upgrade: 1,
					upgrades_to: [104, 190]
				},
				{
					id: 79,
					name: "mekansm",
					cost: 2300,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Mekansm",
					upgrade: 1,
					upgrades_to: [231]
				},
				{
					id: 81,
					name: "vladmir",
					cost: 2300,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Vladmir's Offering",
					component: 0,
					upgrade: 1
				},
				{
					id: 86,
					name: "buckler",
					cost: 800,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Buckler",
					upgrade: 1,
					upgrades_to: [242, 79]
				},
				{
					id: 88,
					name: "ring_of_basilius",
					cost: 500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Ring of Basilius",
					upgrade: 1,
					upgrades_to: [212, 81]
				},
				{
					id: 90,
					name: "pipe",
					cost: 3500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Pipe of Insight",
					component: 0,
					upgrade: 1
				},
				{
					id: 92,
					name: "urn_of_shadows",
					cost: 875,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Urn of Shadows",
					component: 0,
					upgrade: 1
				},
				{
					id: 94,
					name: "headdress",
					cost: 600,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Headdress",
					upgrade: 1,
					upgrades_to: [79, 81, 90]
				},
				{
					id: 96,
					name: "sheepstick",
					cost: 5650,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Scythe of Vyse",
					component: 0,
					upgrade: 1
				},
				{
					id: 98,
					name: "orchid",
					cost: 4075,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Orchid Malevolence",
					component: 0,
					upgrade: 1
				},
				{
					id: 100,
					name: "cyclone",
					cost: 2825,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Eul's Scepter of Divinity",
					component: 0,
					upgrade: 1
				},
				{
					id: 232,
					name: "aether_lens",
					cost: 2300,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Aether Lens",
					component: 0,
					upgrade: 1
				},
				{
					id: 102,
					name: "force_staff",
					cost: 2250,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Force Staff",
					component: 0,
					upgrade: 1
				},
				{
					id: 104,
					name: "dagon",
					cost: 2720,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Dagon",
					upgrade: 1,
					upgrades_to: [201]
				},
				{
					id: 201,
					name: "dagon_2",
					cost: 3970,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Dagon 2",
					upgrade: 1,
					upgrades_to: [202]
				},
				{
					id: 202,
					name: "dagon_3",
					cost: 5220,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Dagon 3",
					upgrade: 1,
					upgrades_to: [203]
				},
				{
					id: 203,
					name: "dagon_4",
					cost: 6470,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Dagon 4",
					upgrade: 1,
					upgrades_to: [204]
				},
				{
					id: 204,
					name: "dagon_5",
					cost: 7720,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Dagon 5",
					component: 0,
					upgrade: 1
				},
				{
					id: 106,
					name: "necronomicon",
					cost: 2650,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Necronomicon",
					upgrade: 1,
					upgrades_to: [193]
				},
				{
					id: 193,
					name: "necronomicon_2",
					cost: 3850,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Necronomicon 2",
					upgrade: 1,
					upgrades_to: [194]
				},
				{
					id: 194,
					name: "necronomicon_3",
					cost: 5050,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Necronomicon 3",
					component: 0,
					upgrade: 1
				},
				{
					id: 108,
					name: "ultimate_scepter",
					cost: 4200,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Aghanim's Scepter",
					component: 0,
					upgrade: 1
				},
				{
					id: 110,
					name: "refresher",
					cost: 5200,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Refresher Orb",
					component: 0,
					upgrade: 1
				},
				{
					id: 112,
					name: "assault",
					cost: 5250,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Assault Cuirass",
					component: 0,
					upgrade: 1
				},
				{
					id: 114,
					name: "heart",
					cost: 5500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Heart of Tarrasque",
					component: 0,
					upgrade: 1
				},
				{
					id: 116,
					name: "black_king_bar",
					cost: 3975,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Black King Bar",
					component: 0,
					upgrade: 1
				},
				{
					id: 119,
					name: "shivas_guard",
					cost: 4700,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Shiva's Guard",
					component: 0,
					upgrade: 1
				},
				{
					id: 121,
					name: "bloodstone",
					cost: 4900,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Bloodstone",
					component: 0,
					upgrade: 1
				},
				{
					id: 123,
					name: "sphere",
					cost: 5125,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Linken's Sphere",
					component: 0,
					upgrade: 1
				},
				{
					id: 226,
					name: "lotus_orb",
					cost: 4000,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Lotus Orb",
					component: 0,
					upgrade: 1
				},
				{
					id: 125,
					name: "vanguard",
					cost: 2150,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Vanguard",
					upgrade: 1,
					upgrades_to: [242]
				},
				{
					id: 242,
					name: "crimson_guard",
					cost: 3550,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Crimson Guard",
					component: 0,
					upgrade: 1
				},
				{
					id: 127,
					name: "blade_mail",
					cost: 2200,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Blade Mail",
					component: 0,
					upgrade: 1
				},
				{
					id: 129,
					name: "soul_booster",
					cost: 3200,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Soul Booster",
					upgrade: 1,
					upgrades_to: [235, 121]
				},
				{
					id: 131,
					name: "hood_of_defiance",
					cost: 2100,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Hood of Defiance",
					upgrade: 1,
					upgrades_to: [90]
				},
				{
					id: 133,
					name: "rapier",
					cost: 6200,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Divine Rapier",
					component: 0,
					upgrade: 1
				},
				{
					id: 135,
					name: "monkey_king_bar",
					cost: 5400,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Monkey King Bar",
					component: 0,
					upgrade: 1
				},
				{
					id: 137,
					name: "radiance",
					cost: 5150,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Radiance",
					component: 0,
					upgrade: 1
				},
				{
					id: 139,
					name: "butterfly",
					cost: 5875,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Butterfly",
					component: 0,
					upgrade: 1
				},
				{
					id: 141,
					name: "greater_crit",
					cost: 5520,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Daedalus",
					component: 0,
					upgrade: 1
				},
				{
					id: 143,
					name: "basher",
					cost: 2950,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Skull Basher",
					upgrade: 1
				},
				{
					id: 145,
					name: "bfury",
					cost: 4500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Battle Fury",
					component: 0,
					upgrade: 1
				},
				{
					id: 147,
					name: "manta",
					cost: 4950,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Manta Style",
					component: 0,
					upgrade: 1
				},
				{
					id: 149,
					name: "lesser_crit",
					cost: 2120,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Crystalys",
					upgrade: 1,
					upgrades_to: [141]
				},
				{
					id: 236,
					name: "dragon_lance",
					cost: 1875,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Dragon Lance",
					component: 0,
					upgrade: 1
				},
				{
					id: 151,
					name: "armlet",
					cost: 2320,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Armlet of Mordiggian",
					component: 0,
					upgrade: 1
				},
				{
					id: 152,
					name: "invis_sword",
					cost: 2800,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Shadow Blade",
					upgrade: 1
				},
				{
					id: 249,
					name: "silver_edge",
					cost: 5450,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Silver Edge",
					component: 0,
					upgrade: 1
				},
				{
					id: 154,
					name: "sange_and_yasha",
					cost: 4100,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Sange and Yasha",
					component: 0,
					upgrade: 1
				},
				{
					id: 156,
					name: "satanic",
					cost: 5900,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Satanic",
					component: 0,
					upgrade: 1,
					no_stack: [168, 172]
				},
				{
					id: 158,
					name: "mjollnir",
					cost: 5700,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Mjollnir",
					component: 0,
					upgrade: 1
				},
				{
					id: 160,
					name: "skadi",
					cost: 5675,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Eye of Skadi",
					component: 0,
					upgrade: 1,
					no_stack: [168]
				},
				{
					id: 162,
					name: "sange",
					cost: 2050,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Sange",
					upgrade: 1,
					upgrades_to: [210, 249, 154]
				},
				{
					id: 164,
					name: "helm_of_the_dominator",
					cost: 1800,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Helm of the Dominator",
					upgrade: 1,
					upgrades_to: [156],
					no_stack: [168, 172]
				},
				{
					id: 166,
					name: "maelstrom",
					cost: 2800,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Maelstrom",
					upgrade: 1
				},
				{
					id: 168,
					name: "desolator",
					cost: 3500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Desolator",
					component: 0,
					upgrade: 1,
					no_stack: [164, 172, 160, 156]
				},
				{
					id: 170,
					name: "yasha",
					cost: 2050,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Yasha",
					upgrade: 1,
					upgrades_to: [154, 147]
				},
				{
					id: 172,
					name: "mask_of_madness",
					cost: 1800,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Mask of Madness",
					component: 0,
					upgrade: 1,
					no_stack: [168, 164, 156]
				},
				{
					id: 174,
					name: "diffusal_blade",
					cost: 3150,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Diffusal Blade",
					upgrade: 1,
					upgrades_to: [196]
				},
				{
					id: 196,
					name: "diffusal_blade_2",
					cost: 3850,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Diffusal Blade 2",
					component: 0,
					upgrade: 1
				},
				{
					id: 176,
					name: "ethereal_blade",
					cost: 4700,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Ethereal Blade",
					component: 0,
					upgrade: 1
				},
				{
					id: 178,
					name: "soul_ring",
					cost: 800,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Soul Ring",
					upgrade: 1,
					upgrades_to: [121]
				},
				{
					id: 180,
					name: "arcane_boots",
					cost: 1300,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Arcane Boots",
					upgrade: 1,
					upgrades_to: [231],
					no_stack: [48, 220, 50, 63, 214]
				},
				{
					id: 235,
					name: "octarine_core",
					cost: 5900,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Octarine Core",
					component: 0,
					upgrade: 1
				},
				{
					id: 181,
					name: "orb_of_venom",
					cost: 275,
					secret_shop: 0,
					side_shop: 1,
					recipe: 0,
					localized_name: "Orb of Venom"
				},
				{
					id: 185,
					name: "ancient_janggo",
					cost: 1850,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Drum of Endurance",
					component: 0,
					upgrade: 1
				},
				{
					id: 187,
					name: "medallion_of_courage",
					cost: 1200,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Medallion of Courage",
					upgrade: 1,
					upgrades_to: [229]
				},
				{
					id: 229,
					name: "solar_crest",
					cost: 3000,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Solar Crest",
					component: 0,
					upgrade: 1
				},
				{
					id: 188,
					name: "smoke_of_deceit",
					cost: 50,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Smoke of Deceit",
					component: 0
				},
				{
					id: 190,
					name: "veil_of_discord",
					cost: 2270,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Veil of Discord",
					component: 0,
					upgrade: 1
				},
				{
					id: 231,
					name: "guardian_greaves",
					cost: 5250,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Guardian Greaves",
					component: 0,
					upgrade: 1,
					no_stack: [48, 220, 50, 63, 214]
				},
				{
					id: 206,
					name: "rod_of_atos",
					cost: 3100,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Rod of Atos",
					component: 0,
					upgrade: 1
				},
				{
					id: 239,
					name: "iron_talon",
					cost: 500,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Iron Talon",
					component: 0,
					upgrade: 1
				},
				{
					id: 208,
					name: "abyssal_blade",
					cost: 6750,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Abyssal Blade",
					component: 0,
					upgrade: 1
				},
				{
					id: 210,
					name: "heavens_halberd",
					cost: 3850,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Heaven's Halberd",
					component: 0,
					upgrade: 1
				},
				{
					id: 212,
					name: "ring_of_aquila",
					cost: 985,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Ring of Aquila",
					component: 0,
					upgrade: 1
				},
				{
					id: 214,
					name: "tranquil_boots",
					cost: 925,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Tranquil Boots",
					component: 0,
					upgrade: 1,
					no_stack: [48, 220, 50, 63, 180, 231]
				},
				{
					id: 215,
					name: "shadow_amulet",
					cost: 1400,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Shadow Amulet"
				},
				{
					id: 254,
					name: "glimmer_cape",
					cost: 1950,
					secret_shop: 0,
					side_shop: 0,
					recipe: 0,
					localized_name: "Glimmer Cape",
					component: 0,
					upgrade: 1
				}
			];
			this.items = [];
			for (var i = 0; i < items.length; i++) {
				items[i].image = 'http://cdn.dota2.com/apps/dota2/images/items/' + items[i].name + '_lg.png';
				if (!items[i].component) {
					items[i].component = 1;
				}
				if (!items[i].upgrade) {
					items[i].upgrade = 0;
				}
				if (!items[i].upgrades_to) {
					items[i].upgrades_to = [];
				}
				if (!items[i].no_stack) {
					items[i].no_stack = [];
				}
				this.items.push(items[i]);
			}
			this.items.sort(function(a, b) {
				return a.cost - b.cost;
			});
		},
		getItems: function() {
			return this.items;
		}
	});

	app.HeroService = ng.core.Class({
		constructor: [ng.http.Http, app.ItemService, function(http, itemService) {
			this.http = http;
			var heroes = [
				{
					"name": "antimage",
					"id": 1,
					"localized_name": "Anti-Mage"
				},
				{
					"name": "axe",
					"id": 2,
					"localized_name": "Axe"
				},
				{
					"name": "bane",
					"id": 3,
					"localized_name": "Bane"
				},
				{
					"name": "bloodseeker",
					"id": 4,
					"localized_name": "Bloodseeker"
				},
				{
					"name": "crystal_maiden",
					"id": 5,
					"localized_name": "Crystal Maiden"
				},
				{
					"name": "drow_ranger",
					"id": 6,
					"localized_name": "Drow Ranger"
				},
				{
					"name": "earthshaker",
					"id": 7,
					"localized_name": "Earthshaker"
				},
				{
					"name": "juggernaut",
					"id": 8,
					"localized_name": "Juggernaut"
				},
				{
					"name": "mirana",
					"id": 9,
					"localized_name": "Mirana"
				},
				{
					"name": "nevermore",
					"id": 11,
					"localized_name": "Shadow Fiend"
				},
				{
					"name": "morphling",
					"id": 10,
					"localized_name": "Morphling"
				},
				{
					"name": "phantom_lancer",
					"id": 12,
					"localized_name": "Phantom Lancer"
				},
				{
					"name": "puck",
					"id": 13,
					"localized_name": "Puck"
				},
				{
					"name": "pudge",
					"id": 14,
					"localized_name": "Pudge"
				},
				{
					"name": "razor",
					"id": 15,
					"localized_name": "Razor"
				},
				{
					"name": "sand_king",
					"id": 16,
					"localized_name": "Sand King"
				},
				{
					"name": "storm_spirit",
					"id": 17,
					"localized_name": "Storm Spirit"
				},
				{
					"name": "sven",
					"id": 18,
					"localized_name": "Sven"
				},
				{
					"name": "tiny",
					"id": 19,
					"localized_name": "Tiny"
				},
				{
					"name": "vengefulspirit",
					"id": 20,
					"localized_name": "Vengeful Spirit"
				},
				{
					"name": "windrunner",
					"id": 21,
					"localized_name": "Windranger"
				},
				{
					"name": "zuus",
					"id": 22,
					"localized_name": "Zeus"
				},
				{
					"name": "kunkka",
					"id": 23,
					"localized_name": "Kunkka"
				},
				{
					"name": "lina",
					"id": 25,
					"localized_name": "Lina"
				},
				{
					"name": "lich",
					"id": 31,
					"localized_name": "Lich"
				},
				{
					"name": "lion",
					"id": 26,
					"localized_name": "Lion"
				},
				{
					"name": "shadow_shaman",
					"id": 27,
					"localized_name": "Shadow Shaman"
				},
				{
					"name": "slardar",
					"id": 28,
					"localized_name": "Slardar"
				},
				{
					"name": "tidehunter",
					"id": 29,
					"localized_name": "Tidehunter"
				},
				{
					"name": "witch_doctor",
					"id": 30,
					"localized_name": "Witch Doctor"
				},
				{
					"name": "riki",
					"id": 32,
					"localized_name": "Riki"
				},
				{
					"name": "enigma",
					"id": 33,
					"localized_name": "Enigma"
				},
				{
					"name": "tinker",
					"id": 34,
					"localized_name": "Tinker"
				},
				{
					"name": "sniper",
					"id": 35,
					"localized_name": "Sniper"
				},
				{
					"name": "necrolyte",
					"id": 36,
					"localized_name": "Necrophos"
				},
				{
					"name": "warlock",
					"id": 37,
					"localized_name": "Warlock"
				},
				{
					"name": "beastmaster",
					"id": 38,
					"localized_name": "Beastmaster"
				},
				{
					"name": "queenofpain",
					"id": 39,
					"localized_name": "Queen of Pain"
				},
				{
					"name": "venomancer",
					"id": 40,
					"localized_name": "Venomancer"
				},
				{
					"name": "faceless_void",
					"id": 41,
					"localized_name": "Faceless Void"
				},
				{
					"name": "skeleton_king",
					"id": 42,
					"localized_name": "Wraith King"
				},
				{
					"name": "death_prophet",
					"id": 43,
					"localized_name": "Death Prophet"
				},
				{
					"name": "phantom_assassin",
					"id": 44,
					"localized_name": "Phantom Assassin"
				},
				{
					"name": "pugna",
					"id": 45,
					"localized_name": "Pugna"
				},
				{
					"name": "templar_assassin",
					"id": 46,
					"localized_name": "Templar Assassin"
				},
				{
					"name": "viper",
					"id": 47,
					"localized_name": "Viper"
				},
				{
					"name": "luna",
					"id": 48,
					"localized_name": "Luna"
				},
				{
					"name": "dragon_knight",
					"id": 49,
					"localized_name": "Dragon Knight"
				},
				{
					"name": "dazzle",
					"id": 50,
					"localized_name": "Dazzle"
				},
				{
					"name": "rattletrap",
					"id": 51,
					"localized_name": "Clockwerk"
				},
				{
					"name": "leshrac",
					"id": 52,
					"localized_name": "Leshrac"
				},
				{
					"name": "furion",
					"id": 53,
					"localized_name": "Nature's Prophet"
				},
				{
					"name": "life_stealer",
					"id": 54,
					"localized_name": "Lifestealer"
				},
				{
					"name": "dark_seer",
					"id": 55,
					"localized_name": "Dark Seer"
				},
				{
					"name": "clinkz",
					"id": 56,
					"localized_name": "Clinkz"
				},
				{
					"name": "omniknight",
					"id": 57,
					"localized_name": "Omniknight"
				},
				{
					"name": "enchantress",
					"id": 58,
					"localized_name": "Enchantress"
				},
				{
					"name": "huskar",
					"id": 59,
					"localized_name": "Huskar"
				},
				{
					"name": "night_stalker",
					"id": 60,
					"localized_name": "Night Stalker"
				},
				{
					"name": "broodmother",
					"id": 61,
					"localized_name": "Broodmother"
				},
				{
					"name": "bounty_hunter",
					"id": 62,
					"localized_name": "Bounty Hunter"
				},
				{
					"name": "weaver",
					"id": 63,
					"localized_name": "Weaver"
				},
				{
					"name": "jakiro",
					"id": 64,
					"localized_name": "Jakiro"
				},
				{
					"name": "batrider",
					"id": 65,
					"localized_name": "Batrider"
				},
				{
					"name": "chen",
					"id": 66,
					"localized_name": "Chen"
				},
				{
					"name": "spectre",
					"id": 67,
					"localized_name": "Spectre"
				},
				{
					"name": "doom_bringer",
					"id": 69,
					"localized_name": "Doom"
				},
				{
					"name": "ancient_apparition",
					"id": 68,
					"localized_name": "Ancient Apparition"
				},
				{
					"name": "ursa",
					"id": 70,
					"localized_name": "Ursa"
				},
				{
					"name": "spirit_breaker",
					"id": 71,
					"localized_name": "Spirit Breaker"
				},
				{
					"name": "gyrocopter",
					"id": 72,
					"localized_name": "Gyrocopter"
				},
				{
					"name": "alchemist",
					"id": 73,
					"localized_name": "Alchemist"
				},
				{
					"name": "invoker",
					"id": 74,
					"localized_name": "Invoker"
				},
				{
					"name": "silencer",
					"id": 75,
					"localized_name": "Silencer"
				},
				{
					"name": "obsidian_destroyer",
					"id": 76,
					"localized_name": "Outworld Devourer"
				},
				{
					"name": "lycan",
					"id": 77,
					"localized_name": "Lycan"
				},
				{
					"name": "brewmaster",
					"id": 78,
					"localized_name": "Brewmaster"
				},
				{
					"name": "shadow_demon",
					"id": 79,
					"localized_name": "Shadow Demon"
				},
				{
					"name": "lone_druid",
					"id": 80,
					"localized_name": "Lone Druid"
				},
				{
					"name": "chaos_knight",
					"id": 81,
					"localized_name": "Chaos Knight"
				},
				{
					"name": "meepo",
					"id": 82,
					"localized_name": "Meepo"
				},
				{
					"name": "treant",
					"id": 83,
					"localized_name": "Treant Protector"
				},
				{
					"name": "ogre_magi",
					"id": 84,
					"localized_name": "Ogre Magi"
				},
				{
					"name": "undying",
					"id": 85,
					"localized_name": "Undying"
				},
				{
					"name": "rubick",
					"id": 86,
					"localized_name": "Rubick"
				},
				{
					"name": "disruptor",
					"id": 87,
					"localized_name": "Disruptor"
				},
				{
					"name": "nyx_assassin",
					"id": 88,
					"localized_name": "Nyx Assassin"
				},
				{
					"name": "naga_siren",
					"id": 89,
					"localized_name": "Naga Siren"
				},
				{
					"name": "keeper_of_the_light",
					"id": 90,
					"localized_name": "Keeper of the Light"
				},
				{
					"name": "wisp",
					"id": 91,
					"localized_name": "Io"
				},
				{
					"name": "visage",
					"id": 92,
					"localized_name": "Visage"
				},
				{
					"name": "slark",
					"id": 93,
					"localized_name": "Slark"
				},
				{
					"name": "medusa",
					"id": 94,
					"localized_name": "Medusa"
				},
				{
					"name": "troll_warlord",
					"id": 95,
					"localized_name": "Troll Warlord"
				},
				{
					"name": "centaur",
					"id": 96,
					"localized_name": "Centaur Warrunner"
				},
				{
					"name": "magnataur",
					"id": 97,
					"localized_name": "Magnus"
				},
				{
					"name": "shredder",
					"id": 98,
					"localized_name": "Timbersaw"
				},
				{
					"name": "bristleback",
					"id": 99,
					"localized_name": "Bristleback"
				},
				{
					"name": "tusk",
					"id": 100,
					"localized_name": "Tusk"
				},
				{
					"name": "skywrath_mage",
					"id": 101,
					"localized_name": "Skywrath Mage"
				},
				{
					"name": "abaddon",
					"id": 102,
					"localized_name": "Abaddon"
				},
				{
					"name": "elder_titan",
					"id": 103,
					"localized_name": "Elder Titan"
				},
				{
					"name": "legion_commander",
					"id": 104,
					"localized_name": "Legion Commander"
				},
				{
					"name": "ember_spirit",
					"id": 106,
					"localized_name": "Ember Spirit"
				},
				{
					"name": "earth_spirit",
					"id": 107,
					"localized_name": "Earth Spirit"
				},
				{
					"name": "terrorblade",
					"id": 109,
					"localized_name": "Terrorblade"
				},
				{
					"name": "phoenix",
					"id": 110,
					"localized_name": "Phoenix"
				},
				{
					"name": "oracle",
					"id": 111,
					"localized_name": "Oracle"
				},
				{
					"name": "techies",
					"id": 105,
					"localized_name": "Techies"
				},
				{
					"name": "winter_wyvern",
					"id": 112,
					"localized_name": "Winter Wyvern"
				},
				{
					"name": "arc_warden",
					"id": 113,
					"localized_name": "Arc Warden"
				}
			]
			this.heroes = [];
			for (i = 0; i < heroes.length; i++) {
				heroes[i].image = 'http://cdn.dota2.com/apps/dota2/images/heroes/' + heroes[i].name + '_sb.png';
				this.heroes.push(heroes[i]);
			}
			this.heroes.sort(function(a, b) {
				if (a.localized_name < b.localized_name) {
					return -1;
				}
				else if (a.localized_name > b.localized_name) {
					return 1;
				}
			});
			this.getData().subscribe(function(data) {
				var items = itemService.getItems();
				for (var i = 0; i < this.heroes.length; i++) {
					var hero = _.find(data, {'name': this.heroes[i].name});
					this.heroes[i].zh = hero.zh;
					this.heroes[i].winrate_all = hero.winrate_all;
					this.heroes[i].winrate_high = hero.winrate_high;
					this.heroes[i].winrate_pro = hero.winrate_pro;
					this.heroes[i].matches_all = hero.matches_all;
					this.heroes[i].matches_high = hero.matches_high;
					this.heroes[i].matches_pro = hero.matches_pro;
					this.heroes[i].gpm_all = hero.gpm_all;
					this.heroes[i].gpm_high = hero.gpm_high;
					this.heroes[i].gpm_pro = hero.gpm_pro;
					this.heroes[i].xpm_all = hero.xpm_all;
					this.heroes[i].xpm_high = hero.xpm_high;
					this.heroes[i].xpm_pro = hero.xpm_pro;
					this.heroes[i].items_all = hero.items_all;
					this.heroes[i].items_high = hero.items_high;
					this.heroes[i].items_pro = hero.items_pro;
					for (var j = this.heroes[i].items_all.length; j--;) {
						var currentItem = this.heroes[i].items_all[j];
						var item = _.find(items, {'name': currentItem.name});
						if (item) {
							currentItem.id = item.id;
							currentItem.localized_name = item.localized_name;
							currentItem.image = item.image;
							currentItem.cost = item.cost;
							currentItem.secret_shop = item.secret_shop;
							currentItem.side_shop = item.side_shop;
							currentItem.upgrade = item.upgrade;
							currentItem.component = item.component;
							currentItem.upgrades_to = item.upgrades_to;
							currentItem.no_stack = item.no_stack;
						}
						else {
							this.heroes[i].items_all.splice(j, 1);
							continue;
						}
						if (currentItem.matches / this.heroes[i].matches_all < .01) {
							this.heroes[i].items_all.splice(j, 1);
							continue;
						}
						if ((currentItem.winrate < this.heroes[i].winrate_all) && (currentItem.winrate < 50) && (currentItem.winrate < this.heroes[i].winrate_all - 5)) {
							this.heroes[i].items_all.splice(j, 1);
							continue;
						}
					}
					for (var j = this.heroes[i].items_high.length; j-- ;) {
						var currentItem = this.heroes[i].items_high[j];
						var item = _.find(items, {'name': currentItem.name});
						if (item) {
							currentItem.id = item.id;
							currentItem.localized_name = item.localized_name;
							currentItem.image = item.image;
							currentItem.cost = item.cost;
							currentItem.secret_shop = item.secret_shop;
							currentItem.side_shop = item.side_shop;
							currentItem.upgrade = item.upgrade;
							currentItem.component = item.component;
							currentItem.upgrades_to = item.upgrades_to;
							currentItem.no_stack = item.no_stack;
						}
						else {
							this.heroes[i].items_high.splice(j, 1);
							continue;
						}
						if (currentItem.matches / this.heroes[i].matches_high < .01) {
							this.heroes[i].items_high.splice(j, 1);
							continue;
						}
						if ((currentItem.winrate < this.heroes[i].winrate_high) && (currentItem.winrate < 50) && (currentItem.winrate < this.heroes[i].winrate_high - 5)) {
							this.heroes[i].items_high.splice(j, 1);
							continue;
						}
					}
					for (var j = this.heroes[i].items_pro.length; j--;) {
						var currentItem = this.heroes[i].items_pro[j];
						var item = _.find(items, {'name': currentItem.name});
						if (item) {
							currentItem.id = item.id;
							currentItem.localized_name = item.localized_name;
							currentItem.image = item.image;
							currentItem.cost = item.cost;
							currentItem.secret_shop = item.secret_shop;
							currentItem.side_shop = item.side_shop;
							currentItem.upgrade = item.upgrade;
							currentItem.component = item.component;
							currentItem.upgrades_to = item.upgrades_to;
							currentItem.no_stack = item.no_stack;
						}
						else {
							this.heroes[i].items_pro.splice(j, 1);
							continue;
						}
						if (currentItem.matches / this.heroes[i].matches_pro < .01) {
							this.heroes[i].items_pro.splice(j, 1);
							continue;
						}
						if ((currentItem.winrate < this.heroes[i].winrate_pro) && (currentItem.winrate < 50) && (currentItem.winrate < this.heroes[i].winrate_pro - 5)) {
							this.heroes[i].items_pro.splice(j, 1);
							continue;
						}
					}
					this.heroes[i].items_all.sort(function(a, b) {
						return b.matches - a.matches;
					});
					this.heroes[i].items_high.sort(function(a, b) {
						return b.matches - a.matches;
					});
					this.heroes[i].items_pro.sort(function(a, b) {
						return b.matches - a.matches;
					});
				}
			}.bind(this));
		}],
		getHeroes: function() {
			return this.heroes;
		},
		getData: function() {
			return this.http.get('data.json').map(function(data) {
				return data.json();
			});
		}
	});

	app.AppComponent = ng.core.Component({
		selector: 'bt-app',
		template: '<br>' +
			'<div>' +
			'	<img *ngFor="#hero of heroes" src="{{hero.image}}" class="img" width="{{imageWidth}}" (click)="select(hero)" title="Click to show builds for {{hero.localized_name}}">' +
			'</div>' +
			'<br><div *ngIf="selectedHero">' +
			'	<div>' +
			'		<div>' +
			'			<h2 style="text-align: center;">{{selectedHero.localized_name}}</h2>' +
			'			<img src="{{selectedImage}}" class="center-block img img-rounded" title="{{selectedHero.localized_name}}">' +
			'		</div>' +
			'	</div>' +
			'	<br>' +
			'	<div class="row">' +
			'		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-1">' +
			'			<div class="clearfix">' +
			'				<h3 class="pull-left">All skill</h3>' +
			'				<div class="pull-right">' +
			'					<span>Winrate: {{selectedHero.winrate_all | number:"1.0-0"}}%</span><br>' +
			'					<span>Level: {{getLevel_all()}}</span>' +
			'				</div>' +
			'			</div>' +
			'			<div>' +
			'				<div>Build:</div>' +
			'				<img *ngFor="#item of items_all" src="{{item.image}}" class="img" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_all * 100).toFixed(0)}}%">' +
			'				<br><br><div *ngIf="items_all_early.length > 0">Early options:</div>' +
			'				<img *ngFor="#item of items_all_early" src="{{item.image}}" class="img" width="{{imageWidth}}" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_all * 100).toFixed(0)}}%">' +
			'				<br><br><div>Late options:</div>' +
			'				<img *ngFor="#item of items_all_late" src="{{item.image}}" class="img" width="{{imageWidth}}" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_all * 100).toFixed(0)}}%">' +
			'			</div>' +
			'		</div>' +
			'		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-1">' +
			'			<div class="clearfix">' +
			'				<h3 class="pull-left">High skill</h3>' +
			'				<div class="pull-right">' +
			'					<span>Winrate: {{selectedHero.winrate_high | number:"1.0-0"}}%</span><br>' +
			'					<span>Level: {{getLevel_high()}}</span>' +
			'				</div>' +
			'			</div>' +
			'			<div>' +
			'				<div>Build:</div>' +
			'				<img *ngFor="#item of items_high" src="{{item.image}}" class="img" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_high * 100).toFixed(0)}}%">' +
			'				<br><br><div *ngIf="items_high_early.length > 0">Early options:</div>' +
			'				<img *ngFor="#item of items_high_early" src="{{item.image}}" class="img" width="{{imageWidth}}" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_high * 100).toFixed(0)}}%">' +
			'				<br><br><div>Late options:</div>' +
			'				<img *ngFor="#item of items_high_late" src="{{item.image}}" class="img" width="{{imageWidth}}" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_high * 100).toFixed(0)}}%">' +
			'			</div>' +
			'		</div>' +
			'		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-1">' +
			'			<div class="clearfix">' +
			'				<h3 class="pull-left">Pro skill</h3>' +
			'				<div class="pull-right">' +
			'					<span>Winrate: {{selectedHero.winrate_pro | number:"1.0-0"}}%</span><br>' +
			'					<span>Level: {{getLevel_pro()}}</span>' +
			'				</div>' +
			'			</div>' +
			'			<div>' +
			'				<div>Build:</div>' +
			'				<img *ngFor="#item of items_pro" src="{{item.image}}" class="img" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_pro * 100).toFixed(0)}}%">' +
			'				<br><br><div *ngIf="items_pro_early.length > 0">Early options:</div>' +
			'				<img *ngFor="#item of items_pro_early" src="{{item.image}}" class="img" width="{{imageWidth}}" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_pro * 100).toFixed(0)}}%">' +
			'				<br><br><div>Late options:</div>' +
			'				<img *ngFor="#item of items_pro_late" src="{{item.image}}" class="img" width="{{imageWidth}}" title="{{item.localized_name}} ({{item.cost}}) | WR: {{item.winrate.toFixed(0)}}% | BR: {{(item.matches / selectedHero.matches_pro * 100).toFixed(0)}}%">' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'</div>'
	})
	.Class({
		constructor: [app.HeroService, function(heroService) {
			this.heroes = heroService.getHeroes();
			this.expLevels = [0, 200, 500, 900, 1400, 2000, 2600, 3200, 4400, 5400, 6000, 8200, 9000, 10400, 11900, 13500, 15200, 17000, 18900, 20900, 23000, 25200, 27500, 29900, 32400];
			this.selectedHero = null;
			this.selectedImage = null;
			this.endGame = 35; //minutes
			this.imageWidth = (window.innerWidth/20 < 59) ? window.innerWidth/20 : 59;
			if (this.innerWidth < 40) {
				this.imageWidth = 40;
			}
			this.items_all = [];
			this.items_all_early = [];
			this.items_all_late = [];
			this.items_high = [];
			this.items_high_early = [];
			this.items_high_late = [];
			this.items_pro = [];
			this.items_pro_early = [];
			this.items_pro_late = [];
		}],
		tooltip: function(item) {
			var tooltip = '';
			if (item.side_shop === 1 && item.secret_shop === 1) {
				tooltip += 'Secret shop item also available at side shop';
			}
			else if (item.side_shop === 1) {
				tooltip += 'Available at side shop';
			}
			else if (item.secret_shop === 1) {
				tooltip += 'Secret shop item';
			}
			return tooltip;
		},
		select: function(hero) {
			this.selectedHero = hero;
			this.selectedImage = this.selectedHero.image.replace(/_sb/, '_lg');
			this.items_all = [];
			this.items_all_early = [];
			this.items_all_late = [];
			this.items_high = [];
			this.items_high_early = [];
			this.items_high_late = [];
			this.items_pro = [];
			this.items_pro_early = [];
			this.items_pro_late = [];
			var budget = this.selectedHero.gpm_all * this.endGame;
			var numberSlots = 6;
			for (var i = 0; i < this.selectedHero.items_all.length; i++) {
				var item = this.selectedHero.items_all[i];
				if (budget < item.cost && item.cost > 2000) {
					if (this.items_all_late.length < 12) {
						this.items_all_late.push(item);
					}
					continue;
				}
				if (item.winrate < this.selectedHero.winrate_all && item.cost < 2000) {
					if (this.items_all_early.length < 12) {
						this.items_all_early.push(item);
					}
					continue;
				}
				if (item.winrate > this.selectedHero.winrate_all) {
					if (budget > item.cost && numberSlots) {
						var found = false;
						for (var j = 0; j < this.items_all.length; j++) {
							if (this.items_all[j].upgrades_to.indexOf(item.id) > -1 || item.upgrades_to.indexOf(this.items_all[j].id) > -1) {
								if (this.items_all[j].cost > item.cost) {
									this.items_all_early.push(item);
								}
								else {
									budget += this.items_all[j].cost;
									budget -= this.item;
									this.items_all[j] = item;
								}
								found = true;
							}
							else if (this.items_all[j].no_stack.indexOf(item.id) > -1 || item.no_stack.indexOf(this.items_all[j].id) > -1) {
								if (item.cost < 2000) {
									this.items_all_early.push(item);
								}
								else {
									this.items_all_late.push(item);
								}
								found = true;
							}
						}
						if (!found) {
							this.items_all.push(item);
							budget -= item.cost;
							numberSlots--;
						}
					}
				}
			}
			var budget = this.selectedHero.gpm_high * this.endGame;
			var numberSlots = 6;
			for (var i = 0; i < this.selectedHero.items_high.length; i++) {
				var item = this.selectedHero.items_high[i];
				if (budget < item.cost && item.cost > 2000) {
					if (this.items_high_late.length < 12) {
						this.items_high_late.push(item);
					}
					continue;
				}
				if (item.winrate < this.selectedHero.winrate_high && item.cost < 2000) {
					if (this.items_high_early.length < 12) {
						this.items_high_early.push(item);
					}
					continue;
				}
				if (item.winrate > this.selectedHero.winrate_high) {
					if (budget > item.cost && numberSlots) {
						var found = false;
						for (var j = 0; j < this.items_high.length; j++) {
							if (this.items_high[j].upgrades_to.indexOf(item.id) > -1 || item.upgrades_to.indexOf(this.items_high[j].id) > -1) {
								if (this.items_high[j].cost > item.cost) {
									this.items_high_early.push(item);
								}
								else {
									budget += this.items_high[j].cost;
									budget -= this.item;
									this.items_high[j] = item;
								}
								found = true;
							}
							else if (this.items_high[j].no_stack.indexOf(item.id) > -1 || item.no_stack.indexOf(this.items_high[j].id) > -1) {
								if (item.cost < 2000) {
									this.items_high_early.push(item);
								}
								else {
									this.items_high_late.push(item);
								}
								found = true;
							}
						}
						if (!found) {
							this.items_high.push(item);
							budget -= item.cost;
							numberSlots--;
						}
					}
				}
			}
			var budget = this.selectedHero.gpm_pro * this.endGame;
			var numberSlots = 6;
			for (var i = 0; i < this.selectedHero.items_pro.length; i++) {
				var item = this.selectedHero.items_pro[i];
				if (budget < item.cost && item.cost > 2000) {
					if (this.items_pro_late.length < 12) {
						this.items_pro_late.push(item);
					}
					continue;
				}
				if (item.winrate < this.selectedHero.winrate_pro && item.cost < 2000) {
					if (this.items_pro_early.length < 12) {
						this.items_pro_early.push(item);
					}
					continue;
				}
				if (item.winrate > this.selectedHero.winrate_pro) {
					if (budget > item.cost && numberSlots) {
						var found = false;
						for (var j = 0; j < this.items_pro.length; j++) {
							if (this.items_pro[j].upgrades_to.indexOf(item.id) > -1 || item.upgrades_to.indexOf(this.items_pro[j].id) > -1) {
								if (this.items_pro[j].cost > item.cost) {
									this.items_pro_early.push(item);
								}
								else {
									budget += this.items_pro[j].cost;
									budget -= this.item;
									this.items_pro[j] = item;
								}
								found = true;
							}
							else if (this.items_pro[j].no_stack.indexOf(item.id) > -1 || item.no_stack.indexOf(this.items_pro[j].id) > -1) {
								if (item.cost < 2000) {
									this.items_pro_early.push(item);
								}
								else {
									this.items_pro_late.push(item);
								}
								found = true;
							}
						}
						if (!found) {
							this.items_pro.push(item);
							budget -= item.cost;
							numberSlots--;
						}
					}
				}
			}
		},
		getLevel_all: function() {
			var exp = this.selectedHero.xpm_all * this.endGame;
			var level = 0;
			for (var i = 0; i < this.expLevels.length; i++) {
				if (this.expLevels[i] > exp) {
					level = i;
					break;
				}
			}
			return level;
		},
		getLevel_high: function() {
			var exp = this.selectedHero.xpm_high * this.endGame;
			var level = 0;
			for (var i = 0; i < this.expLevels.length; i++) {
				if (this.expLevels[i] > exp) {
					level = i;
					break;
				}
			}
			return level;
		},
		getLevel_pro: function() {
			var exp = this.selectedHero.xpm_pro * this.endGame;
			var level = 0;
			for (var i = 0; i < this.expLevels.length; i++) {
				if (this.expLevels[i] > exp) {
					level = i;
					break;
				}
			}
			return level;
		}
	});

	document.addEventListener('DOMContentLoaded', function() {
		// ng.core.enableProdMode();
		ng.platform.browser.bootstrap(app.AppComponent, [ng.http.HTTP_PROVIDERS, app.ItemService, app.HeroService]);
	});

})(window.app || (window.app = {}));


