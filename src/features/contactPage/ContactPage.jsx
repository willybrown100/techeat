import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"

function ContactPage() {
   const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <>
     <Navbar />
     <Sidebar/>
     <header className="contactHeader p-4 text-black md:text-white grid place-items-center">
       <div>
         <h1 className="font-headings text-center  font-semibold">contact US</h1>
         <p className="text-center font-body">
           Want to know more about our service or suppliers? send us a message
           below and we will get right back to you.
         </p>
       </div>
     </header>

     <section className={`${className}`}>
       <h4 className="text-black text-center font-headings font-semibold max-w-[600px] m-auto">
         Type in your Name, Email address, phone number{" "}
       </h4>
       <h4 className="text-black font-semibold text-center font font-headings">
         and we will get back to you.
       </h4>
       <form className="max-w-[600px] m-auto">
         <div className="md:flex items-center space-y-4 md:space-y-0 gap-x-1">
           <div className="flex  flex-col md:gap-y-0 w-full">
             <label className="font-headings font-semibold text-black">
               Email
             </label>
             <input
               type="email"
               placeholder="enter your email"
               className="block bg-stone-200 rounded-sm w-full p-[2px]"
             />
           </div>
           <div className="flex flex-col  md:gap-y-0 w-full">
             <label className="font-headings  capitalize font-semibold text-black">
               name
             </label>
             <input
               type="text"
               placeholder="enter your name"
               className="w-full block rounded-sm p-[2px] bg-stone-200"
             />
           </div>
         </div>

         <div className="mt-4">
           <label className="font-headings font-semibold capitalize text-black">
             message
           </label>
           <textarea
             type="text"
             name="name"
             placeholder="description"
             class="form-control"
             className="w-full block  border-0 mb-4 h-24 bg-stone-200 rounded-md  p-2 "
           />
         </div>
         <button className="bg-brand font-semibold capitalize w-full p-2 rounded-md">submit</button>
       </form>
     </section>
     <div className="bg-brand text-center p-4 py-6">
       <h2 className="font-headings font-semibold text-center">
         opening hours
       </h2>
       <p className="m-auto mb-4">
         Delivery within the academy during opening hours.
       </p>
       <span className="mb-6">MON - WED 10:00am - 4:pm.</span>
       <h5 className="my-2">closed sundays</h5>
       <span className="mt-6">THR - FRI 10:am - 4:pm</span>
       <br/>
       <span className="mt-6">SAT 11:am - 3pm</span>
     </div>
     <Footer/>
   </>
 );
}
export default ContactPage
