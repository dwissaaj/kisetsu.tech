import {MDXRemote} from "next-mdx-remote/rsc";
import Image from "next/image";
import Advice from "@/app/blog/recommendations/page";

export async function getData(title: string) {
    const change = title.replace("-", "%20")
    const res = await fetch(`http://localhost:3000/api/blog/${change}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page({ params: { title } }: {params: { title: string,}}) {

    const data = await getData(title)

    return (
        <>
            <div className={'grid grid-cols-1 lg:grid-cols-12 gap-3'}>


            <div className={'col-span-8 flex flex-col p-2 m-2 space-y-4 w-full items-center justify-center'}>
                <div className={'my-4 '}>
                    <div>
                        <div>
                            <h1 className={'text-xl md:text-2xl lg:text-4xl capitalize font-bold'}>{data.post.title}</h1>
                        </div>
                        <div className={'font-normal text-sm md:text-md lg:text-xl'}>
                            <p >{data.post.writer} {data.post.createdAt.substr(0,10)}</p>
                        </div>
                    </div>
                    <div className={'my-4 rounded-md space-y-3 flex flex-col justify-center items-center'}>
                        <Image className={'rounded-md shadow-md shadow-neutral-50'} width={1000} height={1000} src={`${data.post.image_header}`} alt={`${data.post.title}`}  priority={true} />
                        <p className={'text-light break-all'}>{data.post.description}</p>
                    </div>
                    <article className={'prose prose-sm lg:prose-lg break-words text-white my-4'}>
                        <MDXRemote source={data.post.content} />
                    </article>
                    <div className={'flex space-x-2'}>

                        {
                            data.post.tag.map((tags: string) => {
                                return (
                                    <p className={'hover:-translate-y-2 transition duration-300 ease-in-out bg-pink-500 rounded-md p-2 '} key={tags}>{tags}</p>
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
        </>
    )
}

