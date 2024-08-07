import React from 'react'

export default function Questions({item}) {
    const {title,desc}=item
  return (
    <li className='border border-stone-400 rounded-md mb-2 p-2'>
        <h4 className='text-brand font-headings font-bold'>{title}</h4>
        <span className=' font-body text-sm text-stone-900'>{desc}</span>
    </li>
  )
}
