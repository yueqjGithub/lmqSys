interface URI {
  [key:string]: string
}

interface URIS {
  baseUrl: string,
  whiteList: URI,
  authList: URI
}

const baseUrl = '/api'

const urls:URIS = {
  baseUrl: baseUrl,
  whiteList: {
    login: '/login'
  },
  authList: {
  }
}

export default urls