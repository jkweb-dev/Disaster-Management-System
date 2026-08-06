"use client";


import {
    FileText,
    Phone,
    Mail,
    Siren
} from "lucide-react";



const EmergencyInfo = ({
    report
}) => {


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
                    bg-blue-100
                    p-3
                    text-blue-600
                    "
                >

                    <FileText
                        size={22}
                    />

                </div>


                <h2
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                >

                    Emergency Information

                </h2>


            </div>





            <div
                className="
                grid
                gap-5
                md:grid-cols-2
                "
            >


                <InfoItem

                    label="Emergency Type"

                    value={report.emergencyType}

                />



                <InfoItem

                    label="Contact Preference"

                    value={report.contactPreference}

                />



                <div
                    className="
                    md:col-span-2
                    "
                >

                    <InfoItem

                        label="Description"

                        value={report.description}

                    />

                </div>


            </div>



            <div
                className="
                mt-8
                border-t
                pt-6
                "
            >

                <h3
                    className="
                    mb-4
                    font-semibold
                    text-gray-700
                    "
                >

                    Contact Information

                </h3>


                <div
                    className="
                    grid
                    gap-4
                    md:grid-cols-3
                    "
                >


                    <ContactItem

                        icon={Phone}

                        label="Phone"

                        value={report.phone}

                    />


                    <ContactItem

                        icon={Mail}

                        label="Email"

                        value={report.email}

                    />


                    <ContactItem

                        icon={Siren}

                        label="Emergency"

                        value={report.emergencyType}

                    />


                </div>


            </div>


        </div>

    );

};





const InfoItem = ({
    label,
    value
}) => (

    <div>

        <p
            className="
            text-sm
            text-gray-500
            "
        >

            {label}

        </p>


        <p
            className="
            mt-1
            font-medium
            text-gray-800
            "
        >

            {value || "N/A"}

        </p>


    </div>

);






const ContactItem = ({
    icon:Icon,
    label,
    value
}) => (

    <div
        className="
        rounded-xl
        bg-gray-50
        p-4
        "
    >

        <div
            className="
            flex
            items-center
            gap-2
            text-gray-500
            "
        >

            <Icon size={16}/>

            <span className="text-sm">
                {label}
            </span>

        </div>


        <p
            className="
            mt-2
            font-medium
            text-gray-800
            "
        >

            {value || "N/A"}

        </p>


    </div>

);



export default EmergencyInfo;