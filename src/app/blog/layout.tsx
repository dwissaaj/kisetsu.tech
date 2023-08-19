// noinspection JSUnusedGlobalSymbols
import {Noto_Serif} from "next/font/google";

const noto = Noto_Serif({weight: ['400'], subsets: ['latin']})
export async function generateMetadata() {
    return {
        title: `Kisetsu Blog`,
        description: 'Kisetsu tech blog post',
        keywords: ['Kisetsu Blog', 'Next js', 'Nuxt js', 'Data Analyst'],
        authors: [{name: 'Dwi Aji'}, {name: 'Dwi Aji', url:'https://kisetsu.tech/'}],
        creator: 'Dwi Aji',
        publisher: 'Kisetsu Tech'

    }
}
export default function BlogsLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <div className={`${noto.className} mx-auto rounded-md shadow-xl container bg-neutral-700 p-2 m-4 `}>
            {children}
        </div>
    )
}