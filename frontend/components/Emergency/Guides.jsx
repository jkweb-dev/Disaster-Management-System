"use client";

import { motion } from "framer-motion";
import {
Waves,
Flame,
HeartPulse
} from "lucide-react";


const guides=[

{
icon:Waves,
title:"Flood Safety",
tips:[
"Move to higher ground",
"Avoid flood water",
"Follow evacuation instructions"
]
},

{
icon:Flame,
title:"Fire Safety",
tips:[
"Leave dangerous areas",
"Call emergency services",
"Do not use elevators"
]
},

{
icon:HeartPulse,
title:"Medical Emergency",
tips:[
"Contact medical support",
"Provide accurate location",
"Assist injured people safely"
]
}

];


const DisasterGuides=()=>{


return(

<section className="py-20 bg-white">


<div className="
mx-auto
max-w-7xl
px-5
lg:px-8
">


<h2
className="
text-center
text-3xl
font-bold
text-slate-900
"
>

Disaster Safety Guides

</h2>


<div
className="
mt-12
grid
gap-6
md:grid-cols-3
"
>

{
guides.map((item,index)=>{

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
bg-slate-50
p-7
border
border-slate-100
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

<Icon/>

</div>


<h3
className="
mt-5
text-xl
font-bold
"
>

{item.title}

</h3>


<ul
className="
mt-4
space-y-2
text-sm
text-slate-600
"
>

{
item.tips.map(tip=>(

<li key={tip}>
✓ {tip}
</li>

))
}

</ul>


</motion.div>

)

})
}

</div>


</div>


</section>

)

}


export default DisasterGuides;