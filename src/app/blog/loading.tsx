import Image from "next/image";
import {VT323} from "next/font/google";
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function Loading() {

    return (
        <>
            <div className={'flex justify-center items-center my-8 h-screen'}>
                <div className={''}>
                    <h1 className={`text-center text-xl lg:text-5xl ${vt323.className}`}>Hold on a second........💖</h1>
                    <Image className={'rounded-md'} src={'/image/gif/murai yu.gif'} alt={'murai yu'} width={500} height={500}/>
                </div>
            </div>
        </>
    )
}