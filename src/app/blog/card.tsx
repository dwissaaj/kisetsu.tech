'use client'
import Image from "next/image";
import Link from "next/link";
type CardPost = {
    id: string,
    title: string,
    image_header: string,
    createdAt: string,
    key: string
}
export default function CardBlog(props: CardPost) {
    return (
        <>
            <div key={props.id as string}>
                <div className={'flex flex-col bg-neutral-900 border-2 rounded-md border-neutral-200 p-2 gap-2 hover:border-pink-200' +
                    'transition duration-300 ease-in-out hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-16px_12px_0px_-2px_rgba(27,145,111,0.75)]'}  >
                    <div>
                        <Image className="rounded-md mx-1 px-1 bg-center" src={`${props.image_header}`} alt={`${props.title}`} height={400} width={400} />

                    </div>
                    <div className={'capitalize font-bold text-pink-400'}>
                        <h1>{props.title}</h1>
                    </div>
                    <div>
                        <p>{props.createdAt?.substring(0,10)}</p>
                    </div>
                    <div>
                        <Link className={'hover:border-b-2 hover:border-blue-300'} href={`/blog/${props.title}`}>
                            Read more...
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}