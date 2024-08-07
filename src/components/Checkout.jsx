import React, { useContext, useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { CartContext } from "../CartContext";
import { PaystackButton } from "react-paystack";
import useUser from "../hooks/useUser";
import Button from "../ui/Button";
import { Form, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import MiniLoader from "../ui/MiniLoader";
import toast from "react-hot-toast";
import { formatter } from "../utils/currencyFormatter";
import { initializePayment } from "../services/userData";

export default function Checkout() {
  const navigate = useNavigate();

  const [cartItem, setCartItem] = useState("");

  const { register, handleSubmit } = useForm();
  const { userId, authUserData } = useUser();
  const { user } = authUserData;
  const name = user.name;
  const email = user.email;

  const {
    cart = [],
    setCart,
    getUserCart,
    craeteOrder,
  } = useContext(CartContext);
  const totalCost = cart?.reduce((acc, product) => acc + product.totalPrice, 0);
  const deliveryFee = 500;
  const numTotal = totalCost + deliveryFee;
  const total = numTotal * 100;

  const { mutate, isPending } = useMutation({
    mutationFn: craeteOrder,
    onSuccess: () => {
      toast.success("order succesfully created");
    },
  });
  const { mutate: initialisePayment, isPending: isnitializing } = useMutation({
    mutationFn: initializePayment,
    onSuccess: () => {
      // toast.success("order succesfully created");
    },
  });
  useEffect(() => {
    getUserCart(userId);
  }, [userId, getUserCart]);

  const handleClick = function (data) {
    const formData = {
      ...data,
      items: cart,
      userId,
      total,
    };
    // mutate(formData);
    initialisePayment({ userId, email });
  };

  return (
    <article className="text-black p-4 min-h-[100vh] bg-stone-100 gap-2">
      <div className="flex items-center gap-x-4">
        <button onClick={() => navigate(-1)}>
          <FaAngleLeft className="text-2xl" />
        </button>
        <h4 className="text-black mb-0 text-left text-xl font-headings">
          order summary
        </h4>
      </div>
      <h3 className="text-black m-6 font-semibold font-headings">
        food by betty
      </h3>
      <div>
        <ul className="space-y-4">
          {cart?.map((item) => (
            <CheckoutItem item={item} />
          ))}
        </ul>
        <form
          className="w-full grid gap-6 grid-cols-[1fr,17rem] "
          onSubmit={handleSubmit(handleClick)}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col relative">
              <label className="capitalize font-semibold">name</label>
              <input
                type="text"
                id="name"
                className="p-2 rounded-md  border-stone-800 border"
                {...register("name")}
              />
              <img
                src="/images/edit1.png"
                alt="img"
                className="absolute top-[4.2rem] text-brand right-1 w-[1rem]"
              />
            </div>
            <div className="flex flex-col gap-x-3 relative">
              <label className="flex font-semibold items-center gap-1">
                {" "}
                <img
                  src="/images/number.png"
                  alt="img"
                  className="w-[1rem]"
                />{" "}
                <span className="capitalize">phone number</span>
              </label>
              <input
                type="number"
                id="phoneNumber"
                {...register("phoneNumber")}
                className="p-2 rounded-md border-stone-800 border"
              />
              <img
                src="/images/edit1.png"
                alt="img"
                className="absolute top-[4.2rem]  text-brand right-1 w-[1rem]"
              />
            </div>
            <div className="flex relative flex-col gap-x-3">
              <label className="flex font-semibold items-center">
                <img
                  src="\images\Pin_alt_fill.png"
                  alt="img"
                  className="w-[1rem]"
                />{" "}
                <span className="capitalize">delivery address</span>
              </label>
              <input
                type="text"
                // value={address}
                id="address"
                {...register("address")}
                className="p-2 rounded-md  border-stone-800 border "
              />
              <img
                src="/images/edit1.png"
                alt="img"
                className="absolute   top-[4.2rem] right-1 w-[1rem]"
              />
            </div>
            <div>
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            </div>
          </div>
          <Summary
            numTotal={numTotal}
            totalCost={totalCost}
            isPending={isPending}
            name={name}
            email={email}
            amount={total}
          />
        </form>
      </div>
    </article>
  );
}
function CheckoutItem({ item }) {
  const { image, productName, price } = item;
  return (
    <li className="">
      <div className="flex items-center gap-4">
        <img src={image} alt="img" className="w-[5rem] h-[5rem] object-cover" />
        <div>
          <h4 className="text-black font-headings  font-semibold mb-1 ">
            {productName}
          </h4>
          <img src="/images/3star.png" alt="img" className="w-16" />
        </div>
        <div>
          <h4 className="text-black font-headings font-semibold">
            {formatter.format(price)}
          </h4>
        </div>
      </div>
    </li>
  );
}
function Summary({ numTotal, totalCost, email, name, isPending, amount }) {
  return (
    <div className="  bg-white capitalize absolute top-16 rounded-md right-8 h-full w-[16rem] p-4">
      <div className="">
        <h3 className="text-black capitalize font-headings font-semibold">
          summary
        </h3>
        <div className="bg-stone-600 h-[2px]  w-full"></div>
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-between mt-5">
            <span>promo code</span>
            <button className="bg-black  text-white px-4 py-1 tracking-wide font-semibold capitalize rounded-md">
              apply
            </button>
          </div>
          <div className="flex justify-between ">
            <span className="capitalize ">subTotal</span>
            <span className="font-semibold">{totalCost}</span>
          </div>
          <div className="flex justify-between ">
            <span className="capitalize font-headings">delivery fee</span>
            <span className="semibold">500</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="capitalize font-semibold ">total</span>
            <span className="font-semibold">{formatter.format(numTotal)}</span>
          </div>
        </div>
      </div>

      <button className="font-semibold mt-4 w-full text-center m-auto capitalize bg-brand rounded-md p-2 text-white">proceed to payment</button>
      
    </div>
  );
}
