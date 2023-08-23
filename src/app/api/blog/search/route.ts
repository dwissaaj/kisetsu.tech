import {NextResponse} from "next/server";
import {prisma} from "../../../../../db/prisma";

export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('searching')
    try {
        const post =  await prisma.post.findMany({
            where: {
                title: {
                    contains: search as string
                }
            }
        })

        return NextResponse.json({post})
    }
    catch (err) {
        return NextResponse.json({ err})
    }
}