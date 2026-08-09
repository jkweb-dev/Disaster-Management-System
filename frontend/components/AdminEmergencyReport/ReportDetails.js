"use client";

import {
    X,
    MapPin,
    Phone,
    Mail,
    Users,
    AlertTriangle,
    Clock,
    ShieldCheck,
    Image as ImageIcon
} from "lucide-react";

import RescueTeamSelector from "./rescueTeamselector";


const EmergencyReportDetails = ({
    report,
    onClose,

    // Rescue assignment
    rescueTeams = [],
    selectedRescue,
    onSelectRescue,
    onAssignRescue,
    rescueTeamsLoading = false,
    assigningRescue = false
}) => {


    if (!report) {
        return null;
    }



    // --------------------------------------------------
    // Severity styling
    // --------------------------------------------------

    const severityStyles = {

        Low:
            "bg-green-100 text-green-700",

        Medium:
            "bg-yellow-100 text-yellow-700",

        High:
            "bg-orange-100 text-orange-700",

        Critical:
            "bg-red-100 text-red-700"

    };



    // --------------------------------------------------
    // Status styling
    // --------------------------------------------------

    const statusStyles = {

        Pending:
            "bg-yellow-100 text-yellow-700",

        Assigned:
            "bg-blue-100 text-blue-700",

        "In Progress":
            "bg-purple-100 text-purple-700",

        Resolved:
            "bg-green-100 text-green-700",

        Rejected:
            "bg-red-100 text-red-700"

    };



    const assignedTeam =
        report.assignedRescue;



    const alreadyAssigned =
        Boolean(assignedTeam);



    return (

        <div
            className="
            fixed
            inset-0
            z-[60]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
            backdrop-blur-sm
            "
        >

            <div
                className="
                flex
                max-h-[95vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-2xl
                "
            >


                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <div
                    className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-100
                    px-6
                    py-5
                    "
                >

                    <div>

                        <div
                            className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            "
                        >

                            <h2
                                className="
                                text-xl
                                font-bold
                                text-gray-800
                                "
                            >

                                Emergency Report

                            </h2>


                            <span
                                className={`
                                rounded-full
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                ${
                                    severityStyles[
                                        report.severity
                                    ]
                                    ||
                                    "bg-gray-100 text-gray-600"
                                }
                                `}
                            >

                                {report.severity}

                            </span>


                            <span
                                className={`
                                rounded-full
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                ${
                                    statusStyles[
                                        report.status
                                    ]
                                    ||
                                    "bg-gray-100 text-gray-600"
                                }
                                `}
                            >

                                {report.status}

                            </span>

                        </div>


                        <p
                            className="
                            mt-1
                            text-sm
                            text-gray-500
                            "
                        >

                            {report.title}

                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="
                        rounded-xl
                        p-2
                        text-gray-400
                        transition
                        hover:bg-gray-100
                        hover:text-gray-700
                        "
                    >

                        <X size={22} />

                    </button>

                </div>



                {/* ================================================= */}
                {/* BODY */}
                {/* ================================================= */}

                <div
                    className="
                    overflow-y-auto
                    p-6
                    "
                >

                    <div
                        className="
                        grid
                        gap-6
                        lg:grid-cols-3
                        "
                    >


                        {/* ========================================= */}
                        {/* LEFT / MAIN */}
                        {/* ========================================= */}

                        <div
                            className="
                            space-y-6
                            lg:col-span-2
                            "
                        >


                            {/* Emergency Description */}

                            <section
                                className="
                                rounded-2xl
                                border
                                border-gray-100
                                bg-gray-50
                                p-5
                                "
                            >

                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    "
                                >

                                    <AlertTriangle
                                        size={19}
                                        className="
                                        text-orange-500
                                        "
                                    />

                                    <h3
                                        className="
                                        font-bold
                                        text-gray-800
                                        "
                                    >

                                        Emergency Details

                                    </h3>

                                </div>


                                <div
                                    className="
                                    mt-4
                                    space-y-3
                                    "
                                >

                                    <div>

                                        <p
                                            className="
                                            text-xs
                                            font-medium
                                            text-gray-400
                                            "
                                        >

                                            Emergency Type

                                        </p>

                                        <p
                                            className="
                                            mt-1
                                            font-semibold
                                            text-gray-800
                                            "
                                        >

                                            {report.emergencyType}

                                        </p>

                                    </div>


                                    <div>

                                        <p
                                            className="
                                            text-xs
                                            font-medium
                                            text-gray-400
                                            "
                                        >

                                            Description

                                        </p>

                                        <p
                                            className="
                                            mt-1
                                            text-sm
                                            leading-6
                                            text-gray-600
                                            "
                                        >

                                            {report.description}

                                        </p>

                                    </div>

                                </div>

                            </section>



                            {/* People Affected */}

                            <section
                                className="
                                rounded-2xl
                                border
                                border-gray-100
                                bg-white
                                p-5
                                "
                            >

                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    "
                                >

                                    <Users
                                        size={19}
                                        className="
                                        text-blue-500
                                        "
                                    />

                                    <h3
                                        className="
                                        font-bold
                                        text-gray-800
                                        "
                                    >

                                        People Affected

                                    </h3>

                                </div>


                                <div
                                    className="
                                    mt-4
                                    grid
                                    grid-cols-2
                                    gap-3
                                    sm:grid-cols-5
                                    "
                                >

                                    <AffectedItem
                                        label="Adults"
                                        value={
                                            report.peopleAffected?.adults
                                            || 0
                                        }
                                    />

                                    <AffectedItem
                                        label="Children"
                                        value={
                                            report.peopleAffected?.children
                                            || 0
                                        }
                                    />

                                    <AffectedItem
                                        label="Elderly"
                                        value={
                                            report.peopleAffected?.elderly
                                            || 0
                                        }
                                    />

                                    <AffectedItem
                                        label="Disabled"
                                        value={
                                            report.peopleAffected?.disabled
                                            || 0
                                        }
                                    />

                                    <AffectedItem
                                        label="Injured"
                                        value={
                                            report.peopleAffected?.injured
                                            || 0
                                        }
                                    />

                                </div>

                            </section>



                            {/* Assistance */}

                            {
                                report.assistanceRequired?.length > 0 && (

                                    <section
                                        className="
                                        rounded-2xl
                                        border
                                        border-gray-100
                                        bg-white
                                        p-5
                                        "
                                    >

                                        <h3
                                            className="
                                            font-bold
                                            text-gray-800
                                            "
                                        >

                                            Assistance Required

                                        </h3>


                                        <div
                                            className="
                                            mt-3
                                            flex
                                            flex-wrap
                                            gap-2
                                            "
                                        >

                                            {
                                                report.assistanceRequired.map(
                                                    (
                                                        assistance,
                                                        index
                                                    ) => (

                                                        <span
                                                            key={
                                                                `${assistance}-${index}`
                                                            }
                                                            className="
                                                            rounded-full
                                                            bg-blue-50
                                                            px-3
                                                            py-1.5
                                                            text-xs
                                                            font-semibold
                                                            text-blue-700
                                                            "
                                                        >

                                                            {assistance}

                                                        </span>

                                                    )
                                                )
                                            }

                                        </div>

                                    </section>

                                )
                            }



                            {/* Location */}

                            <section
                                className="
                                rounded-2xl
                                border
                                border-gray-100
                                bg-white
                                p-5
                                "
                            >

                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    "
                                >

                                    <MapPin
                                        size={19}
                                        className="
                                        text-red-500
                                        "
                                    />

                                    <h3
                                        className="
                                        font-bold
                                        text-gray-800
                                        "
                                    >

                                        Emergency Location

                                    </h3>

                                </div>


                                <div
                                    className="
                                    mt-4
                                    space-y-2
                                    text-sm
                                    text-gray-600
                                    "
                                >

                                    {
                                        report.location?.address && (

                                            <p>

                                                {
                                                    report.location.address
                                                }

                                            </p>

                                        )
                                    }


                                    {
                                        report.location?.city && (

                                            <p>

                                                City:
                                                {" "}
                                                <strong>
                                                    {
                                                        report.location.city
                                                    }
                                                </strong>

                                            </p>

                                        )
                                    }


                                    {
                                        report.location?.landmark && (

                                            <p>

                                                Landmark:
                                                {" "}
                                                {
                                                    report.location.landmark
                                                }

                                            </p>

                                        )
                                    }

                                </div>

                            </section>



                            {/* Images */}

                            {
                                report.images?.length > 0 && (

                                    <section
                                        className="
                                        rounded-2xl
                                        border
                                        border-gray-100
                                        bg-white
                                        p-5
                                        "
                                    >

                                        <div
                                            className="
                                            flex
                                            items-center
                                            gap-2
                                            "
                                        >

                                            <ImageIcon
                                                size={19}
                                                className="
                                                text-purple-500
                                                "
                                            />

                                            <h3
                                                className="
                                                font-bold
                                                text-gray-800
                                                "
                                            >

                                                Evidence Images

                                            </h3>

                                        </div>


                                        <div
                                            className="
                                            mt-4
                                            grid
                                            grid-cols-2
                                            gap-3
                                            sm:grid-cols-3
                                            "
                                        >

                                            {
                                                report.images.map(
                                                    (
                                                        image,
                                                        index
                                                    ) => (

                                                        <img
                                                            key={index}
                                                            src={image.url}
                                                            alt={
                                                                `Emergency evidence ${index + 1}`
                                                            }
                                                            className="
                                                            aspect-video
                                                            w-full
                                                            rounded-xl
                                                            object-cover
                                                            "
                                                        />

                                                    )
                                                )
                                            }

                                        </div>

                                    </section>

                                )
                            }

                        </div>



                        {/* ========================================= */}
                        {/* RIGHT SIDEBAR */}
                        {/* ========================================= */}

                        <div
                            className="
                            space-y-5
                            "
                        >


                            {/* Victim */}

                            <section
                                className="
                                rounded-2xl
                                border
                                border-gray-100
                                bg-white
                                p-5
                                shadow-sm
                                "
                            >

                                <h3
                                    className="
                                    font-bold
                                    text-gray-800
                                    "
                                >

                                    Victim Information

                                </h3>


                                <div
                                    className="
                                    mt-4
                                    space-y-4
                                    "
                                >

                                    <InfoItem
                                        label="Name"
                                        value={report.name}
                                    />


                                    <div
                                        className="
                                        flex
                                        gap-3
                                        "
                                    >

                                        <Mail
                                            size={17}
                                            className="
                                            mt-0.5
                                            text-gray-400
                                            "
                                        />

                                        <div>

                                            <p
                                                className="
                                                text-xs
                                                text-gray-400
                                                "
                                            >

                                                Email

                                            </p>

                                            <p
                                                className="
                                                mt-1
                                                break-all
                                                text-sm
                                                font-medium
                                                text-gray-700
                                                "
                                            >

                                                {report.email}

                                            </p>

                                        </div>

                                    </div>


                                    <div
                                        className="
                                        flex
                                        gap-3
                                        "
                                    >

                                        <Phone
                                            size={17}
                                            className="
                                            mt-0.5
                                            text-gray-400
                                            "
                                        />

                                        <div>

                                            <p
                                                className="
                                                text-xs
                                                text-gray-400
                                                "
                                            >

                                                Phone

                                            </p>

                                            <p
                                                className="
                                                mt-1
                                                text-sm
                                                font-medium
                                                text-gray-700
                                                "
                                            >

                                                {report.phone}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </section>



                            {/* ================================================= */}
                            {/* RESCUE ASSIGNMENT */}
                            {/* ================================================= */}

                            <section
                                className="
                                rounded-2xl
                                border
                                border-gray-100
                                bg-white
                                p-5
                                shadow-sm
                                "
                            >

                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    "
                                >

                                    <ShieldCheck
                                        size={20}
                                        className="
                                        text-blue-600
                                        "
                                    />

                                    <h3
                                        className="
                                        font-bold
                                        text-gray-800
                                        "
                                    >

                                        Rescue Assignment

                                    </h3>

                                </div>



                                {
                                    alreadyAssigned

                                        ? (

                                            <div
                                                className="
                                                mt-4
                                                rounded-2xl
                                                border
                                                border-blue-100
                                                bg-blue-50
                                                p-4
                                                "
                                            >

                                                <div
                                                    className="
                                                    flex
                                                    items-start
                                                    gap-3
                                                    "
                                                >

                                                    <div
                                                        className="
                                                        rounded-xl
                                                        bg-blue-600
                                                        p-2
                                                        text-white
                                                        "
                                                    >

                                                        <ShieldCheck
                                                            size={18}
                                                        />

                                                    </div>


                                                    <div>

                                                        <p
                                                            className="
                                                            text-xs
                                                            font-medium
                                                            text-blue-600
                                                            "
                                                        >

                                                            Assigned Rescue Team

                                                        </p>


                                                        <p
                                                            className="
                                                            mt-1
                                                            font-bold
                                                            text-gray-800
                                                            "
                                                        >

                                                            {
                                                                assignedTeam.organizationName
                                                                ||
                                                                "Rescue Team"
                                                            }

                                                        </p>


                                                        {
                                                            assignedTeam.contactPerson && (

                                                                <p
                                                                    className="
                                                                    mt-1
                                                                    text-xs
                                                                    text-gray-500
                                                                    "
                                                                >

                                                                    {
                                                                        assignedTeam.contactPerson
                                                                    }

                                                                </p>

                                                            )
                                                        }


                                                        {
                                                            report.assignedAt && (

                                                                <div
                                                                    className="
                                                                    mt-3
                                                                    flex
                                                                    items-center
                                                                    gap-2
                                                                    text-xs
                                                                    text-gray-500
                                                                    "
                                                                >

                                                                    <Clock
                                                                        size={14}
                                                                    />

                                                                    Assigned
                                                                    {" "}
                                                                    {new Date(
                                                                        report.assignedAt
                                                                    ).toLocaleString()}

                                                                </div>

                                                            )
                                                        }

                                                    </div>

                                                </div>

                                            </div>

                                        )

                                        : (

                                            <>

                                                <p
                                                    className="
                                                    mt-2
                                                    text-xs
                                                    leading-5
                                                    text-gray-500
                                                    "
                                                >

                                                    Select an approved rescue
                                                    team to handle this
                                                    emergency.

                                                </p>


                                                <div className="mt-4">

                                                    <RescueTeamSelector

                                                        rescueTeams={
                                                            rescueTeams
                                                        }

                                                        selectedRescue={
                                                            selectedRescue
                                                        }

                                                        onSelect={
                                                            onSelectRescue
                                                        }

                                                        loading={
                                                            rescueTeamsLoading
                                                        }

                                                    />

                                                </div>


                                                <button
                                                    type="button"
                                                    onClick={
                                                        onAssignRescue
                                                    }
                                                    disabled={
                                                        !selectedRescue
                                                        ||
                                                        assigningRescue
                                                    }
                                                    className="
                                                    mt-4
                                                    flex
                                                    w-full
                                                    items-center
                                                    justify-center
                                                    gap-2
                                                    rounded-xl
                                                    bg-blue-600
                                                    px-4
                                                    py-3
                                                    text-sm
                                                    font-semibold
                                                    text-white
                                                    shadow-lg
                                                    shadow-blue-100
                                                    transition
                                                    hover:bg-blue-700
                                                    disabled:cursor-not-allowed
                                                    disabled:opacity-50
                                                    "
                                                >

                                                    <ShieldCheck
                                                        size={17}
                                                    />

                                                    {
                                                        assigningRescue

                                                            ? "Assigning..."

                                                            : "Assign Rescue Team"
                                                    }

                                                </button>

                                            </>

                                        )

                                }

                            </section>



                            {/* Created */}

                            <section
                                className="
                                rounded-2xl
                                bg-gray-50
                                p-5
                                "
                            >

                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-3
                                    "
                                >

                                    <Clock
                                        size={18}
                                        className="
                                        text-gray-400
                                        "
                                    />

                                    <div>

                                        <p
                                            className="
                                            text-xs
                                            text-gray-400
                                            "
                                        >

                                            Report Created

                                        </p>


                                        <p
                                            className="
                                            mt-1
                                            text-sm
                                            font-semibold
                                            text-gray-700
                                            "
                                        >

                                            {
                                                report.createdAt
                                                    ?

                                                    new Date(
                                                        report.createdAt
                                                    ).toLocaleString()

                                                    :

                                                    "—"
                                            }

                                        </p>

                                    </div>

                                </div>

                            </section>

                        </div>

                    </div>

                </div>



                {/* FOOTER */}

                <div
                    className="
                    flex
                    justify-end
                    border-t
                    border-gray-100
                    bg-gray-50
                    px-6
                    py-4
                    "
                >

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                        rounded-xl
                        bg-gray-900
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-gray-800
                        "
                    >

                        Close

                    </button>

                </div>

            </div>

        </div>

    );

};



/*
|--------------------------------------------------------------------------
| Small components
|--------------------------------------------------------------------------
*/

const InfoItem = ({
    label,
    value
}) => (

    <div>

        <p
            className="
            text-xs
            text-gray-400
            "
        >

            {label}

        </p>

        <p
            className="
            mt-1
            text-sm
            font-semibold
            text-gray-700
            "
        >

            {value || "—"}

        </p>

    </div>

);



const AffectedItem = ({
    label,
    value
}) => (

    <div
        className="
        rounded-xl
        bg-gray-50
        p-3
        text-center
        "
    >

        <p
            className="
            text-lg
            font-bold
            text-gray-800
            "
        >

            {value}

        </p>


        <p
            className="
            mt-1
            text-[11px]
            text-gray-500
            "
        >

            {label}

        </p>

    </div>

);


export default EmergencyReportDetails;