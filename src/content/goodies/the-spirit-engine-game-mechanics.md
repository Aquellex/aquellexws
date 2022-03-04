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
HP: 180 (The Dusty Valley), 200 (Hailey's Glen), 160 (Giant's Toe)

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
HP: 135 (Hailey's Glen), 150 (Giant's Toe)

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
HP: 245 (Hailey's Glen), 255 (Giant's Toe)

| Animation                                           | Kind  | Attack         | Type     | Damage | Cooldown            |
| :-------------------------------------------------- | :---- | :------------- | :------- | :----- | :------------------ |
| ![Porcupig_idle.gif](/img/tse1/Porcupig_idle.gif)   | Idle  | First cooldown | N/A      | N/A    | Between 19-27 ticks |
| ![Porcupig_range.gif](/img/tse1/Porcupig_range.gif) | Range | Spine Attack   | Physical | 5      | Between 81-83 ticks |

| XP  | Gold | Location      | Condition                   |
| :-- | :--- | :------------ | :-------------------------- |
| 8   | 3    | Hailey's Glen | Party Level is less than 11 |
| 8   | 3    | Giant's Toe   | Party Level is less than 14 |

Grundlekrunk<br>
HP: 705 (L)

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

| XP                      | Gold                   | Location      | Condition                   |
| :---------------------- | :--------------------- | :------------ | :-------------------------- |
| 22                      | 4                      | The Icy Ridge | Party Level is less than 13 |
| 22 / (Party Level - 11) | 4 / (Party Level - 11) | The Icy Ridge | Party Level is less than 17 |

| XP  | Gold | Location      | Condition         |
| :-- | :--- | :------------ | :---------------- |
| 7   | 1    | The Icy Ridge | Party Level is 13 |
| 5   | 1    | The Icy Ridge | Party Level is 14 |
| 4   | 0    | The Icy Ridge | Party Level is 15 |
| 3   | 0    | The Icy Ridge | Party Level is 16 |

Abominable Snowman<br>
HP: 440 (L)

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

| XP                      | Gold                   | Location      | Condition                   |
| :---------------------- | :--------------------- | :------------ | :-------------------------- |
| 19                      | 6                      | The Icy Ridge | Party Level is less than 13 |
| 19 / (Party Level - 11) | 6 / (Party Level - 11) | The Icy Ridge | Party Level is less than 17 |

| XP  | Gold | Location      | Condition         |
| :-- | :--- | :------------ | :---------------- |
| 9   | 3    | The Icy Ridge | Party Level is 13 |
| 6   | 2    | The Icy Ridge | Party Level is 14 |
| 4   | 1    | The Icy Ridge | Party Level is 15 |
| 3   | 1    | The Icy Ridge | Party Level is 16 |

The Hermit Mage<br>
HP: 1090 (MX)

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
