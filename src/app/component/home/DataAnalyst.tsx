'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination} from "swiper";
import Image from "next/image";
import {Space_Mono, VT323} from "next/font/google";
const spaceMono = Space_Mono({weight:'400', subsets: ['latin']})
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function DataAnalyst() {
    return (
        <div className={'container mx-auto'}>
            <div className={'bg-neutral-800 m-4  p-4 border-y-8 border-[#90A17D] rounded-md grid grid-cols-1 md:grid-cols-2 gap-2'}>
                <h1 className={`my-4 text-center text-2xl md:text-4xl lg:text-6xl ${vt323.className}`}>Data  <span className={'text-teal-500'}>Industry</span></h1>
                <div className={'snap-y snap-mandatory h-full cursor-help overflow-y-scroll scrollbar-2  space-y-16 py-6'}>
                    <div className={`snap-children relative flex justify-center h-full w-full py-4 ${spaceMono.className}`}>
                        <h1 className={'absolute inset-0 z-10 mt-6'}>MICROSOFT <span className={'snap-children text-emerald-500'}>EXCEL</span></h1>
                        <div className={'animate-loopLtr w-24 h-24 absolute inset-y-0 left-14 mix-blend-color-dodge blur-md opacity-80 top-2 bg-emerald-700 rounded-full '}>
                        </div>
                        <div className={'animate-loopRtl w-24 h-24 absolute inset-y-0 right-14 top-2 blur-md opacity-80 bg-pink-700 rounded-full'}>
                        </div>

                    </div>
                    <div className={`snap-children relative h-full w-full  ${spaceMono.className}`}>
                        <h1 className={'absolute inset-0 z-10 mt-6'}>TABLEAU <span className={'snap-children text-pink-500'}>DESKTOP</span></h1>
                        <div className={'animate-loopLtr w-24 h-24 absolute inset-y-0 left-14 mix-blend-color-dodge blur-md opacity-80 top-2 bg-orange-700 rounded-full '}>
                        </div>
                        <div className={'animate-loopRtl w-24 h-24 absolute inset-y-0 right-14 top-2 blur-md opacity-80 bg-blue-700 rounded-full'}>
                        </div>
                    </div>
                    <div className={`snap-children relative h-full w-full  ${spaceMono.className}`}>
                        <h1 className={'absolute inset-0 z-10 mt-6'}>MICROSOFT <span className={'snap-children text-amber-500'}>POWER BI</span></h1>
                        <div className={'animate-loopLtr w-24 h-24 absolute inset-y-0 left-14 mix-blend-color-dodge blur-md opacity-80 top-2 bg-red-700 rounded-full '}>
                        </div>
                        <div className={'animate-loopRtl w-24 h-24 absolute inset-y-0 right-14 top-2 blur-md opacity-80 bg-green-700 rounded-full'}>
                        </div>
                    </div>
                    <div className={`snap-children relative h-full w-full  ${spaceMono.className}`}>
                        <h1 className={'absolute inset-0 z-10 mt-6'}><span className={'snap-children'}>PYTHON</span></h1>
                        <div className={'animate-loopLtr w-24 h-24 absolute inset-y-0 left-14 mix-blend-color-dodge blur-md opacity-80 top-2 bg-blue-500 rounded-full '}>
                        </div>
                        <div className={'animate-loopRtl w-24 h-24 absolute inset-y-0 right-14 top-2 blur-md opacity-80 bg-yellow-500 rounded-full'}>
                        </div>
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
    )
}