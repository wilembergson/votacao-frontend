import { useRouter } from "next/navigation";
import { FaPowerOff } from 'react-icons/fa'
import { useState } from "react"
import Modal from "./Modal";
import Spinner from "./Spinner";

type Props = {
    isVisible: boolean
    onClick?: any
}

export default function LogoutModal({ isVisible, onClick }: Props) {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

    function logout() {
        setLoading(true)
        localStorage.clear()
        router.push('/')
    }
    return (
        <Modal isVisible={isVisible}>
            {!loading ?
                <div onClick={() => null} className="flex flex-col justify-center md:m-0 m-5 items-center bg-white shadow-2xl py-12 border-[1px] border-laranja" data-aos="zoom-in">
                    <FaPowerOff size={70} color="#5DABA7" />
                    <h1 className="font-principal font-black text-3xl flex-wrap w-3/4 text-center text-laranja my-10">
                        Tem certeza que deseja encerrar a sessão?
                    </h1>
                    <section className="flex w-3/4 justify-around">
                        <button className="font-principal text-2xl text-white bg-azul-claro px-5 py-2 rounded-lg hover:opacity-80 transition duration-500"
                            onClick={() => logout()}>
                            Sim
                        </button>
                        <button className="flex items-center font-principal text-2xl text-white bg-laranja px-5 py-2 rounded-lg hover:opacity-80  transition duration-500"
                            onClick={() => onClick(false)}>
                            Cancelar
                        </button>
                    </section>
                </div> : <Spinner />}
        </Modal>
    )
}