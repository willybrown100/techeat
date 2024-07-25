import React from 'react'

export default function CartModal({ perItem }) {
  const { name,vendor,price } = perItem;
  // console.log(name);
  return (
    <div className="fixed top-[50%] bg-slate-50 p-8 left-[50%] translate-x-[-50%] text-red-500">
     {name}
    </div>
  );
}
