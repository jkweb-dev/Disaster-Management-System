"use client";

import { motion } from "framer-motion";
import {
  Zap,
  BadgeCheck,
  Navigation,
  LockKeyhole,
} from "lucide-react";


const reasons=[

{
icon:Zap,
title:"Faster Emergency Response",
description:
"Reduce response delays through organized digital coordination."
},

{
icon:BadgeCheck,
title:"Verified Rescue Teams",
description:
"Only approved teams can participate in rescue operations."
},

{
icon:Navigation,
title:"Location Based Support",
description:
"Smart location management helps teams reach affected areas."
},

{
icon:LockKeyhole,
title:"Secure Platform",
description:
"Protected accounts and controlled access for every user."
}

];



const WhyChooseUs=()=>{


return(

<section className="py-20 bg-white">


<div className="
mx-auto
max-w-7xl
px-5
lg:px-8
">


<div className="
grid
gap-12
lg:grid-cols-2
items-center
">


<div>


<span className="
rounded-full
bg-emerald-50
px-4
py-2
text-sm
font-semibold
text-emerald-600
">

Why Choose Us

</span>


<h2 className="
mt-5
text-3xl
font-bold
text-slate-900
sm:text-4xl
">

Technology Designed To Save Lives

</h2>


<p className="
mt-5
leading-relaxed
text-slate-600
">

Our platform combines emergency management,
real-time communication, and rescue coordination
into one intelligent system.

</p>


</div>



<div className="
grid
gap-5
sm:grid-cols-2
">


{
reasons.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={item.title}

whileInView={{
opacity:1,
y:0
}}

initial={{
opacity:0,
y:30
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
p-6
border
border-slate-100
"

>


<div className="
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
">

<Icon size={24}/>

</div>


<h3 className="
mt-4
font-bold
text-slate-900
">

{item.title}

</h3>


<p className="
mt-2
text-sm
text-slate-600
">

{item.description}

</p>


</motion.div>


)

})
}


</div>


</div>


</div>


</section>

)

}


export default WhyChooseUs;