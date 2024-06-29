import { AiOutlineDeliveredProcedure } from "react-icons/ai";

function OurService() {
  const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <section className={`bg-black`}>
     <article
       className={`${className} md:gap-x-8 md:grid md:grid-cols-2 md:items-center `}
     >
       <div className="mb-4">
         <img src="\images\Group 26898.png" className="" alt="img" />
       </div>

       <div className=" text-center md:text-left md:block gap-1 items-center">
         <div>
           <h2 className="font-headings sm:text-[2.6rem] mb-0 text-[1.6rem] md:mb-2  font-semibold ">
             why should
           </h2>
           <h3 className="text-brand w-full  font-headings   md:mb-auto font-semibold ">
             you use our services?
           </h3>
           <p className="hidden md:block text-sm sm:text-lg max-w-[12rem] md:max-w-[35rem] md:text-lg">
             we always provide the best and fastest services for our customers
           </p>
         </div>
         <div className="md:inline-flex  flex-col space-y-4">
           <strong className="text-sm items-center gap-x-1 p-1 md:text-[1rem] md:px-4 md:gap-x-2 md:p-2 rounded-md inline-flex  bg-white font-semibold text-black ">
             <span>
               <AiOutlineDeliveredProcedure />
             </span>
             we provide the fastest services
           </strong>
           <br />
           <strong className="text-sm items-center bg-white p-1 md:text-[1rem] md:px-4 md:p-2 rounded-md gap-x-2 font-semibold inline-flex text-black ">
             <AiOutlineDeliveredProcedure />
             no additional fees or for orders
           </strong>
           <br />
           <strong className=" items-center inline-flex rounded-md gap-x-2 p-1 md:p-2 md:px-4  md:text-[1rem]  bg-white font-semibold text text-black">
             <AiOutlineDeliveredProcedure />
             fast and reliable delivery
           </strong>
         </div>
       </div>
     </article>
   </section>
 );
}

export default OurService
