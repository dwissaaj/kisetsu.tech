'use client'
import useSWR from "swr";
import {Post} from "@/type/dto";
import Loading from "@/app/blog/loading";
import Error from "@/app/blog/error";
import {redirect} from "next/navigation";
import SearchPage from "@/app/blog/queryPage";
import Image from "next/image";
import Link from "next/link";
import CardBlog from "@/app/blog/card";

const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Blog() {
    const {data, error, isLoading} = useSWR('/api/blog', fetcher)
    if (error) return <Error error={error} reset={() => redirect('/')}/>
    if (isLoading) return <Loading/>
    return (
        <>
            <div className={'container mx-auto '}>

                <div className={''}>
                    <div className={'mt-14 flex flex-col items-center justify-center w-full'}>
                        <h1 className={'font-extrabold text-2xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-pink-500 to-orange-500'}>Let&apos;s talk about </h1>
                        <SearchPage />
                    </div>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 m-2 p-2'}>
                        {
                            data?.post?.map((posts: Post) => {
                                return (
                                    <CardBlog id={posts.id as string} title={posts.title as string} image_header={posts.image_header as string} createdAt={posts.createdAt as string}
                                              key={posts.id as string} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
