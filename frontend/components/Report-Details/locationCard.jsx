"use client";

import {
    MapPin,
    Navigation,
    Building2,
    LocateFixed
} from "lucide-react";



const LocationCard = ({
    report
}) => {


    const location = report.location || {};



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
                    bg-green-100
                    p-3
                    text-green-600
                    "
                >

                    <MapPin size={22}/>

                </div>


                <h2
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                >

                    Emergency Location

                </h2>


            </div>





            <div
                className="
                space-y-4
                "
            >


                <LocationItem

                    icon={Building2}

                    title="City"

                    value={location.city}

                />



                <LocationItem

                    icon={MapPin}

                    title="Address"

                    value={location.address}

                />



                <LocationItem

                    icon={Navigation}

                    title="Landmark"

                    value={location.landmark}

                />



            </div>





            <div
                className="
                mt-6
                rounded-2xl
                bg-gray-100
                p-5
                "
            >

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-gray-600
                    "
                >

                    <LocateFixed size={18}/>

                    <span className="font-medium">
                        GPS Coordinates
                    </span>

                </div>


                <div
                    className="
                    mt-3
                    grid
                    grid-cols-2
                    gap-3
                    "
                >

                    <div
                        className="
                        rounded-xl
                        bg-white
                        p-3
                        "
                    >

                        <p className="text-xs text-gray-500">
                            Latitude
                        </p>

                        <p className="font-semibold">
                            {location.latitude || "N/A"}
                        </p>

                    </div>



                    <div
                        className="
                        rounded-xl
                        bg-white
                        p-3
                        "
                    >

                        <p className="text-xs text-gray-500">
                            Longitude
                        </p>

                        <p className="font-semibold">
                            {location.longitude || "N/A"}
                        </p>

                    </div>


                </div>


            </div>


        </div>

    );

};







const LocationItem = ({
    icon:Icon,
    title,
    value
}) => (

    <div
        className="
        flex
        gap-3
        rounded-xl
        bg-gray-50
        p-4
        "
    >

        <Icon
            className="text-green-600"
            size={20}
        />


        <div>

            <p className="text-sm text-gray-500">
                {title}
            </p>

            <p className="font-medium text-gray-800">
                {value || "Not provided"}
            </p>

        </div>


    </div>

);



export default LocationCard;