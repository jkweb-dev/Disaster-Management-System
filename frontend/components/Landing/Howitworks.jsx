"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  UserCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";


const steps = [

{
icon: AlertTriangle,
number:"01",
title:"Report Emergency",
description:
"Victims submit emergency details with location information."
},


{
icon: UserCheck,
number:"02",
title:"Admin Coordination",
description:
"Emergency coordinators review and assign the right rescue team."
},


{
icon: Truck,
number:"03",
title:"Rescue Response",
description:
"Verified rescue teams reach the affected location."
},


{
icon: CheckCircle2,
number:"04",
title:"Mission Completed",
description:
"Emergency status is updated after successful response."
}

];



const HowItWorks = ()=>{


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
bg-blue-50
px-4
py-2
text-sm
font-semibold
text-blue-600
"
>
How It Works
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
From Emergency Report To Rescue
</h2>


</div>



<div
className="
mt-14
grid
gap-8
md:grid-cols-2
lg:grid-cols-4
"
>


{
steps.map((step,index)=>{


const Icon=step.icon;


return(

<motion.div

key={step.number}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.15
}}

viewport={{
once:true
}}

className="
relative
rounded-3xl
bg-slate-50
p-7
text-center
border
border-slate-100
"

>


<div
className="
mx-auto
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-gradient-to-br
from-blue-600
to-emerald-500
text-white
"
>

<Icon size={30}/>

</div>


<div
className="
mt-5
text-sm
font-bold
text-blue-600
"
>
STEP {step.number}
</div>


<h3
className="
mt-3
text-xl
font-bold
text-slate-900
"
>
{step.title}
</h3>


<p
className="
mt-3
text-sm
text-slate-600
leading-relaxed
"
>
{step.description}
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


export default HowItWorks;