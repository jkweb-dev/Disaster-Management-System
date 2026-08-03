"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Map,
  RadioTower,
  Lock,
} from "lucide-react";


const technologies = [

{
icon:RadioTower,
title:"Real-Time Communication",
description:
"Instant updates between victims, rescue teams, and administrators."
},


{
icon:Map,
title:"Location Intelligence",
description:
"Map-based tools help coordinate rescue operations efficiently."
},


{
icon:Cpu,
title:"Smart Management",
description:
"Powerful systems organize emergency information and workflows."
},


{
icon:Lock,
title:"Secure Infrastructure",
description:
"Protected authentication and controlled access."
}

];



const TechnologySection = ()=>{


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
Our Technology
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

Powered By Modern Technology

</h2>



<p
className="
mx-auto
mt-4
max-w-2xl
text-slate-600
"
>

Combining software, communication, and location
technology to improve emergency response.

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
technologies.map((item,index)=>{

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
hover:shadow-xl
transition
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


export default TechnologySection;