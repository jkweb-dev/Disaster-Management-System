"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";


const EmergencyHero = () => {

return (

<section
className="
py-24
bg-gradient-to-br
from-blue-50
via-white
to-emerald-50
"
>

<div
className="
mx-auto
max-w-7xl
px-5
text-center
lg:px-8
"
>

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

>

<div
className="
mx-auto
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-gradient-to-br
from-blue-600
to-emerald-500
text-white
"
>

<AlertTriangle size={32}/>

</div>


<h1
className="
mt-6
text-4xl
font-extrabold
text-slate-900
sm:text-5xl
"
>

Emergency Information Center

</h1>


<p
className="
mx-auto
mt-5
max-w-2xl
text-lg
text-slate-600
"
>

Learn how to stay safe, prepare for disasters,
and respond effectively during emergencies.

</p>


</motion.div>


</div>

</section>

)

}

export default EmergencyHero;