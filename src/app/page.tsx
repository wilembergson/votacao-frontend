'use client'

import 'aos/dist/aos.css'
import Aos from 'aos'
import { ChangeEvent, useEffect, useState } from "react";
import { MdOutlineHowToVote } from "react-icons/md";
import api, { NewUser } from '@/api/api';


export default function Home() {
  const userDefault: NewUser = {
    name: '',
    cpf: '',
    login: '',
    password: ''
  }
  const [formulario, setFormulario] = useState('login')
  const [newUser, setNewUser] = useState<NewUser>(userDefault)

  function handleChangeUser(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  async function save(e: any) {
    e.preventDefault()
    try {
      const response = await api.saveUser(newUser)
      alert(response.data.mensagem)
      setNewUser(userDefault)
    } catch (error: any) {
      console.log(error)
      alert(error.response.data.mensagem)
    }
  }

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-beje-claro">
      <div className="flex w-full h-screen">
        <div className="relative flex-col w-1/2 h-full justify-center items-center bg-red-200">
          <section className="flex absolute z-30 flex-col w-full h-full justify-center items-center">
            <MdOutlineHowToVote size={310} color="#5DABA7" className="animate__animated animate__wobble" />
            <h1 className="flex text-9xl text-laranja font-barlow font-extralight text-pretty">
              VOTAÇÃO
            </h1>
            <h1 className="flex text-8xl text-laranja font-barlow font-extralight">
              ONLINE
            </h1>
          </section>
          <div className="flex absolute z-20 flex-col bg-azul-escuro w-full h-full justify-center items-center  opacity-90" />
          <img className="flex w-full absolute z-10 h-screen" src="/votando.jpg" alt="" />
        </div>
        <div className="flex justify-center items-center w-1/2 h-screen">
          <form className="flex items-center flex-col bg-white w-1/2 h-fit py-10 border-[1px] border-laranja" data-aos="zoom-in">
            {formulario === 'login' ?
              <div className="flex  flex-col items-center w-full">
                <h1 className="flex text-6xl text-azul-claro font-barlow mb-8">
                  LOGIN
                </h1>
                <section className="flex flex-col w-2/3 mb-4">
                  <label className="flex font-barlow text-laranja text-xl">
                    Usuario
                  </label>
                  <input className="flex border-[1px] border-laranja text-azul-claro text-xl p-2 outline-none focus:border-azul-claro transition duration-300"
                    type="text"
                  />
                </section>
                <section className="flex flex-col w-2/3 mb-4">
                  <label className="flex font-barlow text-laranja text-xl">
                    Senha
                  </label>
                  <input className="flex border-[1px] border-laranja text-azul-claro text-xl p-2 outline-none focus:border-azul-claro transition duration-300"
                    type="password"
                  />
                </section>
                <section className="flex flex-col w-2/3 mb-4">
                  <h2 className="flex font-barlow font-bold text-laranja text-xl cursor-pointer hover:text-azul-claro transition duration-300"
                    onClick={() => setFormulario('cadastro')}>
                    Cadastre-se
                  </h2>
                </section>
                <button className="flex text-2xl text-white bg-laranja mt-4 p-2 hover:bg-azul-claro transition duration-300 outiline-none">
                  Entrar
                </button>
              </div>
              :
              <div className="flex  flex-col items-center w-full">
                <h1 className="flex text-6xl text-azul-claro font-barlow mb-8">
                  CADASTRO {newUser.name}
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
                  />
                </section>
                <section className="flex flex-col w-2/3 mb-4">
                  <h2 className="flex font-barlow font-bold text-laranja text-xl cursor-pointer hover:text-azul-claro transition duration-300"
                    onClick={() => setFormulario('login')}>
                    Fazer login
                  </h2>
                </section>
                <button className="flex text-2xl text-white bg-laranja mt-4 p-2 hover:bg-azul-claro transition duration-300 outiline-none"
                  onClick={save}>
                  Salvar
                </button>
              </div>
            }
          </form>
        </div>
      </div>
    </main>
  );
}
