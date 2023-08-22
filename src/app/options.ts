import {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from '../../db/prisma'
import {cookies} from "next/headers";
// use `prisma` in your application to read and write data in your DB
export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

    ],
    adapter: PrismaAdapter(prisma),


};