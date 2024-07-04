import React from "react";

export default function TestimonyItem({ item }) {
  return (
    <div className="border-brand border ml-2 rounded-md h-[19rem] grid grid-rows[auto,1fr,25px] px-4">
      <img src={item.img} alt="img" className="w-[7rem] m-auto object-cover" />
      <h4 className="text-brand text-[1.5rem] text-headings font-semibold text-center">
        {item.name}
      </h4>
      <p className="text-black text-center">{item.text}</p>
      <img src={item.imgRatig} alt="img" className="w-[7rem] mx-auto" />
    </div>
  );
}
