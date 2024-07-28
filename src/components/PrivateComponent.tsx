'use client'
import api from "@/api/api"
import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Spinner from "./Spinner"
import { useGlobalContext } from "@/contexts/Global"

type Props = {
    children: ReactNode
}

export default function PrivateComponent({ children }: Props) {
    const navigate = useRouter()
    const { user, setUser } = useGlobalContext()

    async function authenticate() {
        try {
            const token = localStorage.getItem('token')
            const promise = await api.userInfo(token!)
            setUser(promise.data)
        } catch (error: any) {
            navigate.push('/')
        }

    }

    useEffect(() => {
        authenticate()
    }, [])

    return (
        <main>
            {user ? children : <Spinner />}
        </main>
    )
}