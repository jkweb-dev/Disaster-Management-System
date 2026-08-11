"use client";

import {
    AlertCircle,
    AlertTriangle,
    ShieldAlert,
    ShieldCheck
} from "lucide-react";


const SeverityBadge = ({
    severity
}) => {

    const config = {

        Low: {
            label: "Low Severity",
            icon: ShieldCheck,
            className:
                "bg-emerald-50 text-emerald-700 border-emerald-100"
        },

        Medium: {
            label: "Medium Severity",
            icon: AlertCircle,
            className:
                "bg-amber-50 text-amber-700 border-amber-100"
        },

        High: {
            label: "High Severity",
            icon: AlertTriangle,
            className:
                "bg-orange-50 text-orange-700 border-orange-100"
        },

        Critical: {
            label: "Critical Severity",
            icon: ShieldAlert,
            className:
                "bg-rose-50 text-rose-700 border-rose-100"
        }

    };


    const current =
        config[severity] || {

            label: "Unknown Severity",

            icon: AlertCircle,

            className:
                "bg-slate-50 text-slate-600 border-slate-100"

        };


    const Icon =
        current.icon;


    return (

        <span
            className={`
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            px-3
            py-1.5
            text-xs
            font-bold
            ${current.className}
            `}
        >

            <Icon
                size={14}
            />

            {current.label}

        </span>

    );

};


export default SeverityBadge;