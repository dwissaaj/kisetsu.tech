import Add from "@/app/content/add";

export default function Content( ) {

    return (
        <>
            <div className={'container mx-auto'}>
                <div className={'p-2 m-2 bg-neutral-600 rounded-md border'}>
                    <div className={'flex justify-center items-center'}>
                        <h1>Image Upload</h1>
                    </div>
                    <div >
                        <h1>Image Upload</h1>
                    </div>
                </div>
                <div className={'p-2 m-2 bg-neutral-600 rounded-md border'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <div>
                            <h1>Post</h1>
                        </div>
                        <Add />
                    </div>

                </div>
            </div>
        </>
    )
}