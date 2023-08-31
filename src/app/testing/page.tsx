import {cookies} from "next/headers";

export default function Testpage() {
    const cookieStore = cookies()
    const userImage = cookieStore.get('userImage')
    const username = cookieStore.get('username')

    return (
        <>
        <p>testing cookies</p>
        </>
    )

}