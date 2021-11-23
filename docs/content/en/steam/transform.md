---
title: Transform
description: 'Transforms ID or a Custom URL into its opposite value, e.g. ID > Custom URL'
position: 4
category: 'Steam'
features:
  - ID > CustomURl
  - CustomURL > ID
  - GroupURL > ID
---

## Features

<list :items="features"></list>

This endpoint transforms an ID into a custom url, and the other way around.

Prefer to handle this without an api call? Checkout this [package](https://steamresolver.docs.demiann.dev)

## From ID to CustomURL

### Query

    - Endpoint: https://api.demiann.dev/steam/transform
    - Query: id
      - Type: Steam64 ID

### Example

<code-group>
  <code-block label="Request URL" active>

```bash
https://api.demiann.dev/steam/transform?id=76561198250920834
```

  </code-block>
    <code-block label="Output">

```bash
Demiann
```

  </code-block>
</code-group>

## From CustomURL To ID

### Query

    - Endpoint: https://api.demiann.dev/steam/transform
    - Query: customUrl
      - Type: Custom steam url

### Example

<code-group>
  <code-block label="Request URL" active>

```bash
https://api.demiann.dev/steam/transform?customUrl=Demiann
```

  </code-block>
    <code-block label="Output">

```bash
76561198250920834
```

  </code-block>
</code-group>

## GroupURL To ID

### Query

    - Endpoint: https://api.demiann.dev/steam/transform
    - Query: groupUrl
      - Type: Custom steam url

### Example

<code-group>
  <code-block label="Request URL" active>

```bash
https://api.demiann.dev/steam/transform?groupUrl=ROBOTAIM
```

  </code-block>
    <code-block label="Output">

```bash
103582791463600727
```

  </code-block>
</code-group>
