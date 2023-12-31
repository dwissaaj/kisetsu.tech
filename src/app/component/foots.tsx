import Link from "next/link";
import React from "react";
import {Monofett, Share_Tech_Mono, VT323} from "next/font/google";

const monofet = Monofett({weight: ['400'], style: ['normal'], subsets: ['latin']})
const shareTech = Share_Tech_Mono({weight: ['400'], style: ['normal'], subsets: ['latin']})
const vt323 = VT323({weight: ['400'], subsets: ['latin']});
export default function Foots() {
    return (
        <footer
            className={'static h-full w-full bottom-0 top-0 left-0 right-0 p-2  bg-neutral-800 shadow-lg shadow-neutral-900 flex justify-center border-t border-neutral-900 text-center'}>
            <div className={'mx-auto container flex flex-col'} >

                <div className={'grid grid-cols-1 md:grid-cols-3 md:justify-items-center '}>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'text-lg md:text-2xl lg:text-4xl text-start '}>
                            <p className={`${vt323.className}`}>Explore</p>
                        </div>
                        <div className={`${shareTech.className} w-full flex flex-col space-y-4 justify-start text-start`}>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://www.notion.so/Design-Portfolio-e3d8261434b2445788742e997a8e0783?pvs=4'}>Notion</Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://drive.google.com/drive/folders/13jNXBZnhBEzsT4ZqBIwTbOj_z3TohPuy?usp=drive_link'}>Cloud </Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://journal.moestopo.ac.id/index.php/pustakom/article/view/2438/1221'}>Paper </Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://sakamichi.online/members'}>Sakamichi (Offline)</Link>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'text-lg md:text-2xl lg:text-4xl text-start '}>
                            <p className={`${vt323.className}`}>Connect</p>
                        </div>
                        <div className={`${shareTech.className} w-full flex flex-col space-y-4 justify-start text-start`}>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://www.instagram.com/dwisaji/'}>Instagram</Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://www.linkedin.com/in/dwi-setyo-aji/'}>Linkedin</Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://wa.me/6285251743273?text=Hi%20Aji%20can%20we%20talk?%'}>Whatsapp</Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://github.com/dwissaaj'}>Github</Link>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'text-lg md:text-2xl lg:text-4xl text-start '}>
                            <p className={`${vt323.className}`}>Support by</p>
                        </div>
                        <div className={`${shareTech.className} w-full flex flex-col space-y-4 justify-start text-start`}>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://vercel.com/'}>Vercel</Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://supabase.com/pricing'}>Supabase</Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://huggingface.co/'}>Huggingface</Link>
                            <Link
                                className={'text-sm md:text-md text-neutral-600 hover:text-neutral-200 transition duration-300 ease-in-out'}
                                href={'https://lightsail.aws.amazon.com/'}>AWS Lightsail</Link>
                        </div>
                    </div>
                </div>
                <div className={'mt-4 p-2'}>
                    <p className={`${vt323.className} text-lg`}>Kisetsu tech 2023</p>
                </div>
            </div>

        </footer>


    )
}
