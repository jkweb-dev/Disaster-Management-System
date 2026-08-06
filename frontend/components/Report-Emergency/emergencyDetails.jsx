"use client";


const emergencyTypes = [

    "Flood",
    "Fire",
    "Earthquake",
    "Building Collapse",
    "Medical Emergency",
    "Road Accident",
    "Storm",
    "Landslide",
    "Electrical Hazard",
    "Chemical Leak",
    "Other"

];


const severityLevels = [

    "Low",
    "Medium",
    "High",
    "Critical"

];


const contactOptions = [

    "Phone Call",
    "SMS",
    "WhatsApp",
    "Unable to Receive Calls"

];





const EmergencyDetails = ({
    formData,
    handleChange
}) => {


    return (

        <div className="space-y-6">


            <div>

                <h2 className="
                    text-xl
                    font-semibold
                    text-gray-800
                ">
                    Emergency Details
                </h2>


                <p className="
                    text-sm
                    text-gray-500
                    mt-1
                ">
                    Tell us about your emergency situation.
                </p>

            </div>





            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
            ">


                {/* Emergency Type */}

                <div>

                    <label className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        mb-2
                    ">
                        Emergency Type
                    </label>


                    <select

                        name="emergencyType"

                        value={formData.emergencyType}

                        onChange={handleChange}

                        className="
                            w-full
                            px-4
                            py-3
                            rounded-xl
                            border
                            border-gray-200
                            outline-none
                            focus:border-blue-500
                        "

                    >

                        <option value="">
                            Select emergency type
                        </option>


                        {
                            emergencyTypes.map((type)=>(
                                
                                <option
                                    key={type}
                                    value={type}
                                >
                                    {type}
                                </option>

                            ))
                        }


                    </select>


                </div>





                {/* Severity */}

                <div>

                    <label className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        mb-2
                    ">
                        Severity
                    </label>



                    <select

                        name="severity"

                        value={formData.severity}

                        onChange={handleChange}

                        className="
                            w-full
                            px-4
                            py-3
                            rounded-xl
                            border
                            border-gray-200
                            outline-none
                            focus:border-blue-500
                        "

                    >


                        <option value="">
                            Select severity
                        </option>


                        {
                            severityLevels.map((level)=>(

                                <option
                                    key={level}
                                    value={level}
                                >
                                    {level}
                                </option>

                            ))
                        }


                    </select>


                </div>




            </div>





            {/* Title */}

            <div>


                <label className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                ">
                    Emergency Title
                </label>



                <input

                    type="text"

                    name="title"

                    value={formData.title}

                    onChange={handleChange}

                    placeholder="Example: House flooded after heavy rain"

                    className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-gray-200
                        outline-none
                        focus:border-blue-500
                    "

                />


            </div>






            {/* Description */}

            <div>


                <label className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                ">
                    Description
                </label>



                <textarea

                    name="description"

                    value={formData.description}

                    onChange={handleChange}

                    rows="5"

                    placeholder="Explain your situation in detail..."

                    className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-gray-200
                        outline-none
                        resize-none
                        focus:border-blue-500
                    "

                />



            </div>







            {/* Contact Preference */}

            <div>


                <label className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                ">
                    Preferred Contact Method
                </label>



                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                ">


                    {
                        contactOptions.map((option)=>(


                            <label

                                key={option}

                                className="
                                    flex
                                    items-center
                                    gap-3
                                    border
                                    rounded-xl
                                    p-3
                                    cursor-pointer
                                    hover:bg-gray-50
                                "

                            >


                                <input

                                    type="radio"

                                    name="contactPreference"

                                    value={option}

                                    checked={
                                        formData.contactPreference === option
                                    }

                                    onChange={handleChange}

                                />


                                <span className="
                                    text-sm
                                    text-gray-700
                                ">
                                    {option}
                                </span>



                            </label>


                        ))
                    }


                </div>



            </div>





        </div>

    );

};


export default EmergencyDetails;