import {VT323} from "next/font/google";

const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={'flex h-screen w-screen justify-center items-center'}>
            <div className={''}>
                <h1 className={`text-center text-xl lg:text-5xl ${vt323.className}`}>Wait for me.....❤️</h1>
            </div>
        </div>
    )
}