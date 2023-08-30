
import {useRef, useState} from 'react'
import { useHover } from 'usehooks-ts'

export default async function HomePage() {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    return (
        <>
            <div className={'mx-auto container '}>
                <div className={'w-full justify-center items-center flex text-center my-16 '}>
                    <div className={'relative z-10 p-2 m-2'}>
                        <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 -z-10  w-[800px] h-[300px] blur-[110px] bg-teal-900 ' +
                            'group-hover/first '}></div>
                        <div>
                            <h1 className={'font-bold z-10 brightness-125 inline-flex flex-col text-xl md:text-4xl lg:text-7xl xl:text-9xl text-opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-red-600' +
                                ' '}>
                                <span>DWI</span>
                                <span>SETYO AJI</span>
                            </h1>
                        </div>
                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                            <div ref={hoverRef} className={'bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur  p-2 rounded-xl first:rounded-t-2xl last:rounded-b-2xl ' +
                                'md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-3xl md:last:!rounded-r-3xl ' +
                                'transition duration-300 ease-in-out hover:scale-110 ' +
                                ''}>
                                <h2 className={''}>Data Analyst</h2>
                                <p>Social Media Processing</p>
                               <p> {`The current div is ${isHover ? `hovered` : `unhovered`}`}</p>
                            </div>
                            <div className={'bg-white/5 p-2 rounded-lg  '}>
                                <h2>Data Analyst</h2>
                                <p>Processing text data social media using coding</p>
                            </div>
                            <div className={'bg-white/5 p-2 rounded-xl first:rounded-t-2xl last:rounded-b-2xl ' +
                                'md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-3xl  md:last:!rounded-r-3xl'}>
                                <h2>Data Analyst</h2>
                                <p>Social Media Processing</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}