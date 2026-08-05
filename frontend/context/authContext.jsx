"use client";


import {
    createContext,
    useState,
    useEffect
} from "react";


import { useRouter } from "next/navigation";


import api from "@/lib/axios";



const AuthContext = createContext();



export const AuthProvider = ({ children }) => {


    const router = useRouter();



    const [user, setUser] = useState(null);


    const [loading, setLoading] = useState(true);





    // Check logged in user

    const checkAuth = async () => {


        try {


            const { data } = await api.get(
                "/auth/me"
            );



            setUser(
                data.user
            );


        }


        catch(error){


            setUser(null);


        }


        finally{


            setLoading(false);


        }


    };






    useEffect(()=>{


        checkAuth();


    },[]);







    // Logout

    const logout = async () => {


        try{


            await api.post(
                "/auth/logout"
            );


        }

        catch(error){


            console.log(error);


        }


        finally{


            setUser(null);


            router.push("/");


        }


    };







    return (

        <AuthContext.Provider

            value={{

                user,

                loading,

                setUser,

                checkAuth,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );


};



export default AuthContext;