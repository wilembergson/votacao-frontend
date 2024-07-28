'use client'
import api from "@/api/api"
import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Spinner from "./Spinner"

type Props = {
    children: ReactNode
}

type UserInfo = {
    name: string
    cpf: number
    login: string
    role: string
}

export default function PrivateComponent({ children }: Props) {
    const navigate = useRouter()
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

    async function authenticate() {
        try {
            const token = localStorage.getItem('token')
            const promise = await api.userInfo(token!)
            setUserInfo(promise.data)
        } catch (error: any) {
            navigate.push('/')
        }

    }

    useEffect(() => {
        authenticate()
    }, [])

    return (
        <>
            {userInfo ? children : <Spinner />}
        </>
    )
}