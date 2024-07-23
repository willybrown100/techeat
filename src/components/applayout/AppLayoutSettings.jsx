import React from 'react'
import Button from "../../ui/Button"

export default function AppLayoutSettings() {
  const className = "max-w-[1000px]  py-10 m-auto";
  return (
    <main className={`${className}`}>
      <h3 className="text-brand font-headings font-semibold">account</h3>
      <div className="flex items-center">
        <div className="border-brand border-[1px] w-[8rem]">
          <img
            src="/images/avatar.png"
            alt="img"
            className="w-full border-brand "
          />
        </div>
        <form>
          <input
            type="file"
            accept="image"
            id="file"
            className="placeholder:text-transparent text-transparent"
          />
        </form>
        <button className="text-brand border-brand border-[1px] p-2 rounded-md capitalize ">
          delete avatar
        </button>
      </div>
      <form className="">
        <div className="grid grid-cols-2 my-5  gap-y-20 gap-4">
          <div className="flex flex-col">
            <label className="capitalize font-semibold text-black">name</label>
            <input
              type="text"
              placeholder=""
              className="outline-brand p-1 rounded-sm border-brand border-[1px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="capitalize font-semibold text-black">
              phone number
            </label>
            <input
              type="number"
              placeholder="+234"
              className="outline-brand placeholder:text-[1rem] p-1 rounded-sm border-brand border-[1px]"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="capitalize font-semibold text-black">email</label>
            <input
              type="email"
              placeholder=""
              disabled
              className="outline-brand p-1 rounded-sm border-brand border-[1px]"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="capitalize font-semibold text-black">
              password
            </label>
            <input
              type="text"
              placeholder=""
              className="outline-brand p-1 rounded-sm border-brand border-[1px]"
            />
          </div>
        </div>
          <div className="flex flex-col my-12 gap-y-2">
            <label className="capitalize font-semibold text-black">
              delivery address
            </label>
            <input
              type="text"
              placeholder=""
              className="outline-brand w-f p-1 rounded-sm border-brand border-[1px]"
            />
          </div>
          <div className='flex flex-col '>
          <button className='text-brand capitalize font-semibold text-left'>delete your account</button>
          <span className='text-sm capitalize mb-2 text-black'>by deleting your account you will loose all your data</span>
          </div>
          <div className='flex gap-x-3 items-center'>
<button type='reset' className='bg-stone-300 rounded-md font-semibold px-6 p-1 text-brandhover capitalize'>cancel</button>
<button className=' rounded-md px-6 p-1 capitalize bg-brandhover text-white'>save</button>
          </div>
      </form>
    </main>
  );
}
