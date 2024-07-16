import { MdOutlineHowToVote } from "react-icons/md";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-beje-claro">
      <div className="flex w-full h-screen">
        <section className="flex flex-col bg-azul-escuro w-1/2 h-full justify-center items-center">
          <MdOutlineHowToVote size={310} color="#5DABA7" className="animate__animated animate__wobble" />
          <h1 className="flex text-9xl text-laranja font-barlow font-extralight">
            VOTAÇÃO
          </h1>
          <h1 className="flex text-8xl text-laranja font-barlow font-extralight">
            ONLINE
          </h1>
        </section>
      </div>
    </main>
  );
}
