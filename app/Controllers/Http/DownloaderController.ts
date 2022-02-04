import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import axios from 'axios'

export default class DownloaderController {
  public async image({ request, response }: HttpContextContract) {
    const query = request.qs()

    if (!query.url) return response.badRequest('url is required')

    // Check if the url is an image.
    if (query.url.match(/\.(jpeg|jpg|gif|png)$/) === null)
      return response.badRequest('URL Doesnt seem to be an image, or a gif.')

    const res = await axios.get(query.url, { responseType: 'arraybuffer' })

    if (!res) return response.badRequest('Bad request')

    const ext = query.url.split('.').pop()
    const gif = ext === 'gif'

    const mimeType = gif ? 'image/gif' : ext === 'jpg' ? 'image/jpeg' : 'image/png'

    const fileName = gif ? `gify` : `image`

    response
      .header('Content-Disposition', `attachment; filename="${fileName}"`)
      .header('Content-Type', mimeType)
      .send(res.data)
  }
}
