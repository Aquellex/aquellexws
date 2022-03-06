---
layout: tutorial
title: 'The Spirit Engine 1 game mechanics'
lastUpdated: '2022-03-06'
---

All documentation is done with ticks. Each tick lasts for 0.1 seconds on Slower Battles switched on, 0.05 for the same option switched off. So 50 ticks is 5.0 seconds and 2.5 seconds, respectively.

The first cooldown for your party is a 2-second delay (independent from ticks and is unaffected by the Slower Battles toggle) + 40 ticks.<br>
The first cooldown for the enemies is a 2-second delay (independent from ticks and is unaffected by the Slower Battles toggle) + whatever their first cooldown stat is.

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

| ID  | Icon                                                                                                    | Name                                          | Mana Points &<br>Magical Reduction | Special Attributes                                                                                                                                                                                                                                                                                                                       | Location                                                          | Cost  |
| :-- | :------------------------------------------------------------------------------------------------------ | :-------------------------------------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- | :---- |
| 1   | ![inv_crystaltalismanoftricklingmanapool.png](/img/tse1/inv_crystaltalismanoftricklingmanapool.png)     | Crystal Talisman of Trickling Mana Pool       | 2                                  | N/A                                                                                                                                                                                                                                                                                                                                      | Homestead (World 1)                                               | 2g    |
| 4   | ![inv_rubytalismanofminormanaregen.png](/img/tse1/inv_rubytalismanofminormanaregen.png)                 | Ruby Talisman of Minor Mana Regeneration      | 0                                  | Self-recharge 1 mana every 290 ticks                                                                                                                                                                                                                                                                                                     | Giant's Toe (World 1)                                             | 24g   |
| 8   | ![inv_gnarledtalismanofpartyheal.png](/img/tse1/inv_gnarledtalismanofpartyheal.png)                     | Gnarled Talisman of Party Healing             | 1                                  | Party Heal (excluding wearer) for floor((1/6th of Party Level) + 1) HP every 210 ticks                                                                                                                                                                                                                                                   | Giant's Toe (World 1)                                             | 32g   |
| 2   | ![inv_diamondtalismanofflowingmanapool.png](/img/tse1/inv_diamondtalismanofflowingmanapool.png)         | Diamond Talisman of Flowing Mana Pool         | 4                                  | N/A                                                                                                                                                                                                                                                                                                                                      | The Misty Marshes (World 2)                                       | 155g  |
| 6   | ![inv_emeraldtalismanofblood.png](/img/tse1/inv_emeraldtalismanofblood.png)                             | Emerald Talisman of Minor Health Regeneration | -1                                 | Self-heal floor((1/3rd of Party Level) + 1) HP every 220 ticks                                                                                                                                                                                                                                                                           | The Misty Marshes (World 2)                                       | 110g  |
| 9   | ![inv_mercurytalismanofquickening.png](/img/tse1/inv_mercurytalismanofquickening.png)                   | Mercury Talisman of Quickening                | 0                                  | Decreases cooldown time by 10%                                                                                                                                                                                                                                                                                                           | The Misty Marshes (World 2)                                       | 65g   |
| 13  | ![inv_skeletaltalismanoflifedrain.png](/img/tse1/inv_skeletaltalismanoflifedrain.png)                   | Skeletal Talisman of Life Drain               | 2                                  | Casts Life Drain dealing (Party Level x 3.5) + 2 damage every 293 ticks                                                                                                                                                                                                                                                                  | Hamlet (World 2), only if Clara is in your party                  | N/A   |
| 5   | ![inv_sapphiretalismanofmajormanaregen.png](/img/tse1/inv_sapphiretalismanofmajormanaregen.png)         | Sapphire Talisman of Major Mana Regeneration  | 0                                  | Self-recharge 1 mana every 190 ticks                                                                                                                                                                                                                                                                                                     | Downtown Heavena (World 3)                                        | 250g  |
| 19  | ![inv_floweringtalismanofgaia.png](/img/tse1/inv_floweringtalismanofgaia.png)                           | Flowering Talisman of Gaia                    | 3                                  | Casts 131-tick stun to a random enemy every 390 ticks                                                                                                                                                                                                                                                                                    | The Hepplekeck Village (World 3)                                  | 370g  |
| 14  | ![inv_glitteringtalismanoflifetransference.png](/img/tse1/inv_glitteringtalismanoflifetransference.png) | Glittering Talisman of Life Transference      | -1                                 | One of either occurs every 303 ticks:<br><li>Good: Self-heals by half of Party Level and damages random enemy by Party Level x 7</li><li>Bad: Does damage to wearer by half of Party Level and heals random enemy by Party Level x 3</li>                                                                                                | The Hepplekeck Village (World 3)                                  | 315g  |
| 16  | ![inv_translucentamuletoftheheavens.png](/img/tse1/inv_translucentamuletoftheheavens.png)               | Translucent Amulet of the Heavens             | 1                                  | Summons N-damaging (Party Level x 3) meteor every 260 ticks (will not be summoned if one is already wearing Favoured Drapes)                                                                                                                                                                                                             | Complete Kaikin Gorge 1st then The Leafy Underbrush 2nd (World 3) | N/A   |
| 7   | ![inv_pearltalismanoftheheart.png](/img/tse1/inv_pearltalismanoftheheart.png)                           | Pearl Talisman of the Heart                   | 0                                  | Self-heal floor((1/3rd of Party Level) + 1) HP every 150 ticks                                                                                                                                                                                                                                                                           | Robert Hat's Happy Hideout (World 3)                              | 325g  |
| 18  | ![inv_blurredtalismanofthespectrum.png](/img/tse1/inv_blurredtalismanofthespectrum.png)                 | Blurred Talisman of the Spectrum              | 3                                  | Decreases Rainbow cooldown time by 33%                                                                                                                                                                                                                                                                                                   | The Magi Retreat (World 4), only if Pippa is in your party        | N/A   |
| 3   | ![inv_opaltalismanofsurgingmanapool.png](/img/tse1/inv_opaltalismanofsurgingmanapool.png)               | Opal Talisman of Surging Mana Pool            | 6                                  | N/A                                                                                                                                                                                                                                                                                                                                      | The Magi Retreat (World 4)                                        | 885g  |
| 17  | ![inv_incandesanttalismanofmagicmastery.png](/img/tse1/inv_incandesanttalismanofmagicmastery.png)       | Incandescent Talisman of Magic Mastery        | 2                                  | Adds an extra blast to Chain Magic                                                                                                                                                                                                                                                                                                       | The Magi Retreat (World 4)                                        | 1005g |
| 10  | ![inv_quicksilvertalismanofacceleration.png](/img/tse1/inv_quicksilvertalismanofacceleration.png)       | Quicksilver Talisman of Acceleration          | 0                                  | Decreases cooldown time by 20%                                                                                                                                                                                                                                                                                                           | The Veroonai Enclave (World 4)                                    | 1210g |
| 15  | ![inv_woodentalismenofjudgement.png](/img/tse1/inv_woodentalismenofjudgement.png)                       | Wooden Talisman of Judgement                  | 3                                  | Rains 3 holy bolts dealing (Party Level - 5) damage on each enemy every 273 ticks ticks                                                                                                                                                                                                                                                  | The Veroonai Enclave (World 4)                                    | 1076g |
| 12  | ![inv_warpedtalismanofdeflection.png](/img/tse1/inv_warpedtalismanofdeflection.png)                     | Warped Talisman of Deflection                 | 2                                  | Adds (66% of Party Level) absorption to Magic Shield every 210 ticks                                                                                                                                                                                                                                                                     | The Arcane Library (World 4)                                      | 1650g |
| 11  | ![inv_mummifiedtalismanofsummoning.png](/img/tse1/inv_mummifiedtalismanofsummoning.png)                 | Mummified Talisman of Summoning               | 3                                  | Casts Spook Summon every 240 ticks with the properties:<li>((Party Level x 2) + 50) x 0.8 to duration if Spook Summon's damage is 0 or less, otherwise ((Party Level x 2) + 140) x 0.8 to duration if Spook Summon's damage is greater than 0</li><li>((Party Level / 2) + 10) to damage if Spook Summon's damage is greater than 0</li> | Prototype Development Wing (World 5)                              | 2930g |

