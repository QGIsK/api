import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drive from '@ioc:Adonis/Core/Drive'
import Application from '@ioc:Adonis/Core/Application'

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

    // Get the file extension and give it a proper name
    const ext = query.url.split('.').pop()
    const gif = ext === 'gif'

    const fileName = gif ? `gify.gif` : `image.${ext}`

    // Temporarily save the file
    await Drive.put(fileName, res.data)

    const filePath = Application.tmpPath('uploads/' + fileName)

    response.attachment(filePath)

    // Delete the file one we're done with it.
    Drive.delete(fileName)
  }
}
