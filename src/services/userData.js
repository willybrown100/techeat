const userInfo = localStorage.getItem("userDetails");
const userToken = JSON.parse(userInfo)

 console.log(userToken.token);
export async function getUser(){
    try {
        const response = await fetch(
          `https://techeat-server-1.onrender.com/api/auth`,
          {
            headers: {
              Authorization: `Bearer ${userToken.token}`,
            },
          }
        );
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
       console.log(error) 
    }
}

export async function addToCart({userId,productId,name:productName,price,quantity}){
console.log(userId, productId,productName, price, quantity,);
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
            }),
          }
        );
          
        
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
       console.log(error) 
    }
}