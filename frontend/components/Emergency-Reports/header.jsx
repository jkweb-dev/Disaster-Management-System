"use client";

import { FileWarning } from "lucide-react";

const ReportsHeader = () => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">

                    <FileWarning size={30} />

                </div>

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        My Emergency Reports
                    </h1>

                    <p className="mt-1 text-gray-500">
                        Track every emergency report you've submitted.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default ReportsHeader;