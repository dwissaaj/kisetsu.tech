'use client'
import useSWR from "swr";
import {Post} from "@/type/dto";
import Loading from "@/app/blog/loading";
import CardBlog from "@/app/blog/card";
import Error from "@/app/blog/error";
import {redirect} from "next/navigation";
import SearchPage from "@/app/blog/queryPage";
import Image from "next/image";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Blog() {
    const {data, error, isLoading} = useSWR('/api/blog', fetcher)
    if (error) return <Error error={error} reset={() => redirect('/')}/>
    if (isLoading) return <Loading/>
    return (
        <>
            <div className={'container mx-auto '}>

                <div className={''}>
                    <div className={'flex justify-center w-full'}>
                        <SearchPage />
                    </div>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 m-2 p-2'}>
                        {
                            data?.post?.map((posts: Post) => {
                                return (
                                    <div key={posts.id as string}>
                                        <div className={'flex flex-col bg-neutral-900 border-2 rounded-md border-neutral-200 p-2 gap-2 hover:border-pink-200' +
                                            'transition duration-300 ease-in-out hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-16px_12px_0px_-2px_rgba(27,145,111,0.75)]'}  >
                                            <div>
                                                <Image className="rounded-md mx-1 px-1 bg-center" src={`${posts.image_header}`} alt={`${posts.title}`} height={400} width={400} />

                                            </div>
                                            <div className={'capitalize font-bold text-pink-400'}>
                                                <h1>{posts.title}</h1>
                                            </div>
                                            <div>
                                                <p>{posts.createdAt?.substring(0,10)}</p>
                                            </div>
                                            <div>
                                                <Link className={'hover:border-b-2 hover:border-blue-300'} href={`/blog/${posts.title}`}>
                                                    Read more...
                                                </Link>
                                            </div>
                                        </div>
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
