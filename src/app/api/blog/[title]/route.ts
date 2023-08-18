import {prisma} from "../../../../../db/prisma";
import {NextResponse} from "next/server";
import slugify from "slugify";

export async function GET(request: Request, {params} : {params: {title: string}}): Promise<Response> {
    const title = params.title
    try {
        const post =  await prisma.post.findUnique({
            where: {
                title: title,
            }
        })

        return NextResponse.json({post})
    }
    catch (err) {
        return NextResponse.json({ err})
    }
}