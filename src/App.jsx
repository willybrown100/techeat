import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import ContactPage from "./features/contactPage/ContactPage";
import Signin from "./features/signin/Signin";
import Login from "./features/signup/SignUp";
import SignUp from "./features/signup/SignUp";
import PageNotFound from "./components/PageNotFound";
import Menu from "./features/menu/Menu";
// import Aboutus from "./features/homePage/Aboutus";
import AboutUs from "./features/aboutus/AboutUs";
import TermsOfService from "./features/signin/PrivacyPolicy/TermsOfService";
import Policy from "./features/signin/PrivacyPolicy/Policy";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";

 const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:60 * 1000
    }
  }
 })

function App() {
  return (
    <QueryClientProvider client={queryClient}>
<ReactQueryDevtools initialIsOpen={false}/>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
        
        </Route>
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
      <Toaster position="top-center" gutter={12} containerStyle={{margin:"8px"}} toastOptions={{success:{duration:3000}, error:{duration:5000},style:{fontSize:"16px", maxWidth:"500px", padding:"16px 24px",backgroundColour:"white",color:""}}}/>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
export default App;
