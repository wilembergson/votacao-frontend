type Props = {
    titulo: string
    data: number[]
}

export default function DataCampanha({ titulo, data }: Props) {

    function diaMes(numero: number) {
        if (numero < 10) {
            return `0${numero}`
        }
        return numero
    }

    return (
        <div className="flex text-azul-claro bg-azul-escuro font-barlow text-xl p-1 my-1 rounded-md">
            <h2 className="text-laranja mr-2">{titulo}</h2>
            <h2>{diaMes(data[2])}/{diaMes(data[1])}/{data[0]} às {diaMes(data[3])}:{diaMes(data[4])}h</h2>
        </div>
    )
}