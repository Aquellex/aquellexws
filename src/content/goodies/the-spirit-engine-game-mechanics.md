---
layout: tutorial
title: 'The Spirit Engine 1 game mechanics'
lastUpdated: '2022-03-12'
---

aka: The Spirit Engine 1 game guide

All documentation is done with ticks. Each tick lasts for 0.1 seconds on Slower Battles switched on, 0.05 for the same option switched off. So 50 ticks is 5.0 seconds and 2.5 seconds, respectively.

The first cooldown for your party is a 2-second delay (independent from ticks and is unaffected by the Slower Battles toggle) + 40 (63 at the final boss: the Mystic Defence Mechanism Zeta) ticks.<br>
The first cooldown for the enemies is a 2-second (10-second at the final boss) delay (independent from ticks and is unaffected by the Slower Battles toggle) + whatever their first cooldown stat is.

Mana resistance for your party is based on how many extra mana points you have. So for example, a base mana pool of 5 (the default) has 0 resistance, whereas 9 has 4 resistance.<br>
Absolute damage from enemies ignores any kind of armour you may have equipped.

Large (L) enemies take 50% extra damage against Sharpshoot.<br>
Large (L) enemies take 33% less damage against Rock Rain and Power Shot.<br>
Lasoo's (and for that matter, the Tangleweb bonus from 2 other items) stun time is reduced by 33% against Large (L) creatures.<br>
Undead or demonic (UD) enemies take 66% extra damage against Silver Bullet & 33% extra damage against each Holy Bolt.<br>
Undead or demonic (UD) enemies are immune to Life Drain.

## ITEMS

### RIFLES

| ID  | Icon                                                                              | Name                               | Base Damage | Special Attributes                                                                                        | Location                                                       | Cost                   |
| :-- | :-------------------------------------------------------------------------------- | :--------------------------------- | :---------- | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------- | :--------------------- |
| 1   | ![inv_blunderbuss.png](/img/tse1/inv_blunderbuss.png)                             | Blunderbuss                        | 2           | N/A                                                                                                       | <li>Homestead (World 1)</li><li>Giant's Toe (World 1)</li>     | <li>2g</li><li>4g</li> |
| 2   | ![inv_flintlock.png](/img/tse1/inv_flintlock.png)                                 | Flintlock                          | 4           | N/A                                                                                                       | Serinet Bastion (World 2)                                      | 65g                    |
| 17  | ![inv_twinklingreaver.png](/img/tse1/inv_twinklingreaver.png)                     | Twinkling Reaver                   | 5           | Adds 18 damage to Magic Bullet                                                                            | Hamlet (World 2)                                               | 55g                    |
| 3   | ![inv_arquebus.png](/img/tse1/inv_arquebus.png)                                   | Arquebus                           | 6           | N/A                                                                                                       | Hamlet (World 2)                                               | 105g                   |
| 9   | ![inv_pixiesenchantedarquebus.png](/img/tse1/inv_pixiesenchantedarquebus.png)     | Pixie's Enchanted Arquebus         | 6           | Self-recharge 1 mana every 320 ticks                                                                      | Downtown Heavena (World 3)                                     | 175g                   |
| 4   | ![inv_musket.png](/img/tse1/inv_musket.png)                                       | Musket                             | 8           | N/A                                                                                                       | Downtown Heavena (World 3)                                     | 185g                   |
| 5   | ![inv_shotgun.png](/img/tse1/inv_shotgun.png)                                     | Shotgun                            | 10          | N/A                                                                                                       | Robert Hat's Happy Hideout (World 3)                           | 395g                   |
| 10  | ![inv_faeriesenchanted.png](/img/tse1/inv_faeriesenchanted.png)                   | Faerie's Enchanted Rifle           | 11          | Self-recharge 1 mana every 320 ticks                                                                      | Cheating                                                       | N/A                    |
| 12  | ![inv_gremlinssnapcannon.png](/img/tse1/inv_gremlinssnapcannon.png)               | Gremlin's Snapcannon               | 15          | Increases cooldown time for bullet attacks by 25%                                                         | Robert Hat's Happy Hideout (World 3)                           | 440g                   |
| 6   | ![inv_hunting.png](/img/tse1/inv_hunting.png)                                     | Hunting Rifle                      | 12          | N/A                                                                                                       | Saline (World 4)                                               | 540g                   |
| 11  | ![inv_soldiersnickelplatedspeed.png](/img/tse1/inv_soldiersnickelplatedspeed.png) | Soldier's Nickel Plated SpeedRifle | 10          | Decreases cooldown time for bullet attacks by 14%                                                         | Saline (World 4)                                               | 630g                   |
| 7   | ![inv_silverplated.png](/img/tse1/inv_silverplated.png)                           | Silver Plated Rifle                | 15          | N/A                                                                                                       | The Arcane Library (World 4)                                   | 1580g                  |
| 13  | ![inv_musowsthunderstick.png](/img/tse1/inv_musowsthunderstick.png)               | Mu Sow's Thunderstick              | 22          | Increasts cooldown time for bullet attacks by 33%                                                         | The Arcane Library (World 4)                                   | 1950g                  |
| 8   | ![inv_goldenplated.png](/img/tse1/inv_goldenplated.png)                           | Crafted Golden Rifle               | 17          | N/A                                                                                                       | Clarke's Tower Lobby (World 5, only if Peter is in your party) | N/A                    |
| 16  | ![inv_orwellsrigsnapper.png](/img/tse1/inv_orwellsrigsnapper.png)                 | Orwell's Rigsnapper                | 21          | Does (40% of Party Level + 5) damage to the wielder every 350 ticks                                       | Prototype Development Wing (World 5)                           | 3160g                  |
| 15  | ![inv_exorcistsholysteel.png](/img/tse1/inv_exorcistsholysteel.png)               | Exorcist's Holy Steel              | 12          | Rains 3 holy bolts dealing (Party Level - 5) damage on each enemy every 310 ticks if equipped on a priest | Cheating                                                       | N/A                    |
| 14  | ![inv_tempereddragon.png](/img/tse1/inv_tempereddragon.png)                       | Tempered Dragon                    | 13          | Activates Speed Fire without consuming mana every 300 ticks if equipped on a rifleman                     | Cheating                                                       | N/A                    |

### ARMOUR

| ID  | Icon                                                                                  | Name                           | Physical Reduction | Special Attributes                                                     | Location                                                                                     | Cost                         |
| :-- | :------------------------------------------------------------------------------------ | :----------------------------- | :----------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :--------------------------- |
| 1   | ![inv_quiltedfarmersrobes.png](/img/tse1/inv_quiltedfarmersrobes.png)                 | Quilted Farmer's Robes         | 1                  | N/A                                                                    | Homestead (World 1)                                                                          | 3g                           |
| 2   | ![inv_leatherjersey.png](/img/tse1/inv_leatherjersey.png)                             | Leather Jersey                 | 2                  | N/A                                                                    | Giant's Toe (World 1)                                                                        | 4g                           |
| 3   | ![inv_ironbreastplate.png](/img/tse1/inv_ironbreastplate.png)                         | Iron Breast Plate              | 4                  | N/A                                                                    | Serinet Bastion (World 2)                                                                    | 70g                          |
| 4   | ![inv_magesembroideredcoat.png](/img/tse1/inv_magesembroideredcoat.png)               | Mage's Embroidered Coat        | 2                  | Self-recharge 1 mana every 320 ticks                                   | Serinet Bastion (World 2)                                                                    | 80g                          |
| 5   | ![inv_boathahidecoat.png](/img/tse1/inv_boathahidecoat.png)                           | Boatha Hide Coat               | 5                  | N/A                                                                    | Hamlet (World 2)                                                                             | 95g                          |
| 13  | ![inv_favoureddrapes.png](/img/tse1/inv_favoureddrapes.png)                           | Favoured Drapes                | 5                  | Summons N-damaging (Party Level x 3) meteor every 240 ticks            | Deliver quest item from Serinet Bastion to Hamlet (World 2)                                  | 90g                          |
| 6   | ![inv_copperplatedjacket.png](/img/tse1/inv_copperplatedjacket.png)                   | Copper Plated Jacket           | 7                  | N/A                                                                    | Downtown Heavena (World 3)                                                                   | 170g                         |
| 16  | ![inv_sorcerersembossedrobes.png](/img/tse1/inv_sorcerersembossedrobes.png)           | Sorcerer's Embossed Robes      | 6                  | Self-recharge 1 mana every 260 ticks                                   | The Hepplekeck Village (World 3)                                                             | 275g                         |
| 15  | ![inv_carvedoaken.png](/img/tse1/inv_carvedoaken.png)                                 | Carved Oaken Armour            | 9                  | Casts 131-tick stun every 263 ticks to a random enemy                  | Complete The Leafy Underbrush 1st then Kaikin Gorge 2nd (World 3)                            | N/A                          |
| 7   | ![inv_silverlinkedjacket.png](/img/tse1/inv_silverlinkedjacket.png)                   | Silver Linked Jacket           | 9                  | N/A                                                                    | Robert Hat's Happy Hideout (World 3)                                                         | 390g                         |
| 12  | ![inv_arcanegraniterobes.png](/img/tse1/inv_arcanegraniterobes.png)                   | Arcane Granite Robes           | 8                  | Adds (66% of Party Level) absorption to Kinetic Shield every 204 ticks | Saline (World 4)                                                                             | 700g                         |
| 8   | ![inv_spidersilkovercoat.png](/img/tse1/inv_spidersilkovercoat.png)                   | SpiderSilk OverCoat            | 12                 | N/A                                                                    | Saline (World 4)                                                                             | 590g                         |
| 10  | ![inv_crusadersfullmetaljacket.png](/img/tse1/inv_crusadersfullmetaljacket.png)       | Crusader's Full Metal Jacket   | 16                 | Increases cooldown time by 17%                                         | Saline (World 4)                                                                             | 1690g                        |
| 18  | ![inv_creepymysticmantle.png](/img/tse1/inv_creepymysticmantle.png)                   | Creepy Mystic Mantle           | 4                  | Self-recharges 1 mana for 1 hit every 27 ticks                         | The Magi Retreat (World 4)                                                                   | 1060g                        |
| 14  | ![inv_blessedooligskincoat.png](/img/tse1/inv_blessedooligskincoat.png)               | Blessed Oolig Skin Coat        | 10                 | Casts Party Bless, raising Party Level by 33% every 313 ticks          | The Veroonai Enclave (World 4)                                                               | 1295g                        |
| 11  | ![inv_paladinsgoldenflecejacket.png](/img/tse1/inv_paladinsgoldenflecejacket.png)     | Paladin's Golden Fleece Jacket | 14                 | Self-heals between 4-6HP every 140 ticks                               | Defeat Pocket Dimension 1st, then Granael, then Tza Tze in that specific order (World 4)     | N/A                          |
| 17  | ![inv_silveredrobesofspeed.png](/img/tse1/inv_silveredrobesofspeed.png)               | Silvered Robes of Speed        | 7                  | Decreases cooldown time by 17%                                         | Defeat Tza Tze 1st, then Granael, then the Pocket Dimension in that specific order (World 4) | N/A                          |
| 9   | ![inv_mistwisenedancientgreatcoat.png](/img/tse1/inv_mistwisenedancientgreatcoat.png) | Mist Wisened Ancient Greatcoat | 15                 | N/A                                                                    | <li>The Arcane Library (World 4)</li><li>Prototype Development Wing (World 5)</li>           | <li>1290g</li><li>1370g</li> |
| 19  | ![inv_crushingsandstoneshell.png](/img/tse1/inv_crushingsandstoneshell.png)           | Crushing Sandstone Shell       | 21                 | Does 1 damage to the wearer every 37 ticks                             | Prototype Development Wing (World 5)                                                         | 3590g                        |

### TALISMANS

| ID  | Icon                                                                                                    | Name                                         | Mana Points &<br>Magical Reduction | Special Attributes                                                                                                                                                                                                                                                                                                                       | Location                                                          | Cost  |
| :-- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- | :---- |
| 1   | ![inv_crystaltalismanoftricklingmanapool.png](/img/tse1/inv_crystaltalismanoftricklingmanapool.png)     | Crystal Talisman of Trickling Mana Pool      | 2                                  | N/A                                                                                                                                                                                                                                                                                                                                      | Homestead (World 1)                                               | 2g    |
| 4   | ![inv_rubytalismanofminormanaregen.png](/img/tse1/inv_rubytalismanofminormanaregen.png)                 | Ruby Talisman of Minor Mana Regeneration     | 0                                  | Self-recharge 1 mana every 290 ticks                                                                                                                                                                                                                                                                                                     | Giant's Toe (World 1)                                             | 24g   |
| 8   | ![inv_gnarledtalismanofpartyheal.png](/img/tse1/inv_gnarledtalismanofpartyheal.png)                     | Gnarled Talisman of Party Healing            | 1                                  | Party Heal (excluding wearer) for floor((1/6th of Party Level) + 1) HP every 210 ticks                                                                                                                                                                                                                                                   | Giant's Toe (World 1)                                             | 32g   |
| 2   | ![inv_diamondtalismanofflowingmanapool.png](/img/tse1/inv_diamondtalismanofflowingmanapool.png)         | Diamond Talisman of Flowing Mana Pool        | 4                                  | N/A                                                                                                                                                                                                                                                                                                                                      | The Misty Marshes (World 2)                                       | 155g  |
| 6   | ![inv_emeraldtalismanofblood.png](/img/tse1/inv_emeraldtalismanofblood.png)                             | Emerald Talisman of the Blood                | -1                                 | Self-heal floor((1/3rd of Party Level) + 1) HP every 220 ticks                                                                                                                                                                                                                                                                           | The Misty Marshes (World 2)                                       | 110g  |
| 9   | ![inv_mercurytalismanofquickening.png](/img/tse1/inv_mercurytalismanofquickening.png)                   | Mercury Talisman of Quickening               | 0                                  | Decreases cooldown time by 10%                                                                                                                                                                                                                                                                                                           | The Misty Marshes (World 2)                                       | 65g   |
| 13  | ![inv_skeletaltalismanoflifedrain.png](/img/tse1/inv_skeletaltalismanoflifedrain.png)                   | Skeletal Talisman of Life Drain              | 2                                  | Casts Life Drain dealing (Party Level x 3.5) + 2 damage every 293 ticks                                                                                                                                                                                                                                                                  | Hamlet (World 2), only if Clara is in your party                  | N/A   |
| 5   | ![inv_sapphiretalismanofmajormanaregen.png](/img/tse1/inv_sapphiretalismanofmajormanaregen.png)         | Sapphire Talisman of Major Mana Regeneration | 0                                  | Self-recharge 1 mana every 190 ticks                                                                                                                                                                                                                                                                                                     | Downtown Heavena (World 3)                                        | 250g  |
| 19  | ![inv_floweringtalismanofgaia.png](/img/tse1/inv_floweringtalismanofgaia.png)                           | Flowering Talisman of Gaia                   | 3                                  | Casts 131-tick stun to a random enemy every 390 ticks                                                                                                                                                                                                                                                                                    | The Hepplekeck Village (World 3)                                  | 370g  |
| 14  | ![inv_glitteringtalismanoflifetransference.png](/img/tse1/inv_glitteringtalismanoflifetransference.png) | Glittering Talisman of Life Transference     | -1                                 | One of either occurs every 303 ticks:<br><li>Good: Self-heals by half of Party Level and damages random enemy by Party Level x 7</li><li>Bad: Does damage to wearer by half of Party Level and heals random enemy by Party Level x 3</li>                                                                                                | The Hepplekeck Village (World 3)                                  | 315g  |
| 16  | ![inv_translucentamuletoftheheavens.png](/img/tse1/inv_translucentamuletoftheheavens.png)               | Translucent Amulet of the Heavens            | 1                                  | Summons N-damaging (Party Level x 3) meteor every 260 ticks (will not be summoned if one is already wearing Favoured Drapes)                                                                                                                                                                                                             | Complete Kaikin Gorge 1st then The Leafy Underbrush 2nd (World 3) | N/A   |
| 7   | ![inv_pearltalismanoftheheart.png](/img/tse1/inv_pearltalismanoftheheart.png)                           | Pearl Talisman of the Heart                  | 0                                  | Self-heal floor((1/3rd of Party Level) + 1) HP every 150 ticks                                                                                                                                                                                                                                                                           | Robert Hat's Happy Hideout (World 3)                              | 325g  |
| 18  | ![inv_blurredtalismanofthespectrum.png](/img/tse1/inv_blurredtalismanofthespectrum.png)                 | Blurred Talisman of the Spectrum             | 3                                  | Decreases Rainbow cooldown time by 33%                                                                                                                                                                                                                                                                                                   | The Magi Retreat (World 4), only if Pippa is in your party        | N/A   |
| 3   | ![inv_opaltalismanofsurgingmanapool.png](/img/tse1/inv_opaltalismanofsurgingmanapool.png)               | Opal Talisman of Surging Mana Pool           | 6                                  | N/A                                                                                                                                                                                                                                                                                                                                      | The Magi Retreat (World 4)                                        | 885g  |
| 17  | ![inv_incandesanttalismanofmagicmastery.png](/img/tse1/inv_incandesanttalismanofmagicmastery.png)       | Incandescent Talisman of Magic Mastery       | 2                                  | Adds an extra blast to Chain Magic                                                                                                                                                                                                                                                                                                       | The Magi Retreat (World 4)                                        | 1005g |
| 10  | ![inv_quicksilvertalismanofacceleration.png](/img/tse1/inv_quicksilvertalismanofacceleration.png)       | Quicksilver Talisman of Acceleration         | 0                                  | Decreases cooldown time by 20%                                                                                                                                                                                                                                                                                                           | The Veroonai Enclave (World 4)                                    | 1210g |
| 15  | ![inv_woodentalismenofjudgement.png](/img/tse1/inv_woodentalismenofjudgement.png)                       | Wooden Talisman of Judgement                 | 3                                  | Rains 3 holy bolts dealing (Party Level - 5) damage on each enemy every 273 ticks ticks                                                                                                                                                                                                                                                  | The Veroonai Enclave (World 4)                                    | 1076g |
| 12  | ![inv_warpedtalismanofdeflection.png](/img/tse1/inv_warpedtalismanofdeflection.png)                     | Warped Talisman of Deflection                | 2                                  | Adds (66% of Party Level) absorption to Magic Shield every 210 ticks                                                                                                                                                                                                                                                                     | The Arcane Library (World 4)                                      | 1650g |
| 11  | ![inv_mummifiedtalismanofsummoning.png](/img/tse1/inv_mummifiedtalismanofsummoning.png)                 | Mummified Talisman of Summoning              | 3                                  | Casts Spook Summon every 240 ticks with the properties:<li>((Party Level x 2) + 50) x 0.8 to duration if Spook Summon's damage is 0 or less, otherwise ((Party Level x 2) + 140) x 0.8 to duration if Spook Summon's damage is greater than 0</li><li>((Party Level / 2) + 10) to damage if Spook Summon's damage is greater than 0</li> | Prototype Development Wing (World 5)                              | 2930g |

## ENEMIES

### WORLD 1: GIANT'S CRADLE

#### Junior Kippon<br>

HP: 30

| Animation                                                     | Kind  | Attack         | Type     | Damage | Cooldown                                                                                                                                       |
| :------------------------------------------------------------ | :---- | :------------- | :------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Junior_Kippon.gif](/img/tse1/Junior_Kippon.gif)             | Idle  | First cooldown | N/A      | N/A    | Between 10-15 ticks                                                                                                                            |
| ![Junior_Kippon_melee.gif](/img/tse1/Junior_Kippon_melee.gif) | Melee | Lunge          | Physical | 2      | <li>57 ticks (all other areas)</li> <li>65 ticks (first The Prairie Trail battle)</li> <li>74 ticks (remaining The Prairie Trail battles)</li> |

| XP  | Gold | Location                                                                  | Condition                   |
| :-- | :--- | :------------------------------------------------------------------------ | :-------------------------- |
| 2   | 1    | <li>The Prairie Trail</li><li>The Dusty Valley</li><li>Hailey's Glen</li> | Party Level is less than 9  |
| 2   | 1    | Giant's Toe                                                               | Party Level is less than 11 |

#### Warrior Kippon<br>

HP: 110

