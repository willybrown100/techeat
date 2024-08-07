import React, { createContext, useState } from 'react'
import useUser from './hooks/useUser';


export const CartContext = createContext()

export default function CartProvider({children}) {
    const { userId } = useUser();
    const [loading,setLoading]=useState(false)
const [cart, setCart] = useState(null);
// const cartid = cart

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
      "https://techeat-server.onrender.com/api/products/add-cart",
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
          `https://techeat-server.onrender.com/api/products/carts/${userId}`
        );
        const data = await response.json();

       
        setCart(data?.cart);

        return data;
      } catch (error) {
        console.log(error);
      }finally{
          setLoading(false);
      }
    }


  async function deleteCart(itemId) {
    console.log(itemId)
    try {
      const response = await fetch(
        `https://techeat-server.onrender.com/api/products/remove-cart`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
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
 async function updateCartItem({ itemId }) {
   console.log(itemId);
   try {
     const response = await fetch(
       `https://techeat-server.onrender.com/api/products/update-carts/${itemId}`,
       {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ action: "increment" }),
       }
     );
     const data = await response.json();

     console.log(data);
     return data;
   } catch (error) {
     console.log(error);
   }
 }

  async function craeteOrder(data) {
  // console.log(data)
    try {
      const response = await fetch(
        `https://techeat-server.onrender.com/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();

      console.log(result);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CartContext.Provider
      value={{ cart, setCart, refetch, addToCart,craeteOrder,updateCartItem, setRefetch,deleteCart,getUserCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
