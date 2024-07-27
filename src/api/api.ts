import axios from "axios"
import API_URL from "./url"

export type NewUser = {
    name: string
    cpf: string
    login: string
    password: string
}

export type LoginType = {
    login: string
    password: string
}

async function saveUser(data: NewUser) {
    return await axios.post(`${API_URL}/usuario/cadastrar`, data)
}

async function login(data: LoginType) {
    return await axios.post(`${API_URL}/auth/login`, data)
}

const api = {
    saveUser,
    login
}

export default api