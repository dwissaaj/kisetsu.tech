import {prisma} from "../../../../db/prisma";
import {NextResponse} from "next/server";

export async function GET(request: Request){
    try {
        const post = await prisma.post.findMany({
            where: {
              tag: {
                  has: 'Coding'
              }
            },
            select: {
                title: true
            },
            take: 10
        })
        return NextResponse.json({ post })
    }
    catch (e) {
        return NextResponse.json({ e })
    }


}