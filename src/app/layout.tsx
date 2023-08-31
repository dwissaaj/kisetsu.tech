import './globals.css'
import { Roboto } from 'next/font/google'
import Navi from "@/app/component/navi";
import Foots from "@/app/component/foots";
import {Suspense} from "react";
import {NextAuthProvider} from "@/app/provider/NextAuthProvider";
import Loading from "@/app/loading";
const roboto = Roboto({ subsets: ['latin'], weight: ['300','500','700'] })

export const metadata = {
  title: 'Kisetsu Tech',
  description: 'Personal Website for Dwi Setyo Aji',
    keywords: 'Personal Website, Data Analyst, Front End Developer',
    authors: [{name: `Dwi Setyo Aji`}, {name: 'Dwi Aji', url:'https://kisetsu.tech/'}],
    creator: `Dwi Setyo Aji`,
    publisher: 'Kisetsu Tech'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Suspense fallback={<Loading />}>
          <NextAuthProvider>
              <Navi />


              {children}


              <Foots />
          </NextAuthProvider>
      </Suspense>
      </body>
    </html>
  )
}
