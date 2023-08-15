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