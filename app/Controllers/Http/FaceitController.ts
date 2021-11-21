import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

import FaceitAPI from '@cstools-app/faceit-wrapper'
import fetch from 'node-fetch'

// Initiate the client
const FaceitClient = new FaceitAPI(Env.get('FACEIT_KEY'))

export default class FaceitController {
  public async get({ request, response }: HttpContextContract) {
    const query = request.qs()

    const profile = query.username
      ? await FaceitClient.players.get({ nickname: query.username })
      : await FaceitClient.players.show({ player_id: query.id })

    const gameIndex = query.game ? query.game : 'csgo'

    return response.send({
      skill_level: profile.games[gameIndex].skill_level,
      elo: profile.games[gameIndex].faceit_elo,
      icon: `https://${Env.get('CDN_BASE')}/${Env.get('FACEIT_ICON_PATH')}/level${
        profile.games[gameIndex].skill_level
      }.svg`,
    })
  }
}