## ENEMIES

### WORLD 1: GIANT'S CRADLE

#### Junior Kippon<br>

HP: 30

| Animation                                                     | Kind  | Attack         | Type     | Damage | Cooldown                                                                                                                                       |
| :------------------------------------------------------------ | :---- | :------------- | :------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Junior_Kippon.gif](/img/tse1/Junior_Kippon.gif)             | Idle  | First cooldown | N/A      | N/A    | Between 10-15 ticks                                                                                                                            |
| ![Junior Kippon_melee.gif](/img/tse1/Junior Kippon_melee.gif) | Melee | Lunge          | Physical | 2      | <li>57 ticks (all other areas)</li> <li>65 ticks (first The Prairie Trail battle)</li> <li>74 ticks (remaining The Prairie Trail battles)</li> |

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

| Animation                                         | Kind  | Attack         | Type     | Damage | Cooldown                                                             |
| :------------------------------------------------ | :---- | :------------- | :------- | :----- | :------------------------------------------------------------------- |
| ![snowman_idle.gif](/img/tse1/snowman_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 10-15 ticks                                                  |
| ![snowman_melee.gif](/img/tse1/snowman_melee.gif) | Melee | Lunge          | Physical | 6      | 64 ticks<br>75% chance to use this attack<br>Always uses this first  |
| ![snowman_heal.png](/img/tse1/snowman_heal.png)   | Heal  | Recover        | Self     | 30     | 67 ticks<br>25% chance to use this attack, unless HP is less than 60 |

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

| Animation                                                     | Kind             | Attack         | Type     | Damage   | Cooldown                                                       |
| :------------------------------------------------------------ | :--------------- | :------------- | :------- | :------- | :------------------------------------------------------------- |
| ![Ice_Shaman_idle.gif](/img/tse1/Ice_Shaman_idle.gif)         | Idle             | First cooldown | N/A      | N/A      | Between 10-15 ticks                                            |
| ![Ice_Shaman_range.gif](/img/tse1/Ice_Shaman_range.gif)       | Range            | Hailstorm      | Physical | 7        | 47 ticks<br>25% chance to use this attack<br>Always uses first |
| ![Ice_Shaman_stun.gif](/img/tse1/Ice_Shaman_stun.gif)         | Stun<br>Indirect | Freeze         | Ailment  | 70 ticks | 52 ticks<br>50% chance to use this attack                      |
| ![Ice_Shaman_recharge.gif](/img/tse1/Ice_Shaman_recharge.gif) | Recharge         | Recharge       | Self     | N/A      | 39 ticks<br>25% chance to skip a turn                          |

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

| Animation                                                         | Kind              | Attack          | Type     | Damage   | Cooldown                                                                                            |
| :---------------------------------------------------------------- | :---------------- | :-------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------- |
| ![Crazy_Hermit_idle.gif](/img/tse1/Crazy_Hermit_idle.gif)         | Idle              | First cooldown  | N/A      | N/A      | Between 15-17 ticks                                                                                 |
| ![Crazy_Hermit_range.gif](/img/tse1/Crazy_Hermit_range.gif)       | Magic<br>Indirect | Blood Lightning | Absolute | 7        | Between 33-35 ticks<br>Will use this or Chain Magic a total of 3 times before going to freeze       |
| ![Crazy_Hermit_magic.gif](/img/tse1/Crazy_Hermit_magic.gif)       | Magic             | Chain Magic     | Magical  | 3 x 3    | Between 34 ticks<br>Will use this or Blood Lightning a total of 3 times before going to freeze      |
| ![Crazy_Hermit_stun.gif](/img/tse1/Crazy_Hermit_stun.gif)         | Stun<br>Indirect  | Freeze          | Ailment  | 70 ticks | 8 ticks<br>Will use this attack twice before recharging                                             |
| ![Crazy_Hermit_recharge.gif](/img/tse1/Crazy_Hermit_recharge.gif) | Recharge          | Recharge        | Self     | N/A      | 51 ticks                                                                                            |
| ![Crazy_Hermit_shield.gif](/img/tse1/Crazy_Hermit_shield.gif)     | Defence           | Shields Up      | Self     | 60HP     | 14 ticks<br>Will use this move immediately when the battle starts, then it goes to 'First cooldown' |

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

| Animation                                       | Kind  | Attack         | Type     | Damage                                                                                                                                                                  | Cooldown                                                                                                 |
| :---------------------------------------------- | :---- | :------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![Zombie_idle.gif](/img/tse1/Zombie_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                                                                                                                                                     | Between 10-18 ticks                                                                                      |
| ![Zombie_range.gif](/img/tse1/Zombie_range.gif) | Range | Vomit          | Absolute | <li>1 x 4</li><li>2 DoT at The Town Graveyard</li><li>3 DoT in The Torchlit Catacombs</li><li>Each DoT deals 1 damage every 20 ticks</li><li>2 x 4 against shields</li> | <li>Between 92-97 ticks at The Town Graveyard</li><li>Between 87-92 ticks in The Torchlit Catacombs</li> |

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

| Animation                                           | Kind  | Attack         | Type     | Damage | Cooldown                                  |
| :-------------------------------------------------- | :---- | :------------- | :------- | :----- | ----------------------------------------- |
| ![Gargoyle_idle.gif](/img/tse1/Gargoyle_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 10-23 ticks                       |
| ![Gargoyle_melee.gif](/img/tse1/Gargoyle_melee.gif) | Melee | Lunge          | Physical | 9      | 41 ticks<br>2/3 chance to use this attack |
| ![Gargoyle_magic.gif](/img/tse1/Gargoyle_magic.gif) | Magic | Sonic Blast    | Magical  | 4 x 3  | 79 ticks<br>1/3 chance to use this attack |

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

| Animation                                                       | Kind   | Attack         | Type    | Damage                                                                        | Cooldown                                                                                        |
| :-------------------------------------------------------------- | :----- | :------------- | :------ | :---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![Skeleton_Fairy_idle.gif](/img/tse1/Skeleton_Fairy_idle.gif)   | Idle   | First cooldown | N/A     | N/A                                                                           | Between 13-27 ticks (11-25 at The Broken Bridge)                                                |
| ![Skeleton_Fairy_magic.gif](/img/tse1/Skeleton_Fairy_magic.gif) | Magic  | Sizzle Shots   | Magical | <li>3 x 3</li><li>Clamps at 1 x 3</li>                                        | 59 ticks at The Misty Marshes<br>62 ticks at Arachnid's Grove<br> 75% chance to use this attack |
| ![Skeleton_Fairy_magic.gif](/img/tse1/Skeleton_Fairy_magic.gif) | Debuff | Curse          | Ailment | 90 ticks (iterates 2 ticks instead if Party Bless is active)<br>Halves damage | 57 ticks<br>25% chance to use this attack                                                       |

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

#### Pulsating Gelatinous Ooze (NX, EX, MX, L, UD)

HP: ∞

| Animation                                             | Kind   | Attack       | Type     | Damage                  | Cooldown                                                         |
| :---------------------------------------------------- | :----- | :----------- | :------- | :---------------------- | ---------------------------------------------------------------- |
| ![Blobble_Capture.png](/img/tse1/Blobble_Capture.png) | Status | Blob Capture | Ailment  | Disables party rotation | Reaches 70 pixels away from the leftmost character in your party |
| ![blob.gif](/img/tse1/blob.gif)                       | Melee  | Absorb       | Absolute | 200                     | It moves its X position by 1 pixel every 2 ticks                 |

#### The Abombination (L, UD)

Only if Clementas is in your party.<br>
HP: 1390

| Animation                                     | Kind  | Attack         | Type     | Damage                                        | Cooldown                                                                         |
| :-------------------------------------------- | :---- | :------------- | :------- | :-------------------------------------------- | -------------------------------------------------------------------------------- |
| ![Abomb_idle.gif](/img/tse1/Abomb_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                           | Between 10-15 ticks                                                              |
| ![Abomb_aoe.gif](/img/tse1/Abomb_aoe.gif)     | AoE   | Poison Breath  | Absolute | 7 DoT, each DoT deals 1 damage every 18 ticks | 53 ticks<br>Starts with this attack                                              |
| ![Abomb_range.png](/img/tse1/Abomb_range.png) | Range | Kinetic Smash  | Physical | <li>15</li><li>14 agaist shields</li>         | 41 ticks<br>Will use this attack 3 times before switching to AoE, then repeating |
| ![Abomb_heal.gif](/img/tse1/Abomb_heal.gif)   | Heal  | Superheal      | Self     | Activates at 370HP                            | Heals 1HP every 2.4 ticks                                                        |

| XP  | Gold | Location                | Condition |
| :-- | :--- | :---------------------- | :-------- |
| 290 | 29   | The Abombination's Lair | N/A       |

#### Snack (UD)

HP: 735

| Animation                                           | Kind   | Attack         | Type            | Damage | Cooldown                                                                                                                                        |
| :-------------------------------------------------- | :----- | :------------- | :-------------- | :----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Snack_idle.gif](/img/tse1/Snack_idle.gif)         | Idle   | First cooldown | N/A             | N/A    | Between 10-15 ticks                                                                                                                             |
| ![Snack_melee.gif](/img/tse1/Snack_melee.gif)       | Melee  | Lunge          | Physical        | 15     | Between 27-29 ticks<br>2/3 chance to use this attack                                                                                            |
| ![Snack_range.gif](/img/tse1/Snack_range.gif)       | Range  | Trident Zap    | Absolute        | 3      | Between 33-35 ticks<br>1/3 chance to use this attack                                                                                            |
| ![Snack_peekaboo.gif](/img/tse1/Snack_peekaboo.gif) | Status | Phase Out      | Invulnerability | N/A    | Will occur 180 ticks into the battle (ignoring the 2-second delay at the beginning)<br>Ends on the 399th tick and resets its internal tick to 0 |
| ![Snack_jab.gif](/img/tse1/Snack_jab.gif)           | Melee  | Jab            | Physical        | 23     | Occurs at the 360th tick into the battle (ignoring the 2-second delay at the beginning)<br>Targets character with the lowest HP                 |

| XP  | Gold | Location          | Condition |
| :-- | :--- | :---------------- | :-------- |
| 390 | 76   | The Broken Bridge | N/A       |

#### Capricious Imp (UD)

HP: 496

| Animation                                                       | Kind  | Attack         | Type     | Damage | Cooldown                                             |
| :-------------------------------------------------------------- | :---- | :------------- | :------- | :----- | ---------------------------------------------------- |
| ![Capricious_imp_idle.gif](/img/tse1/Capricious_imp_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 10-15 ticks                                  |
| ![Capricious_imp_melee.gif](/img/tse1/Capricious_imp_melee.gif) | Melee | Lunge          | Physical | 10     | Between 24-26 ticks<br>2/3 chance to use this attack |
| ![Capricious_imp_range.gif](/img/tse1/Capricious_imp_range.gif) | Range | Trident Zap    | Absolute | 2      | Between 33-35 ticks<br>1/3 chance to use this attack |

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

| Animation                                             | Kind   | Attack         | Type            | Damage | Cooldown                                                                                                                                          |
| :---------------------------------------------------- | :----- | :------------- | :-------------- | :----- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Bogeyman_idle.gif](/img/tse1/Bogeyman_idle.gif)     | Idle   | First cooldown | N/A             | N/A    | Between 10-15 ticks                                                                                                                               |
| ![Bogeyman_melee.gif](/img/tse1/Bogeyman_melee.gif)   | Melee  | Lunge          | Physical        | 17     | Between 52-57 ticks                                                                                                                               |
| ![Bogeyman_shield.gif](/img/tse1/Bogeyman_shield.gif) | Status | Phase Out      | Invulnerability | N/A    | Will occur 144 ticks into the battle (ignoring the 2-second delay at the beginning)<br>Ends on the 319.2nd tick and resets its internal tick to 0 |

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

| Animation                                   | Kind   | Attack         | Type     | Damage                                                     | Cooldown                                                                                                                                           |
| :------------------------------------------ | :----- | :------------- | :------- | :--------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Neru_idle.gif](/img/tse1/Neru_idle.gif)   | Idle   | First cooldown | N/A      | N/A                                                        | Between 16-24 ticks                                                                                                                                |
| ![Neru_range.gif](/img/tse1/Neru_range.gif) | Lobbed | Fireball       | Physical | 15                                                         | 51 ticks<br>2/5 chance to use this attack                                                                                                          |
| ![Neru_aoe.gif](/img/tse1/Neru_aoe.gif)     | AoE    | Firewall       | Physical | 6 (armour is half effective & odd numbers will round down) | 54 ticks<br>2/5 chance to use this attack                                                                                                          |
| ![Neru_nuke.gif](/img/tse1/Neru_nuke.gif)   | Nuke   | Suicide Imp    | Physical | 64 (0 if you can detonate it within 4 hits)                | 80 ticks<br>1/5 chance to use this attack, then uses Lobbed or AoE attack unless HP is less than 370, in which case it will always use this attack |

| XP  | Gold | Location          | Condition |
| :-- | :--- | :---------------- | :-------- |
| 998 | 14   | The Defiled Altar | N/A       |

#### Father Belfidius

HP: 365

| Animation                                               | Kind    | Attack         | Type                        | Damage                                                                        | Cooldown                                                |
| :------------------------------------------------------ | :------ | :------------- | :-------------------------- | :---------------------------------------------------------------------------- | ------------------------------------------------------- |
| ![Belfidius_idle.png](/img/tse1/Belfidius_idle.png)     | Idle    | First cooldown | N/A                         | N/A                                                                           | Between 11-25 ticks<br>                                 |
| ![Belfidius_bless.gif](/img/tse1/Belfidius_bless.gif)   | Heal    | Party Heal     | Party<br>(including healer) | 32                                                                            | 69 ticks<br>3/4 chance to use this move                 |
| ![Belfidius_bless.gif](/img/tse1/Belfidius_bless.gif)   | Magical | Magic Blast    | Magical                     | 5                                                                             | 39 ticks<br>Will only use this move if Neru is defeated |
| ![Belfidius_debuff.gif](/img/tse1/Belfidius_debuff.gif) | Debuff  | Curse          | Ailment                     | 90 ticks (iterates 2 ticks instead if Party Bless is active)<br>Halves damage | 75 ticks<br>1/4 chance to use this move                 |

| XP  | Gold | Location          | Condition |
| :-- | :--- | :---------------- | :-------- |
| 100 | 75   | The Defiled Altar | N/A       |

#### Alaiyena (M-25)

HP: 552

| Animation                                                 | Kind     | Attack            | Type    | Damage                          | Cooldown                                                                |
| :-------------------------------------------------------- | :------- | :---------------- | :------ | :------------------------------ | ----------------------------------------------------------------------- |
| ![Alaiyena_idle.gif](/img/tse1/Alaiyena_idle.gif)         | Idle     | First cooldown    | N/A     | N/A                             | 44 ticks                                                                |
| ![Alaiyena_magic.gif](/img/tse1/Alaiyena_magic.gif)       | Magic    | Magical Swirl     | Magical | <li>11</li><li>Clamps at 3</li> | 80 ticks<br>Will use this attack first<br>3/7 chance to use this attack |
| ![Alaiyena_aoe.gif](/img/tse1/Alaiyena_aoe.gif)           | AoE      | Magical Hell Wind | Magical | 6                               | 89 ticks<br>1/7 chance to use this attack                               |
| ![Alaiyena_recharge.gif](/img/tse1/Alaiyena_recharge.gif) | Recharge | Recharge          | Self    | N/A                             | 52 ticks<br>3/7 chance to skip a turn                                   |

| XP  | Gold | Location    | Condition |
| :-- | :--- | :---------- | :-------- |
| 350 | 60   | Eastern Way | N/A       |

#### Dundee (N-30, E-30)

HP: 580 [will also heal 1HP every 16 ticks]

| Animation                                             | Kind     | Attack         | Type     | Damage | Cooldown                                             |
| :---------------------------------------------------- | :------- | :------------- | :------- | :----- | ---------------------------------------------------- |
| ![Dundee_idle.gif](/img/tse1/Dundee_idle.gif)         | Idle     | First cooldown | N/A      | N/A    | 26 ticks                                             |
| ![Dundee_range.gif](/img/tse1/Dundee_range.gif)       | Range    | Speed Fire     | Physical | 11 x 3 | Between 73-78 ticks<br>1/2 chance to use this attack |
| ![Dundee_heal.gif](/img/tse1/Dundee_heal.gif)         | Heal     | Recover        | Self     | 46     | 71 ticks<br>1/4 chance to use this move              |
| ![Dundee_recharge.gif](/img/tse1/Dundee_recharge.gif) | Recharge | Recharge       | Self     | N/A    | Between 47-49 ticks<br>1/4 chance to skip a turn     |

| XP  | Gold | Location    | Condition |
| :-- | :--- | :---------- | :-------- |
| 370 | 60   | Eastern Way | N/A       |

#### Sampson (N-10, E-10)

HP: 655

| Animation                                               | Kind           | Attack         | Type               | Damage                                  | Cooldown                                   |
| :------------------------------------------------------ | :------------- | :------------- | :----------------- | :-------------------------------------- | ------------------------------------------ |
| ![Sampson_idle.gif](/img/tse1/Sampson_idle.gif)         | Idle           | First cooldown | N/A                | N/A                                     | Between 14-19 ticks                        |
| ![Sampson_range.gif](/img/tse1/Sampson_range.gif)       | Range & Debuff | Cursed Bullet  | Physical & Ailment | 15, curses impacted player for 90 ticks | 119 ticks<br>3/4 chance to use this attack |
| ![Sampson_recharge.gif](/img/tse1/Sampson_recharge.gif) | Recharge       | Recharge       | Self               | N/A                                     | 72 ticks<br>1/4 chance to skip a turn      |

| XP  | Gold | Location    | Condition |
| :-- | :--- | :---------- | :-------- |
| 330 | 50   | Eastern Way | N/A       |

### WORLD 3: THE MANGO REPUBLIC

### WORLD 4: THE MYSTIC DUNES

### WORLD 5: CLARKE'S TOWER

## CALCULATORS (UNDER CONSTRUCTION)

<form oninput="
baseHealth.value=parseInt(22+(3*health.value)+(0.23*health.value*(party.value/2))+((party.value*5)/3));
maxHealth.value=parseInt(22+(3*health.value)+(0.23*health.value*(party.value/2))+((party.value*5)/3)+(party.value/2));
baseMana.value=parseInt(5+(mana.value/2))+parseInt(talisman.value);
maxMana.value=parseInt((5+(mana.value/2))+parseInt(talisman.value))*2;
magicReduction.value=parseInt((5+(mana.value/2))+parseInt(talisman.value))-5;
chainmagic.value=parseInt((skill1.value*1.5) + (party.value - 1) + (bless.value - 1));
rifleattack.value=parseInt((2*skill1.value)+(2*gun.value)+((party.value)/2)+((bless.value)/2));
mattrifle.value=parseInt(((2*skill1.value)+(2*gun.value)+((party.value)/2)+((bless.value)/2))*0.75);
kineticshield.value=parseInt((skill2.value * 1.25) + (party.value * 0.7) + (bless.value * 0.7) + parseInt(1));
recover1h.value=parseInt((skill2.value/2) + (party.value/5) + (bless.value/5) + parseInt(2));
recover2h.value=parseInt((skill2.value*0.6) + (party.value/4) + (party.value/4) + parseInt(2));
recover3h.value=parseInt((skill2.value*0.7) + (party.value/4) + (party.value/4) + parseInt(2));
recover1c.value=parseInt(59-(0.66*skill2.value));
recover2c.value=parseInt(55-(0.66*skill2.value));
recover3c.value=parseInt(55-(0.66*skill2.value));
partyheal1.value=parseInt((skill2.value * 0.38) + (party.value * 0.125) + (bless.value * 0.125) + parseInt(1));
partyheal2.value=parseInt((skill2.value * 0.44) + (party.value * 0.17) + (bless.value * 0.125) + parseInt(1));
partyheal3.value=parseInt((skill2.value * 0.42) + (party.value * 0.143) + (bless.value * 0.125) + parseInt(1));
magicshield1.value=parseInt((skill3.value * 1.25) + (party.value * 0.7) + (bless.value * 0.7) + parseInt(1));
magicshield2.value=parseInt((skill3.value * 1.5) + (party.value * 0.7) + (bless.value * 0.7) + parseInt(1));
magicshield3.value=parseInt((skill3.value * 1) + (party.value * 0.7) + (bless.value * 0.7) + parseInt(1));
speedfire.value=58 - skill3.value;
speedfire2.value=73 - skill3.value;
partyrecharge.value=parseInt(69 - (skill3.value * 1.5));
partyrecharge3.value=parseInt(56 - (skill3.value * 1.5));
rockrain1.value=parseInt((skill4.value * 3.8) + (party.value * 1.25) + parseInt(3));
rockrain2.value=parseInt((skill4.value * 3.2) + (party.value * 1.25) + parseInt(2));
rockrain3.value=parseInt((skill4.value * 2.8) + (party.value * 1.25) + parseInt(1));
sharpshoot1.value=parseInt((7*skill4.value)+(8*gun.value)+(2*party.value)+(2*bless.value));
sharpshoot2.value=parseInt((6*skill4.value)+(7*gun.value)+(2*party.value)+(2*bless.value));
sharpshoot3.value=parseInt((5*skill4.value)+(6*gun.value)+(2*party.value)+(2*bless.value));
ssbonus1.value=parseInt(((7*skill4.value)+(8*gun.value)+(2*party.value)+(2*bless.value))*1.5);
ssbonus2.value=parseInt(((6*skill4.value)+(7*gun.value)+(2*party.value)+(2*bless.value))*1.5);
ssbonus3.value=parseInt(((5*skill4.value)+(6*gun.value)+(2*party.value)+(2*bless.value))*1.5);
partybless1r.value=parseInt((0.4 * party.value) + (0.8 * skill4.value) + parseInt(1));
partybless2r.value=parseInt((0.4 * party.value) + (1.2 * skill4.value) + parseInt(1));
partybless3r.value=parseInt((0.4 * party.value) + (1 * skill4.value) + parseInt(1));
partyblessd.value=parseInt(157 + (skill4.value * 1.9));
lightning1.value=parseInt((4 * skill5.value) + (2 * party.value) + (2 * bless.value) + parseInt(8));
lightning2.value=parseInt((5 * skill5.value) + (2 * party.value) + (2 * bless.value) + parseInt(10));
lightning3.value=parseInt((6 * skill5.value) + (2 * party.value) + (2 * bless.value) + parseInt(12));
magicbullet1.value=parseInt((6 * skill5.value) + (3 * gun.value) + (1 * party.value) + (1 * bless.value) + parseInt(7));
magicbullet2.value=parseInt((4 * skill5.value) + (3 * gun.value) + (1 * party.value) + (1 * bless.value) + parseInt(7));
magicbullet3.value=parseInt((5 * skill5.value) + (3 * gun.value) + (1 * party.value) + (1 * bless.value) + parseInt(7));
holybolt1.value=parseInt((2.5 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2));
holybolt2.value=parseInt((1.6 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2));
holybolt3.value=parseInt((2 * skill5.value) + (1 * party.value) + (1 * bless.value) + parseInt(2))/*;
rainbow1.value=;
rainbow2.value=;
rainbow3.value=;
powershot1.value=;
powershot2.value=;
powershot3.value=;
silverbullet1.value=;
silverbullet2.value=;
silverbullet3.value=;
kineticsmash1.value=;
kineticsmash2.value=;
kineticsmash3.value=;
dynamite1.value=;
dynamite2.value=;
dynamite3.value=;
spooksummon1.value=;
spooksummon2.value=;
spooksummon3.value=;
lifedrain1.value=;
lifedrain2.value=;
lifedrain3.value=;
lasoo1.value=;
lasoo2.value=;
lasoo3.value=;
hotg1.value=;
hotg2.value=;
hotg3.value= */
">
<label for="party">Party Level: </label><input type="number" label="party" id="party" name="party" min="1" max="55" value="1">
<label for="bless">Bless: </label><input type="number" label="bless" id="bless" name="bless" min="0" max="58" value="0">
<label for="gun">Base Damage: </label><input type="number" label="gun" id="gun" name="pagunrty" min="0" max="22" value="0">
<label for="talisman">Talisman Bonus: </label><input type="number" label="talisman" id="talisman" name="talisman" min="-1" max="6" value="0"><br>
<label for="health"><img src=/img/tse1/skill1_health.png> </label><input type="number" label="health" id="health" name="health" min="0" max="30" value="0"><br>
<label for="baseHealth">Base Health: </label><output name="baseHealth" type="number" for="health party">23</output><br>
<label for="maxHealth">Max Health: </label><output name="maxHealth" type="number" for="health party">24</output><br>
<label for="mana"><img src=/img/tse1/skill2_mana.png> </label><input type="number" label="mana" id="mana" name="mana" min="0" max="30" value="0"><br>
<label for="baseMana">Base Mana: </label><output name="baseMana" type="number" for="mana talisman">5</output><br>
<label for="maxMana">Max Mana: </label><output name="maxMana" type="number" for="mana talisman">10</output><br>
<label for="magicReduction">Magical Reduction: </label><output name="magicReduction" type="number" for="mana talisman">0</output><br>
<label for="skill1"><img src=/img/tse1/skill3_chainmagic.png><img src=/img/tse1/skill3_rifleattack.png> </label><input type="number" label="skill1" id="skill1" name="skill1" min="1" max="30" value="1"><br>
<label for="chainmagic">Chain Magic's Damage: </label><output name="chainmagic" type="number" for="skill1 party bless">1</output> x 3<br>
<label for="rifleattack">Rifle Attack's Damage: </label><output name="rifleattack" type="number" for="skill1 gun party bless">2</output><br>
<label for="mattrifle">Matthieu's Rifle Attack: </label><output name="mattrifle" type="number" for="skill1 gun party bless">1</output> (75% of original Rifle Attack damage)<br>
<label for="skill2"><img src=/img/tse1/skill4_kineticshield.png><img src=/img/tse1/skill4_recover.png><img src=/img/tse1/skill4_partyheal.png> </label><input type="number" label="skill2" id="skill2" name="skill2" min="1" max="30" value="1"><br>
<label for="kineticshield">Kinetic Shield's Strength: </label><output name="kineticshield" type="number" for="skill2 party bless">2</output>HP<br>
<label for="recover1h">Peter's Self-Heal: </label><output name="recover1h" type="number" for="skill2 party bless">2</output>;<label for="recover1c"> cooldown: </label><output name="recover1c" type="number" for="skill2 party">59</output> ticks<br>
<label for="recover2h">Edward's Self-Heal: </label><output name="recover2h" type="number" for="skill2 party bless">2</output>;<label for="recover2c"> cooldown: </label><output name="recover2c" type="number" for="skill2 party">55</output> ticks<br>
<label for="recover3h">Samuel's Self-Heal: </label><output name="recover3h" type="number" for="skill2 party bless">2</output>;<label for="recover3c"> cooldown: </label><output name="recover3c" type="number" for="skill2 party">55</output> ticks<br>
<label for="partyheal1">Clementas' Party Heal: </label><output name="partyheal1" type="number" for="skill2 party bless">1</output>HP<br>
<label for="partyheal2">Zepher's Party Heal: </label><output name="partyheal2" type="number" for="skill2 party bless">1</output>HP<br>
<label for="partyheal3">Matthieu's Party Heal: </label><output name="partyheal3" type="number" for="skill2 party bless">1</output>HP<br>
<label for="skill3"><img src=/img/tse1/skill5_magicshield.png><img src=/img/tse1/skill5_speedfire.png><img src=/img/tse1/skill5_partyrecharge.png> </label><input type="number" label="skill3" id="skill3" name="skill3" min="1" max="30" value="1"><br>
<label for="magicshield1">Clara's Magic Shield Strength: </label><output name="magicshield1" type="number" for="skill3 party bless">2</output>HP<br>
<label for="magicshield2">Pippa's Magic Shield Strength: </label><output name="magicshield2" type="number" for="skill3 party bless">3</output>HP<br>
<label for="magicshield3">Eisfford's Magic Shield Strength: </label><output name="magicshield3" type="number" for="skill3 party bless">2</output>HP<br>
<label for="speedfire">Peter & Samuel's Speed Fire Cooldown: </label><output name="speedfire" type="number" for="skill3 party bless">57</output> ticks<br>
<label for="speedfire2">Edward's Speed Fire Cooldown: </label><output name="speedfire2" type="number" for="skill3 party bless">72</output> ticks<br>
<label for="partyrecharge">Clementas & Zepher's Party Recharge Cooldown: </label><output name="partyrecharge" type="number" for="skill3 party">67</output> ticks<br>
<label for="partyrecharge3">Matthieu's Party Recharge Cooldown: </label><output name="partyrecharge3" type="number" for="skill3 party">54</output> ticks<br>
<label for="skill4"><img src=/img/tse1/skill6_rockrain.png><img src=/img/tse1/skill6_sharpshoot.png><img src=/img/tse1/skill6_partybless.png> </label><input type="number" label="skill4" id="skill4" name="skill4" min="0" max="30" value="0"><br>
<label for="rockrain1">Clara's Rock Rain: </label><output name="rockrain1" type="number" for="skill4 party bless">4</output> x 3<br>
<label for="rockrain2">Pippa's Rock Rain: </label><output name="rockrain2" type="number" for="skill4 party bless">3</output> x 3<br>
<label for="rockrain3">Eisfford's Rock Rain: </label><output name="rockrain3" type="number" for="skill4 party bless">2</output> x 3<br>
<label for="sharpshoot1">Peter's Sharpshoot: </label><output name="sharpshoot1" type="number" for="skill4 gun party bless">2</output> <label for="ssbonus1">(</label><output name="ssbonus1" type="number" for="skill4 gun party bless">3</output> against large enemies)<br>
<label for="sharpshoot2">Edward's Sharpshoot: </label><output name="sharpshoot2" type="number" for="skill4 gun party bless">2</output> <label for="ssbonus2">(</label><output name="ssbonus2" type="number" for="skill4 gun party bless">3</output> against large enemies)<br>
<label for="sharpshoot3">Samuel's Sharpshoot: </label><output name="sharpshoot3" type="number" for="skill4 gun party bless">2</output> <label for="ssbonus3">(</label><output name="ssbonus3" type="number" for="skill4 gun party bless">3</output> against large enemies)<br>
<label for="partybless1r">Clementas' Party Bless: </label><output name="partybless1r" type="number" for="skill4 party">0</output> extra Party Levels<br>
<label for="partybless2r">Zepher's Party Bless: </label><output name="partybless2r" type="number" for="skill4 party">0</output> extra Party Levels<br>
<label for="partybless3r">Matthieu's Party Bless: </label><output name="partybless3r" type="number" for="skill4 party">0</output> extra Party Levels<br>
<label for="partyblessd">Everyone's blesses will last for </label><output name="partyblessd" type="number" for="skill4 party">157</output> ticks<br>
<label for="skill5"><img src=/img/tse1/skill7_celestiallightning.png><img src=/img/tse1/skill7_magicbullet.png><img src=/img/tse1/skill7_holybolt.png> </label><input type="number" label="skill5" id="skill5" name="skill5" min="0" max="30" value="0"><br>
<label for="lightning1">Clara's Celestial Lightning: </label><output name="lightning1" type="number" for="skill5 party bless">10</output><br>
<label for="lightning2">Pippa's Celestial Lightning: </label><output name="lightning2" type="number" for="skill5 party bless">12</output><br>
<label for="lightning3">Eisfford's Celestial Lightning: </label><output name="lightning3" type="number" for="skill5 party bless">14</output><br>
<label for="magicbullet1">Peter's Magic Bullet: </label><output name="magicbullet1" type="number" for="skill5 gun party bless">8</output><br>
<label for="magicbullet2">Edward's Magic Bullet: </label><output name="magicbullet2" type="number" for="skill5 gun party bless">8</output><br>
<label for="magicbullet3">Samuel's Magic Bullet: </label><output name="magicbullet3" type="number" for="skill5 gun party bless">8</output><br>
<label for="holybolt1">Clementas' Holy Bolt: </label><output name="holybolt1" type="number" for="skill5 party bless">3</output> x 2<br>
<label for="holybolt2">Zepher's Holy Bolt: </label><output name="holybolt2" type="number" for="skill5 party bless">3</output> x 2<br>
<label for="holybolt3">Matthieu's Holy Bolt: </label><output name="holybolt3" type="number" for="skill5 party bless">3</output> x 2<br>
<label for="skill6"><img src=/img/tse1/skill8_rainbow.png><img src=/img/tse1/skill8_powershot.png><img src=/img/tse1/skill8_silverbullet.png> </label><input type="number" label="skill6" id="skill6" name="skill6" min="0" max="30" value="0"><br>
<label for="skill7"><img src=/img/tse1/skill9_kineticsmash.png><img src=/img/tse1/skill9_dynamite.png><img src=/img/tse1/skill9_spooksummon.png> </label><input type="number" label="skill7" id="skill7" name="skill7" min="0" max="30" value="0"><br>
<label for="skill8"><img src=/img/tse1/skill10_lifedrain.png><img src=/img/tse1/skill10_lasoo.png><img src=/img/tse1/skill10_hotg.png> </label><input type="number" label="skill8" id="skill8" name="skill8" min="0" max="30" value="0"><br></form>
