"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Waves,
  Flame,
  HeartPulse,
} from "lucide-react";


const categories = [

{
title:"Flood Emergency",
description:
"Get help during floods with coordinated rescue operations and location-based response.",
image:"/images/Landing/Flood Rescue.jpg",
icon:Waves
},

{
title:"Fire Emergency",
description:
"Connect with emergency responders for fire incidents and urgent situations.",
image:"/images/Landing/Firefighters.jpg",
icon:Flame
},

{
title:"Medical Emergency",
description:
"Quick access to medical support and ambulance response teams.",
image:"/images/Landing/Ambulance.jpg",
icon:HeartPulse
}

];


const EmergencyCategories = ()=>{


return(

<section className="py-20 bg-slate-50">


<div className="
mx-auto
max-w-7xl
px-5
lg:px-8
">


<div className="text-center">


<span className="
rounded-full
bg-red-50
px-4
py-2
text-sm
font-semibold
text-red-600
">

Emergency Categories

</span>


<h2 className="
mt-5
text-3xl
font-bold
text-slate-900
sm:text-4xl
">

Ready For Different Disaster Situations

</h2>


<p className="
mx-auto
mt-4
max-w-2xl
text-slate-600
">

Providing organized response for different types
of emergencies.

</p>


</div>



<div className="
mt-12
grid
gap-8
md:grid-cols-3
">


{
categories.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={item.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.15
}}

viewport={{
once:true
}}

className="
group
overflow-hidden
rounded-3xl
bg-white
shadow-sm
border
border-slate-100
"

>


<div className="
relative
h-64
overflow-hidden
">

<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
transition
duration-500
group-hover:scale-110
"

/>


<div className="
absolute
inset-0
bg-gradient-to-t
from-black/50
to-transparent
"/>


</div>



<div className="p-6">


<div className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-blue-600
text-white
">

<Icon size={24}/>

</div>


<h3 className="
mt-5
text-xl
font-bold
text-slate-900
">

{item.title}

</h3>


<p className="
mt-3
text-sm
leading-relaxed
text-slate-600
">

{item.description}

</p>


</div>


</motion.div>


)

})
}


</div>


</div>


</section>

)

}


export default EmergencyCategories;