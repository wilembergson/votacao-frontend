import { useGlobalContext } from "@/contexts/Global";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineHowToVote, MdOutlinePowerSettingsNew } from "react-icons/md";
import HeaderItem from "./HeaderItem";
import { useState } from "react";
import LogoutModal from "./logout-modal";

export default function Header() {
    const { user } = useGlobalContext()
    const [showLogout, setShowLogout] = useState(false)

    return (
        <header className="flex w-full justify-between bg-azul-escuro p-6 font-barlow">
            <div className="flex items-center cursor-pointer">
                <MdOutlineHowToVote size={70} color="#5DABA7" />
                <h2 className="text-4xl text-laranja">
                    Votação Online
                </h2>
            </div>
            <div className="flex items-center">
                <HeaderItem>
                    <FaUserCircle />
                    <h2 className="mx-1">
                        {user?.name}
                    </h2>
                </HeaderItem>
                <HeaderItem>
                    <div className="flex items-center" onClick={() => setShowLogout(true)}>
                        <MdOutlinePowerSettingsNew />
                        <h2 className="mx-1">
                            Sair
                        </h2>
                    </div>
                </HeaderItem>
            </div>
            <LogoutModal isVisible={showLogout} onClick={setShowLogout} />
        </header>
    )
}