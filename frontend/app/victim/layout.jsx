"use client";


import ProtectedRoute from "@/components/Auth/protetected";


const VictimLayout = ({ children }) => {


    return (

        <ProtectedRoute   allowedRoles={[
                "victim"
            ]}
>

            {children}

        </ProtectedRoute>

    );


};


export default VictimLayout;