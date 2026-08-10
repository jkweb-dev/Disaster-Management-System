"use client";

import {
    X,
    UserRound,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    ShieldCheck,
    FileText,
    Clock3,
    CheckCircle2,
    AlertTriangle,
    XCircle,
    ArrowRight,
    Activity
} from "lucide-react";


const VictimDetails = ({
    victim,
    onClose
}) => {

    if (!victim) {
        return null;
    }


    const stats =
        victim.reportStats || {
            total: 0,
            pending: 0,
            assigned: 0,
            inProgress: 0,
            resolved: 0,
            rejected: 0
        };


    return (

        <div
            className="
            fixed
            inset-0
            z-[90]
            flex
            items-center
            justify-center
            bg-black/50
            p-3
            backdrop-blur-sm
            sm:p-5
            "
            onMouseDown={(event) => {

                if (
                    event.target === event.currentTarget
                ) {

                    onClose();

                }

            }}
        >

            <div
                className="
                flex
                max-h-[94vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-3xl
                bg-gray-50
                shadow-2xl
                "
            >

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <div
                    className="
                    shrink-0
                    bg-gradient-to-r
                    from-blue-600
                    via-indigo-600
                    to-violet-600
                    px-5
                    py-5
                    text-white
                    sm:px-7
                    "
                >

                    <div
                        className="
                        flex
                        items-start
                        justify-between
                        gap-4
                        "
                    >

                        <div
                            className="
                            flex
                            min-w-0
                            items-center
                            gap-4
                            "
                        >

                            <div
                                className="
                                flex
                                h-14
                                w-14
                                shrink-0
                                items-center
                                justify-center
                                rounded-2xl
                                bg-white/15
                                text-xl
                                font-bold
                                ring-1
                                ring-white/20
                                "
                            >

                                {getInitial(victim.name)}

                            </div>


                            <div className="min-w-0">

                                <div
                                    className="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-2
                                    "
                                >

                                    <h2
                                        className="
                                        truncate
                                        text-xl
                                        font-bold
                                        sm:text-2xl
                                        "
                                    >

                                        {
                                            victim.name ||
                                            "Unknown Victim"
                                        }

                                    </h2>


                                    <span
                                        className="
                                        rounded-full
                                        bg-white/15
                                        px-2.5
                                        py-1
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        "
                                    >

                                        Victim

                                    </span>

                                </div>


                                <p
                                    className="
                                    mt-1
                                    truncate
                                    text-sm
                                    text-blue-100
                                    "
                                >

                                    {victim.email}

                                </p>

                            </div>

                        </div>


                        <button
                            type="button"
                            onClick={onClose}
                            className="
                            shrink-0
                            rounded-xl
                            bg-white/10
                            p-2
                            text-white
                            transition
                            hover:bg-white/20
                            "
                        >

                            <X size={22} />

                        </button>

                    </div>

                </div>



                {/* ================================================= */}
                {/* CONTENT */}
                {/* ================================================= */}

                <div
                    className="
                    min-h-0
                    flex-1
                    overflow-y-auto
                    p-4
                    sm:p-6
                    "
                >

                    <div
                        className="
                        space-y-5
                        "
                    >

                        {/* ================================================= */}
                        {/* PERSONAL INFORMATION */}
                        {/* ================================================= */}

                        <section
                            className="
                            rounded-3xl
                            border
                            border-gray-100
                            bg-white
                            p-5
                            shadow-sm
                            "
                        >

                            <SectionHeading
                                icon={UserRound}
                                title="Personal Information"
                                description="
                                Registered victim account information
                                "
                            />


                            <div
                                className="
                                mt-5
                                grid
                                grid-cols-1
                                gap-3
                                sm:grid-cols-2
                                lg:grid-cols-3
                                "
                            >

                                <InfoCard
                                    icon={UserRound}
                                    label="Full Name"
                                    value={
                                        victim.name ||
                                        "Not provided"
                                    }
                                />


                                <InfoCard
                                    icon={Mail}
                                    label="Email Address"
                                    value={
                                        victim.email ||
                                        "Not provided"
                                    }
                                />


                                <InfoCard
                                    icon={Phone}
                                    label="Phone Number"
                                    value={
                                        victim.phone ||
                                        "Not provided"
                                    }
                                />


                                <InfoCard
                                    icon={MapPin}
                                    label="City"
                                    value={
                                        victim.city ||
                                        "Not provided"
                                    }
                                />


                                <InfoCard
                                    icon={MapPin}
                                    label="Address"
                                    value={
                                        victim.address ||
                                        "Not provided"
                                    }
                                />


                                <InfoCard
                                    icon={CalendarDays}
                                    label="Registered"
                                    value={
                                        formatDate(
                                            victim.createdAt
                                        )
                                    }
                                />

                            </div>

                        </section>



                        {/* ================================================= */}
                        {/* ACCOUNT STATUS */}
                        {/* ================================================= */}

                        <section
                            className="
                            rounded-3xl
                            border
                            border-gray-100
                            bg-white
                            p-5
                            shadow-sm
                            "
                        >

                            <SectionHeading
                                icon={ShieldCheck}
                                title="Account Information"
                                description="
                                Current account status and activity
                                "
                            />


                            <div
                                className="
                                mt-5
                                flex
                                flex-wrap
                                gap-3
                                "
                            >

                                <StatusBadge
                                    status={
                                        victim.verificationStatus ||
                                        "approved"
                                    }
                                />


                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-gray-50
                                    px-4
                                    py-2.5
                                    "
                                >

                                    <Activity
                                        size={16}
                                        className="
                                        text-blue-500
                                        "
                                    />

                                    <span
                                        className="
                                        text-sm
                                        font-medium
                                        text-gray-600
                                        "
                                    >

                                        {
                                            stats.total
                                        }

                                        {" "}

                                        Emergency Reports

                                    </span>

                                </div>

                            </div>

                        </section>



                        {/* ================================================= */}
                        {/* REPORT STATISTICS */}
                        {/* ================================================= */}

                        <section
                            className="
                            rounded-3xl
                            border
                            border-gray-100
                            bg-white
                            p-5
                            shadow-sm
                            "
                        >

                            <SectionHeading
                                icon={FileText}
                                title="Emergency Activity"
                                description="
                                Overview of this victim's emergency reports
                                "
                            />


                            <div
                                className="
                                mt-5
                                grid
                                grid-cols-2
                                gap-3
                                sm:grid-cols-3
                                lg:grid-cols-6
                                "
                            >

                                <ReportStat
                                    label="Total"
                                    value={stats.total}
                                    icon={FileText}
                                    className="
                                    bg-blue-50
                                    text-blue-600
                                    "
                                />


                                <ReportStat
                                    label="Pending"
                                    value={stats.pending}
                                    icon={Clock3}
                                    className="
                                    bg-amber-50
                                    text-amber-600
                                    "
                                />


                                <ReportStat
                                    label="Assigned"
                                    value={stats.assigned}
                                    icon={ArrowRight}
                                    className="
                                    bg-indigo-50
                                    text-indigo-600
                                    "
                                />


                                <ReportStat
                                    label="In Progress"
                                    value={stats.inProgress}
                                    icon={Activity}
                                    className="
                                    bg-orange-50
                                    text-orange-600
                                    "
                                />


                                <ReportStat
                                    label="Resolved"
                                    value={stats.resolved}
                                    icon={CheckCircle2}
                                    className="
                                    bg-green-50
                                    text-green-600
                                    "
                                />


                                <ReportStat
                                    label="Rejected"
                                    value={stats.rejected}
                                    icon={XCircle}
                                    className="
                                    bg-red-50
                                    text-red-600
                                    "
                                />

                            </div>

                        </section>



                        {/* ================================================= */}
                        {/* EMERGENCY REPORT HISTORY */}
                        {/* ================================================= */}

                        <section
                            className="
                            rounded-3xl
                            border
                            border-gray-100
                            bg-white
                            p-5
                            shadow-sm
                            "
                        >

                            <SectionHeading
                                icon={FileText}
                                title="Emergency Reports"
                                description="
                                Complete emergency report history
                                "
                            />


                            <div className="mt-5">

                                {
                                    victim.emergencyReports?.length
                                        ?

                                        (

                                            <div
                                                className="
                                                space-y-3
                                                "
                                            >

                                                {
                                                    victim.emergencyReports.map(
                                                        (report) => (

                                                            <ReportCard
                                                                key={
                                                                    report._id
                                                                }
                                                                report={
                                                                    report
                                                                }
                                                            />

                                                        )
                                                    )
                                                }

                                            </div>

                                        )

                                        :

                                        (

                                            <div
                                                className="
                                                rounded-2xl
                                                border
                                                border-dashed
                                                border-gray-200
                                                bg-gray-50
                                                px-5
                                                py-10
                                                text-center
                                                "
                                            >

                                                <FileText
                                                    size={30}
                                                    className="
                                                    mx-auto
                                                    text-gray-300
                                                    "
                                                />


                                                <p
                                                    className="
                                                    mt-3
                                                    font-semibold
                                                    text-gray-700
                                                    "
                                                >

                                                    No emergency reports

                                                </p>


                                                <p
                                                    className="
                                                    mt-1
                                                    text-sm
                                                    text-gray-400
                                                    "
                                                >

                                                    This victim has not
                                                    submitted any emergency
                                                    reports yet.

                                                </p>

                                            </div>

                                        )

                                }

                            </div>

                        </section>

                    </div>

                </div>



                {/* ================================================= */}
                {/* FOOTER */}
                {/* ================================================= */}

                <div
                    className="
                    shrink-0
                    border-t
                    border-gray-100
                    bg-white
                    px-5
                    py-4
                    sm:px-6
                    "
                >

                    <div
                        className="
                        flex
                        justify-end
                        "
                    >

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                            rounded-xl
                            bg-gray-900
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-600
                            "
                        >

                            Close

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};



/* ================================================= */
/* SECTION HEADING */
/* ================================================= */

const SectionHeading = ({
    icon: Icon,
    title,
    description
}) => (

    <div
        className="
        flex
        items-start
        gap-3
        "
    >

        <div
            className="
            rounded-xl
            bg-blue-50
            p-2.5
            text-blue-600
            "
        >

            <Icon size={19} />

        </div>


        <div>

            <h3
                className="
                font-bold
                text-gray-800
                "
            >

                {title}

            </h3>


            <p
                className="
                mt-0.5
                text-xs
                text-gray-400
                "
            >

                {description}

            </p>

        </div>

    </div>

);



/* ================================================= */
/* INFO CARD */
/* ================================================= */

const InfoCard = ({
    icon: Icon,
    label,
    value
}) => (

    <div
        className="
        rounded-2xl
        border
        border-gray-100
        bg-gray-50/70
        p-4
        "
    >

        <div
            className="
            flex
            items-center
            gap-2
            text-xs
            font-medium
            text-gray-400
            "
        >

            <Icon size={14} />

            {label}

        </div>


        <p
            className="
            mt-2
            break-words
            text-sm
            font-semibold
            text-gray-700
            "
        >

            {value}

        </p>

    </div>

);



/* ================================================= */
/* REPORT STAT */
/* ================================================= */

const ReportStat = ({
    label,
    value,
    icon: Icon,
    className
}) => (

    <div
        className="
        rounded-2xl
        border
        border-gray-100
        p-3
        "
    >

        <div
            className={`
            inline-flex
            rounded-xl
            p-2
            ${className}
            `}
        >

            <Icon size={16} />

        </div>


        <p
            className="
            mt-2
            text-xl
            font-bold
            text-gray-800
            "
        >

            {value}

        </p>


        <p
            className="
            text-[11px]
            font-medium
            text-gray-400
            "
        >

            {label}

        </p>

    </div>

);



/* ================================================= */
/* REPORT CARD */
/* ================================================= */

const ReportCard = ({
    report
}) => {

    return (

        <div
            className="
            rounded-2xl
            border
            border-gray-100
            bg-gray-50/70
            p-4
            transition
            hover:border-blue-100
            hover:bg-blue-50/30
            "
        >

            <div
                className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-start
                sm:justify-between
                "
            >

                <div
                    className="
                    min-w-0
                    "
                >

                    <div
                        className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        "
                    >

                        <h4
                            className="
                            font-bold
                            text-gray-800
                            "
                        >

                            {
                                report.title ||
                                "Emergency Report"
                            }

                        </h4>


                        <ReportStatus
                            status={
                                report.status
                            }
                        />

                    </div>


                    <p
                        className="
                        mt-1
                        text-xs
                        text-gray-400
                        "
                    >

                        {
                            report.emergencyType ||
                            "Emergency"
                        }

                        {" • "}

                        {
                            formatDate(
                                report.createdAt
                            )
                        }

                    </p>

                </div>


                <div
                    className="
                    shrink-0
                    rounded-xl
                    bg-white
                    px-3
                    py-2
                    text-xs
                    shadow-sm
                    "
                >

                    <span
                        className="
                        text-gray-400
                        "
                    >

                        Severity

                    </span>


                    <p
                        className={`
                        mt-0.5
                        font-bold
                        ${getSeverityColor(
                            report.severity
                        )}
                        `}
                    >

                        {
                            report.severity ||
                            "Unknown"
                        }

                    </p>

                </div>

            </div>


            {
                report.description && (

                    <p
                        className="
                        mt-3
                        line-clamp-2
                        text-sm
                        leading-6
                        text-gray-500
                        "
                    >

                        {report.description}

                    </p>

                )
            }


            <div
                className="
                mt-4
                flex
                flex-wrap
                gap-2
                "
            >

                {
                    report.location?.city && (

                        <span
                            className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-lg
                            bg-white
                            px-2.5
                            py-1.5
                            text-xs
                            text-gray-500
                            "
                        >

                            <MapPin size={12} />

                            {
                                report.location.city
                            }

                        </span>

                    )
                }


                {
                    report.assignedRescue && (

                        <span
                            className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-lg
                            bg-indigo-50
                            px-2.5
                            py-1.5
                            text-xs
                            font-medium
                            text-indigo-600
                            "
                        >

                            <ShieldCheck size={12} />

                            Rescue Assigned

                        </span>

                    )
                }

            </div>

        </div>

    );

};



/* ================================================= */
/* STATUS BADGE */
/* ================================================= */

const StatusBadge = ({
    status
}) => {

    const normalized =
        status?.toLowerCase();


    const approved =
        normalized === "approved";


    return (

        <div
            className={`
            inline-flex
            items-center
            gap-2
            rounded-xl
            px-4
            py-2.5
            text-sm
            font-semibold
            ${
                approved
                    ? "bg-green-50 text-green-600"
                    : "bg-amber-50 text-amber-600"
            }
            `}
        >

            {
                approved
                    ?
                    <CheckCircle2 size={16} />
                    :
                    <AlertTriangle size={16} />
            }


            {capitalize(status || "Pending")}

        </div>

    );

};



/* ================================================= */
/* REPORT STATUS */
/* ================================================= */

const ReportStatus = ({
    status
}) => {

    const styles = {

        Pending:
            "bg-amber-50 text-amber-600",

        Assigned:
            "bg-indigo-50 text-indigo-600",

        "In Progress":
            "bg-orange-50 text-orange-600",

        Resolved:
            "bg-green-50 text-green-600",

        Rejected:
            "bg-red-50 text-red-600"

    };


    return (

        <span
            className={`
            rounded-full
            px-2.5
            py-1
            text-[10px]
            font-bold
            ${styles[status] || "bg-gray-100 text-gray-500"}
            `}
        >

            {status || "Unknown"}

        </span>

    );

};



/* ================================================= */
/* HELPERS */
/* ================================================= */

const getInitial = (
    name
) => {

    return (
        name
            ?.trim()
            ?.charAt(0)
            ?.toUpperCase()
        ||
        "?"
    );

};



const capitalize = (
    value
) => {

    if (!value) {
        return "";
    }

    return (
        value.charAt(0).toUpperCase() +
        value.slice(1)
    );

};



const formatDate = (
    date
) => {

    if (!date) {
        return "—";
    }


    return new Date(
        date
    ).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    );

};



const getSeverityColor = (
    severity
) => {

    const colors = {

        Critical:
            "text-red-600",

        High:
            "text-orange-600",

        Medium:
            "text-amber-600",

        Low:
            "text-green-600"

    };


    return (
        colors[severity] ||
        "text-gray-600"
    );

};


export default VictimDetails;