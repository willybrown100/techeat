import useUser from "../hooks/useUser";

const userInfo = localStorage.getItem("userDetails");
const userToken = JSON.parse(userInfo);

console.log(userToken);

export async function getUser() {
  try {
    const response = await fetch(
      `https://techeat-server.onrender.com/api/auth`,
      {
        headers: {
          Authorization: `Bearer ${userToken.token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addToCart({
  userId,
  _id: productId,
  name: productName,
  price,
  quantity,
  image,
}) {
  console.log(userId, productId, productName, price, quantity, image);
  // console.log(items);
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
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const initializePayment = async (datas) => {
  console.log(datas);
  const response = await fetch(
    "https://techeat-server.onrender.com/api/products/payments/initialize",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    }
  );

  const data = await response.json();
  console.log(data)
  if(data.status===true){
    window.location.href = data.data.authorization_url;
  }
  console.log(data);
  // if (response.ok) {
  //   // Initialize Paystack payment with the received authorization URL
  //   window.location.href = data.authorization_url;
  // } else {
  //   // Handle initialization error
  //   console.error(data.error);
  // }
};
