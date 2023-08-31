import {NextResponse} from "next/server";
import {prisma} from "../../../../../db/prisma";
import {Post} from "@/type/dto";
import {redirect} from "next/navigation";

export async function GET(request: Request, {params} : {params: {id: string}} ) {
    const id = params.id
    const post = await prisma.post.findUnique({
        where: {
            id: id
        }
    })
    return NextResponse.json(post);
}
export async function PATCH(request: Request, {params} : {params: {id: string}} ) {
    const id = params.id
    const json: Post = await request.json()
    try {
        const updatePost = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                title: json.title as string,
                content: json.content as string,
                tag: json.tag as string[],
                image_header: json.image_header as string,
                writer: json.writer as string,
                published: json.published as boolean,
                description: json.description as string,
                author: {
                    connect: {email: json.author as string}
                }

            }
        })
        return NextResponse.json({ message: "Success" , status:200})

    } catch (e) {
        return NextResponse.json({e})
    }
}

export async function DELETE(request: Request, {params} : {params: {id: string}} ) {
    const id = params.id

    try {
        const deletePost = await prisma.post.delete({
            where: {
                id: id
            },
        })
        return NextResponse.json({message: 'delete', status: 200})
    }
    catch (e) {
        return NextResponse.json({e})
    }
}