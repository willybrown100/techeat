const menu = [
    {img:""}
]

function Menu() {
    const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
  <section className="text-black">
    <header className="bg-black relative items-center flex  gap-x-60 justify-between  overflow-hidden h-[40vh]">
<img src="/images\Ellipse 2056.png" alt="img" className="absolute top-[-0.03rem] w-24"/>
             
<img src="/images\Ellipse 2058.png" alt="img" className="absolute w-28 bottom-[-0.01rem]  left-[50%]"/>

<div className=" m-auto max-w-[570px]">
    <h3 className="font-headings text-white">Save Big And Enjoy Up To 20% <br/> incredible Discount </h3>
    <p>Don’t miss out on these incredible discount off <br/> on selected menu items!</p>
    <button className="bg-brand text-white font-semibold p-2 rounded-md">order now</button>
</div>
<div>
    <img src="/images/menuIMG.png" alt="img" className="w-[27rem]  h-full flex-1"/>
</div>
    </header>
 <article className={`${className}`}>

 </article>
  </section>
 )
}

export default Menu
