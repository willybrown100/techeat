function Button({children ,type}) {
 if(type === "promo") return <button className="bg-brand mt-4 p-2 rounded-md mx-auto">{children}</button>;
 
 if(type === "email") return <button className="bg-brand -1 rounded-md">{children}</button>;


 return <button className="bg-brand font-semibold capitalize mt-4 p-2 rounded-md ">{children}</button>;
}

export default Button
