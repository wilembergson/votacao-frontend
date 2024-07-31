import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function HeaderItem({ children }: Props) {
    return (
        <section className="flex items-center mx-4 text-2xl text-azul-claro hover:text-laranja transition duration-300 cursor-pointer">
            {children}
        </section>
    )
}