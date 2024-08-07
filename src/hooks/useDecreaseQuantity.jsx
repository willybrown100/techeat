import React from 'react'
import useUser from "./useUser";
import { useMutation } from "@tanstack/react-query";
import { CartContext } from "../CartContext";
import { decreaseCartItem, getUserCart, updateCartItem } from "../services/cart";
export default function useDecreaseQuantity() {
  const {userId}=useUser()
 const { mutate: decrease, isPending: isDcreasing } = useMutation({
   mutationFn: decreaseCartItem,
   onSuccess: () => {
     getUserCart(userId);
   },
 });
 return {decrease,isDcreasing}
}
