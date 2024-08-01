'use client'
import api from "@/api/api";
import Campanha, { CampanhaItem } from "@/components/Campanha";
import Header from "@/components/Header";
import PrivateComponent from "@/components/PrivateComponent";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

export default function Home() {
    const [campanhas, setCampanhas] = useState<CampanhaItem[]>([])
    const [loaging, setLoading] = useState(true)

    async function listarCampanhas() {
        try {
            const promise = await api.listarCampanhas()
            console.log(promise)
            setCampanhas(promise.data)
            setLoading(false)
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        listarCampanhas()
    }, [])

    return (
        <PrivateComponent>
            <Header />
            <h1 className="flex text-6xl text-azul-escuro underline font-barlow my-8">
                CAMPANHAS
            </h1>
            <div className="flex flex-wrap w-2/3 justify-center">
                {loaging ? <Spinner /> : campanhas.map(item => <>
                    <Campanha campanha={item} />
                    <Campanha campanha={item} />
                    <Campanha campanha={item} />
                </>)}
            </div>
        </PrivateComponent>
    )
}