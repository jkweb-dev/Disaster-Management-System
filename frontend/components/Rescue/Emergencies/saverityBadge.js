"use client";

import {
    AlertTriangle,
    ShieldAlert
} from "lucide-react";


const EmergencySeverityBadge = ({
    severity
}) => {


    const styles = {

        Critical: {
            wrapper:
                "border-rose-200 bg-rose-50 text-rose-700",
            icon:
                "text-rose-500",
            dot:
                "bg-rose-500",
            Icon:
                ShieldAlert
        },

        High: {
            wrapper:
                "border-orange-200 bg-orange-50 text-orange-700",
            icon:
                "text-orange-500",
            dot:
                "bg-orange-500",
            Icon:
                AlertTriangle
        },

        Medium: {
            wrapper:
                "border-amber-200 bg-amber-50 text-amber-700",
            icon:
                "text-amber-500",
            dot:
                "bg-amber-500",
            Icon:
                AlertTriangle
        },

        Low: {
            wrapper:
                "border-emerald-200 bg-emerald-50 text-emerald-700",
            icon:
                "text-emerald-500",
            dot:
                "bg-emerald-500",
            Icon:
                AlertTriangle
        }

    };



    const style =
        styles[severity] || styles.Medium;


    const Icon =
        style.Icon;



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
            ${style.wrapper}
            `}
        >

            <Icon
                size={12}
                className={style.icon}
            />


            <span>

                {severity || "Unknown"}

            </span>

        </span>

    );

};


export default EmergencySeverityBadge;