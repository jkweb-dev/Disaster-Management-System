"use client";


const ReviewSubmit = ({
    formData,
    setCurrentStep ,
    handleSubmit
}) => {



    const totalPeople =

        Number(formData.adults) +
        Number(formData.children) +
        Number(formData.elderly) +
        Number(formData.disabled) +
        Number(formData.injured);




    const severityColor = {


        Low:"bg-green-100 text-green-700",

        Medium:"bg-yellow-100 text-yellow-700",

        High:"bg-orange-100 text-orange-700",

        Critical:"bg-red-100 text-red-700"

    };





    return (

        <div className="space-y-6">


            <div>

                <h2 className="
                    text-xl
                    font-bold
                    text-gray-800
                ">
                    Review Your Emergency Report
                </h2>


                <p className="
                    text-sm
                    text-gray-500
                    mt-1
                ">
                    Check all details before submitting.
                </p>


            </div>







            {/* Personal */}

            <ReviewCard

                title="Personal Information"

                step={1}

                setCurrentStep={setCurrentStep}

            >

                <Info label="Name" value={formData.name}/>

                <Info label="Email" value={formData.email}/>

                <Info label="Phone" value={formData.phone}/>

                <Info label="City" value={formData.city}/>


            </ReviewCard>








            {/* Emergency */}

            <ReviewCard

                title="Emergency Details"

                step={2}

                setCurrentStep={setCurrentStep}

            >


                <Info
                    label="Type"
                    value={formData.emergencyType}
                />


                <div className="flex items-center gap-2">


                    <span className="font-medium">
                        Severity:
                    </span>


                    <span
                        className={`
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            ${
                                severityColor[
                                    formData.severity
                                ]
                            }
                        `}
                    >

                        {formData.severity}

                    </span>


                </div>


                <Info
                    label="Title"
                    value={formData.title}
                />


                <Info
                    label="Description"
                    value={formData.description}
                />


                <Info
                    label="Contact"
                    value={formData.contactPreference}
                />


            </ReviewCard>









            {/* People */}

            <ReviewCard

                title="People Affected"

                step={3}

                setCurrentStep={setCurrentStep}

            >


                <Info
                    label="Adults"
                    value={formData.adults}
                />


                <Info
                    label="Children"
                    value={formData.children}
                />


                <Info
                    label="Elderly"
                    value={formData.elderly}
                />


                <Info
                    label="Disabled"
                    value={formData.disabled}
                />


                <Info
                    label="Injured"
                    value={formData.injured}
                />


                <div className="
                    mt-3
                    font-bold
                    text-blue-600
                ">

                    Total:
                    {" "}
                    {totalPeople}

                </div>



            </ReviewCard>









            {/* Assistance */}

            <ReviewCard

                title="Required Assistance"

                step={4}

                setCurrentStep={setCurrentStep}

            >


                <div className="
                    flex
                    flex-wrap
                    gap-2
                ">


                    {
                        formData.assistanceRequired.map(
                            item=>(

                            <span

                                key={item}

                                className="
                                    px-3
                                    py-1
                                    bg-blue-100
                                    text-blue-700
                                    rounded-full
                                    text-sm
                                "

                            >

                                {item}

                            </span>

                        ))
                    }


                </div>


            </ReviewCard>









            {/* Location */}

            <ReviewCard

                title="Location"

                step={5}

                setCurrentStep={setCurrentStep}

            >


                <Info

                    label="City"

                    value={
                        formData.location.city
                    }

                />


                <Info

                    label="Address"

                    value={
                        formData.location.address
                    }

                />


                <Info

                    label="Landmark"

                    value={
                        formData.location.landmark
                    }

                />


            </ReviewCard>









            {/* Images */}

            <ReviewCard

                title="Images"

                step={6}

                setCurrentStep={setCurrentStep}

            >


                <div className="
                    grid
                    grid-cols-2
                    sm:grid-cols-4
                    gap-3
                ">


                    {
                        formData.images.map(
                            (image,index)=>(


                            <img

                                key={index}

                                src={
                                    URL.createObjectURL(
                                        image
                                    )
                                }

                                className="
                                    h-28
                                    w-full
                                    object-cover
                                    rounded-xl
                                "

                                alt="upload"

                            />


                        ))
                    }


                </div>


            </ReviewCard>





        </div>

    );

};






const ReviewCard = ({
    title,
    step,
    setCurrentStep,
    children
})=>{


    return (

        <div className="
            border
            rounded-2xl
            p-5
            bg-white
        ">


            <div className="
                flex
                justify-between
                items-center
                mb-4
            ">


                <h3 className="
                    font-semibold
                    text-gray-800
                ">
                    {title}
                </h3>



                <button

                    onClick={()=>
                        setCurrentStep(step)
                    }

                    className="
                        text-sm
                        text-blue-600
                    "

                >
                    Edit
                </button>



            </div>


            <div className="
                space-y-2
                text-sm
                text-gray-600
            ">

                {children}

            </div>


        </div>

    );

};






const Info = ({
    label,
    value
})=>{


    return (

        <p>

            <span className="font-medium">

                {label}:

            </span>

            {" "}

            {value || "Not provided"}

        </p>

    );

};



export default ReviewSubmit;