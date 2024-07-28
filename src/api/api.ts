import axios from "axios"
import API_URL from "./url"
import { headers } from "next/headers"

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

async function userInfo(token: string) {
    return await axios.get(`${API_URL}/usuario/informacoes`,
        {
            headers: {
                authorization: token
            }
        }
    )
}

const api = {
    saveUser,
    login,
    userInfo
}

export default api