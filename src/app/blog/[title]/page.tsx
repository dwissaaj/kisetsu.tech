
import Image from "next/image";
import Advice from "@/app/blog/advice/page";
import Link from "next/link";
import {MDXRemote} from "next-mdx-remote/rsc";
import {getData} from "@/app/blog/[title]/get-data";



export default async function Page({params: {title}}: { params: { title: string, } }) {

    const data = await getData(title)
        return (
        <>
            <div className={'mx-auto container text-white bg-neutral-900 rounded-xl my-24'}>
                <div className={'grid grid-cols-1 lg:grid-cols-12 gap-3 h-fit'}>

                    <div className={'col-span-8 flex flex-col p-2 m-2 space-y-4 w-full justify-items-start items-start text-start'}>
                        <div className={'my-4 '}>
                            <div>
                                <div>
                                    <h1 className={'text-lg md:text-xl lg:text-3xl capitalize font-bold'}>{data?.post?.title}</h1>
                                </div>
                                <div className={'font-normal text-sm md:text-md lg:text-xl'}>
                                    <p>{data?.post?.writer} {data?.post?.createdAt.substr(0, 10)}</p>
                                </div>
                            </div>
                            <div className={'my-4 rounded-md space-y-3 flex flex-col justify-center items-center'}>
                                <Image className={'rounded-md shadow-md shadow-neutral-50'} width={800} height={800}
                                       src={`${data?.post?.image_header}`} alt={`${data?.post?.title}`} priority={true}/>
                                <p className={'text-light break-all'}>{data?.post?.description}</p>
                            </div>
                            <article
                                className={'prose prose-sm lg:prose-lg break-words text-zinc-300 my-4 w-full prose-code:w-fit prose-pre:min-w-fit prose-pre:bg-neutral-800'}>
                                <MDXRemote source={data?.post?.content}/>
                            </article>
                            <div className={'flex space-x-2'}>

                                {
                                    data?.post?.tag.map((tags: string) => {
                                        return (
                                            <Link href={`/search/result/?filter=${tags}`}
                                                  className={'hover:-translate-y-2 transition duration-300 ease-in-out bg-pink-500 rounded-md p-2 '}
                                                  key={tags}>{tags}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                    <div className={'col-span-3 my-12 '}>
                        <Advice />
                    </div>

                </div>
            </div>
        </>
    )
}

