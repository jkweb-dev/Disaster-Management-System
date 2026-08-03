"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";


const MissionSection = () => {

return (

<section className="
py-20
bg-white
">

<div className="
mx-auto
grid
max-w-7xl
items-center
gap-12
px-5
lg:grid-cols-2
lg:px-8
">


{/* Image */}

<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>

<div className="
overflow-hidden
rounded-3xl
shadow-xl
">

<Image

src="/images/Landing/Distribute food.jpg"

alt="Volunteers helping community"

width={700}

height={600}

className="
h-[450px]
w-full
object-cover
"

/>

</div>

</motion.div>





{/* Content */}


<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<div className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-gradient-to-br
from-blue-600
to-emerald-500
text-white
">

<HeartHandshake size={28}/>

</div>



<h2 className="
mt-6
text-3xl
font-bold
text-slate-900
sm:text-4xl
">

Our Mission

</h2>



<p className="
mt-5
leading-relaxed
text-slate-600
">

Our mission is to use technology to improve disaster
response by creating a bridge between people in need
and those ready to help.

</p>



<p className="
mt-4
leading-relaxed
text-slate-600
">

We believe every second matters during emergencies.
Through smart coordination, real-time updates, and
organized rescue operations, we aim to make communities
safer and more prepared.

</p>



<div className="
mt-6
rounded-2xl
bg-blue-50
p-5
text-blue-700
font-medium
">

"Technology with compassion can save lives."

</div>



</motion.div>



</div>


</section>

)

}


export default MissionSection;