'use client'
import api from "@/api/api"
import Header from "@/components/Header"
import PrivateComponent from "@/components/PrivateComponent"
import alerts from "@/utils/alerts"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Campanha = {
    id: string
    titulo: string
    descricao: string
    votacao_aberta: boolean
    data_criacao: number[]
    inicio_votacao: number[]
    fim_votacao: number[]
    candidatos: Candidato[]
}

type Candidato = {
    id: string
    nome: string
    numero: number
}

export default function Campanha({
    params,
}: {
    params: { id: string }
}) {

    const navigation = useRouter()
    const [campanha, setCampanha] = useState<Campanha | null>(null)

    async function obterCampanha() {
        try {
            const promise = await api.obterCampanhaPorId(params.id)
            setCampanha(promise.data)
        } catch (error: any) {
            alerts.error(error.response.data.mensagem)
        }
    }

    useEffect(() => {
        obterCampanha()
    }, [])

    return (
        <PrivateComponent>
            <Header />
            <h2>{campanha?.titulo}</h2>
            <h2>{campanha?.descricao}</h2>
            <section className="flex w-3/4  justify-between bg-azul-claro text-azul-escuro my-10">
                {campanha?.candidatos.map(item => {
                    return (
                        <div className="flex flex-col items-center py-8">
                            <h2>{item.nome}</h2>
                            <h2>{item.numero}</h2>
                        </div>
                    )
                })}
            </section>
            <button onClick={() => navigation.push('/home/usuario')}>
                Voltar
            </button>
        </PrivateComponent>
    )
}