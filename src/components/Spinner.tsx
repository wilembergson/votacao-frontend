import { MdOutlineHowToVote } from "react-icons/md";
import { BarLoader } from "react-spinners";

export default function Spinner() {
    return (
        <div className="flex flex-col w-full h-screen justify-center items-center">
            <MdOutlineHowToVote size={200} color="#F36F31" />
            <BarLoader
                height={10}
                width={250}
                color="#F36F31"

            />
        </div>
    )
}