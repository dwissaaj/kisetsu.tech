// noinspection JSUnusedGlobalSymbols
import {Inconsolata} from "next/font/google";

const inconsolata = Inconsolata({weight: ['300'], subsets: ['latin']})
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
        <div className={`${inconsolata.className} mx-auto h-screen bg-blog_bg bg-black bg-no-repeat bg-center bg-cover`}>
            {children}
        </div>
    )
}