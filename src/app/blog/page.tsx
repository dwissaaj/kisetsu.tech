'use client'
import useSWR from "swr";
import {Post} from "@/type/dto";
import Loading from "@/app/blog/loading";
import CardBlog from "@/app/blog/card";
import Error from "@/app/blog/error";
import {redirect} from "next/navigation";
const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Blog() {

    const { data, error, isLoading } = useSWR('/api/blog', fetcher)
    if (error) return <Error error={error} reset={() => redirect('/')} />
    if (isLoading) return <Loading />
  return (
      <>
          <div className={'container mx-auto'}>
              <div className={'bg-neutral-700 p-2 m-2 my-4'}>
                  <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'}>
                      {
                          data?.post?.map((posts: Post) => {
                              return (
                                   <CardBlog key={posts.id as string} id={posts.id as string} title={posts.title as string} image_header={posts.image_header as string} writer={posts.writer as string} />
                              )
                          })
                      }
                  </div>
              </div>
          </div>
      </>
  )
}
