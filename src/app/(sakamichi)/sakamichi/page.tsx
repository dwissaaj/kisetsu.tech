import Link from "next/link";
import axios from "axios";

export default function Page() {
    const comment = async () => {
        const {data} = await  axios.post('api/sakamichi',{
            text: 'hello',
            tags: 'das'
        })
    }
    return (
        <>
        <div>
            <Link href={'/comments'} prefetch={false} >
                  </Link>
            <button>make comment</button>
        </div>
        </>
    )

}