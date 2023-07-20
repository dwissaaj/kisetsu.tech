'use client'
import "./swipercustom.css"
import { Poppins, } from "next/font/google";
import Social from "@/app/component/home/Social";
import DataAnalyst from "@/app/component/home/DataAnalyst";
import Development from "@/app/component/home/Development";
import {GoogleAnalytics} from "nextjs-google-analytics";
import Creative from "@/app/component/home/Creative";
const poppins = Poppins({weight: "300", subsets: ['latin']})

export default function Home() {

    return (
        <>
            <GoogleAnalytics trackPageViews  />
            <div className={`container mx-auto ${poppins.className}`}>
                <div className={' flex flex-col w-full justify-center '}>
                    <Social/>
                    <DataAnalyst/>
                    <Development />
                    <Creative />

                </div>
            </div>

        </>
    )
}
