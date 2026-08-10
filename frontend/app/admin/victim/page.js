"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


import api from "@/lib/axios";
import handleError from "@/utils/handleError";

import VictimsHeader from "@/components/AdminVictim/header";
import VictimsStats from "@/components/AdminVictim/stat";
import VictimsList from "@/components/AdminVictim/victimList";
import VictimsLoadingSkeleton from "@/components/AdminVictim/loading";
import VictimsEmptyState from "@/components/AdminVictim/emptystate";
import VictimDetails from "@/components/AdminVictim/victimDetails";


const VictimsPage = () => {

    const router = useRouter();


    const [victims, setVictims] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [selectedVictim, setSelectedVictim] =
        useState(null);

    const [detailsLoading, setDetailsLoading] =
        useState(false);


    /*
    |--------------------------------------------------------------------------
    | Fetch Victims
    |--------------------------------------------------------------------------
    */

    const fetchVictims = async () => {

        try {

            setLoading(true);

            setError("");


            const response = await api.get(
                "/admin/victims"
            );


            setVictims(
                response.data.victims || []
            );

        }

        catch (error) {

            setError(
                error?.response?.data?.message
                ||
                "Failed to load victims."
            );


            handleError(
                error,
                router
            );

        }

        finally {

            setLoading(false);

        }

    };



    /*
    |--------------------------------------------------------------------------
    | Fetch Single Victim
    |--------------------------------------------------------------------------
    */

    const handleViewVictim = async (
        victim
    ) => {

        try {

            setDetailsLoading(true);

            setSelectedVictim(null);

            setError("");


            const response = await api.get(

                `/admin/victims/${victim._id}`

            );


            setSelectedVictim(
                response.data.victim
            );

        }

        catch (error) {

            setError(
                error?.response?.data?.message
                ||
                "Failed to load victim details."
            );


            handleError(
                error,
                router
            );

        }

        finally {

            setDetailsLoading(false);

        }

    };



    /*
    |--------------------------------------------------------------------------
    | Initial Fetch
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        fetchVictims();

    }, []);



    /*
    |--------------------------------------------------------------------------
    | Search
    |--------------------------------------------------------------------------
    */

    const filteredVictims =
        victims.filter((victim) => {

            const query =
                search
                    .trim()
                    .toLowerCase();


            if (!query) {
                return true;
            }


            return (

                victim.name
                    ?.toLowerCase()
                    .includes(query)

                ||

                victim.email
                    ?.toLowerCase()
                    .includes(query)

                ||

                victim.phone
                    ?.toLowerCase()
                    .includes(query)

                ||

                victim.city
                    ?.toLowerCase()
                    .includes(query)

            );

        });



    /*
    |--------------------------------------------------------------------------
    | Statistics
    |--------------------------------------------------------------------------
    */

    const totalVictims =
        victims.length;


    const victimsWithReports =
        victims.filter(
            victim =>
                victim.emergencyReportCount > 0
        ).length;


    const totalReports =
        victims.reduce(
            (
                total,
                victim
            ) =>
                total +
                (
                    victim.emergencyReportCount
                    || 0
                ),
            0
        );



    return (

        <div
            className="
            min-h-full
            space-y-6
            "
        >

            {/* Header */}

            <VictimsHeader
                search={search}
                setSearch={setSearch}
                onRefresh={fetchVictims}
                loading={loading}
            />



            {/* Stats */}

            {!loading && (

                <VictimsStats
                    totalVictims={totalVictims}
                    victimsWithReports={
                        victimsWithReports
                    }
                    totalReports={totalReports}
                />

            )}



            {/* Error */}

            {
                error && (

                    <div
                        className="
                        rounded-2xl
                        border
                        border-red-100
                        bg-red-50
                        px-5
                        py-4
                        text-sm
                        font-medium
                        text-red-700
                        "
                    >

                        {error}

                    </div>

                )
            }



            {/* Main Content */}

            {
                loading

                    ?

                    (

                        <VictimsLoadingSkeleton />

                    )

                    :

                    filteredVictims.length === 0

                        ?

                        (

                            <VictimsEmptyState
                                hasSearch={
                                    Boolean(
                                        search.trim()
                                    )
                                }
                                onClearSearch={() =>
                                    setSearch("")
                                }
                            />

                        )

                        :

                        (

                            <VictimsList

                                victims={
                                    filteredVictims
                                }

                                onViewVictim={
                                    handleViewVictim
                                }

                            />

                        )
            }



            {/* Details */}

            {
                selectedVictim && (

                    <VictimDetails

                        victim={
                            selectedVictim
                        }

                        onClose={() =>
                            setSelectedVictim(
                                null
                            )
                        }

                    />

                )
            }



            {/* Details Loading */}

            {
                detailsLoading && (

                    <div
                        className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-black/40
                        backdrop-blur-sm
                        "
                    >

                        <div
                            className="
                            rounded-2xl
                            bg-white
                            px-8
                            py-6
                            text-center
                            shadow-2xl
                            "
                        >

                            <div
                                className="
                                mx-auto
                                h-8
                                w-8
                                animate-spin
                                rounded-full
                                border-4
                                border-blue-100
                                border-t-blue-600
                                "
                            />

                            <p
                                className="
                                mt-3
                                text-sm
                                font-medium
                                text-gray-600
                                "
                            >

                                Loading victim details...

                            </p>

                        </div>

                    </div>

                )

            }

        </div>

    );

};


export default VictimsPage;