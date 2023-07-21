import Image from "next/image";
import {useCallback, useRef} from "react";
import {useInView} from "react-intersection-observer";
import {Space_Mono, VT323} from "next/font/google";
const spaceMono = Space_Mono({weight:'400', subsets: ['latin']})
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default function Development() {
    const ref = useRef();
    const [inViewRef, inView] = useInView({threshold: 0.9, delay:100})
    const [inViewRef2, inView2] = useInView({threshold: 0.9, delay:100})
    const [inViewRef3, inView3] = useInView({threshold: 0.9, delay:100})
    const [inViewRef4, inView4] = useInView({threshold: 0.9, delay:100})
    const [inViewRef5, inView5] = useInView({threshold: 0.9, delay:100})
    useCallback(
        (node: any) => {
            // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
            inViewRef(node)
            inViewRef2(node)
            inViewRef3(node)
            inViewRef4(node)
            inViewRef5(node)
        },
        [inViewRef, inViewRef2,inViewRef3,inViewRef4,inViewRef5],
    );
    return (
        <div className={'container mx-auto'}>
            <h1 className={`my-4 text-center text-2xl md:text-4xl lg:text-6xl ${vt323.className}`}>Software  <span className={'text-pink-500'}>Development</span></h1>
            <div className={'bg-neutral-800 h-full m-4 p-4 border-y-8 border-[#FFE1E1] rounded-md   '}>

                <div  className={spaceMono.className}>
                    <div  className={'snap-y snap-mandatory snap-my-2 snap-p-2 w-full h-96 overflow-auto overflow-x-hidden no-scrollbar'}>
                        <div className={'rounded-lg p-4 snap-start w-full h-full '}>
                            <div ref={inViewRef} className={`transition-opacity ease-in-out delay-300 duration-500 ${inView ? 'opacity-100' : 'opacity-0'} `} >
                                <div  className={'flex flex-col items-center justify-center text-center'}>
                                    <Image className={'rounded-md'} src={'/image/home/dev/figma.jpg'}
                                           alt={'figma'}
                                           width={500}
                                           height={500}/>

                                    <p className={'text-code'}>I have little experience in <span className={'text-code text-red-500 border-b border-red-500'}>design</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={'rounded-lg p-4 snap-start w-full h-full flex flex-col items-center justify-center text-center'}>
                            <div ref={inViewRef2} className={`transition-opacity ease-in-out delay-300 duration-500 ${inView2 ? 'opacity-100' : 'opacity-0'} `} >
                                <div className={'flex flex-col items-center justify-center text-center'}>
                                    <Image className={'rounded-md'} src={'/image/home/dev/next.jpg'}
                                           alt={'next js'}
                                           width={500}
                                           height={500}/>
                                    <p className={'text-code'}>As you can see here I used  <span className={'text-code text-teal-500 border-b border-teal-500'}>this framework</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={'rounded-lg p-4 snap-start w-full h-full flex flex-col items-center justify-center text-center'}>
                            <div ref={inViewRef3} className={`transition-opacity ease-in-out delay-300 duration-500 ${inView3 ?  'opacity-100' : 'opacity-0'} `} >
                                <div className={'flex flex-col items-center justify-center text-center'}>
                                    <Image className={'rounded-md'} src={'/image/home/dev/hg.jpg'}
                                           alt={'hugginface'}
                                           width={500}
                                           height={500}/>
                                    <p className={'text-code'}>Analysis textual dataset with <span className={'text-code text-amber-500 border-b border-amber-500'}>NLP model</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={'rounded-lg p-4 snap-start w-full h-full flex flex-col items-center justify-center text-center'}>
                            <div ref={inViewRef4} className={`transition-opacity ease-in-out delay-300 duration-500 ${inView4 ?  'opacity-100' : 'opacity-0'} `} >
                                <div className={'flex flex-col items-center justify-center text-center'}>
                                    <Image className={'rounded-md'} src={'/image/home/dev/nuxt.jpg'}
                                           alt={'nuxt js'}
                                           width={500}
                                           height={500}/>
                                    <p className={'text-code'}>For my  <span className={'text-code text-emerald-500 border-b border-emerald-500'}>personal project</span></p>
                                </div>
                            </div>

                        </div>
                        <div className={'rounded-lg p-4 snap-start w-full h-full flex flex-col items-center justify-center text-center'}>
                            <div ref={inViewRef5} className={`transition-opacity ease-in-out delay-300 duration-500 ${inView5 ?  'opacity-100' : 'opacity-0'} `} >
                                <div className={'flex flex-col items-center justify-center text-center'}>
                                    <Image className={'rounded-md'} src={'/image/home/dev/strapi.jpg'}
                                           alt={'strapi'}
                                           width={500}
                                           height={500}/>
                                    <p className={'text-code'}>Fast back end  <span className={'text-code text-blue-500 border-b border-blue-500'}>API development</span></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>




            </div>
        </div>

    )
}