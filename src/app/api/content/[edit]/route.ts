import {NextResponse} from "next/server";
import {prisma} from "../../../../../db/prisma";

export async function GET(request: Request,params: string ) {
    const json = 'cllbusge00001us8k4hs04bh3'
    try {
        const post = await prisma.post.findUnique({
               where: {
                    id: json
                }
        })

        return NextResponse.json({ post })
    }
    catch (e) {
        return NextResponse.json({ e })
    }

}