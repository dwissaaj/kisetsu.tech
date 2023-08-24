'use client'
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import QueryPage from "@/app/blog/queryPage";
import {VT323} from "next/font/google";
import Searchbar from "@/app/(searchpage)/search/searchbar";
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function SearchPage() {
    const searchParams = useSearchParams()

    const search = searchParams.get('search')
    console.log(search)
    return (
        <>
            <div className={'flex flex-col h-screen justify-center items-center'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <div>
                        <h1 className={`${vt323.className} text-lg md:text-2xl lg:text-5xl text-pink-700`}>KISETSU</h1>
                    </div>
                    <div>
                        <p className={'text-md md:text-xl lg:text-2xl'}>Looking for something?...</p>
                    </div>
                </div>
                <div>
                    <Searchbar />
                </div>

            </div>
        </>
    )

}