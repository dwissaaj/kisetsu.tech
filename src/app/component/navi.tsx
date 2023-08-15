'use client'
import React, {Fragment} from "react";
import Link from "next/link";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {usePathname} from "next/navigation";
import Username from "@/app/component/username";
import {VT323} from "next/font/google";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}
const vt323 = VT323({weight: "400", subsets: ['latin']})
export default async function Navi() {
    const pathname = usePathname()

    return (
        <>
            <nav className={`${vt323.className} md:text-xl lg:text-3xl`}>
                <div
                    className={'static p-2 lg:p-4 border-b border-neutral-900 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center items-center bg-neutral-800 shadow-lg shadow-neutral-900'}>
                    <div className={'hidden md:block'}>
                        <Link className={'text-teal-500 font-4xl font-bold'} href={'/'}>KISETSU</Link>
                    </div>
                    <div className={'flex gap-4 lg:gap-8'}>
                        <Disclosure>
                            <Link
                                className={pathname === '/' ? 'md:block hover:text-pink-500 bg-neutral-700 text-gray-500 px-2 rounded-md' : 'md:block hover:text-pink-500 '}
                                href={'/'}>Home</Link>
                            <Link
                                className={pathname === '/dashboard' ? 'sm:block md:hidden hover:text-pink-500 bg-neutral-700 text-gray-500 px-2 rounded-md' : 'sm:block md:hidden hover:text-pink-500 '}
                                href={'/'}>Dashboard</Link>
                            <Link
                                className={pathname === '/blog' ? 'hover:text-pink-500 bg-neutral-700 text-gray-500 px-2  rounded-md' : 'hover:text-pink-500 '}
                                href={'/blog'}>Blog</Link>
                            <Link
                                className={pathname === '/career' ? 'hover:text-pink-500 bg-neutral-700 text-gray-500 px-2 rounded-md' : 'hover:text-pink-500 '}
                                href={'/career'}>Career</Link>
                            <Menu as="div" className="relative inline-block text-left">
                                <Menu.Button className="flex items-center">
                                    <p className={'hover:text-pink-500'}>Data</p>
                                    <ChevronDownIcon
                                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                                        <Menu.Item>
                                            {({active}) => (
                                                <Link
                                                    href={'/umkm'}
                                                    className={classNames(
                                                        active ? 'bg-[#FD8A8A] text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    UMKM
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <Link
                                                    href={'https://public.tableau.com/app/profile/dwi.setyo.aji'}
                                                    className={classNames(
                                                        active ? 'bg-[#FD8A8A] text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Tableau Public
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <Link
                                                    href={'https://drive.google.com/file/d/1Kgyd9CT55lCdLJrsRgvY8GZqVB12-Ewh/view?usp=drive_link'}
                                                    className={classNames(
                                                        active ? 'bg-[#FD8A8A] text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Power BI
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <Link
                                                    href={'https://docs.google.com/spreadsheets/d/1EIFTOB16fVdaWIMFQNBc1-zjeqLu7ojd/edit?usp=sharing&ouid=100367702123448522266&rtpof=true&sd=true'}
                                                    className={classNames(
                                                        active ? 'bg-[#FD8A8A] text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Social Network Analysis
                                                </Link>
                                            )}
                                        </Menu.Item>


                                    </Menu.Items>
                                </Transition>

                            </Menu>
                        </Disclosure>
                    </div>
                    <div className={'hidden md:block'}>
                        <Username />
                    </div>
                </div>
            </nav>


        </>
    )
}