"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/lib/axios";

import handleError from "@/utils/handleError";

import DashboardHeader from "@/components/Rescue/dashboard/header";
import StatCards from "@/components/Rescue/dashboard/stats";
import UrgentEmergencies from "@/components/Rescue/dashboard/urgentEmergencies";
import ActiveResponses from "@/components/Rescue/dashboard/activeResponsive";
import RecentAssignments from "@/components/Rescue/dashboard/recentAssignment";
import DashboardSkeleton from "@/components/Rescue/dashboard/skelton";



const RescueDashboard = () => {

    const router = useRouter()

    const [
        dashboard,
        setDashboard
    ] = useState(null);


    const [
        loading,
        setLoading
    ] = useState(true);


    const fetchDashboard = async () => {

        try {

            setLoading(true);


            const res =
                await api.get(
                    "/rescue/dashboard"
                );


            setDashboard(
                res.data.dashboard
            );

        }

        catch (error) {

            handleError(error , router);

        }

        finally {

            setLoading(false);

        }

    };


    useEffect(() => {

        fetchDashboard();

    }, []);


    if (loading) {

        return (

            <DashboardSkeleton />

        );

    }


    if (!dashboard) {

        return null;

    }


    return (

        <div
            className="
            mx-auto
            w-full
            max-w-[1600px]
            "
        >

            <DashboardHeader
                statistics={
                    dashboard.statistics
                }
            />


            <div
                className="
                mt-6
                sm:mt-7
                lg:mt-8
                "
            >

                <StatCards
                    statistics={
                        dashboard.statistics
                    }
                />

            </div>


            <div
                className="
                mt-6
                grid
                grid-cols-1
                gap-6
                xl:grid-cols-3
                "
            >

                <div
                    className="
                    xl:col-span-2
                    "
                >

                    <UrgentEmergencies
                        emergencies={
                            dashboard.urgentEmergencies
                        }
                    />

                </div>


                <div>

                    <ActiveResponses
                        emergencies={
                            dashboard.activeResponses
                        }
                    />

                </div>

            </div>


            <div
                className="
                mt-6
                "
            >

                <RecentAssignments
                    assignments={
                        dashboard.recentAssignments
                    }
                />

            </div>

        </div>

    );

};


export default RescueDashboard;