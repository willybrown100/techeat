import React, { useContext } from 'react'
import { CartContext } from '../CartContext';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useDeleteItem() {
    const { deleteCart, getUserCart, loading } = useContext(CartContext);
  const { mutate: remove, isPending: isdeleting } = useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      toast.success("item sucessfully deleted");
    },
  });
  return {remove,isdeleting}
}
