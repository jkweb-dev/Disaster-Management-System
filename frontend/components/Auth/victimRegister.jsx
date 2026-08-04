"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  User,
  Mail,
  Phone,
  Lock,
  MapPin,
  LoaderCircle
} from "lucide-react";

import handleError from "@/utils/handleError";
import useAuth from "@/hooks/useAuth";


const VictimRegisterForm = () => {


  const { login } = useAuth();

const router = useRouter();


const [loading,setLoading] = useState(false);


const [formData,setFormData] = useState({

name:"",
email:"",
phone:"",
password:"",
confirmPassword:"",
city:"",
address:""

});



const handleChange = (e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};





const validateForm = ()=>{


if(
!formData.name ||
!formData.email ||
!formData.phone ||
!formData.password ||
!formData.city
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





const handleSubmit = async(e)=>{

e.preventDefault();


if(!validateForm())
return;

console.log(process.env.NEXT_PUBLIC_API_URL)

try{


setLoading(true);



const res = await axios.post(

"http://localhost:5000/auth/register",

{

...formData,

role:"victim"

}

);



toast.success(
"Account created successfully"
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
)

}


finally{


setLoading(false);


}


};





return (

<form

onSubmit={handleSubmit}

className="
mt-8
space-y-5
"

>


<div
className="
grid
gap-5
sm:grid-cols-2
"
>


{/* Name */}

<InputField

icon={User}

name="name"

placeholder="Full Name"

value={formData.name}

onChange={handleChange}

/>



<InputField

icon={Mail}

name="email"

type="email"

placeholder="Email Address"

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



<InputField

icon={MapPin}

name="city"

placeholder="City"

value={formData.city}

onChange={handleChange}

/>



</div>




<InputField

icon={MapPin}

name="address"

placeholder="Complete Address"

value={formData.address}

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
className="
animate-spin
"
/>

Creating Account...

</>

:

"Create Victim Account"

}



</button>



</form>

)

};





const InputField = ({
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



export default VictimRegisterForm;