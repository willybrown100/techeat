import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import ContactPage from "./features/contactPage/ContactPage";
import Signin from "./features/signin/Signin";
import Login from "./features/signup/SignUp";
import SignUp from "./features/signup/SignUp";
import PageNotFound from "./components/PageNotFound";
import Menu from "./features/menu/Menu";

import AboutUs from "./features/aboutus/AboutUs";
import TermsOfService from "./features/signin/PrivacyPolicy/TermsOfService";
import Policy from "./features/signin/PrivacyPolicy/Policy";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AppLayout from "../src/components/applayout/AppLayout";
import RootLayout from "./Layouts/RootLayout";
import AppLayoutHome from "./components/applayout/applayouthome/AppLayoutHome";
import AppLayoutOrderHistory from "./components/applayout/AppLayoutOrderHistory";
import AppLayoutHelp from "../src/components/applayout/applayoutHelp/AppLayoutHelp";

import AppLayoutSettings from "./components/applayout/AppLayoutSettings";
import AppLayoutMenu from "./components/applayout/applayoutMenu/AppLayoutMenu";
import BurgerPage from "./components/applayout/applayoutMenu/BurgerPage";
import SpaghettiPage from "./components/applayout/applayoutMenu/SpaghettiPage";
import GrillsPage from "./components/applayout/applayoutMenu/GrillsPage";
import ProtectedRoute from "./ui/ProtectedRoute";

import CartProvider from "./CartContext";
import AuthUserProvider from "./authUser";
import Checkout from "./components/Checkout";
import CartPage from "./components/cart/CartPage";
import AppHome from "./components/applayout/applayouthome/AppHome";
import Faq from "./components/applayout/applayoutHelp/Faq";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:60*1000,
    },
  },
});

function App() {
  return (
    <AuthUserProvider>

    <CartProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="Policy" element={<Policy />} />
            <Route path="TermsOfService" element={<TermsOfService />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route
            path="applayout/*"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<AppLayoutHome />} >
            <Route index element={<Navigate to="apphome" />} />
            <Route path="apphome" index element={<AppHome/>}/>
            <Route path="cart" element={<CartPage/>}/>
            </Route>
            <Route path="appmenu/*" element={<AppLayoutMenu />}>
              <Route path="burger" element={<BurgerPage />} />
              <Route path="spaghetti" element={<SpaghettiPage />} />
              <Route path="grills" element={<GrillsPage />} />
            <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="history" element={<AppLayoutOrderHistory />} />
            <Route path="settings" element={<AppLayoutSettings />} />
            <Route path="help" element={<AppLayoutHelp />} >
            <Route path="faq" element={<Faq/>}/>
            </Route>
            
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColour: "white",
              color: "",
            },
          }}
          />
      </BrowserRouter>
    </QueryClientProvider>
          </CartProvider>
          </AuthUserProvider>
  );
}

export default App;