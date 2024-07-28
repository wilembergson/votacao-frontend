'use client'
import PrivateComponent from "@/components/PrivateComponent";
import { useGlobalContext } from "@/contexts/Global";

export default function Home() {
    const { user } = useGlobalContext()

    return (
        <PrivateComponent>
            <h1>Seja bem vindo(a) {user?.name}</h1>
        </PrivateComponent>
    )
}