import Button from "../ui/Button";

function PageNotFound() {
    const className = "max-w-[1170px]   w-[90vw]  m-auto";
 return (
   <main
     className={`grid text-black place-items-center h-[100vh] ${className}`}
   >
     <div className="md:flex justify-between items-center gap-2">
       <div className="text-black ">
         <h2 className="uppercase font-semibold font-headings text-black ">404 error</h2>
         <h3 className="text-black font-semibold font-headings">
           We can’t seem to find the page that you were looking for.{" "}
         </h3>
         <p className="text-black font-body">
           Feel free to choose one of our hosting products below.{" "}
         </p>
         <Button className="text-white">back to home</Button>
       </div>
       <div>
         <img src="\images\Saly-38.png" alt="img" />
       </div>
     </div>
   </main>
 );
}

export default PageNotFound
