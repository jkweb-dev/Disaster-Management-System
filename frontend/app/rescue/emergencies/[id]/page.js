"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import api from "@/lib/axios";
import handleError from "@/utils/handleError";

import EmergencyDetailsHeader from "@/components/EmergencyDetails/header";
import EmergencyStatusCard from "@/components/EmergencyDetails/statusCard";
import VictimInformation from "@/components/EmergencyDetails/victimInfo";
import EmergencyInformation from "@/components/EmergencyDetails/emergencyInfo";
import PeopleAffected from "@/components/EmergencyDetails/peopleAfected";
import AssistanceRequired from "@/components/EmergencyDetails/assistanceRequired";
import EmergencyLocation from "@/components/EmergencyDetails/emergencyLocation";
import EmergencyImages from "@/components/EmergencyDetails/emergencyImages";
import EmergencyActions from "@/components/EmergencyDetails/emergencyAction";
import EmergencyDetailsSkeleton from "@/components/EmergencyDetails/skelton";

const EmergencyDetailsPage = () => {


const params = useParams();

const router = useRouter();

const id = params?.id;


const [emergency, setEmergency] =
    useState(null);

const [loading, setLoading] =
    useState(true);

const [updating, setUpdating] =
    useState(false);



/*
Fetch emergency details
*/

useEffect(() => {

    if (!id) {
        return;
    }


    const fetchEmergency = async () => {

        try {

            setLoading(true);


            const res = await api.get(
                `/rescue/emergencies/${id}`
            );


            setEmergency(
                res.data.emergency
            );

        }

        catch (error) {

            handleError(
                error,
                router
            );

        }

        finally {

            setLoading(false);

        }

    };


    fetchEmergency();

}, [id, router]);



/*
Update emergency status
*/

const handleStatusChange = async (
    newStatus
) => {

    if (
        !id ||
        !newStatus ||
        updating
    ) {
        return;
    }


    try {

        setUpdating(true);


        const res = await api.patch(
            `/rescue/emergencies/${id}/status`,
            {
                status: newStatus
            }
        );


        /*
        Use the updated emergency
        returned by the backend.
        */

        if (
            res.data?.emergency
        ) {

            setEmergency(
                res.data.emergency
            );

        }

        else {

            /*
            Fallback:
            fetch the latest report.
            */

            const latest =
                await api.get(
                    `/rescue/emergencies/${id}`
                );


            setEmergency(
                latest.data.emergency
            );

        }

    }

    catch (error) {

        handleError(
            error,
            router
        );

    }

    finally {

        setUpdating(false);

    }

};



/*
Loading state
*/

if (loading) {

    return (

        <EmergencyDetailsSkeleton />

    );

}



/*
No emergency
*/

if (!emergency) {

    return null;

}



return (

    <div
        className="
        mx-auto
        w-full
        max-w-[1600px]
        space-y-6
        pb-8
        "
    >

        {/* Header */}

        <EmergencyDetailsHeader
            emergency={emergency}
        />



        {/* Current status */}

        <EmergencyStatusCard
            status={  emergency?.status }
        />



        {/* Main content */}

        <div
            className="
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-3
            "
        >

            {/* Main column */}

            <div
                className="
                space-y-6
                xl:col-span-2
                "
            >

                <VictimInformation
                    emergency={emergency}
                />


                <EmergencyInformation
                    emergency={emergency}
                />


                <PeopleAffected
                    peopleAffected={
                        emergency.peopleAffected
                    }
                />


                <AssistanceRequired
                    assistance={
                        emergency.assistanceRequired
                    }
                />


                <EmergencyLocation
                    location={
                        emergency.location
                    }
                />


                <EmergencyImages
                    images={
                        emergency.images
                    }
                />

            </div>



            {/* Right column */}

            <div
                className="
                space-y-6
                "
            >

                <EmergencyActions
                    status={
                        emergency.status
                    }
                    updating={
                        updating
                    }
                    onStatusChange={
                        handleStatusChange
                    }
                />

            </div>

        </div>

    </div>

);


};

export default EmergencyDetailsPage;
