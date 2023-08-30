'use client'
import "./swipercustom.css"
import Social from "@/app/about/home/Social";
import Development from "@/app/about/home/Development";
import DataAnalyst from "@/app/about/home/DataAnalyst";
import Creative from "@/app/about/home/Creative";
import {Poppins} from "next/font/google";
const poppins = Poppins({weight: "300", subsets: ['latin']})
export default function AboutPage() {
    return (
        <>
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