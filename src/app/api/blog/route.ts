import {NextResponse} from "next/server";

export async function GET(request: Request){
    let data = 'dlkfdkl'

    return NextResponse.json({ data })
}