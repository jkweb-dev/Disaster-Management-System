import Link from "next/link";
import {

  ShieldCheck
} from "lucide-react";


const Footer = () => {


return (

<footer
className="
bg-slate-950
text-white
"
>


<div
className="
mx-auto
max-w-7xl
px-5
py-14
lg:px-8
"
>


<div
className="
grid
gap-10
sm:grid-cols-2
lg:grid-cols-4
"
>


{/* Brand */}

<div>

<div
className="
flex
items-center
gap-2
"
>

<div
className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
bg-gradient-to-br
from-blue-600
to-emerald-500
"
>

<ShieldCheck/>

</div>


<h3 className="
text-xl
font-bold
">

RescueNet

</h3>


</div>


<p
className="
mt-5
text-sm
leading-relaxed
text-slate-400
"
>

A modern disaster response platform connecting
people, rescue teams, and emergency coordinators.

</p>


</div>



{/* Links */}

<div>

<h4 className="
font-bold
">

Quick Links

</h4>


<div className="
flex flex-col
mt-5
space-y-3
text-sm
text-slate-400
">

<Link href="/">
Home
</Link>

<Link href="/about">
About
</Link>

<Link href="/emergency-info">
Emergency Info
</Link>

<Link href="/contact">
Contact
</Link>


</div>


</div>




{/* Support */}

<div>

<h4 className="
font-bold
">

Support

</h4>


<div className="
mt-5
space-y-3
text-sm
text-slate-400
">

<p>
Privacy Policy
</p>

<p>
Terms & Conditions
</p>

<p>
Help Center
</p>

</div>


</div>




{/* Contact */}

<div>

<h4 className="
font-bold
">

Emergency Contact

</h4>


<div className="
mt-5
space-y-3
text-sm
text-slate-400
">

<p>
24/7 Support Available
</p>

<p>
support@rescuenet.com
</p>

<p>
Emergency Hotline: 1122
</p>


</div>



<div className="
mt-5
flex
gap-3
">


<div className="rounded-lg bg-white/10 p-2">
  F
</div>

<div className="rounded-lg bg-white/10 p-2">
  X
</div>

<div className="rounded-lg bg-white/10 p-2">
  L
</div>


</div>


</div>



</div>




<div
className="
mt-12
border-t
border-white/10
pt-6
text-center
text-sm
text-slate-500
"
>

© 2026 RescueNet. All rights reserved.

</div>



</div>


</footer>

)

}


export default Footer;