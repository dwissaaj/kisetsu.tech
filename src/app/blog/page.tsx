'use client'
import useSWR from "swr";
import {Post} from "@/type/dto";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/blog/loading";
const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Blog() {

    const { data, error, isLoading } = useSWR('http://localhost:3000/api/blog', fetcher)


    if (error) return <p>wrong error</p>
    if (isLoading) return <Loading />
  return (
      <>
          <div className={'container mx-auto'}>
              <div className={'bg-neutral-700 p-2 m-2'}>
                  <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'}>
                      {
                          data?.post?.map((posts: Post) => {
                              return (
                                  <div className={'p-4 border rounded-md border-teal-500 space-y-2 group  hover:bg-rose-900 transition duration-300 ease-in-out hover:outline-dotted hover:outline-2 hover:outline-offset-4 hover:outline-purple-500'} key={posts.title as string}>
                                      <div>
                                          <Image className="rounded-md object-cover object-top" src={`${posts.image_header}`} alt={`${posts.title}`} height={400} width={400} />
                                      </div>
                                      <div className={'capitalize '}>
                                          <p className={''}>{posts.title}</p>
                                          <p className={''}>{posts.writer} </p>
                                      </div>
                                      <div>
                                          <Link className={'hover:border-b-2 hover:border-blue-300'} href={`/blog/${posts.title}`}>
                                              <button >Read more...</button>
                                          </Link>
                                      </div>
                                  </div>
                              )
                          })
                      }
                  </div>
              </div>
          </div>
      </>
  )
}
