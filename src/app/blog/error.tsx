'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Image from "next/image";

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

    <div className={'flex justify-center items-center'}>
        <div className={''}>
            <div>
                <h2>Something went wrong!</h2>
                <button
                    onClick={

                        () => reset()
                    }
                >
                    Try again
                </button>
            </div>
            <Image className={'rounded-md'} src={'/image/gif/murai yu.gif'} alt={'murai yu'} width={500} height={500}/>
        </div>
    </div>
    )
}