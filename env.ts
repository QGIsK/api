/*
|--------------------------------------------------------------------------
| Validating Environment Variables
|--------------------------------------------------------------------------
|
| In this file we define the rules for validating environment variables.
| By performing validation we ensure that your application is running in
| a stable environment with correct configuration values.
|
| This file is read automatically by the framework during the boot lifecycle
| and hence do not rename or move this file to a different location.
|
*/

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['local'] as const),
  NODE_ENV: Env.schema.enum(['development', 'production', 'testing'] as const),

  CDN_BASE: Env.schema.string({ format: 'host' }),

  FACEIT_KEY: Env.schema.string(),

  FACEIT_BASE: Env.schema.string({ format: 'host' }),

  FACEIT_ICON_PATH: Env.schema.string(),
  FACEIT_PLAYER: Env.schema.string(),

  STEAM_BASE: Env.schema.string({ format: 'host' }),

  STEAM_ID: Env.schema.string(),
  STEAM_CUSTOM: Env.schema.string(),
  STEAM_GROUP: Env.schema.string(),

  GITHUB_BASE: Env.schema.string({ format: 'host' }),
  GITHUB_API: Env.schema.string({ format: 'host' }),
  GITHUB_API_REPO: Env.schema.string(),
  GITHUB_TOKEN: Env.schema.string(),
})
