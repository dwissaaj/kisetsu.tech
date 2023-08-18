import {NextRequest, NextResponse} from "next/server";

export { default } from "next-auth/middleware"


export const runtime = { matcher: ["/dashboard/:path*", "/content/",'/blog/'],
    pages : {
        signIn:  '/login'
    }}
