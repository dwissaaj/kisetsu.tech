import {NextResponse} from "next/server";
type Post = {
    title    : String
    content   :String
    tag       :String[]
}
export async function GET(request: Request){
    let data = 'dlkfdkl'

    return NextResponse.json({ data })
}
export async function POST(request: Request) {
    const data: Post = await  request.json()
    const { title, content, tag} = data
    console.log(data)
    return NextResponse.json({ title,content,tag })
}