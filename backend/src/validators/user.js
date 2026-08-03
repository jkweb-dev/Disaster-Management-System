import {z} from "zod";


export const registerSchema = z.object({

email:
z.string()
.email(),


password:
z.string()
.min(8),


confirmPassword:
z.string(),


role:
z.enum([
"victim",
"rescue"
])


}).refine(

(data)=>
data.password===data.confirmPassword,

{
message:"Passwords do not match",
path:["confirmPassword"]
}

);