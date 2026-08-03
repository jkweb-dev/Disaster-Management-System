import {
ShieldCheck,
Phone,
MapPin
} from "lucide-react";


const SafetyTips=()=>{


const tips=[

{
icon:ShieldCheck,
title:"Stay Calm",
text:"Avoid panic and follow official instructions."
},

{
icon:MapPin,
title:"Share Location",
text:"Always provide accurate location during emergencies."
},

{
icon:Phone,
title:"Emergency Contact",
text:"Keep important emergency numbers available."
}

];


return(

<section
className="
py-20
bg-slate-50
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


<div
className="
grid
gap-6
md:grid-cols-3
"
>


{
tips.map(item=>{

const Icon=item.icon;


return(

<div
key={item.title}
className="
rounded-3xl
bg-white
p-7
shadow-sm
"
>

<Icon
className="text-blue-600"
/>


<h3
className="
mt-4
font-bold
text-lg
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

{item.text}

</p>


</div>

)

})
}


</div>


</div>


</section>

)

}


export default SafetyTips;