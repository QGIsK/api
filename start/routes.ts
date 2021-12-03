/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', ({ response }) => response.redirect('https://api.docs.demiann.dev', undefined, 302))

Route.group(() => {
  Route.get('', 'FaceitController.get')
}).prefix('faceit')

Route.group(() => {
  Route.get('', 'SteamController.get')
  Route.get('transform', 'SteamController.transform')
}).prefix('steam')

Route.group(() => {
  Route.get('pinned', 'GithubController.pinned')
}).prefix('gh')
