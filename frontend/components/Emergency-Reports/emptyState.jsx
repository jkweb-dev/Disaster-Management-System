"use client";

import Link from "next/link";
import { FileSearch, Plus } from "lucide-react";

const EmptyState = () => {
    return (

        <div className="rounded-3xl border border-dashed bg-white p-14 text-center">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">

                <FileSearch
                    size={44}
                    className="text-red-600"
                />

            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-800">
                No Emergency Reports Found
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-500">

                You haven't submitted any emergency reports yet.
                If you're facing an emergency, report it now so
                rescue teams can respond quickly.

            </p>

            <Link
                href="/victim/report-emergency"
                className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-red-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-red-700
                "
            >

                <Plus size={20} />

                Report Emergency

            </Link>

        </div>

    );
};

export default EmptyState;