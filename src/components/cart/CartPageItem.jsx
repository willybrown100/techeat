import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6';
import { formatter } from '../../utils/currencyFormatter';
import useIncreaseQuantity from '../../hooks/useIncreaseQuantity';
import useDecreaseQuantity from '../../hooks/useDecreaseQuantity';
import useDeleteItem from '../../hooks/useDeleteItem';
import MiniLoader from '../../ui/MiniLoader';

export default function CartPageItem({item}) {
    const {totalPrice,productName,image,quantity,itemId}=item
    // console.log(item)
    console.log(totalPrice)
    const {isIncrease,isPending}=useIncreaseQuantity()
    const {decrease,isDcreasing}=useDecreaseQuantity()
    const {remove,isdeleting}=useDeleteItem()


const handleIncrease = function () {
  isIncrease({ itemId });
};
const handleDeacrease = function () {
  decrease({ itemId });
};
const handleDelete = function () {
  remove(itemId);
};

  return (
    <li className="bg-white shadow-lg px-20 p-4 rounded-md">
      <div className="flex items-center justify-between ">
        <div className="flex gap-x-2 items-center ">
          <img src={image} alt="img" className="w-[5rem] h-[5rem] object-cover" />
          <div className="flex flex-col ">
            <span className="text-black font-headings font-semibold">
              {productName}
            </span>
            <span className="text-black font-body text-sm ">vendorname</span>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <button onClick={handleDeacrease} className="border border-stone-300 rounded-md px-2">-</button>
          <span className="font-semibold">{isPending||isDcreasing?<MiniLoader/>:quantity}</span>
          <button onClick={handleIncrease} className="border border-stone-300 rounded-md px-2">+</button>
        </div>
        <h5 className="font-semibold">{formatter.format(totalPrice)}</h5>
        <button onClick={handleDelete}>
         {isdeleting?<MiniLoader/>: <FaRegTrashCan className="text-red-500" />}
        </button>
      </div>
    </li>
  );
}
 