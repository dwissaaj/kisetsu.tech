import {NextRequest} from "next/server";
import {nanoid} from "nanoid";
import {redis} from "@/lib/redis";

export const Post = async (req: NextRequest)=> {
    try {
        const body = await req.json()
        const {text, tags} = body

        const commentid = nanoid()

        await redis.rpush('comment', commentid)
        return new Response('OK')

    }
    catch (e) {
        console.log(e)
    }
}