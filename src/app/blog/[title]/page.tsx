'use client'
import useSWR from "swr";
import Loading from "@/app/blog/loading";
import {useParams, usePathname} from "next/navigation";
const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Singlepost({ params }: { params: { title: string } } ) {
    const title = useParams()

    const { data, error, isLoading } = useSWR(`http://localhost:3000/api/blog/${title}`, fetcher)


    if (error) return <p>wrong error</p>
    if (isLoading) return <Loading />
    console.log(data)
    console.log(title)
    return (
        <>
            <div className={'container mx-auto'}>
                <div className={'bg-neutral-700 p-2 m-2'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>

                    </div>
                </div>
            </div>
        </>
    )
}