"use client";

const steps = [
    "Personal",
    "Emergency",
    "People",
    "Assistance",
    "Location",
    "Media",
    "Review"
];


const ProgressStepper = ({ currentStep }) => {

    return (
        <div className="w-full px-2 sm:px-4 mb-8">

            <div className="relative flex items-start justify-between">


                {/* Background Line */}
                <div className="
                    absolute
                    top-5
                    left-0
                    right-0
                    h-1
                    bg-gray-200
                    
                " />


                {
                    steps.map((step, index) => {

                        const stepNumber = index + 1;

                        const isCompleted =
                            currentStep > stepNumber;

                        const isActive =
                            currentStep === stepNumber;


                        return (

                            <div
                                key={step}
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    flex-1
                                    z-10
                                "
                            >

                                <div
                                    className={`
                                        w-10
                                        h-10
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        font-semibold
                                        text-sm
                                        transition-all
                                        duration-300

                                        ${
                                            isCompleted
                                            ?
                                            "bg-green-500 text-white"
                                            :
                                            isActive
                                            ?
                                            "bg-blue-600 text-white shadow-lg scale-110"
                                            :
                                            "bg-gray-200 text-gray-500"
                                        }
                                    `}
                                >

                                    {
                                        isCompleted
                                        ?
                                        "✓"
                                        :
                                        stepNumber
                                    }

                                </div>


                                <span
                                    className={`
                                        mt-2
                                        text-[10px]
                                        sm:text-sm
                                        text-center
                                        font-medium

                                        ${
                                            isActive
                                            ?
                                            "text-blue-600"
                                            :
                                            "text-gray-500"
                                        }
                                    `}
                                >
                                    {step}
                                </span>


                            </div>

                        );

                    })
                }


            </div>


        </div>
    );
};


export default ProgressStepper;