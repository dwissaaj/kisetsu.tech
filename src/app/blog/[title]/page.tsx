import {MDXRemote} from "next-mdx-remote/rsc";

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
            <div className={'container mx-auto'}>
                <article className={'prose break-all  text-white'}>
                    <MDXRemote source={data.post.content} />
                </article>
            </div>
        </>
    )
}

