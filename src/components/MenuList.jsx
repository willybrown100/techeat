import React from 'react'

export default function MenuList({ popularMenu,render}) {
  return (
    <ul className='md:grid md:grid-cols-2 gap-2 lg:grid-cols-4'>
{popularMenu.map(render)}
    </ul>
  )
}
