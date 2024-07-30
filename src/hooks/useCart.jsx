import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUserCart } from '../services/cart'

export default function useCart() {
const {data={},isLoading}=useQuery({
    queryKey:["cart"],
    queryFn:getUserCart
})
return { data, isLoading };
}
