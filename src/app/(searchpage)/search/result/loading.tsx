import Image from "next/image";
import {VT323} from "next/font/google";
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function LoadingResult() {
    return (
        <>
            <div className={'flex justify-center items-center my-8 w-full h-full'}>
                <div className={''}>
                    <h1 className={`text-center text-xl lg:text-5xl ${vt323.className}`}>Try to find something...</h1>
                </div>
            </div>
        </>
    )

}