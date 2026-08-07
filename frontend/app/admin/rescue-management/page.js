"use client";


import {
    useEffect,
    useMemo,
    useState
} from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";


import api from "@/lib/axios";



import RescueHeader from "@/components/RescueManagement/header";

import RescueStats from "@/components/RescueManagement/stats";

import RescueFilters from "@/components/RescueManagement/rescueFilter";

import RescueCard from "@/components/RescueManagement/rescueCard";

import RescueDetailsModal from "@/components/RescueManagement/rescueDetailsModel";

import LoadingSkeleton from "@/components/RescueManagement/loadingSkelton";

import handleError from "@/utils/handleError";







const RescueManagementPage = () => {


    const router = useRouter()

    const [rescues,setRescues] = useState([]);

    const [loading,setLoading] = useState(true);


    const [selectedRescue,setSelectedRescue] = useState(null);


    const [actionLoading,setActionLoading] = useState(false);



    const [search,setSearch] = useState("");

    const [status,setStatus] = useState("all");









    const fetchRescues = async()=>{


        try{


            setLoading(true);



            const response = await api.get(
                "/admin/rescues"
            );



            setRescues(
                response.data.rescues
            );


        }
        catch(error){


            handleError(error , router)

        }
        finally{


            setLoading(false);


        }


    };







    useEffect(()=>{


        fetchRescues();


    },[]);









    const filteredRescues = useMemo(()=>{


        return rescues.filter((item)=>{


            const matchesSearch =

            item.organizationName
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            )

            ||

            item.contactPerson
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            );





            const matchesStatus =

            status === "all"

            ||

            item.verificationStatus === status;




            return (
                matchesSearch &&
                matchesStatus
            );


        });


    },[
        rescues,
        search,
        status
    ]);









    const updateStatus = async(
        id,
        action
    )=>{


        try{


            setActionLoading(true);



            await api.patch(

                `/admin/rescues/${id}/${action}`

            );



            toast.success(

                action==="approve"

                ?

                "Rescue team approved"

                :

                "Rescue team rejected"

            );



            setSelectedRescue(null);



            fetchRescues();



        }
        catch(error){


           handleError(error , router)


        }
        finally{


            setActionLoading(false);


        }


    };









    return (

        <div
            className="
            space-y-8
            "
        >



            <RescueHeader

                onRefresh={fetchRescues}

            />





            <RescueStats

                rescues={rescues}

            />







            <RescueFilters

                search={search}

                setSearch={setSearch}

                status={status}

                setStatus={setStatus}

            />









            {
                loading

                ?

                (

                    <LoadingSkeleton/>

                )


                :

                (

                filteredRescues.length === 0

                ?

                (

                    <div
                        className="
                        rounded-3xl
                        border
                        bg-white
                        p-10
                        text-center
                        text-gray-500
                        "
                    >

                        No rescue teams found.

                    </div>

                )


                :

                (

                <div
                    className="
                    grid
                    gap-6
                    sm:grid-cols-2
                    xl:grid-cols-3
                    "
                >


                    {
                        filteredRescues.map(
                            (rescue)=>(

                                <RescueCard

                                    key={
                                        rescue._id
                                    }

                                    rescue={rescue}

                                    onView={
                                        setSelectedRescue
                                    }

                                />

                            )
                        )
                    }


                </div>

                )


                )

            }









            <RescueDetailsModal

                rescue={selectedRescue}

                onClose={()=>
                    setSelectedRescue(null)
                }


                loading={actionLoading}


                onApprove={(id)=>
                    updateStatus(
                        id,
                        "approve"
                    )
                }


                onReject={(id)=>
                    updateStatus(
                        id,
                        "reject"
                    )
                }


            />





        </div>

    );

};



export default RescueManagementPage;