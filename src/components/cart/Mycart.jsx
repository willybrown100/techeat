
import React from 'react'
import Button from '../../ui/Button';

export default function Mycart() {
  return (
    <div className="bg-white">
      <h4 className="text-black mt-2 font-semibold ml-2">my orders</h4>
      <div className="  p-2 h-[90vh] grid place-items-center ">
        <div>
          <img
            src="\images\Basket_alt_3_fill.png"
            alt="img"
            className="w-[5rem] m-auto"
          />
          <h4 className='text-black text-center font-headings'>your cart is empty</h4>
          <p className="mb-0 text-sm text-stone-400">
            Looks like you haven’t added a meal to your cart
          </p>

          <div className="flex justify-center">
            <Button className="text-white">back to menu</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
