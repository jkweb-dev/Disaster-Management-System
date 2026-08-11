"use client";


const EmergencyStatusBadge = ({
    status
}) => {


    const styles = {

        Assigned: {
            wrapper:
                "bg-blue-50 text-blue-700 border-blue-100",
            dot:
                "bg-blue-500"
        },

        "In Progress": {
            wrapper:
                "bg-amber-50 text-amber-700 border-amber-100",
            dot:
                "bg-amber-500"
        },

        Resolved: {
            wrapper:
                "bg-emerald-50 text-emerald-700 border-emerald-100",
            dot:
                "bg-emerald-500"
        },

        Rejected: {
            wrapper:
                "bg-rose-50 text-rose-700 border-rose-100",
            dot:
                "bg-rose-500"
        },

        Pending: {
            wrapper:
                "bg-slate-50 text-slate-600 border-slate-100",
            dot:
                "bg-slate-400"
        }

    };



    const style =
        styles[status] || styles.Pending;



    return (

        <span
            className={`
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            px-2.5
            py-1
            text-[10px]
            font-bold
            whitespace-nowrap
            ${style.wrapper}
            `}
        >

            <span
                className={`
                h-1.5
                w-1.5
                rounded-full
                ${style.dot}
                ${
                    status === "In Progress"
                        ? "animate-pulse"
                        : ""
                }
                `}
            />

            {status || "Unknown"}

        </span>

    );

};


export default EmergencyStatusBadge;