import { useMutation } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { decreaseCartItem, updateCartItem } from '../../services/cart';
import { CartContext } from '../../CartContext';
import useUser from '../../hooks/useUser';
import MiniLoader from '../../ui/MiniLoader';
import toast from 'react-hot-toast';
import useIncreaseQuantity from '../../hooks/useIncreaseQuantity';
import useDecreaseQuantity from '../../hooks/useDecreaseQuantity';
import useDeleteItem from '../../hooks/useDeleteItem';
// import useIncreaseQuantity from '../../hooks/useIncreaseQuantity';

export default function CartItem({item}) {

   const [active, setActive] = useState(false);
   const { deleteCart, getUserCart, loading} = useContext(CartContext);
   const { userId } = useUser();
   const { productName, totalPrice, quantity,itemId,image,productId} = item;
   const { isIncrease, isPending } = useIncreaseQuantity();
   const  {decrease,isDcreasing}=useDecreaseQuantity()
   const {remove,isdeleting}=useDeleteItem()
   const handleActive = function (item) {
     setActive(item);
   };

   // const { isIncrease, isPending } = useIncreaseQuantity();
//   const { mutate ,isPending} = useMutation({
//     mutationFn: updateCartItem,
//     onSuccess:()=>{
// getUserCart(userId);
//     }
//   });
  // const { mutate: decrease, isPending: isDcreasing } = useMutation({
  //   mutationFn: decreaseCartItem,
  //   onSuccess: () => {
  //     getUserCart(userId);
  //   },
  // });
  // const { mutate: remove, isPending: isdeleting } = useMutation({
  //   mutationFn: deleteCart,
  //   onSuccess:()=>{
  //     toast.success("item sucessfully deleted")
  //   }
  // });

const handleIncrease = function(item){
isIncrease({ itemId });
setActive(item);
}
const handleDeacrease = function (item) {
  decrease({ itemId });
  setActive(item);
};
const handleDelete = function(){
remove(itemId);
}
  return (
    <li className=" relative">
      <button className=" top-0 right-4 absolute" onClick={handleDelete}>
        {isdeleting ? (
          <p className="text-black">..</p>
        ) : (
          <FaRegTrashCan className="text-red-500 font-semibold text-sm" />
        )}
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
                className={`text-black border ${
                  active === 2 ? "border border-stone-900 " : ""
                } border-stone-300 px-[5px] rounded-md font-semibold`}
                onClick={() => handleDeacrease(2)}
              >
                -
              </button>
              <span className="text-black font-semibold">
                {isPending || isDcreasing ? <MiniLoader /> : quantity}
              </span>
              <button
                className={`text-black border ${
                  active === 1 ? "border border-stone-900" : ""
                } rounded-md border-stone-300 px-[3px] font-semibold`}
                onClick={() => handleIncrease(1)}
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
