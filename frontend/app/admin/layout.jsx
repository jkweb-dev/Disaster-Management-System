"use client";


import AdminSidebar from "@/components/Admin/sideBar";
import AdminTopbar from "@/components/Admin/topBar";



const AdminLayout = ({children}) => {


    return (

        

        <div className="flex min-h-screen bg-gray-50">


            <AdminSidebar />



            <div className="flex flex-1 flex-col">


                <AdminTopbar />



                <main className="flex-1 p-6">

                    {children}

                </main>


            </div>


        </div>

       

    );

};


export default AdminLayout;