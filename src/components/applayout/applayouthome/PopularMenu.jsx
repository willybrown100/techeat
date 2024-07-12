import React from 'react'
import Button from '../../../ui/Button'
import CartButton from '../../cart/CartButton'

export default function PopularMenu({item}) {
    const {img,name,vendor,ratings,price}=item
    const handleAddItem = function(){
      console.log(name)
    }
  return (
    <li className='bg-white rounded-md'>

        <img src={img} alt='img' className='rounded-tl-md rounded-tr-md'/>
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
          <CartButton onClick={handleAddItem} >add to cart</CartButton>
          <button className="text-white text-sm capitalize bg-brand font-semibold p-1 rounded-md">order now</button>
        </div>
        </div>
    </li>
  )
}
