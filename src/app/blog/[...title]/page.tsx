import {Post} from "@/type/dto";
import CardBlog from "@/app/blog/card";

export async function getData(title: string) {
    const res = await fetch(`http://localhost:3000/api/blog/${title}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page({ params: { title } }: {params: { title: string}}) {
    decodeURIComponent(title);
    const data = await getData(title)
    console.log(data)
    return (
        <>
            <div className={'container mx-auto'}>
                page blog
            </div>
        </>
    )
}

