export { default } from "next-auth/middleware"

export const runtime = { matcher: ["/dashboard/:path*", "/content/"],
    pages : {
       signIn:  '/login'
    }}