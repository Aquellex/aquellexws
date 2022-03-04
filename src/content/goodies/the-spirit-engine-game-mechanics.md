---
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
Undead (UD) enemies take 66% extra damage against Silver Bullet & 33% extra damage against each Holy Bolt.<br>
Undead (UD) enemies are immune to Life Drain.<br>

### WORLD 1: GIANT'S CRADLE

Junior Kippon<br>
HP: 30

| Animation                                                     | Kind  | Attack         | Type     | Damage | Cooldown                                                                                                                                       |
| :------------------------------------------------------------ | :---- | :------------- | :------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Junior_Kippon.gif](/img/tse1/Junior_Kippon.gif)             | Idle  | First cooldown | N/A      | N/A    | Between 10-15 ticks                                                                                                                            |
| ![Junior Kippon_melee.gif](/img/tse1/Junior Kippon_melee.gif) | Melee | Lunge          | Physical | 2      | <li>57 ticks (all other areas)</li> <li>65 ticks (first The Prairie Trail battle)</li> <li>74 ticks (remaining The Prairie Trail battles)</li> |

| XP  | Gold | Location                                                                  | Condition                   |
| :-- | :--- | :------------------------------------------------------------------------ | :-------------------------- |
| 2   | 1    | <li>The Prairie Trail</li><li>The Dusty Valley</li><li>Hailey's Glen</li> | Party Level is less than 9  |
| 2   | 1    | Giant's Toe                                                               | Party Level is less than 11 |

Warrior Kippon<br>
HP: 110

