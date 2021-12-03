import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import SteamResolver from '@qgisk/steamresolver'

// Initiate the client
const Resolve = new SteamResolver()

export default class SteamController {
  public async get({ request, response }: HttpContextContract) {
    const query = request.qs()

    const profile = query.id
      ? await Resolve.fromIdToProfile(query.id)
      : await Resolve.fromCustomToProfile(query.customUrl)

    return response.send(profile)
  }

  public async transform({ request, response }: HttpContextContract) {
    const query = request.qs()

    const profile = query.id
      ? await Resolve.toCustomURL(query.id)
      : query.customUrl
      ? await Resolve.fromCustomURL(query.customUrl)
      : await Resolve.fromGroupURLToID(query.groupUrl)

    return response.send(profile)
  }
}
