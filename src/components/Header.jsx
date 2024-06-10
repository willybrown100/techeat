function Header() {

 
  const className = "max-w-[1170px] w-[85vw] py-4 m-auto";
 return (
   <header className="h-[100vh] relative overflow-hidden bg-black">
     <article className={`${className}`}>
       <div>
         <h3 className="text-white mb-4 font-headings">the best food</h3>
         <h2 className="font-headings  mb-4 text-brand">of your choice</h2>
         <p className="font-body">
           Explore the food menu to place your orders and get it delivered to
           your doorstep in a jiffy!
         </p>
         <button className="capitalize bg-brand rounded-md p-2 font-semibold">
           order now
         </button>
       </div>
     </article>
   </header>
 );
}

export default Header
