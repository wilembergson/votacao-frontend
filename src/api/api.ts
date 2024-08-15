import axios from "axios"
import API_URL from "./url"
import { headers } from "next/headers"
import { CampanhaItem } from "@/components/Campanha"

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

export type VotoData = {
    id_campanha: string
    id_candidato: string
}

function config() {
    const token: any = localStorage.getItem('token')
    return {
        headers: {
            authorization: token
        }
    }
}

async function salvarUsuario(data: NewUser) {
    return await axios.post(`${API_URL}/usuario/cadastrar`, data)
}

async function login(data: LoginType) {
    return await axios.post(`${API_URL}/auth/login`, data)
}

async function usuarioInfo(token: string) {
    return await axios.get(`${API_URL}/usuario/informacoes`, config())
}

async function listarCampanhas() {
    return await axios.get(`${API_URL}/campanha/listar`, config())
}

async function obterCampanhaPorId(id: string) {
    return await axios.get(`${API_URL}/campanha/${id}`, config())
}

async function votar(name: string, data: VotoData) {
    return await axios.post(`${API_URL}/voto/registrar/${name}`, data, config())
}

const api = {
    salvarUsuario,
    login,
    usuarioInfo,
    listarCampanhas,
    obterCampanhaPorId,
    votar
}

export default api