// noinspection JSUnusedGlobalSymbols

import {getData} from "@/app/blog/[title]/page";
import React from "react";
import {Inconsolata} from "next/font/google";
import Advice from "@/app/blog/recommendations/page";
const inconsolata = Inconsolata({weight: ['300'], subsets: ['latin']})

export async function generateMetadata({ params: { title } }: {params: { title: string,}}) {
    const data = await getData(title)
    let decodeTitle = decodeURIComponent(data.post.title).split(" ");

    for (let i = 0; i < decodeTitle.length; i++) {
        decodeTitle[i] = decodeTitle[i].charAt(0).toUpperCase() + decodeTitle[i].slice(1);

    }
    const final = decodeTitle.join(" ")

    return {
        title: `K-News: ${final}`,
        description: `${data.post.description}`,
        keywords: [`${data.post.tag}`],
        authors: [{name: `${data.post.writer}`}, {name: 'Dwi Aji', url:'https://kisetsu.tech/'}],
        creator: `${data.post.writer}`,
        publisher: 'Kisetsu Tech'

    }
}

export default function BlogLayout(props: {
    children: React.ReactNode
    advice: React.ReactNode
}) {
    return (
        <>
            <div className={` ${inconsolata.className} font-normal`}>
                <div className={''}>
                    <div>
                        {props.children}
                    </div>

                </div>
            </div>
        </>
    )
}