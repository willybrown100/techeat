import React from 'react'

export default function CartButton({children,onClick}) {
  return (
    <button
      onClick={onClick}
      className="border-brand border text-sm capitalize p-1 text-brand rounded-md font-semibold"
    >
      {children}
    </button>
  );
}
