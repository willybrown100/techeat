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
{/* <button onClick={close}></button> */}
    {children}
    </div>
  )
}
Modal.Open=Open
Modal.Window=Window


// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// export const Modals = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   return (
//     <div className="App">
//       <Button id="myButton" variant="primary" disabled={showModal}>
//         My Button
//       </Button>
//       <Button variant="info" onClick={handleShow}>
//         Open Modal
//       </Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>This is a modal.</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

