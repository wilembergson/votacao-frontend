'use client'
import api from "@/api/api"
import Candidato from "@/components/Candidato"
import Header from "@/components/Header"
import PrivateComponent from "@/components/PrivateComponent"
import alerts from "@/utils/alerts"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"

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
            <div className="flex flex-col w-1/2">
                <section className="flex flex-col items-start mt-10 mb-4">
                    <h2 className="flex text-6xl font-barlow font-bold text-azul-escuro">
                        {campanha?.titulo}
                    </h2>
                    <div className="flex w-72 h-4 bg-laranja mb-6" />
                    <h2 className="flex font-barlow font-bold text-2xl text-laranja">
                        {campanha?.descricao}
                    </h2>
                </section>

                <section className="flex w-full  justify-between text-azul-escuro my-10 ">
                    {campanha?.candidatos.map(item => <Candidato candidato={item} id_campanha={campanha.id} />)}
                </section>
                <button className="flex items-center font-barlow text-2xl text-laranja bg-azul-escuro w-min px-4 py-2 hover:opacity-85 duration-300"
                    onClick={() => navigation.push('/home/usuario')}>
                    <IoIosArrowBack />
                    Voltar
                </button>
            </div>
        </PrivateComponent>
    )
}