import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { products } from '../services/apiProduct'

export default function useProducts() {
    const { data: allProducts=[], isLoading } = useQuery({
      queryKey: ["products"],
      queryFn: products,
    });

return { allProducts, isLoading };
}
