import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

import axios from 'axios'
import cheerio from 'cheerio'

export default class GithubsController {
  public async pinned({ request, response }: HttpContextContract) {
    const query = request.qs()

    if (!query.username) return response.badRequest('username is required.')

    const url = buildProfile(query.username)
    
    try {
      const res = await axios.get(url)

      const $ = cheerio.load(res.data)

      const items: PinnedList = []

      $('.js-pinned-item-list-item').each((_i, elem) => {
        const item: PinnedItem = {}

        const repoName: string = $(elem).find('a > span.repo').text()
        const repoLink: string = $(elem).find('a').attr('href') || ''
        const repoAbout: string = $(elem).find('p.pinned-item-desc').text().trim()
        const repoLanguage: string = $(elem).find("*[itemprop = 'programmingLanguage']").text()
        const repoLanguageColor: string = $(elem).find('.repo-language-color').attr('style') || ''

        item.name = repoName
        item.repository = buildRepo(repoLink)
        item.about = repoAbout
        item.language = repoLanguage
        item.languageColor = repoLanguageColor.split(':')[1]

        items.push(item)
      })

      return items
    } catch (_err) {
      return response.notFound('Profile cannot be found.')
    }
  }
}

const buildProfile = (username: string) => `https://${Env.get('GITHUB_BASE')}/${username}`
const buildRepo = (repo: string) => `https://${Env.get('GITHUB_BASE')}${repo}/`

type PinnedList = PinnedItem[]

type PinnedItem = {
  name?: string
  repository?: string
  about?: string
  language?: string
  languageColor?: string
}
