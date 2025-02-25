---
title: Creating crafting points
---

Crafting locations, items and their ingredients are defined in [data/crafting.lua](https://github.com/overextended/ox_inventory/blob/main/data/crafting.lua).

## Crafting definition

```lua
{
  items = {
    {
      name = 'lockpick',
      ingredients = {
        garbage = 3,
        WEAPON_HAMMER = 0.1
      },
      duration = 5000,
      count = 3,
      metadata = { durability = 20 }
    },
    {
      name = 'garbage',
      ingredients = {
        cola = 1
      },
      metadata = { description = 'An empty soda can.', weight = 20, image = 'trash_can' }
    },
  },
  points = {
    vec3(-1147.083008, -2002.662109, 13.180260),
  },
  zones = {
    {
      coords = vec3(-1146.2, -2002.05, 13.2),
      size = vec3(3.8, 1.05, 0.15),
      distance = 1.5,
      rotation = 315.0,
    },
  },
  blip = { id = 566, colour = 31, scale = 0.8 },
},
```

* items: `table`
  * name: `string`
  * ingredients: `table`
    * Item ingredients can be seen in the item tooltip.
    * Key-value pairs of item name and consume count
      * key - Item name.
      * value - If 1 or above it's the consume count, if below 1 and above 0 it's the durability consume amount, if
        set to 0 then the item is required but not consumed.
  * duration: `number`
    * Crafting duration in miliseconds.
  * count: `number`
    * Item amount recieved upon crafting.
  * metadata: `table`
    * Metadata applied to the item being crafted.
* points: `vector3[]`
  * Interaction locations that will open the crafting inventory.
* groups: `table`
  * Key-value pairs of job name and minimum grade to access the crafting location.
  * `{["police"] = 0, ["ambulance"] = 2}`
* zones: `table`
  * ox_lib targeting zones used for ox_target.
  * coords: `vector3`
  * size: `vector3`
  * distance: `number`
  * rotation: `number`
* blip: `table`
  * id: `number`
    * Blip sprite number.
  * colour: `number`
  * scale: `number`
