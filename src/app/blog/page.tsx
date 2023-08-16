'use client'
import useSWR from "swr";
import {Post} from "@/type/dto";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/blog/loading";
import CardBlog from "@/app/blog/card";

const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Blog() {

    const { data, error, isLoading } = useSWR('/api/blog', fetcher)
    if (error) return <p>something wrong</p>
    if (isLoading) return <Loading />
  return (
      <>
          <div className={'container mx-auto'}>
              <div className={'bg-neutral-700 p-2 m-2'}>
                  <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'}>
                      {
                          data?.post?.map((posts: Post) => {
                              return (
                                  <CardBlog key={posts.id as string} id={posts.id} writer={posts.writer} title={posts.title} content={posts.content} tag={posts.tag}
                                            author={posts.author} image_header={posts.image_header} image_content={posts.image_content} published={posts.published} />
                              )
                          })
                      }
                  </div>
              </div>
          </div>
      </>
  )
}
