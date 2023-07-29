import {getServerSession} from "next-auth";
import {options} from "@/app/options";
import {redirect} from "next/navigation";
import User from "@/app/component/user";
import {Poppins, Press_Start_2P} from "next/font/google";
import {sessions} from "@/app/dashboard/type";
const poppins = Poppins({weight: "300", subsets: ['latin']})
const pressStart2P = Press_Start_2P({weight: "400", subsets: ['latin']})
export default async function Account(): Promise<JSX.Element> {
    const session: sessions | null = await getServerSession(options);


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
                              <User user={session.user} />
                          </div>
                      </div>
                  </div>
              </div>
       </>
    )
}