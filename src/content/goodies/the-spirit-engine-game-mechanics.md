---
layout: tutorial
title: 'The Spirit Engine 1 game mechanics'
lastUpdated: '2022-03-04T12:00:00Z'
---

All documentation is done with ticks. Each tick lasts for 0.1 seconds on Slower Battles switch on, 0.05 for the same option switched off. So 50 ticks is 5.0 seconds and 2.5 seconds, respectively.

The first cooldown for your party is a 2-second delay (independent from ticks) + 40 ticks.<br>
The first cooldown for the enemies is a 2-second delay (independent from ticks) + whatever their first cooldown stat is.

Mana resistance for your party is based on how many extra mana points you have. So for example, a base mana pool of 5 (the default) has 0 resistance, whereas 9 has 4 resistance.<br>
Absolute damage from enemies ignores any kind of armour you may have equipped.

Large (L) enemies take 50% extra damage against Sharpshoot.<br>
Large (L) enemies take 33% less damage against Rock Rain and Power Shot.<br>
Lasoo's stun time is reduced by 33% against Large (L) creatures.<br>
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

| Icon                            | Name | Base Damage | Special Attributes | Location | Cost |
| :------------------------------ | :--- | :---------- | :----------------- | :------- | :--- |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |

### TALISMANS

| Icon                            | Name | Base Damage | Special Attributes | Location | Cost |
| :------------------------------ | :--- | :---------- | :----------------- | :------- | :--- |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |
| ![inv_.png](/img/tse1/inv_.png) |      |             |                    |          |      |

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

| Animation                                                     | Kind             | Attack         | Type     | Damage   | Cooldown                                                            |
| :------------------------------------------------------------ | :--------------- | :------------- | :------- | :------- | :------------------------------------------------------------------ |
| ![Ice_Shaman_idle.gif](/img/tse1/Ice_Shaman_idle.gif)         | Idle             | First cooldown | N/A      | N/A      | Between 10-15 ticks                                                 |
| ![Ice_Shaman_range.gif](/img/tse1/Ice_Shaman_range.gif)       | Range            | Hailstorm      | Physical | 7        | 47 ticks<br>25% chance to use this attack<br>Always uses first      |
| ![Ice_Shaman_stun.gif](/img/tse1/Ice_Shaman_stun.gif)         | Stun<br>Indirect | Freeze         | Ailment  | 70 ticks | 52 ticks<br>50% chance to use this attack                           |
| ![Ice_Shaman_recharge.gif](/img/tse1/Ice_Shaman_recharge.gif) | Recharge         | Recharge       | Self     | N/A      | 39 ticks<br>25% chance to use this move (i.e., this is a free turn) |

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

| XP                             | Gold                           | Location         | Condition                   |
| :----------------------------- | :----------------------------- | :--------------- | :-------------------------- |
| 58                             | 14                             | Arachnid's Grove | Party Level is less than 18 |
| floor(58 / (Party Level - 16)) | floor(14 / (Party Level - 16)) | Arachnid's Grove | Party Level is less than 23 |
| XP                             | Gold                           | Location         | Condition                   |
| 58                             | 14                             | Arachnid's Grove | Party Level is less than 21 |
| floor(58 / (Party Level - 19)) | floor(14 / (Party Level - 19)) | Arachnid's Grove | Party Level is less than 27 |

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

| Animation                                     | Kind  | Attack         | Type     | Damage                                         | Cooldown                                                                         |
| :-------------------------------------------- | :---- | :------------- | :------- | :--------------------------------------------- | -------------------------------------------------------------------------------- |
| ![Abomb_idle.gif](/img/tse1/Abomb_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                            | Between 10-15 ticks                                                              |
| ![Abomb_aoe.gif](/img/tse1/Abomb_aoe.gif)     | AoE   | Poison Breath  | Absolute | 7 DoT, each DoT deals 1 damange every 18 ticks | 53 ticks<br>Starts with this attack                                              |
| ![Abomb_range.png](/img/tse1/Abomb_range.png) | Range | Kinetic Smash  | Physical | <li>15</li><li>14 agaist shields</li>          | 41 ticks<br>Will use this attack 3 times before switching to AoE, then repeating |
| ![Abomb_heal.gif](/img/tse1/Abomb_heal.gif)   | Heal  | Superheal      | Self     | Activates at 370HP                             | Heals 1HP every 2.4 ticks                                                        |

| XP  | Gold | Location                | Condition |
| :-- | :--- | :---------------------- | :-------- |
| 290 | 29   | The Abombination's Lair | N/A       |

#### Snack (UD)

HP: 735

| Animation                                           | Kind    | Attack         | Type            | Damage | Cooldown                                                                                                                                        |
| :-------------------------------------------------- | :------ | :------------- | :-------------- | :----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Snack_idle.gif](/img/tse1/Snack_idle.gif)         | Idle    | First cooldown | N/A             | N/A    | Between 10-15 ticks                                                                                                                             |
| ![Snack_melee.gif](/img/tse1/Snack_melee.gif)       | Melee   | Lunge          | Physical        | 15     | Between 27-29 ticks<br>2/3 chance to use this attack                                                                                            |
| ![Snack_range.gif](/img/tse1/Snack_range.gif)       | Range   | Trident Zap    | Absolute        | 3      | Between 33-35 ticks<br>1/3 chance to use this attack                                                                                            |
| ![Snack_peekaboo.gif](/img/tse1/Snack_peekaboo.gif) | Defence | Phase Out      | Invulnerability | N/A    | Will occur 180 ticks into the battle (ignoring the 2-second delay at the beginning)<br>Ends on the 399th tick and resets its internal tick to 0 |
| ![Snack_jab.gif](/img/tse1/Snack_jab.gif)           | Melee   | Jab            | Physical        | 23     | Occurs at the 360th tick into the battle (ignoring the 2-second delay at the beginning)<br>Targets character with the lowest HP                 |

| XP  | Gold | Location          | Condition |
| :-- | :--- | :---------------- | :-------- |
| 390 | 76   | The Broken Bridge | N/A       |
