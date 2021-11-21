import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

import FaceitAPI from '@cstools-app/faceit-wrapper'

// Initiate the client
const FaceitClient = new FaceitAPI(Env.get('FACEIT_KEY'))

export default class FaceitController {
  public async get({ request, response }: HttpContextContract) {
    const query = request.qs()

    const profile = query.username
      ? await FaceitClient.players.get({ nickname: query.username })
      : await FaceitClient.players.show({ player_id: query.id })

    const gameIndex = query.game ? query.game : 'csgo'

    if (profile.errors || !profile.games[gameIndex])
      return response.notFound('Player statistics not found')

    const skillLevel = profile.games[gameIndex].skill_level
    const elo = profile.games[gameIndex].faceit_elo

    const icon = `https://${Env.get('CDN_BASE')}/${Env.get('FACEIT_ICON_PATH')}/level${
      profile.games[gameIndex].skill_level
    }.svg`

    return response.send({
      skillLevel,
      elo,
      icon,
    })
  }
}
