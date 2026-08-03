import Navbar from "@/components/Landing/navbar";
import Footer from "@/components/Landing/footer";

import EmergencyHero from "@/components/Emergency/hero";
import DisasterGuides from "@/components/Emergency/Guides";
import SafetyTips from "@/components/Emergency/SafetyTips";


export default function EmergencyInfo(){

return(

<>

<Navbar/>

<main>

<EmergencyHero/>

<DisasterGuides/>

<SafetyTips/>

</main>

<Footer/>

</>

)

}