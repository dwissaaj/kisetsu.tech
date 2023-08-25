import {useParams, usePathname, useSearchParams} from "next/navigation";

export async function generateMetadata() {
    return {
        title: `Kisetsu Search`,
        description: 'Search post & blog kisetsu',
        keywords: ['Kisetsu Blog', 'Next js', 'Nuxt js', 'Data Analyst'],
        authors: [{name: 'Dwi Aji'}, {name: 'Dwi Aji', url:'https://kisetsu.tech/'}],
        creator: 'Dwi Aji',
        publisher: 'Kisetsu Tech'

    }
}
export default function LayoutResult({
                                         children,
                                     }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className={'flex w-full h-screen justify-center items-start mt-6 bg-black'}>
                {children}
            </div>
        </>
    )

}