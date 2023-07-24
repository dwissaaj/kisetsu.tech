import Image from "next/image";

export default function Blog() {
  return (
      <div className={`flex justify-center w-screen my-4 `}>
        <div className={'grid justify-items-center p-6 bg-neutral-800 rounded-md h-screen'}>
          <div>
            <p>There is no post
              <span className={'text-red-500 uppercase border-b ml-2'}>to read

                </span></p>
          </div>
          <div>
            <Image src={'/image/gif/saku-fight.gif'} alt={'saku fight'} width={200} height={200} />
          </div>
        </div>
      </div>
  )
}
