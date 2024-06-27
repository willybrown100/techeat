import { AiFillFacebook, AiFillMail, AiFillPhone, AiOutlineFacebook } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { MdFacebook, MdOutlineFacebook } from "react-icons/md";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

function Footer() {
    const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <footer className="bg-black">
     <article className={`${className}`}>
       <div className="hidden md:flex justify-between">
         <div className="flex flex-col items-center ">
           <span className="">
             <AiFillPhone className="bg-brand w-[2rem] p-2 h-[2rem] rounded-full " />
           </span>
           <span>08085193839</span>
         </div>
         <div className="flex flex-col items-center">
           <span className="">
             <AiFillMail className="bg-brand w-[2rem] p-2 h-[2rem] rounded-full " />
           </span>
           <span>info@techstudioacademy.com</span>
         </div>
         <div className="flex flex-col items-center">
           <span className="">
             <FaMapMarkerAlt className="bg-brand w-[2rem] p-2 h-[2rem] rounded-full " />
           </span>
           <span>1 ogunlesi street onipanu, lagos</span>
         </div>
       </div>
       <div className="border-b hidden md:block my-8 mt-4"></div>
       <div className="flex flex-col md:flex-row md:gap-y-0 gap-y-8 md:flex md:justify-between gap-2">
         <div className=" flex flex-col gap-y-4 md:hidden">
           <Logo />
           <p className="text-stone-300 mt">
             1, Ogunlesi street, Awoyokun Bus Stop, <br /> Onipanu, Lagos
           </p>
         </div>
         <div className="hidden md:block">
         <Logo/>
         </div>

<div className="hidden md:block">
             <h5 className="text-brand font-headings font-semibold">company</h5>
             <ul className="text-stone-300">
               <li>
                 <Link>Home</Link>
               </li>
               <li>
                 <Link>menu</Link>
               </li>
               <li>
                 <Link>Aboutus</Link>
               </li>
               <li>
                 <Link>Contatus</Link>
               </li>
             </ul>
           </div>
           <div className="hidden md:block">
             <h5 className="text-brand font-headings font-semibold">
               opening hours
             </h5>
             <ul className="text-stone-300 capitalize flex flex-col gap-y-2">
               <li>mon-fri:6:00am-6:00pm</li>
               <li>saturday:6:00am-4:00pm</li>
               <li>sunday:closed</li>
             </ul>
           </div>

         <div className="hidden md:block">
           <h5 className="font-headings ">
             subscribe to our newsletter to get our latest meals
           </h5>
           <div>
             <p className="text-sm text-stone-300">
               get 5% off your first order just by subscribing <br /> to our
               newsletter
             </p>
           </div>
           <div className=" flex pl-[2px]">
             <input
               type="email"
               className="bg-stone-600 bg-transparent border border-stone-200 focus:border-none placeholder:capitalize placeholder:text-[1rem]"
               placeholder="enter your email"
             />
             <Button type="email">subscribe</Button>
           </div>
         </div>
         </div>



         <div className="md:hidden flex justify-between gap-2">
           <div>
             <h5 className="text-brand font-headings font-semibold">company</h5>
             <ul className="text-stone-300">
               <li>
                 <Link>Home</Link>
               </li>
               <li>
                 <Link>menu</Link>
               </li>
               <li>
                 <Link>Aboutus</Link>
               </li>
               <li>
                 <Link>Contatus</Link>
               </li>
             </ul>
           </div>
           <div>
             <h5 className="text-brand font-headings font-semibold">
               opening hours
             </h5>
             <ul className="text-stone-300 capitalize flex flex-col gap-y-2">
               <li>mon-fri:6:00am-6:00pm</li>
               <li>saturday:6:00am-4:00pm</li>
               <li>sunday:closed</li>
             </ul>
           </div>
         </div>

         <div className="mt-6 md:hidden">
           <h5>subscribe to our newsletter</h5>
           <form>
             <div className="flex border border-white justify-between rounded-md p-1">
               <input type="text" className="w-full bg-transparent " />
               <button className="text-lg rounded-tr-md rounded-br-md bg-brand p-1 px-2 font-semibold">
                 subscribe
               </button>
             </div>
           </form>
           <div className="border-b border-stone-200 md:hidden my-12 mt-4"></div>
         </div>
       

       <div className="md:hidden flex gap-y-6 flex-col justify-center text-stone-200 items-center">
         <div>
           <div className="flex justify-between gap-x-3 px-12">
             <h4>privacy policy</h4>
             <h4>terms of use</h4>
           </div>
           <h5 className="text-center text-lg capitalize text-stone-200">
             copyright 2024 TechEat,all rights reserved
           </h5>
         </div>
         <ul className="flex justify-between gap-x-2">
           <li>
             <Link>
               <FaFacebookF className="bg-white text-black p-2 w-[2rem] h-[2rem] rounded-full" />
             </Link>
           </li>
           <li>
             <Link>
               <FaSquareInstagram className="bg-white text-black p-2 w-[2rem] h-[2rem] rounded-full" />
             </Link>
           </li>
           <li>
             <Link>
               <FaSquareTwitter className="bg-white text-black p-2 w-[2rem] h-[2rem] rounded-full" />
             </Link>
           </li>
           <li>
             <Link>
               <FaLinkedinIn className="bg-white text-black p-2 w-[2rem] h-[2rem] rounded-full" />
             </Link>
           </li>
         </ul>
       </div>

       <div className="md:flex mt-[10rem] hidden text-stone-300 justify-between">
         <p className="text-white">
           copyright 2024 TechEat,All Rights reserved.
         </p>
         <ul className="flex justify-between gap-x-2">
           <li>
             <Link>
               <FaFacebookF className="bg-white text-black p-2 w-[2rem] h-[2rem] rounded-full" />
             </Link>
           </li>
           <li>
             <Link>
               <FaSquareInstagram className="bg-white text-black p-2 w-[2rem] h-[2rem] rounded-full" />
             </Link>
           </li>
           <li>
             <Link>
               <FaSquareTwitter className="bg-white text-black p-2 w-[2rem] h-[2rem] rounded-full" />
             </Link>
           </li>
           <li>
             <Link>
               <FaLinkedinIn className="bg-white text-black p-2 w-[2rem] h-[2rem] rounded-full" />
             </Link>
           </li>
         </ul>
         <p>privacy policy</p>
         <p>terms of use</p>
       </div>
     </article>
   </footer>
 );
}

export default Footer
