import Link from "next/link";

export default function Foots() {
  return (
          <div className={'absolute bottom-0 bg-neutral-800 shadow-lg shadow-neutral-900 flex w-screen justify-center border-t border-neutral-900'}>
              <div className={'flex flex-col'}>
                  <div className={'flex gap-6 mt-3'}>
                      <Link className={'p-2 rounded bg-gradient-to-tr from-pink-500 to-teal-700 brightness-75 hover:brightness-125'}  href={'https://www.instagram.com/dwisaji/'}>Instagram</Link>
                      <Link className={'p-2 rounded bg-gradient-to-br from-blue-500 to-teal-700 brightness-75 hover:brightness-125'} href={'https://www.linkedin.com/in/dwi-setyo-aji/'}>Linkedin</Link>
                      <Link className={'p-2 rounded bg-gradient-to-bl from-emerald-500 to-teal-700 brightness-75 hover:brightness-125'} href={'https://wa.me/6285251743273?text=Hi%20Aji%20can%20we%20talk?%'}>Whatsapp</Link>
                  </div>
                  <div className={'flex justify-center'}>
                      <p className={'text-white text-sm my-2'}>KISETSU TECH 2023</p>
                  </div>
              </div>
          </div>


  )
}
