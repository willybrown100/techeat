import React, { useContext } from 'react'
import useUser from './useUser';
import { useMutation } from '@tanstack/react-query';
import { CartContext } from '../CartContext';
import { updateCartItem } from '../services/cart';
export default function useIncreaseQuantity() {
    const { deleteCart, getUserCart, loading } = useContext(CartContext);
    const { userId } = useUser();
 const { mutate:isIncrease, isPending } = useMutation({
   mutationFn: updateCartItem,
   onSuccess: () => {
     getUserCart(userId);
   },
 });
 return { isIncrease, isPending };
}
