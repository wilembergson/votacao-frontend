'use client'
import Header from "@/components/Header";
import PrivateComponent from "@/components/PrivateComponent";
import { useGlobalContext } from "@/contexts/Global";

export default function Home() {
    const { user } = useGlobalContext()

    return (
        <PrivateComponent>
            <Header />
        </PrivateComponent>
    )
}