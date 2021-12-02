import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

import SteamResolver from '@qgisk/steamresolver'

// Initiate the client
const Resolve = new SteamResolver()

export default class SteamController {
  public async get({ request, response }: HttpContextContract) {
    const query = request.qs()

    if (!query.id && !query.customUrl) return response.badRequest('ID or CustomURl Required.')

    const profile = query.id
      ? await Resolve.from64ToProfile(query.id)
      : await Resolve.fromCustomToProfile(query.customUrl)

    return response.send(profile)
  }

  public async transform({ request, response }: HttpContextContract) {
    const query = request.qs()

    if (!query.id && !query.customUrl && !query.groupUrl)
      return response.badRequest('ID or CustomURl Required.')

    // ID To custom url
    if (query.id) {
      const customUrl = await Resolve.toCustomURL(query.id)

      return { customUrl, url: buildSteamPath(Env.get('STEAM_CUSTOM'), customUrl) }
    }

    // Custom url To ID
    if (query.customUrl) {
      const id = await Resolve.fromCustomURL(query.customUrl)

      return { id, url: buildSteamPath(Env.get('STEAM_ID'), id) }
    }

    // Group URl to ID
    const groupId = await Resolve.fromGroupURLToID(query.groupUrl)

    return { groupId, url: buildSteamPath(Env.get('STEAM_GROUP'), groupId) }
  }
}

const buildSteamPath = (type: String, path: String | Number) =>
  `https://${Env.get('STEAM_BASE')}/${type}/${path}`
