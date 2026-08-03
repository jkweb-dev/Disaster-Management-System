import AboutHero from "@/components/About/hero";
import MissionSection from "@/components/About/mission";
import VisionSection from "@/components/About/vision";
import HowWeHelp from "@/components/About/howwehelps";
import ImpactSection from "@/components/About/Impact";
import TechnologySection from "@/components/About/Technology";
import AboutCTA from "@/components/About/CTA";

import Footer from "@/components/Landing/footer";
import Navbar from "@/components/Landing/navbar";


export default function About(){

return(

<>

<Navbar/>

<main>

<AboutHero/>

<MissionSection/>

<VisionSection/>

<HowWeHelp/>

<ImpactSection/>

<TechnologySection/>

<AboutCTA/>

</main>


<Footer/>


</>

)

}