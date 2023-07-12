import './globals.css'
import { Roboto } from 'next/font/google'
import Navi from "@/app/component/navi";
import Foots from "@/app/component/foots";
const roboto = Roboto({ subsets: ['latin'], weight: ['300','500','700'] })

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
      <body className={roboto.className}>
      <Navi />
      {children}
      <Foots />
      </body>
    </html>
  )
}