| Animation                                                       | Kind  | Attack         | Type     | Damage | Cooldown           |
| :-------------------------------------------------------------- | :---- | :------------- | :------- | :----- | :----------------- |
| ![Warrior_Kippon_idle.gif](/img/tse1/Warrior_Kippon_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 7-14 ticks |
| ![Warrior_Kippon_melee.gif](/img/tse1/Warrior_Kippon_melee.gif) | Melee | Lunge          | Physical | 4      | 54 ticks           |

| XP  | Gold | Location                                            | Condition                   |
| :-- | :--- | :-------------------------------------------------- | :-------------------------- |
| 4   | 1    | <li>The Prairie Trail</li><li>The Dusty Valley</li> | Party Level is less than 9  |
| 4   | 1    | <li>Hailey's Glen</li><li>Giant's Toe</li>          | Party Level is less than 11 |

#### Mama Kippon<br>

| HP  | Location         |
| :-- | :--------------- |
| 180 | The Dusty Valley |
| 200 | Hailey's Glen    |
| 160 | Giant's Toe      |

| Animation                                                 | Kind   | Attack         | Type     | Damage | Cooldown           |
| :-------------------------------------------------------- | :----- | :------------- | :------- | :----- | :----------------- |
| ![Mama_Kippon_idle.gif](/img/tse1/Mama_Kippon_idle.gif)   | Idle   | First cooldown | N/A      | N/A    | Between 7-14 ticks |
| ![Mama_Kippon_melee.gif](/img/tse1/Mama_Kippon_melee.gif) | Melee  | Lunge          | Physical | 3      | 64 ticks           |
| ![Mama_Kippon_magic.gif](/img/tse1/Mama_Kippon_magic.gif) | Lobbed | Energy Ball    | Magical  | 4      | 61 ticks           |

| XP  | Gold | Location                                            | Condition                   |
| :-- | :--- | :-------------------------------------------------- | :-------------------------- |
| 7   | 2    | <li>The Prairie Trail</li><li>The Dusty Valley</li> | Party Level is less than 9  |
| 7   | 2    | Hailey's Glen                                       | Party Level is less than 11 |
| 7   | 2    | Giant's Toe                                         | Party Level is less than 14 |

#### Torfly<br>

| HP  | Location         |
| :-- | :--------------- |
| 135 | The Dusty Valley |
| 150 | Giant's Toe      |

| Animation                                       | Kind  | Attack         | Type     | Damage | Cooldown            |
| :---------------------------------------------- | :---- | :------------- | :------- | :----- | :------------------ |
| ![Torfly_idle.gif](/img/tse1/Torfly_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 12-19 ticks |
| ![Torfly_melee.gif](/img/tse1/Torfly_melee.gif) | Melee | Lunge          | Physical | 3      | 46 ticks            |
| ![Torfly_magic.gif](/img/tse1/Torfly_magic.gif) | Magic | Mist Breath    | Absolute | 1 x 4  | 48 ticks            |

| XP  | Gold | Location      | Condition                   |
| :-- | :--- | :------------ | :-------------------------- |
| 8   | 3    | Hailey's Glen | Party Level is less than 11 |
| 8   | 3    | Giant's Toe   | Party Level is less than 14 |

#### Porcupig<br>

| HP  | Location        |
| :-- | :-------------- |
| 245 | The Dusty Valle |
| 255 | Giant's Toe     |

| Animation                                           | Kind  | Attack         | Type     | Damage | Cooldown            |
| :-------------------------------------------------- | :---- | :------------- | :------- | :----- | :------------------ |
| ![Porcupig_idle.gif](/img/tse1/Porcupig_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 19-27 ticks |
| ![Porcupig_range.gif](/img/tse1/Porcupig_range.gif) | Range | Spine Attack   | Physical | 5      | Between 81-83 ticks |

| XP  | Gold | Location      | Condition                   |
| :-- | :--- | :------------ | :-------------------------- |
| 8   | 3    | Hailey's Glen | Party Level is less than 11 |
| 8   | 3    | Giant's Toe   | Party Level is less than 14 |

#### Grundlekrunk (L)<br>

HP: 705

| Animation                                                     | Kind   | Attack           | Type     | Damage | Cooldown |
| :------------------------------------------------------------ | :----- | :--------------- | :------- | :----- | :------- |
| ![Grundlekrunk_idle.gif](/img/tse1/Grundlekrunk_idle.gif)     | Idle   | N/A              | N/A      | N/A    | N/A      |
| ![Grundlekrunk_melee.gif](/img/tse1/Grundlekrunk_melee.gif)   | Melee  | Lunge            | Physical | 4      | 41 ticks |
| ![Grundlekrunk_melee2.gif](/img/tse1/Grundlekrunk_melee2.gif) | Melee  | Whirlwind Attack | Physical | 9      | 34 ticks |
| ![Grundlekrunk_magic.gif](/img/tse1/Grundlekrunk_magic.gif)   | Lobbed | Ooze Spit        | Absolute | 1 x 4  | 54 ticks |

| XP  | Gold | Location            | Condition |
| :-- | :--- | :------------------ | :-------- |
| 67  | 10   | Grundlekrunk's Lair | N/A       |

#### FrostWolf<br>

HP: 332

| Animation                                             | Kind  | Attack         | Type     | Damage                                 | Cooldown            |
| :---------------------------------------------------- | :---- | :------------- | :------- | :------------------------------------- | :------------------ |
| ![FrostWolf_idle.gif](/img/tse1/FrostWolf_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                    | Between 15-23 ticks |
| ![FrostWolf_melee.gif](/img/tse1/FrostWolf_melee.gif) | Melee | Lunge          | Physical | <li>8</li><li>7 to shields</li>        | Between 57-60 ticks |
| ![FrostWolf_magic.gif](/img/tse1/FrostWolf_magic.gif) | Magic | Frost Breath   | Magic    | <li>2 x 4</li><li>Clamps at 1 x 4</li> | 61 ticks            |

| XP                             | Gold                          | Location      | Condition                   |
| :----------------------------- | :---------------------------- | :------------ | :-------------------------- |
| 22                             | 4                             | The Icy Ridge | Party Level is less than 13 |
| floor(22 / (Party Level - 11)) | floor(4 / (Party Level - 11)) | The Icy Ridge | Party Level is less than 17 |

| XP  | Gold | Location      | Condition         |
| :-- | :--- | :------------ | :---------------- |
| 7   | 1    | The Icy Ridge | Party Level is 13 |
| 5   | 1    | The Icy Ridge | Party Level is 14 |
| 4   | 0    | The Icy Ridge | Party Level is 15 |
| 3   | 0    | The Icy Ridge | Party Level is 16 |

#### Abominable Snowman (L)<br>

HP: 440

| Animation                                         | Kind  | Attack         | Type     | Damage | Cooldown                                                                           |
| :------------------------------------------------ | :---- | :------------- | :------- | :----- | :--------------------------------------------------------------------------------- |
| ![snowman_idle.gif](/img/tse1/snowman_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | <li>Between 10-15 ticks</li><li>Starts with Lunge</li>                             |
| ![snowman_melee.gif](/img/tse1/snowman_melee.gif) | Melee | Lunge          | Physical | 6      | <li>64 ticks</li><li>3/4 chance to use this attack</li>                            |
| ![snowman_heal.png](/img/tse1/snowman_heal.png)   | Heal  | Recover        | Self     | 30     | <li>67 ticks</li><li>1/4 chance to use this attack, unless HP is less than 60</li> |

| XP                      | Gold                   | Location      | Condition                   |
| :---------------------- | :--------------------- | :------------ | :-------------------------- |
| 19                      | 5                      | The Icy Ridge | Party Level is less than 13 |
| 19 / (Party Level - 11) | 5 / (Party Level - 11) | The Icy Ridge | Party Level is less than 17 |

| XP  | Gold | Location      | Condition         |
| :-- | :--- | :------------ | :---------------- |
| 9   | 2    | The Icy Ridge | Party Level is 13 |
| 6   | 1    | The Icy Ridge | Party Level is 14 |
| 4   | 1    | The Icy Ridge | Party Level is 15 |
| 3   | 1    | The Icy Ridge | Party Level is 16 |

#### Ice Shaman<br>

HP: 167

| Animation                                                     | Kind             | Attack         | Type     | Damage   | Cooldown                                                  |
| :------------------------------------------------------------ | :--------------- | :------------- | :------- | :------- | :-------------------------------------------------------- |
| ![Ice_Shaman_idle.gif](/img/tse1/Ice_Shaman_idle.gif)         | Idle             | First cooldown | N/A      | N/A      | <li>Between 10-15 ticks</li><li>Uses Hailstorm first</li> |
| ![Ice_Shaman_range.gif](/img/tse1/Ice_Shaman_range.gif)       | Range            | Hailstorm      | Physical | 7        | <li>47 ticks</li><li>1/4 chance to use this attack</li>   |
| ![Ice_Shaman_stun.gif](/img/tse1/Ice_Shaman_stun.gif)         | Stun<br>Indirect | Freeze         | Ailment  | 70 ticks | <li>52 ticks</li><li>1/2 chance to use this attack</li>   |
| ![Ice_Shaman_recharge.gif](/img/tse1/Ice_Shaman_recharge.gif) | Recharge         | Recharge       | Self     | N/A      | <li>39 ticks</li><li>1/4 chance to skip a turn </li>      |

| XP                             | Gold                          | Location      | Condition                   |
| :----------------------------- | :---------------------------- | :------------ | :-------------------------- |
| 19                             | 6                             | The Icy Ridge | Party Level is less than 13 |
| floor(19 / (Party Level - 11)) | floor(6 / (Party Level - 11)) | The Icy Ridge | Party Level is less than 17 |

| XP  | Gold | Location      | Condition         |
| :-- | :--- | :------------ | :---------------- |
| 9   | 3    | The Icy Ridge | Party Level is 13 |
| 6   | 2    | The Icy Ridge | Party Level is 14 |
| 4   | 1    | The Icy Ridge | Party Level is 15 |
| 3   | 1    | The Icy Ridge | Party Level is 16 |

#### The Hermit Mage (MX)<br>

HP: 1090

| Animation                                                         | Kind              | Attack          | Type     | Damage   | Cooldown                                                                                                          |
| :---------------------------------------------------------------- | :---------------- | :-------------- | :------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| ![Crazy_Hermit_idle.gif](/img/tse1/Crazy_Hermit_idle.gif)         | Idle              | First cooldown  | N/A      | N/A      | <li>Between 15-17 ticks</li><li>Starts with Blood Lightning</li>                                                  |
| ![Crazy_Hermit_range.gif](/img/tse1/Crazy_Hermit_range.gif)       | Magic<br>Indirect | Blood Lightning | Absolute | 7        | <li>Between 33-35 ticks</li><li>Will use this or Chain Magic a total of 3 times before going to freeze </li>      |
| ![Crazy_Hermit_magic.gif](/img/tse1/Crazy_Hermit_magic.gif)       | Magic             | Chain Magic     | Magical  | 3 x 3    | <li>Between 34 ticks</li><li>Will use this or Blood Lightning a total of 3 times before going to freeze</li>      |
| ![Crazy_Hermit_stun.gif](/img/tse1/Crazy_Hermit_stun.gif)         | Stun<br>Indirect  | Freeze          | Ailment  | 70 ticks | <li>8 ticks</li><li>Will use this attack twice before recharging</li>                                             |
| ![Crazy_Hermit_recharge.gif](/img/tse1/Crazy_Hermit_recharge.gif) | Recharge          | Recharge        | Self     | N/A      | 51 ticks                                                                                                          |
| ![Crazy_Hermit_shield.gif](/img/tse1/Crazy_Hermit_shield.gif)     | Defence           | Shields Up      | Self     | 60HP     | <li>14 ticks</li><li>Will use this move immediately when the battle starts, then it goes to 'First cooldown'</li> |

| XP  | Gold | Location    | Condition |
| :-- | :--- | :---------- | :-------- |
| 148 | 70   | Giant's Top | N/A       |

### WORLD 2: PANSYLVANIA

#### Skeleton (UD)<br>

| HP  | Location               |
| :-- | :--------------------- |
| 350 | The Town Graveyard     |
| 415 | The Torchlit Catacombs |

| Animation                                           | Kind  | Attack         | Type     | Damage                                                               | Cooldown                                                                           |
| :-------------------------------------------------- | :---- | :------------- | :------- | :------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ![Skeleton_idle.gif](/img/tse1/Skeleton_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                                                  | Between 10-19 ticks                                                                |
| ![Skeleton_melee.gif](/img/tse1/Skeleton_melee.gif) | Melee | Lunge          | Physical | <li>7 at The Town Graveyard</li><li>9 in The Torchlit Catacombs</li> | <li>55 ticks at The Town Graveyard</li><li>57 ticks in The Torchlit Catacombs</li> |

| XP                            | Gold                          | Location               | Condition                   |
| :---------------------------- | :---------------------------- | :--------------------- | :-------------------------- |
| 24                            | 6                             | The Town Graveyard     | Party Level is less than 14 |
| floor(24 / (Party Level - 12) | floor(6 / (Party Level - 12)) | The Town Graveyard     | Party Level is less than 18 |
| 24                            | 4                             | The Torchlit Catacombs | Party Level is less than 15 |
| floor(24 / (Party Level - 13) | floor(4 / (Party Level - 13)) | The Torchlit Catacombs | Party Level is less than 19 |

| XP  | Gold | Location               | Condition         |
| :-- | :--- | :--------------------- | :---------------- |
| 12  | 3    | The Town Graveyard     | Party Level is 14 |
| 8   | 2    | The Town Graveyard     | Party Level is 15 |
| 6   | 1    | The Town Graveyard     | Party Level is 16 |
| 4   | 1    | The Town Graveyard     | Party Level is 17 |
| 12  | 2    | The Torchlit Catacombs | Party Level is 15 |
| 8   | 1    | The Torchlit Catacombs | Party Level is 16 |
| 6   | 1    | The Torchlit Catacombs | Party Level is 17 |
| 4   | 0    | The Torchlit Catacombs | Party Level is 18 |

#### Fetid Zombie (UD)<br>

| HP  | Location               |
| :-- | :--------------------- |
| 360 | The Town Graveyard     |
| 445 | The Torchlit Catacombs |

| Animation                                       | Kind      | Attack         | Type     | Damage                                                                                                                                                                  | Cooldown                                                                                                 |
| :---------------------------------------------- | :-------- | :------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![Zombie_idle.gif](/img/tse1/Zombie_idle.gif)   | Idle      | First cooldown | N/A      | N/A                                                                                                                                                                     | Between 10-18 ticks                                                                                      |
| ![Zombie_range.gif](/img/tse1/Zombie_range.gif) | Range DoT | Vomit          | Absolute | <li>1 x 4</li><li>2 DoT at The Town Graveyard</li><li>3 DoT in The Torchlit Catacombs</li><li>Each DoT deals 1 damage every 20 ticks</li><li>2 x 4 against shields</li> | <li>Between 92-97 ticks at The Town Graveyard</li><li>Between 87-92 ticks in The Torchlit Catacombs</li> |

| XP                             | Gold                          | Location               | Condition                   |
| :----------------------------- | :---------------------------- | :--------------------- | :-------------------------- |
| 27                             | 5                             | The Town Graveyard     | Party Level is less than 14 |
| floor(27 / (Party Level - 12)) | floor(5 / (Party Level - 12)) | The Town Graveyard     | Party Level is less than 18 |
| 26                             | 7                             | The Torchlit Catacombs | Party Level is less than 15 |
| floor(26 / (Party Level - 13)) | floor(7 / (Party Level - 13)) | The Torchlit Catacombs | Party Level is less than 19 |

| XP  | Gold | Location               | Condition         |
| :-- | :--- | :--------------------- | :---------------- |
| 13  | 2    | The Town Graveyard     | Party Level is 14 |
| 9   | 1    | The Town Graveyard     | Party Level is 15 |
| 6   | 1    | The Town Graveyard     | Party Level is 16 |
| 5   | 1    | The Town Graveyard     | Party Level is 17 |
| 13  | 3    | The Torchlit Catacombs | Party Level is 15 |
| 8   | 2    | The Torchlit Catacombs | Party Level is 16 |
| 6   | 1    | The Torchlit Catacombs | Party Level is 17 |
| 5   | 1    | The Torchlit Catacombs | Party Level is 18 |

#### Ghoul (NX, UD)

| HP  | Location               |
| :-- | :--------------------- |
| 575 | The Town Graveyard     |
| 325 | The Torchlit Catacombs |
| 365 | The Misty Marshes      |
| 245 | The Broken Bridge      |

| Animation                                     | Kind  | Attack         | Type     | Damage                                                  | Cooldown                                                             |
| :-------------------------------------------- | :---- | :------------- | :------- | :------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Ghost_idle.gif](/img/tse1/Ghost_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                                     | Between 10-15 ticks                                                  |
| ![Ghost_melee.gif](/img/tse1/Ghost_melee.gif) | Melee | Lunge          | Physical | <li>11 if Adrian's Ghost</li><li>9 everywhere else</li> | <li>45 ticks if Adrian's Ghost</li><li>57 ticks everywhere else</li> |

| XP                             | Gold                          | Location               | Condition                      |
| :----------------------------- | :---------------------------- | :--------------------- | :----------------------------- |
| 205                            | 40                            | The Town Graveyard     | Said Yes to Annabelle          |
| 32                             | 2                             | The Torchlit Catacombs | Party Level is less than 15    |
| floor(32 / (Party Level - 13)) | floor(2 / (Party Level - 13)) | The Torchlit Catacombs | Party Level is less than 19    |
| 31                             | 3                             | The Misty Marshes      | Party Level is less than 16    |
| floor(31 / (Party Level - 14)) | floor(3 / (Party Level - 14)) | The Misty Marshes      | Party Level is less than 21    |
| 41                             | 1                             | The Broken Bridge      | Snack hasn't been defeated yet |

| XP  | Gold | Location               | Condition         |
| :-- | :--- | :--------------------- | :---------------- |
| 16  | 1    | The Torchlit Catacombs | Party Level is 15 |
| 10  | 0    | The Torchlit Catacombs | Party Level is 16 |
| 8   | 0    | The Torchlit Catacombs | Party Level is 17 |
| 6   | 0    | The Torchlit Catacombs | Party Level is 18 |
| 15  | 1    | The Misty Marshes      | Party Level is 16 |
| 10  | 1    | The Misty Marshes      | Party Level is 17 |
| 7   | 0    | The Misty Marshes      | Party Level is 18 |
| 6   | 0    | The Misty Marshes      | Party Level is 19 |
| 5   | 0    | The Misty Marshes      | Party Level is 20 |
| 4   | 0    | The Misty Marshes      | Party Level is 21 |

#### Gargoyle (EX)

| HP  | Location          |
| :-- | :---------------- |
| 480 | The Misty Marshes |
| 510 | Arachnid's Grove  |

| Animation                                           | Kind  | Attack         | Type     | Damage | Cooldown                                                |
| :-------------------------------------------------- | :---- | :------------- | :------- | :----- | ------------------------------------------------------- |
| ![Gargoyle_idle.gif](/img/tse1/Gargoyle_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 10-23 ticks                                     |
| ![Gargoyle_melee.gif](/img/tse1/Gargoyle_melee.gif) | Melee | Lunge          | Physical | 9      | <li>41 ticks</li><li>2/3 chance to use this attack</li> |
| ![Gargoyle_magic.gif](/img/tse1/Gargoyle_magic.gif) | Magic | Sonic Blast    | Magical  | 4 x 3  | <li>79 ticks</li><li>1/3 chance to use this attack</li> |

| XP                             | Gold                           | Location          | Condition                   |
| :----------------------------- | :----------------------------- | :---------------- | :-------------------------- |
| 42                             | 11                             | The Misty Marshes | Party Level is less than 16 |
| floor(42 / (Party Level - 14)) | floor(11 / (Party Level - 14)) | The Misty Marshes | Party Level is less than 21 |
| 48                             | 10                             | Arachnid's Grove  | Party Level is less than 18 |
| floor(48 / (Party Level - 16)) | floor(10 / (Party Level - 16)) | Arachnid's Grove  | Party Level is less than 23 |

| XP  | Gold | Location          | Condition         |
| :-- | :--- | :---------------- | :---------------- |
| 21  | 5    | The Misty Marshes | Party Level is 16 |
| 14  | 3    | The Misty Marshes | Party Level is 17 |
| 10  | 2    | The Misty Marshes | Party Level is 18 |
| 8   | 2    | The Misty Marshes | Party Level is 19 |
| 7   | 1    | The Misty Marshes | Party Level is 20 |
| 6   | 1    | The Misty Marshes | Party Level is 21 |
| 24  | 5    | Arachnid's Grove  | Party Level is 18 |
| 16  | 3    | Arachnid's Grove  | Party Level is 19 |
| 12  | 2    | Arachnid's Grove  | Party Level is 20 |
| 9   | 2    | Arachnid's Grove  | Party Level is 21 |
| 8   | 1    | Arachnid's Grove  | Party Level is 22 |
| 6   | 1    | Arachnid's Grove  | Party Level is 23 |

#### Skeleton Fairy

| HP  | Location          |
| :-- | :---------------- |
| 275 | The Misty Marshes |
| 285 | Arachnid's Grove  |
| 410 | The Broken Bridge |

| Animation                                                       | Kind   | Attack         | Type    | Damage                                                                                             | Cooldown                                                                                                          |
| :-------------------------------------------------------------- | :----- | :------------- | :------ | :------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Skeleton_Fairy_idle.gif](/img/tse1/Skeleton_Fairy_idle.gif)   | Idle   | First cooldown | N/A     | N/A                                                                                                | Between 13-27 ticks (11-25 at The Broken Bridge)                                                                  |
| ![Skeleton_Fairy_magic.gif](/img/tse1/Skeleton_Fairy_magic.gif) | Magic  | Sizzle Shots   | Magical | <li>3 x 3</li><li>Clamps at 1 x 3</li>                                                             | <li>59 ticks at The Misty Marshes</li><li>62 ticks at Arachnid's Grove</li><li>3/4 chance to use this attack</li> |
| ![Skeleton_Fairy_magic.gif](/img/tse1/Skeleton_Fairy_magic.gif) | Debuff | Curse          | Ailment | <li>90 ticks (iterates 2 ticks instead if Party Bless is active)</li><li>Halves damage output</li> | <li>57 ticks</li><li>25% chance to use this attack</li>                                                           |

| XP                             | Gold                           | Location          | Condition                   |
| :----------------------------- | :----------------------------- | :---------------- | :-------------------------- |
| 44                             | 9                              | The Misty Marshes | Party Level is less than 16 |
| floor(44 / (Party Level - 14)) | floor(9 / (Party Level - 14))  | The Misty Marshes | Party Level is less than 21 |
| 44                             | 10                             | Arachnid's Grove  | Party Level is less than 18 |
| floor(44 / (Party Level - 16)) | floor(10 / (Party Level - 16)) | Arachnid's Grove  | Party Level is less than 23 |
| 5                              | 50                             | The Broken Bridge | N/A                         |

| XP  | Gold | Location          | Condition         |
| :-- | :--- | :---------------- | :---------------- |
| 22  | 4    | The Misty Marshes | Party Level is 16 |
| 14  | 3    | The Misty Marshes | Party Level is 17 |
| 11  | 2    | The Misty Marshes | Party Level is 18 |
| 8   | 2    | The Misty Marshes | Party Level is 19 |
| 7   | 1    | The Misty Marshes | Party Level is 20 |
| 6   | 1    | The Misty Marshes | Party Level is 21 |
| 22  | 5    | Arachnid's Grove  | Party Level is 18 |
| 14  | 3    | Arachnid's Grove  | Party Level is 19 |
| 11  | 2    | Arachnid's Grove  | Party Level is 20 |
| 8   | 2    | Arachnid's Grove  | Party Level is 21 |
| 7   | 1    | Arachnid's Grove  | Party Level is 22 |
| 6   | 1    | Arachnid's Grove  | Party Level is 23 |

#### Eye Spider (L)

| HP  | Location          |
| :-- | :---------------- |
| 605 | Arachnid's Grove  |
| 725 | The Broken Bridge |

| Animation                                               | Kind           | Attack         | Type                                | Damage                                      | Cooldown                                                                    |
| :------------------------------------------------------ | :------------- | :------------- | :---------------------------------- | :------------------------------------------ | --------------------------------------------------------------------------- |
| ![Eye_Spider_idle.gif](/img/tse1/Eye_Spider_idle.gif)   | Idle           | First cooldown | N/A                                 | N/A                                         | Between 12-20 ticks                                                         |
| ![Eye_Spider_range.gif](/img/tse1/Eye_Spider_range.gif) | Lobbed         | Venom          | Physical                            | 10                                          | <li>58 ticks at Arachnid's Grove</li><li>51 ticks at The Broken Bridge</li> |
| ![Eye_Spider_range.gif](/img/tse1/Eye_Spider_range.gif) | Stun<br>Lobbed | Web Goo        | Ailment<br>Physical against shields | <li>45 ticks</li><li>9 against shields</li> | <li>61 ticks at Arachnid's Grove</li><li>59 ticks at The Broken Bridge</li> |

| XP                             | Gold                           | Location          | Condition                   |
| :----------------------------- | :----------------------------- | :---------------- | :-------------------------- |
| 58                             | 14                             | Arachnid's Grove  | Party Level is less than 18 |
| floor(58 / (Party Level - 16)) | floor(14 / (Party Level - 16)) | Arachnid's Grove  | Party Level is less than 23 |
| 58                             | 14                             | The Broken Bridge | Party Level is less than 21 |
| floor(58 / (Party Level - 19)) | floor(14 / (Party Level - 19)) | The Broken Bridge | Party Level is less than 27 |

| XP  | Gold | Location          | Condition         |
| :-- | :--- | :---------------- | :---------------- |
| 29  | 7    | Arachnid's Grove  | Party Level is 18 |
| 19  | 4    | Arachnid's Grove  | Party Level is 19 |
| 14  | 3    | Arachnid's Grove  | Party Level is 20 |
| 11  | 2    | Arachnid's Grove  | Party Level is 21 |
| 9   | 2    | Arachnid's Grove  | Party Level is 22 |
| 8   | 2    | Arachnid's Grove  | Party Level is 23 |
| 29  | 7    | The Broken Bridge | Party Level is 21 |
| 19  | 4    | The Broken Bridge | Party Level is 22 |
| 14  | 3    | The Broken Bridge | Party Level is 23 |
| 11  | 2    | The Broken Bridge | Party Level is 24 |
| 9   | 2    | The Broken Bridge | Party Level is 25 |
| 8   | 2    | The Broken Bridge | Party Level is 26 |

#### Pulsating Gelatinous Ooze

HP: ∞

| Animation                                             | Kind   | Attack       | Type     | Damage                  | Cooldown                                                         |
| :---------------------------------------------------- | :----- | :----------- | :------- | :---------------------- | ---------------------------------------------------------------- |
| ![Blobble_Capture.png](/img/tse1/Blobble_Capture.png) | Status | Blob Capture | Ailment  | Disables party rotation | Reaches 70 pixels away from the leftmost character in your party |
| ![blob.gif](/img/tse1/blob.gif)                       | Melee  | Absorb       | Absolute | 200                     | It moves its X position by 1 pixel every 2 ticks                 |

#### The Abombination (L, UD)

Only if Clementas is in your party.<br>
HP: 1390

| Animation                                     | Kind  | Attack         | Type         | Damage                                        | Cooldown                                                                                       |
| :-------------------------------------------- | :---- | :------------- | :----------- | :-------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ![Abomb_idle.gif](/img/tse1/Abomb_idle.gif)   | Idle  | First cooldown | N/A          | N/A                                           | Between 10-15 ticks                                                                            |
| ![Abomb_aoe.gif](/img/tse1/Abomb_aoe.gif)     | AoE   | Poison Breath  | Absolute DoT | 7 DoT, each DoT deals 1 damage every 18 ticks | <li>53 ticks</li><li>Starts with this attack</li>                                              |
| ![Abomb_range.png](/img/tse1/Abomb_range.png) | Range | Kinetic Smash  | Physical     | <li>15</li><li>14 agaist shields</li>         | <li>41 ticks</li><li>Will use this attack 3 times before switching to AoE, then repeating</li> |
| ![Abomb_heal.gif](/img/tse1/Abomb_heal.gif)   | HoT   | Superheal      | Self         | Activates at 370HP                            | Heals 1HP every 2.4 ticks                                                                      |

| XP  | Gold | Location                | Condition                  |
| :-- | :--- | :---------------------- | :------------------------- |
| 290 | 29   | The Abombination's Lair | Clementas is in your party |

#### Snack (UD)

HP: 735

| Animation                                           | Kind   | Attack         | Type            | Damage             | Cooldown                                                                                                                                                       |
| :-------------------------------------------------- | :----- | :------------- | :-------------- | :----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Snack_idle.gif](/img/tse1/Snack_idle.gif)         | Idle   | First cooldown | N/A             | N/A                | Between 10-15 ticks                                                                                                                                            |
| ![Snack_melee.gif](/img/tse1/Snack_melee.gif)       | Melee  | Lunge          | Physical        | 15                 | <li>Between 27-29 ticks</li><li>2/3 chance to use this attack</li>                                                                                             |
| ![Snack_range.gif](/img/tse1/Snack_range.gif)       | Range  | Trident Zap    | Absolute        | 3                  | <li>Between 33-35 ticks</li><li>1/3 chance to use this</li> attack                                                                                             |
| ![Snack_peekaboo.gif](/img/tse1/Snack_peekaboo.gif) | Status | Phase Out      | Invulnerability | Becomes NX, EX, MX | <li>Will occur 180 ticks into the battle (including the 2-second delay at the beginning)</li><li>Ends on the 399th tick and resets its internal tick to 0</li> |
| ![Snack_jab.gif](/img/tse1/Snack_jab.gif)           | Melee  | Jab            | Physical        | 23                 | <li>Occurs at the 360th tick into the battle (including the 2-second delay at the beginning)</li><li>Targets character with the lowest HP </li>                |

| XP  | Gold | Location          | Condition |
| :-- | :--- | :---------------- | :-------- |
| 390 | 76   | The Broken Bridge | N/A       |

#### Capricious Imp (UD)

HP: 496

| Animation                                                       | Kind  | Attack         | Type     | Damage | Cooldown                                                           |
| :-------------------------------------------------------------- | :---- | :------------- | :------- | :----- | ------------------------------------------------------------------ |
| ![Capricious_imp_idle.gif](/img/tse1/Capricious_imp_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 10-15 ticks                                                |
| ![Capricious_imp_melee.gif](/img/tse1/Capricious_imp_melee.gif) | Melee | Lunge          | Physical | 10     | <li>Between 24-26 ticks</li><li>2/3 chance to use this attack</li> |
| ![Capricious_imp_range.gif](/img/tse1/Capricious_imp_range.gif) | Range | Trident Zap    | Absolute | 2      | <li>Between 33-35 ticks</li><li>1/3 chance to use this attack</li> |

| XP                             | Gold                           | Location           | Condition                   |
| :----------------------------- | :----------------------------- | :----------------- | :-------------------------- |
| 73                             | 11                             | The Haunted Church | Party Level is less than 21 |
| floor(73 / (Party Level - 19)) | floor(11 / (Party Level - 19)) | The Haunted Church | Party Level is less than 25 |

| XP  | Gold | Location           | Condition         |
| :-- | :--- | :----------------- | :---------------- |
| 36  | 5    | The Haunted Church | Party Level is 21 |
| 23  | 3    | The Haunted Church | Party Level is 22 |
| 18  | 2    | The Haunted Church | Party Level is 23 |
| 14  | 2    | The Haunted Church | Party Level is 24 |

#### Bogeyman

| HP  | Location           |
| :-- | :----------------- |
| 565 | The Haunted Church |
| 615 | The Broken Bridge  |

| Animation                                             | Kind   | Attack         | Type            | Damage | Cooldown                                                                                                                                                         |
| :---------------------------------------------------- | :----- | :------------- | :-------------- | :----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Bogeyman_idle.gif](/img/tse1/Bogeyman_idle.gif)     | Idle   | First cooldown | N/A             | N/A    | Between 10-15 ticks                                                                                                                                              |
| ![Bogeyman_melee.gif](/img/tse1/Bogeyman_melee.gif)   | Melee  | Lunge          | Physical        | 17     | Between 52-57 ticks                                                                                                                                              |
| ![Bogeyman_shield.gif](/img/tse1/Bogeyman_shield.gif) | Status | Phase Out      | Invulnerability | N/A    | <li>Will occur 144 ticks into the battle (including the 2-second delay at the beginning)</li><li>Ends on the 319.2nd tick and resets its internal tick to 0</li> |

| XP                             | Gold                           | Location           | Condition                   |
| :----------------------------- | :----------------------------- | :----------------- | :-------------------------- |
| 87                             | 15                             | The Haunted Church | Party Level is less than 21 |
| floor(87 / (Party Level - 19)) | floor(15 / (Party Level - 19)) | The Haunted Church | Party Level is less than 25 |
| 72                             | 25                             | The Broken Bridge  | Party Level is less than 27 |

| XP  | Gold | Location           | Condition         |
| :-- | :--- | :----------------- | :---------------- |
| 43  | 7    | The Haunted Church | Party Level is 21 |
| 29  | 5    | The Haunted Church | Party Level is 22 |
| 21  | 3    | The Haunted Church | Party Level is 23 |
| 17  | 3    | The Haunted Church | Party Level is 24 |

#### Neru the Elder Demon (L, UD)

HP: 1630

| Animation                                   | Kind   | Attack         | Type     | Damage                                                     | Cooldown                                                                                                                                                         |
| :------------------------------------------ | :----- | :------------- | :------- | :--------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Neru_idle.gif](/img/tse1/Neru_idle.gif)   | Idle   | First cooldown | N/A      | N/A                                                        | Between 16-24 ticks                                                                                                                                              |
| ![Neru_range.gif](/img/tse1/Neru_range.gif) | Lobbed | Fireball       | Physical | 15                                                         | <li>51 ticks</li><li>2/5 chance to use this attack</li>                                                                                                          |
| ![Neru_aoe.gif](/img/tse1/Neru_aoe.gif)     | AoE    | Firewall       | Physical | 6 (armour is half effective & odd numbers will round down) | <li>54 ticks</li><li>2/5 chance to use this attack </li>                                                                                                         |
| ![Neru_nuke.gif](/img/tse1/Neru_nuke.gif)   | Nuke   | Suicide Imp    | Physical | 64 (0 if you can detonate it within 4 hits)                | <li>80 ticks</li><li>1/5 chance to use this attack, then uses Lobbed or AoE attack unless HP is less than 370, in which case it will always use this attack</li> |

| XP  | Gold | Location          | Condition |
| :-- | :--- | :---------------- | :-------- |
| 998 | 14   | The Defiled Altar | N/A       |

#### Father Belfidius

HP: 365

| Animation                                               | Kind    | Attack         | Type                        | Damage                                                                                             | Cooldown                                                              |
| :------------------------------------------------------ | :------ | :------------- | :-------------------------- | :------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Belfidius_idle.png](/img/tse1/Belfidius_idle.png)     | Idle    | First cooldown | N/A                         | N/A                                                                                                | Between 11-25 ticks<br>                                               |
| ![Belfidius_bless.gif](/img/tse1/Belfidius_bless.gif)   | Heal    | Party Heal     | Party<br>(including healer) | 32                                                                                                 | <li>69 ticks</li><li>3/4 chance to use this move</li>                 |
| ![Belfidius_bless.gif](/img/tse1/Belfidius_bless.gif)   | Magical | Magic Blast    | Magical                     | 5                                                                                                  | <li>39 ticks</li><li>Will only use this move if Neru is defeated</li> |
| ![Belfidius_debuff.gif](/img/tse1/Belfidius_debuff.gif) | Debuff  | Curse          | Ailment                     | <li>90 ticks (iterates 2 ticks instead if Party Bless is active)</li><li>Halves damage output</li> | <li>75 ticks</li><li>1/4 chance to use this move</li>                 |

| XP  | Gold | Location          | Condition |
| :-- | :--- | :---------------- | :-------- |
| 100 | 75   | The Defiled Altar | N/A       |

#### Alaiyena (M-25)

HP: 552

| Animation                                                 | Kind     | Attack            | Type    | Damage                          | Cooldown                                                |
| :-------------------------------------------------------- | :------- | :---------------- | :------ | :------------------------------ | ------------------------------------------------------- |
| ![Alaiyena_idle.gif](/img/tse1/Alaiyena_idle.gif)         | Idle     | First cooldown    | N/A     | N/A                             | <li>44 ticks</li><li>Starts with Magical Swirl</li>     |
| ![Alaiyena_magic.gif](/img/tse1/Alaiyena_magic.gif)       | Magic    | Magical Swirl     | Magical | <li>11</li><li>Clamps at 3</li> | <li>80 ticks</li><li>3/7 chance to use this attack</li> |
| ![Alaiyena_aoe.gif](/img/tse1/Alaiyena_aoe.gif)           | AoE      | Magical Hell Wind | Magical | 6                               | <li>89 ticks</li><li>1/7 chance to use this attack</li> |
| ![Alaiyena_recharge.gif](/img/tse1/Alaiyena_recharge.gif) | Recharge | Recharge          | Self    | N/A                             | <li>52 ticks</li><li>3/7 chance to skip a turn </li>    |

| XP  | Gold | Location    | Condition |
| :-- | :--- | :---------- | :-------- |
| 350 | 60   | Eastern Way | N/A       |

#### Dundee (N-30, E-30)

HP: 580 [has a HoT of 1HP every 16 ticks]

| Animation                                             | Kind     | Attack         | Type     | Damage | Cooldown                                                           |
| :---------------------------------------------------- | :------- | :------------- | :------- | :----- | ------------------------------------------------------------------ |
| ![Dundee_idle.gif](/img/tse1/Dundee_idle.gif)         | Idle     | First cooldown | N/A      | N/A    | <li>26 ticks</li><li>Starts with Speed Fire</li>                   |
| ![Dundee_range.gif](/img/tse1/Dundee_range.gif)       | Range    | Speed Fire     | Physical | 11 x 3 | <li>Between 73-78 ticks</li><li>1/2 chance to use this attack</li> |
| ![Dundee_heal.gif](/img/tse1/Dundee_heal.gif)         | Heal     | Recover        | Self     | 46     | <li>71 ticks</li><li>1/4 chance to use this move</li>              |
| ![Dundee_recharge.gif](/img/tse1/Dundee_recharge.gif) | Recharge | Recharge       | Self     | N/A    | <li>Between 47-49 ticks</li><li>1/4 chance to skip a turn</li>     |

| XP  | Gold | Location    | Condition |
| :-- | :--- | :---------- | :-------- |
| 370 | 60   | Eastern Way | N/A       |

#### Sampson (N-10, E-10)

HP: 655

| Animation                                               | Kind           | Attack         | Type               | Damage                                  | Cooldown                                                       |
| :------------------------------------------------------ | :------------- | :------------- | :----------------- | :-------------------------------------- | -------------------------------------------------------------- |
| ![Sampson_idle.gif](/img/tse1/Sampson_idle.gif)         | Idle           | First cooldown | N/A                | N/A                                     | <li>Between 14-19 ticks</li><li>Starts with Cursed Bullet</li> |
| ![Sampson_range.gif](/img/tse1/Sampson_range.gif)       | Range & Debuff | Cursed Bullet  | Physical & Ailment | 15, curses impacted player for 90 ticks | <li>119 ticks</li><li>3/4 chance to use this attack</li>       |
| ![Sampson_recharge.gif](/img/tse1/Sampson_recharge.gif) | Recharge       | Recharge       | Self               | N/A                                     | <li>72 ticks</li><li>1/4 chance to skip a turn </li>           |

| XP  | Gold | Location    | Condition |
| :-- | :--- | :---------- | :-------- |
| 330 | 50   | Eastern Way | N/A       |

### WORLD 3: THE MANGO REPUBLIC

#### Dark Assassin

HP: 700

| Animation                                                     | Kind  | Attack         | Type     | Damage                                       | Cooldown                                                                                                                      |
| :------------------------------------------------------------ | :---- | :------------- | :------- | :------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![Evil_Assassin_idle.gif](/img/tse1/Evil_Assassin_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                          | <li>Between 10-15 ticks</li><li>Starts with Lunge</li>                                                                        |
| ![Evil_Assassin_melee.gif](/img/tse1/Evil_Assassin_melee.gif) | Melee | Lunge          | Physical | <li>14</li><li>17 against shields</li>       | <li>39 ticks</li><li>2/3 chance to use this attack </li>                                                                      |
| ![Evil_Assassin_range.gif](/img/tse1/Evil_Assassin_range.gif) | Range | Shuriken Storm | Physical | 10 x 8 unless disrupted by a character's hit | <li>55 ticks</li><li>Throws a shuriken every 7.2 ticks, some have a chance to miss</li><li>1/3 chance to use this attack</li> |

| XP  | Gold | Location                            | Condition |
| :-- | :--- | :---------------------------------- | :-------- |
| 100 | 22   | The Republican Government Buildling | N/A       |

#### Black Ooze (NX\*, L)

\*All normal attacks bugged at The Inky Pit and will deal damage as if it wasn't immune, though related bonuses & penalties (e.g., Sharpshoot's 50%+, Power Shot & Rock Rain's -33%) don't work
\*The Black Ooze Pulp's NX that appears at The Inky Pit works as intended except for Rock Rain

| HP   | Location                           |
| :--- | :--------------------------------- |
| 880  | The Republican Government Building |
| 1085 | The Inky Pit                       |

| Animation                                             | Kind           | Attack         | Type     | Damage                                                                                                                                  | Cooldown                                                                                                                       |
| :---------------------------------------------------- | :------------- | :------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ![blackooze_idle.gif](/img/tse1/blackooze_idle.gif)   | Idle           | First cooldown | N/A      | N/A                                                                                                                                     | Between 10-15 ticks                                                                                                            |
| ![blackooze_range.gif](/img/tse1/blackooze_range.gif) | Range Indirect | Hand Attack    | Physical | <li>14 in The Republican Government Building</li><li>19 at The Inky Pit</li>                                                            | <li>78 ticks in The Republican Government Building</li><li>73 ticks at The Inky Pit</li><li>3/4 chance to use this attack</li> |
| ![Baby_Ooze.gif](/img/tse1/Baby_Ooze.gif)             | Defence        | Spawn Ooze     | Shield   | <li>110HP in The Republican Government Building</li><li>130HP at The Inky Pit</li><li>Spawns between 20-47 pixels away from itself</li> | <li>101 ticks in The Republican Government Building</li><li>89 ticks at The Inky Pit</li><li>1/4 chance to use this move</li>  |

| XP  | Gold | Location                           | Condition |
| :-- | :--- | :--------------------------------- | :-------- |
| 107 | 10   | The Republican Government Building | N/A       |
| 147 | 11   | The Inky Pit                       | N/A       |

#### Crossbone

| HP   | Location                           |
| :--- | :--------------------------------- |
| 1830 | The Republican Government Building |
| 1990 | The Inky Pit                       |

| Animation                                             | Kind           | Attack         | Type     | Damage                                                                                                                           | Cooldown                                                                                                                                                                                                |
| :---------------------------------------------------- | :------------- | :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Crossbone_idle.gif](/img/tse1/Crossbone_idle.gif)   | Idle           | First cooldown | N/A      | N/A                                                                                                                              | Between 10-15 ticks                                                                                                                                                                                     |
| ![Crossbone_melee.gif](/img/tse1/Crossbone_melee.gif) | Melee          | Lunge          | Physical | <li>21 in The Republican Government Building</li><li>18 at The Inky Pit</li>                                                     | <li>38 ticks in The Republican Government Building</li><li>40 ticks at The Inky Pit</li><li>3/7 chance to use this attack</li><li>Will use this attack first in The Republican Government Building</li> |
| ![Crossbone_range.gif](/img/tse1/Crossbone_range.gif) | Range          | Shuriken Storm | Physical | <li>14 x 8 in The Republican Government Building</li><li>12 x 8 at The Inky Pit</li><li>Can be disrupted</li>                    | <li>51 ticks</li><li>2/7 chance to use this attack</li> <li>Some will miss</li>                                                                                                                         |
| ![Crossbone_leap.gif](/img/tse1/Crossbone_leap.gif)   | Melee Targeted | Leap Attack    | Physical | <li>30 in The Republican Government Building</li><li>29 at The Inky Pit</li><li>Always targets character with the lowest HP</li> | <li>53 ticks</li><li>2/7 chance to use this attack</li><li>Will use this attack first at The Inky Pit</li>                                                                                              |
| ![CircleStar.gif](/img/tse1/CircleStar.gif)           | Range          | Circle Star    | Physical | 30                                                                                                                               | Will only activate within The Inky Pit at the following HPs: 1440, 950, 660                                                                                                                             |

| XP   | Gold | Location                           | Condition |
| :--- | :--- | :--------------------------------- | :-------- |
| 1390 | 65   | The Republican Government Building | N/A       |
| 2976 | 867  | The Inky Pit                       | N/A       |

#### Scissor Crab (N-23, E-23, L)

HP: 827

| Animation                                                   | Kind  | Attack         | Type     | Damage | Cooldown            |
| :---------------------------------------------------------- | :---- | :------------- | :------- | :----- | ------------------- |
| ![Scissor_Crab_idle.gif](/img/tse1/Scissor_Crab_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 9-20 ticks  |
| ![Scissor_Crab_melee.gif](/img/tse1/Scissor_Crab_melee.gif) | Melee | Lunge          | Physical | 17     | Between 67-70 ticks |

| XP                              | Gold                           | Location          | Condition                   |
| :------------------------------ | :----------------------------- | :---------------- | :-------------------------- |
| 108                             | 19                             | Blue Sapphire Bay | Party level is less than 25 |
| floor(108 / (Party Level - 23)) | floor(19 / (Party Level - 23)) | Blue Sapphire Bay | Party level is less than 30 |

| XP  | Gold | Location          | Condition         |
| :-- | :--- | :---------------- | :---------------- |
| 54  | 9    | Blue Sapphire Bay | Party Level is 25 |
| 36  | 6    | Blue Sapphire Bay | Party Level is 26 |
| 27  | 4    | Blue Sapphire Bay | Party Level is 27 |
| 21  | 3    | Blue Sapphire Bay | Party Level is 28 |
| 18  | 3    | Blue Sapphire Bay | Party Level is 29 |

#### Giant Clam (L)

HP: 925

| Animation                                                 | Kind    | Attack         | Type            | Damage                            | Cooldown                                                           |
| :-------------------------------------------------------- | :------ | :------------- | :-------------- | :-------------------------------- | ------------------------------------------------------------------ |
| ![Giant_Clam_idle.gif](/img/tse1/Giant_Clam_idle.gif)     | Idle    | First cooldown | N/A             | N/A                               | Between 10-15 ticks                                                |
| ![Pearl.png](/img/tse1/Pearl.png)                         | Lobbed  | Pearl Attack   | Physical        | <li>16</li><li>18 to shields</li> | <li>Between 54-57 ticks</li><li>4/5 chance to use this attack</li> |
| ![Giant_Clam_shield.gif](/img/tse1/Giant_Clam_shield.gif) | Defence | Clam Up        | Invulnerability | Lasts for 192 ticks               | <li>1/5 to use this move, does not use twice in a row</li>         |

| XP                              | Gold                           | Location          | Condition                   |
| :------------------------------ | :----------------------------- | :---------------- | :-------------------------- |
| 105                             | 16                             | Blue Sapphire Bay | Party level is less than 25 |
| floor(105 / (Party Level - 23)) | floor(16 / (Party Level - 23)) | Blue Sapphire Bay | Party level is less than 30 |

| XP  | Gold | Location          | Condition         |
| :-- | :--- | :---------------- | :---------------- |
| 52  | 8    | Blue Sapphire Bay | Party Level is 25 |
| 35  | 5    | Blue Sapphire Bay | Party Level is 26 |
| 26  | 4    | Blue Sapphire Bay | Party Level is 27 |
| 21  | 3    | Blue Sapphire Bay | Party Level is 28 |
| 17  | 2    | Blue Sapphire Bay | Party Level is 29 |

#### Sea Mare (MX)

HP: 458

| Animation                                                   | Kind           | Attack         | Type    | Damage                             | Cooldown                                                                    |
| :---------------------------------------------------------- | :------------- | :------------- | :------ | :--------------------------------- | --------------------------------------------------------------------------- |
| ![Seamare_idle.gif](/img/tse1/Seamare_idle.gif)             | Idle           | First cooldown | N/A     | N/A                                | <li>Between 33-38 ticks</li><li>Starts with Bubble Blast</li>               |
| ![Seamare_magic.png](/img/tse1/Seamare_magic.png)           | Magic          | Bubble Blast   | Magical | 6 x 4                              | <li>62 ticks</li><li>2/3 chance to use this attack, will start with it</li> |
| ![Seamare_backstrike.png](/img/tse1/Seamare_backstrike.png) | Magic Indirect | Waterfall      | Magical | 22, always hits the back character | <li>67 ticks</li><li>1/3 chance to use this attack</li>                     |

| XP                              | Gold                           | Location          | Condition                   |
| :------------------------------ | :----------------------------- | :---------------- | :-------------------------- |
| 112                             | 27                             | Blue Sapphire Bay | Party level is less than 25 |
| floor(112 / (Party Level - 23)) | floor(27 / (Party Level - 23)) | Blue Sapphire Bay | Party level is less than 30 |

| XP  | Gold | Location          | Condition         |
| :-- | :--- | :---------------- | :---------------- |
| 56  | 13   | Blue Sapphire Bay | Party Level is 25 |
| 37  | 9    | Blue Sapphire Bay | Party Level is 26 |
| 28  | 6    | Blue Sapphire Bay | Party Level is 27 |
| 22  | 5    | Blue Sapphire Bay | Party Level is 28 |
| 18  | 4    | Blue Sapphire Bay | Party Level is 29 |

#### Sham Tikki Brute (L)

| HP   | Location                                          |
| :--- | :------------------------------------------------ |
| 1090 | Jungle Tracks, The Leafy Underbrush, Kaikin Gorge |

| Animation                                                       | Kind  | Attack         | Type     | Damage | Cooldown                                                                                                                                           |
| :-------------------------------------------------------------- | :---- | :------------- | :------- | :----- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![ShamTikkiBrute_idle.gif](/img/tse1/ShamTikkiBrute_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | <li>Between 14-21 ticks</li><li>Starts with Lunge</li>                                                                                             |
| ![ShamTikkiBrute_melee.gif](/img/tse1/ShamTikkiBrute_melee.gif) | Melee | Lunge          | Physical | 17     | <li>63 ticks at Jungle Tracks</li><li>60 at The Leafy Underbrush & Kaikin Gorge</li><li>3/4 chance to use this attack, starts with it</li>         |
| ![ShamTikkiBrute_aoe.gif](/img/tse1/ShamTikkiBrute_aoe.gif)     | AoE   | Ground Punch   | Absolute | 4      | <li>89 ticks at Jungle Tracks</li><li>75 ticks at The Leafy Underbrush</li><li>77 ticks at Kaikin Gorge</li><li>1/4 chance to use this attack</li> |

| XP                              | Gold                           | Location             | Condition                   |
| :------------------------------ | :----------------------------- | :------------------- | :-------------------------- |
| 139                             | 24                             | Jungle Tracks        | Party Level is less than 27 |
| floor(139 / (Party Level - 25)) | floor(24 / (Party Level - 25)) | Jungle Tracks        | Party level is less than 32 |
| 145                             | 24                             | The Leafy Underbrush | Party level is less than 29 |
| floor(145 / (Party Level - 27)) | floor(24 / (Party Level - 27)) | The Leafy Underbrush | Party level is less than 35 |
| 145                             | 30                             | Kaikin Gorge         | N/A                         |

| XP  | Gold | Location             | Condition         |
| :-- | :--- | :------------------- | :---------------- |
| 69  | 12   | Jungle Tracks        | Party level is 27 |
| 46  | 8    | Jungle Tracks        | Party level is 28 |
| 34  | 6    | Jungle Tracks        | Party level is 29 |
| 27  | 4    | Jungle Tracks        | Party level is 30 |
| 23  | 4    | Jungle Tracks        | Party level is 31 |
| 72  | 12   | The Leafy Underbrush | Party level is 29 |
| 48  | 8    | The Leafy Underbrush | Party level is 30 |
| 36  | 6    | The Leafy Underbrush | Party level is 31 |
| 29  | 4    | The Leafy Underbrush | Party level is 32 |
| 24  | 4    | The Leafy Underbrush | Party level is 33 |
| 20  | 3    | The Leafy Underbrush | Party level is 34 |

#### Sham Tikki Warrior

| HP  | Location             |
| :-- | :------------------- |
| 860 | Jungle Tracks        |
| 710 | The Leafy Underbrush |
| 830 | Kaikin Gorge         |

| Animation                                                           | Kind      | Attack          | Type     | Damage                                                                                                                                      | Cooldown                                                                                                                                                                   |
| :------------------------------------------------------------------ | :-------- | :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![ShamTikkiWarrior_idle.gif](/img/tse1/ShamTikkiWarrior_idle.gif)   | Idle      | First cooldown  | N/A      | N/A                                                                                                                                         | Between 10-15 ticks                                                                                                                                                        |
| ![ShamTikkiWarrior_range.gif](/img/tse1/ShamTikkiWarrior_range.gif) | Range DoT | Blowpipe Attack | Physical | <li>12 (13 to shields), 8 DoT at Jungle Tracks</li><li>10, 7 DoT</li><li>11, 7 DoT at Kaikin Gorge</li><li>Each DoT lasts for 16 ticks</li> | <li>Between 40-43 ticks at Jungle Tracks</li><li>42 ticks at The Leafy Underbrush if facing left, between 52-56 otherwise</li><li>Between 50-54 ticks at Kaikin Gorge</li> |

| XP                              | Gold                           | Location             | Condition                   |
| :------------------------------ | :----------------------------- | :------------------- | :-------------------------- |
| 112                             | 19                             | Jungle Tracks        | Party Level is less than 27 |
| floor(112 / (Party Level - 25)) | floor(19 / (Party Level - 25)) | Jungle Tracks        | Party level is less than 32 |
| 93                              | 19                             | The Leafy Underbrush | Party level is less than 29 |
| floor(93 / (Party Level - 27))  | floor(19 / (Party Level - 27)) | The Leafy Underbrush | Party level is less than 35 |
| 112                             | 22                             | Kaikin Gorge         | N/A                         |

| XP  | Gold | Location             | Condition         |
| :-- | :--- | :------------------- | :---------------- |
| 56  | 9    | Jungle Tracks        | Party level is 27 |
| 37  | 6    | Jungle Tracks        | Party level is 28 |
| 28  | 4    | Jungle Tracks        | Party level is 29 |
| 22  | 3    | Jungle Tracks        | Party level is 30 |
| 18  | 3    | Jungle Tracks        | Party level is 31 |
| 46  | 9    | The Leafy Underbrush | Party level is 29 |
| 31  | 6    | The Leafy Underbrush | Party level is 30 |
| 23  | 4    | The Leafy Underbrush | Party level is 31 |
| 18  | 3    | The Leafy Underbrush | Party level is 32 |
| 15  | 3    | The Leafy Underbrush | Party level is 33 |
| 13  | 2    | The Leafy Underbrush | Party level is 34 |

#### Sham Tikki Shaman

| HP  | Location             |
| :-- | :------------------- |
| 650 | Jungle Tracks        |
| 735 | The Leafy Underbrush |

| Animation                                                                   | Kind    | Attack         | Type            | Damage                                                               | Cooldown                                                                                                                                |
| :-------------------------------------------------------------------------- | :------ | :------------- | :-------------- | :------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ![ShamTikkiShaman_idle.gif](/img/tse1/ShamTikkiShaman_idle.gif)             | Idle    | First cooldown | N/A             | N/A                                                                  | <li>Between 30-35 ticks at Jungle Tracks</li><li>Between 38-43 ticks at The Leafy Underbrush</li><li>Starts with Chain Magic</li>       |
| ![ShamTikkiShaman_chainmagic.png](/img/tse1/ShamTikkiShaman_chainmagic.png) | Magic   | Chain Magic    | Magical         | 8 x 3                                                                | <li>Between 63-67 ticks at Jungle Tracks</li><li>Between 62-66 ticks at The Leafy Underbrush</li><li>1/2 chance to use this attack</li> |
| ![ShamTikkiShaman_resurrect.gif](/img/tse1/ShamTikkiShaman_resurrect.gif)   | Defence | Magic Shield 2 | Invulnerability | Puts a shield of EX & MX on itself or an ally and lasts for 70 ticks | <li>Between 62-64 ticks at Jungle Tracks</li><li>Between 44-46 ticks at The Leafy Underbrush</li><li>1/2 chance to use this move</li>   |
| ![ShamTikkiShaman_resurrect.gif](/img/tse1/ShamTikkiShaman_resurrect.gif)   | Status  | Resurrect      | Other           | Will always resurrect any fallen Sham Tikki first                    | <li>Between 84-88 ticks at Jungle Tracks</li><li>Between 44-48 ticks at The Leafy Underbrush</li>                                       |

| XP                              | Gold                           | Location             | Condition                   |
| :------------------------------ | :----------------------------- | :------------------- | :-------------------------- |
| 161                             | 34                             | Jungle Tracks        | Party Level is less than 27 |
| floor(161 / (Party Level - 25)) | floor(34 / (Party Level - 25)) | Jungle Tracks        | Party level is less than 32 |
| 134                             | 34                             | The Leafy Underbrush | Party level is less than 29 |
| floor(134 / (Party Level - 27)) | floor(34 / (Party Level - 27)) | The Leafy Underbrush | Party level is less than 35 |

| XP  | Gold | Location             | Condition         |
| :-- | :--- | :------------------- | :---------------- |
| 80  | 17   | Jungle Tracks        | Party level is 27 |
| 53  | 11   | Jungle Tracks        | Party level is 28 |
| 40  | 8    | Jungle Tracks        | Party level is 29 |
| 32  | 6    | Jungle Tracks        | Party level is 30 |
| 26  | 5    | Jungle Tracks        | Party level is 31 |
| 67  | 17   | The Leafy Underbrush | Party level is 29 |
| 44  | 11   | The Leafy Underbrush | Party level is 30 |
| 33  | 8    | The Leafy Underbrush | Party level is 31 |
| 26  | 6    | The Leafy Underbrush | Party level is 32 |
| 22  | 5    | The Leafy Underbrush | Party level is 33 |
| 19  | 4    | The Leafy Underbrush | Party level is 34 |

#### Sham Tikki Zombie (UD)

| HP  | Location             |
| :-- | :------------------- |
| 445 | Jungle Tracks        |
| 550 | The Leafy Underbrush |
| 490 | Kaikin Gorge         |

| Animation                                                         | Kind  | Attack         | Type     | Damage                                                                         | Cooldown                                                                                   |
| :---------------------------------------------------------------- | :---- | :------------- | :------- | :----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ![ShamTikkiZombie_idle.gif](/img/tse1/ShamTikkiZombie_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                                                            | Between 10-15 ticks                                                                        |
| ![ShamTikkiZombie_melee.gif](/img/tse1/ShamTikkiZombie_melee.gif) | Melee | Lunge          | Physical | <li>13 at Jungle Tracks & Kaikin Gorge</li><li>12 at The Leafy Underbrush</li> | <li>47 ticks at Jungle Tracks & Kaikin Gorge</li><li>57 ticks at The Leafy Underbrush</li> |

| XP                             | Gold                          | Location             | Condition                    |
| :----------------------------- | :---------------------------- | :------------------- | :--------------------------- |
| 78                             | 8                             | Jungle Tracks        | Party Level is less than 27  |
| floor(78 / (Party Level - 25)) | floor(8 / (Party Level - 25)) | Jungle Tracks        | Party level is 27 or greater |
| 78                             | 8                             | The Leafy Underbrush | Party level is less than 29  |
| floor(78 / (Party Level - 27)) | floor(8 / (Party Level - 27)) | The Leafy Underbrush | Party level is less than 35  |
| 78                             | 8                             | Kaikin Gorge         | N/A                          |

| XP  | Gold | Location             | Condition         |
| :-- | :--- | :------------------- | :---------------- |
| 39  | 4    | The Leafy Underbrush | Party level is 29 |
| 26  | 2    | The Leafy Underbrush | Party level is 30 |
| 19  | 2    | The Leafy Underbrush | Party level is 31 |
| 15  | 1    | The Leafy Underbrush | Party level is 32 |
| 13  | 1    | The Leafy Underbrush | Party level is 33 |
| 11  | 1    | The Leafy Underbrush | Party level is 34 |

#### Thorny Mantrap (N+10, E+10)

| HP   | Location             |
| :--- | :------------------- |
| 1155 | Jungle Tracks        |
| 1205 | The Leafy Underbrush |

| XP  | Gold | Location             | Condition         |
| :-- | :--- | :------------------- | :---------------- |
| 88  | 16   | Jungle Tracks        | Party level is 27 |
| 58  | 10   | Jungle Tracks        | Party level is 28 |
| 44  | 8    | Jungle Tracks        | Party level is 29 |
| 35  | 6    | Jungle Tracks        | Party level is 30 |
| 29  | 5    | Jungle Tracks        | Party level is 31 |
| 88  | 16   | The Leafy Underbrush | Party level is 29 |
| 58  | 10   | The Leafy Underbrush | Party level is 30 |
| 44  | 8    | The Leafy Underbrush | Party level is 31 |
| 35  | 6    | The Leafy Underbrush | Party level is 32 |
| 29  | 5    | The Leafy Underbrush | Party level is 33 |
| 25  | 4    | The Leafy Underbrush | Party level is 34 |

| Animation                                                         | Kind           | Attack         | Type     | Damage                                                                            | Cooldown                                                                                                                                                     |
| :---------------------------------------------------------------- | :------------- | :------------- | :------- | :-------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Thorny_Mantrap_idle.gif](/img/tse1/Thorny_Mantrap_idle.gif)     | Idle           | First cooldown | N/A      | N/A                                                                               | <li>Between 10-15 ticks</li><li>Starts with Spores</li>                                                                                                      |
| ![Thorny_Mantrap_lobbed.png](/img/tse1/Thorny_Mantrap_lobbed.png) | Lobbed         | Spores         | Physical | 10 x 4                                                                            | <li>Between 102-107 ticks at Jungle Tracks</li><li>Between 89-94 ticks at The Leafy Underbrush</li><li>Will use this attack twice before going to Vines</li> |
| ![Thorny_Mantrap_range.gif](/img/tse1/Thorny_Mantrap_range.gif)   | Range Indirect | Vines          | Absolute | <li>3 at Jungle Tracks</li><li>4 at The Leafy Underbrush</li><li>Saps 1 mana</li> | <li>Between 63-65 tick at Jungle Tracks</li><li>Between 58-60 at The Leafy Underbrush</li> <li>Goes back to using Spores twice after using this attack</li>  |

| XP                              | Gold                           | Location             | Condition                   |
| :------------------------------ | :----------------------------- | :------------------- | :-------------------------- |
| 176                             | 32                             | Jungle Tracks        | Party Level is less than 27 |
| floor(176 / (Party Level - 25)) | floor(32 / (Party Level - 25)) | Jungle Tracks        | Party level is less than 32 |
| 176                             | 32                             | The Leafy Underbrush | Party level is less than 29 |
| floor(176 / (Party Level - 27)) | floor(32 / (Party Level - 27)) | The Leafy Underbrush | Party level is less than 35 |

#### Jungle Spirit (NX, UD)

HP: 555

| Animation                                   | Kind  | Attack         | Type     | Damage             | Cooldown            |
| :------------------------------------------ | :---- | :------------- | :------- | :----------------- | ------------------- |
| ![Wisp_idle.gif](/img/tse1/Wisp_idle.gif)   | Idle  | First cooldown | N/A      | N/A                | Between 28-33 ticks |
| ![Wisp_melee.gif](/img/tse1/Wisp_melee.gif) | Melee | Lunge          | Physical | 23 (24 to shields) | Between 53-55 ticks |

| XP                              | Gold                           | Location             | Condition                   |
| :------------------------------ | :----------------------------- | :------------------- | :-------------------------- |
| 196                             | 37                             | The Leafy Underbrush | Party level is less than 29 |
| floor(196 / (Party Level - 27)) | floor(37 / (Party Level - 27)) | The Leafy Underbrush | Party level is less than 35 |

| XP  | Gold | Location             | Condition         |
| :-- | :--- | :------------------- | :---------------- |
| 98  | 18   | The Leafy Underbrush | Party level is 29 |
| 65  | 12   | The Leafy Underbrush | Party level is 30 |
| 49  | 9    | The Leafy Underbrush | Party level is 31 |
| 39  | 7    | The Leafy Underbrush | Party level is 32 |
| 32  | 6    | The Leafy Underbrush | Party level is 33 |
| 28  | 5    | The Leafy Underbrush | Party level is 34 |

#### Gigliana (armour oscillates between -20 and +20 for N and E, L)

| HP   | Phase |
| :--- | :---- |
| 6905 | 1     |
| 5525 | 2     |
| 3805 | 3     |
| 2225 | 4     |

The formula for the oscillation is `20 x Sin(DEGREE)` where `DEGREE` iterates from 0 to 359 every 1.2 ticks

| Animation                                                                                                                                                                         | Kind      | Attack         | Type     | Damage                                                         | Cooldown                                                            |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- | :------------- | :------- | :------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![Gigliana_idle.gif](/img/tse1/Gigliana_idle.gif)                                                                                                                                 | Idle      | First cooldown | N/A      | N/A                                                            | <li>Between 21-26 ticks</li><li>Starts with Spores</li>             |
| ![Gigliana_pollen.gif](/img/tse1/Gigliana_pollen.gif)                                                                                                                             | Lobbed    | Spores         | Physical | 11 x 4                                                         | <li>64 ticks</li><li>2/5 chance to use this attack</li>             |
| ![Gigliana_spore.gif](/img/tse1/Gigliana_spore.gif)                                                                                                                               | Range DoT | Sycamore       | Physical | 20 (23 to shields), 8 DoT, each DoT lasts for 8 ticks          | <li>71 ticks</li><li>2/5 chance to use this attack </li>            |
| ![Gigliana_vines.png](/img/tse1/Gigliana_vines.png)                                                                                                                               | Status    | Vines          | Ailment  | Disables party rotation for 86 ticks (permanent if on Phase 4) | <li>44 ticks</li><li>1/5 chance to use this attack </li>            |
| ![Gigliana_Flower1.gif](/img/tse1/Gigliana_Flower1.gif)<br>![Gigliana_Flower2.gif](/img/tse1/Gigliana_Flower2.gif)<br>![Gigliana_Flower2.gif](/img/tse1/Gigliana_Flower3.gif)<br> | AoE       | Flower Rain    | Absolute | 1 x 3 and saps 1 mana each character                           | <li>32 ticks</li><li>Will always use this attack every 5 turns</li> |

| XP   | Gold | Location          | Condition |
| :--- | :--- | :---------------- | :-------- |
| 2460 | 415  | Gigliana's Border | N/A       |

### WORLD 4: THE MYSTIC DUNES

#### Mad Dog Davis (N-10, E-10, M-25)

Only if Samuel is in your party. 1-on-1 duel.<br>
HP: 910

| Animation                                           | Kind    | Attack         | Type     | Damage                   | Cooldown                                                                                                                                               |
| :-------------------------------------------------- | :------ | :------------- | :------- | :----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![MadDog_idle.gif](/img/tse1/MadDog_idle.gif)       | Idle    | First cooldown | N/A      | N/A                      | <li>Between 10-15 ticks</li><li>Starts with Pistol Attack</li>                                                                                         |
| ![MadDog_range.gif](/img/tse1/MadDog_range.gif)     | Range   | Pistol Attack  | Physical | 22                       | <li>43 ticks</li><li>1/2 chance to use this attack</li>                                                                                                |
| ![MadDog_shield.png](/img/tse1/MadDog_shield.png)   | Defence | Shield         | Self     | Becomes NX for 101 ticks | <li>101 ticks</li><li>1/3 chance to use this move</li>                                                                                                 |
| ![MadDog_bazooka.gif](/img/tse1/MadDog_bazooka.gif) | Range   | Bazooka        | Physical | 29                       | <li>61 ticks</li><li>1/6 chance to use this attack</li><li>Will guarantee to shoot one rocket at 520HP</li><li>Will always shoot rockets at 170HP</li> |

| XP  | Gold | Location | Condition               |
| :-- | :--- | :------- | :---------------------- |
| 400 | 153  | Saline   | Samuel is in your party |

#### Sand Construct (NX, EX, L)

HP: 1480

| Animation                                                     | Kind  | Attack         | Type     | Damage                         | Cooldown            |
| :------------------------------------------------------------ | :---- | :------------- | :------- | :----------------------------- | ------------------- |
| ![SandConstruct_idle.gif](/img/tse1/SandConstruct_idle.gif)   | Idle  | First cooldown | N/A      | N/A                            | Between 10-15 ticks |
| ![SandConstruct_melee.gif](/img/tse1/SandConstruct_melee.gif) | Melee | Lunge          | Physical | 24 (26 if Granael is defeated) | 73 ticks            |

| XP                              | Gold                           | Location                                               | Condition                   |
| :------------------------------ | :----------------------------- | :----------------------------------------------------- | :-------------------------- |
| 276                             | 61                             | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 37 |
| floor(276 / (Party Level - 34)) | floor(61 / (Party Level - 35)) | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 42 |

| XP  | Gold | Location                                               | Condition         |
| :-- | :--- | :----------------------------------------------------- | :---------------- |
| 92  | 30   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 37 |
| 69  | 20   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 38 |
| 55  | 15   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 39 |
| 46  | 12   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 40 |
| 39  | 10   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 41 |

#### Dune Wraith (UD\*)

\*Dune Wraiths receive double damage against Silver Bullets instead of 66% extra
HP: 1205

| Animation                                               | Kind    | Attack         | Type            | Damage                        | Cooldown                                                                                                                                                       |
| :------------------------------------------------------ | :------ | :------------- | :-------------- | :---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![DuneWraith_idle.gif](/img/tse1/DuneWraith_idle.gif)   | Idle    | First cooldown | N/A             | N/A                           | Between 10-15 ticks                                                                                                                                            |
| ![DuneWraith_melee.gif](/img/tse1/DuneWraith_melee.gif) | Melee   | Lunge          | Physical        | 29                            | <li>62 ticks</li><li>Will only use this attack while phased in</li>                                                                                            |
| ![DuneWraith_idle.gif](/img/tse1/DuneWraith_idle.gif)   | Defence | Phase Out      | Invulnerability | Becomes NX, EX, MX            | <li>Will occur 204 ticks into the battle (including the 2-second delay at the beginning)</li><li>Ends on the 390th tick and resets its internal tick to 0</li> |
| ![DuneWraith_range.png](/img/tse1/DuneWraith_range.png) | Range   | Drain Attack   | Absolute        | 9 (11 if Granael is defeated) | <li>51 ticks</li><li>Will only use this attack while phased out</li><li>Can still be stunned via Tangleweb or if Lasooed prior to phasing out</li>             |

| XP                              | Gold                           | Location                                               | Condition                   |
| :------------------------------ | :----------------------------- | :----------------------------------------------------- | :-------------------------- |
| 262                             | 69                             | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 37 |
| floor(262 / (Party Level - 35)) | floor(69 / (Party Level - 35)) | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 42 |

| XP  | Gold | Location                                               | Condition         |
| :-- | :--- | :----------------------------------------------------- | :---------------- |
| 131 | 34   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 37 |
| 87  | 23   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 38 |
| 65  | 17   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 39 |
| 52  | 13   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 40 |
| 43  | 11   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 41 |

#### Shapeshifter

Immunity is based on current typing<br>
HP: 1460

| Animation                                                     | Kind   | Attack         | Type     | Damage                                            | Cooldown                                                                  |
| :------------------------------------------------------------ | :----- | :------------- | :------- | :------------------------------------------------ | ------------------------------------------------------------------------- |
| ![shapeshifter_win.gif](/img/tse1/shapeshifter_win.gif)       | Idle   | First cooldown | N/A      | N/A                                               | Between 10-15 ticks                                                       |
| ![shapeshifter_win.gif](/img/tse1/shapeshifter_win.gif)       | Status | Morph          | Self     | Cycles through the types: Normal, Energy, Magical | Every 129.6 ticks and will add 10 ticks to its current attacking cooldown |
| ![shapeshifter_normal.gif](/img/tse1/shapeshifter_normal.gif) | Melee  | Lunge          | Physical | 23                                                | 66 ticks                                                                  |
| ![shapeshifter_energy.gif](/img/tse1/shapeshifter_energy.gif) | Lobbed | Energy Bubble  | Physical | 24                                                | 66 ticks                                                                  |
| ![shapeshifter_magic.gif](/img/tse1/shapeshifter_magic.gif)   | Range  | Magic Shots    | Magical  | 11 x 2                                            | 63 ticks                                                                  |

| XP                              | Gold                           | Location                                               | Condition                   |
| :------------------------------ | :----------------------------- | :----------------------------------------------------- | :-------------------------- |
| 255                             | 60                             | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 37 |
| floor(255 / (Party Level - 35)) | floor(60 / (Party Level - 35)) | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 42 |

| XP  | Gold | Location                                               | Condition         |
| :-- | :--- | :----------------------------------------------------- | :---------------- |
| 127 | 30   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 37 |
| 85  | 20   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 38 |
| 63  | 15   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 39 |
| 51  | 12   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 40 |
| 42  | 10   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 41 |

#### Witchin (M-40)

HP: 1905

| Animation                                           | Kind   | Attack         | Type    | Damage                                                                                                                                                                                                                                                         | Cooldown                                                       |
| :-------------------------------------------------- | :----- | :------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| ![Witchin_idle.gif](/img/tse1/Witchin_idle.gif)     | Idle   | First cooldown | N/A     | N/A                                                                                                                                                                                                                                                            | <li>Between 14-19 ticks</li><li>Starts with Magical Swirl</li> |
| ![Witchin_magic.gif](/img/tse1/Witchin_magic.gif)   | Magic  | Magical Swirl  | Magical | 23                                                                                                                                                                                                                                                             | <li>54 ticks</li><li>2/3 chance to use this attack</li>        |
| ![Witchin_debuff.gif](/img/tse1/Witchin_debuff.gif) | Debuff | Hex            | Ailment | <li>Disables Party Bless or target character's physical armour</li><li>Lasts for 193.2 ticks</li><li>Casting Party Bless over disabled PBless will re-activate PBless, while casting PBless in the the middle of armour reduction will halve its duration</li> | <li>22 ticks</li><li>1/3 chance to use this move</li>          |

| XP                              | Gold                           | Location                                               | Condition                   |
| :------------------------------ | :----------------------------- | :----------------------------------------------------- | :-------------------------- |
| 248                             | 37                             | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 37 |
| floor(248 / (Party Level - 35)) | floor(37 / (Party Level - 35)) | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 42 |

| XP  | Gold | Location                                               | Condition         |
| :-- | :--- | :----------------------------------------------------- | :---------------- |
| 124 | 18   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 37 |
| 82  | 12   | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 38 |
| 62  | 9    | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 39 |
| 49  | 7    | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 40 |
| 41  | 6    | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 41 |

#### Sandroach

Appears every 156 ticks (including the 2-second delay at the beginning) at The Shifting Sands, The Mana Tidebreak and Elan's Tomb if Granael is defeated<br>
HP: 170

| Animation                                 | Kind | Attack    | Type     | Damage                                                                                                                                                                                                                                                                      | Cooldown                                         |
| :---------------------------------------- | :--- | :-------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| ![Sandroach.gif](/img/tse1/Sandroach.gif) | Nuke | Explosion | Physical | <form oninput="damage.value = parseInt(party.value)+parseInt(6)">Party Level <input type="number" label="party" id="party" name="party" min="29" max="42" value="29"><label for="damage"> + 6 = </label><output name="damage" type="number" for="damage">35</output></form> | Moves 1 pixel towards your party every 0.2 ticks |

| XP                             | Gold                          | Location                                               | Condition                   |
| :----------------------------- | :---------------------------- | :----------------------------------------------------- | :-------------------------- |
| 12                             | 5                             | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 37 |
| floor(12 / (Party Level - 37)) | floor(5 / (Party Level - 37)) | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is less than 42 |

| XP  | Gold | Location                                               | Condition         |
| :-- | :--- | :----------------------------------------------------- | :---------------- |
| 6   | 2    | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 39 |
| 4   | 1    | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 40 |
| 3   | 1    | <li>The Shifting Sands</li><li>The Mana Tidebreak</li> | Party level is 41 |

#### Tomb Guard Skeleton (UD)

HP: 1690

| Animation                                           | Kind  | Attack         | Type     | Damage | Cooldown            |
| :-------------------------------------------------- | :---- | :------------- | :------- | :----- | ------------------- |
| ![Skeleton_idle.gif](/img/tse1/Skeleton_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 12-21 ticks |
| ![Skeleton_melee.gif](/img/tse1/Skeleton_melee.gif) | Melee | Lunge          | Physical | 26     | 63 ticks            |

| XP                              | Gold                           | Location    | Condition                   |
| :------------------------------ | :----------------------------- | :---------- | :-------------------------- |
| 304                             | 41                             | Elan's Tomb | Party level is less than 38 |
| floor(304 / (Party Level - 36)) | floor(41 / (Party Level - 36)) | Elan's Tomb | Party level is less than 42 |

| XP  | Gold | Location    | Condition         |
| :-- | :--- | :---------- | :---------------- |
| 152 | 20   | Elan's Tomb | Party Level is 38 |
| 101 | 13   | Elan's Tomb | Party Level is 39 |
| 76  | 10   | Elan's Tomb | Party Level is 40 |
| 60  | 8    | Elan's Tomb | Party Level is 41 |

#### Mumi (N+18, E+18, M-39)

HP: 920

| Animation                                   | Kind  | Attack         | Type                                       | Damage                      | Cooldown                                                           |
| :------------------------------------------ | :---- | :------------- | :----------------------------------------- | :-------------------------- | ------------------------------------------------------------------ |
| ![Mumi_idle.gif](/img/tse1/Mumi_idle.gif)   | Idle  | First cooldown | N/A                                        | N/A                         | <li>Between 32-37 ticks</li><li>Starts with Stars</li>             |
| ![Mumi_magic.gif](/img/tse1/Mumi_magic.gif) | Magic | Stars          | Magical                                    | 12 (14 against shields) x 2 | <li>Between 63-65 ticks</li><li>1/3 chance to use this attack</li> |
| ![Mumi_heal.gif](/img/tse1/Mumi_heal.gif)   | Heal  | Heal           | Ally ahead (itself if no allies are alive) | 184HP                       | <li>Between 43-45 ticks</li><li>2/3 chance to use this move</li>   |

| XP                              | Gold                           | Location    | Condition                   |
| :------------------------------ | :----------------------------- | :---------- | :-------------------------- |
| 277                             | 91                             | Elan's Tomb | Party level is less than 38 |
| floor(277 / (Party Level - 36)) | floor(91 / (Party Level - 36)) | Elan's Tomb | Party level is less than 42 |

| XP  | Gold | Location    | Condition         |
| :-- | :--- | :---------- | :---------------- |
| 138 | 45   | Elan's Tomb | Party Level is 38 |
| 98  | 30   | Elan's Tomb | Party Level is 39 |
| 69  | 22   | Elan's Tomb | Party Level is 40 |
| 55  | 18   | Elan's Tomb | Party Level is 41 |

#### Ghoul (NX, UD)

HP: 1155

| Animation                                     | Kind  | Attack         | Type     | Damage | Cooldown            |
| :-------------------------------------------- | :---- | :------------- | :------- | :----- | ------------------- |
| ![Ghost_idle.gif](/img/tse1/Ghost_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 10-15 ticks |
| ![Ghost_melee.gif](/img/tse1/Ghost_melee.gif) | Melee | Lunge          | Physical | 31     | 53 ticks            |

| XP                              | Gold                           | Location    | Condition                   |
| :------------------------------ | :----------------------------- | :---------- | :-------------------------- |
| 277                             | 91                             | Elan's Tomb | Party level is less than 38 |
| floor(277 / (Party Level - 36)) | floor(91 / (Party Level - 36)) | Elan's Tomb | Party level is less than 42 |

| XP  | Gold | Location    | Condition         |
| :-- | :--- | :---------- | :---------------- |
| 150 | 24   | Elan's Tomb | Party Level is 38 |
| 100 | 16   | Elan's Tomb | Party Level is 39 |
| 75  | 12   | Elan's Tomb | Party Level is 40 |
| 60  | 9    | Elan's Tomb | Party Level is 41 |

#### Dry Zombie (N+25, E+25, MX, UD)

HP: 1945

| Animation                                       | Kind      | Attack         | Type         | Damage                                                                                             | Cooldown            |
| :---------------------------------------------- | :-------- | :------------- | :----------- | :------------------------------------------------------------------------------------------------- | ------------------- |
| ![Zombie_idle.gif](/img/tse1/Zombie_idle.gif)   | Idle      | First cooldown | N/A          | N/A                                                                                                | Between 10-24 ticks |
| ![Zombie_range.gif](/img/tse1/Zombie_range.gif) | Range DoT | Vomit          | Absolute DoT | <li>4 x 4, 21 DoT</li><li>Each DoT deals 1 damage every 8 ticks</li><li>6 x 4 against shields</li> | Between 81-86 ticks |

| XP                              | Gold                           | Location    | Condition                   |
| :------------------------------ | :----------------------------- | :---------- | :-------------------------- |
| 294                             | 68                             | Elan's Tomb | Party level is less than 38 |
| floor(294 / (Party Level - 36)) | floor(68 / (Party Level - 36)) | Elan's Tomb | Party level is less than 42 |

| XP  | Gold | Location    | Condition         |
| :-- | :--- | :---------- | :---------------- |
| 147 | 34   | Elan's Tomb | Party Level is 38 |
| 98  | 22   | Elan's Tomb | Party Level is 39 |
| 73  | 17   | Elan's Tomb | Party Level is 40 |
| 58  | 13   | Elan's Tomb | Party Level is 41 |

#### Humbol (L)

HP: 2850

| Animation                                       | Kind  | Attack         | Type     | Damage                                                                                                                                                                                                                                                                      | Cooldown                                                                  |
| :---------------------------------------------- | :---- | :------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| ![Humbol_idle.gif](/img/tse1/Humbol_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                                                                                                                                                                                                                                                         | Between 10-15 ticks                                                       |
| ![Humbol_heal.gif](/img/tse1/Humbol_heal.gif)   | HoT   | Recover        | Self     | 1HP every 0.8 ticks                                                                                                                                                                                                                                                         | <li>40 ticks</li><li>Will always use this move if it is at the front</li> |
| ![Humbol_range.gif](/img/tse1/Humbol_range.gif) | Range | Laccy Ball     | Physical | <form oninput="damage.value = parseInt(party.value)-parseInt(5)">Party Level <input type="number" label="party" id="party" name="party" min="29" max="42" value="29"><label for="damage"> - 5 = </label><output name="damage" type="number" for="damage">24</output></form> | <li>52 ticks</li><li>Will always use this attack if above 490HP</li>      |

| XP  | Gold | Location                          | Condition |
| :-- | :--- | :-------------------------------- | :-------- |
| 390 | 70   | Aegin Warstick's Pocket Dimension | N/A       |

#### Jugon (N+40, E+40)

HP: 1825

| Animation                                     | Kind   | Attack         | Type    | Damage                                                                                                                                                                                                                                                                        | Cooldown            |
| :-------------------------------------------- | :----- | :------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| ![Jugon_idle.gif](/img/tse1/Jugon_idle.gif)   | Idle   | First cooldown | N/A     | N/A                                                                                                                                                                                                                                                                           | Between 10-15 ticks |
| ![Jugon_magic.png](/img/tse1/Jugon_magic.png) | Lobbed | Destructo Disc | Magical | <form oninput="damage.value = parseInt(party.value)-parseInt(15)">Party Level <input type="number" label="party" id="party" name="party" min="29" max="42" value="29"><label for="damage"> - 15 = </label><output name="damage" type="number" for="damage">14</output></form> | 27 ticks            |

| XP  | Gold | Location                          | Condition |
| :-- | :--- | :-------------------------------- | :-------- |
| 310 | 80   | Aegin Warstick's Pocket Dimension | N/A       |

<form oninput="physical.value = parseInt(party.value)-parseInt(14); physical2.value = parseInt(party.value)-parseInt(14); magical.value = parseInt(party.value)-parseInt(21); health.value = parseInt(party.value * 108) + parseInt(245)">
<h4>Tza Tze [Party Level: <input type="number" label="party" id="party" name="party" min="29" max="42" value="29">] <label for="physical">(N-</label><output name="physical" type="number" for="physical">15</output>, <label for="physical2">E-</label><output name="physical2" type="number" for="physical2">15</output>, <label for="magical">M-</label><output name="magical" type="number" for="magical">8</output>)</h4>

<label for="health">HP: </label><output name="health" type="number" for="health">3377</output></form>
Has a HoT of 1HP every 5.2 ticks

| Animation                                         | Kind           | Attack            | Type          | Damage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Cooldown                                                                                                                                                                                     |
| :------------------------------------------------ | :------------- | :---------------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![TzaTze_idle.gif](/img/tse1/TzaTze_idle.gif)     | Idle           | First cooldown    | N/A           | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | <li>Between 23-28 ticks</li><li>Starts with Mega Lunge</li>                                                                                                                                  |
| ![TzaTze_melee.gif](/img/tse1/TzaTze_melee.gif)   | Melee          | Mega Lunge        | Physical Stun | <li><form oninput="damage.value = Math.floor(23 + (party.value/2))">23 + (Party Level<input type="number" label="party" id="party" name="party" min="29" max="42" value="29"><label for="damage"> / 2) = </label><output name="damage" type="number" for="damage">37</output></form></li><li>Adds 43 ticks to whoever gets hit</li>                                                                                                                                                                                                                                                                                                                                                                                                                    | <li>32 ticks</li><li>Only uses once at the very beginning</li>                                                                                                                               |
| ![TzaTze_melee.gif](/img/tse1/TzaTze_melee.gif)   | Melee          | Lunge             | Physical      | <form oninput="damage.value = party.value - 2">Party Level <input type="number" label="party" id="party" name="party" min="29" max="42" value="29"><label for="damage"> - 2 = </label><output name="damage" type="number" for="damage"></output>27</form> (Party Level to shields)                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 28 ticks                                                                                                                                                                                     |
| ![TzaTze_magic.gif](/img/tse1/TzaTze_magic.gif)   | Magic Indirect | Mana Blast Attack | Absolute      | 4 x 4, targets character with the current highest mana                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 32 ticks                                                                                                                                                                                     |
| ![TzaTze_shield.png](/img/tse1/TzaTze_shield.png) | Recharge       | Recharge          | Self          | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 21 ticks, only uses on every 6th and 7th turns before restarting offensive attacks                                                                                                           |
| ![TzaTze_shield.png](/img/tse1/TzaTze_shield.png) | Status         | Change Shield     | Self          | <li>Each Chain Magic bolt does 1 Magic</li><li>Each Rock Rain rock does 1 Normal</li><li>Celestial Lightning does 3 Energy</li><li>Rainbow does 3 Magic</li><li>Kinetic Smash does 5 Normal</li><li>Life Drain does `LD_DAMAGE - (LD_RESIST / 10)`, where `LD_RESIST` starts at 0 and each time Life Drain hits Tza Tze, `LD_RESIST` adds by 1</li><li>Rifle Attacks do 1 Normal</li><li>Sharpshoot does 4 Normal</li><li>Magic Bullet does 3 Magic</li><li>Power Shot does 1 Normal</li><li>Each Holy Bolt does 1 Energy</li><li>Silver Bullet does 3 Normal</li><li>Hand of the Gods does 5 Magic</li><li>Each Dynamite projectile does 1 Energy</li><li>Meteor Strikes from Favoured Drapes or Translucent Amulet of the Heavens does 2 Normal</li> | After one of the elements reaches 10 hits, he will change his respective immunity to that element and the hit counter resets to 0, and also adds armour by 8 for N&E and 12 for M per change |

| XP   | Gold | Location             | Condition |
| :--- | :--- | :------------------- | :-------- |
| 4100 | 721  | The Veroonai Enclave | N/A       |

#### Granael (M+20, L)

<!-- <form oninput="cooldown.value = Math.floor(14 + (80 - (taken.value * 80) / 7950))">14 + (80 - (Damage Taken <input type="number" label="taken" id="taken" name="taken" min="0" max="7949" value="0"><label for="cooldown"> \* 80) / 7950) = </label><output name="cooldown" type="number" for="cooldown"></output> ticks</form> -->

The formula for her cooldown is `floor(14 + (80 - (DAMAGE_TAKEN * 80) / 7950)`<br>
Her armour increases by 1 Magical every 28 ticks at 6950 & less HP remaining<p>

| HP   | Cooldown in ticks |
| :--- | :---------------- |
| 7950 | 94                |
| 7949 | 93                |
| 7850 | 92                |
| 7751 | 91                |
| 7651 | 90                |
| 7552 | 89                |
| 7453 | 88                |
| 7353 | 87                |
| 7254 | 86                |
| 7154 | 85                |
| 7055 | 84                |
| 6956 | 83                |
| 6856 | 82                |
| 6757 | 81                |
| 6658 | 80                |
| 6558 | 79                |
| 6459 | 78                |
| 6359 | 77                |
| 6260 | 76                |
| 6161 | 75                |
| 6061 | 74                |
| 5962 | 73                |
| 5863 | 72                |
| 5763 | 71                |
| 5664 | 70                |
| 5564 | 69                |
| 5465 | 68                |
| 5366 | 67                |
| 5266 | 66                |
| 5167 | 65                |
| 5068 | 64                |
| 4968 | 63                |
| 4869 | 62                |
| 4769 | 61                |
| 4670 | 60                |
| 4571 | 59                |
| 4471 | 58                |
| 4372 | 57                |
| 4273 | 56                |
| 4173 | 55                |
| 4074 | 54                |
| 3974 | 53                |
| 3875 | 52                |
| 3776 | 51                |
| 3676 | 50                |
| 3577 | 49                |
| 3478 | 48                |
| 3378 | 47                |
| 3279 | 46                |
| 3179 | 45                |
| 3080 | 44                |
| 2981 | 43                |
| 2881 | 42                |
| 2782 | 41                |
| 2683 | 40                |
| 2583 | 39                |
| 2484 | 38                |
| 2384 | 37                |
| 2285 | 36                |
| 2186 | 35                |
| 2086 | 34                |
| 1987 | 33                |
| 1888 | 32                |
| 1788 | 31                |
| 1689 | 30                |
| 1589 | 29                |
| 1490 | 28                |
| 1391 | 27                |
| 1291 | 26                |
| 1192 | 25                |
| 1093 | 24                |
| 993  | 23                |
| 894  | 22                |
| 794  | 21                |
| 695  | 20                |
| 596  | 19                |
| 496  | 18                |
| 397  | 17                |
| 298  | 16                |
| 198  | 15                |
| 99   | 14                |

| Animation                                         | Kind  | Attack         | Type    | Damage                                                                                                                                                                                                                                                                            | Cooldown                                                                                                                |
| :------------------------------------------------ | :---- | :------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![Granael_idle.gif](/img/tse1/Granael_idle.gif)   | Idle  | First cooldown | N/A     | N/A                                                                                                                                                                                                                                                                               | Between 20-25 ticks                                                                                                     |
| ![Granael_magic.gif](/img/tse1/Granael_magic.gif) | Magic | Magic Ball     | Magical | <form oninput="damage.value = Math.floor((party.value / 2) + 4)">(Party Level <input type="number" label="party" id="party" name="party" min="29" max="42" value="29"><label for="damage"> / 2) + 4 = </label><output name="damage" type="number" for="damage">18</output></form> | See cooldown table above                                                                                                |
| ![Granael_magic.gif](/img/tse1/Granael_magic.gif) | Stun  | Freeze Crystal | Ailment | </li>Stuns for 84 ticks</li><li>Does 13 DoT, 1 damage every 6.4 ticks</li>                                                                                                                                                                                                        | <li>21 ticks</li><li>Will always use every 250 ticks, though this resets to 0 upon any frozen character defreezing</li> |

| XP   | Gold | Location           | Condition |
| :--- | :--- | :----------------- | :-------- |
| 5000 | 1327 | Granael's Pedestal | N/A       |

#### Granling

HP: 1145

| Animation                                             | Kind           | Attack         | Type     | Damage                                                                                                                                                                                                                                                                           | Cooldown                                                |
| :---------------------------------------------------- | :------------- | :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| ![Granling_idle.gif](/img/tse1/Granling_idle.gif)     | Idle           | First cooldown | N/A      | N/A                                                                                                                                                                                                                                                                              | <li>Between 17-22 ticks</li><li>Starts with Heal</li>   |
| ![Granling_heal.gif](/img/tse1/Granling_heal.gif)     | Heal           | Heal           | Other    | 128HP to Granael                                                                                                                                                                                                                                                                 | <li>60 ticks</li><li>1/3 chance to use this move</li>   |
| ![Granling_aerial.gif](/img/tse1/Granling_aerial.gif) | Magic Indirect | Attack         | Absolute | <form oninput="damage.value = Math.floor((party.value / 3) - 1)">(Party Level <input type="number" label="party" id="party" name="party" min="29" max="42" value="29"><label for="damage"> / 3) - 1 = </label><output name="damage" type="number" for="damage">8</output></form> | <li>51 ticks</li><li>2/3 chance to use this attack</li> |

| XP  | Gold | Location           | Condition |
| :-- | :--- | :----------------- | :-------- |
| 208 | 20   | Granael's Pedestal | N/A       |

#### Frontier Guardsman (N-30, E-30, M+28)

HP: 920

| Animation                                                 | Kind  | Attack         | Type     | Damage | Cooldown                                                                   |
| :-------------------------------------------------------- | :---- | :------------- | :------- | :----- | -------------------------------------------------------------------------- |
| ![Guardsman_idle.gif](/img/tse1/Guardsman_idle.gif)       | Idle  | First cooldown | N/A      | N/A    | <li>Between 14-19 ticks</li><li>Starts with Pistol Attack</li>             |
| ![Guardsman_range.gif](/img/tse1/Guardsman_range.gif)     | Range | Pistol Attack  | Physical | 23     | <li>41 ticks</li><li>Will use this attack if he has more than 440HP</li>   |
| ![Guardsman_recover.png](/img/tse1/Guardsman_recover.png) | Heal  | Recover        | Self     | 48HP   | <li>59 ticks</li><li>Will use this move if health is at 440HP or less</li> |

| XP  | Gold | Location         | Condition |
| :-- | :--- | :--------------- | :-------- |
| 470 | 260  | The Stone Circle | N/A       |

#### Serpentine Acolyte (M-90)

| HP   | Location           |
| :--- | :----------------- |
| 1005 | The Stone Circle   |
| 1730 | The Arcane Library |

| Animation                                           | Kind           | Attack         | Type     | Damage                                                                                                       | Cooldown                                                                                                                                                                                                                                     |
| :-------------------------------------------------- | :------------- | :------------- | :------- | :----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Acolyte_idle.gif](/img/tse1/Acolyte_idle.gif)     | Idle           | First cooldown | N/A      | N/A                                                                                                          | <li>Between 10-15 ticks at The Stone Circle</li><li>Between 6-11 ticks in The Arcane Library</li><li>Starts with Magical Bolts</li>                                                                                                          |
| ![Acolyte_sap.gif](/img/tse1/Acolyte_sap.gif)       | Magic          | Magical Bolts  | Magical  | <li>12 x 2 (clamps at 4 x 2) at The Stone Circle</li><li>17 x 2 (clamps at 6 x 2) in The Arcane Library</li> | <li>Between 21-62 ticks at The Stone Circle</li><li>Between 66-67 ticks in The Arcane Library</li><li>2/3 chance to use this attack at The Stone Circle, 1/2 otherwise</li><li>Will always use this attack if he is the only enemy left</li> |
| ![Acolyte_aerial.gif](/img/tse1/Acolyte_aerial.gif) | Magic Indirect | Death Drain    | Absolute | 1 x 40 unless disrupted by a character's hit (does 1 damage every 3.2 ticks)                                 | <li>81 ticks at The Stone Circle</li><li>61 ticks in The Arcane Library</li><li>1/3 chance to use this attack at The Stone Circle, 1/4 otherwise</li><li>His own cooldown goes up by 44 ticks if disrupted</li>                              |
| ![Acolyte_sap.gif](/img/tse1/Acolyte_sap.gif)       | Status         | Glue           | Ailment  | Prevents party from rotating for 228 ticks unless defeated                                                   | <li>52 ticks, will only use in The Arcane Library</li><li>1/4 chance to use this move unless your front character has less than 28HP, in which case he will always use this first</li>                                                       |

| XP                            | Gold                          | Location           | Condition                   |
| :---------------------------- | :---------------------------- | :----------------- | :-------------------------- |
| 644                           | 390                           | The Stone Circle   |                             |
| 444                           | 128                           | The Arcane Library | Party level is less than 42 |
| floor(444/(Party Level - 40)) | floor(128/(Party Level - 40)) | The Arcane Library | Party level is less than 45 |

| XP  | Gold | Location           | Condition         |
| :-- | :--- | :----------------- | :---------------- |
| 222 | 64   | The Arcane Library | Party level is 42 |
| 148 | 42   | The Arcane Library | Party level is 43 |
| 111 | 32   | The Arcane Library | Party level is 44 |

#### Slave Reptilian (EX, L)

HP: 2065

| Animation                                         | Kind  | Attack         | Type     | Damage                           | Cooldown                                                                                                                             |
| :------------------------------------------------ | :---- | :------------- | :------- | :------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![Reptile_idle.gif](/img/tse1/Reptile_idle.gif)   | Idle  | First cooldown | N/A      | N/A                              | <li>Between 17-25 ticks</li><li>Starts with Lunge</li>                                                                               |
| ![Reptile_melee.gif](/img/tse1/Reptile_melee.gif) | Melee | Lunge          | Physical | 35                               | <li>82 ticks</li><li>2/3 chance to use this attack</li>                                                                              |
| ![Reptile_range.gif](/img/tse1/Reptile_range.gif) | AoE   | Trident Zap    | Physical | 9 (armour is 5/6 less effective) | <li>63 ticks</li></i>1/3 chance to use this attack</li><li>Will use this attack first if anybody in your party has 5 or less HP</li> |

| XP                            | Gold                          | Location           | Condition                   |
| :---------------------------- | :---------------------------- | :----------------- | :-------------------------- |
| 445                           | 117                           | The Arcane Library | Party level is less than 42 |
| floor(445/(Party Level - 40)) | floor(117/(Party Level - 40)) | The Arcane Library | Party level is less than 45 |

| XP  | Gold | Location           | Condition         |
| :-- | :--- | :----------------- | :---------------- |
| 222 | 58   | The Arcane Library | Party level is 42 |
| 148 | 39   | The Arcane Library | Party level is 43 |
| 111 | 29   | The Arcane Library | Party level is 44 |

#### Familiar (N+24, E+24, MX, UD)

| Animation                                           | Kind      | Attack          | Type         | Damage                                                               | Cooldown            |
| :-------------------------------------------------- | :-------- | :-------------- | :----------- | :------------------------------------------------------------------- | ------------------- |
| ![Familiar_idle.gif](/img/tse1/Familiar_idle.gif)   | Idle      | First cooldown  | N/A          | N/A                                                                  | Between 10-15 ticks |
| ![Familiar_melee.gif](/img/tse1/Familiar_melee.gif) | Melee DoT | Poisonous Lunge | Physical DoT | <li>26, saps 1 mana, 10 DoT</li><li>Each DoT lasts for 10 ticks</li> | 65 ticks            |

| XP                            | Gold                          | Location           | Condition                   |
| :---------------------------- | :---------------------------- | :----------------- | :-------------------------- |
| 401                           | 126                           | The Arcane Library | Party level is less than 42 |
| floor(401/(Party Level - 40)) | floor(126/(Party Level - 40)) | The Arcane Library | Party level is less than 45 |

| XP  | Gold | Location           | Condition         |
| :-- | :--- | :----------------- | :---------------- |
| 200 | 63   | The Arcane Library | Party level is 42 |
| 133 | 42   | The Arcane Library | Party level is 43 |
| 100 | 31   | The Arcane Library | Party level is 44 |

#### The GrandFather (N+12, E+12, M-90)

HP: 5965

| Animation                                                   | Kind           | Attack         | Type                       | Damage                                                                                                                                      | Cooldown                                                                     |
| :---------------------------------------------------------- | :------------- | :------------- | :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| ![GrandFather_idle.gif](/img/tse1/GrandFather_idle.gif)     | Idle           | First cooldown | N/A                        | N/A                                                                                                                                         | <li>Between 10-15 ticks</li><li>Starts with Life Slash</li>                  |
| ![GrandFather_aerial.gif](/img/tse1/GrandFather_aerial.gif) | Magic Indirect | Life Slash     | Absolute                   | `Character Health / 2`, heals himself for the same amount                                                                                   | <li>43 ticks</li><li>Targets character with the highest HP</li>              |
| ![GrandFather_magic.png](/img/tse1/GrandFather_magic.png)   | Magic          | Magic Blast    | Magical                    | <li>17 on phase 1, 21 (clamps at 6) on phase 2</li><li>Resistance works like this: `(4 x Talisman Bonus) + (Skill Points in Mana / 5)`</li> | 19 ticks                                                                     |
| ![GrandFather_aoe.gif](/img/tse1/GrandFather_aoe.gif)       | AoE            | Doom Rain      | Absolute                   | 3 (5 on phase 2)                                                                                                                            | 26 ticks                                                                     |
| ![GrandFather_shield.gif](/img/tse1/GrandFather_shield.gif) | Defence        | Shields Up!    | Invulnerability & Recovery | <li>Becomes NX, EX, MX & UD for 416 ticks</li><li>Heals 14HP every 1.6 ticks, totalling to ~3950HP in total</li>                            | <li>Activates at 1135HP, does a Life Slash upon using this move as well</li> |

| XP   | Gold | Location            | Condition |
| :--- | :--- | :------------------ | :-------- |
| 5760 | 1140 | The Sanctum of Dust | N/A       |

### WORLD 5: CLARKE'S TOWER

#### Frontier RiotTrooper (NX, E-40, M+21)

HP: 2510

| Animation                                                         | Kind     | Attack         | Type     | Damage                      | Cooldown                                                                                                                                        |
| :---------------------------------------------------------------- | :------- | :------------- | :------- | :-------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Riottrooper_idle.gif](/img/tse1/Riottrooper_idle.gif)           | Idle     | First cooldown | N/A      | N/A                         | <li>Between 10-15 ticks in Clarke's Tower Lobby</li><li>Between 6-15 ticks in Prototype Development Wing</li><li>Starts with Pistol Attack</li> |
| ![Riottrooper_range.gif](/img/tse1/Riottrooper_range.gif)         | Range    | Pistol Attack  | Physical | 30 (29 to Rick)             | <li>45 ticks in Clarke's Tower Lobby</li><li>46 ticks in Prototype Development Wing</li><li>4/5 chance to use this attack</li>                  |
| ![Riottrooper_flashbang.gif](/img/tse1/Riottrooper_flashbang.gif) | AoE Stun | Flashbang      | Absolute | 4, stuns party for 23 ticks | <li>59 ticks in Clarke's Tower Lobby</li><li>61 ticks in Prototype Development Wing</li><li>1/5 chance to use this attack</li>                  |

| XP                              | Gold                            | Location                                                         | Condition                   |
| :------------------------------ | :------------------------------ | :--------------------------------------------------------------- | :-------------------------- |
| 625                             | 250                             | <li>Clarke's Tower Lobby</li><li>Prototype Development Wing</li> | Party Level is less than 48 |
| floor(625 / (Party Level - 46)) | floor(250 / (Party Level - 46)) | Clarke's Tower Lobby                                             | Party Level is less than 51 |
| floor(625 / (Party Level - 46)) | floor(250 / (Party Level - 46)) | Prototype Development Wing                                       | Party Level is less than 56 |

| XP  | Gold | Location                                                         | Condition         |
| :-- | :--- | :--------------------------------------------------------------- | :---------------- |
| 312 | 125  | <li>Clarke's Tower Lobby</li><li>Prototype Development Wing</li> | Party Level is 48 |
| 208 | 83   | <li>Clarke's Tower Lobby</li><li>Prototype Development Wing</li> | Party Level is 49 |
| 156 | 62   | <li>Clarke's Tower Lobby</li><li>Prototype Development Wing</li> | Party Level is 50 |
| 125 | 50   | Prototype Development Wing                                       | Party Level is 51 |
| 104 | 41   | Prototype Development Wing                                       | Party Level is 52 |
| 89  | 35   | Prototype Development Wing                                       | Party Level is 53 |
| 78  | 31   | Prototype Development Wing                                       | Party Level is 54 |
| 69  | 27   | Prototype Development Wing                                       | Party Level is 55 |

#### Servitor (E+50)

HP: 3250 (HoT of 1HP to itself every 3.2 ticks)

| Animation                                         | Kind | Attack         | Type  | Damage                                                                                               | Cooldown  |
| :------------------------------------------------ | :--- | :------------- | :---- | :--------------------------------------------------------------------------------------------------- | --------- |
| ![servitor_idle.gif](/img/tse1/servitor_idle.gif) | Idle | First cooldown | N/A   | N/A                                                                                                  | 150 ticks |
| ![servitor_heal.gif](/img/tse1/servitor_heal.gif) | HoT  | NENOR          | Party | Applies 2HP HoT to itself and allies that lasts for 1140 ticks unless disrupted, totalling to 2280HP | 181 ticks |

| XP                              | Gold                            | Location             | Condition                   |
| :------------------------------ | :------------------------------ | :------------------- | :-------------------------- |
| 600                             | 270                             | Clarke's Tower Lobby | Party Level is less than 48 |
| floor(600 / (Party Level - 46)) | floor(270 / (Party Level - 46)) | Clarke's Tower Lobby | Party Level is less than 51 |

| XP  | Gold | Location             | Condition         |
| :-- | :--- | :------------------- | :---------------- |
| 300 | 135  | Clarke's Tower Lobby | Party Level is 48 |
| 200 | 90   | Clarke's Tower Lobby | Party Level is 49 |
| 150 | 67   | Clarke's Tower Lobby | Party Level is 50 |

#### Frontier Heavyarms (N+20, E+20)

| Animation                                                   | Kind     | Attack         | Type     | Damage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Cooldown                                                                                   |
| :---------------------------------------------------------- | :------- | :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![Heavyarms_idle.gif](/img/tse1/Heavyarms_idle.gif)         | Idle     | First cooldown | N/A      | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Between 4-22 ticks                                                                         |
| ![Heavyarms_recharge.png](/img/tse1/Heavyarms_recharge.png) | Recharge | Recharge       | Self     | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | <li>53 ticks in Clarke's Tower Lobby</li><li>54 in Prototype Development Wing</li>         |
| ![Heavyarms_range.gif](/img/tse1/Heavyarms_range.gif)       | Nuke     | Laser Attack   | Physical | <li>70 (73 to Rick Brutal, 114 to shields) in Clarke's Tower Lobby</li><li><form oninput="damage.value = Math.floor((2 * party.value)-17)">(2 x Party Level<input type="number" label="party" id="party" name="party" min="45" max="55" value="45"><label for="damage">) - 17 = </label><output name="damage" type="number" for="damage">73</output></form><form oninput="damage.value = Math.floor((2 * party.value)-5 + (party.value/7))">((2 x Party Level<input type="number" label="party" id="party" name="party" min="45" max="55" value="45"><label for="damage">) - 5 + (Party Level / 7) = </label><output name="damage" type="number" for="damage">91</output></form> to shields) in Prototype Development Wing</li> | <li>103 ticks in Clarke's Tower Lobby</li><li>122 ticks in Prototype Development Wing</li> |

| XP                              | Gold                            | Location                                                         | Condition                   |
| :------------------------------ | :------------------------------ | :--------------------------------------------------------------- | :-------------------------- |
| 690                             | 266                             | <li>Clarke's Tower Lobby</li><li>Prototype Development Wing</li> | Party Level is less than 48 |
| floor(690 / (Party Level - 46)) | floor(266 / (Party Level - 46)) | Clarke's Tower Lobby                                             | Party Level is less than 51 |
| floor(690 / (Party Level - 46)) | floor(266 / (Party Level - 46)) | Prototype Development Wing                                       | Party Level is less than 56 |

| XP  | Gold | Location                                                         | Condition         |
| :-- | :--- | :--------------------------------------------------------------- | :---------------- |
| 345 | 125  | <li>Clarke's Tower Lobby</li><li>Prototype Development Wing</li> | Party Level is 48 |
| 230 | 88   | <li>Clarke's Tower Lobby</li><li>Prototype Development Wing</li> | Party Level is 49 |
| 172 | 66   | <li>Clarke's Tower Lobby</li><li>Prototype Development Wing</li> | Party Level is 50 |
| 138 | 53   | Prototype Development Wing                                       | Party Level is 51 |
| 115 | 44   | Prototype Development Wing                                       | Party Level is 52 |
| 98  | 38   | Prototype Development Wing                                       | Party Level is 53 |
| 86  | 33   | Prototype Development Wing                                       | Party Level is 54 |
| 76  | 29   | Prototype Development Wing                                       | Party Level is 55 |

#### Frontier Gunship Zero (N+40, E+40, M+40)

| HP    | Phase                                                                              |
| :---- | :--------------------------------------------------------------------------------- |
| 10500 | 1: Chaingun, Defence Drones & Rockets                                              |
| 7900  | 2: Defence Drones & Rockets                                                        |
| 6000  | 3: Retreat; waits 38 ticks until it actually retreats, then retreats for 364 ticks |

Adds 41 Resist to all elements each retreat<br>
Begins on floor 9. Every 44.8 ticks, you advance 1 floor! Therefore, this autoscroller segment lasts for 3673.6 ticks (6 minutes and 7.36 seconds on Slower Battles; 3 minutes and 3.68 seconds with the toggle switched off)

| Animation                                               | Kind  | Attack         | Type     | Damage                             | Cooldown                                                                                                                                                                                                              |
| :------------------------------------------------------ | :---- | :------------- | :------- | :--------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![gunship_chaingun.gif](/img/tse1/gunship_chaingun.gif) | Range | Chaingun       | Physical | 30 (29 to Rick, 31 to shields) x 5 | <li>After 2 sine wave cycles (up to 72 ticks) on Slower Battles; after 1 sine wave cycle (up to 36 ticks) otherwise</li><li>Will use this attack twice before switching to Rockets</li>                               |
| ![gunship_magic.gif](/img/tse1/gunship_magic.gif)       | Magic | Defence Drones | Magical  | 19                                 | <li>Reappears in after the 180th, 350th & 520th ticks if each drone is on the 310th degree</li><li>Shoots every 280th degree</li><li>Moves 1 degree every 0.4 ticks</li><li>Therefore, it shoots every 144 ticks</li> |
| ![gunship_missile.png](/img/tse1/gunship_missile.png)   | Range | Rockets        | Physical | 41 (42 to Rick, 45 to shields) x 2 | <li>After 2 sine wave cycles (up to 72 ticks) on Slower Battles; after 1 sine wave cycle (up to 36 ticks) otherwise</li><li>Will switch back to using Chaingun twice unless the Chaingun is damaged</li>              |

| XP    | Gold | Location    | Condition            |
| :---- | :--- | :---------- | :------------------- |
| 10560 | 998  | Elevator 16 | Passed over Floor 90 |

#### Magenik (N+10, E+10, MX, UD)

HP: 2515

| Animation                                            | Kind   | Attack         | Type           | Damage                                                                                                   | Cooldown                                                           |
| :--------------------------------------------------- | :----- | :------------- | :------------- | :------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| ![Magnenik_idle.gif](/img/tse1/Magenik_idle.gif)     | Idle   | First cooldown | N/A            | N/A                                                                                                      | <li>Between 24-29 ticks</li>                                       |
| ![Magnenik_magic.gif](/img/tse1/Magenik_magic.gif)   | Magic  | Magic Blast    | Magical        | <li>16 (17 against Rick) x 2 [clamps at 6 x 2]</li><li>Does `floor(Party Level / 2) x 2` to shields</li> | <li>Between 62-67 ticks</li><li>3/4 chance to use this attack</li> |
| ![Magnenik_recoil.png](/img/tse1/Magenik_recoil.png) | Recoil | Feedback       | Self, Absolute | 6 x 2 when hit, lasts for 122 ticks                                                                      | <li>Between 123-129 ticks</li><li>1/4 chance to use this move</li> |

| XP                              | Gold                            | Location                   | Condition                   |
| :------------------------------ | :------------------------------ | :------------------------- | :-------------------------- |
| 730                             | 210                             | Prototype Development Wing | Party Level is less than 50 |
| floor(730 / (Party Level - 48)) | floor(210 / (Party Level - 48)) | Prototype Development Wing | Party Level is less than 56 |

| XP  | Gold | Location                   | Condition         |
| :-- | :--- | :------------------------- | :---------------- |
| 365 | 105  | Prototype Development Wing | Party Level is 50 |
| 243 | 70   | Prototype Development Wing | Party Level is 51 |
| 182 | 52   | Prototype Development Wing | Party Level is 52 |
| 146 | 42   | Prototype Development Wing | Party Level is 53 |
| 121 | 35   | Prototype Development Wing | Party Level is 54 |
| 91  | 30   | Prototype Development Wing | Party Level is 55 |

#### Corporate Defence Weapon (N-105, E-105, M-50, L)

HP: 1925

| Animation                                         | Kind  | Attack         | Type     | Damage                                                        | Cooldown            |
| :------------------------------------------------ | :---- | :------------- | :------- | :------------------------------------------------------------ | ------------------- |
| ![CDW5000_idle.png](/img/tse1/CDW5000_idle.png)   | Idle  | First cooldown | N/A      | N/A                                                           | Between 10-15 ticks |
| ![CDW5000_range.gif](/img/tse1/CDW5000_range.gif) | Range | Chaingun       | Physical | 29 (15 to Tza Tze & Aegin Warstick, 12 to Aegin's Shield) x 3 | 95 ticks            |

| XP                              | Gold                            | Location                   | Condition                   |
| :------------------------------ | :------------------------------ | :------------------------- | :-------------------------- |
| 775                             | 260                             | Prototype Development Wing | Party Level is less than 50 |
| floor(775 / (Party Level - 48)) | floor(260 / (Party Level - 48)) | Prototype Development Wing | Party Level is less than 56 |

| XP  | Gold | Location                   | Condition         |
| :-- | :--- | :------------------------- | :---------------- |
| 387 | 130  | Prototype Development Wing | Party Level is 50 |
| 258 | 86   | Prototype Development Wing | Party Level is 51 |
| 193 | 65   | Prototype Development Wing | Party Level is 52 |
| 155 | 52   | Prototype Development Wing | Party Level is 53 |
| 129 | 43   | Prototype Development Wing | Party Level is 54 |
| 110 | 37   | Prototype Development Wing | Party Level is 55 |

#### Mystic Defence Mechanism Zeta Frontal Unit (NX, EX, MX\*, L)\*\*

\*Chain Magic was not programmed properly and will bypass the frontal unit<br>
\*\*Life Drain will bypass the Frontal Unit and attack the CPU (which is undead), rendering Life Drain useless

HP: 10000<br>
Real HP for Phase 1 towards the CPU: 7033<p>

The first attack delay is 10 seconds, then the first cooldown is 56 ticks. It should also be noted your party's first cooldown is actually 63 ticks here instead of the usual 40.

| Animation                                         | Kind     | Attack   | Type     | Damage                                                                                                                                                                                                                                         | Cooldown                                                    |
| :------------------------------------------------ | :------- | :------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| ![MDMZ1_idle.png](/img/tse1/MDMZ1_idle.png)       | Range    | Chaingun | Physical | 37 (35 against Rick) x 3                                                                                                                                                                                                                       | <li>38 ticks</li><li>Uses twice before using Railgun</li>   |
| ![MDMZ_range.png](/img/tse1/MDMZ_range.png)       | AoE      | Railgun  | Physical | <li>10 against Tza Tze & Aegin Warstick</li><li>9 against Aegin's Shield</li><li>27 against front character</li><li>23 against middle character</li><li>18 against back character</li><li>9 against Rick</li><li>Armour is half effective</li> | <li>38 ticks</li><li>Goes back to using Chaingun twice</li> |
| ![mdmz_recharge.gif](/img/tse1/mdmz_recharge.gif) | Recharge | Reload   | Self     | N/A                                                                                                                                                                                                                                            | Recharges for 248 ticks                                     |

NOTES: During the first cycle, the frontal unit will execute its 3-move sequence (i.e., Chaingun twice, Raingun once) a total of 3 times [within 356 ticks] before reloading. After that, it'll just move onto doing [within 232 ticks]: Chaingun twice, Railgun once, Chaingun twice, reload, rinse lather repeat.

#### Mystic Defence Mechanism Zeta CPU (N+30, E+30, M-10, L, UD)

| HP    | Phase | Armour                     |
| :---- | :---- | :------------------------- |
| 17955 | 1     | N+30, E+30, M-10, L, UD    |
| 10922 | 2     | N-125, E-125, M-100, L, UD |
| 5375  | 3     | N+30, E+30, M-10, L, UD    |

| Animation                                             | Kind            | Attack         | Type     | Damage                                                                                                                                                                                                                                                                        | Cooldown                                                                                                                                                                                                                                                     |
| :---------------------------------------------------- | :-------------- | :------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![gunship_missile.png](/img/tse1/gunship_missile.png) | Range Indirect  | Missile Attack | Physical | <li>31 against Tza Tze</li><li>24 against Aegin Warstick</li><li>43 against characters</li><li>34 against Rick</li>                                                                                                                                                           | <li>74 ticks</li><li>2/3 chance to use this attack</li><li>Phase 2 only</li>                                                                                                                                                                                 |
| ![mdmz_nuke.gif](/img/tse1/mdmz_nuke.gif)             | Nuke            | C-Bomb         | Physical | <li>108 against Tza Tze</li><li>90 (95 for his shield) against Aegin Warstick</li><li>127 against characters</li><li>245 against shields</li><li>98 against Rick</li>                                                                                                         | <li>108 ticks</li><li>Moves at a speed of 2.5 pixels per tick</li><li>Celestial Lightning, Sharpshoot, Kinetic Smash and Tza Tze's Lunge count as 2 hits</li><li>1/3 chance to use this attack, but does not re-use twice in a row</li><li>Phase 2 only</li> |
| ![mdmz_magic.gif](/img/tse1/mdmz_magic.gif)           | Magic           | Magic Blast    | Magical  | <li>33 x 2 to Tza Tze</li><li>25 (33 to his shield) x 2 to Aegin Warstick</li><li>20 (clamps at 9) x 2</li><li>24 x 2 to shields</li><li>17 x 2 to Rick Brutal</li><li>Resistance works like this (characters only): `(2 x Talisman Bonus) + (Skill Points in Mana / 3)`</li> | <li>52 ticks</li><li>5/6 chance to use this attack</li><li>Phase 3 only</li>                                                                                                                                                                                 |
| ![mdmz_magic.gif](/img/tse1/mdmz_magic.gif)           | Debuff Indirect | Curse          | Ailment  | <li>72 ticks (iterates 2 ticks instead if Party Bless is active)</li> <li>Halves damage output</li>                                                                                                                                                                           | <li>48 ticks</li><li>1/6 chance to use this move</li><li>Phase 3 only</li>                                                                                                                                                                                   |

| XP    | Gold | Location          | Condition |
| :---- | :--- | :---------------- | :-------- |
| 20460 | 50   | The Assembly Room | N/A       |

## HELPERS

### WORLD 1: Giant's Cradle

#### Sheriff Hicks

HP: ∞

| Animation                                     | Kind  | Attack       | Type   | Damage          | Cooldown            |
| :-------------------------------------------- | :---- | :----------- | :----- | :-------------- | ------------------- |
| ![hicks_range.gif](/img/tse1/hicks_range.gif) | Range | Rifle Attack | Normal | Party Level + 8 | Between 57-59 ticks |

### WORLD 3: The Mango Republic

#### Private Steele

Base HP: 85<br>
Maximum HP: 102<br>
Armour: 8<br>
Mana: 3

| Animation                                       | Kind     | Attack       | Type   | Damage                   | Cooldown                                                                                                  |
| :---------------------------------------------- | :------- | :----------- | :----- | :----------------------- | --------------------------------------------------------------------------------------------------------- |
| ![steele_range.gif](/img/tse1/steele_range.gif) | Range    | Rifle Attack | Normal | 25 + (Party Level / 2)   | <li>61.2 ticks</li><li>1/2 chance to use this attack</li>                                                 |
| ![steele_range.gif](/img/tse1/steele_range.gif) | Range    | Sharpshoot   | Normal | 54 + Party Level         | <li>148.8 ticks</li><li>1/4 chance to use this attack</li><li>Uses 1 mana</li>                            |
| ![steele_range.gif](/img/tse1/steele_range.gif) | Magic    | Magic Bullet | Magic  | 23 + (Party Level x 1.5) | <li>79.2 ticks</li><li>1/4 chance to use this attack</li><li>Uses 1 mana</li>                             |
| ![steele_idle.gif](/img/tse1/steele_idle.gif)   | Recharge | Recharge     | Self   | Gains 1 Mana             | <li>52.8 ticks</li><li>Force a recharge if out of mana when trying to use Sharpshoot or Magic Bullet</li> |

### WORLD 5: Clarke's Tower

#### Rick Brutal

| Base HP | Maximum HP | Physical Armour | Mana Points & Mana Reduction | Location                   |
| :------ | :--------- | :-------------- | :--------------------------- | :------------------------- |
| 46      | 55         | 17              | 5                            | Clarke's Tower Lobby       |
| 56      | 68         | 17              | 5                            | Elevator 16                |
| 66      | 78         | 17              | 5                            | Prototype Development Wing |
| 77      | 89         | 17              | 5                            | The Assembly Room          |

| Animation                                               | Kind     | Attack       | Type    | Damage                          | Cooldown                                                                                  |
| :------------------------------------------------------ | :------- | :----------- | :------ | :------------------------------ | ----------------------------------------------------------------------------------------- |
| ![rickbrutal_range.gif](/img/tse1/rickbrutal_range.gif) | Range    | Rifle Attack | Normal  | `floor(51 + (Party Level / 2))` | <li>58 ticks</li><li>Uses against MX opponents</li>                                       |
| ![rickbrutal_range.gif](/img/tse1/rickbrutal_range.gif) | Magic    | Magic Bullet | Magical | 31 + Party Level                | <li>61 ticks</li><li>Uses against NX opponents</li>                                       |
| ![rickbrutal_idle.gif](/img/tse1/rickbrutal_idle.gif)   | Recharge | Recharge     | Self    | Gains 1 mana                    | <li>47 ticks</li><li>Force a recharge if out of mana when trying to use Magic Bullet</li> |

#### Experimental Health/Mana Exchanger (aka Fluffy Toy Grabber)

| Animation                                             | Kind   | Attack             | Type | Damage                                                 | Cooldown                 |
| :---------------------------------------------------- | :----- | :----------------- | :--- | :----------------------------------------------------- | ------------------------ |
| ![PickandMix_open.png](/img/tse1/PickandMix_open.png) | Status | Swap Health & Mana | Swap | Every 10HP swaps 1MP (you always get a minimum of 3HP) | 336 ticks + 1.95 seconds |

#### Final Boss Helpers

Either one of them will spawn in if your party's total HP (excluding Rick) is 101 or less. Aegin Warstick spawns in if you haven't defeated Tza Tze, otherwise Tza Tze will.

##### Aegin Warstick

Base HP: 60<br>
Maximum HP: 80

| Animation                                           | Kind     | Attack           | Type    | Damage                              | Cooldown                                                       |
| :-------------------------------------------------- | :------- | :--------------- | :------ | :---------------------------------- | -------------------------------------------------------------- |
| ![aegin_shield.gif](/img/tse1/aegin_shield.gif)     | Defence  | Protecto-Cube    | Shield  | 288HP                               | <li>45 ticks</li><li>Only uses once at the very beginning</li> |
| ![aegin_zap.gif](/img/tse1/aegin_zap.gif)           | Magic    | Lightning Attack | Magical | floor`190 + (Party Level x 1.5))`   | <li>64 ticks</li><li>2/5 chance to use this attack</li>        |
| ![aegin_whoosh.gif](/img/tse1/aegin_whoosh.gif)     | Magic    | Jewel Attack     | Magical | `floor(55 + (Party Level / 2))` x 4 | <li>66 tick</li><li>2/5 chance to use this attack</li>         |
| ![aegin_recharge.gif](/img/tse1/aegin_recharge.gif) | Recharge | Recharge         | Self    | N/A                                 | <li>46 ticks</li><li>1/5 chance to use this attack</li>        |

##### Tza Tze

Base HP: 345<br>
Maximum HP: 450

| Animation                                         | Kind  | Attack  | Type     | Damage            | Cooldown                                                |
| :------------------------------------------------ | :---- | :------ | :------- | :---------------- | ------------------------------------------------------- |
| ![TzaTze_melee.gif](/img/tse1/TzaTze_melee.gif)   | Melee | Lunge   | Physical | 189 + Party Level | <li>70 ticks</li><li>4/5 chance to use this attack</li> |
| ![TzaTze_shield.png](/img/tse1/TzaTze_shield.png) | Heal  | Recover | Self     | 28HP              | <li>59 ticks</li><li>1/5 chance to use this move</li>   |

## SKILL CALCULATOR

IMPORTANT: the following areas use older calculations for Rainbow, Dynamite and Silver Bullet: The Misty Marshes, Arachnid's Grove, The Defiled Altar, The Broken Bridge (2nd area), Eastern Way, The Assembly Room

<form oninput="
baseHealth.value=parseInt(22+(3*health.value)+(0.23*health.value*(party.value/2))+((party.value*5)/3));
maxHealth.value=parseInt(22+(3*health.value)+(0.23*health.value*(party.value/2))+((party.value*5)/3)+(party.value/2));
baseMana.value=parseInt(5+(mana.value/2))+parseInt(talisman.value);
maxMana.value=parseInt((5+(mana.value/2))+parseInt(talisman.value))*2;
magicReduction.value=parseInt((5+(mana.value/2))+parseInt(talisman.value))-5;
chainmagic.value=parseInt((skill1.value*1.5) + ((1 * party.value) - 1) + (1 * bless.value));
rifleattack.value=parseInt((2*skill1.value)+(2*gun.value)+((party.value)/2)+((bless.value)/2));
mattrifle.value=parseInt(((2*skill1.value)+(2*gun.value)+((party.value)/2)+((bless.value)/2))*0.75);
kineticshield.value=parseInt((skill2.value * 1.2) + (party.value * 0.6) + (bless.value * 0.6) + parseInt(1));
recover1h.value=Math.floor((skill2.value/2) + (party.value/5) + (bless.value/5)) + 2;
recover2h.value=Math.floor((skill2.value*0.6) + (party.value/4) + (bless.value/4)) + 2;
recover3h.value=Math.floor((skill2.value*0.7) + (party.value/4) + (bless.value/4)) + 2;
recover1c.value=parseInt(59-(0.66*skill2.value));
recover2c.value=parseInt(55-(0.66*skill2.value));
recover3c.value=parseInt(55-(0.66*skill2.value));
partyheal1.value=parseInt((skill2.value * 0.38) + (party.value * 0.125) + (bless.value * 0.125) + parseInt(1));
partyheal2.value=parseInt((skill2.value * 0.44) + (party.value * 0.17) + (bless.value * 0.17) + parseInt(1));
partyheal3.value=parseInt((skill2.value * 0.42) + (party.value * 0.143) + (bless.value * 0.143) + parseInt(1));
magicshield1.value=parseInt((skill3.value * 1.2) + (party.value * 0.6) + (bless.value * 0.6));
magicshield2.value=parseInt((skill3.value * 1.25) + (party.value * 0.7) + (bless.value * 0.7));
magicshield3.value=parseInt((skill3.value * 1) + (party.value * 0.6) + (bless.value * 0.6));
speedfire.value=58 - skill3.value;
speedfire2.value=73 - skill3.value;
partyrecharge.value=parseInt(69 - (skill3.value * 1.5));
partyrecharge3.value=parseInt(56 - (skill3.value * 1.5));
rockrain1.value=parseInt((skill4.value * 3.8) + (party.value * 1.25) + (bless.value * 1.25) + parseInt(3));
rockrain2.value=parseInt((skill4.value * 3.2) + (party.value * 1.25) + (bless.value * 1.25) + parseInt(2));
rockrain3.value=parseInt((skill4.value * 2.8) + (party.value * 1.25) + (bless.value * 1.25) + parseInt(1));
rrpenalty1.value=parseInt(((skill4.value * 3.8) + (party.value * 1.25) + (bless.value * 1.25) + parseInt(3))/3*2);
rrpenalty2.value=parseInt(((skill4.value * 3.2) + (party.value * 1.25) + (bless.value * 1.25) + parseInt(2))/3*2);
rrpenalty3.value=parseInt(((skill4.value * 2.8) + (party.value * 1.25) + (bless.value * 1.25) + parseInt(1))/3*2);
sharpshoot1.value=parseInt((7*skill4.value)+(8*gun.value)+(2*party.value)+(2*bless.value));
sharpshoot2.value=parseInt((6*skill4.value)+(7*gun.value)+(2*party.value)+(2*bless.value));
sharpshoot3.value=parseInt((5*skill4.value)+(6*gun.value)+(2*party.value)+(2*bless.value));
ssbonus1.value=parseInt(((7*skill4.value)+(8*gun.value)+(2*party.value)+(2*bless.value))*1.5);
ssbonus2.value=parseInt(((6*skill4.value)+(7*gun.value)+(2*party.value)+(2*bless.value))*1.5);
ssbonus3.value=parseInt(((5*skill4.value)+(6*gun.value)+(2*party.value)+(2*bless.value))*1.5);
partybless1r.value=parseInt((0.4 * party.value) + (0.8 * skill4.value));
partybless2r.value=parseInt((0.4 * party.value) + (1.2 * skill4.value));
partybless3r.value=parseInt((0.4 * party.value) + (1 * skill4.value));
partyblessd.value=parseInt(157 + (skill4.value * 1.9));
lightning1.value=parseInt((4 * skill5.value) + (2 * party.value) + (2 * bless.value) + parseInt(8));
lightning2.value=parseInt((5 * skill5.value) + (2 * party.value) + (2 * bless.value) + parseInt(10));
lightning3.value=parseInt((6 * skill5.value) + (2 * party.value) + (2 * bless.value) + parseInt(12));
magicbullet1.value=parseInt((6 * skill5.value) + (3 * gun.value) + (1 * party.value) + (1 * bless.value) + parseInt(7));
magicbullet2.value=parseInt((4 * skill5.value) + (3 * gun.value) + (1 * party.value) + (1 * bless.value) + parseInt(6));
magicbullet3.value=parseInt((5 * skill5.value) + (3 * gun.value) + (1 * party.value) + (1 * bless.value) + parseInt(6));
holybolt1.value=parseInt((2.5 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2));
holybolt2.value=parseInt((1.6 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2));
holybolt3.value=parseInt((2 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2));
hbbonus1.value=parseInt(4 * ((2.5 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2)) / 3);
hbbonus2.value=parseInt(4 * ((1.6 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2)) / 3);
hbbonus3.value=parseInt(4 * ((2 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2)) / 3);
rainbow1.value=(5 * skill6.value) + (1 * party.value) + (1 * bless.value) + 8;
rainbow2.value=(7 * skill6.value) + (1 * party.value) + (1 * bless.value) + 13;
rainbow3.value=(6 * skill6.value) + (1 * party.value) + (1 * bless.value) + 10;
rbsplash.value=parseInt((5 * party.value / 3) + (5 * bless.value / 3));
powershot1.value=parseInt((2.5 * skill6.value) + (3 * gun.value) + ((1*party.value) - 2) + (bless.value * 1));
powershot2.value=parseInt((2.9 * skill6.value) + (3 * gun.value) + (party.value * 1) + (bless.value * 1));
pspenalty1.value=parseInt(((2.5 * skill6.value) + (3 * gun.value) + ((1*party.value) - 2) + (bless.value * 1))/3*2);
pspenalty2.value=parseInt(((2.9 * skill6.value) + (3 * gun.value) + ((1*party.value) * 1) + (bless.value * 1))/3*2);
silverbullet1.value=parseInt((5 * skill6.value) + (4 * gun.value) + (1.5 * party.value) + (1.5 * bless.value) + parseInt(5));
silverbullet2.value=parseInt((4 * skill6.value) + (4 * gun.value) + (1.5 * party.value) + (1.5 * bless.value) + parseInt(4));
silverbullet3.value=parseInt((3.5 * skill6.value) + (4 * gun.value) + (1.5 * party.value) + (1.5 * bless.value) + parseInt(3));
sbbonus1.value=parseInt(5 * ((5 * skill6.value) + (4 * gun.value) + (1.5 * party.value) + (1.5 * bless.value))/3);
sbbonus2.value=parseInt(5 * ((4 * skill6.value) + (4 * gun.value) + (1.5 * party.value) + (1.5 * bless.value))/3);
sbbonus3.value=parseInt(5 * ((3.5 * skill6.value) + (4 * gun.value) + (1.5 * party.value) + (1.5 * bless.value))/3);
kineticsmash1.value=(9 * skill7.value) + (3 * party.value) + (3 * bless.value) + 13;
kineticsmash2.value=(9 * skill7.value) + (2 * party.value) + (2 * bless.value) + 13;
kineticsmash3.value=(11 * skill7.value) + (3 * party.value) + (3 * bless.value) + 17;
dynamite1.value=parseInt((2.5 * skill7.value) + (1 * party.value) + (1 * bless.value) + parseInt(3));
dynamite2.value=parseInt((2.9 * skill7.value) + (1 * party.value) + (1 * bless.value) + parseInt(3));
dynamite3.value=parseInt((2.1 * skill7.value) + (1 * party.value) + (1 * bless.value) + parseInt(2));
spooksummon1d.value=parseInt((0.48 * skill7.value) + (0.12 * party.value) + (0.12 * bless.value) + parseInt(172));
spooksummon2d.value=parseInt((0.4 * skill7.value) + (0.12 * party.value) + (0.12 * bless.value) + parseInt(160));
spooksummonh.value=parseInt((2 * skill7.value) + (party.value / 3 * 2) + (bless.value / 3 * 2) + 6)
spooksummonr.value=parseInt((1+party.value/5) + (bless.value/5));
lifedrain1.value=parseInt((1.5*skill8.value) + (0.5*party.value) + (0.5*bless.value) + parseInt(2));
lifedrain2.value=parseInt((1*skill8.value) + (party.value/3) + (bless.value/3) + parseInt(1));
lifedrain3.value=parseInt((1.2*skill8.value) + (0.5*party.value) + (0.5*bless.value) + parseInt(1)) ;
lasoo1.value=parseInt((5.9 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(70));
lasoo2.value=parseInt((7.1 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(83));
lasoo3.value=parseInt((8.4 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(96));
lasoo1w3.value=parseInt(((5.9 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(70) )* 0.85);
lasoo2w3.value=parseInt(((7.1 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(83) )* 0.85);
lasoo3w3.value=parseInt(((8.4 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(96) )* 0.85);
lasoo1w4.value=parseInt(((5.9 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(70) )* 0.7);
lasoo2w4.value=parseInt(((7.1 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(83) )* 0.7);
lasoo3w4.value=parseInt(((8.4 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(96) )* 0.7);
lasoo1w5.value=parseInt(((5.9 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(70) )* 0.55);
lasoo2w5.value=parseInt(((7.1 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(83) )* 0.55);
lasoo3w5.value=parseInt(((8.4 * skill8.value) + (2.4 * party.value) + (2.4 * bless.value) + parseInt(96) )* 0.55);
hotg1.value=(10 * skill8.value) + (4 * party.value) + (4 * bless.value) + 8;
hotg3.value=(12 * skill8.value) + (4 * party.value) + (4 * bless.value) + 12
">
<label for="party">Party Level: </label><input type="number" label="party" id="party" name="party" min="1" max="56" value="1">
<label for="bless">Bless: </label><input type="number" label="bless" id="bless" name="bless" min="0" max="58" value="0">
<label for="gun">Base Damage: </label><input type="number" label="gun" id="gun" name="pagunrty" min="0" max="22" value="0">
<label for="talisman">Talisman Bonus: </label><input type="number" label="talisman" id="talisman" name="talisman" min="-1" max="6" value="0"><br>
<label for="health"><img src=/img/tse1/skill1_health.png title="Health"> </label><input type="number" label="health" id="health" name="health" min="0" max="30" value="0"><br>
<label for="baseHealth">Base Health: </label><output name="baseHealth" type="number" for="health party">23</output><br>
<label for="maxHealth">Max Health: </label><output name="maxHealth" type="number" for="health party">24</output><br>
<label for="mana"><img src=/img/tse1/skill2_mana.png title="Mana"> </label><input type="number" label="mana" id="mana" name="mana" min="0" max="30" value="0"><br>
<label for="baseMana">Base Mana: </label><output name="baseMana" type="number" for="mana talisman">5</output><br>
<label for="maxMana">Max Mana: </label><output name="maxMana" type="number" for="mana talisman">10</output><br>
<label for="magicReduction">Magical Reduction: </label><output name="magicReduction" type="number" for="mana talisman">0</output><br>
<label for="skill1"><img src=/img/tse1/skill3_chainmagic.png title="Chain Magic"><img src=/img/tse1/skill3_rifleattack.png title="Rifle Attack"> </label><input type="number" label="skill1" id="skill1" name="skill1" min="1" max="30" value="1"><br>
<label for="chainmagic">Chain Magic's Damage: </label><output name="chainmagic" type="number" for="skill1 party bless">1</output> x 3<br>
<label for="rifleattack">Rifle Attack's Damage: </label><output name="rifleattack" type="number" for="skill1 gun party bless">2</output><br>
<label for="mattrifle">Matthieu's Rifle Attack: </label><output name="mattrifle" type="number" for="skill1 gun party bless">1</output> (75% of original Rifle Attack damage)<br>
<label for="skill2"><img src=/img/tse1/skill4_kineticshield.png title="Kinetic Shield"><img src=/img/tse1/skill4_recover.png title="Recover"><img src=/img/tse1/skill4_partyheal.png title="Party Heal"> </label><input type="number" label="skill2" id="skill2" name="skill2" min="1" max="30" value="1"><br>
<label for="kineticshield">Kinetic Shield's Strength: </label><output name="kineticshield" type="number" for="skill2 party bless">2</output>HP<br>
<label for="recover1h">Peter's Recover: </label><output name="recover1h" type="number" for="skill2 party bless">2</output>;<label for="recover1c"> cooldown: </label><output name="recover1c" type="number" for="skill2 party">59</output> ticks<br>
<label for="recover2h">Edward's Recover: </label><output name="recover2h" type="number" for="skill2 party bless">2</output>;<label for="recover2c"> cooldown: </label><output name="recover2c" type="number" for="skill2 party">55</output> ticks<br>
<label for="recover3h">Samuel's Recover: </label><output name="recover3h" type="number" for="skill2 party bless">2</output>;<label for="recover3c"> cooldown: </label><output name="recover3c" type="number" for="skill2 party">55</output> ticks<br>
<label for="partyheal1">Clementas' Party Heal: </label><output name="partyheal1" type="number" for="skill2 party bless">1</output>HP<br>
<label for="partyheal2">Zepher's Party Heal: </label><output name="partyheal2" type="number" for="skill2 party bless">1</output>HP<br>
<label for="partyheal3">Matthieu's Party Heal: </label><output name="partyheal3" type="number" for="skill2 party bless">1</output>HP<br>
<label for="skill3"><img src=/img/tse1/skill5_magicshield.png title="Magic Shield"><img src=/img/tse1/skill5_speedfire.png title="Speed Fire"><img src=/img/tse1/skill5_partyrecharge.png title="Recharge"> </label><input type="number" label="skill3" id="skill3" name="skill3" min="1" max="30" value="1"><br>
<label for="magicshield1">Clara's Magic Shield Strength: </label><output name="magicshield1" type="number" for="skill3 party bless">2</output>HP<br>
<label for="magicshield2">Pippa's Magic Shield Strength: </label><output name="magicshield2" type="number" for="skill3 party bless">3</output>HP<br>
<label for="magicshield3">Eisfford's Magic Shield Strength: </label><output name="magicshield3" type="number" for="skill3 party bless">2</output>HP<br>
<label for="speedfire">Peter & Samuel's Speed Fire Cooldown: </label><output name="speedfire" type="number" for="skill3 party bless">57</output> ticks<br>
<label for="speedfire2">Edward's Speed Fire Cooldown: </label><output name="speedfire2" type="number" for="skill3 party bless">72</output> ticks<br>
<label for="partyrecharge">Clementas & Zepher's Party Recharge Cooldown: </label><output name="partyrecharge" type="number" for="skill3 party">67</output> ticks<br>
<label for="partyrecharge3">Matthieu's Party Recharge Cooldown: </label><output name="partyrecharge3" type="number" for="skill3 party">54</output> ticks<br>
<label for="skill4"><img src=/img/tse1/skill6_rockrain.png title="Rock Rain"><img src=/img/tse1/skill6_sharpshoot.png title="Sharpshoot"><img src=/img/tse1/skill6_partybless.png title="Party Bless"> </label><input type="number" label="skill4" id="skill4" name="skill4" min="0" max="30" value="0"><br>
<label for="rockrain1">Clara's Rock Rain: </label><output name="rockrain1" type="number" for="skill4 party bless">4</output> x 3 <label for="rrpenalty1">(</label><output name="rrpenalty1" type="number" for="skill4 party bless">2</output> against large enemies)<br>
<label for="rockrain2">Pippa's Rock Rain: </label><output name="rockrain2" type="number" for="skill4 party bless">3</output> x 3 <label for="rrpenalty2">(</label><output name="rrpenalty2" type="number" for="skill4 party bless">2</output> against large enemies)<br>
<label for="rockrain3">Eisfford's Rock Rain: </label><output name="rockrain3" type="number" for="skill4 party bless">2</output> x 3 <label for="rrpenalty3">(</label><output name="rrpenalty3" type="number" for="skill4 party bless">1</output> against large enemies)<br>
<label for="sharpshoot1">Peter's Sharpshoot: </label><output name="sharpshoot1" type="number" for="skill4 gun party bless">2</output> <label for="ssbonus1">(</label><output name="ssbonus1" type="number" for="skill4 gun party bless">3</output> against large enemies)<br>
<label for="sharpshoot2">Edward's Sharpshoot: </label><output name="sharpshoot2" type="number" for="skill4 gun party bless">2</output> <label for="ssbonus2">(</label><output name="ssbonus2" type="number" for="skill4 gun party bless">3</output> against large enemies)<br>
<label for="sharpshoot3">Samuel's Sharpshoot: </label><output name="sharpshoot3" type="number" for="skill4 gun party bless">2</output> <label for="ssbonus3">(</label><output name="ssbonus3" type="number" for="skill4 gun party bless">3</output> against large enemies)<br>
<label for="partybless1r">Clementas' Party Bless: </label><output name="partybless1r" type="number" for="skill4 party">0</output> extra Party Levels<br>
<label for="partybless2r">Zepher's Party Bless: </label><output name="partybless2r" type="number" for="skill4 party">0</output> extra Party Levels<br>
<label for="partybless3r">Matthieu's Party Bless: </label><output name="partybless3r" type="number" for="skill4 party">0</output> extra Party Levels<br>
<label for="partyblessd">Everyone's blesses will last for </label><output name="partyblessd" type="number" for="skill4 party">157</output> ticks<br>
<label for="skill5"><img src=/img/tse1/skill7_celestiallightning.png title="Celestial Lightning"><img src=/img/tse1/skill7_magicbullet.png title="Magic Bullet"><img src=/img/tse1/skill7_holybolt.png title="Holy Bolt"> </label><input type="number" label="skill5" id="skill5" name="skill5" min="0" max="30" value="0"><br>
<label for="lightning1">Clara's Celestial Lightning: </label><output name="lightning1" type="number" for="skill5 party bless">10</output><br>
<label for="lightning2">Pippa's Celestial Lightning: </label><output name="lightning2" type="number" for="skill5 party bless">12</output><br>
<label for="lightning3">Eisfford's Celestial Lightning: </label><output name="lightning3" type="number" for="skill5 party bless">14</output><br>
<label for="magicbullet1">Peter's Magic Bullet: </label><output name="magicbullet1" type="number" for="skill5 gun party bless">8</output><br>
<label for="magicbullet2">Edward's Magic Bullet: </label><output name="magicbullet2" type="number" for="skill5 gun party bless">8</output><br>
<label for="magicbullet3">Samuel's Magic Bullet: </label><output name="magicbullet3" type="number" for="skill5 gun party bless">8</output><br>
<label for="holybolt1">Clementas' Holy Bolt: </label><output name="holybolt1" type="number" for="skill5 party bless">3</output> x 2 <label for="hbbonus1">(</label><output name="hbbonus1" type="number" for="skill5 party bless">4</output> x 2 against undead enemies)<br>
<label for="holybolt2">Zepher's Holy Bolt: </label><output name="holybolt2" type="number" for="skill5 party bless">3</output> x 2 <label for="hbbonus2">(</label><output name="hbbonus2" type="number" for="skill5 party bless">4</output> x 2 against undead enemies)<br>
<label for="holybolt3">Matthieu's Holy Bolt: </label><output name="holybolt3" type="number" for="skill5 party bless">3</output> x 2 <label for="hbbonus3">(</label><output name="hbbonus3" type="number" for="skill5 party bless">4</output> x 2 against undead enemies)<br>
<label for="skill6"><img src=/img/tse1/skill8_rainbow.png title="Rainbow"><img src=/img/tse1/skill8_powershot.png title="Power Shot"><img src=/img/tse1/skill8_silverbullet.png title="Silver Bullet"> </label><input type="number" label="skill6" id="skill6" name="skill6" min="0" max="30" value="0"><br>
<label for="rainbow1">Clara's Rainbow: </label><output name="rainbow1" type="number" for="skill6 party bless">7</output> (-2 for older areas)<br>
<label for="rainbow2">Pippa's Rainbow: </label><output name="rainbow2" type="number" for="skill6 party bless">11</output> (-3 for older areas)<br>
<label for="rainbow3">Eisfford's Rainbow: </label><output name="rainbow3" type="number" for="skill6 party bless">9</output> (-2 for older areas)<br>
<label for="rbsplash">Splash bonus: </label><output name="rbsplash" type="number" for="skill6 party bless">1</output><br>
<label for="powershot1">Peter & Samuel's Power Shot: </label><output name="powershot1" type="number" for="skill6 party gun bless">-1</output> per hit <label for="pspenalty1">(</label><output name="pspenalty1" type="number" for="skill6 gun party bless">0</output> against large enemies)<br>
<label for="powershot2">Edward's Power Shot: </label><output name="powershot2" type="number" for="skill6 party gun bless">1</output> per hit <label for="pspenalty2">(</label><output name="pspenalty2" type="number" for="skill6 gun party bless">0</output> against large enemies)<br>
<label for="silverbullet1">Clementas' Silver Bullet: </label><output name="silverbullet1" type="number" for="skill6 party gun bless">1</output> <label for="sbbonus1">(</label><output name="sbbonus1" type="number" for="skill6 party bless"></output> against undead enemies) (-5 for older areas)<br>
<label for="silverbullet2">Zepher's Silver Bullet: </label><output name="silverbullet2" type="number" for="skill6 party gun bless">1</output> <label for="sbbonus2">(</label><output name="sbbonus2" type="number" for="skill6 party bless"></output> against undead enemies)  (-4 for older areas)<br>
<label for="silverbullet3">Matthieu's Silver Bullet: </label><output name="silverbullet3" type="number" for="skill6 party gun bless">1</output> <label for="sbbonus3">(</label><output name="sbbonus3" type="number" for="skill6 party bless"></output> against undead enemies)  (-3 for older areas)<br>
<label for="skill7"><img src=/img/tse1/skill9_kineticsmash.png title="Kinetic Smash"><img src=/img/tse1/skill9_dynamite.png title="Dynamite"><img src=/img/tse1/skill9_spooksummon.png title="Spook Summon"> </label><input type="number" label="skill7" id="skill7" name="skill7" min="0" max="30" value="0"><br>
<label for="kineticsmash1">Clara's Kinetic Smash: </label><output name="kineticsmash1" type="number" for="skill7 party bless">16</output><br>
<label for="kineticsmash2">Pippa's Kinetic Smash: </label><output name="kineticsmash2" type="number" for="skill7 party bless">15</output><br>
<label for="kineticsmash3">Eisfford's Kinetic Smash: </label><output name="kineticsmash3" type="number" for="skill7 party bless">20</output><br>
<label for="dynamite1">Peter's Dynamite: </label><output name="dynamite1" type="number" for="skill7 party bless">3</output> x 4 (-1 of the sum in older areas)<br>
<label for="dynamite2">Edward's Dynamite: </label><output name="dynamite2" type="number" for="skill7 party bless">3</output> x 4<br>
<label for="dynamite3">Samuel's Dynamite: </label><output name="dynamite3" type="number" for="skill7 party bless">3</output> x 4 (+1 of the sum in older areas)<br>
<label for="spooksummon1d">Clementas' & Matthieu's Spook Summon duration: </label><output name="spooksummon1d" type="number" for="skill7 party bless">172</output> ticks<br>
<label for="spooksummon2d">Zepher's Spook Summon duration: </label><output name="spooksummon2d" type="number" for="skill7 party bless">160</output> ticks<br>
<label for="spooksummonh">Spook Summon's Holy Bolt: </label><output name="spooksummonh" type="number" for="skill7 party bless">6</output> x 2<br>
<label for="spooksummonr">Spook Summon's Heal: </label><output name="spooksummonr" type="number" for="skill7 party bless">1</output>HP<br>
<label for="skill8"><img src=/img/tse1/skill10_lifedrain.png title="Life Drain"><img src=/img/tse1/skill10_lasoo.png title="Lasoo"><img src=/img/tse1/skill10_hotg.png title="Hand of the Gods"> </label><input type="number" label="skill8" id="skill8" name="skill8" min="0" max="30" value="0"><br>
<label for="lifedrain1">Clara's Life Drain: </label><output name="lifedrain1" type="number" for="skill8 party bless">2</output> x 7<br>
<label for="lifedrain2">Pippa's Life Drain: </label><output name="lifedrain2" type="number" for="skill8 party bless">1</output> x 7<br>
<label for="lifedrain3">Eisfford's Life Drain: </label><output name="lifedrain3" type="number" for="skill8 party bless">1</output> x 7<br>
<label for="lasoo1">Peter's Lasoo: </label><output name="lasoo1" type="number" for="skill8 party bless">72</output>-tick stun<label for="lasoo1w3"> (</label><output name="lasoo1w3" type="number" for="skill8 party bless">61</output> ticks in World 3,<label for="lasoo1w4"> </label><output name="lasoo1w4" type="number" for="skill8 party bless">51</output> ticks in World 4,<label for="lasoo1w3"> </label><output name="lasoo1w5" type="number" for="skill8 party bless">40</output> ticks in World 5)<br>
<label for="lasoo2">Edward's Lasoo: </label><output name="lasoo2" type="number" for="skill8 party bless">85</output>-tick stun<label for="lasoo2w3"> (</label><output name="lasoo2w3" type="number" for="skill8 party bless">72</output> ticks in World 3,<label for="lasoo2w4"> </label><output name="lasoo2w4" type="number" for="skill8 party bless">60</output> ticks in World 4,<label for="lasoo2w3"> </label><output name="lasoo2w5" type="number" for="skill8 party bless">48</output> ticks in World 5)<br>
<label for="lasoo3">Samuel's Lasoo: </label><output name="lasoo3" type="number" for="skill8 party bless">98</output>-tick stun<label for="lasoo3w3"> (</label><output name="lasoo3w3" type="number" for="skill8 party bless">84</output> ticks in World 3,<label for="lasoo3w4"> </label><output name="lasoo3w4" type="number" for="skill8 party bless">69</output> ticks in World 4,<label for="lasoo3w3"> </label><output name="lasoo3w5" type="number" for="skill8 party bless">55</output> ticks in World 5)<br>
<label for="hotg1">Clementas' & Zepher's Hand of the Gods: </label><output name="hotg1" type="number" for="skill8 party bless">12</output><br>
<label for="hotg3">Matthieu's Hand of the Gods: </label><output name="hotg3" type="number" for="skill8 party bless">16</output>
</form>
