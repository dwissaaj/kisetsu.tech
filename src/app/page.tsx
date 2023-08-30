'use client'
import "./about/swipercustom.css"
import { Poppins, } from "next/font/google";
import Social from "@/app/about/home/Social";
import DataAnalyst from "@/app/about/home/DataAnalyst";
import Development from "@/app/about/home/Development";
import {GoogleAnalytics} from "nextjs-google-analytics";
import Creative from "@/app/about/home/Creative";
import HomePage from "@/app/component/homepage";
import {useRef, useState} from "react";
import { useHover } from 'usehooks-ts'



export default function Home() {
    const hoverRef = useRef(null)
    const hoverRef2 = useRef(null)
    const hoverRef3 = useRef(null)
    const isHover = useHover(hoverRef)
    const isHover2 = useHover(hoverRef2)
    const isHover3 = useHover(hoverRef3)
    let cyanBtn = {
        text: 'bg-gradient-to-r from-blue-700 to-blue-200 ',
        backs: 'bg-blue-500'
    }
    let purpleBtn = {
        text: 'bg-gradient-to-r from-purple-700 to-purple-300 ',
        backs: 'bg-purple-500'
    }
    let redBtn = {
        text: 'bg-gradient-to-r from-rose-800 to-rose-300 ',
        backs: 'bg-rose-500'
    }
    let defaultBtn = {
        text: ' bg-gradient-to-r from-teal-500 to-pink-500',
        backs: ' bg-teal-500'
    }
    return (
        <>
            <GoogleAnalytics trackPageViews  />

            <div className={'mx-auto container '}>
                <div className={'w-full justify-center items-center flex text-center my-16 '}>
                    <div className={'relative z-10 p-2 m-2'}>
                        <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 -z-10  w-[800px] h-[300px] blur-[130px]  ' +
                            ` ${isHover ? cyanBtn.backs : 'bg-teal-500' } ${isHover2 ? purpleBtn.backs : ""}  ${isHover3 ? redBtn.backs : ""} `}></div>
                        <div>
                            <h1 className={'transition delay-300 duration-500 ease-in-out font-bold z-10 brightness-125 inline-flex flex-col text-xl md:text-4xl lg:text-7xl xl:text-9xl text-opacity-120 text-transparent bg-clip-text bg-gradient-to-r ' +
                                ` ${isHover ? cyanBtn.text : "bg-gradient-to-r from-teal-500  to-yellow-500 "} ${isHover2 ? purpleBtn.text : ""} ${isHover3 ? redBtn.text : ""}`}>
                                <span>DWI</span>
                                <span>SETYO AJI</span>
                            </h1>
                        </div>
                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                            <div ref={hoverRef} className={'bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur  p-2 rounded-xl first:rounded-t-2xl last:rounded-b-2xl ' +
                                'md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-3xl md:last:!rounded-r-3xl ' +
                                'transition duration-300 ease-in-out hover:scale-110 '}>
                                <h2 className={''}>Weirdo</h2>
                                <p>Social & tech? Kinda crazy</p>

                            </div>
                            <div ref={hoverRef2} className={'bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur  p-2 rounded-xl first:rounded-t-2xl last:rounded-b-2xl ' +
                                'md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-3xl md:last:!rounded-r-3xl ' +
                                'transition duration-300 ease-in-out hover:scale-110 '}>
                                <h2 className={''}>Data Analyst</h2>
                                <p>Social Media Processing</p>

                            </div>
                            <div ref={hoverRef3} className={'bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur  p-2 rounded-xl first:rounded-t-2xl last:rounded-b-2xl ' +
                                'md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-3xl md:last:!rounded-r-3xl ' +
                                'transition duration-300 ease-in-out hover:scale-110 '}>
                                <h2 className={''}>Data Analyst</h2>
                                <p>Social Media Processing</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
