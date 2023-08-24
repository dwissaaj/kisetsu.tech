'use client'
import {Press_Start_2P} from "next/font/google";
import {getSession, signIn, signOut} from "next-auth/react";
import {redirect} from "next/navigation";
const press2start = Press_Start_2P({weight: "400", subsets: ['latin']})
export default function Logout() {
    return (
        <>
            <div className={'container mx-auto'}>
                <div className={'flex h-screen items-center justify-center'}>
                    <div className={'flex flex-col gap-2 justify-center items-center text-center'}>
                        <button className={'p-2 border rounded-md border-red-500'} onClick={() => signOut({ callbackUrl: '/search' })}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}