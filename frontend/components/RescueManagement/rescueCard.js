"use client";


import {

    MapPin,

    Users,

    Phone,

    Mail,

    Eye

} from "lucide-react";




const statusStyle = {


    pending:
    "bg-orange-100 text-orange-700",


    approved:
    "bg-green-100 text-green-700",


    rejected:
    "bg-red-100 text-red-700"


};






const RescueCard = ({
    rescue,
    onView
}) => {



    return (

        <div

            className="
            group
            rounded-3xl
            border
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            "

        >



            {/* Header */}


            <div
                className="
                flex
                items-start
                justify-between
                "
            >


                <div>


                    <h3
                        className="
                        text-xl
                        font-bold
                        text-gray-800
                        "
                    >

                        {rescue.organizationName}

                    </h3>


                    <p
                        className="
                        mt-1
                        text-sm
                        text-gray-500
                        "
                    >

                        {rescue.contactPerson}

                    </p>


                </div>




                <span

                    className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    capitalize
                    ${statusStyle[rescue.verificationStatus]}
                    `}

                >

                    {rescue.verificationStatus}

                </span>



            </div>







            {/* Information */}


            <div
                className="
                mt-6
                space-y-3
                "
            >


                <InfoRow

                    icon={Users}

                    text={`${rescue.teamSize || 0} Members`}

                />


                <InfoRow

                    icon={MapPin}

                    text={rescue.serviceArea}

                />


                <InfoRow

                    icon={Phone}

                    text={rescue.phone}

                />


                <InfoRow

                    icon={Mail}

                    text={rescue.email}

                />


            </div>







            {/* Categories */}


            <div
                className="
                mt-6
                "
            >


                <p
                    className="
                    text-sm
                    font-semibold
                    text-gray-700
                    "
                >

                    Emergency Categories

                </p>



                <div
                    className="
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                    "
                >


                    {
                        rescue.emergencyCategories
                        ?.slice(0,4)
                        .map(
                            (category)=>(
                                
                                <span

                                    key={category}

                                    className="
                                    rounded-full
                                    bg-blue-50
                                    px-3
                                    py-1
                                    text-xs
                                    font-medium
                                    text-blue-600
                                    "

                                >

                                    {category}

                                </span>

                            )
                        )
                    }


                </div>


            </div>







            {/* Button */}


            <button

                onClick={() => onView(rescue)}

                className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gray-900
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-600
                "

            >

                <Eye size={18}/>

                View Details


            </button>




        </div>

    );

};







const InfoRow = ({
    icon:Icon,
    text
}) => (

    <div
        className="
        flex
        items-center
        gap-3
        text-sm
        text-gray-600
        "
    >

        <Icon
            size={18}
            className="text-gray-400"
        />

        <span>

            {text || "Not provided"}

        </span>


    </div>

);




export default RescueCard;