'use client'
import {Poppins} from "next/font/google";
import Image from "next/image";
import './umkm.css'
import Story from "@/app/umkm/story";
import { Tab } from '@headlessui/react'
import Link from "next/link";
import {Fragment} from "react";
const poppins = Poppins({ weight: "300", subsets: ['latin'] })
export default function UMKM() {
  return (
      <>
      <div className={'w-full overflow-hidden mb-24'}>
        <div className={poppins.className}>
          <div className={'p-2 flex w-screen justify-center'}>
             <div>
                 <div className={'grid justify-items-center gap-3'}>
                     <p className={'text-6xl'}>Find the right <span className={'text-orange-500'}>talent.</span></p>
                     <p className={'text-center text-xl'}>We provide the best talent for your company</p>
                     <p className={'text-lg'}>How is it work?</p>
                 </div>
                 <div className={'text-xs flex justify-center gap-3 mt-2'}>
                     <button className={'bg-pink-500 rounded-md p-4 hover:bg-pink-900'}>Contact Us</button>
                     <button  className={'border border-pink-500 rounded-md p-4 hover:bg-slate-900'}>Find our talent</button>
                 </div>
             </div>
          </div>

            <div className={'p-2 mt-4 flex w-screen justify-center'}>
                <div className={'w-full mx-1 md:mx-2 lg:mx-4 2xl:mx-6 bg-gradient-to-r from-teal-900 to-sky-300 py-4 px-12 lg:24 2xl:px-72 rounded-md '}>
                    <div className={'grid grid-cols-1 flex gap-2 lg:gap-4 justify-center justify-center'}>
                        <div className={'text-center text-2xl'}>
                            <p>&quot;Their talent trained well perfect for our social media presence&quot;</p>
                        </div>
                        <div className={'flex justify-center'}>
                            <div className="flex flex-row gap-2 items-center">
                                <div className={'p-2 flex -space-x-1 overflow-hidden'}>
                                    <Image className="object-cover inline-block h-24 w-24 rounded-full ring-2 ring-white" src={'/avatar/Matsuda.jpg'} alt={'matsuda '} width={100} height={100} />
                                </div>
                                <div className={'text-xs'}>
                                    <p>Head of Social Media</p>
                                    <p>Matsuda Rina</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className={'grid grid-cols-2 md:grid-cols-4 flex items-center justify-center gap-2'}>
                                <div className={'w-24'}>
                                    <Image src={'/company/azure.png'} alt={'azure'} width={100} height={100} />
                                </div>
                                <div className={'w-24'}>
                                    <Image src={'/company/netlify.png'} alt={'azure'} width={100} height={100} />
                                </div>
                                <div className={'w-24'}>
                                    <Image src={'/company/unil.png'} alt={'azure'} width={100} height={100} />
                                </div>
                                <div className={'w-24'}>
                                    <Image src={'/company/mcds.png'} alt={'azure'} width={100} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className={'p-2 flex w-screen justify-center mt-4'}>
                <div className={'w-full mx-2 md:mx-4 lg:mx-6 2xl:mx-8'}>
                    <div className={'grid grid-cols-1 lg:grid-cols-2 gap-2'}>
                        <div  className={'w-full no-scrollbar p-2 h-[600px] snap-x snap-mandatory flex-nowrap no-scrollbar overflow-scroll'}>
                            <Story />
                        </div>
                        <div className={''}>
                            <p className={'text-3xl font-semibold my-4'}>Our Top Talent</p>
                            <Tab.Group >
                                <Tab.List className={'flex gap-3 my-6'} >
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            /* Use the `selected` state to conditionally style the selected tab. */
                                            <button
                                                className={
                                                    selected ? 'p-3 bg-gradient-to-r from-orange-500 to-pink-900 rounded-md' : ' p-3 border-2 border-teal-500 rounded-md text-white'
                                                }
                                            >
                                                Model
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            /* Use the `selected` state to conditionally style the selected tab. */
                                            <button
                                                className={
                                                    selected ? 'p-3 bg-gradient-to-r from-orange-500 to-pink-900 rounded-md' : 'p-3 border-2 border-teal-500 rounded-md text-white'
                                                }
                                            >
                                                Streamer
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            /* Use the `selected` state to conditionally style the selected tab. */
                                            <button
                                                className={
                                                    selected ? 'p-3 bg-gradient-to-r from-orange-500 to-pink-900 rounded-md' : 'p-3 border-2 border-teal-500 rounded-md text-white'
                                                }
                                            >
                                                Actress
                                            </button>
                                        )}
                                    </Tab>
                                </Tab.List>
                            </Tab.Group>
                            <div className={'grid grid-cols-3 gap-2 overflow-hidden'}>
                                <div >
                                    <div>
                                        <Image className={'hover:z-10 hover:scale-150 hover:translate-y-6 transition duration-300 ease-in-out'} src={'/image/member/aya.jpg'} alt={'aya'} width={200} height={200} />
                                    </div>
                                    <div>
                                        <p className={'text-center'}>Takamoto</p>
                                        <button className={'text-sm m-2 transition duration-700 ease-in-out border rounded-md p-2 mt-2 bg-gradient-to-r from-black to-black hover:from-orange-500 hover:to-pink-900'}>Actress</button>
                                        <button className={'text-sm m-2 transition duration-700 ease-in-out border rounded-md p-2 mt-2 bg-gradient-to-r from-black to-black hover:from-orange-500 hover:to-pink-900'}>Stunt</button>
                                    </div>
                                </div>
                                <div className={'grid grid-rows-2 gap-2 flex justify-center justify-items-center'}>
                                    <div>
                                        <Image  className={'hover:z-10 hover:scale-150 hover:translate-y-12 transition duration-300 ease-in-out'} src={'/image/member/kato.jpg'} alt={'aya'} width={200} height={200} />
                                    </div>
                                    <div>
                                        <p className={'text-center'}>Katoshi</p>
                                        <button className={'text-sm m-2 transition duration-700 ease-in-out border rounded-md p-2 mt-2 bg-gradient-to-r from-black to-black hover:from-orange-500 hover:to-pink-900'}>MC</button>
                                        <button className={'text-sm m-2 transition duration-700 ease-in-out border rounded-md p-2 mt-2 bg-gradient-to-r from-black to-black hover:from-orange-500 hover:to-pink-900'}>Model</button>
                                    </div>
                                </div>
                                <div className={'grid grid-rows-2 gap-2 flex justify-center justify-items-center'}>
                                    <div>
                                        <Image  className={'hover:z-10 hover:scale-150 hover:translate-y-6 transition duration-300 ease-in-out'} src={'/image/member/nao.jpg'} alt={'aya'} width={200} height={200} />
                                    </div>
                                    <div>
                                        <p className={'text-center'}>Katoshi</p>
                                        <button className={'text-sm m-2 transition duration-700 ease-in-out border rounded-md p-2 mt-2 bg-gradient-to-r from-black to-black hover:from-orange-500 hover:to-pink-900'}>Hand Model</button>
                                        <button className={'text-sm m-2 transition duration-700 ease-in-out border rounded-md p-2 mt-2 bg-gradient-to-r from-black to-black hover:from-orange-500 hover:to-pink-900'}>Voice Actor</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'p-2 mt-4 flex flex-col justify-start'}>
                <div className={'mx-2 md:mx-4 lg:mx-6 2xl:mx-8'}>
                    <h1 className={'text-5xl font-semibold'}>Lets Produce Something</h1>

                </div>

            </div>

            <div className={'m-2 flex flex-nowrap overflow-x-auto gap-3 scrollbar'}>
                <div className={'w-[300px] flex-none p-2 bg-gradient-to-r from-teal-800 via-teal-500 to-blue-900 relative rounded-md hover:bg-black hover:bg-gradient-to-r hover:from-teal-800 hover:via-teal-500 hover:to-blue-900'}>
                    <div className={'mt-12 '}>
                        <p className={'text-xl font-semibold'}>Extras</p>
                        <p className={'text-sm'}>If you are a production house need our extras as actor</p>
                    </div>
                </div>
                <div className={'w-[300px] flex-none p-2 bg-gradient-to-r from-blue-800 via-blue-500 to-purple-900   relative rounded-md'}>
                    <div className={'mt-12 '}>
                        <p className={'text-xl font-semibold'}>Brand Ambassador</p>
                        <p className={'text-sm'}>Our talent represent you company in formal,content and public relation</p>
                    </div>
                </div>
                <div className={'w-[300px] flex-none p-2 bg-gradient-to-r from-purple-800 via-purple-500 to-pink-900   relative rounded-md'}>
                    <div className={'mt-12 '}>
                        <p className={'text-xl font-semibold'}>Host</p>
                        <p className={'text-sm'}>Perfect talent for selling product in marketplace or online shop</p>
                    </div>
                </div>
                <div className={'w-[300px] flex-none p-2 bg-gradient-to-r from-pink-800 via-pink-500 to-orange-900   relative rounded-md'}>
                    <div className={'mt-12 '}>
                        <p className={'text-xl font-semibold'}>Streamer</p>
                        <p className={'text-sm'}>Great for live streaming game or any service your company have</p>
                    </div>
                </div>
                <div className={'w-[300px] flex-none p-2 bg-gradient-to-r from-orange-800 via-orange-500 to-lime-900   relative rounded-md'}>
                    <div className={'mt-12 '}>
                        <p className={'text-xl font-semibold'}>Model</p>
                        <p className={'text-sm'}>From hand model to fashion our talent perfect for your brand they are stunning in cat walk</p>
                    </div>
                </div>

            </div>

        </div>
      </div>
      <div className={'static bottom-0 flex justify-center p-2 lg:p-4 mx-4'}>
          <div className={'flex flex-row'}>
              <div className={' grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-16 lg:gap-24'}>
                  <div>
                      <ul>
                          <p className={'text-2xl mb-4 font-semibold'}>Why Us</p>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  Review
                              </Link>
                          </li>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  License
                              </Link>
                          </li>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  Partnership
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <p className={'text-2xl mb-4 font-semibold'}>Contact Us</p>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  Twitter
                              </Link>
                          </li>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  Email
                              </Link>
                          </li>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  Instagram
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <p className={'text-2xl mb-4 font-semibold'}>Our Work</p>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  Content
                              </Link>
                          </li>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  Portfolio
                              </Link>
                          </li>
                          <li>
                              <Link className={'hover:underline'} href={''}>
                                  Talent
                              </Link>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </div >
          <div className={'static bottom-0 flex justify-center p-2 lg:p-4'}>
              <div className={'gap-4 space-y-4'}>
                  <p className={'text-xl text-center'}>Stay Update with us</p>
                  <div className={'flex gap-6'}>
                      <input className={'px-4 py-2 rounded-md border text-black'} placeholder={'Email Address'}/>
                      <button className={'p-4 bg-gradient-to-r from-teal-900 to-sky-300 rounded-md hover:from-teal-500 hover:to-teal-900'}>Subsribe</button>
                  </div>
              </div>
          </div>

          <div className={'my-2 static bottom-0 flex justify-center p-2 lg:p-4 border-t'}>
              <p className={''}>UMKM 2023</p>
          </div>
  </>
  )
}
