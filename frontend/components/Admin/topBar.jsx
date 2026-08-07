"use client";


import {
    Bell,
    UserCircle
} from "lucide-react";



const AdminTopbar = () => {


    return (

        <header
            className="
            flex
            h-20
            items-center
            justify-between
            border-b
            bg-white
            px-6
            "
        >


            <div>


                <h2
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                >

                    Admin Dashboard

                </h2>


            </div>





            <div
                className="
                flex
                items-center
                gap-5
                "
            >


                <button
                    className="
                    rounded-full
                    p-2
                    hover:bg-gray-100
                    "
                >

                    <Bell size={22}/>

                </button>



                <div
                    className="
                    flex
                    items-center
                    gap-2
                    "
                >

                    <UserCircle
                        size={34}
                        className="text-gray-500"
                    />


                    <span className="font-medium">

                        Admin

                    </span>


                </div>


            </div>


        </header>

    );

};


export default AdminTopbar;