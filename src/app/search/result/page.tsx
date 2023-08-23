'use client'
import {redirect, useParams, usePathname, useSearchParams} from "next/navigation";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then(r => r.json())
export default async function ResultPage() {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    if(search === null) {
        redirect('/search')
    }
    console.log(search)
    const {data, error, isLoading} = useSWR('/api/blog', fetcher)
    return (
        <>
            <p>{search}</p>
        </>
    )

}