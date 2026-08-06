"use client";


import { useState , useEffect} from "react";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

import ProgressStepper from "@/components/Report-Emergency/progressStepper";
import PersonalInfo from "@/components/Report-Emergency/personalInfo";
import EmergencyDetails from "@/components/Report-Emergency/emergencyDetails";
import PeopleAffected from "@/components/Report-Emergency/peopleAffected";
import AssistanceRequired from "@/components/Report-Emergency/assistanceRequires";
import MediaUpload from "@/components/Report-Emergency/mediaUpload";
import LocationStep from "@/components/Report-Emergency/locationStep";
import ReviewSubmit from "@/components/Report-Emergency/reviewSubmit";
import handleError from "@/utils/handleError";
import { useRouter } from "next/navigation";
import { createEmergencyReport } from "@/lib/emergencyAxios";




const ReportEmergencyPage = () => {

    const router = useRouter()

    const { user } = useAuth();

    const [currentStep, setCurrentStep] = useState(1);

    const [loading , setLoading] = useState(false)



    const [formData, setFormData] = useState({

        // Personal Information

        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",


        // Emergency Details

        emergencyType: "",
        severity: "",
        title: "",
        description: "",
        contactPreference : "" ,


        // People Affected

        adults: 0,
        children: 0,
        elderly: 0,
        disabled: 0,
        injured: 0,


        // Assistance

        assistanceRequired: [],
       


        // Location

        location: {

            latitude: null,
            longitude: null,
            address: "",
            city: "",
            landmark: ""

        },


        // Images

        images: []

    });


useEffect(()=>{


    if(user){


        setFormData((previous)=>({

            ...previous,

            name:user.name || "",

            email:user.email || "",

            phone:user.phone || ""

        }));


    }


},[user]);


    const handleChange = (e) => {


        const { name, value } = e.target;


        setFormData((previous)=>({

            ...previous,

            [name]:value

        }));


    };


    const handleNumberChange = (field, value)=>{


    setFormData((previous)=>({


        ...previous,


        [field]:
            Math.max(
                0,
                Number(previous[field]) + value
            )


    }));


};



const handleAssistanceChange = (item)=>{


    setFormData((previous)=>{


        const exists =
            previous.assistanceRequired.includes(item);



        return {


            ...previous,


            assistanceRequired:

                exists

                ?

                previous.assistanceRequired.filter(
                    (value)=> value !== item
                )

                :

                [
                    ...previous.assistanceRequired,
                    item
                ]

        };


    });


};




    const handleLocationChange = (locationData)=>{


        setFormData((previous)=>({

            ...previous,

            location:{

                ...previous.location,

                ...locationData

            }

        }));


    };

const setImages = (images)=>{


    setFormData((previous)=>({

        ...previous,

        images

    }));


};


const validateCurrentStep = () => {


    if(currentStep === 1){


        if(!formData.address.trim()){

            toast.error("Please enter your current address");

            return false;

        }


        if(!formData.city.trim()){

            toast.error("Please enter your city");

            return false;

        }


    }





    if(currentStep === 2){


        if(!formData.emergencyType){

           toast.error("Please select emergency type");

            return false;

        }



        if(!formData.severity){

            toast.error("Please select severity");

            return false;

        }



        if(!formData.title.trim()){

            toast.error("Please enter emergency title");

            return false;

        }



        if(!formData.description.trim()){

            toast.error("Please describe your emergency");

            return false;

        }



        if(!formData.contactPreference){

            toast.error("Please select contact preference");

            return false;

        }


    }





    if(currentStep === 3){


        const totalPeople =

            Number(formData.adults) +
            Number(formData.children) +
            Number(formData.elderly) +
            Number(formData.disabled) +
            Number(formData.injured);



        if(totalPeople === 0){

            toast.error("Please enter affected people count");

            return false;

        }


    }







    if(currentStep === 4){


        if(
            formData.assistanceRequired.length === 0
        ){

            toast.error(
                "Please select at least one required assistance type"
            );

            return false;

        }


    }








    if(currentStep === 5){


        if(
            !formData.location.latitude ||
            !formData.location.longitude
        ){

            toast.error(
                "Please select your emergency location"
            );

            return false;

        }


    }

    
    if(currentStep === 6){


        if(
            formData.images.length === 0
        ){

            toast.error(
                "Please select  1 imageatleast"
            );

            return false;

        }


    }




    return true;


};


    const handleNext = ()=>{


    const isValid = validateCurrentStep();



    if(!isValid){

        return;

    }



    if(currentStep < 7){

        setCurrentStep(
            currentStep + 1
        );

    }


};







    const handleBack = ()=>{


        if(currentStep > 1){

            setCurrentStep(
                currentStep - 1
            );

        }


    };







   const handleSubmit = async () => {



    try {

        setLoading(true)

        const data = new FormData();



        // Personal Information

        data.append(
            "name",
            formData.name
        );


        data.append(
            "email",
            formData.email
        );


        data.append(
            "phone",
            formData.phone
        );





        // Emergency Details

        data.append(
            "emergencyType",
            formData.emergencyType
        );


        data.append(
            "severity",
            formData.severity
        );


        data.append(
            "title",
            formData.title
        );


        data.append(
            "description",
            formData.description
        );


        data.append(
            "contactPreference",
            formData.contactPreference
        );







        // People Affected

        data.append(
            "adults",
            formData.adults
        );


        data.append(
            "children",
            formData.children
        );


        data.append(
            "elderly",
            formData.elderly
        );


        data.append(
            "disabled",
            formData.disabled
        );


        data.append(
            "injured",
            formData.injured
        );







        // Assistance Required

        formData.assistanceRequired.forEach(
            (item)=>{

                data.append(
                    "assistanceRequired",
                    item
                );

            }
        );







        // Location

        data.append(
            "latitude",
            formData.location.latitude
        );


        data.append(
            "longitude",
            formData.location.longitude
        );


        data.append(
            "address",
            formData.location.address
        );


        data.append(
            "city",
            formData.location.city
        );


        data.append(
            "landmark",
            formData.location.landmark
        );







        // Images

        formData.images.forEach(
            (image)=>{


                data.append(
                    "images",
                    image
                );


            }
        );








        const response = await createEmergencyReport(data);


        toast.success(
            "Emergency report submitted successfully"
        );



    }
    catch(error){


        console.log(
            error.response?.data || error.message
        );


       handleError(error , router)

    } finally {
        setLoading(false)
    }


};






    return (

        <div className="
            min-h-screen
            bg-gray-50
            py-8
            px-4
        ">


            <div className="
                max-w-5xl
                mx-auto
                bg-white
                rounded-2xl
                shadow-lg
                p-5
                sm:p-8
            ">


                <div className="mb-8">


                    <h1 className="
                        text-2xl
                        sm:text-3xl
                        font-bold
                        text-gray-800
                    ">
                        Report Emergency
                    </h1>


                    <p className="
                        text-gray-500
                        mt-2
                    ">
                        Provide details about your emergency situation so rescue teams can assist you quickly.
                    </p>


                </div>





                <ProgressStepper
                    currentStep={currentStep}
                />





                <div className="
                    min-h-[350px]
                    border
                    border-gray-100
                    rounded-xl
                    p-5
                ">


                   {
    currentStep === 1 && (

        <PersonalInfo

            formData={formData}

            handleChange={handleChange}

        />

    )
}

{
    currentStep === 2 && (

        <EmergencyDetails

            formData={formData}

            handleChange={handleChange}

        />

    )
}

{
    currentStep === 3 && (

        <PeopleAffected

            formData={formData}

            handleNumberChange={handleNumberChange}

        />

    )
}


{
    currentStep === 4 && (

        <AssistanceRequired

            formData={formData}

            handleAssistanceChange={handleAssistanceChange}

        />

    )
}


{
    currentStep === 5 && (

        <LocationStep

            formData={formData}

            handleLocationChange={handleLocationChange}

        />

    )
}


{
    currentStep === 6 && (

        <MediaUpload

            formData={formData}

            setImages={setImages}

        />

    )
}


{
    currentStep === 7 && (

        <ReviewSubmit

        formData={formData}

        setCurrentStep={setCurrentStep}


    handleSubmit={handleSubmit}
        
        />
    )
}
                </div>








                <div className="
                    flex
                    justify-between
                    mt-8
                ">



                    <button

                        onClick={handleBack}

                        disabled={currentStep === 1}

                        className="
                            px-6
                            py-3
                            rounded-lg
                            bg-gray-200
                            text-gray-700
                            disabled:opacity-50
                        "

                    >

                        Back

                    </button>






                    {

                        currentStep < 7

                        ?

                        <button

                            onClick={handleNext}

                            className="
                                px-6
                                py-3
                                rounded-lg
                                bg-blue-600
                                text-white
                                hover:bg-blue-700
                                transition
                            "

                        >

                            Next

                        </button>


                        :


                        <button

                            onClick={handleSubmit}

                            disabled = {loading}

                            className="
                                px-6
                                py-3
                                rounded-lg
                                bg-green-600
                                text-white
                                hover:bg-green-700
                                transition
                            "

                        >
                            {
                                loading ? 
                                "Submitting" : "Submit Report"
                            }

                            

                        </button>


                    }



                </div>



            </div>


        </div>

    );



};


export default ReportEmergencyPage;