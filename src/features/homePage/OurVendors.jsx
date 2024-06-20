import Button from "../../ui/Button";

function OurVendors() {
   const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <section>
     <article className={`${className}`}>
       <div className="my-6">
         <div className="w-[9rem] h-[0.2rem] bg-brand m-auto"></div>
         <h3 className="text-brand my-1 font-headings font-semibold text-center">
           our vendors
         </h3>
         <div className="w-[9rem] h-[0.2rem] bg-brand m-auto"></div>
       </div>
       <div className="grid grid-cols-2 md:grid md:grid-cols-3 gap-4">
         <img src="\images\Frame 1171277093.png" alt="" />
         <img src="\images\Frame 1171277090.png" alt="" />
         <img src="\images\Frame 1171277089.png" alt="" />
         <img src="\images\Frame 1171277094.png" alt="" />
         <img src="\images\Frame 1171277096.png" alt="" />
         <img src="\images\Frame 1171277091.png" alt="" />
       </div>
       <Button>view more</Button>
     </article>
   </section>
 );
}

export default OurVendors
