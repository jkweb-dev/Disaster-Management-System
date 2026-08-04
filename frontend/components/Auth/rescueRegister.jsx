"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import {
  Building2,
  User,
  Mail,
  Phone,
  Lock,
  Users,
  MapPin,
  LoaderCircle,
  Siren
} from "lucide-react";

import handleError from "@/utils/handleError";
import useAuth from "@/hooks/useAuth";


const RescueRegisterForm = () => {


    const { login } = useAuth();

const router = useRouter();


const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

organizationName:"",
contactPerson:"",
email:"",
phone:"",
password:"",
confirmPassword:"",
teamSize:"",
serviceArea:"",
emergencyCategories:""

});





const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};






const validateForm=()=>{


if(

!formData.organizationName ||

!formData.contactPerson ||

!formData.email ||

!formData.phone ||

!formData.password ||

!formData.teamSize ||

!formData.serviceArea

){

toast.error(
"Please fill all required fields"
);

return false;

}



if(formData.password.length < 8){

toast.error(
"Password must be at least 8 characters"
);

return false;

}



if(
formData.password !== 
formData.confirmPassword
){

toast.error(
"Passwords do not match"
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



const res = await axios.post(

"http://localhost:5000/auth/register",

{

...formData,

role:"rescue"

}

);




toast.success(

"Registration submitted. Waiting for admin verification."

);


login(
res.data.token,
res.data.user
);

//router.push("/login");



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
mt-8
space-y-5
"

>



<div
className="
rounded-2xl
bg-blue-50
p-4
text-sm
text-blue-700
"
>

<Siren
size={20}
className="inline mr-2"
/>


Rescue accounts require admin approval
before accessing operations.

</div>






<div
className="
grid
gap-5
sm:grid-cols-2
"
>



<InputField

icon={Building2}

name="organizationName"

placeholder="Organization Name"

value={formData.organizationName}

onChange={handleChange}

/>




<InputField

icon={User}

name="contactPerson"

placeholder="Contact Person"

value={formData.contactPerson}

onChange={handleChange}

/>




<InputField

icon={Mail}

name="email"

type="email"

placeholder="Official Email"

value={formData.email}

onChange={handleChange}

/>




<InputField

icon={Phone}

name="phone"

placeholder="Phone Number"

value={formData.phone}

onChange={handleChange}

/>



</div>







<div
className="
grid
gap-5
sm:grid-cols-2
"
>


<InputField

icon={Users}

name="teamSize"

type="number"

placeholder="Team Size"

value={formData.teamSize}

onChange={handleChange}

/>




<InputField

icon={MapPin}

name="serviceArea"

placeholder="Service Area"

value={formData.serviceArea}

onChange={handleChange}

/>



</div>






<InputField

icon={Siren}

name="emergencyCategories"

placeholder="Emergency Categories (Fire, Flood, Medical)"

value={formData.emergencyCategories}

onChange={handleChange}

/>







<div
className="
grid
gap-5
sm:grid-cols-2
"
>


<InputField

icon={Lock}

name="password"

type="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

/>



<InputField

icon={Lock}

name="confirmPassword"

type="password"

placeholder="Confirm Password"

value={formData.confirmPassword}

onChange={handleChange}

/>



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
className="animate-spin"
/>

Submitting...

</>

:

"Register Rescue Team"

}



</button>




</form>


)

};







const InputField=({

icon:Icon,

...props

})=>{


return(

<div
className="relative"
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



export default RescueRegisterForm;