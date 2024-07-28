
import { ChangeEvent, useState } from "react"
import alerts from "../utils/alerts"
import { useRouter } from "next/navigation"
import api, { LoginType } from "@/api/api"

type Props = {
    changeForm: (data: string) => void
}

export default function Login({ changeForm }: Props) {
    const loginDefault: LoginType = {
        login: '',
        password: ''
    }
    const navigator = useRouter()
    const [login, setLogin] = useState<LoginType>(loginDefault)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    async function doLigin(e: any) {
        e.preventDefault()
        try {
            const response = await api.login(login)
            localStorage.setItem('token', response.data.token)
            //alert(response.data.token)
            navigator.push('/home')
        } catch (error: any) {
            console.log(error)
            alerts.error(error.response.data.mensagem)
        }
    }
    return (
        <div className="flex  flex-col items-center w-full">
            <h1 className="flex text-6xl text-azul-claro font-barlow mb-8">
                LOGIN
            </h1>
            <section className="flex flex-col w-2/3 mb-4">
                <label className="flex font-barlow text-laranja text-xl">
                    Usuario
                </label>
                <input className="flex border-[1px] border-laranja text-azul-claro text-xl p-2 outline-none focus:border-azul-claro transition duration-300"
                    name="login"
                    value={login['login']}
                    onChange={handleChange}
                    type="text"
                    required
                />
            </section>
            <section className="flex flex-col w-2/3 mb-4">
                <label className="flex font-barlow text-laranja text-xl">
                    Senha
                </label>
                <input className="flex border-[1px] border-laranja text-azul-claro text-xl p-2 outline-none focus:border-azul-claro transition duration-300"
                    name="password"
                    value={login["password"]}
                    onChange={handleChange}
                    type="password"
                    required
                />
            </section>
            <section className="flex flex-col w-2/3 mb-4">
                <h2 className="flex font-barlow font-bold text-laranja text-xl cursor-pointer hover:text-azul-claro transition duration-300"
                    onClick={() => changeForm('cadastro')}>
                    Cadastre-se
                </h2>
            </section>
            <button className="flex text-2xl text-white bg-laranja mt-4 p-2 hover:bg-azul-claro transition duration-300
            outiline-none"
                onClick={doLigin}>
                Entrar
            </button>
        </div>
    )
}