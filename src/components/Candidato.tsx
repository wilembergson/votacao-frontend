import { useRouter } from "next/navigation"
import DataCampanha from "./DataCampanha"
import alerts from "@/utils/alerts"
import api from "@/api/api"
import { useState } from "react"
import ConfirmarVotoModal from "./ConfirmarVotoModal"

export type CandidatoType = {
    id: string
    nome: string
    numero: number
}

type Props = {
    candidato: CandidatoType
    id_campanha: string
}

export default function Candidato({ candidato, id_campanha }: Props) {

    const [showConfirmarVoto, setShowConfirmarVoto] = useState(false)

    return (
        <>
            <section className="flex items-center flex-col bg-white w-1/4 h-fit p-10 border-[1px] border-laranja
         hover:border-azul-escuro duration-300 cursor-pointer"
                onClick={() => setShowConfirmarVoto(true)}>
                <h1 className="flex text-4xl text-azul-claro font-barlow mb-4 text-center">
                    {candidato.nome}
                </h1>
                <h2 className="flex font-barlow text-laranja text-2xl text-justify">
                    {candidato.numero}
                </h2>
            </section>
            <ConfirmarVotoModal
                isVisible={showConfirmarVoto}
                change={setShowConfirmarVoto}
                id_campanha={id_campanha}
                id_candidato={candidato.id}
            />
        </>
    )
}