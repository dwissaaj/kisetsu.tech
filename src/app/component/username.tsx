'use client'
import {useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link"
export default function Username() {
    const { data: session, status } = useSession()
    if (status == 'loading') {
        return <p>Get your data</p>
    }
    if (status == 'unauthenticated') {
        return <Link href={'/login'} className={'p-2 lg:text-2xl border rounded-md border-teal-500'}>Login</Link>
    }
    return (
        <div>
            <div className={'flex gap-2 justify-center items-center'}>
                <Link href={'/dashboard'} >
                    <p>{session?.user?.name as string}</p>
                </Link>
                <Image className={'border rounded-full'} src={`${session?.user?.image as string}`} alt={`${session?.user?.name as string}`} width={50} height={50} />
            </div>
        </div>
    )
}