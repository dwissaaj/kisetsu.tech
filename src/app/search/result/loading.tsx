import Image from "next/image";
import {VT323} from "next/font/google";
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function LoadingResult() {
    return (
        <>
            <div className={'flex justify-center items-center my-8 h-screen'}>
                <div className={''}>
                    <h1 className={`text-center text-xl lg:text-5xl ${vt323.className}`}>Hold on a second.......💖</h1>
                </div>
            </div>
        </>
    )

}