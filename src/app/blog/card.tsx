'use client'
import Image from "next/image";
import Link from "next/link";
import {Post} from "@/type/dto";
import slugify from "slugify";
type CardPost = {
    id: number,
    title: string,
    image_header: string,
    writer: string,
    key: Number
}
export default function CardBlog(props: CardPost) {
    const slugify = require('slugify')
    let slugUrl = slugify(props.title, {replacement : '-'})
    return (
        <>
            <div key={props.id} className={'p-4 border rounded-md border-teal-500 space-y-2 group  hover:bg-rose-900 transition duration-300 ease-in-out hover:outline-dotted hover:outline-2 hover:outline-offset-4 hover:outline-teal-700'} >
                <div>
                    <Image className="rounded-md object-cover object-top" src={`${props.image_header}`} alt={`${props.title}`} height={400} width={400} />
                </div>
                <div className={'capitalize '}>
                    <p className={''}>{props.title}</p>
                    <p className={''}>{props.writer} </p>
                </div>
                <div>
                    <Link className={'hover:border-b-2 hover:border-blue-300'} href={`/blog/${slugUrl}`}>
                       Read more...
                    </Link>
                </div>
            </div>
        </>
    )

}