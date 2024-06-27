import React from 'react'

export default function ValueItem({item}) {
  return (
    <li className='bg-brand p-4 mr-8 h-[14rem] grid-rows-[auto,auto,1fr]'>
<img src={item.img} alt={item.title} className='h-[4rem] object-cover w-[3em] m-auto '/>
<div className='text-center'>
<h3 className='font-semibold font-headings'>{item.title}</h3>
<p >{item.text}</p>
</div>
    </li>
  )
}
