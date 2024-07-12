import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { submitContact } from "../../services/contactApi";
import toast from "react-hot-toast";

function ContactPage() {
   const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
   const {register,reset,handleSubmit}=useForm()
   const {mutate,isPending}= useMutation({
     mutationFn:submitContact,
     onSuccess :(data)=>{
      console.log(data)
      
       toast.success("your details have been succesfully submited")
     
    },
    onError:()=>{
      toast.error("details could'nt be submitted")
    }
  })
  const onSubmit = function(data){
   mutate(data,{onSettled:()=>reset()})
   console.log(data)

  }
 return (
   <>
     <header className="contactHeader p-4 text-black md:text-white grid place-items-center">
       <div>
         <h1 className="font-headings text-center text-brand md:text-white text-[1.9rem] md:text-[3rem] font-semibold">
           contact US
         </h1>
         <p className="text-center text-black md:text-white font-body">
           Want to know more about our service or suppliers? send us a message
           below and we will get right back to you.
         </p>
       </div>
     </header>

     <section className={`${className}`}>
       <h4 className="text-black text-center mb-2 hidden md:block font-headings font-semibold max-w-[600px] m-auto">
         Type in your Name, Email address, phone number{" "}
       </h4>
       <h4 className="text-black mb-4 hidden md:block font-semibold text-center font font-headings">
         and we will get back to you.
       </h4>
       <form
         onSubmit={handleSubmit(onSubmit)}
         className="max-w-[650px] rounded-md md:border-stone-800 md:border-[1px] md:px-8 md:p-4 m-auto"
       >
         <div className="md:flex items-center space-y-4 md:space-y-0 gap-x-1">
           <div className="flex  flex-col md:gap-y-0 w-full">
             <label className="font-headings font-semibold text-black">
               Email
             </label>
             <input
               type="email"
               placeholder="enter your email"
               id="email"
               {...register("email")}
               className="block bg-stone-200 text-black placeholder:pl-4 placeholder:text-[0.9rem] capitalize rounded-sm w-full md:p-[4px] p-[8px]"
             />
           </div>
           <div className="flex flex-col  md:gap-y-0 w-full">
             <label className="font-headings  capitalize font-semibold text-black">
               name
             </label>
             <input
               type="text"
               id="name"
               {...register("name")}
               placeholder="enter your name"
               className="w-full block placeholder:pl-4 text-black placeholder placeholder:text-[0.9rem] capitalize rounded-md md:p-[4px] p-[8px] bg-stone-200"
             />
           </div>
         </div>

         <div className="mt-4">
           <label className="font-headings font-semibold capitalize text-black">
             message
           </label>
           <textarea
             type="text"
             id="message"
             {...register("message")}
             placeholder="enter your message"
             className="w-full block text-black placeholder:text-[0.9rem] capitalize placeholder:pl-4 placeholder  border-0 mb-4 h-24 bg-stone-200 rounded-md  p-2 "
           />
         </div>
         <button className="bg-brand font-semibold capitalize w-full p-2 rounded-md">
           submit
         </button>
       </form>
     </section>
     <div className=" bg-brand text-center p-4 py-6">
       <h2 className="font-headings font-semibold text-center">
         opening hours
       </h2>
       <p className="text-stone-100 m-auto mb-4">
         Delivery within the academy during opening hours.
       </p>
       <span className=" text-stone-100 mb-6">MON - WED 10:00am - 4:pm.</span>
       <h5 className=" text-stone-100 my-2">closed sundays</h5>
       <span className="text-stone-100 mt-6">THR - FRI 10:am - 4:pm</span>
       <br />
       <span className=" text-stone-100 mt-6">SAT 11:am - 3pm</span>
     </div>
   </>
 );
}
export default ContactPage
