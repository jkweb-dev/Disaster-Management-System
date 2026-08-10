"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    X,
    LayoutDashboard,
    Users,
    ShieldCheck,
    AlertTriangle,
    Settings,
    ChevronRight
} from "lucide-react";



const AdminSidebar = ({
    sidebarOpen,
    setSidebarOpen
}) => {


    const pathname = usePathname();



    const menu = [

        {
            name:"Dashboard",
            path:"/admin/dashboard",
            icon:LayoutDashboard
        },

        {
            name:"Rescue Management",
            path:"/admin/rescue-management",
            icon:ShieldCheck
        },

        {
            name:"Emergency Reports",
            path:"/admin/emergency-reports",
            icon:AlertTriangle
        },

        {
            name:"Victims",
            path:"/admin/victim",
            icon:Users
        },

        {
            name:"Settings",
            path:"/admin/settings",
            icon:Settings
        }

    ];




    return (

        <aside

            className={`
            
            fixed
            inset-y-0
            left-0
            z-50

            flex
            w-80
            flex-col

            border-r
            bg-white
            p-6

            transition-transform
            duration-300
            ease-in-out


            ${sidebarOpen 
                ? "translate-x-0" 
                : "-translate-x-full"
            }


            lg:static
            lg:translate-x-0

            `}

        >



            {/* Mobile Close Button */}

            <div
                className="
                mb-6
                flex
                justify-end
                lg:hidden
                "
            >

                <button

                    onClick={() => setSidebarOpen(false)}

                    className="
                    rounded-xl
                    p-2
                    hover:bg-gray-100
                    "

                >

                    <X size={24}/>

                </button>


            </div>





            {/* Brand */}


            <div
                className="
                rounded-3xl
                bg-gradient-to-br
                from-blue-600
                to-indigo-600
                p-6
                text-white
                shadow-lg
                "
            >

                <h1
                    className="
                    text-2xl
                    font-bold
                    "
                >

                    Disaster Admin

                </h1>


                <p
                    className="
                    mt-2
                    text-sm
                    text-blue-100
                    "
                >

                    Emergency Control Center

                </p>


            </div>







            {/* Navigation */}


            <nav
                className="
                mt-10
                flex-1
                space-y-4
                overflow-y-auto
                "
            >


                {
                    menu.map((item)=>{


                        const Icon = item.icon;


                        const active =
                        pathname === item.path;



                        return (

                            <Link

                                key={item.name}

                                href={item.path}

                                onClick={() =>
                                    setSidebarOpen(false)
                                }


                                className={`
                                
                                group
                                flex
                                items-center
                                justify-between

                                rounded-2xl

                                px-5
                                py-4

                                transition-all
                                duration-300


                                ${
                                    active

                                    ?

                                    "bg-blue-600 text-white shadow-lg shadow-blue-200"

                                    :

                                    "text-gray-600 hover:bg-blue-50 hover:text-blue-600"

                                }

                                `}

                            >



                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-4
                                    "
                                >


                                    <div

                                        className={`
                                        
                                        rounded-xl
                                        p-2


                                        ${
                                            active

                                            ?

                                            "bg-white/20"

                                            :

                                            "bg-gray-100 group-hover:bg-blue-100"

                                        }

                                        `}

                                    >

                                        <Icon size={22}/>


                                    </div>





                                    <span
                                        className="
                                        font-semibold
                                        "
                                    >

                                        {item.name}

                                    </span>



                                </div>






                                {
                                    active &&

                                    <ChevronRight
                                        size={20}
                                    />
                                }



                            </Link>

                        );


                    })
                }



            </nav>







            {/* System Status */}


            <div
                className="
                mt-6
                rounded-2xl
                bg-gray-50
                p-5
                "
            >

                <p
                    className="
                    text-sm
                    font-medium
                    text-gray-700
                    "
                >

                    System Status

                </p>



                <div
                    className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    "
                >

                    <span
                        className="
                        h-3
                        w-3
                        rounded-full
                        bg-green-500
                        "
                    />


                    <span
                        className="
                        text-sm
                        text-gray-500
                        "
                    >

                        All systems operational

                    </span>


                </div>


            </div>



        </aside>

    );

};


export default AdminSidebar;