import Image from 'next/image'
import Navi from "@/app/component/navi";
import Blog from "@/app/blog/page";

export default function Home() {
  return (
      <div className={'p-2 mt-4 flex flex-col w-screen justify-start'}>
          <div className={'w-full m-2'}>
              <h1 className={'text-5xl font-semibold'}>Lets Produce Something</h1>
          </div>
          <div className={'flex flex-nowrap overflow-x-auto'}>
              <div className={'w-[300px] snap-x snap-center bg-green-500 p-2 flex-none'}>
                  <p>content here</p>
              </div>
              <div className={'w-[300px] snap-x snap-center bg-red-500 p-2 flex-none'}>
                  <p>content here</p>
              </div>
              <div className={'w-[300px] snap-x snap-center bg-orange-500 p-2 flex-none'}>
                  <p>content here</p>
              </div>
              <div className={'w-[300px] snap-x snap-center bg-pink-500 p-2 flex-none'}>
                  <p>content here</p>
              </div>
              <div className={'w-[300px] snap-x snap-center bg-sky-500 p-2 flex-none'}>
                  <p>content here</p>
              </div>
          </div>
      </div>
  )
}
