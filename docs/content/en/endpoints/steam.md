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

    - URL: https://api.demiann.dev/steam
    - Query: id
      - Type: Steam 64ID

#### Example

<code-group>
  <code-block label="Request URL" active>

```bash
https://api.demiann.dev/steam?id=76561198250920834
```

  </code-block>
    <code-block label="Output">

```json
{
  "steamID64": ["76561198250920834"],
  "steamID": ["Demian"],
  "onlineState": ["offline"],
  "stateMessage": ["Offline"],
  "privacyState": ["public"],
  "visibilityState": ["3"],
  "avatarIcon": [""],
  "avatarMedium": [""],
  "avatarFull": [""],
  "vacBanned": ["0"],
  "tradeBanState": ["None"],
  "isLimitedAccount": ["0"],
  "customURL": ["Demiann"],
  "memberSince": ["September 18, 2015"],
  "steamRating": [""],
  "hoursPlayed2Wk": ["0.0"],
  "headline": [""],
  "location": ["Faroe Islands"],
  "realname": ["Demian"],
  "summary": [""],
  "groups": [
    {
      "group": []
    }
  ]
}
```

  </code-block>
</code-group>

### From CustomUrl

#### Endpoint

    - Endpoint: https://api.demiann.dev/steam
    - Query: customUrl
      - Type: Steam Custom Url

#### Example

<code-group>
  <code-block label="Request URL" active>

```bash
https://api.demiann.dev/steam?customUrl=Demiann
```

  </code-block>
    <code-block label="Output">

```json
{
  "steamID64": ["76561198250920834"],
  "steamID": ["Demian"],
  "onlineState": ["offline"],
  "stateMessage": ["Offline"],
  "privacyState": ["public"],
  "visibilityState": ["3"],
  "avatarIcon": [""],
  "avatarMedium": [""],
  "avatarFull": [""],
  "vacBanned": ["0"],
  "tradeBanState": ["None"],
  "isLimitedAccount": ["0"],
  "customURL": ["Demiann"],
  "memberSince": ["September 18, 2015"],
  "steamRating": [""],
  "hoursPlayed2Wk": ["0.0"],
  "headline": [""],
  "location": ["Faroe Islands"],
  "realname": ["Demian"],
  "summary": [""],
  "groups": [
    {
      "group": []
    }
  ]
}
```

  </code-block>
</code-group>

## Transform

This method transforms an ID into a custom url, and the other way around.

### From ID to CustomURL

#### Query

    - Endpoint: https://api.demiann.dev/steam/transform
    - Query: id
      - Type: Steam64 ID

#### Example

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

### From CustomURL To ID

#### Query

    - Endpoint: https://api.demiann.dev/steam/transform
    - Query: customUrl
      - Type: Custom steam url

#### Example

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

### GroupURL To ID

#### Query

    - Endpoint: https://api.demiann.dev/steam/transform
    - Query: groupUrl
      - Type: Custom steam url

#### Example

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
