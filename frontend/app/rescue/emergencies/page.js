
"use client";

import { useEffect, useMemo, useState } from "react";

import api from "@/lib/axios";
import handleError from "@/utils/handleError";

import EmergencyHeader from "@/components/Rescue/Emergencies/header";

import EmergencyStats from "@/components/Rescue/Emergencies/stats";

import EmergencyFilters from "@/components/Rescue/Emergencies/filter";

import EmergencyList from "@/components/Rescue/Emergencies/list";

import EmptyState from "@/components/Rescue/Emergencies/emptyStat";

import EmergencySkeleton from "@/components/Rescue/Emergencies/skelton";



const RescueEmergenciesPage = () => {


    const [emergencies, setEmergencies] =
        useState([]);


    const [loading, setLoading] =
        useState(true);


    const [search, setSearch] =
        useState("");


    const [statusFilter, setStatusFilter] =
        useState("All");


    const [severityFilter, setSeverityFilter] =
        useState("All");



    /*
    |--------------------------------------------------------------------------
    | Fetch Emergencies
    |--------------------------------------------------------------------------
    */

    const fetchEmergencies = async () => {

        try {

            setLoading(true);


            const res =
                await api.get(
                    "/rescue/emergencies"
                );


            setEmergencies(
                res.data.emergencies || []
            );


        } catch (error) {

            handleError(
                error,
                "Unable to load emergencies."
            );

        } finally {

            setLoading(false);

        }

    };



    useEffect(() => {

        fetchEmergencies();

    }, []);



    /*
    |--------------------------------------------------------------------------
    | Filter Emergencies
    |--------------------------------------------------------------------------
    */

    const filteredEmergencies =
        useMemo(() => {

            return emergencies.filter(
                (emergency) => {


                    

                    const searchValue =
                        search
                            .trim()
                            .toLowerCase();


                    const matchesSearch =
                        !searchValue ||

                        emergency.title
                            ?.toLowerCase()
                            .includes(
                                searchValue
                            ) ||

                        emergency.name
                            ?.toLowerCase()
                            .includes(
                                searchValue
                            ) ||

                        emergency.emergencyType
                            ?.toLowerCase()
                            .includes(
                                searchValue
                            ) ||

                        emergency.location?.city
                            ?.toLowerCase()
                            .includes(
                                searchValue
                            ) ||

                        emergency.location?.address
                            ?.toLowerCase()
                            .includes(
                                searchValue
                            ) ||

                        emergency._id
                            ?.toLowerCase()
                            .includes(
                                searchValue
                            );



                    /*
                    |----------------------------------------------------------
                    | Status
                    |----------------------------------------------------------
                    */

                    const matchesStatus =
                        statusFilter === "All" ||
                        emergency.status ===
                            statusFilter;



                    /*
                    |----------------------------------------------------------
                    | Severity
                    |----------------------------------------------------------
                    */

                    const matchesSeverity =
                        severityFilter === "All" ||
                        emergency.severity ===
                            severityFilter;



                    return (
                        matchesSearch &&
                        matchesStatus &&
                        matchesSeverity
                    );

                }
            );

        }, [
            emergencies,
            search,
            statusFilter,
            severityFilter
        ]);



    /*
    |--------------------------------------------------------------------------
    | Clear Filters
    |--------------------------------------------------------------------------
    */

    const clearFilters = () => {

        setSearch("");

        setStatusFilter("All");

        setSeverityFilter("All");

    };



    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (

        <div
            className="
            mx-auto
            w-full
            max-w-[1600px]
            space-y-6
            "
        >

            {/* Header */}

            <EmergencyHeader
                total={
                    emergencies.length
                }
            />



            {/* Statistics */}

            <EmergencyStats
                emergencies={
                    emergencies
                }
            />



            {/* Filters */}

            <EmergencyFilters

                search={
                    search
                }

                setSearch={
                    setSearch
                }

                statusFilter={
                    statusFilter
                }

                setStatusFilter={
                    setStatusFilter
                }

                severityFilter={
                    severityFilter
                }

                setSeverityFilter={
                    setSeverityFilter
                }

                totalResults={
                    filteredEmergencies.length
                }

            />



            {/* Loading */}

            {
                loading ? (

                    <EmergencySkeleton
                        count={4}
                    />

                ) : filteredEmergencies.length > 0 ? (

                    <EmergencyList
                        emergencies={
                            filteredEmergencies
                        }
                    />

                ) : (

                    <EmptyState

                        filtered={
                            emergencies.length > 0
                        }

                        onClearFilters={
                            clearFilters
                        }

                    />

                )
            }

        </div>

    );

};


export default RescueEmergenciesPage;
