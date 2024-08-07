import React from 'react'
import LoadingSpinner from '../ui/LoadingSpinner'

export default function MenuList({ popularMenu,render,loading}) {
  if(loading)return <LoadingSpinner/>
  return (
    <ul className='md:grid md:grid-cols-2 gap-2 lg:grid-cols-4'>
{popularMenu.map(render) }
    </ul>
  )
}
