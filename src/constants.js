import config from 'config'

/* eslint import/prefer-default-export: 0 */
export const API_URL = `${config.api_server.protocol}://${
  config.api_server.host
}:${config.api_server.port}`
