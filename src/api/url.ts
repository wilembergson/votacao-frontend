const LOCALHOST = 'http://localhost:8080'
const PRODUCAO = ''

const state = false

const API_URL = state ? PRODUCAO : LOCALHOST

export default API_URL