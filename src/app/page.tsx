'use client'
import Image from 'next/image'

import "./swipercustom.css"
import {Merriweather, Poppins, VT323} from "next/font/google";
import Social from "@/app/component/home/Social";

import DataAnalyst from "@/app/component/home/DataAnalyst";
import Development from "@/app/component/home/Development";
import {Autoplay, EffectCards, FreeMode, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";

const merriweather = Merriweather({weight: '300', subsets: ['latin']})
const poppins = Poppins({weight: "300", subsets: ['latin']})
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function Home() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className={`container mx-auto ${poppins.className}`}>
                <div className={' flex flex-col w-full justify-center '}>
                    <Social/>
                    <DataAnalyst/>
                    <Development />
                    <div className={'container mx-auto'}>
                        <div className={'bg-neutral-800 h-full m-4 p-4 border-y-8 border-rose-700 rounded-md'}>
                            <h1 className={`my-4 text-center text-2xl md:text-4xl lg:text-6xl ${vt323.className}`}>Creative <span className={'text-fuchsia-500'}>Industry</span></h1>
                            <div className={'grid grid-cols-1 content-center justify-items-center gap-4'}>
                                <div className={'w-full'}>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}

                                        effect={'cards'}
                                        grabCursor={true}
                                        modules={[EffectCards,Autoplay]}
                                        className=" "
                                    >
                                        <SwiperSlide>
                                            <Image className={'rounded-md mx-auto'} src={'/image/home/photo/p1.png'}
                                                   alt={'figma'}
                                                   width={500}
                                                   height={500}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image className={'rounded-md mx-auto'} src={'/image/home/photo/p2.png'}
                                                   alt={'figma'}
                                                   width={500}
                                                   height={500}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image className={'rounded-md mx-auto'} src={'/image/home/photo/p3.png'}
                                                   alt={'figma'}
                                                   width={500}
                                                   height={500}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image className={'rounded-md mx-auto'} src={'/image/home/photo/p4.png'}
                                                   alt={'figma'}
                                                   width={500}
                                                   height={500}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image className={'rounded-md mx-auto'} src={'/image/home/photo/p5.png'}
                                                   alt={'figma'}
                                                   width={500}
                                                   height={500}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image className={'rounded-md mx-auto'} src={'/image/home/photo/p6.png'}
                                                   alt={'figma'}
                                                   width={500}
                                                   height={500}/>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className={`${merriweather.className} text-center`}>
                                    <p className={'text-md md:text-lg lg:text-2xl'}>I have experience as photography and video editor, check my drive for project example</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
