"use client";

import {
    X,
    ShieldCheck,
    MapPin,
    Users,
    AlertTriangle,
    Loader2
} from "lucide-react";


const AssignRescueConfirmation = ({
    team,
    report,
    onCancel,
    onConfirm,
    loading = false
}) => {

    if (!team || !report) {
        return null;
    }


    return (

        <div
            className="
            fixed
            inset-0
            z-[80]
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
                w-full
                max-w-lg
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-2xl
                "
            >

                {/* Header */}

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
                            p-2.5
                            text-blue-600
                            "
                        >

                            <ShieldCheck
                                size={22}
                            />

                        </div>


                        <div>

                            <h3
                                className="
                                font-bold
                                text-gray-800
                                "
                            >

                                Confirm Assignment

                            </h3>


                            <p
                                className="
                                text-xs
                                text-gray-500
                                "
                            >

                                Assign rescue team to this emergency

                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        className="
                        rounded-xl
                        p-2
                        text-gray-400
                        transition
                        hover:bg-gray-100
                        hover:text-gray-700
                        disabled:opacity-50
                        "
                    >

                        <X size={20}/>

                    </button>

                </div>



                {/* Content */}

                <div className="p-6">

                    {/* Warning */}

                    <div
                        className="
                        flex
                        gap-3
                        rounded-2xl
                        border
                        border-orange-100
                        bg-orange-50
                        p-4
                        "
                    >

                        <AlertTriangle
                            size={20}
                            className="
                            mt-0.5
                            shrink-0
                            text-orange-500
                            "
                        />


                        <p
                            className="
                            text-sm
                            leading-6
                            text-orange-800
                            "
                        >

                            You are about to assign this rescue team
                            to the selected emergency. The report
                            status will automatically change to
                            <strong> Assigned</strong>.

                        </p>

                    </div>



                    {/* Emergency */}

                    <div
                        className="
                        mt-5
                        rounded-2xl
                        bg-gray-50
                        p-4
                        "
                    >

                        <p
                            className="
                            text-xs
                            font-medium
                            text-gray-400
                            "
                        >

                            Emergency

                        </p>


                        <h4
                            className="
                            mt-1
                            font-bold
                            text-gray-800
                            "
                        >

                            {report.title}

                        </h4>


                        <p
                            className="
                            mt-1
                            text-sm
                            text-gray-500
                            "
                        >

                            {report.emergencyType}

                        </p>

                    </div>



                    {/* Rescue Team */}

                    <div
                        className="
                        mt-3
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
                                p-2.5
                                text-white
                                "
                            >

                                <ShieldCheck
                                    size={20}
                                />

                            </div>


                            <div className="min-w-0">

                                <p
                                    className="
                                    text-xs
                                    font-medium
                                    text-blue-600
                                    "
                                >

                                    Rescue Team

                                </p>


                                <h4
                                    className="
                                    mt-1
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
                                            text-sm
                                            text-gray-600
                                            "
                                        >

                                            {team.contactPerson}

                                        </p>

                                    )
                                }


                                <div
                                    className="
                                    mt-3
                                    flex
                                    flex-wrap
                                    gap-3
                                    text-xs
                                    text-gray-500
                                    "
                                >

                                    {
                                        team.teamSize != null && (

                                            <span
                                                className="
                                                flex
                                                items-center
                                                gap-1
                                                "
                                            >

                                                <Users
                                                    size={14}
                                                />

                                                {team.teamSize}
                                                {" "}members

                                            </span>

                                        )
                                    }


                                    {
                                        team.serviceArea && (

                                            <span
                                                className="
                                                flex
                                                items-center
                                                gap-1
                                                "
                                            >

                                                <MapPin
                                                    size={14}
                                                />

                                                {
                                                    team.serviceArea
                                                }

                                            </span>

                                        )
                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                {/* Actions */}

                <div
                    className="
                    flex
                    flex-col-reverse
                    gap-3
                    border-t
                    border-gray-100
                    bg-gray-50
                    p-5
                    sm:flex-row
                    sm:justify-end
                    "
                >

                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        className="
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-gray-700
                        transition
                        hover:bg-gray-100
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        "
                    >

                        Cancel

                    </button>


                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={loading}
                        className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-200
                        transition
                        hover:bg-blue-700
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        "
                    >

                        {
                            loading

                                ? (

                                    <>
                                        <Loader2
                                            size={17}
                                            className="animate-spin"
                                        />

                                        Assigning...

                                    </>

                                )

                                : (

                                    <>
                                        <ShieldCheck
                                            size={17}
                                        />

                                        Confirm Assignment

                                    </>

                                )
                        }

                    </button>

                </div>

            </div>

        </div>

    );

};


export default AssignRescueConfirmation;