"use client";

import {
    User,
    Mail,
    Phone,
    MessageCircle,
    Contact
} from "lucide-react";


const VictimInformation = ({
    emergency
}) => {

    const contactPreference =
        emergency?.contactPreference ||
        "Not specified";


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
                    bg-violet-50
                    text-violet-600
                    "
                >

                    <User
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

                        Victim Information

                    </h2>


                    <p
                        className="
                        mt-0.5
                        text-xs
                        text-slate-400
                        "
                    >

                        Contact information of the person
                        who submitted this report.

                    </p>

                </div>

            </div>



            {/* Information */}

            <div
                className="
                mt-6
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                "
            >

                {/* Name */}

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

                        <User
                            size={15}
                            className="text-violet-500"
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

                            Full Name

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
                            emergency?.name ||
                            "Not provided"
                        }

                    </p>

                </div>



                {/* Email */}

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

                        <Mail
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

                            Email

                        </span>

                    </div>


                    <p
                        className="
                        mt-2
                        break-all
                        text-sm
                        font-semibold
                        text-slate-700
                        "
                    >

                        {
                            emergency?.email ||
                            "Not provided"
                        }

                    </p>

                </div>



                {/* Phone */}

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

                        <Phone
                            size={15}
                            className="text-emerald-500"
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

                            Phone

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
                            emergency?.phone ||
                            "Not provided"
                        }

                    </p>

                </div>



                {/* Contact preference */}

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

                        {
                            contactPreference === "Phone Call"
                                ? (
                                    <Phone
                                        size={15}
                                        className="text-amber-500"
                                    />
                                )
                                : (
                                    <MessageCircle
                                        size={15}
                                        className="text-amber-500"
                                    />
                                )
                        }

                        <span
                            className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wide
                            text-slate-400
                            "
                        >

                            Preferred Contact

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

                        {contactPreference}

                    </p>

                </div>

            </div>



            {/* Contact reminder */}

            <div
                className="
                mt-4
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-violet-100
                bg-violet-50/60
                p-4
                "
            >

                <Contact
                    size={18}
                    className="
                    mt-0.5
                    shrink-0
                    text-violet-500
                    "
                />


                <p
                    className="
                    text-xs
                    leading-5
                    text-violet-700
                    "
                >

                    Contact the victim using their preferred
                    communication method whenever possible.

                </p>

            </div>

        </section>

    );

};


export default VictimInformation;