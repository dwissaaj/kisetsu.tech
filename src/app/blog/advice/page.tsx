'use client'
import useSWR from "swr";
import Link from "next/link";
import {Post} from "@/type/dto";
import Error from "@/app/blog/advice/error";
import Loading from "@/app/blog/advice/loading";


const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Advice() {

    const { data, error, isLoading } = useSWR(`/api/recommendations/`, fetcher)

    if (isLoading) {
        return <Error />
    }
    if(error) {
        return <Loading />
    }
    return (
        <>
          <div className={'border-t-2 md:border-l-2 border-pink-500 flex flex-col p-2 m-2 space-y-4 w-full justify-center items-center'}>
              <div>
                  <h2 className={'text-lg lg:text-2xl'}>Read other.......😊</h2>
              </div>
              <div className={'flex flex-col space-y-4'}>
                  {data.post.map((posts: Post) => {
                      return (
                          <li key={posts.id as string} className={'capitalize list-disc hover:translate-x-4 hover:border-b-2 hover:border-teal-500 transition duration-300 ease-in-out'}>
                              <Link className={' '}  href={`/blog/${posts.title}`}>{posts.title}</Link>
                          </li>
                      )
                  })}
              </div>
          </div>
        </>
    )

}