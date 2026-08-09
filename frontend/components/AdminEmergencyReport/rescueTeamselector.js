"use client";

import {
    ShieldCheck,
    Users,
    MapPin,
    Phone,
    CheckCircle2,
    Loader2
} from "lucide-react";


const RescueTeamSelector = ({
    rescueTeams = [],
    selectedRescue,
    onSelect,
    loading = false
}) => {

    if (loading) {

        return (

            <div
                className="
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-100
                bg-gray-50
                py-12
                "
            >

                <div className="text-center">

                    <Loader2
                        size={28}
                        className="
                        mx-auto
                        animate-spin
                        text-blue-600
                        "
                    />

                    <p
                        className="
                        mt-3
                        text-sm
                        font-medium
                        text-gray-600
                        "
                    >

                        Loading approved rescue teams...

                    </p>

                </div>

            </div>

        );

    }


    if (!rescueTeams.length) {

        return (

            <div
                className="
                rounded-2xl
                border
                border-orange-100
                bg-orange-50
                p-6
                text-center
                "
            >

                <ShieldCheck
                    size={30}
                    className="
                    mx-auto
                    text-orange-500
                    "
                />


                <h4
                    className="
                    mt-3
                    font-semibold
                    text-gray-800
                    "
                >

                    No approved rescue teams

                </h4>


                <p
                    className="
                    mt-1
                    text-sm
                    text-gray-500
                    "
                >

                    There are currently no approved rescue teams
                    available for assignment.

                </p>

            </div>

        );

    }


    return (

        <div className="space-y-3">

            {
                rescueTeams.map((team) => {

                    const selected =
                        selectedRescue === team._id;


                    return (

                        <button

                            key={team._id}

                            type="button"

                            onClick={() =>
                                onSelect(team)
                            }

                            className={`
                            w-full
                            rounded-2xl
                            border
                            p-4
                            text-left
                            transition-all
                            duration-200
                            ${
                                selected

                                ?

                                "border-blue-500 bg-blue-50 shadow-md shadow-blue-100"

                                :

                                "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/40"
                            }
                            `}

                        >

                            <div
                                className="
                                flex
                                items-start
                                gap-3
                                "
                            >

                                {/* Icon */}

                                <div
                                    className={`
                                    shrink-0
                                    rounded-xl
                                    p-3
                                    ${
                                        selected

                                        ?

                                        "bg-blue-600 text-white"

                                        :

                                        "bg-blue-100 text-blue-600"
                                    }
                                    `}
                                >

                                    <ShieldCheck
                                        size={21}
                                    />

                                </div>


                                {/* Details */}

                                <div className="min-w-0 flex-1">

                                    <div
                                        className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-3
                                        "
                                    >

                                        <div>

                                            <h4
                                                className="
                                                font-bold
                                                text-gray-800
                                                "
                                            >

                                                {
                                                    team.organizationName
                                                    ||
                                                    "Rescue Team"
                                                }

                                            </h4>


                                            {
                                                team.contactPerson && (

                                                    <p
                                                        className="
                                                        mt-1
                                                        text-xs
                                                        text-gray-500
                                                        "
                                                    >

                                                        Contact:
                                                        {" "}
                                                        {
                                                            team.contactPerson
                                                        }

                                                    </p>

                                                )
                                            }

                                        </div>


                                        {
                                            selected && (

                                                <CheckCircle2
                                                    size={21}
                                                    className="
                                                    shrink-0
                                                    text-blue-600
                                                    "
                                                />

                                            )
                                        }

                                    </div>



                                    {/* Information */}

                                    <div
                                        className="
                                        mt-3
                                        grid
                                        gap-2
                                        text-xs
                                        text-gray-500
                                        sm:grid-cols-2
                                        "
                                    >

                                        {
                                            team.teamSize != null && (

                                                <div
                                                    className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    "
                                                >

                                                    <Users
                                                        size={14}
                                                    />

                                                    Team size:
                                                    {" "}
                                                    {team.teamSize}

                                                </div>

                                            )
                                        }


                                        {
                                            team.serviceArea && (

                                                <div
                                                    className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    "
                                                >

                                                    <MapPin
                                                        size={14}
                                                    />

                                                    {
                                                        team.serviceArea
                                                    }

                                                </div>

                                            )
                                        }


                                        {
                                            team.phone && (

                                                <div
                                                    className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    "
                                                >

                                                    <Phone
                                                        size={14}
                                                    />

                                                    {
                                                        team.phone
                                                    }

                                                </div>

                                            )
                                        }

                                    </div>



                                    {/* Categories */}

                                    {
                                        team.emergencyCategories
                                            ?.length > 0 && (

                                            <div
                                                className="
                                                mt-3
                                                flex
                                                flex-wrap
                                                gap-1.5
                                                "
                                            >

                                                {
                                                    team.emergencyCategories.map(
                                                        (
                                                            category,
                                                            index
                                                        ) => (

                                                            <span
                                                                key={
                                                                    `${category}-${index}`
                                                                }
                                                                className="
                                                                rounded-full
                                                                bg-gray-100
                                                                px-2.5
                                                                py-1
                                                                text-[11px]
                                                                font-medium
                                                                text-gray-600
                                                                "
                                                            >

                                                                {category}

                                                            </span>

                                                        )
                                                    )
                                                }

                                            </div>

                                        )
                                    }

                                </div>

                            </div>

                        </button>

                    );

                })
            }

        </div>

    );

};


export default RescueTeamSelector;