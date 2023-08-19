'use client'
import {SubmitHandler, useForm} from "react-hook-form";
import {Post} from "@/type/dto";
import {toast, ToastContainer} from "react-toastify";
import {redirect} from "next/navigation";
import axios, {AxiosError} from "axios";

export default function Add() {
    const { register, handleSubmit,getValues } = useForm<Post>()

    const onSubmit: SubmitHandler<Post> = async (data)  => {
        let { title, content, tag, published,
            author, image_content, image_header,
            writer,
        description} = data
        try {
            const res = await fetch('http://localhost:3000/api/content',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title,content, tag, author, image_content, image_header, published, writer,description
                    })
                })
            if(res.status === 200) {
                toast.success("Success Publish !", {
                    position: toast.POSITION.BOTTOM_CENTER, theme: "dark",  icon: "🚀"
                });
            }

        }
        catch (e) {
            toast.error(`${e}`, {
                position: toast.POSITION.BOTTOM_CENTER, theme: "dark",icon: "🚩"
            })

        }

    };

    return (
        <>
            <div className={'w-full h-full'}>
                <form className={'flex flex-col gap-2'} onSubmit={handleSubmit(onSubmit)}>
                    <div className={'flex flex-col gap-2 text-neutral-900'}>
                        <label htmlFor={'title'}>Title</label>
                        <input  id={'title'}  {...register("title")} className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                    </div>
                    <div className={'flex flex-col gap-2 text-neutral-900 '}>
                        <label htmlFor={'content'}>Content</label>
                        <textarea id={'content'} {...register("content")} className={'rounded-md h-[300px]'}/>
                    </div>
                    <div className={'flex flex-col gap-2 text-neutral-900'}>
                        <label htmlFor={'author'}>author</label>
                        <input id={'author'}  {...register("author")} className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                    </div>
                    <div className={'flex flex-col gap-2 text-neutral-900'}>
                        <label htmlFor={'writer'}>writer</label>
                        <input id={'writer'}  {...register("writer")} className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                    </div>
                    <div className={'flex flex-col gap-2 text-neutral-900'}>
                        <label htmlFor={'image_content'}>image_content</label>
                        <input  id={'image_content'} {...register("image_content")} className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                    </div>
                    <div className={'flex flex-col gap-2 text-neutral-900'}>
                        <label htmlFor={'image_header'}>image_header</label>
                        <input id={'image_header'}  {...register("image_header")} className={'rounded-md w-42 h-42 md:62 md:h-62 lg:96 lg:96'} />
                    </div>
                    <div className={'flex flex-col gap-2 text-neutral-900'}>
                        <label htmlFor={'description'}>description</label>
                        <input id={'description'}  {...register("description")} className={'rounded-md h-[200px]'} />
                    </div>
                    <div className={''}>
                        <div>
                            <label htmlFor="seo">SEO</label>
                            <input id={'seo'} type={'checkbox'} {...register("tag")} value={'SEO'}/>
                        </div>
                        <div>
                            <label htmlFor="big data">Big Data</label>
                            <input id={'big data'} type={'checkbox'} {...register("tag")} value={'big data'}/>
                        </div>
                        <div>
                            <label htmlFor="Social Network Analysis">SNA</label>
                            <input id={'Social Network Analysis'} type={'checkbox'} {...register("tag")} value={'Social Network Analysis'}/>
                        </div>
                        <div>
                            <label htmlFor="NodeXL">NodeXL</label>
                            <input id={'NodeXL'} type={'checkbox'} {...register("tag")} value={'NodeXL'}/>
                        </div>
                        <div>
                            <label htmlFor="Digital Marketing">Digimar</label>
                            <input id={'Digital Marketing'} type={'checkbox'} {...register("tag")} value={'Digital Marketing'}/>
                        </div>
                        <div>
                            <label htmlFor="Google Analytics">GA</label>
                            <input id={'Google Analytics'} type={'checkbox'} {...register("tag")} value={'Google Analytics'}/>
                        </div>
                        <div>
                            <label htmlFor="Python">Python</label>
                            <input id={'Python'} type={'checkbox'} {...register("tag")} value={'Python'}/>
                        </div>
                        <div>
                            <label htmlFor="Natural Language Processing">NLP</label>
                            <input id={'Natural Language Processing'} type={'checkbox'} {...register("tag")} value={'Natural Language Processing'}/>
                        </div>
                        <div>
                            <label htmlFor="Artificial Intelligence">AI</label>
                            <input id={'Artificial Intelligence'} type={'checkbox'} {...register("tag")} value={'Artificial Intelligence'}/>
                        </div>
                        <div>
                            <label htmlFor="Tableau">Tableau</label>
                            <input id={'Tableau'} type={'checkbox'} {...register("tag")} value={'Tableau'}/>
                        </div>
                        <div>
                            <label htmlFor="Power BI">Power BI</label>
                            <input id={'Power BI'} type={'checkbox'} {...register("tag")} value={'Power BI'}/>
                        </div>
                        <div>
                            <label htmlFor="React js">React</label>
                            <input id={'React js'} type={'checkbox'} {...register("tag")} value={'React js'}/>
                        </div>
                        <div>
                            <label htmlFor="Vue js">Vue</label>
                            <input id={'Vue js'} type={'checkbox'} {...register("tag")} value={'Vue js'}/>
                        </div>
                        <div>
                            <label htmlFor="Nuxt js">Nuxt</label>
                            <input id={'Nuxt js'} type={'checkbox'} {...register("tag")} value={'Nuxt js'}/>
                        </div>
                        <div>
                            <label htmlFor="Next js">Next</label>
                            <input id={'Next js'} type={'checkbox'} {...register("tag")} value={'Next js'}/>
                        </div>
                        <div>
                            <label htmlFor="Sakamichi">Sakamichi</label>
                            <input id={'Sakamichi'} type={'checkbox'} {...register("tag")} value={'Sakamichi'}/>
                        </div>
                        <div>
                            <label htmlFor="Nogizaka46">Nogizaka46</label>
                            <input id={'Nogizaka46'} type={'checkbox'} {...register("tag")} value={'Nogizaka46'}/>
                        </div>
                        <div>
                            <label htmlFor="Sakurazaka46">Sakurazaka46</label>
                            <input id={'Sakurazaka46'} type={'checkbox'} {...register("tag")} value={'Sakurazaka46'}/>
                        </div>
                        <div>
                            <label htmlFor="Hinatazaka46">Hinatazaka46</label>
                            <input id={'Hinatazaka46'} type={'checkbox'} {...register("tag")} value={'Hinatazaka46'}/>
                        </div>
                        <div>
                            <label htmlFor="Japan">Japan</label>
                            <input id={'Japan'} type={'checkbox'} {...register("tag")} value={'Japan'}/>
                        </div>
                        <div>
                            <label htmlFor="published">Published</label>
                            <input id={'published'} checked={true} type={'checkbox'} {...register("published")} />
                        </div>
                    </div>
                    <input className={'p-2 border-sky-500 rounded-md border'} type={"submit"}/>
                </form>
            </div>
            <div>

            </div>
            <div>
                <ToastContainer />
            </div>

        </>
    )
}
