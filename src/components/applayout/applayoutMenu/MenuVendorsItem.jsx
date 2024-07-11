import React from 'react'

export default function MenuVendorsItem({item}) {
    const { img, vendorName } = item;
  return (
    <div className=" rounded-[1rem] pl-2 ">
      <div className=" relative">
        <img
          src={img}
          alt="img"
          className="rounded-md h-[11rem] object-cover"
        />
        <div className=" d  transition-all duration-300 flex justify-center rounded-bl-md rounded-br-md  p-2 right-0  left-0 bottom-0 absolute  ">
          <h4 className="mb-0 text-white font-semibold">{vendorName}</h4>
        </div>
      </div>
    </div>
  );
}
