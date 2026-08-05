"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import {
  Mail,
  Lock,
  LoaderCircle,
  ShieldCheck
} from "lucide-react";

import handleError from "@/utils/handleError";
import useAuth from "@/hooks/useAuth";
import api from "@/lib/axios";



const LoginForm = ()=>{

  const { checkAuth } = useAuth();

const router = useRouter();


const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

email:"",
password:""

});





const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};





const validateForm=()=>{


if(
!formData.email ||
!formData.password
){

toast.error(
"Email and password are required"
);

return false;

}



return true;


};






const handleSubmit=async(e)=>{


e.preventDefault();



if(!validateForm())
return;



try{


setLoading(true);



const {data}=await api.post(
"/auth/login",
formData
);






// Store authentication data
await checkAuth();



toast.success(
"Login successful"
);





// Role Based Redirect






}


catch(error){


handleError(
error,
router
);


}


finally{

setLoading(false);

}


};






return(

<form

onSubmit={handleSubmit}

className="
space-y-6
"

>



<div>

<h2
className="
text-3xl
font-bold
text-slate-900
"
>

Login

</h2>


<p
className="
mt-2
text-slate-600
"
>

Access your RescueNet account

</p>

</div>






<InputField

icon={Mail}

name="email"

type="email"

placeholder="Email Address"

value={formData.email}

onChange={handleChange}

/>






<InputField

icon={Lock}

name="password"

type="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

/>







<div
className="
flex
justify-end
"
>

<button

type="button"

onClick={()=>router.push("/forgot-password")}

className="
text-sm
font-medium
text-blue-600
hover:underline
"

>

Forgot Password?

</button>


</div>








<button

disabled={loading}

className="
flex
w-full
items-center
justify-center
gap-2
rounded-xl
bg-gradient-to-r
from-blue-600
to-emerald-500
py-3.5
font-semibold
text-white
transition
hover:scale-[1.02]
disabled:opacity-70
"

>


{

loading

?

<>

<LoaderCircle
className="
animate-spin
"
/>

Logging In...

</>

:

<>

<ShieldCheck size={20}/>

Login

</>

}



</button>





<p
className="
text-center
text-sm
text-slate-600
"
>

Don't have an account?

<span

onClick={()=>router.push("/register")}

className="
ml-1
cursor-pointer
font-semibold
text-blue-600
"

>

Create Account

</span>


</p>






</form>

)

};






const InputField=({

icon:Icon,

...props

})=>{


return(

<div
className="
relative
"
>

<Icon

size={19}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"

/>


<input

{...props}

className="
w-full
rounded-xl
border
border-slate-200
bg-white
py-3.5
pl-12
pr-4
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-100
"

/>


</div>

)

};



export default LoginForm;