import Image from "next/image";

export default function Career() {
    return (
        <div className={`flex justify-center w-screen mt-8 `}>
           <div className={'grid justify-items-center p-6 bg-neutral-800 rounded-md '}>
               <div>
                   <p>Sorry this page still under
                       <span className={'text-amber-500 uppercase border-b ml-2'}>construction

                </span></p>
               </div>
               <div>
                   <Image className={''} src={'/image/gif/saku-wink.gif'} alt={'saku wink'} width={200} height={200} />
               </div>
           </div>
        </div>
    )
}