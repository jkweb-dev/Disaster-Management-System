"use client";


import {
    CheckCircle2,
    Clock3,
    ShieldAlert,
    Truck,
    Activity
} from "lucide-react";



const StatusTimeline = ({
    report
}) => {



    const steps = [

        {

            title:"Report Submitted",

            description:
            "Your emergency report has been received.",

            icon:CheckCircle2,

            completed:true

        },


        {

            title:"Waiting for Rescue Assignment",

            description:
            "Admin will assign a rescue team.",

            icon:Clock3,

            completed:
            [
                "Assigned",
                "In Progress",
                "Resolved"
            ]
            .includes(report.status)

        },


        {

            title:"Rescue Team Assigned",

            description:
            "A rescue team is handling your emergency.",

            icon:Truck,

            completed:
            [
                "In Progress",
                "Resolved"
            ]
            .includes(report.status)

        },


        {

            title:"Emergency Resolved",

            description:
            "Your emergency has been resolved.",

            icon:ShieldAlert,

            completed:
            report.status === "Resolved"

        }

    ];





    return (

        <div
            className="
            rounded-3xl
            border
            bg-white
            p-6
            shadow-sm
            "
        >


            <div
                className="
                mb-8
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

                    <Activity size={22}/>

                </div>


                <h2
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                >

                    Report Status

                </h2>


            </div>





            <div className="relative space-y-8">


                <div
                    className="
                    absolute
                    left-6
                    top-5
                    h-[85%]
                    w-0.5
                    bg-gray-200
                    "
                />



                {
                    steps.map(
                        (step,index)=>{


                            const Icon =
                            step.icon;



                            return (

                                <div
                                    key={index}
                                    className="
                                    relative
                                    flex
                                    gap-5
                                    "
                                >

                                    <div
                                        className={`
                                        z-10
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        ${
                                            step.completed

                                            ?

                                            "bg-green-100 text-green-600"

                                            :

                                            "bg-gray-100 text-gray-400"
                                        }
                                        `}
                                    >

                                        <Icon size={22}/>


                                    </div>



                                    <div>

                                        <h3
                                            className="
                                            font-semibold
                                            text-gray-800
                                            "
                                        >

                                            {step.title}

                                        </h3>


                                        <p
                                            className="
                                            mt-1
                                            text-sm
                                            text-gray-500
                                            "
                                        >

                                            {step.description}

                                        </p>


                                    </div>


                                </div>

                            );


                        }
                    )
                }


            </div>


        </div>

    );

};


export default StatusTimeline;