import {NextResponse} from "next/server";
import {prisma} from "../../../../../db/prisma";

export async function GET(request: Request,{ params }: { params: { title: string }}) {
    const title = params.title;
    console.log(title)
    try {
        const post = await prisma.post.findUnique({
            where: {
                title
            }
        })
        return NextResponse.json({ post })
    }
    catch (e) {
        return NextResponse.json({ e })
    }

}