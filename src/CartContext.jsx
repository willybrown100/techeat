import React, { createContext, useState } from 'react'
import useUser from './hooks/useUser';


export const CartContext = createContext()

export default function CartProvider({children}) {
    const { userId } = useUser();
    const [loading,setLoading]=useState(false)
const [cart, setCart] = useState(null);
// const cartid = cart
console.log(cart, loading);
const [refetch, setRefetch] = useState(false);

 async function addToCart({
  userId,
  _id: productId,
  name: productName,
  price,
  quantity,
  image,
}) {
  console.log(userId, productId,loading, productName, price, quantity, image);

  try {
  
    const response = await fetch(
      "https://techeat-server-1.onrender.com/api/products/add-cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          productId,
          productName,
          price,
          quantity,
          image,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    getUserCart(userId)

    return data;
  } catch (error) {
    console.log(error);
  }
}

    async function getUserCart(userId) {
      try {
          setLoading(true);
        const response = await fetch(
          `https://techeat-server-1.onrender.com/api/products/carts/${userId}`
        );
        const data = await response.json();

        console.log(data);
        setCart(data?.cart);

        return data;
      } catch (error) {
        console.log(error);
      }finally{
          setLoading(false);
      }
    }
  async function deleteCart({itemId:cartId,productId}) {
    console.log(cartId,productId)
    try {
      const response = await fetch(
        `https://techeat-server-1.onrender.com/api/products/remove-cart`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartId, productId }),
        }
      );
      const data = await response.json();

      console.log(data);
      setCart(data?.cart);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CartContext.Provider
      value={{ cart, setCart, refetch, addToCart, setRefetch,deleteCart,getUserCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
