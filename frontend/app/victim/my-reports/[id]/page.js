"use client";


import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import { toast } from "react-hot-toast";


import { getEmergencyReportById } from "@/lib/emergencyAxios";



import ReportHeader from "@/components/Report-Details/header";

import EmergencyInfo from "@/components/Report-Details/emergencyInfo";

import PeopleAffected from "@/components/Report-Details/peopleAffected";

import LocationCard from "@/components/Report-Details/locationCard";

import ImageGallery from "@/components/Report-Details/ImageGallery";

import StatusTimeline from "@/components/Report-Details/statusTimeline";

import LoadingSkeleton from "@/components/Report-Details/loadingSkelton";
import handleError from "@/utils/handleError";


const ReportDetailsPage = () => {


    const params = useParams();

    const router = useRouter();


    const [report,setReport] = useState(null);

    const [loading,setLoading] = useState(true);





    const fetchReport = async()=>{


        try{


            setLoading(true);



            const response =
            await getEmergencyReportById(
                params.id
            );



            setReport(
                response.report
            );



        }
        catch(error){



            console.log(error);



            handleError(error , router)


            router.push(
                "/victim/my-reports"
            );


        }
        finally{


            setLoading(false);


        }


    };







    useEffect(()=>{


        if(params.id){

            fetchReport();

        }


    },[params.id]);








    if(loading){


        return (

            <LoadingSkeleton/>

        );


    }







    if(!report){


        return null;


    }







    return (


        <section
            className="
            min-h-screen
            bg-gray-50
            px-5
            py-8
            "
        >


            <div
                className="
                mx-auto
                max-w-7xl
                space-y-8
                "
            >



                <ReportHeader

                    report={report}

                />







                <div
                    className="
                    grid
                    gap-8
                    lg:grid-cols-3
                    "
                >



                    <div
                        className="
                        space-y-8
                        lg:col-span-2
                        "
                    >



                        <EmergencyInfo

                            report={report}

                        />




                        <PeopleAffected

                            report={report}

                        />




                        <ImageGallery

                            report={report}

                        />



                    </div>








                    <div
                        className="
                        space-y-8
                        "
                    >



                        <LocationCard

                            report={report}

                        />





                        <StatusTimeline

                            report={report}

                        />



                    </div>





                </div>




            </div>



        </section>


    );

};


export default ReportDetailsPage;