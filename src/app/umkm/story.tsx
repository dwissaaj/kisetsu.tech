import Link from "next/link";
import Image from "next/image";

export default function Story() {
  return (
    <div className={''}>
        <div className={'flex flex-col gap-4 text-white mb-80 flex-none snap-center'}>
            <h1 className={'text-5xl text-ellipsis'}>Our talent is your solution</h1>
            <p className={'text-md font-light '}>From formal to team gathering our talent fit to become your program MC
            </p>
            <Link className={'underline text-xl hover:text-teal-500 mt-6'} href={'#'} >See Our Service</Link>
        </div>
        <div className={'mb-80 flex-none snap-center'}>
            <p className={'text-lg font-light '}>&quot; Our gathering team so much fun their MC can handle mood of the program &quot;</p>
            <div className="flex flex-row gap-2 items-center ">
                <div className={'p-2 flex -space-x-1 overflow-hidden'}>
                    <Image className="object-cover inline-block h-24 w-24 rounded-full ring-2 ring-white" src={'/avatar/Matsuda.jpg'} alt={'matsuda '} width={100} height={100} />
                </div>
                <div className={'text-sm'}>
                    <p>Project Manager</p>
                    <p>Matsuda Rina</p>
                </div>
            </div>
        </div>
        <div className={'flex flex-col gap-4 text-white mb-80 flex-none snap-center'}>
            <h1 className={'text-5xl text-ellipsis'}>We also have talented actor</h1>
            <p className={'text-xs font-light'}>From extras, stunt man until professional actor and actress           </p>
            <div className={'flex gap-3'}>
                <button className={'p-2 bg-teal-500 rounded-md hover:bg-teal-900'}>See Our Actor</button>
                <button className={'p-2 border-teal-500 border-2 rounded-md hover:border-teal-100'}>Our Content</button>
            </div>
        </div>
        <div className={'flex flex-col gap-4 text-white mb-80 flex-none snap-center'}>
            <h1 className={'text-5xl text-ellipsis'}>We believe everyone deserve a chance</h1>
            <p className={'text-xs font-light'}>All our talent paid equitable based on complexity, fit to your production budget         </p>

        </div>
    </div>
  )
}
