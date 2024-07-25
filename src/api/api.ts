import axios from "axios"
import API_URL from "./url"

export type NewUser = {
    name: string
    cpf: string
    login: string
    password: string
}

async function saveUser(data: NewUser) {
    return await axios.post(`${API_URL}/usuario/cadastrar`, data)
}

const api = {
    saveUser
}

export default api