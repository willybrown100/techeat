import React from 'react'
import Button from "../../ui/Button"

export default function AppLayoutSettings() {
  const className = "max-w-[1000px]  py-10 m-auto";
  return (
    <main className={`${className}`}>
      <h3 className="text-brand font-headings font-semibold">account</h3>
      <div className="flex items-center">
        <div className="relative  rounded-full">
          <img
            src="/images/avatar.png"
            alt="img"
            className=" w-[8rem] h-[8rem] border-brand rounded-full "
          />
          <button className='absolute bottom-1 left-[6rem]'>
            <img src='/images/usericon.png' alt='img'/>
          </button>
        </div>
      </div>
      <form className="">
        <div className="grid grid-cols-2 my-5  gap-y-20 gap-4">
          <div className="flex flex-col">
            <label className="capitalize font-semibold rounded-md text-black">
              first name
            </label>
            <input
              type="text"
              placeholder=""
              className="outline-brand p-1 rounded-md border-stone-600 border-[1px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="capitalize font-semibold rounded-md text-black">
              last name
            </label>
            <input
              type="text"
              placeholder=""
              className="outline-brand p-1 rounded-md border-stone-600 border-[1px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="capitalize font-semibold text-black">email</label>
            <input
              type="text"
              placeholder="+234"
              className="outline-brand placeholder:text-[1rem] p-1 rounded-md border-stone-600 border-[1px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="capitalize font-semibold text-black">
              phone number
            </label>
            <input
              type="text"
              placeholder="+234"
              className="outline-brand placeholder:text-[1rem] p-1 rounded-md border-stone-600 border-[1px]"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="capitalize font-semibold text-black">
              password
            </label>
            <input
              type="email"
              placeholder=""
              disabled
              className="outline-brand p-1 rounded-md border-stone-600 border-[1px]"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="capitalize font-semibold text-black">
              delivery address
            </label>
            <input
              type="text"
              placeholder=""
              className="outline-brand p-1 rounded-md border-stone-600 border-[1px]"
            />
          </div>
        </div>

        <div className="flex gap-x-3 justify-center items-center">
          <button className=" rounded-md px-6 p-1 capitalize border border-brand  text-red-500">
            <span>delete account</span> <span></span>
          </button>
        </div>
      </form>
    </main>
  );
}
