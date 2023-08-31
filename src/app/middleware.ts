import {NextRequest, NextResponse} from "next/server";

export { default } from "next-auth/middleware"

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/blog')) {
        console.log(request.nextUrl.pathname)
        return NextResponse.rewrite(new URL('/blogs', request.url))

    }


}
export const runtime = { matcher: ["/dashboard/:path*", "/content/",'/blog/'],
    pages : {
        signIn:  '/login'
    }}
