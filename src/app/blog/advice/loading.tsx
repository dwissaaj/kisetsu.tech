import Image from "next/image";
import {VT323} from "next/font/google";
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function Loading() {

    return (
        <>
            <div className={'flex justify-center items-center'}>
                <div className={''}>
                    <h1 className={`text-center text-xl lg:text-2xl ${vt323.className}`}>Waiting for me......💖</h1>
                </div>
            </div>
        </>
    )
}