---
title: Pinned Projects
description: 'Get Github pinned projects'
position: 6
category: 'Github'
features:
  - Simple Pinned
  - Detailed Pinned
---

## Features

<list :items="features"></list>

## Simple

Basic information about the projects

### Endpoint

    - URL: https://api.demiann.dev/gh/pinned
    - Query: username
      - Type: Github username

### Example

<code-group>
  <code-block label="Request URL" active>

```bash
https://api.demiann.dev/gh/pinned?username=QGiSK
```

  </code-block>
    <code-block label="Output">

```json
[
    {
        "name": "portfolio",
        "owner": "QGIsK",
        "repo": "/QGIsK/portfolio",
        "repository": "https://github.com/QGIsK/portfolio",
        "about": "✨ Portfolio currently made with NuxtJS, this does change, alot.",
        "language": "Vue",
        "languageColor": " #41b883"
    },
    ...
]

```

  </code-block>
</code-group>

## Detailed

More in-depth, also slower because it uses multiple requests to get the data.

### Endpoint

    - URL: https://api.demiann.dev/gh/pinned/details
    - Query: username
      - Type: Github username

### Example

<code-group>
  <code-block label="Request URL" active>

```bash
https://api.demiann.dev/gh/pinned/details?username=QGiSK
```

  </code-block>
    <code-block label="Output">

```json
[
    {
        "homepage": "https://demiann.dev",
        "stars": 0,
        "watchers": 2,
        "forks": 0,
        "issues": 0,
        "license": null,
        "topics": [
            "digitalocean",
            "nodejs",
            "nuxt",
            "portfolio",
            "vuejs",
            "vuetify"
        ],
        "archived": false,
        "createdAt": "2020-01-30T20:36:54Z",
        "updatedAt": "2021-11-23T18:15:43Z",
        "name": "portfolio",
        "owner": "QGIsK",
        "repo": "/QGIsK/portfolio",
        "repository": "https://github.com/QGIsK/portfolio",
        "about": "✨ Portfolio currently made with NuxtJS, this does change, alot.",
        "language": "Vue",
        "languageColor": " #41b883"
    },
    ...
]

```

  </code-block>
</code-group>
