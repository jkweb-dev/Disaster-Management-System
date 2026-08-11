"use client";

import {
    Users,
    UserRound,
    Baby,
    Accessibility,
    HeartPulse,
    PersonStanding
} from "lucide-react";


const PeopleAffected = ({
    peopleAffected = {}
}) => {


    const adults =
        Number(peopleAffected.adults || 0);

    const children =
        Number(peopleAffected.children || 0);

    const elderly =
        Number(peopleAffected.elderly || 0);

    const disabled =
        Number(peopleAffected.disabled || 0);

    const injured =
        Number(peopleAffected.injured || 0);


    const total =
        adults +
        children +
        elderly +
        disabled +
        injured;



    const people = [

        {
            label: "Adults",
            value: adults,
            icon: UserRound,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600"
        },

        {
            label: "Children",
            value: children,
            icon: Baby,
            iconBg: "bg-violet-50",
            iconColor: "text-violet-600"
        },

        {
            label: "Elderly",
            value: elderly,
            icon: PersonStanding,
            iconBg: "bg-amber-50",
            iconColor: "text-amber-600"
        },

        {
            label: "Disabled",
            value: disabled,
            icon: Accessibility,
            iconBg: "bg-cyan-50",
            iconColor: "text-cyan-600"
        },

        {
            label: "Injured",
            value: injured,
            icon: HeartPulse,
            iconBg: "bg-rose-50",
            iconColor: "text-rose-600"
        }

    ];



    return (

        <section
            className="
            rounded-3xl
            border
            border-slate-100
            bg-white
            p-5
            shadow-sm
            sm:p-6
            "
        >

            {/* Header */}

            <div
                className="
                flex
                items-center
                justify-between
                gap-4
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
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-rose-50
                        text-rose-600
                        "
                    >

                        <Users
                            size={21}
                        />

                    </div>


                    <div>

                        <h2
                            className="
                            text-lg
                            font-bold
                            text-slate-800
                            "
                        >

                            People Affected

                        </h2>


                        <p
                            className="
                            mt-0.5
                            text-xs
                            text-slate-400
                            "
                        >

                            Reported people requiring attention.

                        </p>

                    </div>

                </div>



                {/* Total */}

                <div
                    className="
                    shrink-0
                    rounded-2xl
                    bg-slate-900
                    px-4
                    py-2.5
                    text-center
                    "
                >

                    <p
                        className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-wider
                        text-slate-400
                        "
                    >

                        Total

                    </p>


                    <p
                        className="
                        text-xl
                        font-bold
                        text-white
                        "
                    >

                        {total}

                    </p>

                </div>

            </div>



            {/* People grid */}

            <div
                className="
                mt-6
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-3
                lg:grid-cols-5
                "
            >

                {
                    people.map(
                        (person) => {

                            const Icon =
                                person.icon;


                            return (

                                <div
                                    key={
                                        person.label
                                    }
                                    className="
                                    rounded-2xl
                                    border
                                    border-slate-100
                                    bg-slate-50
                                    p-4
                                    "
                                >

                                    <div
                                        className={`
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-xl
                                        ${person.iconBg}
                                        ${person.iconColor}
                                        `}
                                    >

                                        <Icon
                                            size={17}
                                        />

                                    </div>


                                    <p
                                        className="
                                        mt-3
                                        text-xs
                                        font-medium
                                        text-slate-400
                                        "
                                    >

                                        {
                                            person.label
                                        }

                                    </p>


                                    <p
                                        className="
                                        mt-0.5
                                        text-2xl
                                        font-bold
                                        text-slate-700
                                        "
                                    >

                                        {
                                            person.value
                                        }

                                    </p>

                                </div>

                            );

                        }
                    )
                }

            </div>



            {/* Attention message */}

            {
                injured > 0 && (

                    <div
                        className="
                        mt-4
                        flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-rose-100
                        bg-rose-50/60
                        p-4
                        "
                    >

                        <HeartPulse
                            size={18}
                            className="
                            mt-0.5
                            shrink-0
                            text-rose-500
                            "
                        />


                        <p
                            className="
                            text-xs
                            leading-5
                            text-rose-700
                            "
                        >

                            <span
                                className="font-bold"
                            >
                                {injured} injured{" "}
                                {
                                    injured === 1
                                        ? "person"
                                        : "people"
                                }
                            </span>

                            {" "}reported. Medical assistance
                            should be prioritized.

                        </p>

                    </div>

                )

            }

        </section>

    );

};


export default PeopleAffected;