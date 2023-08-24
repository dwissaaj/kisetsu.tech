import {NextResponse} from "next/server";
import {Post} from "@/type/dto";
import {prisma} from "../../../../../db/prisma";


export async function GET(request: Request,response: Response){
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('filter')
    try {
        const post = await prisma.post.findMany({
            where: {
                title: {
                    contains : search as string
                }
            }
        })
        if(post.length == 0) {
            return NextResponse.json({status: 204, message:'No Data Found'})
        }
        return NextResponse.json({post})


    }
    catch (err) {
        return NextResponse.json({err})
    }

}