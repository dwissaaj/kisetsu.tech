async function getData(title: string) {
    const res = await fetch(`http://localhost:3000/api/blog/${title}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export async function generateMetadata({ params: { title } }: {params: { title: string}}) {
    return {
        title: title,
    }
}
export default async function Page({ params: { title } }: {params: { title: string}}) {
    const data = await getData(title)
    console.log(data)
    return (

        <>
            <div className={'container mx-auto'}>
                <div className={'bg-neutral-700 p-2 m-2'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>
                        <p>this is {title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

