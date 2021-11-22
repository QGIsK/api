---
title: /faceit
description: 'Get faceit level and elo.'
position: 3
category: 'Endpoints'
---

## Endpoint

```bash
https://api.demiann.dev/faceit
```

## Supported Queries

### id

    - Type: Faceit ID

#### Example

```
https://api.demiann.dev/faceit?id=cf5c2089-b4a6-4201-a69b-9fd608429c79
```

### username

    - Type: Faceit Username

#### Example

```
https://api.demiann.dev/faceit?username=DotJar
```

### Output Example

```json
{
  "skillLevel": 10,
  "elo": 2085,
  "icon": "https://cdn.demiann.dev/images/faceit/levels/level10.svg"
}
```
