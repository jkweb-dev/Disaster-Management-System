"use client";


import {
    FaAmbulance,
    FaUtensils,
    FaTint,
    FaHome,
    FaCar,
    FaTshirt,
    FaBaby,
    FaPaw,
    FaBolt,
    FaPhoneAlt
} from "react-icons/fa";



const assistanceOptions = [

    {
        id:"Rescue Team",
        label:"Rescue Team",
        description:"Need evacuation or rescue support",
        icon:FaAmbulance
    },

    {
        id:"Medical Assistance",
        label:"Medical Assistance",
        description:"Need doctors or medical help",
        icon:FaAmbulance
    },

    {
        id:"Food",
        label:"Food",
        description:"Need food supplies",
        icon:FaUtensils
    },

    {
        id:"Drinking Water",
        label:"Drinking Water",
        description:"Need clean drinking water",
        icon:FaTint
    },

    {
        id:"Temporary Shelter",
        label:"Temporary Shelter",
        description:"Need safe place to stay",
        icon:FaHome
    },

    {
        id:"Transportation",
        label:"Transportation",
        description:"Need transport support",
        icon:FaCar
    },

    {
        id:"Clothing",
        label:"Clothing",
        description:"Need clothes or blankets",
        icon:FaTshirt
    },

    {
        id:"Baby Supplies",
        label:"Baby Supplies",
        description:"Need baby-related items",
        icon:FaBaby
    },

    {
        id:"Animal Rescue",
        label:"Animal Rescue",
        description:"Need animal support",
        icon:FaPaw
    },

    {
        id:"Electricity Support",
        label:"Electricity Support",
        description:"Need electricity assistance",
        icon:FaBolt
    },

    {
        id:"Communication Support",
        label:"Communication Support",
        description:"Need communication help",
        icon:FaPhoneAlt
    }

];





const AssistanceRequired = ({
    formData,
    handleAssistanceChange
}) => {



    return (

        <div className="space-y-6">



            <div>

                <h2 className="
                    text-xl
                    font-semibold
                    text-gray-800
                ">
                    Assistance Required
                </h2>


                <p className="
                    text-sm
                    text-gray-500
                    mt-1
                ">
                    Select all types of help you need.
                </p>


            </div>





            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
            ">


                {
                    assistanceOptions.map((item)=>{


                        const Icon = item.icon;


                        const selected =
                            formData.assistanceRequired.includes(
                                item.id
                            );



                        return (


                            <div

                                key={item.id}

                                onClick={()=>
                                    handleAssistanceChange(item.id)
                                }

                                className={`
                                    cursor-pointer
                                    rounded-xl
                                    border
                                    p-5
                                    transition-all
                                    duration-200

                                    ${
                                        selected
                                        ?
                                        "border-blue-600 bg-blue-50 shadow-md"
                                        :
                                        "border-gray-200 hover:border-blue-300"
                                    }
                                `}

                            >


                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                ">


                                    <div className="
                                        w-10
                                        h-10
                                        rounded-lg
                                        bg-blue-100
                                        flex
                                        items-center
                                        justify-center
                                    ">


                                        <Icon
                                            className="
                                                text-blue-600
                                            "
                                        />


                                    </div>





                                    <input

                                        type="checkbox"

                                        checked={selected}

                                        onChange={()=>
                                            handleAssistanceChange(item.id)
                                        }

                                        className="
                                            w-5
                                            h-5
                                        "

                                    />


                                </div>





                                <h3 className="
                                    mt-4
                                    font-semibold
                                    text-gray-800
                                ">

                                    {item.label}

                                </h3>




                                <p className="
                                    text-sm
                                    text-gray-500
                                    mt-1
                                ">

                                    {item.description}

                                </p>



                            </div>


                        );


                    })
                }


            </div>





            {
                formData.assistanceRequired.length > 0 && (


                    <div className="
                        bg-green-50
                        border
                        border-green-200
                        rounded-xl
                        p-4
                    ">


                        <p className="
                            text-sm
                            font-medium
                            text-green-700
                        ">

                            Selected:

                        </p>


                        <div className="
                            flex
                            flex-wrap
                            gap-2
                            mt-2
                        ">


                            {
                                formData.assistanceRequired.map(
                                    (item)=>(

                                    <span

                                        key={item}

                                        className="
                                            px-3
                                            py-1
                                            bg-green-100
                                            text-green-700
                                            rounded-full
                                            text-sm
                                        "

                                    >

                                        {item}

                                    </span>

                                ))
                            }


                        </div>


                    </div>


                )
            }





        </div>

    );

};



export default AssistanceRequired;