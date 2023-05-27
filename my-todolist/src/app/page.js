import { React } from 'react';
import './globals.css';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full w-full  p-2">
      <div className=' main-interface relative overflow-hidden w-[80%] h-[100px] rounded-md p-2 bg-vio-gray-600'>
        <div className='oval-bg w-full h-full z-0 -rotate-12 scale-125 rounded-t-[50%] translate-x-16 bg-vio-gray-500 absolute right-0 bottom-[-80px]'></div>
        <div className='wrapper h-full w-full'>
          <h1 className='uppercase text-xl text-white t indent-5'>Add To do :</h1>
          <div className='user-action w-full h-full flex z-100'>
            <input type='text' className='z-100'></input>
          </div>
        </div>
      </div>
    </main >
  )
}
