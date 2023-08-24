import slugify from "slugify";
import Image from "next/image";
import Link from "next/link";

type cardSearch = {
    id: string,
    title: string,
    image_header: string,
    description: string,
    createdAt: string,
    key: string
}
export default function CardSearch(props: cardSearch) {
    const slugify = require('slugify')
    let slugUrl = slugify(props.title, {replacement : '-'})
    return (
        <>
            <div key={props.id} className={'max-w-md flex gap-2 p-4 border rounded-md border-teal-500 space-y-2 group  hover:bg-rose-500 transition duration-300 ease-in-out hover:outline-dotted hover:outline-2 hover:outline-offset-4 hover:outline-teal-700 hover:-translate-y-2'} >
                <Link className={'flex flex-col md:flex-row justify-center items-center gap-2'} href={`/blog/${slugUrl}`}>
                    <div>
                        <Image className="rounded-md " src={`${props.image_header}`} alt={`${props.title}`} height={300} width={300} />
                    </div>
                    <div className={''}>
                        <p className={'capitalize text-lg md:text-xl lg:text-2xl xl:text-4xl'}>{props.title}</p>
                        <p className={'text-neutral-200'}>{props.createdAt?.substr(0,10)}</p>
                        <p className={'text-neutral-400 font-light text-ellipsis overflow-hidden'}>{props.description}</p>
                    </div>
                </Link>
            </div>
        </>
    )

}