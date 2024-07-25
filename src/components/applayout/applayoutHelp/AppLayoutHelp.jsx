import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function AppLayoutHelp() {
   const className = "max-w-[1000px]  py-6 m-auto";
  return (
    <main className={`${className}`}>
      <h3 className="text-brand text-center font-headings font-semibold">
        how can we help?
      </h3>
      <p className="text-sm m-auto text-center mb-2 text-black">
        Find answers to your questions fast or get in touch with us
      </p>
      <form className="w-[400px] m-auto bg-stone-200 rounded-full">
        <div className="flex items-center gap-x-2  px-2 py-1 rounded-full">
          <HiMagnifyingGlass className="text-black" />
          <input
            type="text"
            className="w-full outline-none text-black bg-transparent placeholder:text-[1rem]"
            placeholder="search for answers "
          />
        </div>
      </form>
      <article className="grid grid-cols-[300px,300px,300px] items-center justify-center  my-3 gap-2">
        <div className="border text-center gap-y-2 flex py-4 flex-col justify-center rounded-md shadow-xl border-stone-600 p-2">
          <img
            src="\images\HELPIMG2.png"
            alt="img"
            className="w-[2rem] m-auto"
          />
          <h4 className="text-brand mb-0 text-[1.2rem] font-semibold font-headings">
            faq
          </h4>
          <p className="text-black ">
            Answers to our most frequently asked questions
          </p>
        </div>
        <div className="border  flex flex-col justify-center gap-y-2 py-4 text-center rounded-md shadow-xl border-stone-600 p-2">
          <img
            src="\images\helpIMG1.png"
            alt="img"
            className="w-[2rem] m-auto"
          />
          <h4 className="text-brand mb-0 font-semibold text-[1.2rem] font-headings">
            getting started
          </h4>
          <p className="text-black ">
            Get your account up and running in just few easy steps
          </p>
        </div>
        <div className="border  flex flex-col justify-center gap-y-2 text-center rounded-md shadow-xl py-4 border-stone-600 p-2">
          <img src="\images\people.png" alt="img" className="w-[2rem] m-auto" />
          <h4 className="text-brand mb-0 text-[1.2rem] font-semibold font-headings">
            account and billing
          </h4>
          <p className="text-black ">
            Manage your account, creating new users and exporting data.
          </p>
        </div>
      </article>
      
    </main>
  );
}
