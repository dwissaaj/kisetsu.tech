'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Image from "next/image";
import {VT323} from "next/font/google";
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (

    <div className={`${vt323.className} flex flex-col justify-center items-center space-y-4`}>
            <div className={'flex flex-col items-center justify-center space-y-4'}>
                <p className={'text-center text-xl lg:text-5xl '}>Something went wrong!!!.... 😢</p>
                <button className={'bg-teal-500 p-2 rounded-md '}
                    onClick={

                        () => reset()
                    }
                >
                    Try again
                </button>
            </div>
            <div>
                <Image className={'rounded-md'} src={'/image/gif/crying nagisa.gif'} alt={'murai yu'} width={500} height={500}/>
            </div>

    </div>
    )
}