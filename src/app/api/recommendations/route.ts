import {prisma} from "../../../../db/prisma";
import {NextResponse} from "next/server";

export async function GET(request: Request, {params} : {params: {tag: string[]}}){
    try {
        const post = await prisma.post.findMany({
            select: {
                title: true
            },
            take: 10,
            orderBy:{
                createdAt: 'desc'
            }
        })
        return NextResponse.json({ post })
    }
    catch (e) {
        return NextResponse.json({ e })
    }


}