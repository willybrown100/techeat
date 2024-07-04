function Button({children ,type,className}) {
 if(type === "promo") return <button className="bg-brand capitalize mt-4 p-2 rounded-md mx-auto">{children}</button>
 
 if(type === "email") return <button className="bg-brand  px-2 capitalize font-semibold py-1 tracking-wide">{children}</button>


 return <button className={`bg-brand font-semibold capitalize mt-4 p-2 rounded-md ${className} `}>{children}</button>;
}

export default Button
