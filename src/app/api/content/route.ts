import {NextResponse} from "next/server";
import {Post} from "@/type/dto";
import {prisma} from "../../../../db/prisma";

export async function GET(request: Request){
    let data = 'dlkfdkl'

    return NextResponse.json({ data })
}
export async function POST(request: Request) {
    const json: Post = await request.json()
    try {
        const post = await prisma.post.create({
            data: {
                title: json.title,
                content: json.content,
                tag: json.tag,
                image_header: json.image_header,
                image_content: json.image_content,
                published: json.published,
                author: {
                    connect: {email: json.author}
                }

            }
        })

        return NextResponse.json({ post })

    } catch (e) {
        console.log(e)
        return NextResponse.json({e})
    }
}