"use client";


import {
    X,
    CheckCircle,
    XCircle,
    Users,
    MapPin,
    Phone,
    Mail,
    ShieldAlert
} from "lucide-react";



const RescueDetailsModal = ({
    rescue,
    onClose,
    onApprove,
    onReject,
    loading
}) => {


    if(!rescue) return null;



    return (

        <div
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/50
            px-5
            "
        >


            <div
                className="
                max-h-[90vh]
                w-full
                max-w-2xl
                overflow-y-auto
                rounded-3xl
                bg-white
                p-8
                shadow-2xl
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
                                bg-blue-100
                                p-3
                                text-blue-600
                                "
                            >

                                <ShieldAlert size={26}/>

                            </div>


                            <h2
                                className="
                                text-2xl
                                font-bold
                                text-gray-800
                                "
                            >

                                Rescue Details

                            </h2>


                        </div>


                    </div>




                    <button

                        onClick={onClose}

                        className="
                        rounded-full
                        p-2
                        hover:bg-gray-100
                        "

                    >

                        <X size={22}/>

                    </button>


                </div>






                {/* Organization */}


                <div
                    className="
                    mt-8
                    rounded-2xl
                    bg-gray-50
                    p-5
                    "
                >


                    <h3
                        className="
                        text-xl
                        font-bold
                        text-gray-800
                        "
                    >

                        {rescue.organizationName}

                    </h3>



                    <p className="mt-1 text-gray-500">

                        {rescue.contactPerson}

                    </p>


                </div>








                {/* Information */}


                <div
                    className="
                    mt-6
                    grid
                    gap-4
                    sm:grid-cols-2
                    "
                >


                    <Info

                        icon={Users}

                        label="Team Size"

                        value={`${rescue.teamSize || 0} Members`}

                    />


                    <Info

                        icon={MapPin}

                        label="Service Area"

                        value={rescue.serviceArea}

                    />


                    <Info

                        icon={Phone}

                        label="Phone"

                        value={rescue.phone}

                    />


                    <Info

                        icon={Mail}

                        label="Email"

                        value={rescue.email}

                    />


                </div>









                {/* Categories */}


                <div
                    className="
                    mt-6
                    "
                >

                    <h3
                        className="
                        font-semibold
                        text-gray-800
                        "
                    >

                        Emergency Categories

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
                            rescue.emergencyCategories
                            ?.map(
                                (item)=>(

                                    <span

                                        key={item}

                                        className="
                                        rounded-full
                                        bg-blue-100
                                        px-4
                                        py-2
                                        text-sm
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


                </div>









                {/* Actions */}


                {
                    rescue.verificationStatus === "pending"
                    &&

                    (

                    <div
                        className="
                        mt-8
                        flex
                        gap-4
                        "
                    >


                        <button

                            disabled={loading}

                            onClick={()=>onReject(rescue._id)}

                            className="
                            flex-1
                            rounded-2xl
                            border
                            border-red-200
                            bg-red-50
                            py-3
                            font-semibold
                            text-red-600
                            hover:bg-red-100
                            "

                        >

                            <span className="flex justify-center gap-2">

                                <XCircle size={18}/>

                                Reject

                            </span>


                        </button>





                        <button

                            disabled={loading}

                            onClick={()=>onApprove(rescue._id)}

                            className="
                            flex-1
                            rounded-2xl
                            bg-green-600
                            py-3
                            font-semibold
                            text-white
                            hover:bg-green-700
                            "

                        >

                            <span className="flex justify-center gap-2">

                                <CheckCircle size={18}/>

                                Approve

                            </span>


                        </button>


                    </div>

                    )

                }



            </div>


        </div>

    );

};








const Info = ({
    icon:Icon,
    label,
    value
}) => (

    <div
        className="
        rounded-2xl
        border
        p-4
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

            <Icon size={16}/>

            {label}

        </div>


        <p
            className="
            mt-2
            font-semibold
            text-gray-800
            "
        >

            {value || "N/A"}

        </p>


    </div>

);


export default RescueDetailsModal;