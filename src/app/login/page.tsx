'use client'
import {Press_Start_2P} from "next/font/google";
import {getSession, signIn} from "next-auth/react";
import {redirect} from "next/navigation";
const tekstur = Press_Start_2P({weight: "400", subsets: ['latin']})
export default async function Login() {
    const session = await getSession()
    if (session) {
        redirect('/dashboard')
    }
    return (
        <>
            <div className={'container mx-auto'}>
                <div className={'flex h-screen items-center justify-center'}>
                    <div className={'flex flex-col gap-2 justify-center items-center text-center'}>
                        <p className={tekstur.className}>You need login first</p>
                        <h1 className={tekstur.className}>Continue with </h1>
                        <button className={'p-2 border rounded-md border-teal-500'} onClick={() => signIn("google", { callbackUrl: '/dashboard' })}>Sign with Google</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}