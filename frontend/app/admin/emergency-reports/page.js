"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
    AlertCircle,
    FileSearch,
    Inbox,
} from "lucide-react";

import api from "@/lib/axios";

import { getApprovedRescueTeams , assignRescueTeam } from "@/services/adminEmergency";

import EmergencyReportsHeader from "@/components/AdminEmergencyReport/header";
import EmergencyReportsStats from "@/components/AdminEmergencyReport/stats";
import EmergencyReportsFilters from "@/components/AdminEmergencyReport/filter";
import EmergencyReportCard from "@/components/AdminEmergencyReport/reportCard";
import EmergencyReportDetails from "@/components/AdminEmergencyReport/ReportDetails";
import LoadingSkeleton from "@/components/AdminEmergencyReport/loading";


import handleError from "@/utils/handleError";


const EmergencyReportsPage = () => {

    const router = useRouter();


    // --------------------------------------------------
    // Reports
    // --------------------------------------------------

    const [reports, setReports] = useState([]);

    const [loading, setLoading] = useState(true);

    const [refreshing, setRefreshing] = useState(false);


    // --------------------------------------------------
    // Filters
    // --------------------------------------------------

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("all");

    const [severity, setSeverity] = useState("all");

    const [emergencyType, setEmergencyType] = useState("");



    // --------------------------------------------------
    // Selected report
    // --------------------------------------------------

    const [selectedReport, setSelectedReport] =
        useState(null);

    const [detailsLoading, setDetailsLoading] =
        useState(false);


    // --------------------------------------------------
    // Status update
    // --------------------------------------------------

    const [updatingStatus, setUpdatingStatus] =
        useState(false);


        const [rescueTeams, setRescueTeams] = useState([]);

const [selectedRescue, setSelectedRescue] = useState(null);

const [rescueTeamsLoading, setRescueTeamsLoading] =
    useState(false);

const [assigningRescue, setAssigningRescue] =
    useState(false);
    // --------------------------------------------------
    // Error
    // --------------------------------------------------

    const [error, setError] = useState("");



    const fetchApprovedRescueTeams = async () => {

    try {

        setRescueTeamsLoading(true);

        setError("");


        const data =
            await getApprovedRescueTeams();


        setRescueTeams(
            data.rescueTeams || []
        );

    }

    catch (error) {

        setError(
            error?.response?.data?.message
            ||
            "Failed to load approved rescue teams."
        );


        handleError(
            error,
            router
        );

    }

    finally {

        setRescueTeamsLoading(false);

    }

};

    // ==================================================
    // GET ALL REPORTS
    // ==================================================

    const fetchReports = async (
        isRefresh = false
    ) => {

        try {

            if (isRefresh) {

                setRefreshing(true);

            } else {

                setLoading(true);

            }


            setError("");


            const res = await api.get(
                "/admin/emergency-reports"
            );


            setReports(
                res.data.reports || []
            );

        }

        catch (error) {

            setError(
                error?.response?.data?.message
                || "Failed to load emergency reports."
            );


            handleError(
                error,
                router
            );

        }

        finally {

            setLoading(false);

            setRefreshing(false);

        }

    };



    // ==================================================
    // INITIAL LOAD
    // ==================================================

    useEffect(() => {

        fetchReports();

    }, []);



    // ==================================================
    // GET SINGLE REPORT
    // ==================================================

  const handleViewReport = async (
    report
) => {

    try {

        setDetailsLoading(true);

        setSelectedReport(null);

        setSelectedRescue(null);

        setError("");


        const [
            reportResponse,
            rescueResponse
        ] = await Promise.all([

            api.get(
                `/admin/emergency-reports/${report._id}`
            ),

            getApprovedRescueTeams()

        ]);


        setSelectedReport(
            reportResponse.data.report
        );


        setRescueTeams(
            rescueResponse.rescueTeams || []
        );

    }

    catch (error) {

        setError(
            error?.response?.data?.message
            ||
            "Failed to load report details."
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





const handleAssignRescue = async () => {

    if (
        !selectedReport?._id
        ||
        !selectedRescue
    ) {

        return;

    }


    try {

        setAssigningRescue(true);

        setError("");


        const data =
            await assignRescueTeam(
                selectedReport._id,
                selectedRescue
            );


        const updatedReport =
            data.report;


        // Update modal

        setSelectedReport(
            updatedReport
        );


        // Update report list

        setReports(
            (previousReports) =>

                previousReports.map(
                    (report) =>

                        report._id === updatedReport._id

                            ? updatedReport

                            : report
                )

        );


        // Clear selection

        setSelectedRescue(null);

    }

    catch (error) {

        setError(
            error?.response?.data?.message
            ||
            "Failed to assign rescue team."
        );


        handleError(
            error,
            router
        );

    }

    finally {

        setAssigningRescue(false);

    }

};

    // ==================================================
    // UPDATE STATUS
    // ==================================================

    const handleStatusChange = async (
        newStatus
    ) => {

        if (!selectedReport?._id) {
            return;
        }


        try {

            setUpdatingStatus(true);

            setError("");


            const res = await api.patch(

                `/admin/emergency-reports/${selectedReport._id}/status`,

                {
                    status: newStatus
                }

            );


            /*
                Expected backend response:

                {
                    report: updatedReport
                }
            */


            const updatedReport =
                res.data.report;


            // Update modal

            setSelectedReport(
                updatedReport
            );


            // Update card/list

            setReports((previousReports) =>

                previousReports.map(
                    (report) =>

                        report._id === updatedReport._id

                            ? updatedReport

                            : report
                )

            );

        }

        catch (error) {

            setError(
                error?.response?.data?.message
                || "Failed to update report status."
            );


            handleError(
                error,
                router
            );

        }

        finally {

            setUpdatingStatus(false);

        }

    };



    // ==================================================
    // RESET FILTERS
    // ==================================================

    const handleResetFilters = () => {

        setSearch("");

        setStatus("all");

        setSeverity("all");

        setEmergencyType("");

    };



    // ==================================================
    // FILTER REPORTS
    // ==================================================

    const filteredReports = useMemo(() => {

        const searchValue =
            search
                .trim()
                .toLowerCase();


        const typeValue =
            emergencyType
                .trim()
                .toLowerCase();


        return reports.filter(
            (report) => {


                // ------------------------------------------
                // Search
                // ------------------------------------------

                const matchesSearch =

                    !searchValue

                    ||

                    report.title
                        ?.toLowerCase()
                        .includes(searchValue)

                    ||

                    report.name
                        ?.toLowerCase()
                        .includes(searchValue)

                    ||

                    report.email
                        ?.toLowerCase()
                        .includes(searchValue)

                    ||

                    report.phone
                        ?.toLowerCase()
                        .includes(searchValue)

                    ||

                    report.emergencyType
                        ?.toLowerCase()
                        .includes(searchValue)

                    ||

                    report.location?.city
                        ?.toLowerCase()
                        .includes(searchValue);



                // ------------------------------------------
                // Status
                // ------------------------------------------

                const matchesStatus =

                    status === "all"

                    ||

                    report.status === status;



                // ------------------------------------------
                // Severity
                // ------------------------------------------

                const matchesSeverity =

                    severity === "all"

                    ||

                    report.severity === severity;



                // ------------------------------------------
                // Emergency Type
                // ------------------------------------------

                const matchesType =

                    !typeValue

                    ||

                    report.emergencyType
                        ?.toLowerCase()
                        .includes(typeValue);



                return (

                    matchesSearch
                    &&
                    matchesStatus
                    &&
                    matchesSeverity
                    &&
                    matchesType

                );

            }
        );

    }, [
        reports,
        search,
        status,
        severity,
        emergencyType
    ]);



    // ==================================================
    // RENDER
    // ==================================================

    return (

        <div
            className="
            mx-auto
            w-full
            max-w-[1600px]
            space-y-6
            "
        >

            {/* ----------------------------------------- */}
            {/* Header */}
            {/* ----------------------------------------- */}

            <EmergencyReportsHeader

                onRefresh={() =>
                    fetchReports(true)
                }

                loading={refreshing}

            />



            {/* ----------------------------------------- */}
            {/* Error */}
            {/* ----------------------------------------- */}

            {
                error && (

                    <div
                        className="
                        flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-red-200
                        bg-red-50
                        p-4
                        text-red-700
                        "
                    >

                        <AlertCircle
                            size={20}
                            className="
                            mt-0.5
                            shrink-0
                            "
                        />


                        <div>

                            <p
                                className="
                                font-semibold
                                "
                            >

                                Something went wrong

                            </p>


                            <p
                                className="
                                mt-1
                                text-sm
                                text-red-600
                                "
                            >

                                {error}

                            </p>

                        </div>

                    </div>

                )
            }



            {/* ----------------------------------------- */}
            {/* Stats */}
            {/* ----------------------------------------- */}

            <EmergencyReportsStats
                reports={reports}
            />



            {/* ----------------------------------------- */}
            {/* Filters */}
            {/* ----------------------------------------- */}

            <EmergencyReportsFilters

                search={search}

                setSearch={setSearch}

                status={status}

                setStatus={setStatus}

                severity={severity}

                setSeverity={setSeverity}

                emergencyType={emergencyType}

                setEmergencyType={setEmergencyType}

                onReset={handleResetFilters}

            />



            {/* ----------------------------------------- */}
            {/* Results Header */}
            {/* ----------------------------------------- */}

            <div
                className="
                flex
                flex-col
                gap-2
                sm:flex-row
                sm:items-center
                sm:justify-between
                "
            >

                <div>

                    <h2
                        className="
                        flex
                        items-center
                        gap-2
                        text-xl
                        font-bold
                        text-gray-800
                        "
                    >

                        <FileSearch
                            size={21}
                            className="text-orange-500"
                        />

                        Emergency Reports

                    </h2>


                    <p
                        className="
                        mt-1
                        text-sm
                        text-gray-500
                        "
                    >

                        Showing{" "}

                        <span
                            className="
                            font-semibold
                            text-gray-700
                            "
                        >

                            {filteredReports.length}

                        </span>

                        {" "}of{" "}

                        <span
                            className="
                            font-semibold
                            text-gray-700
                            "
                        >

                            {reports.length}

                        </span>

                        {" "}reports

                    </p>

                </div>

            </div>



            {/* ----------------------------------------- */}
            {/* Loading */}
            {/* ----------------------------------------- */}

            {
                loading

                    ? (

                        <LoadingSkeleton />

                    )

                    : filteredReports.length === 0

                        ? (

                            <EmptyState
                                hasFilters={
                                    Boolean(
                                        search ||
                                        status !== "all" ||
                                        severity !== "all" ||
                                        emergencyType
                                    )
                                }

                                onReset={
                                    handleResetFilters
                                }

                            />

                        )

                        : (

                            <div
                                className="
                                grid
                                gap-5
                                sm:grid-cols-2
                                xl:grid-cols-3
                                "
                            >

                                {
                                    filteredReports.map(
                                        (report) => (

                                            <EmergencyReportCard

                                                key={report._id}

                                                report={report}

                                                onView={
                                                    handleViewReport
                                                }

                                            />

                                        )
                                    )
                                }

                            </div>

                        )
            }




            {
                detailsLoading && (

                    <DetailsLoading />

                )
            }


            {
                selectedReport && !detailsLoading && (

                <EmergencyReportDetails

    report={selectedReport}

    onClose={() =>
        setSelectedReport(null)
    }

    rescueTeams={rescueTeams}

    selectedRescue={selectedRescue}

    onSelectRescue={(team) =>
        setSelectedRescue(team._id)
    }

    onAssignRescue={
        handleAssignRescue
    }

    rescueTeamsLoading={
        detailsLoading
    }

    assigningRescue={
        assigningRescue
    }

/>
                )
            }

        </div>

    );

};



/*
|--------------------------------------------------------------------------
| Empty State
|--------------------------------------------------------------------------
*/

const EmptyState = ({
    hasFilters,
    onReset
}) => {

    return (

        <div
            className="
            rounded-3xl
            border
            border-gray-100
            bg-white
            px-6
            py-16
            text-center
            shadow-sm
            "
        >

            <div
                className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gray-100
                text-gray-400
                "
            >

                <Inbox size={30}/>

            </div>


            <h3
                className="
                mt-5
                text-lg
                font-bold
                text-gray-800
                "
            >

                No emergency reports found

            </h3>


            <p
                className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-gray-500
                "
            >

                {
                    hasFilters

                        ? "No reports match your current filters. Try changing your search or filters."

                        : "There are currently no emergency reports available."

                }

            </p>


            {
                hasFilters && (

                    <button

                        type="button"

                        onClick={onReset}

                        className="
                        mt-5
                        rounded-xl
                        bg-gray-900
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-orange-600
                        "

                    >

                        Clear Filters

                    </button>

                )
            }

        </div>

    );

};



/*
|--------------------------------------------------------------------------
| Details Loading
|--------------------------------------------------------------------------
*/

const DetailsLoading = () => {

    return (

        <div
            className="
            fixed
            inset-0
            z-[60]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
            backdrop-blur-sm
            "
        >

            <div
                className="
                flex
                w-full
                max-w-md
                flex-col
                items-center
                rounded-3xl
                bg-white
                px-8
                py-12
                shadow-2xl
                "
            >

                <div
                    className="
                    h-12
                    w-12
                    animate-spin
                    rounded-full
                    border-4
                    border-gray-200
                    border-t-orange-500
                    "
                />


                <p
                    className="
                    mt-5
                    font-semibold
                    text-gray-800
                    "
                >

                    Loading emergency details...

                </p>


                <p
                    className="
                    mt-1
                    text-sm
                    text-gray-500
                    "
                >

                    Please wait

                </p>

            </div>

        </div>

    );

};


export default EmergencyReportsPage;