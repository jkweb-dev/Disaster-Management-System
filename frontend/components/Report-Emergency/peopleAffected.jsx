"use client";


const peopleFields = [

    {
        name:"adults",
        label:"Adults",
        description:"People above 18 years"
    },

    {
        name:"children",
        label:"Children",
        description:"Below 18 years"
    },

    {
        name:"elderly",
        label:"Elderly",
        description:"Senior citizens"
    },

    {
        name:"disabled",
        label:"Disabled Persons",
        description:"People requiring special assistance"
    },

    {
        name:"injured",
        label:"Injured Persons",
        description:"People needing medical help"
    }

];



const PeopleAffected = ({
    formData,
    handleNumberChange
}) => {



    const totalPeople =

        Number(formData.adults) +
        Number(formData.children) +
        Number(formData.elderly) +
        Number(formData.disabled) +
        Number(formData.injured);



    return (

        <div className="space-y-6">


            <div>

                <h2 className="
                    text-xl
                    font-semibold
                    text-gray-800
                ">
                    People Affected
                </h2>


                <p className="
                    text-sm
                    text-gray-500
                    mt-1
                ">
                    Tell us how many people need assistance.
                </p>


            </div>





            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
            ">


                {
                    peopleFields.map((field)=>(


                        <div

                            key={field.name}

                            className="
                                border
                                border-gray-200
                                rounded-xl
                                p-5
                                bg-gray-50
                            "

                        >



                            <div className="mb-4">


                                <h3 className="
                                    font-semibold
                                    text-gray-800
                                ">
                                    {field.label}
                                </h3>


                                <p className="
                                    text-xs
                                    text-gray-500
                                ">
                                    {field.description}
                                </p>


                            </div>





                            <div className="
                                flex
                                items-center
                                justify-between
                            ">


                                <button

                                    type="button"

                                    onClick={()=>handleNumberChange(
                                        field.name,
                                        -1
                                    )}

                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-white
                                        border
                                        text-xl
                                        hover:bg-gray-100
                                    "

                                >
                                    -
                                </button>





                                <span className="
                                    text-xl
                                    font-bold
                                    text-blue-600
                                ">

                                    {formData[field.name]}

                                </span>





                                <button

                                    type="button"

                                    onClick={()=>handleNumberChange(
                                        field.name,
                                        1
                                    )}

                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-blue-600
                                        text-white
                                        text-xl
                                        hover:bg-blue-700
                                    "

                                >
                                    +
                                </button>



                            </div>


                        </div>


                    ))
                }


            </div>





            <div className="
                mt-6
                p-5
                rounded-xl
                bg-blue-50
                border
                border-blue-100
                flex
                justify-between
                items-center
            ">


                <span className="
                    font-semibold
                    text-gray-700
                ">
                    Total People Affected
                </span>



                <span className="
                    text-2xl
                    font-bold
                    text-blue-600
                ">
                    {totalPeople}
                </span>



            </div>




        </div>

    );

};


export default PeopleAffected;