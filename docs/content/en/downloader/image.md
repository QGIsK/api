---
title: Image
description: Send an image 'download' directly from the a url.
position: 11
category: Downloader
---

## Image

A simple way to send a download directly to a user.

All we do is play with the headers, you can easily handle this by your self playing with Content-Disposition, Content-Type & a ResponseType of ArrayBuffer.

### Endpoint

    - URL: https://api.demiann.dev/downloader/image
    - Query: url
      - Type: Full image url, ending in jpeg, jpg, gif and png.

### Example

<code-block label="Request URL" active>

```bash
https://api.demiann.dev/downloader/image?url=https://i.redd.it/1upu2lmwgm681.gif
```

</code-block>

### Output

Send back a file named `gify.gif` or `image.<ext>`
