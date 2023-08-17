import {NextResponse} from "next/server";
import {Post} from "@/type/dto";
import {prisma} from "../../../../db/prisma";

export async function GET(request: Request){
    try {
        const post = await prisma.post.findMany()
        return NextResponse.json({ post })
    }
    catch (e) {
        return NextResponse.json({ e })
    }


}

export async function POST(request: Request) {
    const json: Post = await request.json()
    try {
        const post = await prisma.post.create({
            data: {
                title: json.title as string,
                content: json.content as string,
                tag: json.tag as string[],
                image_header: json.image_header as string,
                writer: json.writer as string,
                image_content: json.image_content as string,
                published: json.published as boolean,
                author: {
                    connect: {email: json.author as string}
                }

            }
        })

        return NextResponse.json({ post })

    } catch (e) {
        console.log(e)
        return NextResponse.json({e})
    }
}