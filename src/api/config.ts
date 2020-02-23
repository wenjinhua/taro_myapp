// const base:string = 'http://dev-web-tools.meitu.com:1996'
const base:string = 'http://route.showapi.com/'

const HTTP_STATUS:any = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

export {
  base,
  HTTP_STATUS
}
