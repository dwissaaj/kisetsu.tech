import Image from "next/image";
import {Press_Start_2P, Space_Mono} from "next/font/google";
import {dataCareer} from "@/app/skill/careerdata"
import {Metadata} from "next";

const space = Space_Mono({weight: "400", subsets: ['latin']})
const tekstur = Press_Start_2P({weight: "400", subsets: ['latin']})
export const metadata: Metadata = {
    title: 'Kisetsu Career',
    description: 'My Skill Dwi Setyo Aji kisetsu',
}
export default function Career() {
    return (
        <div className={'container mx-auto'}>
            <div className={'flex my-4 '}>
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
                                <div className={'flex items-center'}>
                                    <p className={`${space.className} md:text-2xl lg:text-4xl text-[#100f11] text-xl font-bold group-hover:text-amber-500`}>{cars.score} </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill={'hover:'} className="group-hover:fill-amber-500 group-hover:visible fill-[#100f11] 800 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                </div>
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