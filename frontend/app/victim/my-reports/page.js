"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import { getMyEmergencyReports } from "@/lib/emergencyAxios";
import handleError from "@/utils/handleError";

import ReportsHeader from "@/components/Emergency-Reports/header";
import ReportsStats from "@/components/Emergency-Reports/reportStats";
import SearchFilter from "@/components/Emergency-Reports/searchFilter";
import ReportCard from "@/components/Emergency-Reports/ReportCard";
import EmptyState from "@/components/Emergency-Reports/emptyState";
import LoadingSkeleton from "@/components/Emergency-Reports/loadingSkelton";

const MyReportsPage = () => {

    const router = useRouter()

    const [reports, setReports] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("All");



    const fetchReports = async () => {

        try {

            setLoading(true);

            const response = await getMyEmergencyReports();

            setReports(response.reports);

        }

        catch (error) {

            console.log(error);

            handleError(error , router)

        }

        finally {

            setLoading(false);

        }

    };



    useEffect(() => {

        fetchReports();

    }, []);





    const filteredReports = useMemo(() => {

        return reports.filter((report) => {

            const matchesSearch =

                report.title
                    .toLowerCase()
                    .includes(search.toLowerCase())

                ||

                report.emergencyType
                    .toLowerCase()
                    .includes(search.toLowerCase());



            const matchesStatus =

                status === "All"

                ||

                report.status === status;



            return matchesSearch && matchesStatus;

        });

    }, [reports, search, status]);






    const stats = {

        total: reports.length,

        pending: reports.filter(
            report => report.status === "Pending"
        ).length,

        inProgress: reports.filter(
            report => report.status === "In Progress"
        ).length,

        resolved: reports.filter(
            report => report.status === "Resolved"
        ).length

    };



    return (

        <section className="min-h-screen bg-gray-50">

            <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">

                <ReportsHeader />



                <ReportsStats

                    stats={stats}

                />



                <SearchFilter

                    search={search}

                    setSearch={setSearch}

                    status={status}

                    setStatus={setStatus}

                />



                {

                    loading

                    ?

                    (

                        <LoadingSkeleton />

                    )

                    :

                    filteredReports.length === 0

                    ?

                    (

                        <EmptyState />

                    )

                    :

                    (

                        <div className="grid gap-6 lg:grid-cols-2">

                            {

                                filteredReports.map((report) => (

                                    <ReportCard

                                        key={report._id}

                                        report={report}

                                    />

                                ))

                            }

                        </div>

                    )

                }

            </div>

        </section>

    );

};

export default MyReportsPage;