"use client";

import { motion } from "framer-motion";
import {
  Users,
  Activity,
  Clock,
  HeartHandshake,
} from "lucide-react";


const stats = [

  {
    icon: Users,
    value:"500+",
    label:"Rescue Teams"
  },

  {
    icon: Activity,
    value:"1200+",
    label:"Emergencies Managed"
  },

  {
    icon: Clock,
    value:"4 min",
    label:"Average Response"
  },

  {
    icon: HeartHandshake,
    value:"10K+",
    label:"People Supported"
  },

];


const StatsSection = ()=>{


return(

<section
className="
py-20
bg-gradient-to-r
from-blue-600
to-emerald-500
"
>


<div
className="
mx-auto
max-w-7xl
px-5
lg:px-8
"
>


<div
className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>


{
stats.map((stat,index)=>{

const Icon=stat.icon;


return(

<motion.div

key={stat.label}

initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}

className="
rounded-3xl
bg-white/15
p-8
text-center
text-white
backdrop-blur-lg
border
border-white/20
"

>


<div
className="
mx-auto
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-white/20
"
>

<Icon size={28}/>

</div>


<h3
className="
mt-5
text-3xl
font-extrabold
"
>

{stat.value}

</h3>


<p
className="
mt-2
text-sm
text-white/80
"
>

{stat.label}

</p>


</motion.div>

)

})
}


</div>


</div>


</section>

)

}


export default StatsSection;