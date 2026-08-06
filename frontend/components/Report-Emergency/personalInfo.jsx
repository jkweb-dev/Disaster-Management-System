"use client";


const PersonalInfo = ({
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
                    Personal Information
                </h2>


                <p className="
                    text-sm
                    text-gray-500
                    mt-1
                ">
                    Your basic information is required for rescue communication.
                </p>


            </div>





            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
            ">


                {/* Name */}

                <div>

                    <label className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        mb-2
                    ">
                        Full Name
                    </label>


                    <input

                        type="text"

                        name="name"

                        value={formData.name}

                        onChange={handleChange}

                        placeholder="Enter your name"

                        disabled

                        className="
                            w-full
                            px-4
                            py-3
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-100
                            text-gray-600
                            cursor-not-allowed
                            outline-none
                        "

                    />

                </div>





                {/* Email */}

                <div>

                    <label className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        mb-2
                    ">
                        Email Address
                    </label>


                    <input

                        type="email"

                        name="email"

                        value={formData.email}

                        onChange={handleChange}

                        placeholder="Enter your email"

                        disabled

                        className="
                            w-full
                            px-4
                            py-3
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-100
                            text-gray-600
                            cursor-not-allowed
                            outline-none
                        "

                    />

                </div>





                {/* Phone */}

                <div>

                    <label className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        mb-2
                    ">
                        Phone Number
                    </label>


                    <input

                        type="text"

                        name="phone"

                        value={formData.phone}

                        onChange={handleChange}

                        placeholder="Enter phone number"

                        disabled

                        className="
                            w-full
                            px-4
                            py-3
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-100
                            text-gray-600
                            cursor-not-allowed
                            outline-none
                        "

                    />

                </div>





                {/* Address */}

                <div>

                    <label className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        mb-2
                    ">
                        Current Address
                    </label>


                    <input

                        type="text"

                        name="address"

                        value={formData.address}

                        onChange={handleChange}

                        placeholder="Enter current address"

                        className="
                            w-full
                            px-4
                            py-3
                            rounded-xl
                            border
                            border-gray-200
                            focus:border-blue-500
                            outline-none
                        "

                    />

                </div>





                {/* City */}

                <div>

                    <label className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        mb-2
                    ">
                        City
                    </label>


                    <input

                        type="text"

                        name="city"

                        value={formData.city}

                        onChange={handleChange}

                        placeholder="Enter city"

                        className="
                            w-full
                            px-4
                            py-3
                            rounded-xl
                            border
                            border-gray-200
                            focus:border-blue-500
                            outline-none
                        "

                    />

                </div>



            </div>



        </div>

    );


};


export default PersonalInfo;