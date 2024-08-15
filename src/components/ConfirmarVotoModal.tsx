'use client'
import { useRouter } from "next/navigation";
import { FaPowerOff } from 'react-icons/fa'
import { useState } from "react"
import Modal from "./Modal";
import Spinner from "./Spinner";
import alerts from "@/utils/alerts";
import api from "@/api/api";

type Props = {
    isVisible: boolean
    change: (value: boolean) => void
    id_campanha: string
    id_candidato: string
}

export default function ConfirmarVotoModal({ isVisible, change, id_campanha, id_candidato }: Props) {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const [senha, setSenha] = useState('')

    async function votar() {
        try {
            const promise = await api.votar(senha, { id_campanha, id_candidato })
            alerts.success(promise.data.mensagem)
            change(false)
        } catch (error: any) {
            alerts.error(error.response.data.mensagem)
        }
    }

    return (
        <Modal isVisible={isVisible}>
            {!loading ?
                <div onClick={() => null} className="flex flex-col justify-center md:m-0 m-5 items-center bg-white shadow-2xl py-12 border-[1px] border-laranja">
                    <h1 className="font-principal font-black text-3xl flex-wrap w-3/4 text-center text-laranja my-4">
                        Digite sua senha para confirmar o voto
                    </h1>
                    <input className="border-[1px] border-azul-claro mb-10"
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <section className="flex w-3/4 justify-around">
                        <button className="font-principal text-2xl text-white bg-azul-claro px-5 py-2 rounded-lg hover:opacity-80 transition duration-500"
                            onClick={votar}>
                            Sim
                        </button>
                        <button className="flex items-center font-principal text-2xl text-white bg-laranja px-5 py-2 rounded-lg hover:opacity-80  transition duration-500"
                            onClick={() => change(false)}>
                            Cancelar
                        </button>
                    </section>
                </div> : <Spinner />}
        </Modal>
    )
}