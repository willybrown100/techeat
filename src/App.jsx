import { BrowserRouter,Route, Routes } from "react-router-dom"
import HomePage from "./features/homePage/HomePage"
import ContactPage from "./features/contactPage/ContactPage"

function App() {
  return (
    <BrowserRouter>
 <Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="contact" element={<ContactPage/>}/>
 </Routes>
    </BrowserRouter>
  )
}

export default App

