'use client' // Error components must be Client Components
import {VT323} from "next/font/google";
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function Error() {
    return (

        <div className={`${vt323.className} flex flex-col justify-center items-center space-y-4`}>
            <div className={'flex flex-col items-center justify-center space-y-4'}>
                <p className={'text-center text-xl lg:text-2xl '}>Nice to see you......😁</p>
            </div>
        </div>
    )
}