---
title: Profiles
description: 'Returns Steam profiles in JSON format'
position: 3
category: 'Steam'
features:
  - Full Profile from Custom URL
  - Full Profile from Steam64ID
---

## Features

<list :items="features"></list>

Make sure all id's are `steam64`

Prefer to handle this without an api call? Checkout this [package](https://steamresolver.docs.demiann.dev)

## From ID

### Endpoint

    - URL: https://api.demiann.dev/steam
    - Query: id
      - Type: Steam 64ID

### Example

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

## From CustomUrl

### Endpoint

    - Endpoint: https://api.demiann.dev/steam
    - Query: customUrl
      - Type: Steam Custom Url

### Example

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
