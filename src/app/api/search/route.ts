import {NextResponse} from "next/server";
import {Post} from "@/type/dto";
import {prisma} from "../../../../db/prisma";

// export async function GET(request: Request){
//     const { searchParams } = new URL(request.url)
//     const title = searchParams.get('title')
//     try {
//         const post =  await prisma.post.findUnique({
//             where: {
//                 title: title as string,
//             }
//         })
//         return NextResponse.json({ post })
//     }
//     catch (e) {
//         return NextResponse.json({ e })
//     }
//
//
// }

export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    return NextResponse.json(search)

}