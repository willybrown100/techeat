import React, { useContext, useEffect, useState } from "react";
import Button from "../../ui/Button";
// import useUser from '../../hooks/useUser';
import CartItem from "./CartItem";
import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";
import { CartContext } from "../../CartContext";
import Modal from "../../ui/Modal";
import CheckoutPage from "../../ui/CheckoutPage";
// import { useDispatch, useSelector } from 'react-redux';

export default function Mycart() {
  const { userId } = useUser();

  const { cart, setCart, getUserCart } = useContext(CartContext);
  const totalCost = cart?.reduce((acc, product) => acc + product.totalPrice, 0);
  console.log(totalCost);
  console.log(cart);

  useEffect(() => {

    getUserCart(userId);
  }, [ userId]);

  return (
    <div className="bg-white p-2">
      <h4 className="text-black mt-2 font-semibold ml-2">my orders</h4>

      {cart && (
        <ul className="flex flex-col space-y-3 ">
          {cart?.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <div className="divide-y-2  divide-stone-500">
            <h3 className="text-black mt-9 font-headings  font-semibold tracking-wide text-[1.5rem]">
              order summary
            </h3>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-stone-700 capitalize font-semibold">
                  sub total
                </span>
                <span className="text-black">x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700 capitalize font-semibold">
                  discount{" "}
                </span>
                <span className="text-black font-semibold">x</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-black capitalize font-semibold">
                total cost{" "}
              </span>
              <span className="text-black font-semibold">{totalCost}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button>checkout</Button>
            <button className="shadow-lg text-brand capitalize font-semibold p-2 rounded-md">
              clear order
            </button>
          </div>
        </ul>
      )}

      {!cart && <EmptyCart />}
    </div>
  );
}

function CheckoutBtn() {
  return (
    <Modal>
      <Modal.Open opens="checkout">
        <button className="">checkout</button>
      </Modal.Open>
      <Modal.Window name="checkout">
        <CheckoutPage />
      </Modal.Window>
    </Modal>
  );
}

function EmptyCart() {
  return (
    <div className="  p-2 h-[90vh] grid place-items-center ">
      <div>
        <img
          src="\images\Basket_alt_3_fill.png"
          alt="img"
          className="w-[5rem] m-auto"
        />
        <h4 className="text-black text-center font-headings">
          your cart is empty
        </h4>
        <p className="mb-0 text-sm text-stone-400">
          you haven’t added a meal to your cart
        </p>

        <div className="flex justify-center">
          <Button className="text-white">back to menu</Button>
        </div>
      </div>
    </div>
  );
}
