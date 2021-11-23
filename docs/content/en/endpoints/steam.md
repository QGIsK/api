---
title: /steam
description: ''
position: 4
category: 'Endpoints'
features:
  - Steam Profiles
  - ID to Custom URL
  - Custom URL to ID
---

## Features

<list :items="features"></list>

## Profile

This method returns a full profile in JSON format

All endpoints support either a full steam url, just the id/custom url

Make sure all id's are a `steam64`

Prefer to handle this without an api call? Checkout this [package](https://steamresolver.docs.demiann.dev)

### From ID

#### Endpoint

```bash
https://api.demiann.dev/steam
```

#### Query

    - Type: Steam 64ID
    - Query: id
    - Examples:
        - ?id=76561198250920834
        - https://api.demiann.dev/steam?id=?id=76561198250920834

### From CustomUrl

#### Endpoint

```bash
https://api.demiann.dev/steam
```

#### Query

    - Type: Steam Custom Url
    - Query: customUrl
    - Examples:
      - ?customUrl=Demiann
      - https://api.demiann.dev/steam?customUrl=Demiann

## Transform

This method transforms an ID into a custom url, and the other way around.

#### Endpoint

```bash
https://api.demiann.dev/steam/transform
```

### From ID to CustomURL

#### Query

    - Type: Steam64 ID
    - Query: id
    - Examples:
      - ?id=76561198250920834
      - https://api.demiann.dev/steam/transform?id=76561198250920834

### From CustomURL To ID

#### Query

    - Type: Custom steam url
    - Query: customUrl
    - Examples:
      - ?customUrl=Demiann
      - https://api.demiann.dev/steam/transform?customUrl=Demiann

### Group URL To ID

## Profile

### From Custom

### From Group

### From ID
