'use client'
import useSWR from "swr";
import {SubmitHandler, useForm} from "react-hook-form";
import {Post} from "@/type/dto";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import {redirect} from "next/navigation";
import Link from "next/link";


const fetcher = (url: string) => fetch(url).then(r => r.json())
export default async function Page({ params }: { params: { id: string } }) {
    const { register, handleSubmit } = useForm<Post>()
    const { data, error, isLoading } = useSWR(`/api/content/${params.id}`, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const onSubmit: SubmitHandler<Post> = async (data)  => {
        let { title, content, tag, published,
            author, image_content, image_header,
            writer,
            description} = data
        try {
            await axios.patch(`/api/content/${params.id}`,
                {title, content, tag, author, image_content, image_header, published, writer, description})

            toast.success("Changed !", {
                position: toast.POSITION.BOTTOM_CENTER, theme: "dark",  icon: "🚧"
            });
        }
        catch (e) {
            toast.error(`${e}`, {
                position: toast.POSITION.BOTTOM_CENTER, theme: "dark",icon: "🚩"
            });
        }

    };
    const deletePost = async () => {
        try {
            const res = await axios.delete(`/api/content/${params.id}`)
            if(res.status === 200) {
                toast.success("Deleted !", {
                    position: toast.POSITION.BOTTOM_CENTER, theme: "dark", icon: "💩"
                });
                redirect('/content')
            }

        }
        catch (e) {
            toast.error(`${e}`, {
                position: toast.POSITION.BOTTOM_CENTER, theme: "dark",icon: "🚩"
            });
        }
    }

    return (
        <>
            <div className={'container mx-auto'}>
                <div className={'bg-neutral-700 p-2 m-2'}>
                    <form className={'flex flex-col gap-2'} onSubmit={handleSubmit(onSubmit)}>
                        <div className={'flex flex-col gap-2 text-neutral-900'}>
                            <label htmlFor={'title'}>Title</label>
                            <input id={'title'} defaultValue={`${data.title}`} {...register("title")}  className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                        </div>
                        <div className={'flex flex-col gap-2 text-neutral-900 '}>
                            <label htmlFor={'content'}>Content</label>
                            <textarea id={'content'} defaultValue={`${data.content}`} {...register("content")} className={'rounded-md h-[300px]'}/>
                        </div>
                        <div className={'flex flex-col gap-2 text-neutral-900'}>
                            <label htmlFor={'author'}>author</label>
                            <input id={'author'} defaultValue={`dwisaji150@gmail.com`}  {...register("author")} className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                        </div>
                        <div className={'flex flex-col gap-2 text-neutral-900'}>
                            <label htmlFor={'writer'}>writer</label>
                            <input id={'writer'} defaultValue={`${data.writer}`} {...register("writer")} className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                        </div>
                        <div className={'flex flex-col gap-2 text-neutral-900'}>
                            <label htmlFor={'image_content'}>image_content</label>
                            <input id={'image_content'} defaultValue={`${data.image_content}`}  {...register("image_content")} className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                        </div>
                        <div className={'flex flex-col gap-2 text-neutral-900'}>
                            <label htmlFor={'description'}>description</label>
                            <input id={'description'} defaultValue={`${data.description}`} {...register("description")} className={'rounded-md h-[200px]'} />
                        </div>
                        <div className={'flex flex-col gap-2 text-neutral-900'}>
                            <label htmlFor={'image_header'}>image_header</label>
                            <input id={'image_header'} defaultValue={`${data.image_header}`} {...register("image_header")}   className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                        </div>

                        <input className={'p-2 border-sky-500 rounded-md border'} type={"submit"}/>

                    </form>
                </div>
            </div>
            <div className={'flex flex-col gap-3'}>
                <button className={'bg-red-500 rounded-md p-2 '} onClick={deletePost
                }>Delete post
                </button>

                <Link className={'bg-blue-500 rounded-md p-2 '} href={'/content'}>Kembali</Link>

            </div>

            <div>
                <ToastContainer />
            </div>
        </>
    )
}