import {getServerSession,} from "next-auth";
import {options} from "@/app/options";
import {redirect} from "next/navigation";
import { Press_Start_2P} from "next/font/google";
import React from "react";
import Logout from "@/app/dashboard/logout";
import Image from "next/image";



const pressStart2P = Press_Start_2P({weight: "400", subsets: ['latin']})
export default async function Dashboard(): Promise<JSX.Element> {
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
                                  <Image src={`${session?.user?.image}`} alt={`${session?.user?.name}`} width={400} height={400}  />
                              </div>
                          </div>
                      </div>
                      <div>
                            <Logout />
                      </div>
                  </div>
              </div>
       </>
    )
}