"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock3, UsersRound } from "lucide-react";

import RoleSelector from "./roleSelector";

import VictimRegisterForm from "./victimRegister";
import RescueRegisterForm from "./rescueRegister";


const RegisterContainer = ({
  role,
  setRole
}) => {


return (

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


{/* Left Information */}

<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.6
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

Secure Emergency Network

</div>



<h1
className="
mt-6
text-4xl
font-extrabold
leading-tight
text-slate-900
sm:text-5xl
"
>

Join RescueNet And Become Part Of A Safer Future

</h1>



<p
className="
mt-5
max-w-xl
text-lg
leading-relaxed
text-slate-600
"
>

Create your account and connect with a
community where technology helps people
during critical situations.

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

<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-blue-100
text-blue-600
"
>

<Clock3/>

</div>


<div>

<h3 className="font-bold text-slate-900">
Fast Response
</h3>

<p className="text-sm text-slate-500">
Quick emergency coordination
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

<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-emerald-100
text-emerald-600
"
>

<UsersRound/>

</div>


<div>

<h3 className="font-bold text-slate-900">
Connected Community
</h3>

<p className="text-sm text-slate-500">
Victims and rescue teams together
</p>

</div>


</div>


</div>


</motion.div>





{/* Right Side */}

<motion.div

initial={{
opacity:0,
x:40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.6
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


<RoleSelector

role={role}

setRole={setRole}

/>


{
role === "victim" && (
<VictimRegisterForm/>
)
}


{
role === "rescue" && (
<RescueRegisterForm/>
)
}

</motion.div>


</div>


</section>

)

}


export default RegisterContainer;