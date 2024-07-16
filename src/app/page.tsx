import { MdOutlineHowToVote } from "react-icons/md";


export default function Home() {
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
      </div>
    </main>
  );
}
