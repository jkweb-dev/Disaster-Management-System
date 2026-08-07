"use client";


import {

    Users,

    Clock3,

    ShieldCheck,

    XCircle

} from "lucide-react";



const RescueStats = ({
    rescues
}) => {



    const stats = [


        {

            title:"Total Teams",

            value:rescues.length,

            icon:Users,

            style:
            "bg-blue-100 text-blue-600"

        },


        {

            title:"Pending Approval",

            value:
            rescues.filter(
                item =>
                item.verificationStatus === "pending"
            ).length,

            icon:Clock3,

            style:
            "bg-orange-100 text-orange-600"

        },


        {

            title:"Approved Teams",

            value:
            rescues.filter(
                item =>
                item.verificationStatus === "approved"
            ).length,

            icon:ShieldCheck,

            style:
            "bg-green-100 text-green-600"

        },


        {

            title:"Rejected",

            value:
            rescues.filter(
                item =>
                item.verificationStatus === "rejected"
            ).length,

            icon:XCircle,

            style:
            "bg-red-100 text-red-600"

        }


    ];






    return (

        <div
            className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
            "
        >


            {
                stats.map((item)=>{


                    const Icon=item.icon;



                    return (

                        <div
                            key={item.title}

                            className="
                            rounded-3xl
                            border
                            bg-white
                            p-6
                            shadow-sm
                            transition
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

                                        {item.title}

                                    </p>


                                    <h2
                                        className="
                                        mt-3
                                        text-4xl
                                        font-bold
                                        text-gray-800
                                        "
                                    >

                                        {item.value}

                                    </h2>


                                </div>




                                <div
                                    className={`
                                    rounded-2xl
                                    p-4
                                    ${item.style}
                                    `}
                                >

                                    <Icon
                                        size={28}
                                    />

                                </div>


                            </div>



                        </div>

                    );


                })
            }



        </div>

    );

};


export default RescueStats;