import {NextResponse} from "next/server";
import {prisma} from "../../../../../db/prisma";

export async function GET(request: Request,params: string ) {
    const json = 'kaki photobook'
    try {
        const post = await prisma.post.findUnique({
            where: {
                title: json
            }
        })

        return NextResponse.json({ post })
    }
    catch (e) {
        return NextResponse.json({ e })
    }

}