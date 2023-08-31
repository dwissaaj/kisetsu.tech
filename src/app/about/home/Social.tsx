'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import Image from "next/image";
import {VT323} from "next/font/google";
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function Social() {
    return (
        <div className={'container mx-auto'}>
            <h1 className={`my-4 text-center text-2xl md:text-4xl lg:text-6xl ${vt323.className}`}>Communication  <span className={'text-sky-500'}>Science</span></h1>
            <div className={'bg-neutral-800 m-4  p-4 border-y-8 border-[#FFE1E1] rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'}>

                <div>
                    <Swiper className={'swiper-custom'} spaceBetween={10} slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay,]}>
                        <SwiperSlide>
                            <Image className={'rounded-md'} src={'/image/home/sosmed/sosmed-1.png'} alt={'topic modelling'} width={500}
                                   height={500}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className={'rounded-md'} src={'/image/home/sosmed/sosmed-2.png'} alt={'topic modelling'} width={500}
                                   height={500}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className={'rounded-md'} src={'/image/home/sosmed/sosmed-3.png'} alt={'topic modelling'} width={500}
                                   height={500}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className={'rounded-md'} src={'/image/home/sosmed/sosmed-4.png'} alt={'sna'} width={500} height={500}/>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div>
                    <div
                        className={' snap-y snap-mandatory h-full cursor-help overflow-y-scroll scrollbar  text-left'}>
                        <div className={'snap-start h-full'}>
                                    <span className={'text-home'}> Social  <span
                                        className={'text-pink-500'}>Network Analysis.</span></span>
                            <p className={'text-sm lg:text-2xl'}>Used to process large amount of social
                                structures in big data communication using graph and network theory.
                            </p>
                        </div>
                        <div className={'snap-start h-full'}>
                                    <span className={'text-home'}> What is   <span
                                        className={'text-violet-500'}>used for?</span></span>
                            <p className={'text-sm lg:text-2xl'}>From market research,Customer Relationship
                                Management , consumer behaviour to handle crisis public relations.
                            </p>
                        </div>
                        <div className={'snap-start h-full'}>
                                    <span className={'text-home'}> Do you use<span
                                        className={'text-cyan-500'}>  machine learning?</span></span>
                            <p className={'text-sm lg:text-2xl'}>Yes I do, in fact social media have a lot of
                                data text like comments, we need specific tools to gain insights. I use HuggingFace as open
                                source model.
                            </p>
                        </div>
                        <div className={'snap-start h-full'}>
                                    <span className={'text-home'}> What model  <span
                                        className={'text-yellow-500'}> do you use?</span></span>
                            <p className={'text-sm lg:text-2xl'}>Topic modelling for topic extraction, Named
                                Entity Recognition for finding entities, and Sentiment Analysis for extracting
                                tone in information
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}