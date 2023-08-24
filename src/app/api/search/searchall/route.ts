import {NextResponse} from "next/server";
import {Post} from "@/type/dto";
import {prisma} from "../../../../../db/prisma";


export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('query')
    try {
        const post = await prisma.post.findMany({
            where: {
                title: {
                    contains : search as string
                }
            }
        })
        const check = post.length
        if (check == 0) {
            return NextResponse.json({status: 204, message:'Request Accepted but no post were found'})
        }
        if (check > 1) {
            return NextResponse.json({post})
        }

    }
    catch (err) {
        return NextResponse.json({err})
    }

}