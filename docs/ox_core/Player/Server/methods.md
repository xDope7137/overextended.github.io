---
title: Methods
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These functions are inherited from the [Player class](../Server/).

## player.set

Update the player's metadata, optionally syncing it with the client.

```lua
player.set(key, value, replicated)
```

- key: `string`
- value: `any`
- replicated?: `boolean`

## player.setdb

Update the player's metadata and store in the DB, optionally syncing it with the client.  
Note: These values are not synced to the client on login; you will need to use `player.set`.

```lua
player.setdb(key, value, replicated)
```

- key: `string`
- value: `string | number | table | boolean`
- replicated?: `boolean`

## player.get

Get a value from the player's metadata, or omit the argument to get all metadata.

```lua
player.get(key)
```

- key?: `string`

## player.getState

Return the player's statebag.

```lua
player.getState()
```

## player.getCoords

Return the player's position.

```lua
player.getCoords()
```

## player.setGroup

Updates the player's grade for the given group. Any value below 1 will remove the group from the player.

```lua
player.setGroup(group, grade)
```

- group: `string`
- grade?: `number`

## player.getGroup

Returns the player's current grade for a given group.

```lua
player.getGroup()
```

## player.getGroup

Returns an object of all groups the player is in, with the current grade as the value.

```lua
player.getGroups()
```

## player.hasGroup

Check if the player is a member of a given group, and returns the matching group name and grade.  
The filter can be a string, array, or object where key is the group, and value is the minimum grade.

```lua
player.hasGroup(filter)
```

## player.setStatus

Set the current value for a status (i.e. hunger, thirst).

```lua
player.setStatus(name, value)
```

- name: string
- value: number

## player.addStatus

Add the given amount to the total value for a status (i.e. hunger, thirst).

```lua
player.addStatus(name, value)
```

- name: string
- value: number

## player.removeStatus

Remove the given amount from the total value for a status (i.e. hunger, thirst).

```lua
player.removeStatus(name, value)
```

- name: string
- value: number

- filter: `string | string[] | { [string]: number }`

## player.getPlayersInScope

Return an array of all player id's inside the player's scope.

```lua
player.getPlayersInScope()
```

## player.isPlayerInScope

Check if the given source is inside the player's scope.

```lua
player.isPlayerInScope(target)
```

- target: `number`

## player.triggerScopedEvent

```lua
player.triggerScopedEvent(eventName, ...)
```

- eventName: `string`
- ...?: `any[]`
