import React, { useContext } from 'react'
import { formatter } from '../utils/currencyFormatter';
import { CartContext } from '../CartContext';

export default function Summary() {
    const { cart, setCart, getUserCart, loading } = useContext(CartContext);
    const totalCost = cart?.reduce(
      (acc, product) => acc + product.totalPrice,
      0
    );
  return (
    <div className=" bg-white p-3 h-full mt-5 rounded-tl-md m-4 rounded-tr-md">
      <div className="divide-y-2  divide-stone-500">
        <h3 className="text-black mt-9 font-headings  font-semibold tracking-wide text-[1.5rem]">
          order summary
        </h3>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-stone-700 capitalize font-semibold">
              sub total
            </span>
            <span className="text-black"> {formatter.format(totalCost)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-700 capitalize font-semibold">
              discount{" "}
            </span>
            <span className="text-black font-semibold">500</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-black capitalize font-semibold">
            total cost
          </span>
          <span className="text-black font-semibold">
            {formatter.format(totalCost)}
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <button
          //   onClick={handleClick}
          className="bg-brand text-center capitalize font-semibold text-white rounded-md p-2"
        >
          checkout
        </button>
        <button className="shadow-lg text-brand capitalize font-semibold p-2 rounded-md">
          clear order
        </button>
      </div>
    </div>
  );
}
