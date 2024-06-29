import Button from "../../ui/Button";

function OurVendors() {
   const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <section>
     <article className={`${className}`}>
       <div className="my-6">
         <div className="w-[9rem] h-[0.2rem] bg-brand m-auto"></div>
         <h3 className="text-brand my-1 font-headings  font-semibold text-center">
           our vendors
         </h3>
         <div className="w-[9rem] h-[0.2rem] bg-brand m-auto"></div>
       </div>

       <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
         <div className=" group md:h-[25rem] relative ">
           <img
             src="/images/korede.png"
             alt="img"
             className=" w-full rounded-md h-auto md:h-[25rem] object-cover  "
           />
           <div className="absolute rounded-bl-[0.375rem] rounded-br-md flex items-center justify-center group-hover:h-[20%] bottom-0 right-0 left-0 bg-brand overflow-hidden w-full h-[0] transition-all ease-in-out">
             <h3 className="mb-0 text-2xl md:text-[2rem]  font-headings font-semibold text-center text-white">
               korede spagheti
             </h3>
           </div>
         </div>

         <div className=" group  md:h-[25rem] relative ">
           <img
             src="\images/betty.png"
             alt="img"
             className="block rounded-md w-full h-auto md:h-[25rem] object-cover"
           />
           <div className="absolute rounded-bl-[0.375rem] rounded-br-md flex items-center justify-center group-hover:h-[20%] bottom-0 right-0 left-0 bg-brand overflow-hidden w-full h-[0] transition-all ease-in-out">
             <h3 className="mb-0 text-2xl md:text-[2rem] font-headings font-semibold text-center text-white">
               food by betty
             </h3>
           </div>
         </div>
         <div className=" group  md:h-[25rem] relative ">
           <img
             src="/images/gracekitchen.png"
             alt="img"
             className="block rounded-md h-auto w-full md:h-[25rem] object-cover"
           />
           <div className="absolute rounded-bl-[0.375rem] rounded-br-md flex items-center justify-center group-hover:h-[20%] bottom-0 right-0 left-0 bg-brand overflow-hidden w-full h-[0] transition-all ease-in-out">
             <h3 className="mb-0 font-headings text-2xl md:text-[2rem]  font-semibold text-center text-white">
               grace kitchen
             </h3>
           </div>
         </div>
         <div className=" group md:h-[25rem]  relative ">
           <img
             src="\images/riks.png"
             alt="img"
             className="block rounded-md h-auto w-full md:h-[25rem] object-cover"
           />
           <div className="absolute rounded-bl-[0.375rem] rounded-br-md flex items-center justify-center group-hover:h-[20%] bottom-0 right-0 left-0 bg-brand overflow-hidden w-full h-[0] transition-all ease-in-out">
             <h3 className="mb-0 font-headings text-2xl md:text-[2rem]  capitalize font-semibold text-center text-white">
               rikks delight
             </h3>
           </div>
         </div>
         <div className=" group md:h-[25rem]  relative ">
           <img
             src="\images/happy.png"
             alt="img"
             className="block h-auto rounded-md w-full md:h-[25rem] object-cover"
           />
           <div className="absolute rounded-bl-[0.375rem] rounded-br-md flex items-center justify-center group-hover:h-[20%] bottom-0 right-0 left-0 bg-brand overflow-hidden w-full h-[0] transition-all ease-in-out">
             <h3 className="mb-0 text-2xl md:text-[2rem]  font-headings font-semibold text-center text-white">
               happy meals
             </h3>
           </div>
         </div>
         <div className=" group md:h-[25rem]  relative ">
           <img
             src="\images/aris.png"
             alt="img"
             className="block rounded-md w-full h-auto md:h-[25rem] object-cover  "
           />
           <div className="absolute rounded-bl-[0.375rem] rounded-br-md flex items-center justify-center group-hover:h-[20%] bottom-0 right-0 left-0 bg-brand overflow-hidden w-full h-[0] transition-all ease-in-out">
             <h3 className="mb-0 text-2xl md:text-[2rem]  font-headings capitalize font-semibold text-center text-white">
               ari's pastries
             </h3>
           </div>
         </div>
       </div>
       <Button>view more</Button>
     </article>
   </section>
 );
}

export default OurVendors
