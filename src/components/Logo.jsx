import { Link } from "react-router-dom"

function Logo() {
 return (
  <Link to="/">
   <img src="/images/logo.png" alt="img" className="w-[7rem]"/>
  </Link>
 )
}

export default Logo
