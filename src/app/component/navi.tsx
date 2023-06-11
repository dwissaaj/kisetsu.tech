'use client'
import Image from "next/image";
import React, {Fragment} from "react";
import Link from "next/link";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import Foots from "@/app/component/foots";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navi() {
    return (
    <>
      <nav>
          <div className={'static p-2 lg:p-4 border-b grid grid-cols-1 md:grid-cols-3 flex justify-center justify-items-center items-center bg-black'}>
              <div className={'hidden md:block'}>
                  <Link className={'text-teal-500 font-4xl font-bold'} href={'/'}>KISETSU</Link>
              </div>
              <div className={'flex gap-4 lg:gap-8'}>
                  <Disclosure>
                  <Link className={'hover:text-[#FD8A8A]'}  href={'/'} >Home</Link>
                  <Link className={'hover:text-[#FD8A8A]'} href={'/blog'}>Blog</Link>
                  <Link className={'hover:text-[#FD8A8A]'} href={'/career'} >Career</Link>
                  <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="flex items-center">
                          <p>Data</p>
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                              <Menu.Item>
                                  {({ active }) => (
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
                                  {({ active }) => (
                                      <Link
                                          href={'/umkm'}
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
                                  {({ active }) => (
                                      <Link
                                          href={'/umkm'}
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
                                  {({ active }) => (
                                      <Link
                                          href={'/umkm'}
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
                      <Image className={'bg-white rounded-md hover:bg-teal-500'} src={'/image/GitHub.png'} alt={'github logo'} width={100} height={100} />
              </div>
          </div>
      </nav>
      {/*<div className={'fixed bottom-0 mt-4'}>*/}
      {/*    <Foots />*/}
      {/*</div>*/}

    </>
    )
}