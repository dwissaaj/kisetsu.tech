import Image from "next/image";
type sessions = {
    user: {
        name: string
        email: string
        image: string
    }
}
export default function User(props: sessions) {
    return (
       <>
           <div className={'flex gap-2 justify-center items-center'}>
               <h1>{props.user.name}</h1>
               <Image className={'border rounded-full'} src={`${props.user.image}`} alt={`${props.user.name}`} width={50} height={50} />
           </div>
       </>
    )
}