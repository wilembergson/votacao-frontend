import api, { NewUser } from "@/api/api"
import alerts from "@/utils/alerts"
import { ChangeEvent, useState } from "react"

type Props = {
    changeForm: (data: string) => void
    loading: (data: boolean) => void
}

export default function Signin({ changeForm, loading }: Props) {
    const userDefault: NewUser = {
        name: '',
        cpf: '',
        login: '',
        password: ''
    }
    const [newUser, setNewUser] = useState<NewUser>(userDefault)

    function handleChangeUser(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    async function save(e: any) {
        e.preventDefault()
        try {
            loading(true)
            const response = await api.saveUser(newUser)
            alerts.success(response.data.mensagem)
            setNewUser(userDefault)
        } catch (error: any) {
            loading(false)
            alerts.error(error.response.data.mensagem)
        }
    }

    return (
        <div className="flex  flex-col items-center w-full">
            <h1 className="flex text-6xl text-azul-claro font-barlow mb-8">
                CADASTRO
            </h1>
            <section className="flex flex-col w-2/3 mb-4">
                <label className="flex font-barlow text-laranja text-xl">
                    Nome
                </label>
                <input className="flex border-[1px] border-laranja text-azul-claro text-xl p-2 outline-none focus:border-azul-claro transition duration-300"
                    name='name'
                    value={newUser['name']}
                    onChange={handleChangeUser}
                    type="text"
                    required
                />
            </section>
            <section className="flex flex-col w-2/3 mb-4">
                <label className="flex font-barlow text-laranja text-xl">
                    CPF
                </label>
                <input className="flex border-[1px] border-laranja text-azul-claro text-xl p-2 outline-none focus:border-azul-claro transition duration-300"
                    name='cpf'
                    value={newUser['cpf']}
                    onChange={handleChangeUser}
                    type="number"
                    required
                />
            </section>
            <section className="flex flex-col w-2/3 mb-4">
                <label className="flex font-barlow text-laranja text-xl">
                    Usuário
                </label>
                <input className="flex border-[1px] border-laranja text-azul-claro text-xl p-2 outline-none focus:border-azul-claro transition duration-300"
                    name='login'
                    value={newUser['login']}
                    onChange={handleChangeUser}
                    type="text"
                    required
                />
            </section>
            <section className="flex flex-col w-2/3 mb-4">
                <label className="flex font-barlow text-laranja text-xl">
                    Senha
                </label>
                <input className="flex border-[1px] border-laranja text-azul-claro text-xl p-2 outline-none focus:border-azul-claro transition duration-300"
                    name='password'
                    value={newUser['password']}
                    onChange={handleChangeUser}
                    type="password"
                    required
                />
            </section>
            <section className="flex flex-col w-2/3 mb-4">
                <h2 className="flex font-barlow font-bold text-laranja text-xl cursor-pointer hover:text-azul-claro transition duration-300"
                    onClick={() => changeForm('login')}>
                    Fazer login
                </h2>
            </section>
            <button className="flex text-2xl text-white bg-laranja mt-4 p-2 hover:bg-azul-claro transition duration-300 outiline-none"
                onClick={save}>
                Salvar
            </button>
        </div>
    )
}