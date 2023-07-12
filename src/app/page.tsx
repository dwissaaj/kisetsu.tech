'use client'
import Image from 'next/image'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.css";
import {Poppins, Space_Mono} from "next/font/google";
import { EffectCoverflow, Pagination} from 'swiper'
import Social from "@/app/component/home/Social";
import { useInView} from "react-intersection-observer";
const poppins = Poppins({weight: "300", subsets: ['latin']})
const spaceMono = Space_Mono({weight:'400', subsets: ['latin']})
export default function Home() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (
        <>
            <div className={`container mx-auto ${poppins.className}`}>
                <div className={' flex flex-col w-full justify-center '}>
                    <Social />
                    <div className={'bg-neutral-800 m-4  p-4 border-y-8 border-[#90A17D] rounded-md grid grid-cols-1 md:grid-cols-2 gap-2'}>
                        <div className={'snap-y snap-mandatory h-full cursor-help overflow-y-scroll scrollbar-2  space-y-4'}>
                            <div ref={ref} className={`snap-children relative h-full w-full  ${spaceMono.className}`}>
                                <h1 className={'absolute inset-0 z-10 mt-6'}>MICROSOFT <span className={'snap-children text-emerald-500'}>EXCEL</span></h1>
                                <div className={'animate-loopLtr w-24 h-24 absolute inset-y-0 left-14 mix-blend-color-dodge blur-md opacity-80 top-2 bg-emerald-700 rounded-full '}>
                                </div>
                                <div className={'animate-loopRtl w-24 h-24 absolute inset-y-0 right-14 top-2 blur-md opacity-80 bg-pink-700 rounded-full'}>
                                </div>

                            </div>
                            <div className={`snap-children ${spaceMono.className}`}>
                                <h1>POWER BI</h1>
                            </div>
                            <div className={`snap-children ${spaceMono.className}`}>
                                <h1>TABLEAU</h1>
                            </div>
                            <div className={`snap-children ${spaceMono.className}`}>
                                <h1>PYTHON</h1>
                            </div>
                        </div>
                        <div className={'swiper-custom'}>
                            <Swiper effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 500,
                                        modifier: 2,
                                        slideShadows: true,
                                    }}

                                    pagination={true}
                                    modules={[EffectCoverflow,Pagination]}
                                    className="mySwiper" >
                                <SwiperSlide>
                                    <Image className={'rounded-md'} src={'/image/home/da/t1.jpg'} alt={'tableau chart'} width={500}
                                           height={500}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className={'rounded-md'} src={'/image/home/da/t2.jpg'} alt={'ner'} width={500}
                                           height={500}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className={'rounded-md'} src={'/image/home/da/t3.jpg'} alt={'power bi chart'} width={500}
                                           height={500}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className={'rounded-md'} src={'/image/home/da/t4.jpg'} alt={'python'} width={500} height={500}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className={'rounded-md'} src={'/image/home/da/t5.jpg'} alt={'tableau map'} width={500} height={500}/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
//
//
// <div ref={ref} className={'grid grid-cols-2'}>
//     <div className={'relative'}>
//         <h1 className={(inView ? 'absolute inset-0 z-0 text-red-500 opacity-50 animate-opacity text-xl md:text-2xl lg:text-5xl uppercase font-bold drop-shadow-2xl' : '')}>
//             Microsoft</h1>
//         <h1 className={(inView ? 'absolute inset-y-1  -z-1 animate-opacity text-xl md:text-2xl lg:text-5xl uppercase font-bold drop-shadow-2xl' : '')}>
//             Microsoft</h1>
//
//     </div>
//     <div>
//         <h1>Excel</h1>
//     </div>
// </div>