'use client'
import useSWR from "swr";
import {Post} from "@/type/dto";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Content( ) {

    const { data, error, isLoading } = useSWR('http://localhost:3000/api/content', fetcher)

    if (error) {
        return <div>failed to load</div>
    }
    if (isLoading) return <div>loading...</div>

    return (
        <>
            <div className={'container mx-auto'}>
                <div className={'bg-neutral-700 p-2 m-2'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>
                        {
                            data?.post?.map((posts: Post) => {
                                return (
                                    <div className={'p-2 border border-teal-500 '} key={posts.title as string}>
                                        <p>{posts.title}</p>
                                        <p>{posts.author}</p>
                                        <p>{posts.createdAt}</p>
                                        <Link className={'border border-red-500 p-2'} href={`/content/${posts.id}`}>
                                            <button >Edit</button>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}