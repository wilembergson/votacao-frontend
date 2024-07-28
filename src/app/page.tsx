'use client'

import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect, useState } from "react";
import { MdOutlineHowToVote } from "react-icons/md";
import Login from '@/components/Login';
import Signin from '@/components/Signin';


export default function Root() {
  const [form, setForm] = useState('login')

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
            {form === 'login' ?
              <Login changeForm={setForm} />
              :
              <Signin changeForm={setForm} />
            }
          </form>
        </div>
      </div>
    </main>
  );
}
