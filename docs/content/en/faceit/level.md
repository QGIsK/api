---
title: Level
description: 'Get faceit level and elo.'
position: 5
category: 'Faceit'
features:
  - Level & Elo from Username & ID
  - Level icons
---

## Features

<list :items="features"></list>

## About

Faceit is a online game-platform.
Prefer to handle this without an api call? Checkout this [package](https://github.com/cstools-app/faceit-wrapper)

## Endpoint

```bash
https://api.demiann.dev/faceit
```

## From ID

#### Query ID

    - Type: Faceit ID
    - Query: ?id=
    - Examples:
      - ?id=cf5c2089-b4a6-4201-a69b-9fd608429c79
      - https://api.demiann.dev/faceit?id=cf5c2089-b4a6-4201-a69b-9fd608429c79

## From Username

#### Query Username

    - Type: Faceit Username
    - Query: ?username=
    - Examples:
      - ?username=DotJar
      - https://api.demiann.dev/faceit?username=DotJar

## Output

```json
{
  "skillLevel": 10,
  "elo": 2085,
  "icon": "https://cdn.demiann.dev/images/faceit/levels/level10.svg"
}
```
