"use client";


import {
    Bell,
    UserCircle,
    Menu
} from "lucide-react";

import NotificationBell from "../Notifiy";



const AdminTopbar = ({
    setSidebarOpen
}) => {


    return (

        <header
            className="
            flex
            h-20
            items-center
            justify-between
            border-b
            bg-white
            px-4
            sm:px-6
            "
        >




            {/* Left Section */}


            <div
                className="
                flex
                items-center
                gap-3
                "
            >


<NotificationBell/>

                {/* Mobile Menu Button */}


                <button

                    onClick={() =>
                        setSidebarOpen(true)
                    }

                    className="
                    rounded-xl
                    p-2
                    transition
                    hover:bg-gray-100
                    lg:hidden
                    "

                >

                    <Menu size={24}/>

                </button>







                <h2

                    className="
                    text-lg
                    font-bold
                    text-gray-800
                    sm:text-xl
                    "

                >

                    Admin Dashboard

                </h2>



            </div>









            {/* Right Section */}


            <div

                className="
                flex
                items-center
                gap-3
                sm:gap-5
                "

            >




                {/* Notification */}


                <button

                    className="
                    rounded-full
                    p-2
                    transition
                    hover:bg-gray-100
                    "

                >

                    <Bell
                        size={22}
                    />

                </button>







                {/* Profile */}


                <div

                    className="
                    flex
                    items-center
                    gap-2
                    "

                >


                    <UserCircle

                        size={34}

                        className="
                        text-gray-500
                        "

                    />



                    <span

                        className="
                        hidden
                        font-medium
                        text-gray-700
                        sm:block
                        "

                    >

                        Admin

                    </span>



                </div>



            </div>




        </header>

    );

};



export default AdminTopbar;