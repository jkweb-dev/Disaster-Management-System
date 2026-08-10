"use client";

import {
    Eye,
    Mail,
    Phone,
    MapPin,
    FileText,
    CalendarDays,
    ChevronRight,
    UserRound
} from "lucide-react";


const VictimsList = ({
    victims = [],
    onViewVictim
}) => {


    return (

        <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-gray-100
            bg-white
            shadow-sm
            "
        >

            {/* ================================================= */}
            {/* DESKTOP TABLE */}
            {/* ================================================= */}

            <div
                className="
                hidden
                overflow-x-auto
                lg:block
                "
            >

                <table
                    className="
                    w-full
                    min-w-[900px]
                    "
                >

                    <thead>

                        <tr
                            className="
                            border-b
                            border-gray-100
                            bg-gray-50/80
                            "
                        >

                            <th
                                className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                "
                            >

                                Victim

                            </th>


                            <th
                                className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                "
                            >

                                Contact

                            </th>


                            <th
                                className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                "
                            >

                                Location

                            </th>


                            <th
                                className="
                                px-6
                                py-4
                                text-center
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                "
                            >

                                Reports

                            </th>


                            <th
                                className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                "
                            >

                                Registered

                            </th>


                            <th
                                className="
                                px-6
                                py-4
                                text-right
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                "
                            >

                                Action

                            </th>

                        </tr>

                    </thead>


                    <tbody
                        className="
                        divide-y
                        divide-gray-100
                        "
                    >

                        {
                            victims.map((victim) => (

                                <tr
                                    key={victim._id}
                                    className="
                                    group
                                    transition
                                    hover:bg-blue-50/40
                                    "
                                >

                                    {/* Victim */}

                                    <td
                                        className="
                                        px-6
                                        py-5
                                        "
                                    >

                                        <div
                                            className="
                                            flex
                                            items-center
                                            gap-3
                                            "
                                        >

                                            <VictimAvatar
                                                name={
                                                    victim.name
                                                }
                                            />


                                            <div>

                                                <p
                                                    className="
                                                    font-semibold
                                                    text-gray-800
                                                    "
                                                >

                                                    {
                                                        victim.name
                                                        ||
                                                        "Unknown"
                                                    }

                                                </p>


                                                <span
                                                    className="
                                                    mt-1
                                                    inline-flex
                                                    rounded-full
                                                    bg-green-50
                                                    px-2
                                                    py-0.5
                                                    text-[10px]
                                                    font-semibold
                                                    text-green-600
                                                    "
                                                >

                                                    Victim

                                                </span>

                                            </div>

                                        </div>

                                    </td>



                                    {/* Contact */}

                                    <td
                                        className="
                                        px-6
                                        py-5
                                        "
                                    >

                                        <div
                                            className="
                                            space-y-1.5
                                            "
                                        >

                                            <div
                                                className="
                                                flex
                                                items-center
                                                gap-2
                                                text-sm
                                                text-gray-600
                                                "
                                            >

                                                <Mail
                                                    size={14}
                                                    className="
                                                    text-gray-400
                                                    "
                                                />

                                                <span>
                                                    {victim.email}
                                                </span>

                                            </div>


                                            <div
                                                className="
                                                flex
                                                items-center
                                                gap-2
                                                text-xs
                                                text-gray-500
                                                "
                                            >

                                                <Phone
                                                    size={13}
                                                    className="
                                                    text-gray-400
                                                    "
                                                />

                                                <span>
                                                    {
                                                        victim.phone
                                                        ||
                                                        "No phone"
                                                    }
                                                </span>

                                            </div>

                                        </div>

                                    </td>



                                    {/* Location */}

                                    <td
                                        className="
                                        px-6
                                        py-5
                                        "
                                    >

                                        <div
                                            className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-gray-600
                                            "
                                        >

                                            <MapPin
                                                size={15}
                                                className="
                                                text-gray-400
                                                "
                                            />

                                            {
                                                victim.city
                                                ||
                                                "Not provided"
                                            }

                                        </div>

                                    </td>



                                    {/* Reports */}

                                    <td
                                        className="
                                        px-6
                                        py-5
                                        text-center
                                        "
                                    >

                                        <div
                                            className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-orange-50
                                            px-3
                                            py-2
                                            "
                                        >

                                            <FileText
                                                size={15}
                                                className="
                                                text-orange-500
                                                "
                                            />

                                            <span
                                                className="
                                                font-bold
                                                text-orange-700
                                                "
                                            >

                                                {
                                                    victim.emergencyReportCount
                                                    ||
                                                    0
                                                }

                                            </span>

                                        </div>

                                    </td>



                                    {/* Registered */}

                                    <td
                                        className="
                                        px-6
                                        py-5
                                        "
                                    >

                                        <div
                                            className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-gray-500
                                            "
                                        >

                                            <CalendarDays
                                                size={15}
                                                className="
                                                text-gray-400
                                                "
                                            />

                                            {
                                                formatDate(
                                                    victim.createdAt
                                                )
                                            }

                                        </div>

                                    </td>



                                    {/* Action */}

                                    <td
                                        className="
                                        px-6
                                        py-5
                                        text-right
                                        "
                                    >

                                        <button
                                            type="button"
                                            onClick={() =>
                                                onViewVictim(
                                                    victim
                                                )
                                            }
                                            className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-gray-900
                                            px-4
                                            py-2.5
                                            text-xs
                                            font-semibold
                                            text-white
                                            transition
                                            hover:bg-blue-600
                                            "
                                        >

                                            <Eye
                                                size={15}
                                            />

                                            View Details

                                        </button>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>



            {/* ================================================= */}
            {/* MOBILE / TABLET CARDS */}
            {/* ================================================= */}

            <div
                className="
                divide-y
                divide-gray-100
                lg:hidden
                "
            >

                {
                    victims.map((victim) => (

                        <div
                            key={victim._id}
                            className="
                            p-4
                            transition
                            hover:bg-gray-50
                            sm:p-5
                            "
                        >

                            {/* Top */}

                            <div
                                className="
                                flex
                                items-start
                                justify-between
                                gap-3
                                "
                            >

                                <div
                                    className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-3
                                    "
                                >

                                    <VictimAvatar
                                        name={
                                            victim.name
                                        }
                                    />


                                    <div className="min-w-0">

                                        <h3
                                            className="
                                            truncate
                                            font-bold
                                            text-gray-800
                                            "
                                        >

                                            {
                                                victim.name
                                                ||
                                                "Unknown"
                                            }

                                        </h3>


                                        <p
                                            className="
                                            mt-0.5
                                            truncate
                                            text-xs
                                            text-gray-400
                                            "
                                        >

                                            {victim.email}

                                        </p>

                                    </div>

                                </div>


                                <div
                                    className="
                                    shrink-0
                                    rounded-xl
                                    bg-orange-50
                                    px-3
                                    py-2
                                    text-center
                                    "
                                >

                                    <p
                                        className="
                                        text-lg
                                        font-bold
                                        text-orange-600
                                        "
                                    >

                                        {
                                            victim.emergencyReportCount
                                            ||
                                            0
                                        }

                                    </p>


                                    <p
                                        className="
                                        text-[10px]
                                        font-medium
                                        text-orange-500
                                        "
                                    >

                                        Reports

                                    </p>

                                </div>

                            </div>



                            {/* Information */}

                            <div
                                className="
                                mt-4
                                grid
                                grid-cols-1
                                gap-2
                                sm:grid-cols-2
                                "
                            >

                                <InfoRow
                                    icon={Phone}
                                    value={
                                        victim.phone
                                        ||
                                        "No phone"
                                    }
                                />


                                <InfoRow
                                    icon={MapPin}
                                    value={
                                        victim.city
                                        ||
                                        "Location unavailable"
                                    }
                                />


                                <InfoRow
                                    icon={CalendarDays}
                                    value={
                                        formatDate(
                                            victim.createdAt
                                        )
                                    }
                                />

                            </div>



                            {/* Action */}

                            <button
                                type="button"
                                onClick={() =>
                                    onViewVictim(
                                        victim
                                    )
                                }
                                className="
                                mt-4
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-gray-900
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-blue-600
                                "
                            >

                                <Eye
                                    size={16}
                                />

                                View Victim Details

                                <ChevronRight
                                    size={16}
                                />

                            </button>

                        </div>

                    ))
                }

            </div>

        </div>

    );

};



/*
|--------------------------------------------------------------------------
| Avatar
|--------------------------------------------------------------------------
*/

const VictimAvatar = ({
    name
}) => {

    const initial =
        name
            ?.trim()
            ?.charAt(0)
            ?.toUpperCase()
        ||
        "?";


    return (

        <div
            className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            to-indigo-600
            text-sm
            font-bold
            text-white
            shadow-sm
            "
        >

            {initial}

        </div>

    );

};



/*
|--------------------------------------------------------------------------
| Mobile Info Row
|--------------------------------------------------------------------------
*/

const InfoRow = ({
    icon: Icon,
    value
}) => (

    <div
        className="
        flex
        min-w-0
        items-center
        gap-2
        rounded-xl
        bg-gray-50
        px-3
        py-2.5
        text-xs
        text-gray-500
        "
    >

        <Icon
            size={14}
            className="
            shrink-0
            text-gray-400
            "
        />

        <span
            className="
            truncate
            "
        >

            {value}

        </span>

    </div>

);



/*
|--------------------------------------------------------------------------
| Date Formatter
|--------------------------------------------------------------------------
*/

const formatDate = (
    date
) => {

    if (!date) {
        return "—";
    }


    return new Date(
        date
    ).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    );

};


export default VictimsList;