| Animation                                                       | Kind  | Attack         | Type     | Damage | Cooldown           |
| :-------------------------------------------------------------- | :---- | :------------- | :------- | :----- | :----------------- |
| ![Warrior_Kippon_idle.gif](/img/tse1/Warrior_Kippon_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 7-14 ticks |
| ![Warrior_Kippon_melee.gif](/img/tse1/Warrior_Kippon_melee.gif) | Melee | Lunge          | Physical | 4      | 54 ticks           |

| XP  | Gold | Location                                            | Condition                   |
| :-- | :--- | :-------------------------------------------------- | :-------------------------- |
| 4   | 1    | <li>The Prairie Trail</li><li>The Dusty Valley</li> | Party Level is less than 9  |
| 4   | 1    | <li>Hailey's Glen</li><li>Giant's Toe</li>          | Party Level is less than 11 |

Mama Kippon<br>

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

Torfly<br>

| HP  | Location         |
| :-- | :--------------- |
| 135 | The Dusty Valley |
| 150 | Giant's Toe      |

| Animation                                       | Kind  | Attack         | Type     | Damage | Cooldown            |
| :---------------------------------------------- | :---- | :------------- | :------- | :----- | :------------------ |
| ![Torfly_idle.gif](/img/tse1/Torfly_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 12-19 ticks |
| ![Torfly_melee.gif](/img/tse1/Torfly_melee.gif) | Melee | Lunge          | Physical | 3      | 46 ticks            |
| ![Torfly_magic.gif](/img/tse1/Torfly_magic.gif) | Magic | Mist Breath    | Absolute | 1x4    | 48 ticks            |

| XP  | Gold | Location      | Condition                   |
| :-- | :--- | :------------ | :-------------------------- |
| 8   | 3    | Hailey's Glen | Party Level is less than 11 |
| 8   | 3    | Giant's Toe   | Party Level is less than 14 |

Porcupig<br>

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

Grundlekrunk (L)<br>
HP: 705

| Animation                                                     | Kind   | Attack           | Type     | Damage | Cooldown |
| :------------------------------------------------------------ | :----- | :--------------- | :------- | :----- | :------- |
| ![Grundlekrunk_idle.gif](/img/tse1/Grundlekrunk_idle.gif)     | Idle   | N/A              | N/A      | N/A    | N/A      |
| ![Grundlekrunk_melee.gif](/img/tse1/Grundlekrunk_melee.gif)   | Melee  | Lunge            | Physical | 4      | 41 ticks |
| ![Grundlekrunk_melee2.gif](/img/tse1/Grundlekrunk_melee2.gif) | Melee  | Whirlwind Attack | Physical | 9      | 34 ticks |
| ![Grundlekrunk_magic.gif](/img/tse1/Grundlekrunk_magic.gif)   | Lobbed | Ooze Spit        | Absolute | 1x4    | 54 ticks |

| XP  | Gold | Location            | Condition |
| :-- | :--- | :------------------ | :-------- |
| 67  | 10   | Grundlekrunk's Lair | N/A       |

FrostWolf<br>
HP: 332

| Animation                                             | Kind  | Attack         | Type     | Damage                             | Cooldown            |
| :---------------------------------------------------- | :---- | :------------- | :------- | :--------------------------------- | :------------------ |
| ![FrostWolf_idle.gif](/img/tse1/FrostWolf_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                | Between 15-23 ticks |
| ![FrostWolf_melee.gif](/img/tse1/FrostWolf_melee.gif) | Melee | Lunge          | Physical | <li>8</li><li>7 to shields</li>    | Between 57-60 ticks |
| ![FrostWolf_magic.gif](/img/tse1/FrostWolf_magic.gif) | Magic | Frost Breath   | Magic    | <li>2x4</li><li>Clamps at 1x4</li> | 61 ticks            |

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

Abominable Snowman (L)<br>
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

Ice Shaman<br>
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

The Hermit Mage (MX)<br>
HP: 1090

| Animation                                                         | Kind              | Attack          | Type     | Damage   | Cooldown                                                                                            |
| :---------------------------------------------------------------- | :---------------- | :-------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------- |
| ![Crazy_Hermit_idle.gif](/img/tse1/Crazy_Hermit_idle.gif)         | Idle              | First cooldown  | N/A      | N/A      | Between 15-17 ticks                                                                                 |
| ![Crazy_Hermit_range.gif](/img/tse1/Crazy_Hermit_range.gif)       | Magic<br>Indirect | Blood Lightning | Absolute | 7        | Between 33-35 ticks<br>Will use this or Chain Magic a total of 3 times before going to freeze       |
| ![Crazy_Hermit_magic.gif](/img/tse1/Crazy_Hermit_magic.gif)       | Magic             | Chain Magic     | Magical  | 3x3      | Between 34 ticks<br>Will use this or Blood Lightning a total of 3 times before going to freeze      |
| ![Crazy_Hermit_stun.gif](/img/tse1/Crazy_Hermit_stun.gif)         | Stun<br>Indirect  | Freeze          | Ailment  | 70 ticks | 8 ticks<br>Will use this attack twice before recharging                                             |
| ![Crazy_Hermit_recharge.gif](/img/tse1/Crazy_Hermit_recharge.gif) | Recharge          | Recharge        | Self     | N/A      | 51 ticks                                                                                            |
| ![Crazy_Hermit_shield.gif](/img/tse1/Crazy_Hermit_shield.gif)     | Defence           | Shields Up      | Self     | 60HP     | 14 ticks<br>Will use this move immediately when the battle starts, then it goes to 'First cooldown' |

| XP  | Gold | Location    | Condition |
| :-- | :--- | :---------- | :-------- |
| 148 | 70   | Giant's Top | N/A       |

### WORLD 2: Pansylvania

Skeleton (UD)<br>

| HP  | Location               |
| :-- | :--------------------- |
| 350 | The Town Graveyard     |
| 415 | The Torchlit Catacombs |

| Animation                                           | Kind  | Attack         | Type     | Damage                                                               | Cooldown                                                                           |
| :-------------------------------------------------- | :---- | :------------- | :------- | :------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ![Skeleton_idle.gif](/img/tse1/Skeleton_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                                                  | Between 10-19 ticks                                                                |
| ![Skeleton_melee.gif](/img/tse1/Skeleton_melee.gif) | Melee | Lunge          | Physical | <li>7 at The Town Graveyard</li><li>9 in The Torchlit Catacombs</li> | <li>55 ticks at The Town Graveyard</li><li>57 ticks in The Torchlit Catacombs</li> |
| ![](/img/tse1/)                                     |       |                |          |                                                                      |                                                                                    |
| ![](/img/tse1/)                                     |       |                |          |                                                                      |                                                                                    |

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

Fetid Zombie (UD)<br>

| HP  | Location               |
| :-- | :--------------------- |
| 360 | The Town Graveyard     |
| 445 | The Torchlit Catacombs |

| Animation                                       | Kind  | Attack         | Type     | Damage                                                                                                                                                              | Cooldown                                                                                                 |
| :---------------------------------------------- | :---- | :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| ![Zombie_idle.gif](/img/tse1/Zombie_idle.gif)   | Idle  | First cooldown | N/A      | N/A                                                                                                                                                                 | Between 10-18 ticks                                                                                      |
| ![Zombie_range.gif](/img/tse1/Zombie_range.gif) | Range | Vomit          | Absolute | <li>1x4</li><li>2 DoT at The Town Graveyard</li><li>3 DoT in The Torchlit Catacombs</li><li>Each DoT deals 1 damage every 20 ticks</li><li>2x4 against shields</li> | <li>Between 92-97 ticks at The Town Graveyard</li><li>Between 87-92 ticks in The Torchlit Catacombs</li> |

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

Ghoul (NX, UD)
HP: 575 (Adrian's Ghost), 325 (The Torchlit Catacombs), 365 (The Misty Marshes), 245 (The Broken Bridge)

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
