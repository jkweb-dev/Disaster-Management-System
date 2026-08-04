"use client";

import { motion } from "framer-motion";
import {
ShieldCheck,
Clock,
Users
} from "lucide-react";

import LoginForm from "./loginForm";


const LoginContainer = ()=>{


return(

<section
className="
min-h-screen
bg-gradient-to-br
from-blue-50
via-white
to-emerald-50
py-20
"
>


<div
className="
mx-auto
grid
max-w-7xl
items-center
gap-12
px-5
lg:grid-cols-2
lg:px-8
"
>


{/* Left Side */}

<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

>


<div
className="
inline-flex
items-center
gap-2
rounded-full
bg-blue-100
px-4
py-2
text-sm
font-semibold
text-blue-600
"
>

<ShieldCheck size={18}/>

Secure Access

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

Welcome Back To RescueNet

</h1>



<p
className="
mt-5
max-w-xl
text-lg
text-slate-600
"
>

Login to continue managing emergencies,
requesting help, or coordinating rescue
operations.

</p>




<div
className="
mt-8
space-y-4
"
>


<div
className="
flex
items-center
gap-4
rounded-2xl
bg-white
p-4
shadow-sm
"
>

<Clock className="text-blue-600"/>

<div>

<h3 className="font-bold">
Fast Response
</h3>

<p className="text-sm text-slate-500">
Emergency coordination anytime
</p>

</div>


</div>



<div
className="
flex
items-center
gap-4
rounded-2xl
bg-white
p-4
shadow-sm
"
>

<Users className="text-emerald-600"/>

<div>

<h3 className="font-bold">
Connected Network
</h3>

<p className="text-sm text-slate-500">
Victims and rescue teams together
</p>

</div>


</div>



</div>


</motion.div>






{/* Login Card */}


<motion.div

initial={{
opacity:0,
x:40
}}

animate={{
opacity:1,
x:0
}}

className="
rounded-3xl
border
border-white/60
bg-white/70
p-6
shadow-xl
backdrop-blur-xl
sm:p-10
"

>


<LoginForm/>


</motion.div>



</div>


</section>

)

}


export default LoginContainer;