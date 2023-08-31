export async function getData(title: string) {
    const res = await fetch(`http://localhost:3000/api/blog/${title}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
