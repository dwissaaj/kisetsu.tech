import {Noto_Serif} from "next/font/google";
const noto = Noto_Serif({weight: ['400'], subsets: ['latin']})
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