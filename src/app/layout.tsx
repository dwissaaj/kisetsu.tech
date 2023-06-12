import './globals.css'
import { Inter } from 'next/font/google'
import Navi from "@/app/component/navi";
import Foots from "@/app/component/foots";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kisetsu Tech',
  description: 'Personal Website for Dwi Setyo Aji',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navi />
      {children}

      </body>
    </html>
  )
}
