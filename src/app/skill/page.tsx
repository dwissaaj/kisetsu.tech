import Image from "next/image";
import {Press_Start_2P, Space_Mono} from "next/font/google";
import {dataCareer} from "@/app/skill/careerdata"
import {Metadata} from "next";

const space = Space_Mono({weight: ["400", "700"], subsets: ['latin']})
const tekstur = Press_Start_2P({weight: "400", subsets: ['latin']})
export const metadata: Metadata = {
    title: 'Kisetsu Skills',
    description: 'My Skill Dwi Setyo Aji kisetsu',
}
export default function Career() {
    return (
        <div className={'container mx-auto'}>
            <div className={'flex flex-col my-4 '}>
                <div className={'m-2 p-2'}>
                    <h1 className={ `${space.className} font-extrabold text-2xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-green-500   `}>Kinda Cocky right? </h1>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-3'}>
                    {dataCareer.map(cars => (

                        <div key={cars.id} className={'grid grid-rows-3 gap-0  group hover:-translate-y-1 border border-pink-500 hover:outline  hover:outline-2 hover:outline-teal-500 rounded-md p-3 m-2 hover:bg-pink-500 transition duration-150 ease-in-out'}>
                            <div className={'flex items-center gap-2'}>
                                <h1 className={`${tekstur.className} group-hover:text-neutral-900 md:text-2xl lg:text-4xl capitalize`}>{cars.title}</h1>
                                <div className={'w-6 h-6 md:w-12 md:h-12 lg:w-16 lg:h-16 relative'}>
                                    <Image className={'group-hover:visible invisible '} src={`${cars.url}`} alt={'a'} fill={true} />
                                </div>
                            </div>
                            <div className={'mb-4'}>
                                <p className={`${space.className} md:text-xl lg:text-2xl`}>{cars.description}</p>
                            </div>
                            <div className={'flex flex-col '}>
                                <div>
                                    <p className={`${space.className} text-pink-500 group-hover:invisible md:text-xl lg:text-2xl`}>{cars.level}</p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}