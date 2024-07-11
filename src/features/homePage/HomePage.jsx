 import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Aboutus from "./Aboutus";
import OurService from "./OurService";
import OurVendors from "./OurVendors";
import PromoSection from "./PromoSection";
import TopMenu from "./TopMenu";

function HomePage() {
 return (
   <section >
     
     <Header/>
   <TopMenu/>
   <OurService/>
   <OurVendors/>
   <PromoSection/>
   <Aboutus/>
   {/* <Footer/> */}
   </section>
 );
}

export default HomePage
