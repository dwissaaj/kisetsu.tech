'use client'
import {useSearchParams} from "next/navigation";
import Link from "next/link";

export default function NotFoundFilter() {
    const searchParams = useSearchParams()
    const search = searchParams.get('filter')
    return (
        <>
            <div className={'w-screen h-screen flex justify-center items-center'}>
                <div className={'flex flex-col justify-center items-center space-y-4'}>
                    <div className={'text-lg md:text-2xl lg:text-3xl'}>
                        <p >There is no post contain
                            <span className={'line-through'}> {search} </span>
                        </p>
                    </div>
                    <div>
                        <Link href={'/search/'} className={'p-2 rounded-md border-pink-500 border-2'} >Go Back</Link>
                    </div>
                </div>
            </div>
        </>
    )

}