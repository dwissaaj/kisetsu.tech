'use client'
import Image from "next/image";
import Link from "next/link";
type CardPost = {
    id: string,
    title: string,
    image_header: string,
    writer: string,
    key: string
}
export default function CardBlog(props: CardPost) {
    return (
        <>
            <div key={props.id} className={'p-4 border rounded-md border-teal-500 space-y-2 group  hover:bg-rose-500 transition duration-300 ease-in-out hover:outline-dotted hover:outline-2 hover:outline-offset-4 hover:outline-teal-700 hover:-translate-y-2'} >
                <div>
                    <Image className="rounded-md object-cover object-top" src={`${props.image_header}`} alt={`${props.title}`} height={300} width={300} />
                </div>
                <div className={'capitalize '}>
                    <p className={'truncate'}>{props.title}</p>
                    <p className={''}>{props.writer} </p>
                </div>
                <div>
                    <Link className={'hover:border-b-2 hover:border-blue-300'} href={`/blog/${props.title}`}>
                       Read more...
                    </Link>
                </div>
            </div>
        </>
    )

}