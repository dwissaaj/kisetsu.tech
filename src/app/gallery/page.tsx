import Link from "next/link";

export default function Gallery () {
    return (
        <div className="container mx-auto text-center ">
            <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
            <h1 className="text-lg">Sorry 😥</h1>
            <p>All my design and this page still on development, a few example already at Home</p>
            <Link href={'/'} className="p-4 w-1/4 rounded-md bg-white/80">Back Home </Link>
            </div>
        </div>
    )
}