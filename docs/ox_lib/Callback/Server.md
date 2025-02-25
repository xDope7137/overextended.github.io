## Server -> Client callback

### lib.callback

The response is handled in a separate coroutine.

```lua
lib.callback(name, source, cb, ...)
```

- name: `string`
- source: `number`
- cb: `function`
- ...: `any`

```lua
lib.callback('ox:getNearbyVehicles', source, function(vehicles)
    for i = 1, #vehicles do
        DeleteEntity(entity)
    end
end, args.radius)
```

### lib.callback.await

The current coroutine is yielded until a response is received.

```lua
lib.callback.await(name, source, ...)
```

- name: `string`
- source: `number`
- ...: `any`

```lua
local vehicles = lib.callback.await('ox:getNearbyVehicles', source, args.radius)

for i = 1, #vehicles do
    DeleteEntity(entity)
end
```

## Client -> Server callback

### lib.callback.register

```lua
lib.callback.register(name, cb)
```

- name: `string`
- cb: `function`

```lua
lib.callback.register('ox_inventory:getItemCount', function(source, item, metadata, target)
    local inventory = target and Inventory(target) or Inventory(source)
    return (inventory and Inventory.GetItem(inventory, item, metadata, true)) or 0
end)
```
