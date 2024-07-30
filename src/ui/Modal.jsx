import React, { cloneElement, createContext, useContext, useState } from 'react'

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
const {open}=useContext(ModalContext)
return cloneElement(children,{onClick:()=>open(opens)})
}
 function Window({children,name}) {
    const { openName } = useContext(ModalContext);
    if(name !== openName)return null
  return (
    <div>

    {children}
    </div>
  )
}
Modal.Open=Open
Modal.Window=Window




