import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

import axios from 'axios'
import cheerio, { CheerioAPI } from 'cheerio'

import { PinnedList, PinnedItem, PinnedItemDetailed } from 'types/Github'

export default class GithubController {
  public async pinned({ request, response }: HttpContextContract) {
    const query = request.qs()

    if (!query.username) return response.badRequest('username is required.')

    const url = buildProfile(query.username)

    try {
      const res = await axios.get(url)

      const $ = cheerio.load(res.data)

      const items: PinnedList = []

      $('.js-pinned-item-list-item').each((_i, elem) => {
        const basic = simpleParsed($, elem)

        const item: PinnedItem = { ...basic }

        items.push(item)
      })

      return items
    } catch (_err) {
      return response.notFound('Profile cannot be found.')
    }
  }

  public async pinnedDetails({ request, response }: HttpContextContract) {
    const query = request.qs()

    if (!query.username) return response.badRequest('username is required.')

    try {
      const url = buildProfile(query.username)

      const res = await axios.get(url)

      const $ = cheerio.load(res.data)

      const items: PinnedList = []

      $('.js-pinned-item-list-item').each((_i, elem) => {
        const basic = simpleParsed($, elem)

        const item: PinnedItem = { ...basic }

        items.push(item)
      })

      const detailedItems: PinnedItemDetailed[] = await getDetailed(items)

      // TODO :: Refactor this
      return Promise.all(detailedItems)
    } catch (_err) {
      console.log(_err)
      return response.notFound('Profile cannot be found.')
    }
  }
}

const simpleParsed = ($: CheerioAPI, elem) => {
  const repoName: string = $(elem).find('a > span.repo').text()
  const repoLink: string = $(elem).find('a').attr('href') || ''
  const repoAbout: string = $(elem).find('p.pinned-item-desc').text().trim()
  const repoLanguage: string = $(elem).find("*[itemprop = 'programmingLanguage']").text()
  const repoLanguageColor: string = $(elem).find('.repo-language-color').attr('style') || ''
  const repoOwner = repoLink.split('/').filter((el) => el.length > 0)[0]

  return {
    name: repoName,
    owner: repoOwner,
    repo: repoLink,
    repository: buildRepo(repoLink),
    about: repoAbout,
    language: repoLanguage,
    languageColor: repoLanguageColor.split(':')[1],
  }
}

const getDetailed = async (items) => {
  return await items.map(async (item) => {
    const url = buildApi(item.repo)

    const res = await axios.get(url, {
      headers: { Authorization: `token ${Env.get('GITHUB_TOKEN')}` },
    })

    const parsed = detailedParsed(res?.data)

    return { ...parsed, ...item }
  })
}

const detailedParsed = (res) => {
  const {
    homepage,
    forks,
    subscribers_count: watchers,
    topics,
    license,
    open_issues_count: issues,
    stargazers_count: stars,
    archived,
    created_at: createdAt,
    updated_at: updatedAt,
  } = res

  return {
    homepage,
    stars,
    watchers,
    forks,
    issues,
    license,
    topics,
    archived,
    createdAt,
    updatedAt,
  }
}

const buildProfile = (username: string) => `https://${Env.get('GITHUB_BASE')}/${username}`
const buildApi = (path: string) =>
  `https://${Env.get('GITHUB_API')}/${Env.get('GITHUB_API_REPO')}${path}`
const buildRepo = (repo: string) => `https://${Env.get('GITHUB_BASE')}${repo}`
