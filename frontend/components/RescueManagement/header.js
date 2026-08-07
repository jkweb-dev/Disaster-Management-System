"use client";

import {
    RefreshCcw,
    ShieldCheck,
    Siren
} from "lucide-react";


const RescueHeader = ({
    onRefresh
}) => {


    return (

        <div
            className="
            rounded-3xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            p-8
            text-white
            shadow-xl
            "
        >

            <div
                className="
                flex
                flex-col
                gap-6
                md:flex-row
                md:items-center
                md:justify-between
                "
            >


                <div>


                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <div
                            className="
                            rounded-2xl
                            bg-white/20
                            p-3
                            backdrop-blur
                            "
                        >

                            <Siren
                                size={28}
                            />

                        </div>


                        <h1
                            className="
                            text-3xl
                            font-bold
                            "
                        >

                            Rescue Management

                        </h1>


                    </div>



                    <p
                        className="
                        mt-4
                        max-w-xl
                        text-blue-100
                        "
                    >

                        Review, verify and manage rescue
                        organizations before they join
                        emergency operations.

                    </p>





                    <div
                        className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white/20
                        px-4
                        py-2
                        backdrop-blur
                        "
                    >

                        <ShieldCheck
                            size={18}
                        />

                        <span
                            className="
                            text-sm
                            font-medium
                            "
                        >

                            Trusted Response Network

                        </span>


                    </div>


                </div>







                <button

                    onClick={onRefresh}

                    className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-6
                    py-3
                    font-semibold
                    text-blue-600
                    transition
                    hover:bg-blue-50
                    "

                >

                    <RefreshCcw
                        size={18}
                    />

                    Refresh


                </button>



            </div>


        </div>

    );

};


export default RescueHeader;