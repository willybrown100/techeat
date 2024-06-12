function MenuItem({item}) {
 return (
  <li className="border bg-stone-50 ml-4 rounded-md">

<img src={item.img} alt="img" className="h-[15rem] object-cover"/>

<div className="p-2">
<div className="flex justify-between">
<h4 className="text-black text-xl font-semibold">{item.name}</h4>
<h4 className="text-brand font-semibold text-xl">{item.price}</h4>
</div>
<p className="text-black">{item.notes}</p>
<img src={item.ratings} alt="img" className="h-[1.5rem] my-2 w-[8rem] object-cover"/>
<div className="flex justify-between gap-2">
<button className="border-2 rounded-md text-brand capitalize p-2 border-brand">add to cart</button>
<button className="bg-brand rounded-md text-white capitalize p-2 border-brand">order now</button>
</div>
</div>
  </li>

 )
}

export default MenuItem
