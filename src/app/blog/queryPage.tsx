'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import Link from "next/link";
import {useCallback, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
type SearchQ = {
    searchValue: string
}
export default function QueryPage() {
    const pathname = usePathname()
    const router = useRouter()
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams()
            params.set(name, value)
            return params.toString()
        },
        []
    )
    const { register,handleSubmit,formState: { isDirty} } =
        useForm<SearchQ>({defaultValues:{searchValue: ""}})



    const onSubmit: SubmitHandler<SearchQ> = (data) => {
        router.push('search' + '/result/' + '?' + createQueryString('filter', `${data.searchValue}`))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}  className={'p-2 m-2 my-4 flex flex-col justify-center items-center gap-4'} >
                <div className={'w-full flex gap-2'}>
                    <input  {...register('searchValue', {required: true})} type="text" className={'placeholder:p-8 px-4 w-92  text-black rounded-md'}  placeholder={"Type here..."} id={'search'} />
                    <button disabled={!isDirty} className={`border-y-2 border-pink-600 px-3  rounded-md ${isDirty ? '' : 'line-through'} `}  type={"submit"}>
                        Find
                    </button>
                </div>
            </form>
        </>
    )

}