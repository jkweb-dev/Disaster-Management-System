"use client";


import { motion } from "framer-motion";
import {
  Siren,
  Ambulance
} from "lucide-react";



const roles=[

{
id:"victim",

title:"I Need Help",

subtitle:
"Report emergencies and request assistance",

icon:Siren,

color:
"from-red-500 to-orange-500"

},


{
id:"rescue",

title:"I Provide Help",

subtitle:
"Join as a verified rescue team",

icon:Ambulance,

color:
"from-blue-600 to-emerald-500"

}

];



const RoleSelector = ({
role,
setRole
})=>{


return(

<div>


<h2
className="
text-3xl
font-bold
text-slate-900
"
>

Create Account

</h2>



<p
className="
mt-2
text-slate-600
"
>

Choose your account type to continue

</p>



<div
className="
mt-8
grid
gap-5
"
>


{
roles.map((item)=>{


const Icon=item.icon;


const active=role===item.id;


return(

<motion.button

key={item.id}

whileHover={{
scale:1.02
}}

whileTap={{
scale:.98
}}

onClick={()=>setRole(item.id)}

className={`
relative
overflow-hidden
rounded-3xl
border
p-6
text-left
transition

${

active

?
"border-blue-600 ring-2 ring-blue-200"

:

"border-slate-200 hover:border-blue-300"

}

`}

>


<div
className={`
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-gradient-to-br
${item.color}
text-white
`}
>

<Icon size={28}/>

</div>



<h3
className="
mt-5
text-xl
font-bold
text-slate-900
"
>

{item.title}

</h3>



<p
className="
mt-2
text-sm
text-slate-600
"
>

{item.subtitle}

</p>


{
active &&

<div
className="
absolute
right-5
top-5
rounded-full
bg-blue-600
px-3
py-1
text-xs
font-semibold
text-white
"
>

Selected

</div>

}


</motion.button>


)

})
}


</div>


</div>

)

}


export default RoleSelector;