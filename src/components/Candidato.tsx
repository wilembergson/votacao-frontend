import { useRouter } from "next/navigation"
import DataCampanha from "./DataCampanha"

export type CandidatoType = {
    id: string
    nome: string
    numero: number
}

type Props = {
    candidato: CandidatoType
}

export default function Candidato({ candidato }: Props) {

    const navigation = useRouter()

    return (
        <section className="flex items-center flex-col bg-white w-1/4 h-fit p-10 border-[1px] border-laranja
         hover:border-azul-escuro duration-300 cursor-pointer">
            <h1 className="flex text-4xl text-azul-claro font-barlow mb-4 text-center">
                {candidato.nome}
            </h1>
            <h2 className="flex font-barlow text-laranja text-2xl text-justify">
                {candidato.numero}
            </h2>
        </section>
    )
}