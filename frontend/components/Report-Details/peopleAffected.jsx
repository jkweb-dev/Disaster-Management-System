"use client";

import {
    Users,
    UserRound,
    Baby,
    Accessibility,
    HeartPulse
} from "lucide-react";


const PeopleAffected = ({
    report
}) => {


    const people = [

        {
            title:"Adults",
            value:report.peopleAffected?.adults || 0,
            icon:Users
        },

        {
            title:"Children",
            value:report.peopleAffected?.children || 0,
            icon:Baby
        },

        {
            title:"Elderly",
            value:report.peopleAffected?.elderly || 0,
            icon:UserRound
        },

        {
            title:"Disabled",
            value:report.peopleAffected?.disabled || 0,
            icon:Accessibility
        },

        {
            title:"Injured",
            value:report.peopleAffected?.injured || 0,
            icon:HeartPulse
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
                mb-6
                flex
                items-center
                gap-3
                "
            >

                <div
                    className="
                    rounded-xl
                    bg-purple-100
                    p-3
                    text-purple-600
                    "
                >

                    <Users size={22}/>

                </div>


                <h2
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                >

                    People Affected

                </h2>


            </div>





            <div
                className="
                grid
                grid-cols-2
                gap-4
                sm:grid-cols-3
                lg:grid-cols-5
                "
            >

                {
                    people.map((item)=>{


                        const Icon=item.icon;


                        return (

                            <div
                                key={item.title}
                                className="
                                rounded-2xl
                                bg-gray-50
                                p-4
                                text-center
                                "
                            >

                                <div
                                    className="
                                    mx-auto
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    text-purple-600
                                    shadow-sm
                                    "
                                >

                                    <Icon size={22}/>

                                </div>


                                <h3
                                    className="
                                    mt-3
                                    text-2xl
                                    font-bold
                                    text-gray-800
                                    "
                                >

                                    {item.value}

                                </h3>


                                <p
                                    className="
                                    mt-1
                                    text-sm
                                    text-gray-500
                                    "
                                >

                                    {item.title}

                                </p>


                            </div>

                        );


                    })
                }


            </div>


        </div>

    );

};


export default PeopleAffected;