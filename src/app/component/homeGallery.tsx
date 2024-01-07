import Image from "next/image"
export default function HomeGallery() {
    return (
        <div className={'w-full flex-col justify-center items-center flex text-center my-24 '}>
            <div className={`absolute top-3/4 opacity-10 bg-pink-500 -z-30  w-[300px] md:w-[500px] lg:w-[800px] h-[300px] blur-[100px] `}> </div>
            <div className={'text-center font-extrabold text-2xl md:text-6xl lg:text-9xl -z-5 opacity-20 text-zinc-50 lg:translate-y-12'}>
                <h2>Gallery</h2>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-3'}>
                <div className={'transition duration-300 ease-in-out bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur p-4 m-2 hover:scale-110 rounded-xl'}>
                    <Image priority={false} className={'rounded-md'} src={'/image/ball/ball-1.png'} alt={'ball 1 pics'} width={300} height={300} />
                </div>
                <div className={'transition duration-300 ease-in-out bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur p-4 m-2 hover:scale-110 rounded-xl'}>
                    <Image priority={false} className={'rounded-md'} src={'/image/ball/ball-2.png'} alt={'ball 1 pics'} width={300} height={300} />
                </div>
                <div className={'transition duration-300 ease-in-out bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur p-4 m-2 hover:scale-110 rounded-xl'}>
                    <Image priority={false} className={'rounded-md'} src={'/image/ball/ball-3.png'} alt={'ball 1 pics'} width={300} height={300} />
                </div>
            </div>
        </div>
    )
}