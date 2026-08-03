"use client";

import { useState } from "react";

import RegisterContainer from "@/components/Auth/registerContainer";


export default function Register(){

const [role,setRole]=useState(null);


return(

<RegisterContainer

role={role}

setRole={setRole}

/>

)

}