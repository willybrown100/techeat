import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import OurService from "../homePage/OurService"
import MeetOurTeam from "./MeetOurTeam"
import OurCoreValues from "./OurCoreValues"
import OurStory from "./OurStory"
import Testimonials from "./Testimonials"
import VisionandMission from "./VisionandMission"

function AboutUs() {
 return (
  <>
  <Navbar/>
  <Sidebar/>
  
   <header className="aboutUs text-black grid place-items-center">
   <h1 className="capitalize text-white font-headings">we are tech eat</h1>
   </header>
<OurStory/>
<VisionandMission/>
<OurCoreValues/>
<MeetOurTeam/>
<Testimonials/>
  </>
 )
}

export default AboutUs
