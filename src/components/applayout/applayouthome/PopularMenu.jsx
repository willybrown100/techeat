import React from 'react'
import Button from '../../../ui/Button'

export default function PopularMenu({item}) {
    const {img,name,vendor,ratings,price}=item
  return (
    <li className='bg-white rounded-md'>

        <img src={img} alt='img'/>
        <div className='p-2'>
        <div className='flex items-center justify-between '>
        <div className='flex text-black gap-y-2 flex-col'>
            <h4 className='text-black font-semibold font-headings mb-0'>{name}</h4>
            <p className='text-black font-semibold text-sm mb-0'>{vendor}</p>
            <img src={ratings} alt='img' className='w-[5rem]'/>
        </div>
        <span className=' text-brand font-semibold'>{price}</span>
        </div>
        <div className='flex justify-between mt-2 gap-2'>
          <button className='border-brand border text-sm capitalize p-1 text-brand rounded-md font-semibold'>add to cart</button>
          <button className="text-white text-sm capitalize bg-brand font-semibold p-1 rounded-md">order now</button>
        </div>
        </div>
    </li>
  )
}
