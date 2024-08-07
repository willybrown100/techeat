import React, { cloneElement, createContext, useContext, useEffect, useRef, useState } from 'react'

const ModalContext= createContext()
export default function Modal({children}){
const [openName,setOpenName]=useState("")
const close = function(){
    setOpenName("");
}
const open = setOpenName

return <ModalContext.Provider value={{openName,open,close,setOpenName}}>
    {children}
</ModalContext.Provider>
}
function Open({children,opens}){
const {open,close}=useContext(ModalContext)
return cloneElement(children,{onClick:()=>open(opens)})
}
 function Window({children,name}) {
   const { openName, close} = useContext(ModalContext);
  const ref=useRef()
  useEffect(()=>{
  const handleClick = function(e){
    if(ref.current&&!ref.current.contains(e.target)){
  close();
    } 
  }
document.addEventListener("click",handleClick,true)
return () => document.removeEventListener("click", handleClick ,true);
},[close])

    if(name !== openName) return null
  return (
    <div ref={ref}>

    {children}
    </div>
  )
}
Modal.Open=Open
Modal.Window=Window




