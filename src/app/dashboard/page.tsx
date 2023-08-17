import {getServerSession, Session} from "next-auth";
import {options} from "@/app/options";
import {redirect} from "next/navigation";
import {Poppins, Press_Start_2P} from "next/font/google";
const poppins = Poppins({weight: "300", subsets: ['latin']})
import Image from "next/image";
import UserC from "@/app/component/userC";
import React from "react";


const pressStart2P = Press_Start_2P({weight: "400", subsets: ['latin']})
export default async function Account(): Promise<JSX.Element> {
    const session = await getServerSession(options);


    if (!session) {
        redirect('/login');
    }
    return (
       <>
              <div className={'container mx-auto'}>
                  <div className={'grid grid-cols-1'}>
                      <div>
                          <div className={'grid justify-items-center'}>
                              <h1 className={`${pressStart2P.className}`}>My name is</h1>
                              <div className={'flex gap-2 justify-center items-center'}>
                                  <UserC name={session?.user?.name as string} imageUrl={session?.user?.image as string} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
       </>
    )
}