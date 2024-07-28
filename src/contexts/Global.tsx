'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

type UserInfo = {
    name: string
    cpf: number
    login: string
    role: string
}

interface ContextProps {
    user: UserInfo | null,
    setUser: Dispatch<SetStateAction<UserInfo | null>>
}

const GlobalContext = createContext<ContextProps>({
    user: null,
    setUser: (): UserInfo | null => null
})

export const GlobalContextProvider = ({ children }: any) => {
    const [user, setUser] = useState<UserInfo | null>(null)

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)