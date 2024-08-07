import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2';
import QuestionList from './QuestionList';
import Questions from './Questions';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const questions = [
  {
    title: "what is tech eat",
    desc: "Tech eat is a food ordering web app, designed for tech studio students and staffs it allows    you to browse a curated menu, place orders, and enjoy delicious meals delivered to you.",
  },
  {
    title: "How do i place an order?",
    desc: "To place an order simply visit the techeats website, browse the menu select your desired items and proceed to checkout You’ll receive a confirmation and estimated delivery time",
  },
  {
    title: "What payment methods are accepted?",
    desc: " Techeat accepts payment through paystack a secure and reliable payment platform that supports variuos payment methods including bank cards and mobile payments",
  },
  {
    title: "Is Techeat available on mobile devices?",
    desc: "Yes, techeat is accessible via any web browser on your desktop, tablet, or smartphone",
  },
  {
    title: "Are there any promotions or discounts available?",
    desc: "To support our students vendors, we charge a minimal service fee for delivery. The applicable fee will be displayed at checkout. ",
  },


];

export default function AppLayoutHelp() {
  const {pathname}=useLocation()
  const navigate = useNavigate()
   const className = "max-w-[1100px]  py-6 m-auto";
   console.log(pathname)
   const handleClick = function(){
    navigate("faq")
   }
  return (
    <>
      {pathname === "/applayout/help" ? (
        <main className={`${className}`}>
          <h3 className="text-brand text-center font-headings font-semibold">
            how can we help?
          </h3>
          <p className="text-sm m-auto text-center mb-2 text-black">
            Find answers to your questions fast or get in touch with us
          </p>

          <article className="grid grid-cols-[300px,300px,300px] items-center justify-between  my-3 gap-2">
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
              <img
                src="\images\people.png"
                alt="img"
                className="w-[2rem] m-auto"
              />
              <h4 className="text-brand mb-0 text-[1.2rem] font-semibold font-headings">
                account and billing
              </h4>
              <p className="text-black ">
                Manage your account, creating new users and exporting data.
              </p>
            </div>
          </article>
          <div className="mt-16">
            <h3 className="font-headings mb-4 font-semibold text-brand">
              frequently asked questions
            </h3>
            <QuestionList
              questions={questions}
              render={(item) => <Questions item={item} key={item._id} />}
            />

            <button onClick={handleClick} className="bg-brand mt-8 capitalize flex items-center gap-x-2 p-3 px-5 rounded-md">
           
              <span>read more</span>
              <img src="/images/arrow2.png" alt="img" className="w-5 " />
            </button>
          </div>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
