import { useMutation } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { decreaseCartItem, updateCartItem } from '../../services/cart';
import { CartContext } from '../../CartContext';
import useUser from '../../hooks/useUser';
import MiniLoader from '../../ui/MiniLoader';

export default function CartItem({item}) {
const { deleteCart, getUserCart, loading} = useContext(CartContext);
  const { userId } = useUser();
  const { productName, totalPrice, quantity,itemId,image,productId} = item;

  const { mutate ,isPending} = useMutation({
    mutationFn: updateCartItem,
    onSuccess:()=>{
getUserCart(userId);
    }
  });
  const { mutate: decrease, isPending: isDcreasing } = useMutation({
    mutationFn: decreaseCartItem,
    onSuccess: () => {
      getUserCart(userId);
    },
  });
  const { mutate: remove, isPending: isdeleting } = useMutation({
    mutationFn: deleteCart,
  });

const handleIncrease = function(){
mutate({ itemId});

}
const handleDeacrease = function(){
decrease({ itemId });
}
const handleDelete = function(){
remove({ itemId,productId });
}
  return (
    <li className=" relative">
      <button
        className=" top-1 bottom-[15rem] right-4 absolute"
        onClick={handleDelete}
      >
        <FaRegTrashCan className="text-red-500 font-semibold text-sm" />
      </button>
      <div className="flex items-center gap-4  ">
        <img
          src={image}
          alt="productimg"
          className="h-[4rem] w-[4rem] object-cover"
        />

        <div className="grid grid-cols-[104px,1fr] items-center gap-x-3">
          <div className="flex flex-col items-center  ">
            <h5 className="text-black  text-sm  capitalize mb-0 font-semibold">
              {productName}
            </h5>
            <div className="space-x-2 flex items-center">
              <button
                className="text-black font-semibold"
                onClick={handleDeacrease}
              >
                -
              </button>
              <span className="text-black font-semibold">
                {isPending || isDcreasing? <MiniLoader/> : quantity}
              </span>
              <button
                className="text-black border font-semibold"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
          <span className="text-black font-semibold">#{totalPrice}</span>
        </div>
      </div>
    </li>
  );
}
