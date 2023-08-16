import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json())
export default async function  useBlog (params: string) {
    const { data, error, isLoading } = useSWR(`http://localhost:3000/api/blog/${params}`, fetcher)

    return {
        user: data,
        isLoading,
        isError: error
    }
}