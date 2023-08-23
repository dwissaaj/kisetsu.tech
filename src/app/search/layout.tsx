import {Inconsolata} from "next/font/google";

const inconsolata = Inconsolata({weight: ['300'], subsets: ['latin']})
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