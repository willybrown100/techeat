import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { products } from '../services/apiProduct'
import { useSearchParams } from 'react-router-dom';

export default function useProducts() {
  const [searchParams,setSearchParams]=useSearchParams()
      const page = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));
 
    const { data: {data:allProducts=[],lenght}={}, isLoading } = useQuery({
      queryKey: ["products",page],
      queryFn: ()=>products(page),
    });

return { allProducts,lenght, isLoading };
}
