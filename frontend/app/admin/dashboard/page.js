"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
    Users,
    ShieldCheck,
    AlertTriangle,
    Activity,
    RefreshCcw,
    Siren,
    Clock3
} from "lucide-react";


import { toast } from "react-hot-toast";


import api from "@/lib/axios";
import handleError from "@/utils/handleError";




const DashboardPage = () => {


    const router = useRouter()

    const [stats,setStats] = useState({

        victims:0,

        rescues:0,

        reports:0,

        active:0

    });


    const [loading,setLoading] = useState(true);





    const fetchStats = async()=>{


        try{


            setLoading(true);



            const response = await api.get(
                "/admin/stats"
            );



            setStats(
                response.data.stats
            );


        }
        catch(error){


            console.log(error);



            handleError(error , router)

        }
        finally{


            setLoading(false);


        }


    };








    useEffect(()=>{


        fetchStats();


    },[]);







    const cards = [

        {

            title:"Total Victims",

            value:stats.victims,

            icon:Users,

            bg:"bg-blue-100",

            color:"text-blue-600"

        },


        {

            title:"Rescue Teams",

            value:stats.rescues,

            icon:ShieldCheck,

            bg:"bg-green-100",

            color:"text-green-600"

        },


        {

            title:"Emergency Reports",

            value:stats.reports,

            icon:AlertTriangle,

            bg:"bg-red-100",

            color:"text-red-600"

        },


        {

            title:"Active Missions",

            value:stats.active,

            icon:Activity,

            bg:"bg-orange-100",

            color:"text-orange-600"

        }

    ];






    return (

        <div className="space-y-8">



            {/* Header */}


            <div
                className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
                "
            >


                <div>


                    <h1
                        className="
                        text-3xl
                        font-bold
                        text-gray-800
                        "
                    >

                        Admin Overview

                    </h1>



                    <p className="mt-2 text-gray-500">

                        Manage disaster response operations from one place.

                    </p>


                </div>





                <button

                    onClick={fetchStats}

                    className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    text-white
                    transition
                    hover:bg-blue-700
                    "

                >

                    <RefreshCcw size={18}/>

                    Refresh


                </button>


            </div>







            {/* Stats Cards */}


            <div
                className="
                grid
                gap-6
                sm:grid-cols-2
                xl:grid-cols-4
                "
            >


                {
                    cards.map((card)=>{


                        const Icon = card.icon;



                        return (

                            <div

                                key={card.title}

                                className="
                                rounded-3xl
                                border
                                bg-white
                                p-6
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-xl
                                "

                            >


                                <div
                                    className="
                                    flex
                                    items-center
                                    justify-between
                                    "
                                >


                                    <div>


                                        <p
                                            className="
                                            text-sm
                                            text-gray-500
                                            "
                                        >

                                            {card.title}

                                        </p>



                                        <h2
                                            className="
                                            mt-3
                                            text-4xl
                                            font-bold
                                            text-gray-800
                                            "
                                        >

                                            {
                                                loading
                                                ?
                                                "..."
                                                :
                                                card.value
                                            }

                                        </h2>


                                    </div>





                                    <div
                                        className={`
                                        rounded-2xl
                                        p-4
                                        ${card.bg}
                                        `}
                                    >

                                        <Icon

                                            size={30}

                                            className={card.color}

                                        />

                                    </div>


                                </div>



                            </div>


                        );


                    })

                }


            </div>









            {/* Bottom Sections */}


            <div
                className="
                grid
                gap-6
                lg:grid-cols-3
                "
            >



                {/* Emergency Status */}


                <div
                    className="
                    rounded-3xl
                    border
                    bg-white
                    p-6
                    "
                >


                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <div
                            className="
                            rounded-xl
                            bg-red-100
                            p-3
                            text-red-600
                            "
                        >

                            <Siren size={22}/>

                        </div>


                        <h2 className="font-bold text-gray-800">

                            Emergency Control

                        </h2>


                    </div>



                    <p className="mt-5 text-gray-500">

                        Review and assign emergency reports.

                    </p>


                </div>








                {/* Rescue */}


                <div
                    className="
                    rounded-3xl
                    border
                    bg-white
                    p-6
                    "
                >


                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >


                        <div
                            className="
                            rounded-xl
                            bg-green-100
                            p-3
                            text-green-600
                            "
                        >

                            <ShieldCheck size={22}/>

                        </div>



                        <h2 className="font-bold text-gray-800">

                            Rescue Teams

                        </h2>


                    </div>



                    <p className="mt-5 text-gray-500">

                        Approve and manage rescue organizations.

                    </p>



                </div>








                {/* Activity */}


                <div
                    className="
                    rounded-3xl
                    border
                    bg-white
                    p-6
                    "
                >


                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <div
                            className="
                            rounded-xl
                            bg-blue-100
                            p-3
                            text-blue-600
                            "
                        >

                            <Clock3 size={22}/>

                        </div>



                        <h2 className="font-bold text-gray-800">

                            System Activity

                        </h2>


                    </div>



                    <p className="mt-5 text-gray-500">

                        Monitor recent system actions.

                    </p>


                </div>



            </div>



        </div>

    );

};


export default DashboardPage;