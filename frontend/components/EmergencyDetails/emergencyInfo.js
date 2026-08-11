"use client";

import {
    FileText,
    Siren,
    ClipboardList,
    AlignLeft
} from "lucide-react";


const EmergencyInformation = ({
    emergency
}) => {

    const assistance =
        emergency?.assistanceRequired || [];


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
                    bg-blue-50
                    text-blue-600
                    "
                >

                    <FileText
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

                        Emergency Information

                    </h2>


                    <p
                        className="
                        mt-0.5
                        text-xs
                        text-slate-400
                        "
                    >

                        Details provided by the victim
                        about the emergency.

                    </p>

                </div>

            </div>



            {/* Emergency type */}

            <div
                className="
                mt-6
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                "
            >

                <div
                    className="
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50
                    p-4
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <Siren
                            size={15}
                            className="text-blue-500"
                        />

                        <span
                            className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wide
                            text-slate-400
                            "
                        >

                            Emergency Type

                        </span>

                    </div>


                    <p
                        className="
                        mt-2
                        text-sm
                        font-semibold
                        text-slate-700
                        "
                    >

                        {
                            emergency?.emergencyType ||
                            "Not specified"
                        }

                    </p>

                </div>



                <div
                    className="
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50
                    p-4
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <ClipboardList
                            size={15}
                            className="text-indigo-500"
                        />

                        <span
                            className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wide
                            text-slate-400
                            "
                        >

                            Report Title

                        </span>

                    </div>


                    <p
                        className="
                        mt-2
                        break-words
                        text-sm
                        font-semibold
                        text-slate-700
                        "
                    >

                        {
                            emergency?.title ||
                            "Not specified"
                        }

                    </p>

                </div>

            </div>



            {/* Description */}

            <div
                className="
                mt-4
                rounded-2xl
                border
                border-slate-100
                bg-slate-50
                p-4
                "
            >

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    "
                >

                    <AlignLeft
                        size={15}
                        className="text-slate-500"
                    />

                    <span
                        className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-slate-400
                        "
                    >

                        Description

                    </span>

                </div>


                <p
                    className="
                    mt-3
                    whitespace-pre-line
                    text-sm
                    leading-7
                    text-slate-600
                    "
                >

                    {
                        emergency?.description ||
                        "No description was provided."
                    }

                </p>

            </div>



            {/* Assistance */}

            <div
                className="
                mt-4
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                "
            >

                <div
                    className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <ClipboardList
                            size={16}
                            className="text-blue-500"
                        />

                        <span
                            className="
                            text-sm
                            font-semibold
                            text-slate-700
                            "
                        >

                            Assistance Required

                        </span>

                    </div>


                    <span
                        className="
                        rounded-full
                        bg-blue-50
                        px-2.5
                        py-1
                        text-[10px]
                        font-bold
                        text-blue-600
                        "
                    >

                        {assistance.length}

                    </span>

                </div>



                {
                    assistance.length > 0 ? (

                        <div
                            className="
                            mt-4
                            flex
                            flex-wrap
                            gap-2
                            "
                        >

                            {
                                assistance.map(
                                    (item, index) => (

                                        <span
                                            key={`${item}-${index}`}
                                            className="
                                            rounded-xl
                                            border
                                            border-blue-100
                                            bg-blue-50
                                            px-3
                                            py-2
                                            text-xs
                                            font-medium
                                            text-blue-700
                                            "
                                        >

                                            {item}

                                        </span>

                                    )
                                )
                            }

                        </div>

                    ) : (

                        <p
                            className="
                            mt-3
                            text-xs
                            text-slate-400
                            "
                        >

                            No specific assistance was requested.

                        </p>

                    )
                }

            </div>

        </section>

    );

};


export default EmergencyInformation;