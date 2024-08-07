import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../CartContext';
import useUser from '../../hooks/useUser';
import CartPageItem from './CartPageItem';
import Summary from '../../ui/Summary';

export default function CartPage() {
  const { userId } = useUser();
  const { cart, setCart, getUserCart, loading } = useContext(CartContext);
  const totalCost = cart?.reduce((acc, product) => acc + product.totalPrice, 0);
  console.log(totalCost);
  console.log(cart);

  useEffect(() => {
    getUserCart(userId);
  }, [userId, getUserCart]);

  return (
    <div className='text-black md:grid grid-cols-[1fr,18rem]'>
        <div className='p-6'>
        <h3 className='text-black'>my orders</h3>
        <ul className='flex flex-col gap-5'>
            {cart?.map((item)=><CartPageItem item={item}/>)}
        </ul>
        </div>
        <Summary/>
    </div>
  )
}
