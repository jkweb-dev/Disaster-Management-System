"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  Radio,
  MapPinned,
  HandHeart
} from "lucide-react";


const helpPoints = [

{
icon:UserRound,
title:"Connecting Victims",
description:
"People can quickly report emergencies and request assistance."
},

{
icon:Radio,
title:"Coordinating Rescue",
description:
"Rescue teams receive organized information for better response."
},

{
icon:MapPinned,
title:"Smart Location Support",
description:
"Location-based tools help teams reach affected areas faster."
},

{
icon:HandHeart,
title:"Supporting Communities",
description:
"Providing information and resources to improve preparedness."
}

];


const HowWeHelp = ()=>{


return(

<section
className="
py-20
bg-white
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


<div className="text-center">


<span
className="
rounded-full
bg-emerald-50
px-4
py-2
text-sm
font-semibold
text-emerald-600
"
>
Our Approach
</span>



<h2
className="
mt-5
text-3xl
font-bold
text-slate-900
sm:text-4xl
"
>

How We Help During Emergencies

</h2>


<p
className="
mx-auto
mt-4
max-w-2xl
text-slate-600
"
>

A complete digital ecosystem designed to make
emergency response organized and effective.

</p>


</div>




<div
className="
mt-12
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>


{
helpPoints.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={item.title}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

viewport={{
once:true
}}

className="
rounded-3xl
border
border-slate-100
bg-slate-50
p-6
transition
hover:-translate-y-2
hover:shadow-xl
"

>


<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-gradient-to-br
from-blue-600
to-emerald-500
text-white
"
>

<Icon size={24}/>

</div>


<h3
className="
mt-5
font-bold
text-slate-900
"
>
{item.title}
</h3>


<p
className="
mt-3
text-sm
leading-relaxed
text-slate-600
"
>
{item.description}
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


export default HowWeHelp;