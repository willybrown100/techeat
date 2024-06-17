import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import ContactPage from "./features/contactPage/ContactPage";
import Signin from "./features/signin/Signin";
import Login from "./features/signup/SignUp";
import SignUp from "./features/signup/SignUp";
import PageNotFound from "./components/PageNotFound";
import Menu from "./features/menu/Menu";
import Aboutus from "./features/homePage/Aboutus";
import AboutUs from "./features/aboutus/AboutUs";
import Policy from "./features/PrivacyPolicy/Policy";
import TermsOfService from "./features/PrivacyPolicy/TermsOfService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="signin" element={<Signin />} />
        <Route path="Policy" element={<Policy />} />
        <Route path="TermsOfService" element={<TermsOfService />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
