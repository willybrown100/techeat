import { AiOutlineDeliveredProcedure } from "react-icons/ai";

function OurService() {
  const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <section className={`bg-black`}>
     <article
       className={`${className} gap-x-4 md:grid md:grid-cols-2 md:items-center `}
     >
       <div className="mb-4">
         <img src="\images\Group 26898.png" className="" alt="img" />
       </div>

       <div className="flex md:block items-center">
        <div>

         <h3>why should </h3>
         <h2 className="text-brand">you user our services</h2>
         <p>we always provide the bes ans fastest services for our customers</p>
        </div>
         <div className="md:inline-flex  flex-col space-y-4">
           <strong className=" items-center gap-x-2 p-2 rounded-md inline-flex  bg-white font-semibold text-black ">
             <span>
               <AiOutlineDeliveredProcedure />
             </span>
             we provide the fastest services
           </strong>
           <br />
           <strong className=" items-center bg-white p-2 rounded-md gap-x-2 font-semibold inline-flex text-black ">
               <AiOutlineDeliveredProcedure />
             no additional fees or  for orders
           </strong>
           <br/>
           <strong className=" items-center inline-flex rounded-md gap-x-2 p-2 bg-white font-semibold text text-black">
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
