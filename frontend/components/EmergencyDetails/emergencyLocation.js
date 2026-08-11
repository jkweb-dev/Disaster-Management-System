"use client";

import {
    MapPin,
    Navigation,
    Building2,
    Landmark,
    ExternalLink
} from "lucide-react";


const EmergencyLocation = ({
    location = {}
}) => {


    const {
        latitude,
        longitude,
        address,
        city,
        landmark
    } = location;


    const hasCoordinates =
        latitude !== undefined &&
        latitude !== null &&
        longitude !== undefined &&
        longitude !== null;


    const mapsUrl = hasCoordinates
        ? `https://www.google.com/maps?q=${latitude},${longitude}`
        : null;


    return (

        <section
            className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-100
            bg-white
            shadow-sm
            "
        >

            {/* Header */}

            <div
                className="
                flex
                items-center
                gap-3
                p-5
                sm:p-6
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
                    bg-cyan-50
                    text-cyan-600
                    "
                >

                    <MapPin
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

                        Emergency Location

                    </h2>


                    <p
                        className="
                        mt-0.5
                        text-xs
                        text-slate-400
                        "
                    >

                        Reported location of the emergency.

                    </p>

                </div>

            </div>



            {/* Location content */}

            <div
                className="
                border-t
                border-slate-100
                "
            >

                <div
                    className="
                    grid
                    grid-cols-1
                    gap-3
                    p-5
                    sm:grid-cols-2
                    sm:p-6
                    "
                >

                    {/* Address */}

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

                            <MapPin
                                size={15}
                                className="text-cyan-500"
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

                                Address

                            </span>

                        </div>


                        <p
                            className="
                            mt-2
                            break-words
                            text-sm
                            font-semibold
                            leading-6
                            text-slate-700
                            "
                        >

                            {address || "Not provided"}

                        </p>

                    </div>



                    {/* City */}

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

                            <Building2
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

                                City

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

                            {city || "Not provided"}

                        </p>

                    </div>



                    {/* Landmark */}

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

                            <Landmark
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

                                Landmark

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

                            {landmark || "Not provided"}

                        </p>

                    </div>



                    {/* Coordinates */}

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

                            <Navigation
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

                                GPS Coordinates

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
                                hasCoordinates
                                    ? `${latitude}, ${longitude}`
                                    : "Not available"
                            }

                        </p>

                    </div>

                </div>



                {/* Map action */}

                <div
                    className="
                    border-t
                    border-slate-100
                    bg-slate-50/70
                    p-5
                    sm:p-6
                    "
                >

                    {
                        mapsUrl ? (

                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                inline-flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-2xl
                                bg-cyan-600
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-lg
                                shadow-cyan-100
                                transition
                                hover:bg-cyan-700
                                sm:w-auto
                                "
                            >

                                <Navigation
                                    size={17}
                                />

                                Open Location in Google Maps

                                <ExternalLink
                                    size={15}
                                />

                            </a>

                        ) : (

                            <p
                                className="
                                text-xs
                                text-slate-400
                                "
                            >

                                GPS coordinates are not available
                                for this emergency.

                            </p>

                        )
                    }

                </div>

            </div>

        </section>

    );

};


export default EmergencyLocation;