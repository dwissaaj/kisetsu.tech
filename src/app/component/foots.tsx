import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Foots() {
  return (
          <div className={'static bottom-0 left-0 right-0 p-2 mt-16 w-full bg-neutral-800 shadow-lg shadow-neutral-900 flex justify-center border-t border-neutral-900 text-center'}>
              <div className={'flex flex-col mt-3'}>
                  <div className={'flex gap-1 md:gap-4 lg:gap-8 '}>
                      <Link className={'p-2 shrink  rounded bg-gradient-to-tr from-pink-500 to-white brightness-75 hover:brightness-125'}  href={'https://www.instagram.com/dwisaji/'}>Instagram</Link>
                      <Link className={'p-2 shrink  rounded bg-gradient-to-br from-blue-800 to-cyan-300 brightness-75 hover:brightness-125'} href={'https://www.linkedin.com/in/dwi-setyo-aji/'}>Linkedin</Link>
                      <Link className={'p-2 shrink  rounded bg-gradient-to-tr from-emerald-700 to-yellow-300 brightness-75 hover:brightness-125'} href={'https://wa.me/6285251743273?text=Hi%20Aji%20can%20we%20talk?%'}>Whatsapp</Link>
                      <Link className={'p-2 shrink  rounded bg-gradient-to-bl from-neutral-400 to-neutral-900 brightness-75 hover:brightness-125'} href={'https://github.com/dwissaaj'}>Github</Link>
                  </div>
                  <div className={'flex justify-center'}>
                      <p className={'text-white text-sm my-2'}>KISETSU TECH 2023</p>
                  </div>
              </div>
          </div>


  )
}
