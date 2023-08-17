'use client'

import Image from "next/image";
interface userC {
    name: string | undefined;
    imageUrl: string | undefined;
}
export default function UserC(props: userC) {
    return (
        <div className={'flex gap-2 justify-center items-center'}>
            <h1>{props.name}</h1>
            <Image className={'border rounded-full'} src={`${props.imageUrl}`} alt={`${props.name}`} width={50} height={50} />
        </div>
    )
}