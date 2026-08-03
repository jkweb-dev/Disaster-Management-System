import Navbar from "@/components/Landing/navbar";
import Hero from "@/components/Landing/hero";
import TrustedSection from "@/components/Landing/trusted";
import StatsSection from "@/components/Landing/stats";
import FeaturesSection from "@/components/Landing/feature";
import HowItWorks from "@/components/Landing/Howitworks";
import EmergencyCategories from "@/components/Landing/emergency";
import WhyChooseUs from "@/components/Landing/whyChooseus";
import CTASection from "@/components/Landing/CTA";
import Footer from "@/components/Landing/footer";


export default function Home(){

return(
<>
<Navbar/>

<main>

<Hero/>
<TrustedSection/>
<StatsSection/>
<FeaturesSection/>
<HowItWorks/>
<EmergencyCategories/>
<WhyChooseUs/>
<CTASection/>

</main>

<Footer/>

</>
)

}