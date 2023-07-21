import Link from "next/link";
import Image from "next/image";
import React from "react";
import {Monofett, VT323} from "next/font/google";
const monofet = Monofett({weight:['400'], style:['normal'], subsets:['latin']})
const vt323 = VT323({weight: ['400'], subsets: ['latin']});
export default function Foots() {
  return (
          <div className={'static h-full w-full  bottom-0 top-0 left-0 right-0 p-2 mt-16  bg-neutral-800 shadow-lg shadow-neutral-900 flex justify-center border-t border-neutral-900 text-center'}>
              <div className={'flex flex-col mt-3'}>
                  <div className={`flex gap-1 md:gap-4 lg:gap-8 ${monofet.className}`}>
                      <Link className={'shrink-0 text-xl md:text-2xl lg:text-4xl hover:text-pink-500 hover:translate-y-1 transition duration-300 ease-in-out'}  href={'https://www.instagram.com/dwisaji/'}>Instagram</Link>
                      <Link className={'shrink-0 text-xl md:text-2xl lg:text-4xl hover:text-sky-500 hover:translate-y-1 transition duration-300 ease-in-out'} href={'https://www.linkedin.com/in/dwi-setyo-aji/'}>Linkedin</Link>
                      <Link className={'shrink-0 text-xl md:text-2xl lg:text-4xl hover:text-emerald-500 hover:translate-y-1 transition duration-300 ease-in-out'} href={'https://wa.me/6285251743273?text=Hi%20Aji%20can%20we%20talk?%'}>Whatsapp</Link>
                      <Link className={'shrink-0 text-xl md:text-2xl lg:text-4xl hover:text-amber-500 hover:translate-y-1 transition duration-300 ease-in-out'} href={'https://github.com/dwissaaj'}>Github</Link>
                  </div>
                  <div className={`flex justify-center ${vt323.className} `}>
                      <p className={'text-white text-xl md:text-2xl  lg:text-4xl my-2'}>KISETSU TECH 2023</p>
                  </div>
              </div>
          </div>


  )
}
