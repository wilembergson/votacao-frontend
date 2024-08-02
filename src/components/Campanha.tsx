import DataCampanha from "./DataCampanha"

export type CampanhaItem = {
    id: string
    titulo: string
    descricao: string
    votacao_aberta: boolean
    data_inscricao: number[]
    inicio_votacao: number[]
    fim_votacao: number[]

}

type Props = {
    campanha: CampanhaItem
}

export default function Campanha({ campanha }: Props) {

    return (
        <section className="flex items-center flex-col bg-white w-1/4 h-fit p-10 m-4 border-[1px] border-laranja
         hover:border-azul-escuro duration-300 cursor-pointer">
            <h1 className="flex text-4xl text-azul-claro font-barlow mb-4 text-center">
                {campanha.titulo}
            </h1>
            <h2 className="flex font-barlow text-laranja text-xl text-justify">
                {campanha.descricao}
            </h2>
            <section className="mt-4">
                <DataCampanha titulo="INÍCIO: " data={campanha.inicio_votacao} />
                <DataCampanha titulo="FIM: " data={campanha.fim_votacao} />
            </section>
        </section>
    )
}