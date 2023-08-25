'use client'
import {redirect, useSearchParams} from "next/navigation";
import useSWR from "swr";
import LoadingResult from "@/app/(searchpage)/search/result/loading";
import Error from "@/app/blog/error";
import NotFoundFilter from "@/app/(searchpage)/search/result/not-found";
import {Post} from "@/type/dto";
import CardSearch from "@/app/(searchpage)/search/result/cardsearch";
const fetcher = (url: string) => fetch(url).then(r => r.json())
export default async function ResultPage() {
    const slugify = require('slugify')
    const searchParams = useSearchParams()
    const search = searchParams.get('filter')
    const { data, isLoading, error } = useSWR(() => search ? `/api/search/result?filter=${search}` : null, fetcher)
    if(!search) {
        redirect('/search')
    }
    if (isLoading) {
        return <LoadingResult/>
    }
    if (error) {
        return <Error error={error} reset={() => redirect('/')} />
    }
    if (data.status === 204) {
        return <NotFoundFilter />
    }

    return (
        <>
            <div className={'flex justify-center items-center'}>
                <div className={'flex flex-col gap-4'}>
                    <div className={'text-lg md:text-2xl lg:text-3xl'}>
                        <p >Result for {search}
                        </p>
                    </div>
                    <div className={'grid grid-cols-1 md:grid-cols-2  gap-3'}>
                        {
                            data?.post?.map((posts: Post) => {
                                return (
                                    <CardSearch id={posts.id as string} title={posts.title as string} image_header={posts.image_header as string}  key={posts.id as string}
                                            description={posts.description as string} createdAt={posts.createdAt as string}    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )

}
//
// {
//     data?.post?.map((posts: Post) => {
//         return (
//             <div key={posts.id as string} className={'w-full h-full '}>
//                 <Link className={'hover:border-b-2 hover:border-blue-300'} href={`/blog/${posts.title}`}>
//                     <div className={'grid grid-cols-2 content-center items-center gap-3 rounded-md p-2 border border-sky-500'}>
//                         <div className={''}>
//                             <Image src={`${posts.image_header}`} alt={`${posts.title}`} width={400} height={400} />
//                         </div>
//                         <div className={'truncate '}>
//                             <p className={'font-bold '}>{posts.title}</p>
//                             <p className={'text-neutral-200'}>{posts.createdAt?.substr(0,10)}</p>
//                             <p className={'text-neutral-400 font-light'}>{posts.description}</p>
//                         </div>
//
//                     </div>
//                 </Link>
//
//
//             </div>
//         )
//     })
// }