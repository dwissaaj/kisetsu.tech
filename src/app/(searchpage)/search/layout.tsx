import {Inconsolata} from "next/font/google";

const inconsolata = Inconsolata({weight: ['300'], subsets: ['latin']})
export async function generateMetadata() {
    return {
        title: `Search`,
        description: 'Search post & blog kisetsu',
        keywords: ['Kisetsu Blog', 'Next js', 'Nuxt js', 'Data Analyst'],
        authors: [{name: 'Dwi Aji'}, {name: 'Dwi Aji', url:'https://kisetsu.tech/'}],
        creator: 'Dwi Aji',
        publisher: 'Kisetsu Tech'

    }
}
export default function LayoutSearch({
                                         children,
                                     }: {
    children: React.ReactNode
}) {

    return (
        <>
            <div className={`${inconsolata.className} bg-my_bg_image bg-black w-full h-full bg-no-repeat bg-center`}>
                {children}
            </div>
        </>
    )

}