import Button from "../../ui/Button";

function Aboutus() {
   const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <section>
     <article className={`${className}`}>
       <h2 className="text-brand font-headings text-center my-8">about us</h2>
       <div className="md:flex items-center justify-between">
         <div className="md:hidden">
           <img src="\images\Group 26912.png" alt="" />
         </div>
         <div className=" mt-4">
           <h2 className="text-black md:text-left text-center font-semibold font-headings">
             what you
           </h2>
           <h2 className="text-brand text-center mb-3 md:text-left font-semibold font-headings">
             should know about us
           </h2>
           <p className="text-black m-auto">
             At TechEats, our mission is to revolutionize the way students
             experience meals at Tech Studio Academy. We aim to provide a
             platform for Tech Studio students to easily find and order meals
             from their favorite food vendors.
           </p>
           <br/>
           <p className="text-black m-auto">
             While ensuring that the meals are delivered in a timely and
             efficient manner while also promoting a community of food lovers
             where students can share recommendations, reviews and discovereies
           </p>
           <Button>Read More</Button>
         </div>
         <div className="hidden md:block">
           <img src="\images\Group 26912.png" alt="img" className="h-[20rem] object-cover" />
         </div>
       </div>
     </article>
   </section>
 );
}

export default Aboutus
